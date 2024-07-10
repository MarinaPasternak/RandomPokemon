<template>
    <div class="m-auto flex justify-between h-screen">
      <div class="
          block 
          m-auto p-6 
          max-w-xl 
          bg-white 
        ">  
        <div v-if="getRandomPokemon">
          <h1 class="text-2xl font-black text-center">{{ getRandomPokemon.name }}</h1>
          <p class="font-bold text-center">
            <span class="text-blue-500">Base experience: </span>
            {{ getRandomPokemon.baseExperience }}
          </p>
          <p class="font-bold text-center">
            <span class="text-blue-500">Height: </span>
            {{ getRandomPokemon.height }}
          </p>
          <p class="font-bold text-center">
            <span class="text-blue-500">Held items: </span>
            {{ getRandomPokemon.heldItems }}
          </p>
          <h3 class="font-black text-center">List of abilities:</h3>
          <div class="abilities-list p-2" v-for="pokemonAbility in getRandomPokemon.abilities" 
            :key="pokemonAbility.ability.name"
          >
          <p class="font-bold">{{ pokemonAbility.ability.name }}</p>
          </div>
        </div>
        <div v-else>
           <div class="flex justify-center items-center h-96">
            <span class="loader"></span>
          </div>
        </div>
      </div>
      <div class="image-block flex justify-center items-center w-3/4 ml-4 mb-4 bg-blue-200 rounded-l-lg">
        <img src="./images/pokemon-image.png" alt="Pokemon" class="h-96 p-8 rounded-lg" />
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
  
  <style scoped>

    .abilities-list p::before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 8px;
        background-image: url('./images/pokemon-icon.png');
        background-size: cover;
    }

  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite;
  }
  
  .loader::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid rgb(59 130 246);
    animation: prixClipFix 2s linear infinite ;
  }
  
  @keyframes rotate {
    100% { transform: rotate(360deg); }
  }
  
  @keyframes prixClipFix {
    0%   { clip-path: polygon(50% 50%,0 0,0 0,0 0,0 0,0 0); }
    25%  { clip-path: polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0); }
    50%  { clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%); }
    75%  { clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%); }
    100% { clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0); }
  }
  </style>