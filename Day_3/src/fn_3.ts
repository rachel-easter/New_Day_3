// Optional parameter:
// If you want to use it, syntax = parameter?: type

// Example:
function printMessage(mainMessage: string, additionalMessage?: string): void {
    if (typeof additionalMessage !== 'undefined') {
        console.log(mainMessage.concat(additionalMessage));
    } else {
        console.log(mainMessage);
    }
}

// Test cases
printMessage('Hello');
printMessage('Hello', 'World');
