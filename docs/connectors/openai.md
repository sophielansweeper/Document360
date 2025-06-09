---
title: OpenAI Connector
sidebar_label: OpenAI
description: Interact with OpenAI's models including GPT-4, GPT-3.5 Turbo, and DALL·E 3
---

![OpenAI](./assets/openai.png#connector-icon)
Interact with OpenAI&#x27;s models including GPT-4, GPT-3.5 Turbo, and DALL·E 3

## Connections

### OpenAI API Key

Connect to OpenAI using an API key

| Input        | Comments                                                                         | Default |
| ------------ | -------------------------------------------------------------------------------- | ------- |
| API Key      | Generate an API key at https://platform.openai.com/account/api-keys              |         |
| Organization | Your organization ID. If you have just one organization, this value is optional. |         |

## Actions

### Create Chat Completion

Create a completion for the chat message

| Input             | Comments                                                                                                                                                                                                                                    | Default                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection        |                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                               |
| Model             | Select an OpenAI model to use for the request. The list of available models will be fetched from your OpenAI account.                                                                                                                       | gpt-3.5-turbo                                                                                                                                                                                                                                                                                                                                                                                                 |
| Messages          |                                                                                                                                                                                                                                             | <code>[<br /> {<br /> "role": "system",<br /> "content": "You are a helpful assistant."<br /> },<br /> {<br /> "role": "user",<br /> "content": "Who won the world series in 2020?"<br /> },<br /> {<br /> "role": "assistant",<br /> "content": "The Los Angeles Dodgers won the World Series in 2020."<br /> },<br /> {<br /> "role": "user",<br /> "content": "Where was it played?"<br /> }<br />]</code> |
| Temperature       | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.                                                        | 1                                                                                                                                                                                                                                                                                                                                                                                                             |
| top_p             | An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. | 1                                                                                                                                                                                                                                                                                                                                                                                                             |
| Number of choices | How many chat completion choices to generate for each input message.                                                                                                                                                                        | 1                                                                                                                                                                                                                                                                                                                                                                                                             |
| Timeout (ms)      | The maximum amount of time (in MS) to wait for a response.                                                                                                                                                                                  | 10000                                                                                                                                                                                                                                                                                                                                                                                                         |

### Create Image

Create image(s) given a prompt

| Input            | Comments                                                                           | Default   |
| ---------------- | ---------------------------------------------------------------------------------- | --------- |
| Connection       |                                                                                    |           |
| Prompt           | A text description of the desired image(s). The maximum length is 1000 characters. |           |
| Number of Images | The number of images to generate. Must be between 1 and 10.                        | 1         |
| Image Size       | The size of the generated images. Must be one of 256x256, 512x512, or 1024x1024.   | 1024x1024 |
| Timeout (ms)     | The maximum amount of time (in MS) to wait for a response.                         | 10000     |

### Create Response

Create a response using the responses endpoint

| Input        | Comments                                                                                                              | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                       |         |
| Model        | Select an OpenAI model to use for the request. The list of available models will be fetched from your OpenAI account. | gpt-4.1 |
| Input        | The input text to process                                                                                             |         |
| Timeout (ms) | The maximum amount of time (in MS) to wait for a response.                                                            | 10000   |

### Get Model by ID

Get model by ID

| Input        | Comments                                                                                                              | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                       |         |
| Model        | Select an OpenAI model to use for the request. The list of available models will be fetched from your OpenAI account. |         |
| Timeout (ms) | The maximum amount of time (in MS) to wait for a response.                                                            | 10000   |

### List Models

List all available models

| Input        | Comments                                                   | Default |
| ------------ | ---------------------------------------------------------- | ------- |
| Connection   |                                                            |         |
| Timeout (ms) | The maximum amount of time (in MS) to wait for a response. | 10000   |

### Raw Request

Send raw HTTP request to OpenAI

| Input                   | Comments                                                                                                                                                                                                                                | Default    |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Connection              |                                                                                                                                                                                                                                         |            |
| URL                     | Input the path only (/v1/images/generations), The base URL is already included (https://api.openai.com). For example, to connect to https://api.openai.com/v1/images/generations, only /v1/images/generations is entered in this field. | /v1/models |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                 |            |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                               |            |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                    |            |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                        |            |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                  |            |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                     |            |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                             |            |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                | json       |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                     |            |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                    | false      |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                     | 0          |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                        | false      |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                     | 0          |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                           | false      |
