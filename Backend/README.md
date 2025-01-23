# Backend API Documentation

##  /users/register Endpoints

### Description
Registers a new user to the system.

### HTTP Method
`POST`

### Required Data

 - `fullname` (object).
    - `firstname` (string, required): user's first name (min 3 characters)
    - `lasttname` (string, optional): user's first name (min 3 characters)
  - `email` (string, required): user's email address (must be a valid email)
  - `password` (string, required): user's password (min 6 characters)

### Status Codes
- 201: Successfully created user  
- 400: Validation errors or user already exists

### Example Response 

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): user's first name (min 3 characters)
    - `lasttname` (string): user's first name (min 3 characters)
  - `email` (string): user's email address (must be a valid email)
  - `password` (string): user's password (min 6 characters)

## /users/login Endpoint

### Description
Logs in an existing user.

### HTTP Method
`POST`

### Required Data
- `email` (string, required): User's email (must be valid).
- `password` (string, required): User's password (min 6 characters).

### Status Codes
- 200: Successfully logged in
- 400: Validation errors
- 401: Invalid email or password

### Example Response

 `user` (object):
  - `fullname` (object).
    - `firstname` (string): user's first name (min 3 characters)
    - `lasttname` (string): user's first name (min 3 characters)
  - `email` (string): user's email address (must be a valid email)
  - `password` (string): user's password (min 6 characters)
  

## /users/profile Endpoint

### Description
Fetches the profile of the logged-in user.

### HTTP Method
`GET`

### Required Data
- `Authorization` (string, required): Bearer token for user authentication.

### Status Codes
- 200: Successfully fetched user profile
- 401: Unauthorized access

### Example Response

- `user` (object):
  - `fullname` (object):
    - `firstname` (string): user's first name
    - `lastname` (string): user's last name
  - `email` (string): user's email address

## /users/logout Endpoint

### Description
Logs out the current user.

### HTTP Method
`POST`

### Required Data
- `Authorization` (string, required): Bearer token for user authentication.

### Status Codes
- 200: Successfully logged out
- 401: Unauthorized access

### Example Response

- `message` (string): "Successfully logged out"
