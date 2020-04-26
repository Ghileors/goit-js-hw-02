const checkForSpam = function(message) {
    let normalizeMessage = message.toLowerCase();
    for (let i = 0; i < message.length; i ++) {
        if (normalizeMessage.includes('spam' || 'sale')) {
            return true;
        }
    }
    return false;
};
  
  
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true