// Your code here
//fetch & display character names
//show character details when clicked
//handle votes properly
//adding new characters
//updating server with votes
//>>>fetch
function getingCharacters() {
 fetch("https://json-chi-six.vercel.app/characters/")
 .then(response=>response.json )
 .then( data => {
    const characterBar= document.getElementById("character-bar")
    characterBar.innerHTML="";

    data.forEach(character=>{
        const span =document.getElementById("span");
        span.textContent = character.name;
        span.addEventListener("click",()=>showCharacterDetails(character));
        characterBar.appendChild(span);            
    })
 })    
 .catch(error=>console.log("Characters not fetched",error));

getingCharacters();
//>>>>>>done fetching

// display character details
function showCharacterDetails(character){
    const name=document.getElementById("name")
    const image = document.getElementById("image")
    const voteCount = document.getElementById("vote-count")
 //updating 
    name.textContent=character.name
    image.src=character.image
    image.alt=character.name
    voteCount.textContent =character.votes 
}

document.getElementById("votes-form").addEventListener("submit",(event)=>{
    event.preventDefault()
    const votesInput = document.getElementById("votes")
   const voteCount = document.getElementById("vote-count")

   let newVotes= parseInt(votesInput.value)||0
    votesInput.textContent=parseInt(voteCount.textContent)+newVotes 
 
 votesInput.value=""
})



}