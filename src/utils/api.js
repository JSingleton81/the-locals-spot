import { createCookie, getCookies } from "./cookies"

export const fetchUserWithClientToken = async () => {
  const response = await fetch(process.env.REACT_APP_API_URL+"/get-profile",{
    method:"GET",
    headers:{
     "Content-Type":"application/json",
     Authorization: "Bearer " + getCookies().client_token
    },
  })
  const results = await response.json()
  createCookie("id_token", results.token)
  return results
}

export const revalidateUserWithIdToken = async () => {
  const response = await fetch(process.env.REACT_APP_API_URL+"/revalidate-user",{
    method:"GET",
    headers:{
     "Content-Type":"application/json",
     Authorization: "Bearer " + getCookies().id_token
    },
  })
  const results = await response.json()
  createCookie("id_token", results.token)
  return results
}


export const addBusiness = async (body) => {
  console.log(body, "this is the body")
  const response = await fetch(process.env.REACT_APP_API_URL+"/add-business",{
    method:"POST",
    headers:{
     "Content-Type":"application/json",
     Authorization: "Bearer " + getCookies().id_token,
    },
    body: JSON.stringify(body)
  })
  const results = await response.json()
  console.log(results)
  return results
}

export const getUserBusinessList = async () => {
  const response = await fetch(process.env.REACT_APP_API_URL+"/get-user-business-list",{
    method:"GET",
    headers:{
     "Content-Type":"application/json",
     Authorization: "Bearer " + getCookies().id_token,
    },
  })
  const results = await response.json()
  console.log(results)
  return results
}

export const getBusinessList = async () => {
  const response = await fetch(process.env.REACT_APP_API_URL+"/get-business-list",{
    method:"GET",
    headers:{
     "Content-Type":"application/json",
    },
  })
  const results = await response.json()
  console.log(results)
  return results
}