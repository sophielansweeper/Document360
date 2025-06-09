![Microsoft Bot Framework](./assets/ms-bot-framework.png#connector-icon)
Manage conversational interactions across platforms using Microsoft Bot Framework

## Connections

### OAuth 2.0 Client Credentials

OAuth 2.0 Client Credentials Connectivity for Microsoft Bot Framework

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                                                                            | Default                                                              |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Token URL           | The OAuth 2.0 Token URL for Microsoft Bot Framework. Use the default for Multi-Tenant bots and `https://login.microsoftonline.com/<tenant id>/oauth2/v2.0/token` for Single-Tenant. | https://login.microsoftonline.com/botframework.com/oauth2/v2.0/token |
| Client ID           |                                                                                                                                                                                     |                                                                      |
| Client secret value |                                                                                                                                                                                     |                                                                      |

## Triggers

### Bot Framework Trigger

Trigger that validates incoming requests as coming from Bot Framework

| Input            | Comments                                                       | Default |
| ---------------- | -------------------------------------------------------------- | ------- |
| Microsoft App ID | Microsoft App ID found in the Azure Bot's Configuration blade. |         |

## Actions

### Create Conversation

Create a new Conversation

| Input              | Comments                                                                                                                 | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection         |                                                                                                                          |         |
| Service URL        | The Service URL (also referred to as Base URI) to send requests to the Bot Framework. Varies per bot channel and region. |         |
| API Version        | Version of the API to call                                                                                               | 3       |
| Bot ID             | Identifier of the Bot receiving requests                                                                                 |         |
| Channel Account ID | Identifier of the Channel Account to use (refers to conversation members; bots and users)                                |         |
| Tenant ID          | Tenant ID of the Channel Account ID                                                                                      |         |

### Get Conversation Members

Get list of members of the conversation

| Input           | Comments                                                                                                                 | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      |                                                                                                                          |         |
| Service URL     | The Service URL (also referred to as Base URI) to send requests to the Bot Framework. Varies per bot channel and region. |         |
| API Version     | Version of the API to call                                                                                               | 3       |
| Conversation ID | Identifier of the Conversation to use (refers to a channel, team, direct message)                                        |         |

### Raw Request

Issue a raw HTTP request

| Input                   | Comments                                                                                                                            | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                     |         |
| URL                     | This is the URL to call.                                                                                                            |         |
| Method                  | The HTTP method to use.                                                                                                             |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                           |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                    |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2. |         |
| Header                  | A list of headers to send with the request.                                                                                         |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                            | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                 |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                          | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                     | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                           | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                    | false   |

### Send Adaptive Card Message

Send an adaptive card message

| Input           | Comments                                                                                                                 | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      |                                                                                                                          |         |
| Service URL     | The Service URL (also referred to as Base URI) to send requests to the Bot Framework. Varies per bot channel and region. |         |
| API Version     | Version of the API to call                                                                                               | 3       |
| Conversation ID | Identifier of the Conversation to use (refers to a channel, team, direct message)                                        |         |
| Card Payload    | Adaptive Card payload to send                                                                                            |         |

### Send Message

Create a message to a Conversation

| Input           | Comments                                                                                                                 | Default  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ | -------- |
| Connection      |                                                                                                                          |          |
| Service URL     | The Service URL (also referred to as Base URI) to send requests to the Bot Framework. Varies per bot channel and region. |          |
| API Version     | Version of the API to call                                                                                               | 3        |
| Conversation ID | Identifier of the Conversation to use (refers to a channel, team, direct message)                                        |          |
| Text            | Text of the message to send                                                                                              |          |
| Text Format     | Text Format of the message to send                                                                                       | markdown |
