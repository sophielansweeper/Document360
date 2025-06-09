![Klaviyo](./assets/klaviyo.png#connector-icon)
Klaviyo is a cloud based email marketing solution that enables e-commerce businesses to create, send, and analyze email and SMS campaigns.

## Connections

### API Key

Connection to Klaviyo using an API Key.

| Input   | Comments                 | Default |
| ------- | ------------------------ | ------- |
| API Key | Your API Key for Klaviyo |         |

### OAuth 2.0

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                 | Default |
| ------------- | ---------------------------------------- | ------- |
| Scopes        | Space separated list of scopes if needed |         |
| Client ID     |                                          |         |
| Client secret |                                          |         |

## Actions

### Bulk Create Events

Create a batch of events for one or more profiles.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Events Array  | An array of events to create.                        |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Campaign

Creates a campaign given a set of parameters, then returns it.

| Input              | Comments                                             | Default |
| ------------------ | ---------------------------------------------------- | ------- |
| Connection         |                                                      |         |
| Campaign Name      | The name of the campaign.                            |         |
| Campaign Messages  | The message(s) to send in the campaign.              |         |
| Included Audiences | A list of included audiences.                        |         |
| Excluded Audiences | A list of excluded audiences.                        |         |
| Tracking Options   | The tracking options for the campaign.               |         |
| Send Options       | The send options for the campaign.                   |         |
| Send Strategy      | The send strategy for the campaign.                  |         |
| Debug Request      | Enabling this flag will log out the current request. | false   |

### Create Event

Create a new event to track a profiles activity.

| Input                | Comments                                                                              | Default |
| -------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                       |         |
| Event Name           | Name of the event.                                                                    |         |
| Event Profile        | The profile associated with this event.                                               |         |
| Event Properties     | The properties of the event.                                                          |         |
| Event Time           | When this event occurred. By default, the time the request was received will be used. |         |
| Event Value          | A numeric, monetary value to associate with this event.                               |         |
| Event Value Currency | The ISO 4217 currency code of the value associated with the event.                    |         |
| Event Unique ID      | A unique identifier for this event.                                                   |         |
| Debug Request        | Enabling this flag will log out the current request.                                  | false   |

### Create List

Create a new list.

| Input         | Comments                                             | Default    |
| ------------- | ---------------------------------------------------- | ---------- |
| Connection    |                                                      |            |
| List Name     | A helpful name to label the list.                    | Newsletter |
| Debug Request | Enabling this flag will log out the current request. | false      |

### Create Profile

Create a new profile.

| Input         | Comments                                                                                                                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                                                                                                                      |         |
| Email         | Individual's email address                                                                                                                                                           |         |
| Phone Number  | Individual's phone number in E.164 format                                                                                                                                            |         |
| External ID   | A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system. |         |
| First Name    | Individual's first name                                                                                                                                                              |         |
| Last Name     | Individual's last name                                                                                                                                                               |         |
| Organization  | Name of the company or organization within the company for whom the individual works                                                                                                 |         |
| Title         | Individual's job title                                                                                                                                                               |         |
| Image         | URL pointing to the location of a profile image                                                                                                                                      |         |
| Location      | Location information for the profile.                                                                                                                                                |         |
| Properties    | An object containing key/value pairs for any custom properties assigned to this profile.                                                                                             |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                 | false   |

### Create Segment

Create a segment.

| Input                    | Comments                                             | Default |
| ------------------------ | ---------------------------------------------------- | ------- |
| Connection               |                                                      |         |
| Segment Name             | The name of the segment.                             |         |
| Segment Condition Groups | The condition groups that define the segment.        |         |
| Is Starred Segment       | Whether the segment is starred.                      | false   |
| Debug Request            | Enabling this flag will log out the current request. | false   |

### Create Template

Create a new custom HTML template.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Template Name | The name of the template.                            |         |
| Editor Type   | Restricted to CODE.                                  |         |
| Template HTML | The HTML content of the template.                    |         |
| Template Text | The text content of the template.                    |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Campaign

Delete a campaign with the given campaign ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Campaign ID   | The ID of the campaign.                              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete List

Delete a list with the given list ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| List ID       | The unique identifier of the list.                   |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Segment

Delete a segment with the given segment ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Segment ID    | The ID of the segment.                               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Template

Delete a template with the given template ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Template ID   | The ID of the template.                              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Account

Retrieve a single account object by its account ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Account ID    | The ID of the account to retrieve.                   |         |
| Fields        | The fields to include in the response.               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Campaign

Returns a specific campaign based on a required id.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Campaign ID   | The ID of the campaign.                              |         |
| Fields        | The fields to include in the response.               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Event

Get an event with the given event ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Event ID      | The ID of the event.                                 |         |
| Fields        | The fields to include in the response.               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Image

Get the image with the given image ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Image ID      | The ID of the image.                                 |         |
| Fields        | The fields to include in the response.               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get List

Get a list with the given list ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| List ID       | The unique identifier of the list.                   |         |
| Fields        | The fields to include in the response.               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Profile

Get the profile with the given profile ID.

| Input                     | Comments                                                           | Default |
| ------------------------- | ------------------------------------------------------------------ | ------- |
| Connection                |                                                                    |         |
| Profile ID                | Unique identifier for the profile.                                 |         |
| Fields                    | The fields to include in the response.                             |         |
| Additional Profile Fields | Request additional fields not included by default in the response. |         |
| Debug Request             | Enabling this flag will log out the current request.               | false   |

### Get Segment

Get a segment with the given segment ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Segment ID    | The ID of the segment.                               |         |
| Fields        | The fields to include in the response.               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Template

Get a template with the given template ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Template ID   | The ID of the template.                              |         |
| Fields        | The fields to include in the response.               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Accounts

Retrieve the account(s) associated with a given private API key.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Fields        | The fields to include in the response.               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Campaigns

Returns some or all campaigns based on filters.

| Input            | Comments                                             | Default                        |
| ---------------- | ---------------------------------------------------- | ------------------------------ |
| Connection       |                                                      |                                |
| Filter Campaigns | A filter to apply to the campaigns.                  | equals(messages.channel,'sms') |
| Fields           | The fields to include in the response.               |                                |
| Debug Request    | Enabling this flag will log out the current request. | false                          |

### List Events

Get all events in an account.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Fields        | The fields to include in the response.               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Images

Get all images in an account.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Fields        | The fields to include in the response.               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List List Profiles

Get all profiles within a list with the given list ID.

| Input                     | Comments                                                           | Default |
| ------------------------- | ------------------------------------------------------------------ | ------- |
| Connection                |                                                                    |         |
| List ID                   | The unique identifier of the list.                                 |         |
| Additional Profile Fields | Request additional fields not included by default in the response. |         |
| Fields                    | The fields to include in the response.                             |         |
| Debug Request             | Enabling this flag will log out the current request.               | false   |

### List Lists

Get all lists in an account.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Fields        | The fields to include in the response.               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Profile

Get all profiles in an account.

| Input                     | Comments                                                           | Default |
| ------------------------- | ------------------------------------------------------------------ | ------- |
| Connection                |                                                                    |         |
| Fields                    | The fields to include in the response.                             |         |
| Additional Profile Fields | Request additional fields not included by default in the response. |         |
| Debug Request             | Enabling this flag will log out the current request.               | false   |

### List Segments

Get all segments in an account.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Fields        | The fields to include in the response.               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Templates

Get all templates in an account.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Fields        | The fields to include in the response.               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Raw Request

Send raw HTTP request to Klaviyo.

| Input                   | Comments                                                                                                                                                                                                   | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                            |         |
| Exclude Authorization   | Exclude the Authorization header from the request. Turn this on and include the company_id query param when calling public endpoints (/client).                                                            | false   |
| URL                     | Input the path only (/api/accounts), The base URL is already included (https://a.klaviyo.com). For example, to connect to https://a.klaviyo.com/api/accounts, only /api/accounts is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                    |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                  |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                       |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                           |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                     |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                        |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                   | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                        |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                       | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                        | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.           | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                        | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                              | false   |

### Subscribe Profiles

Subscribe one or more profiles to email marketing, SMS marketing, or both.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Profiles      | Array of profiles to subscribe.                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Unsubscribe Profiles

Unsubscribe one or more profiles to email marketing, SMS marketing, or both.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Profiles      | Array of profiles to unsubscribe.                    |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Campaign

Update a campaign with the given campaign ID.

| Input              | Comments                                             | Default |
| ------------------ | ---------------------------------------------------- | ------- |
| Connection         |                                                      |         |
| Campaign ID        | The ID of the campaign.                              |         |
| Campaign Name      | The name of the campaign.                            |         |
| Included Audiences | A list of included audiences.                        |         |
| Excluded Audiences | A list of excluded audiences.                        |         |
| Tracking Options   | The tracking options for the campaign.               |         |
| Send Options       | The send options for the campaign.                   |         |
| Send Strategy      | The send strategy for the campaign.                  |         |
| Debug Request      | Enabling this flag will log out the current request. | false   |

### Update Image

Update the image with the given image ID.

| Input         | Comments                                                                                                                       | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                                                                |         |
| Image ID      | The ID of the image.                                                                                                           |         |
| Image Name    | A name for the image. Defaults to the filename if not provided. If the name matches an existing image, a suffix will be added. |         |
| Image Hidden  |                                                                                                                                |         |
| Debug Request | Enabling this flag will log out the current request.                                                                           | false   |

### Update List

Update the name of a list with the given list ID.

| Input         | Comments                                             | Default    |
| ------------- | ---------------------------------------------------- | ---------- |
| Connection    |                                                      |            |
| List ID       | The unique identifier of the list.                   |            |
| List Name     | A helpful name to label the list.                    | Newsletter |
| Debug Request | Enabling this flag will log out the current request. | false      |

### Update Profile

Update the profile with the given profile ID.

| Input         | Comments                                                                                                                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                                                                                                                      |         |
| Profile ID    | Unique identifier for the profile.                                                                                                                                                   |         |
| Email         | Individual's email address                                                                                                                                                           |         |
| Phone Number  | Individual's phone number in E.164 format                                                                                                                                            |         |
| External ID   | A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system. |         |
| First Name    | Individual's first name                                                                                                                                                              |         |
| Last Name     | Individual's last name                                                                                                                                                               |         |
| Organization  | Name of the company or organization within the company for whom the individual works                                                                                                 |         |
| Title         | Individual's job title                                                                                                                                                               |         |
| Image         | URL pointing to the location of a profile image                                                                                                                                      |         |
| Location      | Location information for the profile.                                                                                                                                                |         |
| Properties    | An object containing key/value pairs for any custom properties assigned to this profile.                                                                                             |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                 | false   |

### Update Segment

Update a segment with the given segment ID.

| Input                    | Comments                                             | Default |
| ------------------------ | ---------------------------------------------------- | ------- |
| Connection               |                                                      |         |
| Segment ID               | The ID of the segment.                               |         |
| Segment Name             | The name of the segment.                             |         |
| Segment Condition Groups | The condition groups that define the segment.        |         |
| Is Starred Segment       | Whether the segment is starred.                      |         |
| Debug Request            | Enabling this flag will log out the current request. | false   |

### Update Template

Update a template with the given template ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Template ID   | The ID of the template.                              |         |
| Template Name | The name of the template.                            |         |
| Template HTML | The HTML content of the template.                    |         |
| Template Text | The text content of the template.                    |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Upload Image

Import an image from a url or file.

| Input         | Comments                                                                                                                                                                                                                   | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                            |         |
| Image URL     | An existing image url to import the image from. Alternatively, you may specify a base-64 encoded data-uri (`data:image/...`). Supported image formats: jpeg,png,gif. Maximum image size: 5MB. Use this field or File Data. |         |
| Image Name    | A name for the image. Defaults to the filename if not provided. If the name matches an existing image, a suffix will be added.                                                                                             |         |
| File Data     | The contents to write to a file. Binary data generated from a previous step.                                                                                                                                               |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                       | false   |
