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

## /drivers/register Endpoint

### Description
Registers a new driver to the system.

### HTTP Method
`POST`

### Required Data

- `firstname` (string, required): Driver's first name (min 3 characters)
- `lastname` (string, optional): Driver's last name (min 3 characters)
- `email` (string, required): Driver's email address (must be a valid email)
- `password` (string, required): Driver's password (min 6 characters)
- `color` (string, required): Vehicle color (min 3 characters)
- `plate` (string, required): Vehicle plate number (min 3 characters)
- `capacity` (integer, required): Vehicle capacity (min 1)
- `vehicleType` (string, required): Type of vehicle (must be one of 'bike', 'car', 'auto')

### Status Codes
- 201: Successfully registered driver
- 400: Validation errors

### Example Response

- `driver` (object):
  - `fullname` (object):
    - `firstname` (string): Driver's first name
    - `lastname` (string): Driver's last name
  - `email` (string): Driver's email address
  - `vehicle` (object):
    - `color` (string): Vehicle color
    - `plate` (string): Vehicle plate number
    - `capacity` (integer): Vehicle capacity
    - `vehicleType` (string): Type of vehicle
  - `status` (string): Driver's status (default is 'active')

## /drivers/login Endpoint

### Description
Logs in an existing driver.

### HTTP Method
`POST`

### Required Data

```json
{
  "email": "john.doe@example.com", // string, required, must be a valid email
  "password": "password123" // string, required, min 6 characters
}
```

### Status Codes
- 200: Successfully logged in
- 400: Validation errors
- 401: Invalid email or password

### Example Response

```json
{
  "token": "jwt_token_here",
  "driver": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "active"
  }
}
```

## /drivers/profile Endpoint

### Description
Fetches the profile of the logged-in driver.

### HTTP Method
`GET`

### Required Data
- `Authorization` (string, required): Bearer token for driver authentication.

### Status Codes
- 200: Successfully fetched driver profile
- 401: Unauthorized access

### Example Response

```json
{
  "driver": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "active"
  }
}
```

## /drivers/logout Endpoint

### Description
Logs out the current driver.

### HTTP Method
`POST`

### Required Data
- `Authorization` (string, required): Bearer token for driver authentication.

### Status Codes
- 200: Successfully logged out
- 401: Unauthorized access

### Example Response

```json
{
  "message": "Successfully logged out"
}
```
