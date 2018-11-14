function printMessage(username, badgeCount, points){
    console.log('*********************************'.red);
    console.log(`${username} du har ${badgeCount} utmärkelser och ${points} poäng.`.green);
    console.log('*********************************'.red);
}

module.exports.printMessage = printMessage;