export const guest = ({ next, store }) => {
  if (store.getToken) {
    const routeName = JSON.parse(window.localStorage.getItem('brige-africa'))
    return next({
      name: routeName ? routeName : 'auth:home'
    })
  }
  return next()
} //[guest]

export const auth = ({ next, store }) => {
  if (!store.getToken) {
    return next({
      name: 'auth:login'
    })
  }
  return next()
} //[auth]

export default function middlewarePipeline (context, middleware, index) {
  const nextMiddleware = middleware[index]
  if (!nextMiddleware) {
    return context.next
  }
  return () => {
    const nextPipeline = middlewarePipeline(context, middleware, index + 1)
    nextMiddleware({
      ...context,
      next: nextPipeline
    })
  }
} //[middlewarePipeline]