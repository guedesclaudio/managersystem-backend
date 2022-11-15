const statusCode = {
    OK: 200,
    CREATED: 201,
    NOT_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE: 422,
    SERVER_ERROR: 500
}

Object.freeze(statusCode)

export default statusCode