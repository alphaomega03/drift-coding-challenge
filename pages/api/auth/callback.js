import axios from 'axios'
import { API_SERVER_BASE_URL } from '../../../consts'


const OAuthScope = ['identify'].join(" ")


export default async function handler (req, res) {

  if (!req.query.code) {
    res.status(404).redirect("/404")
    return
  }

  try {
    const { data } = await axios.post(
      "https://discord.com/api/oauth2/token",
      new URLSearchParams({
        client_id: process.env.discordClientId,
        client_secret: process.env.discordClientSecret,
        grant_type: "authorization_code",
        code: req.query.code,
        redirect_uri: `${process.env.domain}/api/auth/callback`,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json",
        },
      }
    )

    if (data.scope !== OAuthScope) {
      return res
        .status(403)
        .send(
          `Expected scope "${OAuthScope}" but received scope "${data.scope}"`
        );
    }

    const { data: user } = await axios.get(
      "https://discordapp.com/api/v9/users/@me",
      {
        headers: {
          Authorization: `Bearer ${data.access_token}`,
        },
      }
    )

    console.log('user', user)


    if (user.email === null) {
      return res
        .status(400)
        .send("Please verify your Discord's account E-mail before logging in.");
    }

    if(req.query.state === null) {
      return res
        .status(400)
        .send("No Solana address was passed")
    }

    const config = {
      headers: {
        apiKey: process.env.apiKey
      }
    }

    await axios.post(
      `${API_SERVER_BASE_URL}/user`,
      {
        email: user.email,
        discordUser: user,
        address: req.query.state,
        discordUsername: `${user.username}#${user.discriminator}`,
        timestamp: Date.now(),
        avatar: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`
      },
      config
    )
    res.redirect('/')
  } catch (e) {
    console.error(e)
    res.redirect('/')
    return
  }
}
