<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    // if (this.$device.android || this.$device.iphone) {
    //   this.$router.push({ name: 'apptemplate' })
    // }
    // console.log(this.$device.android) // false
    const externalScript = document.createElement('script')
    externalScript.setAttribute('src', '../js/core.js')
    externalScript.setAttribute('type', 'text/javascript')
    document.head.appendChild(externalScript)
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
