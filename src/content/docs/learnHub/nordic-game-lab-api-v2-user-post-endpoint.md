---
title: Nordic Game Lab API v2 - User Post Endpoint
description: This API endpoint allows you to create a new user with the
  specified name and email. To access this endpoint, you need to include the API
  key obtained from Developers LearnHub as a Bearer Token in the Authorization
  header.
---
OverviewThis API endpoint allows you to create a new user with the specified name and email. To access this endpoint, you need to include the API key obtained from Developers LearnHub as a Bearer Token in the Authorization header.Endpoint: POST /v2/userRequestHeadersAuthorization: Bearer <Your_API_Key>BodyThe request body must be a JSON object with the following parameters:name (string): The name of the user.email (string): The email address of the user.Example:{

  "name": "John Doe",

  "email": "john.doe@example.com"

}

Response

Success (HTTP 201 Created)

- id (string): The unique identifier for the created user 
- name (string): The name of the created user.
- email (string): The email address of the created user.Example:{

  "id": "12345",

  "name": "John Doe",

  "email": "john.doe@example.com"

}Error ResponsesHTTP 401 Unauthorized: If the Bearer Token is missing or invalid.HTTP 400 Bad Request: If the request body is missing, or if either name or email is not provided.Example:{

  "error": "Unauthorized",

  "message": "Invalid Bearer Token"

}SecurityTo obtain an API key (Bearer Token), please log in to Developers LearnHub and follow the instructions to generate your token.Note: Keep your API key confidential. Do not share it in public repositories or with unauthorized individuals.
