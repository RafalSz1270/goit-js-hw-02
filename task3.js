function checkForSpam(message) {
    const messageToLowerCase = message.toLowerCase;
    console.log(a)
}


checkForSpam("Latest technology news"); // false
checkForSpam("JavaScript weekly newsletter"); // false
checkForSpam("Get best sale offers now!"); // true
checkForSpam("Amazing SalE, only tonight!"); // true
checkForSpam("Trust me, this is not a spam message"); // true
checkForSpam("Get rid of sPaM emails. Our book in on sale!"); // true
checkForSpam("[SPAM] How to earn fast money?"); // true
