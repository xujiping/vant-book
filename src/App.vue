<template>
    <div id="app">
        <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
        <router-view />
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {
        }
    }
</script>

<style>
    body {
        background-color: #EFF3F5;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
</style>
