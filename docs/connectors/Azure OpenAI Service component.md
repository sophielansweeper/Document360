![Azure OpenAI Service](./assets/azure-openai-service.png#connector-icon)
Interact with OpenAI models, including Chat GPT and DALL·E

## Connections

### OpenAI API Key

| Input         | Comments                                                                                                       | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| API Key       | This API KEY Generate an API key at https://platform.openai.com/account/api-keys or your Azure OpenAI API KEY. |         |
| Organization  | Your Azure OpenAI organization. If using a OpenAI API KEY, this is not required.                               |         |
| Is OpenAI Key | Set to true if this api key belongs to an OpenAI account.                                                      | false   |

## Actions

### Create Chat Completion

Create a completion for the chat message

| Input                   | Comments                                                                                                                                                                                                                                    | Default                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection              |                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                               |
| Model / Deployment Name | Specifies either the model deployment name (when using Azure OpenAI) or model name (when using non-Azure OpenAI) to use for this request.                                                                                                   | gpt-3.5-turbo                                                                                                                                                                                                                                                                                                                                                                                                 |
| Messages                |                                                                                                                                                                                                                                             | <code>[<br /> {<br /> "role": "system",<br /> "content": "You are a helpful assistant."<br /> },<br /> {<br /> "role": "user",<br /> "content": "Who won the world series in 2020?"<br /> },<br /> {<br /> "role": "assistant",<br /> "content": "The Los Angeles Dodgers won the World Series in 2020."<br /> },<br /> {<br /> "role": "user",<br /> "content": "Where was it played?"<br /> }<br />]</code> |
| Temperature             | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.                                                        | 1                                                                                                                                                                                                                                                                                                                                                                                                             |
| top_p                   | An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. | 1                                                                                                                                                                                                                                                                                                                                                                                                             |
| Number of choices       | How many chat completion choices to generate for each input message.                                                                                                                                                                        | 1                                                                                                                                                                                                                                                                                                                                                                                                             |

### Create Image

Create image(s) given a prompt

| Input            | Comments                                                                             | Default   |
| ---------------- | ------------------------------------------------------------------------------------ | --------- |
| Connection       |                                                                                      |           |
| Prompt           | A text description of the desired image(s). The maximum length is 1000 characters.   |           |
| Number of Images | The number of images to generate. Must be between 1 and 10.                          | 1         |
| Image Size       | The size of the generated images. Must be one of 1792x1024, 1024x1792, or 1024x1024. | 1024x1024 |

### Create Multiple Chat Completion

Generate Multiple Completions

| Input                   | Comments                                                                                                                                  | Default                                                                                                                                                                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection              |                                                                                                                                           |                                                                                                                                                                                                                                                                           |
| Model / Deployment Name | Specifies either the model deployment name (when using Azure OpenAI) or model name (when using non-Azure OpenAI) to use for this request. | text-davinci-003                                                                                                                                                                                                                                                          |
| Messages                |                                                                                                                                           | <code>[<br /> "How are you today?",<br /> "What is Azure OpenAI?",<br /> "Why do children love dinosaurs?",<br /> "Generate a proof of Euler's identity",<br /> "Describe in single words only the good things that come into your mind about your mother."<br />]</code> |

### Raw Request

Send raw HTTP request to Azure OpenAI

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
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                                                                              | 0          |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                                                                                         | false      |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                                                                               | 0          |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                                                                                        | false      |

### Summarize Text

Summarize a given text

| Input                   | Comments                                                                                                                                  | Default          |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Connection              |                                                                                                                                           |                  |
| Model / Deployment Name | Specifies either the model deployment name (when using Azure OpenAI) or model name (when using non-Azure OpenAI) to use for this request. | text-davinci-003 |
| Text to Summarize       |                                                                                                                                           |                  |
