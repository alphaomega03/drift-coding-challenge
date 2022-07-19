export default async function handler (req, res) {
  const { address } = req.query

  const OAuthScope = ['identify'].join(" ")
  const OAuthData = new URLSearchParams({
    response_type: "code",
    client_id: process.env.discordClientId,
    redirect_uri: `${process.env.domain}/api/auth/callback`,
    scope: OAuthScope,
    state: address
  })
  res.redirect(`https://discordapp.com/oauth2/authorize?${OAuthData}`)
}
