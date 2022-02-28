//get data from url api
var pokeName=document.getElementById("pokeName")
var pokeNum=document.getElementById("pokeNum")
var pokeWeight=document.getElementById("pokeWeight")
var pokeHeight=document.getElementById("pokeHeight")
var pokeTye=document.getElementById("pokeType")
var pokeAble=document.getElementById("pokeAble")
var pokeImage=document.getElementById("pokeImage")
var btn=document.getElementById("subButton")
var pokeImage1=document.getElementById("pokeImage1")

function pokedox()
{
    let Name=document.getElementById("inputName").value;
fetch(`https://pokeapi.co/api/v2/pokemon/${Name}`)
//use .then to handle the response/reject promise
.then((res)=>{
   return res.json()
})
.then((data)=>{
    
    pokeName.innerHTML ="Pokename:" + data.name;
    pokeNum.textContent="PokemonID:"+ data.id;
    pokeWeight.textContent="Pokemon Weight:"+data.weight;
    pokeHeight.innerHTML="Pokemon height:"+data.height;
    pokeType.textContent="Pokemon Type:"+data.types[0].type.name;
    pokeAble.textContent="Pokemon Ability:"+data.abilities[0].ability.name;
    pokeImage.setAttribute('src',`${data.sprites.front_default}`)
    pokeImage1.setAttribute('src',`${data.sprites.back_shiny}`)
})
}
btn.addEventListener('click',pokedox)