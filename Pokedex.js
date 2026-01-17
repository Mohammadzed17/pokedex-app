
async function fetchData(){

    try{
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    
        if(!response.ok){
            alert("Could not found Information About That Pokemon");
            throw new Error("Could not found Information About That Pokemon");
        }

        const data = await response.json();
        const imgElement = document.getElementById("imgElement");
        const pokemonSprite = data.sprites.front_default;

        imgElement.src = pokemonSprite;
        imgElement.style.display = `block`;
    }
    catch(error){
        console.error(error);
    }
}
