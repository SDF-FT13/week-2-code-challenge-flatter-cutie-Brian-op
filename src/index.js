// Your code here
fetch("https://json-chi-six.vercel.app/characters/")
.then(response=>response.json )
.then( data => console.log(data))
.catch(error=>console.log(error))
console.log();

