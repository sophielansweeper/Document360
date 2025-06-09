![IMAP](./assets/imap.png#connector-icon)
Interact with your IMAP email account

## Connections

### IMAP Connection

Provide the details of your IMAP server.

| Input               | Comments                                                                                   | Default |
| ------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Host                | Provide the host address for the desired IMAP server.                                      |         |
| Port                | Provide the port for the desired IMAP server.                                              | 993     |
| Secure              | Determines if the connection is secure.                                                    | true    |
| Username            | Provide a valid username or email.                                                         |         |
| Password            | Provide the password for the given user. This value is required if secured is set to true. |         |
| Minimum TLS Version | Provide a valid TLS version to be used in the connection.                                  | TLSv1.1 |
| Maximum TLS Version | Provide a valid TLS version to be used in the connection.                                  | TLSv1.3 |
| Min DH Size         | Minimum size of bits to accept in a TLS connection                                         | 1024    |

## Actions

### Add Flags

Add new flags to an existing message

| Input      | Comments                                                                                | Default |
| ---------- | --------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                         |         |
| Mailbox    | Provide a string value for the name of the mailbox                                      |         |
| Range      | Provide a range of messages. Alternatively you can specify \* to get the latest message |         |
| Flags      | For each item, provide a string value to be added to an existing message.               |         |

### Append Message

Appends a new message to an existing mailbox

| Input           | Comments                                           | Default |
| --------------- | -------------------------------------------------- | ------- |
| Connection      |                                                    |         |
| Mailbox         | Provide a string value for the name of the mailbox |         |
| Path            | Mailbox path to upload the message to              |         |
| Message Content | Mailbox path to upload the message to              |         |

### Copy Message

Copies a message from one mailbox to another.

| Input      | Comments                                                                                | Default |
| ---------- | --------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                         |         |
| Mailbox    | Provide a string value for the name of the mailbox                                      |         |
| Range      | Provide a range of messages. Alternatively you can specify \* to get the latest message |         |
| New Path   | Mailbox path to upload the message to                                                   |         |

### Create Mailbox

Creates a new mailbox folder and sets up subscription for the created mailbox

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Path       | Mailbox path to upload the message to |         |

### Delete Message

Delete an existing message

| Input       | Comments                                           | Default |
| ----------- | -------------------------------------------------- | ------- |
| Connection  |                                                    |         |
| Mailbox     | Provide a string value for the name of the mailbox |         |
| Message UID | The UID of the message.                            |         |

### Download Message

Download either full RFC-822 formatted message or a specific body structure part

| Input               | Comments                                                                                                                            | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                     |         |
| Mailbox             | Provide a string value for the name of the mailbox                                                                                  |         |
| Message Index or ID | The index of the message you would like to download (1 for the oldest message, 2 for second oldest, etc), or the ID of the message. |         |

### Get Mailbox Status

Returns the status of a mailbox's properties

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection |                                                    |         |
| Mailbox    | Provide a string value for the name of the mailbox |         |

### List Mailboxes

Returns a list of available mailboxes

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Remove Flags From Message

Remove existing flags from an existing message

| Input      | Comments                                                                                | Default |
| ---------- | --------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                         |         |
| Mailbox    | Provide a string value for the name of the mailbox                                      |         |
| Range      | Provide a range of messages. Alternatively you can specify \* to get the latest message |         |
| Flags      | For each item, provide a string value to be added to an existing message.               |         |

### Rename Mailbox

Change the name of an existing mailbox

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Path       | Mailbox path to upload the message to |         |
| New Path   | Mailbox path to upload the message to |         |

### Search / List Mailbox Messages

Returns all messages in the given mailbox

| Input                | Comments                                           | Default |
| -------------------- | -------------------------------------------------- | ------- |
| Connection           |                                                    |         |
| Mailbox              | Provide a string value for the name of the mailbox |         |
| From                 | Filter email messages by sender                    |         |
| To                   | Filter email messages by recipient                 |         |
| Read / Unread Filter |                                                    | all     |

### Set Flags

Set a value for an existing message flag

| Input      | Comments                                                                                | Default |
| ---------- | --------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                         |         |
| Mailbox    | Provide a string value for the name of the mailbox                                      |         |
| Range      | Provide a range of messages. Alternatively you can specify \* to get the latest message |         |
| Flags      | For each item, provide a string value to be added to an existing message.               |         |
