


export const makeLocalProduct = (action) => {

  const make = () => {

  }

  return () => {
      return {
        api: () => action(),
        callback: () => make(),

      }
  }
}


export const makeGlobalProduct = (action) => {

  const make = () => {

  }

  return () => {
      return {
        api: () => action(),
        callback: () => make(),

      }
  }
}

export const makeByLocalisation = (localProduct,  globalProduct) => {
  
  
  return (isLocal) => {

    const pack = () => isLocal ? localProduct() : globalProduct()

    const {api, callback} = pack()

    return {
      api: () => api(),
      callback: () => callback()
    }
  }
}