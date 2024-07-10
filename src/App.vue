<template>
    <div id="app">
        <div class="nav pr-5 pl-5">
            <top-header/>
            <see-new-pokemon-button></see-new-pokemon-button>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import TopHeader from './components/TopHeader/TopHeader.vue';
    import SeeNewPokemonButton from './components/SeeNewPokemonButton/SeeNewPokemonButton.vue';
    export default {
        components: { TopHeader, SeeNewPokemonButton },
        name: 'App',
    }
</script>

<style lang="css" scoped>
    #app .nav {
        width: 100%;
    }
</style>
