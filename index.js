function writeCards(names, events) {
    let messages=[]
    for(let i=0; i<names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)

    }
    return messages;

}function countDown(ptvenumber) {
   //let i=0;
   while (ptvenumber>=0) {
    console.log(ptvenumber);
     ptvenumber--;
   }

}