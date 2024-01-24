---
title: LearnHub Node.js SDK Documentation
description: |+
  The LearnHub Node.js SDK provides a convenient way to 
  interact with LearnHub APIs in your Node.js applications. 
  This SDK is written in ES module format.
---



### Installation

To install the LearnHub Node.js SDK, use npm:





```bash

npm install @nordic-game-lab/learnhub-api

```


### Usage

Import the `Client` class from the SDK and create a new

instance by providing your API key.





```javascript

import { Client } from '@nordic-game-lab/learnhub-api';





const apiKey = '<Your_API_Key>';

const learnHubClient = new Client(apiKey);

```





## Client Class





### Constructor

#### `new Client(apiKey: string): Client`

- **apiKey (string):** Your LearnHub API key.





### Methods





#### `getUser(email: string): Promise<object>`

- Retrieves user information based on the provided email.

- **email (string):** The email address of the user to retrieve.

- Returns a Promise that resolves to an object containing user details.





#### Example:

```javascript

const user = await learnHubClient.getUser('john.doe@example.com');

console.log(user);

```





### Error Handling

The SDK uses Promises for asynchronous operations. Ensure to handle errors using `try/catch` or `.catch()` with Promises.





```javascript

try {

  const user = await learnHubClient.getUserByEmail('john.doe@example.com');

  console.log(user);

} catch (error) {

  console.error(error.message);

}

```





## Security

Keep your API key confidential. Do not expose it in public repositories or share it with unauthorized individuals.





For more information on obtaining an API key, visit [LearnHub Developers](https://developers.learnhub.nordicgamelab.org).





## Note

This SDK is written in ES module format. Ensure that your Node.js version supports ES modules (Node.js 13.2.0 and later) or use the `.mjs` extension when working with earlier versions.
