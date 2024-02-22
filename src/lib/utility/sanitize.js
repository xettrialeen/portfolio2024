const regex = /^[a-zA-Z0-9\s]*$/;

// Function to sanitize user input and check against the regular expression
export function sanitizeAndValidateInput(userTyped) {
    // Sanitize input to remove any potentially dangerous characters
    const sanitizedInput = userTyped.replace(/[<>"']/g, '');
    
    // Check if the sanitized input matches the regular expression
    const isValid = regex.test(sanitizedInput);
    
    return { sanitizedInput, isValid };
}