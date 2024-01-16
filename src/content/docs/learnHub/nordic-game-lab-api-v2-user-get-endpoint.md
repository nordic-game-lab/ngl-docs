---
title: Nordic Game Lab API v2 - User Get Endpoint
description: This API endpoint allows you to retrieve user information based on
  the specified `email`. To access this endpoint, you need to include the API
  key obtained from https://developers.learnhub.nordicgamelab.org as a Bearer
  Token in the Authorization header.
---








**Endpoint:** `GET /v2/user`





## Request





### Headers

- **Authorization:** Bearer `<Your_API_Key>`





### Query Parameters

- **email (string):** The email address of the user to retrieve.





#### Example:

```

/v2/user?email=john.doe@example.com

```





## Response





### Success (HTTP 200 OK)

- **id (string):** The unique identifier for the user.

- **name (string):** The name of the user.

- **email (string):** The email address of the user.





#### Example:

```
{
  "id": "12345",
  "name": "John Doe",
  "email": "john.doe@example.com"
}

```





### Error Responses

- **HTTP 401 Unauthorized:** If the Bearer Token is missing or invalid.

- **HTTP 400 Bad Request:** If the `email` query parameter is missing.





#### Example:

```

{

  "error": "Unauthorized",

  "message": "Invalid Bearer Token"

}

```





## Security

To obtain an API key (Bearer Token), please log in to [Developers LearnHub](https://developers.learnhub.nordicgamelab.org) and follow the instructions to generate your token.





**Note:** Keep your API key confidential. Do not share it in public repositories or with unauthorized individuals.
