
export const buildLogin = (entity, api) => {

  return (data) => {
    return {
      api: () => api(data)
    }
  }
}


export const buildRegister = (entity, api) => {

  return (data) => {
    return {
      api: () => api(data)
    }
  }
}