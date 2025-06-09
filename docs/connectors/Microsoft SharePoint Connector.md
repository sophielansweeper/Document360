---
title: Microsoft SharePoint Connector
sidebar_label: Microsoft SharePoint
description: Interact with sites, drives, and items connected to your instance of Microsoft SharePoint.
---

![Microsoft SharePoint](./assets/ms-sharepoint.png#connector-icon)
Interact with sites, drives, and items connected to your instance of Microsoft SharePoint.

## Connections

### Microsoft SharePoint OAuth 2.0

Authenticates actions in the Microsoft SharePoint component.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                          | Default                                                        |
| ------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Authorize URL | Provide a tenant specific OAuth 2.0 authorize endpoint.                           | https://login.microsoftonline.com/common/oauth2/v2.0/authorize |
| Token URL     | Provide a tenant specific OAuth 2.0 token endpoint.                               | https://login.microsoftonline.com/common/oauth2/v2.0/token     |
| Scopes        | Space separated OAuth 2.0 permission scopes                                       | Sites.ReadWrite.All Sites.Manage.All offline_access            |
| Client ID     | Client Id of your Azure application                                               |                                                                |
| Client Secret | Client Secret generated under 'Certificates & Secrets' in your Azure application. |                                                                |

## Triggers

### Webhook

Receive and validate webhook requests from Sharepoint for webhooks you configure.

## Actions

### Create a Subscription

Create a Subscription to notify you of changes to a resource

| Input                | Comments                                                                                                      | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                               |         |
| Change Type          | The type of changes that should generate notifications for this subscription. OneDrive only supports updated. | updated |
| Notification URL     | The URL that notifications should be delivered to, if required for the specified notificationType.            |         |
| Resource             | The relative path of the subscription within the drive. Read-only.                                            |         |
| Expiration Date Time | The date and time when the subscription will expire if not updated or renewed.                                |         |
| Client State         | An optional string value that is passed back in the notification message for this subscription.               |         |
| Allow Duplicates     | Enable to allow more than one subscription per endpoint                                                       | false   |

### Create Item in Site List

Create a new item inside the given site list

| Input      | Comments                                                                                | Default |
| ---------- | --------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                         |         |
| Site Id    | Provide the unique identifier of a SharePoint site.                                     |         |
| List Id    | Provide the unique identifier of a SharePoint site list.                                |         |
| Fields     | For each item, provide a key value pair to be added to the new drive item's properties. |         |

### Create Site List Subscription

Create a Site List subscription for Microsoft SharePoint

| Input                | Comments                                                                                                                                                        | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                 |         |
| Site Id              | Provide the unique identifier of a SharePoint site.                                                                                                             |         |
| List Id              | Provide the unique identifier of a SharePoint site list.                                                                                                        |         |
| Notification URL     | URL to send events of this Subscription to                                                                                                                      |         |
| Expiration Date/Time | Expiration date/time for subscription. If unspecified the default will be the current date/time plus 29 days (close to the maximum permitted by the Graph API). |         |
| Allow Duplicates     | Enable to allow more than one webhook per endpoint                                                                                                              | false   |

### Delete All Instance Subscriptions

Delete all subscriptions pointed at this instance

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Delete a Subscription

Delete a Subscription by ID

| Input           | Comments                          | Default |
| --------------- | --------------------------------- | ------- |
| Connection      |                                   |         |
| Subscription Id | The Id the subscription to delete |         |

### Download File

Download a file from the specified drive

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Connection |                                                        |         |
| Drive      | Provide the unique identifier of a SharePoint drive.   |         |
| Item Id    | Provide the unique identifier of a SharePoint item Id. |         |

### Get Current User

Get the information and metadata of the user that is currently logged in

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Drive

Returns the information and metadata of a SharePoint drive

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Connection |                                                      |         |
| Drive      | Provide the unique identifier of a SharePoint drive. |         |

### Get File

Get a file from a Drive

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Connection |                                                        |         |
| Drive      | Provide the unique identifier of a SharePoint drive.   |         |
| Item Id    | Provide the unique identifier of a SharePoint item Id. |         |

### Get Item from Site List

Returns the information and metadata of the given item

| Input         | Comments                                                                      | Default |
| ------------- | ----------------------------------------------------------------------------- | ------- |
| Connection    |                                                                               |         |
| Site Id       | Provide the unique identifier of a SharePoint site.                           |         |
| List Id       | Provide the unique identifier of a SharePoint site list.                      |         |
| Item Id       | Provide the unique identifier of a SharePoint item Id.                        |         |
| Opt In Fields | Provide a comma separated list of fields to overwrite the default result set. |         |

### Get Root Site

Returns the information and metadata of the root SharePoint site in your tenant

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Site

Returns the information and metadata of the given SharePoint site

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection |                                                     |         |
| Site Id    | Provide the unique identifier of a SharePoint site. |         |

### Get Site List

Returns the information and metadata of an existing site list

| Input      | Comments                                                 | Default |
| ---------- | -------------------------------------------------------- | ------- |
| Connection |                                                          |         |
| Site Id    | Provide the unique identifier of a SharePoint site.      |         |
| List Id    | Provide the unique identifier of a SharePoint site list. |         |

### List Changes

Track changes in a driveItem and its children over time.

| Input                  | Comments                                                                                                                                                                                 | Default                       |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Connection             |                                                                                                                                                                                          |                               |
| URL to fetch for delta | The URL to track changes in a driveItem and its children over time. You can also paste here the @odata.nextLink or @odata.deltaLink from a previous response to resume tracking changes. | /drives/{drive-id}/root/delta |
| $select Parameter      | Filters properties (columns). https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#select-parameter                                                                        |                               |
| $expand Parameter      | Retrieves related resources. https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#expand-parameter                                                                         |                               |
| $top Parameter         | Sets the page size of results. https://learn.microsoft.com/en-us/graph/query-parameters?tabs=http#top-parameter                                                                          |                               |
| Fetch All              | Set to true to retrieve all results.                                                                                                                                                     | false                         |

### List Drives

List all drives within any given SharePoint site

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection |                                                     |         |
| Site Id    | Provide the unique identifier of a SharePoint site. |         |
| Page Limit | Enter a number amount for the page size.            |         |
| Page Token | Enter the token for the desired page.               |         |
| Fetch All  | Set to true to retrieve all results.                | false   |

### List Files in Drive

List all the files from a Drive

| Input      | Comments                                                        | Default |
| ---------- | --------------------------------------------------------------- | ------- |
| Connection |                                                                 |         |
| Drive      | Provide the unique identifier of a SharePoint drive.            |         |
| Page Limit | Enter a number amount for the page size.                        |         |
| Page Token | Enter the token for the desired page.                           |         |
| Fetch All  | Set to true to retrieve all results.                            | false   |
| Recursive  | If true, it will also return all the files from the subfolders. | false   |

### List Files in Drive (Deprecated)

List all the files from a Drive. This version of the action is being deprecated. Please replace action with List Files In Drive.

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Connection |                                                      |         |
| Drive      | Provide the unique identifier of a SharePoint drive. |         |

### List Folder Files in Drive

List all the files inside of a folder from a Drive

| Input      | Comments                                                 | Default |
| ---------- | -------------------------------------------------------- | ------- |
| Connection |                                                          |         |
| Drive      | Provide the unique identifier of a SharePoint drive.     |         |
| Folder ID  | Provide the unique identifier of a Sharepoint folder Id. |         |
| Page Limit | Enter a number amount for the page size.                 |         |
| Page Token | Enter the token for the desired page.                    |         |
| Fetch All  | Set to true to retrieve all results.                     | false   |

### List Folder Files in Drive (Deprecated)

List all the files inside of a folder from a Drive. This version of the action is being deprecated. Please replace action with List Folder Files In Drive.

| Input      | Comments                                                 | Default |
| ---------- | -------------------------------------------------------- | ------- |
| Connection |                                                          |         |
| Drive      | Provide the unique identifier of a SharePoint drive.     |         |
| Folder ID  | Provide the unique identifier of a Sharepoint folder Id. |         |

### List Followed Sites

List all Followed Sites

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection |                                          |         |
| Page Limit | Enter a number amount for the page size. |         |
| Page Token | Enter the token for the desired page.    |         |
| Fetch All  | Set to true to retrieve all results.     | false   |

### List Items in Site List

Return all items inside the given site list

| Input         | Comments                                                                      | Default |
| ------------- | ----------------------------------------------------------------------------- | ------- |
| Connection    |                                                                               |         |
| Site Id       | Provide the unique identifier of a SharePoint site.                           |         |
| List Id       | Provide the unique identifier of a SharePoint site list.                      |         |
| Page Limit    | Enter a number amount for the page size.                                      |         |
| Page Token    | Enter the token for the desired page.                                         |         |
| Opt In Fields | Provide a comma separated list of fields to overwrite the default result set. |         |

### List Shared Documents

Lists documents shared with the user.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Site Lists

List all Site Lists

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection |                                                     |         |
| Site Id    | Provide the unique identifier of a SharePoint site. |         |
| Fetch All  | Set to true to retrieve all results.                | false   |

### List Sites

List all SharePoint sites

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection |                                          |         |
| Page Limit | Enter a number amount for the page size. |         |
| Page Token | Enter the token for the desired page.    |         |
| Fetch All  | Set to true to retrieve all results.     | false   |

### List Subscriptions

List all available Subscriptions

| Input                       | Comments                                                  | Default |
| --------------------------- | --------------------------------------------------------- | ------- |
| Connection                  |                                                           |         |
| Show Instance Subscriptions | Show only subscriptions for this Instance's Subscriptions | true    |

### Raw Request

Send raw HTTP request to Microsoft Sharepoint

| Input                   | Comments                                                                                                                                                                                                                                     | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                              |         |
| URL                     | Input the path only (/me/followedSites), The base URL is already included (https://graph.microsoft.com/v1.0). For example, to connect to https://graph.microsoft.com/v1.0/me/followedSites, only /me/followedSites is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                      |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                    |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                         |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                             |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                       |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                          |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                  |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                     | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                          |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                          | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                             | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                          | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                | false   |

### Update File

Update a file to the specified drive

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection |                                                               |         |
| Drive      | Provide the unique identifier of a SharePoint drive.          |         |
| Item Id    | Provide the unique identifier of a SharePoint item Id.        |         |
| File Data  | Provide data to be uploaded to your desired SharePoint drive. |         |

### Update Site List Subscription Expiration

Update existing Site List subscription expiration for Microsoft SharePoint

| Input                | Comments                                                                                                                                                        | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                 |         |
| Subscription ID      | Subscription ID to manage                                                                                                                                       |         |
| Expiration Date/Time | Expiration date/time for subscription. If unspecified the default will be the current date/time plus 29 days (close to the maximum permitted by the Graph API). |         |

### Upload File

Upload a file to the specified drive or folder's drive

| Input      | Comments                                                      | Default |
| ---------- | ------------------------------------------------------------- | ------- |
| Connection |                                                               |         |
| Drive      | Provide the unique identifier of a SharePoint drive.          |         |
| File Name  | Provide a string value for the name of the new file.          |         |
| File Data  | Provide data to be uploaded to your desired SharePoint drive. |         |
| Folder ID  | Provide the unique identifier of a Sharepoint folder Id.      |         |
