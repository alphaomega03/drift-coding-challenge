import axios from "axios"

export const getUser = (address) => {
  return axios.get(
    `/api/user/${address}`,
  )
}

export const deleteUser = (address) => {
  return axios.delete(
    `api/user/delete/${address}`
  )
}