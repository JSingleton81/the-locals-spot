import cookie from "cookie";


export const getCookies = () => {
  const cookies = cookie.parse(document.cookie)
  return(cookies)
}

export const createCookie = (name, value, options) => {
  document.cookie = cookie.serialize(
    name, value, options ? options : {maxAge:60 * 60 * 24 *7}
  )
}

export const eatAllCookies = () => {
  Object.keys(getCookies()).forEach((key) => {
    document.cookie = cookie.serialize(key,"", {maxAge:0})
  })
}