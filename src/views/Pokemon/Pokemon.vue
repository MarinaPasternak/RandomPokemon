<template>
 <div class="m-auto flex justify-between">
        <div class="
            block 
            m-auto p-6 
            max-w-xl 
            bg-white 
            pokemon-card
        ">  
            <div v-if="getRandomPokemon">
                <h1 class="text-2xl font-black">{{ getRandomPokemon.name }}</h1>
                <p class="font-bold">
                    <span class="text-blue-500">Base experience: </span>
                    {{ getRandomPokemon.baseExperience }}
                </p>
                <p class="font-bold">
                    <span class="text-blue-500">Height: </span>
                    {{ getRandomPokemon.height }}
                </p>
                <p class="font-bold">
                    <span class="text-blue-500">Held items: </span>
                    {{ getRandomPokemon.heldItems }}
                </p>
                <h3 class="font-black">List of abilities:</h3>
                <div class="abilities-list" v-for="pokemonAbility in getRandomPokemon.abilities" 
                    :key="pokemonAbility.ability.name"
                >
                    <p class="font-bold">{{ pokemonAbility.ability.name }}</p>
                </div>
            </div>
            <div v-else>
                <p class="font-bold text-2xl text-green-500">
                    Oops... Something went wrong!
                </p>
            </div>
        </div>
        <div class="image-block flex justify-center items-center w-3/4 ml-4 bg-blue-200 rounded-l-lg">
            <img src="./images/pokemon-image.png" alt="Pokemon" class="h-96 p-8" />
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        computed: mapGetters(['getRandomPokemon']),
        methods: mapActions(['fetchRandomPokemon']),
        async mounted() {
            this.fetchRandomPokemon();
        }
    }
</script>

<style lang="css" scoped>
    .pokemon-card p {
        text-align: left;
    }

    .pokemon-card h1,  .pokemon-card h3{
        text-align: center;
    }

    .abilities-list p::before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 8px;
        background-image: url('./images/pokemon-icon.png');
        background-size: cover;
    }
</style>
