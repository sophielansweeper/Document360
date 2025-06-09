![Slack](./assets/slack.png#connector-icon)
Send messages to Slack channels and users

## Connections

### Slack OAuth 2.0

Authenticate requests to Slack using values obtained from the developer console.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input          | Comments                                                                                                                                                                                                                                                                               | Default                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Authorize URL  | The OAuth 2.0 Authorization URL for Slack. If you want to request access to the API on behalf of a User, append a 'user_scope' query parameter to the end of the Authorize URL: https://slack.com/oauth/v2/authorize?user_scope=chat:write,channels:read,groups:read,im:read,mpim:read | https://slack.com/oauth/v2/authorize                                                          |
| Token URL      | The OAuth 2.0 Token URL for Slack                                                                                                                                                                                                                                                      | https://slack.com/api/oauth.v2.access                                                         |
| Revoke URL     | The OAuth 2.0 Revocation URL for Slack                                                                                                                                                                                                                                                 | https://slack.com/api/auth.revoke                                                             |
| Scopes (Bot)   | A space-delimited set of one or more scopes to get the Bot token. If you want to access the API as a User, you must append a 'user_scope' query parameter to the end of the Authorize URL and set the 'Is User' flag to true.                                                          | chat:write chat:write.public chat:write.customize channels:read groups:read im:read mpim:read |
| Client ID      |                                                                                                                                                                                                                                                                                        |                                                                                               |
| Client Secret  |                                                                                                                                                                                                                                                                                        |                                                                                               |
| Signing Secret |                                                                                                                                                                                                                                                                                        |                                                                                               |
| Is User        | Flip the flag to true if you want to access the API as a User. If flipped you must also provide a 'user_scope' query parameter to the end of the Authorize URL. Leaving the flag false will grant you a Bot token instead.                                                             | false                                                                                         |

### Slack Webhook URL

Authenticate requests to Slack using a Webhook URL.

| Input       | Comments                                                                                                           | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Webhook URL | The Slack webhook URL. Instructions for generating a Slack webhook are available on the Slack component docs page. |         |

## Triggers

### App Webhook

Trigger for handling slash command and modal webhooks from Slack

| Input         | Comments | Default    |
| ------------- | -------- | ---------- |
| Response Body |          |            |
| Content Type  |          | text/plain |

### Events API Webhook

Receive and validate webhook requests from Slack's Events API for webhooks you configure.

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection | The connection to use |         |

## Actions

### Archive Conversation

Archive an existing conversation

| Input              | Comments                                    | Default |
| ------------------ | ------------------------------------------- | ------- |
| Channel Name or ID | The name or static ID of the Slack channel. |         |
| Connection         | The connection to use                       |         |

### Close Conversation

Close an existing conversation

| Input             | Comments                            | Default |
| ----------------- | ----------------------------------- | ------- |
| Conversation Name | The name of the Slack conversation. |         |
| Connection        | The connection to use               |         |

### Conversation Exists

Returns true if the conversation already exists

| Input              | Comments                                    | Default |
| ------------------ | ------------------------------------------- | ------- |
| Channel Name or ID | The name or static ID of the Slack channel. |         |
| Connection         | The connection to use                       |         |

### Create Conversation

Create a new conversation

| Input             | Comments                                                       | Default |
| ----------------- | -------------------------------------------------------------- | ------- |
| Conversation Name | The name of the Slack conversation.                            |         |
| Is Private        | This flag will determine if the Slack conversation is private. | false   |
| Team Id           | The Id of the Slack team.                                      |         |
| Connection        | The connection to use                                          |         |

### Delete a pending scheduled message

Delete the content and metadata of a pending scheduled message from a queue

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Message Id | A unique identifier of a message or thread to reply to (thread_ts) |         |
| Channel ID | The static ID of the Slack channel.                                |         |
| Connection | The connection to use                                              |         |

### Delete message

Delete the content and metadata of an existing message

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Message Id | A unique identifier of a message or thread to reply to (thread_ts) |         |
| Channel ID | The static ID of the Slack channel.                                |         |
| Connection | The connection to use                                              |         |

### Get Conversation History

Get the history of a conversation

| Input                | Comments                                                                                                   | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| Channel Name or ID   | The name or static ID of the Slack channel.                                                                |         |
| Fetch All            | Make the action handle pagination, returning all results.                                                  | false   |
| Limit                | Provide a numerical limit to the amount of results returned.                                               |         |
| Cursor               | Provide a cursor pointing to the page you would like to access                                             |         |
| Include All Metadata |                                                                                                            | false   |
| Inclusive            | Include messages with oldest or latest timestamps in results. Ignored unless either timestamp is specified | false   |
| Latest               | Only messages before this Unix timestamp will be included in results. Default is current time.             |         |
| Oldest               | Only messages after this Unix timestamp will be included in results                                        |         |
| Connection           | The connection to use                                                                                      |         |

### Get User By Email

Get a user's information by email

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Email      | Provide a string value for the email address of the user. |         |
| Connection | The connection to use                                     |         |

### Get User By ID

Get a user's information by ID

| Input      | Comments                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ------- |
| User Id    | Provide a string value for the unique identifier of the user you want to send the message to. |         |
| Connection | The connection to use                                                                         |         |

### Invite User To Conversation

Invite a user to an existing conversation

| Input              | Comments                                                                                      | Default |
| ------------------ | --------------------------------------------------------------------------------------------- | ------- |
| Channel Name or ID | The name or static ID of the Slack channel.                                                   |         |
| User Id            | Provide a string value for the unique identifier of the user you want to send the message to. |         |
| Connection         | The connection to use                                                                         |         |

### Leave Conversations

Leave an existing conversation

| Input              | Comments                                    | Default |
| ------------------ | ------------------------------------------- | ------- |
| Channel Name or ID | The name or static ID of the Slack channel. |         |
| Connection         | The connection to use                       |         |

### List Conversation Members

List all members of a conversation

| Input              | Comments                                                       | Default |
| ------------------ | -------------------------------------------------------------- | ------- |
| Channel Name or ID | The name or static ID of the Slack channel.                    |         |
| Fetch All          | Make the action handle pagination, returning all results.      | false   |
| Limit              | Provide a numerical limit to the amount of results returned.   |         |
| Cursor             | Provide a cursor pointing to the page you would like to access |         |
| Connection         | The connection to use                                          |         |

### List Conversations

List all conversations

| Input                                   | Comments                                                                           | Default |
| --------------------------------------- | ---------------------------------------------------------------------------------- | ------- |
| Team Id                                 | The Id of the Slack team.                                                          |         |
| Limit                                   | Provide a numerical limit to the amount of results returned.                       |         |
| Cursor                                  | Provide a cursor pointing to the page you would like to access                     |         |
| Fetch All                               | Make the action handle pagination, returning all results.                          | false   |
| Exclude Archived                        | This flag will determine if archived results will be excluded from the result set. | false   |
| Connection                              | The connection to use                                                              |         |
| Include public channels?                |                                                                                    | true    |
| Include private channels?               |                                                                                    | false   |
| Include multi-party IM (mpim) channels? |                                                                                    | false   |
| Include IM channels?                    |                                                                                    | false   |

### List Files

List all available files

| Input      | Comments                                                       | Default |
| ---------- | -------------------------------------------------------------- | ------- |
| Connection | The connection to use                                          |         |
| Fetch All  | Make the action handle pagination, returning all results.      | false   |
| Cursor     | Provide a cursor pointing to the page you would like to access |         |

### List Scheduled Messages

List all scheduled messages

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection | The connection to use |         |

### List Users

List Users

| Input      | Comments                                                       | Default |
| ---------- | -------------------------------------------------------------- | ------- |
| Fetch All  | Make the action handle pagination, returning all results.      | false   |
| Limit      | Provide a numerical limit to the amount of results returned.   |         |
| Cursor     | Provide a cursor pointing to the page you would like to access |         |
| Team Id    | The Id of the Slack team.                                      |         |
| Connection | The connection to use                                          |         |

### List Users Conversations

List Users Conversations

| Input      | Comments                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ------- |
| User Id    | Provide a string value for the unique identifier of the user you want to send the message to. |         |
| Fetch All  | Make the action handle pagination, returning all results.                                     | false   |
| Limit      | Provide a numerical limit to the amount of results returned.                                  |         |
| Cursor     | Provide a cursor pointing to the page you would like to access                                |         |
| Team Id    | The Id of the Slack team.                                                                     |         |
| Connection | The connection to use                                                                         |         |

### Open Views

Open a view for a user.

| Input      | Comments                                                                                             | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| View       | A view payload (https://api.slack.com/reference/surfaces/views). This must be a JSON-encoded string. | <code>{<br /> "type": "modal",<br /> "title": {<br /> "type": "plain*text",<br /> "text": "Modal title"<br /> },<br /> "blocks": [<br /> {<br /> "type": "section",<br /> "text": {<br /> "type": "mrkdwn",<br /> "text": "It's Block Kit...but \_in a modal*"<br /> },<br /> "block_id": "section1",<br /> "accessory": {<br /> "type": "button",<br /> "text": {<br /> "type": "plain_text",<br /> "text": "Click me"<br /> },<br /> "action_id": "button_abc",<br /> "value": "Button value",<br /> "style": "danger"<br /> }<br /> },<br /> {<br /> "type": "input",<br /> "label": {<br /> "type": "plain_text",<br /> "text": "Input label"<br /> },<br /> "element": {<br /> "type": "plain_text_input",<br /> "action_id": "input1",<br /> "placeholder": {<br /> "type": "plain_text",<br /> "text": "Type in here"<br /> },<br /> "multiline": false<br /> },<br /> "optional": false<br /> }<br /> ],<br /> "close": {<br /> "type": "plain_text",<br /> "text": "Cancel"<br /> },<br /> "submit": {<br /> "type": "plain_text",<br /> "text": "Save"<br /> },<br /> "private_metadata": "Shhhhhhhh",<br /> "callback_id": "view_identifier_12"<br />}</code> |
| Trigger ID | Exchange a trigger to post to the user.                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Connection | The connection to use                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Post Block Message

Post a message to a slack channel

| Input              | Comments                                                                                                                                                                     | Default                                                                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Blocks             | A JSON array containing blocks (objects) that make up the desired message. Use Slack's Block Kit Builder (https://app.slack.com/block-kit-builder/) to build block messages. | <code>{<br /> "blocks": [<br /> {<br /> "type": "section",<br /> "text": {<br /> "type": "plain_text",<br /> "text": "Hello world"<br /> }<br /> }<br /> ]<br />}</code> |
| Alt Message        | This message will override if your block cannot be sent                                                                                                                      |                                                                                                                                                                          |
| Channel Name or ID | The name or static ID of the Slack channel.                                                                                                                                  |                                                                                                                                                                          |
| Bot Username       | The username of the bot the message will be sent from. This requires the 'chat:write.customize' scope.                                                                       |                                                                                                                                                                          |
| Connection         | The connection to use                                                                                                                                                        |                                                                                                                                                                          |
| Message Id         | A unique identifier of a message or thread to reply to (thread_ts)                                                                                                           |                                                                                                                                                                          |

### Post Ephemeral Message

Post an ephemeral message to a user or channel

| Input              | Comments                                                                                               | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------ | ------- |
| Channel Name or ID | The name or static ID of the Slack channel.                                                            |         |
| User Id            | Provide a string value for the unique identifier of the user you want to send the message to.          |         |
| Bot Username       | The username of the bot the message will be sent from. This requires the 'chat:write.customize' scope. |         |
| Message            | The message to send the Slack channel.                                                                 |         |
| Connection         | The connection to use                                                                                  |         |

### Post Message

Post a message to a slack channel

| Input              | Comments                                                                                               | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------ | ------- |
| Message            | The message to send the Slack channel.                                                                 |         |
| Channel Name or ID | The name or static ID of the Slack channel.                                                            |         |
| Bot Username       | The username of the bot the message will be sent from. This requires the 'chat:write.customize' scope. |         |
| Connection         | The connection to use                                                                                  |         |
| Message Id         | A unique identifier of a message or thread to reply to (thread_ts)                                     |         |

### Publish View

Publish a static view for a User.

| Input      | Comments                                                                                             | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| View       | A view payload (https://api.slack.com/reference/surfaces/views). This must be a JSON-encoded string. | <code>{<br /> "type": "modal",<br /> "title": {<br /> "type": "plain*text",<br /> "text": "Modal title"<br /> },<br /> "blocks": [<br /> {<br /> "type": "section",<br /> "text": {<br /> "type": "mrkdwn",<br /> "text": "It's Block Kit...but \_in a modal*"<br /> },<br /> "block_id": "section1",<br /> "accessory": {<br /> "type": "button",<br /> "text": {<br /> "type": "plain_text",<br /> "text": "Click me"<br /> },<br /> "action_id": "button_abc",<br /> "value": "Button value",<br /> "style": "danger"<br /> }<br /> },<br /> {<br /> "type": "input",<br /> "label": {<br /> "type": "plain_text",<br /> "text": "Input label"<br /> },<br /> "element": {<br /> "type": "plain_text_input",<br /> "action_id": "input1",<br /> "placeholder": {<br /> "type": "plain_text",<br /> "text": "Type in here"<br /> },<br /> "multiline": false<br /> },<br /> "optional": false<br /> }<br /> ],<br /> "close": {<br /> "type": "plain_text",<br /> "text": "Cancel"<br /> },<br /> "submit": {<br /> "type": "plain_text",<br /> "text": "Save"<br /> },<br /> "private_metadata": "Shhhhhhhh",<br /> "callback_id": "view_identifier_12"<br />}</code> |
| User Id    | Provide a string value for the unique identifier of the user you want to send the message to.        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Connection | The connection to use                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Push Views

Push a view onto the stack of a root view.

| Input      | Comments                                                                                             | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| View       | A view payload (https://api.slack.com/reference/surfaces/views). This must be a JSON-encoded string. | <code>{<br /> "type": "modal",<br /> "title": {<br /> "type": "plain*text",<br /> "text": "Modal title"<br /> },<br /> "blocks": [<br /> {<br /> "type": "section",<br /> "text": {<br /> "type": "mrkdwn",<br /> "text": "It's Block Kit...but \_in a modal*"<br /> },<br /> "block_id": "section1",<br /> "accessory": {<br /> "type": "button",<br /> "text": {<br /> "type": "plain_text",<br /> "text": "Click me"<br /> },<br /> "action_id": "button_abc",<br /> "value": "Button value",<br /> "style": "danger"<br /> }<br /> },<br /> {<br /> "type": "input",<br /> "label": {<br /> "type": "plain_text",<br /> "text": "Input label"<br /> },<br /> "element": {<br /> "type": "plain_text_input",<br /> "action_id": "input1",<br /> "placeholder": {<br /> "type": "plain_text",<br /> "text": "Type in here"<br /> },<br /> "multiline": false<br /> },<br /> "optional": false<br /> }<br /> ],<br /> "close": {<br /> "type": "plain_text",<br /> "text": "Cancel"<br /> },<br /> "submit": {<br /> "type": "plain_text",<br /> "text": "Save"<br /> },<br /> "private_metadata": "Shhhhhhhh",<br /> "callback_id": "view_identifier_12"<br />}</code> |
| Trigger ID | Exchange a trigger to post to the user.                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Connection | The connection to use                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Raw Request

Send raw HTTP request to Slack

| Input                   | Comments                                                                                                                                                                                          | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The connection to use                                                                                                                                                                             |         |
| URL                     | Input the path only (/team.info), The base URL is already included (https://slack.com/api). For example, to connect to https://slack.com/api/team.info, only /team.info is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                           |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                         |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                              |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                  |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                            |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                               |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                       |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                          | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                               |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                               | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.  | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                               | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                     | false   |

### Rename Conversation

Rename an existing conversation

| Input                 | Comments                            | Default |
| --------------------- | ----------------------------------- | ------- |
| Conversation Name     | The name of the Slack conversation. |         |
| New Conversation Name | The name of the Slack conversation. |         |
| Connection            | The connection to use               |         |

### Search All

Searches for messages and files matching a query.

| Input          | Comments                                                                                                     | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Query          | Search query. May contains booleans, etc.                                                                    |         |
| Count          | Number of items to return per page.                                                                          |         |
| Sort           | The method to sort the results. For example, member_count will sort by the number of members in the channel. | score   |
| Sort Direction | The direction to sort the results. For example, desc will sort the results in descending order.              | desc    |
| Page           | Page number of results to return.                                                                            | 1       |
| Highlight      | Pass a value of true to enable query highlight markers.                                                      | false   |
| Team Id        | Encoded team id to search in, required if org token is used                                                  |         |
| Connection     | The connection to use                                                                                        |         |

### Search Files

Searches for files matching a query.

| Input          | Comments                                                                                                     | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Query          | Search query. May contains booleans, etc.                                                                    |         |
| Count          | Number of items to return per page.                                                                          |         |
| Highlight      | Pass a value of true to enable query highlight markers.                                                      | false   |
| Page           | Page number of results to return.                                                                            | 1       |
| Sort           | The method to sort the results. For example, member_count will sort by the number of members in the channel. | score   |
| Sort Direction | The direction to sort the results. For example, desc will sort the results in descending order.              | desc    |
| Team Id        | Encoded team id to search in, required if org token is used                                                  |         |
| Connection     | The connection to use                                                                                        |         |

### Search Messages

Searches for messages matching a query.

| Input          | Comments                                                                                                     | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Query          | Search query. May contains booleans, etc.                                                                    |         |
| Count          | Number of items to return per page.                                                                          |         |
| Highlight      | Pass a value of true to enable query highlight markers.                                                      | false   |
| Page           | Page number of results to return.                                                                            | 1       |
| Sort           | The method to sort the results. For example, member_count will sort by the number of members in the channel. | score   |
| Sort Direction | The direction to sort the results. For example, desc will sort the results in descending order.              | desc    |
| Team Id        | Encoded team id to search in, required if org token is used                                                  |         |
| Connection     | The connection to use                                                                                        |         |

### Set Conversation Purpose

Set the purpose of an existing conversation

| Input                | Comments                                                          | Default |
| -------------------- | ----------------------------------------------------------------- | ------- |
| Channel Name or ID   | The name or static ID of the Slack channel.                       |         |
| Connection           | The connection to use                                             |         |
| Conversation Purpose | Provide a string value for the purpose of the given conversation. |         |

### Set Conversation Topic

Set the purpose of an existing conversation

| Input              | Comments                                                                                      | Default |
| ------------------ | --------------------------------------------------------------------------------------------- | ------- |
| Connection         | The connection to use                                                                         |         |
| Channel Name or ID | The name or static ID of the Slack channel.                                                   |         |
| User Id            | Provide a string value for the unique identifier of the user you want to send the message to. |         |
| Conversation Topic | Provide a string value for the topic of the given conversation.                               |         |

### Slack Block Message From Webhook

Post a block formatted message to a Slack channel from a webhook URL

| Input       | Comments                                                                                                                                                                     | Default                                                                                                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection  | The connection to use                                                                                                                                                        |                                                                                                                                                                          |
| Alt Message | This message will override if your block cannot be sent                                                                                                                      |                                                                                                                                                                          |
| Blocks      | A JSON array containing blocks (objects) that make up the desired message. Use Slack's Block Kit Builder (https://app.slack.com/block-kit-builder/) to build block messages. | <code>{<br /> "blocks": [<br /> {<br /> "type": "section",<br /> "text": {<br /> "type": "plain_text",<br /> "text": "Hello world"<br /> }<br /> }<br /> ]<br />}</code> |

### Slack Message From Webhook

Post a message to a Slack channel from a webhook URL

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The connection to use                  |         |
| Message    | The message to send the Slack channel. |         |

### Update Message

Update the contents of an existing message

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Message    | The message to send the Slack channel.                             |         |
| Message Id | A unique identifier of a message or thread to reply to (thread_ts) |         |
| Channel ID | The static ID of the Slack channel.                                |         |
| Connection | The connection to use                                              |         |

### Update Views

Update an existing view.

| Input       | Comments                                                                                             | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| View        | A view payload (https://api.slack.com/reference/surfaces/views). This must be a JSON-encoded string. | <code>{<br /> "type": "modal",<br /> "title": {<br /> "type": "plain*text",<br /> "text": "Modal title"<br /> },<br /> "blocks": [<br /> {<br /> "type": "section",<br /> "text": {<br /> "type": "mrkdwn",<br /> "text": "It's Block Kit...but \_in a modal*"<br /> },<br /> "block_id": "section1",<br /> "accessory": {<br /> "type": "button",<br /> "text": {<br /> "type": "plain_text",<br /> "text": "Click me"<br /> },<br /> "action_id": "button_abc",<br /> "value": "Button value",<br /> "style": "danger"<br /> }<br /> },<br /> {<br /> "type": "input",<br /> "label": {<br /> "type": "plain_text",<br /> "text": "Input label"<br /> },<br /> "element": {<br /> "type": "plain_text_input",<br /> "action_id": "input1",<br /> "placeholder": {<br /> "type": "plain_text",<br /> "text": "Type in here"<br /> },<br /> "multiline": false<br /> },<br /> "optional": false<br /> }<br /> ],<br /> "close": {<br /> "type": "plain_text",<br /> "text": "Cancel"<br /> },<br /> "submit": {<br /> "type": "plain_text",<br /> "text": "Save"<br /> },<br /> "private_metadata": "Shhhhhhhh",<br /> "callback_id": "view_identifier_12"<br />}</code> |
| View ID     | A unique identifier of the view to be updated. Either view_id or external_id is required.            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| External ID | A unique identifier of the view to be updated. Either view_id or external_id is required.            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Connection  | The connection to use                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Upload File

Upload a new file to a slack conversation

| Input           | Comments                                                                                                                 | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      | The connection to use                                                                                                    |         |
| File Content    | Provide the data for a file to be uploaded                                                                               |         |
| File Name       | Provide a name for the file.                                                                                             |         |
| File Title      | The title of the file as it will appear in the channel                                                                   |         |
| Channels        | Provide a comma separated list of channel IDs that the file will be shared in.                                           |         |
| Initial Comment | The message text introducing the file in the specified channels when uploaded                                            |         |
| Thread Reply    | Provide another message's ts value to upload this file as a reply. Never use a reply's ts value, use the parent instead. |         |
