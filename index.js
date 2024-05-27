function writeCards(names, event) {
    let thankYouMessages = [];
    
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    
    return thankYouMessages;
  }
  function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}
countDown(10);
