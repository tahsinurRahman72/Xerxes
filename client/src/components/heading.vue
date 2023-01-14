<template>
<header>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-absolute bg-transparent shadow-none">
    <div class="container">
      <a class="navbar-brand text-white" href="javascript:;">PDF-Guardian</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-header-2" aria-controls="navbar-header-2" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-header-2">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a v-on:click="goHome()" class="nav-link text-white">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="javascript:;">
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="javascript:;">
              Leave a Review
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
</template>

<script>
export default {
  name: 'heading',
  data () {
    return {
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
      this.$router.go()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
