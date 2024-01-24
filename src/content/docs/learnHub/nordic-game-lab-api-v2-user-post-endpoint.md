---
title: Nordic Game Lab API v2 - User Post Endpoint
description: This API endpoint allows you to create a new user with the
  specified name and email. To access this endpoint, you need to include the API
  key obtained from LearnHub Developers as a Bearer Token in the Authorization
  header.
---

import { Tabs, TabItem } from '@astrojs/starlight/components';

# Overview

This API endpoint allows you to create a new user with the specified `name` and `email`. To access this endpoint, you need to include the API key obtained from [LearnHub Developers](https://developers.learnhub.nordicgamelab.org) as a Bearer Token in the Authorization header.

Endpoint: `POST /v2/user`

# Request

## Example:

<Tabs>
 <TabItem label="Curl">
    ```
    curl --location 'https://api.nordicgamelab.org/v2/user' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer 1#50%Z$#$33*x5@33^&7' \
    --data-raw '{
    "name": "test user",
    "email": "testuser@test.com"
    }'
    ```
  </TabItem>
  <TabItem label="Node JS SDK">
    ```
    import { Client } from '@nordic-game-lab/learnhub-api';

    const apiKey = '<Your_API_Key>';

    const learnHubClient = new Client(apiKey);

    const body = {
      "email": "testuser@test.com",
      "name": "Test User"
    }
    const user = await learnHubClient.createUser(body);

    console.log(user);
    ```
  </TabItem>
</Tabs>

## Headers

- **Authorization:** Bearer `<Your_API_Key>`

## Body

The request body must be a JSON object with the following parameters:

- **name (string):** The name of the user.
- **email (string):** The email address of the user.

### Example:

```
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

# Response

## Success (HTTP 201 Created)

- **id (string):** The unique identifier for the created user
- **name (string):** The name of the created user.
- **email (string):** The email address of the created user.

### Example:

```
{
  "id": "12345",
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

## Error Responses

- **HTTP 401 Unauthorized:** If the Bearer Token is missing or invalid.
- **HTTP 400 Bad Request:** If the request body is missing, or if either name or email is not provided.

### Example:

```
{
  "error": "Unauthorized",
  "message": "Invalid Bearer Token"
}
```

# Security

To obtain an API key (Bearer Token), please log in to [LearnHub Developers](https://developers.learnhub.nordicgamelab.org) and follow the instructions to generate your token.

**Note:** Keep your API key confidential. Do not share it in public repositories or with unauthorized individuals.
