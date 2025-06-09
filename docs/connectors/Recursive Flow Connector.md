---
title: Recursive Flow Connector
sidebar_label: Recursive Flow
description: This component allows a flow to call itself with a cursor in order to process large amounts of data in serial.
---

![Recursive Flow](./assets/recursive-flow.png#connector-icon)
This component allows a flow to call itself with a cursor in order to process large amounts of data in serial.

## Triggers

### Recursive Trigger

Accept a request from an 'Invoke Recursive Trigger' step

| Input                | Comments                                                                                                                                                                                                                                       | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Run on Deploy?       | Run this flow automatically when an instance is deployed.                                                                                                                                                                                      | false   |
| Default Cursor Value | The default value to return as a cursor if no cursor was supplied in a trigger payload. For example, you could set this to '1970-01-01T00:00:00Z' (Unix Epoch) if your cursor is a creation timestamp, or '0' if your cursor is a page number. |         |

## Actions

### Get Recursive Cursor

Get the current value of the recursive trigger cursor

### Invoke Recursive Trigger

Invoke the current flow with the current cursor

### Set Recursive Cursor

Set the value of the recursive cursor for the next loop iteration or recursive trigger invocation

| Input  | Comments                                                                                    | Default |
| ------ | ------------------------------------------------------------------------------------------- | ------- |
| Cursor | The programmatic cursor to set for the next loop iteration or recursive trigger invocation. |         |
