export default {
    actions: {
        async fetchRandomPokemon(ctx) {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
                const pokemons = await response.json();
                
                const randomNumber = Math.floor(Math.random() * 19);
                const randomPokemon = pokemons.results[randomNumber];
                
                const [abilitiesResponse] = await Promise.all([
                    fetch(randomPokemon.url)
                ]);
                
                const pokemonData = await abilitiesResponse.json();

                const pokemon = {
                    name: randomPokemon.name.toUpperCase(),
                    abilities: pokemonData.abilities,
                    baseExperience: pokemonData.base_experience,
                    height: pokemonData.height,
                    heldItems: pokemonData.held_items.length
                };

                ctx.commit('updatePokemon', pokemon);
            } catch (error) {
                console.error("Failed to fetch random Pokemon:", error);
            }
        }
    },
    mutations: {
        updatePokemon(state, pokemon) {
            state.randomPokemon = pokemon;
        }
    },
    state: {
        randomPokemon: null
    },
    getters: {
        getRandomPokemon(state) {
            return state.randomPokemon;
        }
    }
}
