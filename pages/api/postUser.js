import axios from "axios"
import { API_SERVER_BASE_URL } from "../../consts"

const config = {
  headers: {
    apiKey: process.env.apiKey
  }
}

export default async function handler(req, res) {
  await axios.post(
    `${API_SERVER_BASE_URL}/user`,
    req.body,
    config
  )
  res.status(200).json({ name: `User submitted successfully` })
}