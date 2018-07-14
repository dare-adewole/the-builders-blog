<template>
  <footer>
    Developed by <a href="https://macarthur.me">Dare Adewole</a>
<!--    See <a href="https://www.github.com/alexmacarthur/wp-vue">WP Vue on Github</a>.-->
  </footer>
</template>

<script>
  export default {
    name: 'Foot'
  }
</script>

<style scoped lang="scss">
  footer {
    text-align: center;
    padding: 1rem;
    background: $gray--light;
  }

  a {
    font-weight: bold;
  }
</style>
