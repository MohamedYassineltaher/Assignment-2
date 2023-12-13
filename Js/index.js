var Quotes = [
    '“The best revenge is massive success.”',
    '“Do not take life too seriously . You will not get out alive.”',
    '“you miss 100% of the shots you don\'t take.”',
    '“Resentment is like drinking posion and waiting for your enemies to die.”',
    '“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”'
   
    
];
var Authers = [
    '-- Frank Sinatra',
    '-- Elbert Hubbard',
    '-- wayne Gretzy',
    '-- Nelson Mandela ',
    '-- Bernard M. Baruch '
    
    

];
Number.parseInt(Math.random()*arrayOfQuotes.length + 1);

function Quote() {
 var  random =Math.floor( (Math.random()* Quotes.length ));

 document.getElementById("quote").innerHTML = Quotes[random]
 document.getElementById("author").innerHTML = Authers[random]

}