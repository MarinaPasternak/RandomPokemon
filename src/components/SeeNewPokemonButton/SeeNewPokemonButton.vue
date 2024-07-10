<template>
    <div class="absolute mr-10 mb-10 bottom-0 right-0 pokeball-button" @click="openPokemonRoute">
        <img :src="imageSrc" class="w-full mt-4" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            pokeballImage: require('./images/pokeball.png'),
            openedPokeballImage: require('./images/opened-pokeball.png')
        };
    },
    computed: {
        imageSrc() {
            return this.$route.path === '/pokemon' ? this.openedPokeballImage : this.pokeballImage;
        }
    },
    methods: {
        openPokemonRoute() {
            if (this.$route.path !== '/pokemon') {
                this.$router.push('/pokemon');
            }
        }
    }
}
</script>

<style scoped>
.pokeball-button {
    width: 90px;
}
</style>