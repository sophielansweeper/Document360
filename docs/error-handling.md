---
title: Error Handling
description: Errors happen. Here's how you can handle errors gracefully.
---

Errors happen.
An API you pull data from may encounter a temporary outage, or the "eventually" part of an "eventually consistent" database may need a couple more seconds to save a record.
When you encounter errors, you have two tools to handle them:

1. Workflow-level error handling
2. Step-level error handling

## Workflow-level error handling

If an execution fails, you can have the runner automatically retry a few minutes later.
The webhook payload that you received will be passed back through your flow again, and your flow will start again at its first step.
This is handy if your flow is [idempotent](https://en.wikipedia.org/wiki/Idempotence) and you don't know which step might fail.

To configure automatic retry, select the gear icon (Workflow Details button) on the left side of the canvas, and then select **Configure Workflow retry**.
You can configure your Workflow to retry a certain number of times, waiting some number of minutes between retries.

![Workflow-level error handling](./assets/error-handling/flow-level-error-handling.png)

## Step-level error handling

You might not want your entire Workflow to stop because one step failed, especially if you're looping over hundreds of items and one item has issues.

You can configure how the runner should handle errors on each step.
To do that, click a step that you would like to configure, and then open the **Error Handling** tab in the step configuration drawer.

![Step-level error handling](./assets/error-handling/step-level-error-handling.png)

Under **Error Handler Type** you have three options:

- **Fail** - stop the Workflow and throw an error.
- **Ignore** - ignore the error and continue running the remaining steps.
- **Retry** - wait for an amount of time (**Seconds between attempts**) and then try the step again, a maximum of **Retry attempts** times.
  If the last attempt still fails, either fail the integration or ignore the error depending on if **Ignore Final Error** is true or false.
