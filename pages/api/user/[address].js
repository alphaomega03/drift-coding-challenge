import axios from "axios"
import { API_SERVER_BASE_URL } from "../../../consts"

const config = {
  headers: {
    apiKey: process.env.apiKey
  }
}

export default async function handler(req, res) {
  const { address } = req.query


  const user = (await axios.get(`${API_SERVER_BASE_URL}/user/${address}`, config)).data

  res.send(user)
}