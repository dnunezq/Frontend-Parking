<template>
  <div id="nav">
    <router-link to="/">Historial</router-link> |
    
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: Hex #1892F2;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: Hex #1892F2;
}

#nav a.router-link-exact-active {
  color: #109DFA;
}
</style>
