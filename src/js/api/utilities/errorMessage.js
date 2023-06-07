export function errorMessage(errorArray = []) {
    return errorArray.reduce((message, currentError) => {
        return message += currentError.message + "\n"
    }, "")
}