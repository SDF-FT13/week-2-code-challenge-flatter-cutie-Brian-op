// Your code here
function getingCharacters() {
fetch("https://json-chi-six.vercel.app/characters/")
.then(response=>response.json )
.then( data => {
    const characterBar= document.getElementById("character-bar")
    data.forEach(character=>{const span =document.getElementById("span");
        span.textContent = character.name;
        span.addEventListener("click",()=>showCharacterDetails(character));
        characterBar.appendChild(span);            
    })
})    

const voteForm = document.getElementById("votes-form")
voteForm.addEventListener("submit",(event)=>{
event.preventDefault();
const votesInput = document.getElementById("votes").value
const voteCount = document.getElementById("vote-count")
const newVotes = parseInt(voteCount.textContent)+parseInt(votesInput)
voteCount.textContent = newVotes
})
}