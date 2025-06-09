---
title: OAuth 2.0 Connections
description: Connect to an app that uses OAuth 2.0
---

## What is OAuth 2.0?

[OAuth 2.0](https://oauth.net/2/) is a special type of connection that allows you to grant Lansweeper access to your data in third-party apps.
Rather than giving Lansweeper your username and password for a third-party app, you can use OAuth 2.0 to authorize Lansweeper to access your data in that app.
This is useful for connecting to apps like [Salesforce](./connectors/salesforce.md), [Hubspot](./connectors/hubspot.md), [Slack](./connectors/slack.md), and many others that support OAuth 2.0.

You've probably come across OAuth 2.0 at some point - any time you click "Log in with my Google Account" or "Connect my Dropbox" on a website, that website leverages OAuth 2.0 to fetch information (your email address, files, etc) on your behalf.
You don't enter your Google or Dropbox credentials into the website.
Instead, you enter your credentials on a Google, Dropbox, etc. page and the OAuth provider generates a unique code that grants the website a set of your permissions.

## OAuth 2.0 grant types

The [OAuth 2.0 framework](https://oauth.net/2/) supports several **grant types**, two of which are common integrations:

1. Most common is the [Authorization Code grant type](#oauth-20-authorization-code).
   When you configure a connector, you click a "Connect to [App Name]" button.
   After logging in to the external app and consenting to give Lansweeper permissions to your account, you'll return here with an **auth code** which we'll use to access your data.
2. The [Client Credentials grant type](#oauth-20-client-credentials) is also common in integrations.
   Sometimes called the **machine to machine** (M2M) grant type, this process is a little more involved.
   Typically, you log in to your third-party app, generate a **Client ID** / **Client Secret** key pair, and enter your key into your Workflow.
   We exchange that key pair for an access token for the third-party app.

### OAuth 2.0 authorization code

At a high level, the OAuth 2.0 Authorization Code flow works like this:

1. You will click a "Connect to [App Name]" button in your Workflow.
   We send you to the third-party app's "consent screen" with our client ID and a list of permissions we want to access. The client ID is a unique identifier for Lansweeper in the third-party app - it's how the third-party app knows to say "do you want to give Lansweeper access to your data?".
1. You log in to the third-party app and consent to give us access to your data.
1. The third-party app redirects you back to Lansweeper with an **authorization code**.
1. We exchange the authorization code for an **access token** and a **refresh token** and use the access token to access your data in the third-party app.

#### Configuring your own OAuth 2.0 app

We provide client ID and client secret values for many common OAuth 2.0 connectors.
However, if you are prompted to enter a client ID and client secret, you can usually find these values in the third-party app's developer console or API settings.

When configuring your own OAuth 2.0 app, you will need to set the **redirect URI** (sometimes called a callback URL) to our OAuth 2.0 callback URL: `https://oauth2.integrations.acme.com/callback`.

### OAuth 2.0 client credentials

The OAuth 2.0 **Client Credentials** grant type is sometimes called the Machine-to-Machine (M2M) grant type, and allows your application to communicate with a third-party directly.

The **Client Credentials** flow is different from the [Authorization Code](#oauth-20-authorization-code) flow in a couple of key ways:

1. You will not walk through a consent screen in the third-party app.
   Rather, you will log in to the third-party app and generate your own client ID / secret key pair, and explicitly grant permissions.
2. Key pairs are generally not associated with a specific user.
   Instead, the key pairs have permissions to access certain resources in your account.

To configure a client credentials connection, generate a **Client ID** and **Client Secret** in the third-party app's developer console or API settings, and enter those values into your Workflow.
