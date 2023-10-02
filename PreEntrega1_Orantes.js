const eleccion=document.getElementById("eleccion")
const elegido=document.getElementById("enviarEleccion")
const mostrar=document.getElementById("listaPokemones")
const container = document.getElementById('pokemon-container');
const containerElegido=document.getElementById("pokeElegido")
let chose
let y
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
elegido.addEventListener("click", enviarEleccion)  


//funcion del boton enviar
function enviarEleccion() {
    y=eleccion.value
    console.log(eleccion.value)
    fetchPokemonData(y); 
}

//array para guardar al elegido
let pokemonDataArray = [];

//para mostrar a los pokemones
async function cargarPokemon() {
  try {
      const response = await fetch(apiUrl + '?limit=20');
    const data = await response.json();

    data.results.forEach(async (pokemon) => {
      const pokemonDataResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonDataResponse.json();
      const nombrePokemon=pokemon.name;
      const nombreElement=document.createElement('p')
      nombreElement.textContent=nombrePokemon
      container.appendChild(nombreElement)
      const imageUrl = pokemonData.sprites.front_default;
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      container.appendChild(imgElement);
    });
  } catch (error) {
    console.error('Error al cargar los Pokémon:', error);
  }
}
window.onload = cargarPokemon;

//para cargar al elegido
function fetchPokemonData(y) {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        for (let r=0; r<=data.results.length; r++){
            pokemonDataArray.push(data.results[r+1]);
        }
        if (pokemonDataArray.length > y) {
          console.log('Pokemon en el índice', y, ':', pokemonDataArray[y]);
        data.results.forEach(async (pokemon) => {
        const pokemonDataResponse = await fetch(pokemon.url);
        const pokemonElement = await pokemonDataResponse.json();
        mostrarPokemon(y);  
      });
        } else {
          console.log('No se encontró un Pokémon en el índice', y);
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos de Pokémon:', error);
      });
  }
numeroPokemon=y

//para mostrar al elegido
async function mostrarPokemon(numeroPokemon) {
    try {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${numeroPokemon}/`;
      const response = await fetch(apiUrl);
      const data = await response.json()
      const imageUrl = data.sprites.front_default;
      const nombrePokemon = data.name;
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      const containerElegido = document.getElementById('pokeElegido');
      containerElegido.innerHTML = ''; // Limpiar cualquier contenido anterior
      containerElegido.appendChild(imgElement);
      const nombreElement = document.createElement('p');
      nombreElement.textContent = nombrePokemon;
      containerElegido.appendChild(nombreElement);
    } catch (error) {
      console.error('Error al cargar el Pokémon:', error);
    }
  }

//para cargar la api
setTimeout(() => {
 
}, 1000); 
