---
title: Pipedrive Connector
sidebar_label: Pipedrive
description: Manage leads, companies, activities, and more on the Pipedrive platform
---

![Pipedrive](./assets/pipedrive.png#connector-icon)
Manage leads, companies, activities, and more on the Pipedrive platform

## Connections

### OAuth 2.0

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input             | Comments          | Default                                     |
| ----------------- | ----------------- | ------------------------------------------- |
| Authorization URL | Authorization URL | https://oauth.pipedrive.com/oauth/authorize |
| Token URL         | Token URL         | https://oauth.pipedrive.com/oauth/token     |
| Client ID         | Client identifier |                                             |
| Client Secret     | Client secret     |                                             |

## Actions

### Add Call Log

Add a call log

| Input             | Comments                                                                                     | Default |
| ----------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                              |         |
| User ID           | The ID of the owner of the call log                                                          |         |
| Activity ID       | If specified, this activity will be converted into a call log, with the information provided |         |
| Subject           | The name of the activity this call is attached to                                            |         |
| Duration          | The duration of the call in seconds                                                          |         |
| Outcome           | Describes the outcome of the call                                                            |         |
| From Phone Number | The number that made the call                                                                |         |
| To Phone Number   | The number called                                                                            |         |
| Start Time        | The date and time of the start of the call in UTC                                            |         |
| End Time          | The date and time of the end of the call in UTC                                              |         |
| Person ID         | The ID of the person this call is associated with                                            |         |
| Org ID            | The ID of the organization this call is associated with                                      |         |
| Deal ID           | The ID of the deal this call is associated with                                              |         |
| Note              | The note for the call log in HTML format                                                     |         |

### Add Channel

Add a channel

| Input               | Comments                                                       | Default |
| ------------------- | -------------------------------------------------------------- | ------- |
| Connection          |                                                                |         |
| Name                | The name of the channel                                        |         |
| Provider Channel ID | The channel ID                                                 |         |
| Avatar Url          | The URL for an icon that represents your channel               |         |
| Template Support    | If true, enables templates logic on UI                         | false   |
| Provider Type       | It controls the icons (like the icon next to the conversation) | other   |

### Add Deal

Add a deal

| Input               | Comments                                                                                    | Default |
| ------------------- | ------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                             |         |
| Title               | The title of the deal                                                                       |         |
| Value               | The value of the deal                                                                       |         |
| Currency            | The currency of the deal                                                                    |         |
| User ID             | The ID of the user which will be the owner of the created deal                              |         |
| Person ID           | The ID of a person which this deal will be linked to                                        |         |
| Org ID              | The ID of an organization which this deal will be linked to                                 |         |
| Pipeline ID         | The ID of the pipeline this deal will be added to                                           |         |
| Stage ID            | The ID of the stage this deal will be added to                                              |         |
| Status              | open = Open, won = Won, lost = Lost, deleted = Deleted                                      |         |
| Expected Close Date | The expected close date of the deal                                                         |         |
| Probability         | The success probability percentage of the deal                                              |         |
| Lost Reason         | The optional message about why the deal was lost (to be used when status = lost)            |         |
| Visible To          | The visibility of the deal. See https://developers.pipedrive.com/docs/api/v1/Deals#addDeal. |         |
| Add Time            | The optional creation date & time of the deal in UTC                                        |         |

### Add Deal Follower

Add a follower to a deal

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Deal ID    | The ID of the deal |         |
| User ID    | The ID of the user |         |

### Add Deal Participant

Add a participant to a deal

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Deal ID    | The ID of the deal   |         |
| Person ID  | The ID of the person |         |

### Add Deal Product

Add a product to the deal, eventually creating a new item called a deal-product

| Input                | Comments                                                                                                          | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                   |         |
| Deal ID              | The ID of the deal                                                                                                |         |
| Item Price           | The price at which this product will be added to the deal                                                         |         |
| Quantity             | Quantity – e                                                                                                      |         |
| Discount Percentage  | The discount %                                                                                                    | 0       |
| Duration             | The duration of the product (when product durations are not enabled for the company or if omitted, defaults to 1) | 1       |
| Product Variation ID | The ID of the product variation to use                                                                            |         |
| Comments             | Any textual comment associated with this product-deal attachment                                                  |         |
| Tax                  | The tax percentage                                                                                                | 0       |
| Enabled Flag         | Whether the product is enabled on the deal or not                                                                 |         |

### Add File

Upload and add a new file to a deal, person, org, product, activity or lead

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                  |         |
| File        | The file to upload - either string contents or a binary file                                                     |         |
| File Name   | The name of the file to upload                                                                                   |         |
| Entity Type | The type of entity to attach the file to                                                                         |         |
| Entity ID   | The numerical ID of the deal, person, org, product or activity, or UUID of the lead to associate this file with. |         |

### Add Lead

Add a lead

| Input               | Comments                                                                               | Default |
| ------------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                        |         |
| Title               | The name of the lead                                                                   |         |
| Owner ID            | The ID of the user which will be the owner of the created lead                         |         |
| Label Ids           | The IDs of the lead labels which will be associated with the lead                      |         |
| Person ID           | The ID of a person which this lead will be linked to                                   |         |
| Organization ID     | The ID of an organization which this lead will be linked to                            |         |
| Value               | The potential value of the lead                                                        |         |
| Expected Close Date | The date of when the deal which will be created from the lead is expected to be closed |         |
| Visible To          | The visibility of the lead                                                             |         |
| Was Seen            | A flag indicating whether the lead was seen by someone in the Pipedrive UI             | false   |

### Add Lead Label

Add a lead label

| Input      | Comments                   | Default |
| ---------- | -------------------------- | ------- |
| Connection |                            |         |
| Name       | The name of the lead label |         |
| Color      | The color of the label     |         |

### Add Organization

Add an organization

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection |                                                                         |         |
| Name       | The name of the organization                                            |         |
| Owner ID   | The ID of the user who will be marked as the owner of this organization |         |
| Visible To | The visibility of the organization                                      |         |
| Add Time   | The optional creation date & time of the organization in UTC            |         |

### Add Organization Follower

Add a follower to an organization

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Organization ID | The ID of the organization |         |
| User ID         | The ID of the user         |         |

### Add Person

Add a person

| Input            | Comments                                                                                                                                                                                 | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                                                                          |         |
| Name             | The name of the person                                                                                                                                                                   |         |
| Owner ID         | The ID of the user who will be marked as the owner of this person                                                                                                                        |         |
| Org ID           | The ID of the organization this person will belong to                                                                                                                                    |         |
| Email            | List of email data related to the person                                                                                                                                                 |         |
| Phone            | List of phone data related to the person                                                                                                                                                 |         |
| Visible To       | The visibility of the person                                                                                                                                                             |         |
| Marketing Status | If the person does not have a valid email address, then the marketing status is **not set** and "no_consent" is returned for the "marketing_status" value when the new person is created |         |
| Add Time         | The optional creation date & time of the person in UTC                                                                                                                                   |         |

### Add Person Follower

Add a follower to a person

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Connection |                                                                    |         |
| Person ID  | The ID of the person                                               |         |
| User ID    | If supplied, only persons owned by the given user will be returned |         |

### Add Pipeline

Add a new pipeline

| Input            | Comments                                                          | Default |
| ---------------- | ----------------------------------------------------------------- | ------- |
| Connection       |                                                                   |         |
| Name             | The name of the pipeline                                          |         |
| Deal Probability | Whether deal probability is disabled or enabled for this pipeline |         |
| Order Nr         | Defines the order of pipelines                                    |         |
| Active           | Whether this pipeline will be made inactive (hidden) or active    |         |

### Add Product

Add a product

| Input       | Comments                                                                                                                                   | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection  |                                                                                                                                            |         |
| Name        | The name of the product                                                                                                                    |         |
| Code        | The product code                                                                                                                           |         |
| Unit        | The unit in which this product is sold                                                                                                     |         |
| Tax         | The tax percentage                                                                                                                         | 0       |
| Active Flag | Whether this product will be made active or not                                                                                            | 1       |
| Selectable  | Whether this product can be selected in deals or not                                                                                       | 1       |
| Visible To  | The visibility of the product                                                                                                              |         |
| Owner ID    | The ID of the user who will be marked as the owner of this product                                                                         |         |
| Prices      | An array of objects, each containing: "currency" (string), "price" (number), "cost" (number, optional), "overhead_cost" (number, optional) |         |

### Add Product Follower

Add a follower to a product

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection |                       |         |
| Product ID | The ID of the product |         |
| User ID    | The ID of the user    |         |

### Add Stage

Add a new stage

| Input            | Comments                                                                   | Default |
| ---------------- | -------------------------------------------------------------------------- | ------- |
| Connection       |                                                                            |         |
| Name             | The name of the stage                                                      |         |
| Pipeline ID      | The ID of the pipeline to add stage to                                     |         |
| Deal Probability | The success probability percentage of the deal                             |         |
| Rotten Flag      | Whether deals in this stage can become rotten                              | false   |
| Rotten Days      | The number of days the deals not updated in this stage would become rotten |         |

### Cancel Recurring Subscription

Cancel a recurring subscription

| Input           | Comments                          | Default |
| --------------- | --------------------------------- | ------- |
| Connection      |                                   |         |
| Subscription ID | The ID of the subscription        |         |
| End Date        | The subscription termination date |         |

### Delete Activity

Delete an activity

| Input       | Comments               | Default |
| ----------- | ---------------------- | ------- |
| Connection  |                        |         |
| Activity ID | The ID of the activity |         |

### Delete Call Log

Delete a call log

| Input       | Comments                                     | Default |
| ----------- | -------------------------------------------- | ------- |
| Connection  |                                              |         |
| Call Log ID | The ID received when you create the call log |         |

### Delete Channel

Delete a channel

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection |                                                   |         |
| Id         | The ID of the channel provided by the integration |         |

### Delete Conversation

Delete a conversation

| Input           | Comments                                               | Default |
| --------------- | ------------------------------------------------------ | ------- |
| Connection      |                                                        |         |
| Channel ID      | The ID of the channel provided by the integration      |         |
| Conversation ID | The ID of the conversation provided by the integration |         |

### Delete Deal

Delete a deal

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Deal ID    | The ID of the deal |         |

### Delete Deal Field

Delete a deal field

| Input         | Comments                 | Default |
| ------------- | ------------------------ | ------- |
| Connection    |                          |         |
| Deal Field ID | The ID of the deal field |         |

### Delete Deal Follower

Delete a follower from a deal

| Input       | Comments               | Default |
| ----------- | ---------------------- | ------- |
| Connection  |                        |         |
| Deal ID     | The ID of the deal     |         |
| Follower ID | The ID of the follower |         |

### Delete Deal Participant

Delete a participant from a deal

| Input               | Comments                              | Default |
| ------------------- | ------------------------------------- | ------- |
| Connection          |                                       |         |
| Deal ID             | The ID of the deal                    |         |
| Deal Participant ID | The ID of the participant of the deal |         |

### Delete Deal Product

Delete an attached product from a deal

| Input                 | Comments                  | Default |
| --------------------- | ------------------------- | ------- |
| Connection            |                           |         |
| Deal ID               | The ID of the deal        |         |
| Product Attachment ID | The product attachment ID |         |

### Delete File

Delete a file

| Input      | Comments         | Default |
| ---------- | ---------------- | ------- |
| Connection |                  |         |
| File ID    | The ID of a file |         |

### Delete Lead

Delete a lead

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Lead ID    | The ID of the lead |         |

### Delete Lead Label

Delete a lead label

| Input         | Comments                 | Default |
| ------------- | ------------------------ | ------- |
| Connection    |                          |         |
| Lead Label ID | The ID of the lead label |         |

### Delete Mail Thread

Delete mail thread

| Input          | Comments                  | Default |
| -------------- | ------------------------- | ------- |
| Connection     |                           |         |
| Mail Thread ID | The ID of the mail thread |         |

### Delete Organization

Delete an organization

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Organization ID | The ID of the organization |         |

### Delete Organization Follower

Delete a follower from an organization

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Organization ID | The ID of the organization |         |
| Follower ID     | The ID of the follower     |         |

### Delete Person

Delete a person

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Person ID  | The ID of the person |         |

### Delete Person Field

Delete a person field

| Input           | Comments            | Default |
| --------------- | ------------------- | ------- |
| Connection      |                     |         |
| Person Field ID | The ID of the field |         |

### Delete Person Follower

Delete a follower from a person

| Input       | Comments               | Default |
| ----------- | ---------------------- | ------- |
| Connection  |                        |         |
| Person ID   | The ID of the person   |         |
| Follower ID | The ID of the follower |         |

### Delete Person Picture

Delete person picture

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Person ID  | The ID of the person |         |

### Delete Pipeline

Delete a pipeline

| Input       | Comments               | Default |
| ----------- | ---------------------- | ------- |
| Connection  |                        |         |
| Pipeline ID | The ID of the pipeline |         |

### Delete Product

Delete a product

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection |                       |         |
| Product ID | The ID of the product |         |

### Delete Product Field

Delete a product field

| Input            | Comments                    | Default |
| ---------------- | --------------------------- | ------- |
| Connection       |                             |         |
| Product Field ID | The ID of the product field |         |

### Delete Product Follower

Delete a follower from a product

| Input       | Comments                                                        | Default |
| ----------- | --------------------------------------------------------------- | ------- |
| Connection  |                                                                 |         |
| Product ID  | The ID of the product                                           |         |
| Follower ID | The ID of the relationship between the follower and the product |         |

### Delete Stage

Delete a stage

| Input      | Comments            | Default |
| ---------- | ------------------- | ------- |
| Connection |                     |         |
| Stage ID   | The ID of the stage |         |

### Delete Subscription

Delete a subscription

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Subscription ID | The ID of the subscription |         |

### Download File

Download one file

| Input      | Comments         | Default |
| ---------- | ---------------- | ------- |
| Connection |                  |         |
| File ID    | The ID of a file |         |

### Find Subscription By Deal

Find subscription by deal

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Deal ID    | The ID of the deal |         |

### Find Users By Name

Find users by name

| Input           | Comments                                                                     | Default |
| --------------- | ---------------------------------------------------------------------------- | ------- |
| Connection      |                                                                              |         |
| Term            | The search term to look for                                                  |         |
| Search By Email | When enabled, the term will only be matched against email addresses of users | 1       |

### Get Activities

Get all activities assigned to a particular user

| Input      | Comments                                                                                                                                                                                                   | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                                            |         |
| User ID    | The ID of the user whose activities will be fetched. If omitted, the user associated with the API token will be used. If 0, activities for all company users will be fetched based on the permission sets. |         |
| Filter ID  | The ID of the filter to use (will narrow down results if used together with "user_id" parameter)                                                                                                           |         |
| Type       | The type of the activity, can be one type or multiple types separated by a comma                                                                                                                           |         |
| Limit      | Items shown per page                                                                                                                                                                                       |         |
| Start      | Pagination start                                                                                                                                                                                           | 0       |
| Start Date | Use the activity due date where you wish to begin fetching activities from                                                                                                                                 |         |
| End Date   | Use the activity due date where you wish to stop fetching activities from                                                                                                                                  |         |
| Done       | Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both done and not done activities.                                                                                         |         |

### Get Activity

Get details of an activity

| Input       | Comments               | Default |
| ----------- | ---------------------- | ------- |
| Connection  |                        |         |
| Activity ID | The ID of the activity |         |

### Get Activity Fields

Get all activity fields

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Activity Types

Get all activity types

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Call Log

Get details of a call log

| Input       | Comments                                     | Default |
| ----------- | -------------------------------------------- | ------- |
| Connection  |                                              |         |
| Call Log ID | The ID received when you create the call log |         |

### Get Company Addons

Get all add-ons for a single company

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Currencies

Get all supported currencies

| Input      | Comments                                                                   | Default |
| ---------- | -------------------------------------------------------------------------- | ------- |
| Connection |                                                                            |         |
| Term       | Optional search term that is searched for from currency's name and/or code |         |

### Get Current User

Get current user data

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Deal

Get details of a deal

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Deal ID    | The ID of the deal |         |

### Get Deal Activities

List activities associated with a deal

| Input      | Comments                                                        | Default |
| ---------- | --------------------------------------------------------------- | ------- |
| Connection |                                                                 |         |
| Deal ID    | The ID of the deal                                              |         |
| Start      | Pagination start                                                | 0       |
| Limit      | Items shown per page                                            |         |
| Done       | Whether the activity is done or not                             |         |
| Exclude    | A comma-separated string of activity IDs to exclude from result |         |

### Get Deal Field

Get one deal field

| Input         | Comments                 | Default |
| ------------- | ------------------------ | ------- |
| Connection    |                          |         |
| Deal Field ID | The ID of the deal field |         |

### Get Deal Fields

Get all deal fields

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Start      | Pagination start     | 0       |
| Limit      | Items shown per page |         |

### Get Deal Files

List files attached to a deal

| Input                 | Comments                                                                                        | Default |
| --------------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                 |         |
| Deal ID               | The ID of the deal                                                                              |         |
| Start                 | Pagination start                                                                                | 0       |
| Limit                 | Items shown per page                                                                            |         |
| Include Deleted Files | When enabled, the list of files will also include deleted files                                 |         |
| Sort                  | The field names and sorting mode separated by a comma ("field_name_1 ASC", "field_name_2 DESC") |         |

### Get Deal Followers

List followers of a deal

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Deal ID    | The ID of the deal |         |

### Get Deal Mail Messages

List mail messages associated with a deal

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Deal ID    | The ID of the deal   |         |
| Start      | Pagination start     | 0       |
| Limit      | Items shown per page |         |

### Get Deal Participants

List participants of a deal

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Deal ID    | The ID of the deal   |         |
| Start      | Pagination start     | 0       |
| Limit      | Items shown per page |         |

### Get Deal Persons

List all persons associated with a deal

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Deal ID    | The ID of the deal   |         |
| Start      | Pagination start     | 0       |
| Limit      | Items shown per page |         |

### Get Deal Products

List products attached to a deal

| Input                | Comments                                                                               | Default |
| -------------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                        |         |
| Deal ID              | The ID of the deal                                                                     |         |
| Start                | Pagination start                                                                       | 0       |
| Limit                | Items shown per page                                                                   |         |
| Include Product Data | Whether to fetch product data along with each attached product (1) or not (0, default) |         |

### Get Deals

Get all deals

| Input         | Comments                                                                                            | Default         |
| ------------- | --------------------------------------------------------------------------------------------------- | --------------- |
| Fetch All     | If set to true, all records will be fetched. If set to false, the provided pagination will be used. | false           |
| Start         | Pagination start                                                                                    | 0               |
| Limit         | Items shown per page                                                                                |                 |
| Sort          | The field names and sorting mode separated by a comma ("field_name_1 ASC", "field_name_2 DESC")     |                 |
| User ID       | If supplied, only deals matching the given user will be returned                                    |                 |
| Filter ID     | The ID of the filter to use                                                                         |                 |
| Stage ID      | If supplied, only deals within the given stage will be returned                                     |                 |
| Status        | Only fetch deals with a specific status                                                             | all_not_deleted |
| Owned By You  | When supplied, only deals owned by you are returned                                                 |                 |
| Debug Request | Enabling this flag will log out the current request.                                                | false           |
| Connection    |                                                                                                     |                 |

### Get Deals Summary

Get deals summary

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection |                                                     |         |
| Status     | Only fetch deals with a specific status             |         |
| Filter ID  | user_id will not be considered                      |         |
| User ID    | Only deals matching the given user will be returned |         |
| Stage ID   | Only deals within the given stage will be returned  |         |

### Get Deals Timeline

Get deals timeline

| Input                   | Comments                                                             | Default |
| ----------------------- | -------------------------------------------------------------------- | ------- |
| Connection              |                                                                      |         |
| Start Date              | The date when the first interval starts                              |         |
| Interval                | The type of the interval                                             |         |
| Amount                  | The number of given intervals, starting from "start_date", to fetch  |         |
| Field Key               | The date field key which deals will be retrieved from                |         |
| User ID                 | If supplied, only deals matching the given user will be returned     |         |
| Pipeline ID             | If supplied, only deals matching the given pipeline will be returned |         |
| Filter ID               | If supplied, only deals matching the given filter will be returned   |         |
| Exclude Deals           | Whether to exclude deals list (1) or not (0)                         |         |
| Totals Convert Currency | The 3-letter currency code of any of the supported currencies        |         |

### Get Deal Users

List permitted users

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Deal ID    | The ID of the deal |         |

### Get File Metadata by ID

Get metadata about one file by ID

| Input      | Comments         | Default |
| ---------- | ---------------- | ------- |
| Connection |                  |         |
| File ID    | The ID of a file |         |

### Get Filter

Get one filter

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Filter ID  | The ID of the filter |         |

### Get Filters

Get all filters

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection |                               |         |
| Type       | The types of filters to fetch |         |

### Get Lead

Get one lead

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Lead ID    | The ID of the lead |         |

### Get Lead Labels

Get all lead labels

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Leads

Get all leads

| Input           | Comments                                                                                        | Default |
| --------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                 |         |
| Limit           | Items shown per page                                                                            |         |
| Start           | Pagination start                                                                                | 0       |
| Archived Status | Filtering based on the archived status of a lead                                                |         |
| Owner ID        | If supplied, only leads matching the given user will be returned                                |         |
| Filter ID       | The ID of the filter to use                                                                     |         |
| Sort            | The field names and sorting mode separated by a comma ("field_name_1 ASC", "field_name_2 DESC") |         |

### Get Lead Sources

Get all lead sources

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Mail Message

Get one mail message

| Input        | Comments                                        | Default |
| ------------ | ----------------------------------------------- | ------- |
| Connection   |                                                 |         |
| Id           | The ID of the mail message to fetch             |         |
| Include Body | Whether to include the full message body or not | 1       |

### Get Mail Thread

Get one mail thread

| Input          | Comments                  | Default |
| -------------- | ------------------------- | ------- |
| Connection     |                           |         |
| Mail Thread ID | The ID of the mail thread |         |

### Get Mail Thread Messages

Get all mail messages of mail thread

| Input          | Comments                  | Default |
| -------------- | ------------------------- | ------- |
| Connection     |                           |         |
| Mail Thread ID | The ID of the mail thread |         |

### Get Mail Threads

Get mail threads

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection |                             |         |
| Folder     | The type of folder to fetch | inbox   |
| Start      | Pagination start            | 0       |
| Limit      | Items shown per page        |         |

### Get Note Fields

Get all note fields

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Organization

Get details of an organization

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Organization ID | The ID of the organization |         |

### Get Organization Activities

List activities associated with an organization

| Input           | Comments                                                        | Default |
| --------------- | --------------------------------------------------------------- | ------- |
| Connection      |                                                                 |         |
| Organization ID | The ID of the organization                                      |         |
| Start           | Pagination start                                                | 0       |
| Limit           | Items shown per page                                            |         |
| Done            | Whether the activity is done or not                             |         |
| Exclude         | A comma-separated string of activity IDs to exclude from result |         |

### Get Organization Deals

List deals associated with an organization

| Input                    | Comments                                                                                        | Default         |
| ------------------------ | ----------------------------------------------------------------------------------------------- | --------------- |
| Connection               |                                                                                                 |                 |
| Organization ID          | The ID of the organization                                                                      |                 |
| Start                    | Pagination start                                                                                | 0               |
| Limit                    | Items shown per page                                                                            |                 |
| Status                   | Only fetch deals with a specific status                                                         | all_not_deleted |
| Sort                     | The field names and sorting mode separated by a comma ("field_name_1 ASC", "field_name_2 DESC") |                 |
| Only Primary Association | If set, only deals that are directly associated to the organization are fetched                 |                 |

### Get Organization Files

List files attached to an organization

| Input                 | Comments                                                                                        | Default |
| --------------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                 |         |
| Organization ID       | The ID of the organization                                                                      |         |
| Start                 | Pagination start                                                                                | 0       |
| Limit                 | Items shown per page                                                                            |         |
| Include Deleted Files | When enabled, the list of files will also include deleted files                                 |         |
| Sort                  | The field names and sorting mode separated by a comma ("field_name_1 ASC", "field_name_2 DESC") |         |

### Get Organization Followers

List followers of an organization

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Organization ID | The ID of the organization |         |

### Get Organization Mail Messages

List mail messages associated with an organization

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Organization ID | The ID of the organization |         |
| Start           | Pagination start           | 0       |
| Limit           | Items shown per page       |         |

### Get Organization Persons

List persons of an organization

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Organization ID | The ID of the organization |         |
| Start           | Pagination start           | 0       |
| Limit           | Items shown per page       |         |

### Get Organizations

Get all organizations

| Input         | Comments                                                                                                        | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All     | If set to true, all records will be fetched. If set to false, the provided pagination will be used.             | false   |
| Start         | Pagination start                                                                                                | 0       |
| Limit         | Items shown per page                                                                                            |         |
| Sort          | The field names and sorting mode separated by a comma ("field_name_1 ASC", "field_name_2 DESC")                 |         |
| User ID       | If supplied, only organizations owned by the given user will be returned                                        |         |
| Filter ID     | The ID of the filter to use                                                                                     |         |
| First Char    | If supplied, only organizations whose name starts with the specified letter will be returned (case insensitive) |         |
| Debug Request | Enabling this flag will log out the current request.                                                            | false   |
| Connection    |                                                                                                                 |         |

### Get Organization Updates

List updates about an organization

| Input           | Comments                                                         | Default |
| --------------- | ---------------------------------------------------------------- | ------- |
| Connection      |                                                                  |         |
| Organization ID | The ID of the organization                                       |         |
| Start           | Pagination start                                                 | 0       |
| Limit           | Items shown per page                                             |         |
| All Changes     | Whether to show custom field updates or not                      |         |
| Items           | A comma-separated string for filtering out item specific updates |         |

### Get Organization Users

List permitted users

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Organization ID | The ID of the organization |         |

### Get Permission Set

Get one permission set

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Connection        |                              |         |
| Permission Set ID | The ID of the permission set |         |

### Get Permission Set Assignments

List permission set assignments

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Connection        |                              |         |
| Permission Set ID | The ID of the permission set |         |
| Start             | Pagination start             | 0       |
| Limit             | Items shown per page         |         |

### Get Permission Sets

Get all permission sets

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Person

Get details of a person

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Person ID  | The ID of the person |         |

### Get Person Activities

List activities associated with a person

| Input      | Comments                                                        | Default |
| ---------- | --------------------------------------------------------------- | ------- |
| Connection |                                                                 |         |
| Person ID  | The ID of the person                                            |         |
| Start      | Pagination start                                                | 0       |
| Limit      | Items shown per page                                            |         |
| Done       | Whether the activity is done or not                             |         |
| Exclude    | A comma-separated string of activity IDs to exclude from result |         |

### Get Person Deals

List deals associated with a person

| Input      | Comments                                                                                        | Default         |
| ---------- | ----------------------------------------------------------------------------------------------- | --------------- |
| Connection |                                                                                                 |                 |
| Person ID  | The ID of the person                                                                            |                 |
| Start      | Pagination start                                                                                | 0               |
| Limit      | Items shown per page                                                                            |                 |
| Status     | Only fetch deals with a specific status                                                         | all_not_deleted |
| Sort       | The field names and sorting mode separated by a comma ("field_name_1 ASC", "field_name_2 DESC") |                 |

### Get Person Field

Get one person field

| Input           | Comments            | Default |
| --------------- | ------------------- | ------- |
| Connection      |                     |         |
| Person Field ID | The ID of the field |         |

### Get Person Field Details

Get details of a specific field for a person

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection |                                                   |         |
| Field ID   | The ID of the field to fetch details for a person |         |

### Get Person Fields

Get all person fields

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Start      | Pagination start     | 0       |
| Limit      | Items shown per page |         |

### Get Person Files

List files attached to a person

| Input                 | Comments                                                                                        | Default |
| --------------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                 |         |
| Person ID             | The ID of the person                                                                            |         |
| Start                 | Pagination start                                                                                | 0       |
| Limit                 | Items shown per page                                                                            |         |
| Include Deleted Files | When enabled, the list of files will also include deleted files                                 |         |
| Sort                  | The field names and sorting mode separated by a comma ("field_name_1 ASC", "field_name_2 DESC") |         |
