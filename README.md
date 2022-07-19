# Drift Protocol Coding Challenge UI 
## Description 
This is a React/NextJS application that allows users to link their Solana wallets to their Discord.  Users will connect to their wallet provider of choice, sign a message to verify ownership of their wallet, and link their Discord their username using OAuth2.  This association is saved in a Firestore database via an API Server that's hosted on GCP as a Cloud Run instance.  Users also have the option of unlinking if they choose, which will delete the relation in Firestore as well.  
## How to run
Populate the `env` property the `next.config.js` config with the following 1Password credentials: [
  1Password credentials](https://share.1password.com/s#FuXbw-BdO1eCdPMQKs5mSui5KCh-ZITtFkWtbqxwj0w)

The `env` property should have the following structure: 
```bash
{
    apiKey: '',
    discordClientSecret: '',
    discordClientId: '',
    domain: ''
  }
}
```

You'll then be able to run the application using the following commands

```bash
yarn install
yarn run dev
```

You can also view the application in Vercel: 
https://drift-coding-challenge.vercel.app/
