<template>
  <nav>

    <h1>
      <router-link
        :to="{
          name: 'home',
        }">
        The Builders
      </router-link>
    </h1>

    <div>
      <button>OUR EVENTS</button>
      <button>GET ADVICE</button>
      <button>GALLERY</button>
      <button class="login">LOGIN</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopBar',

  data () {
    return {}
  },

  computed: {
    splitEndpoint() {
      return this.$store.state.endpoint.split('/')
    },

    sourceURL() {
      return this.splitEndpoint[0] + this.splitEndpoint[1] + this.splitEndpoint[2];
    }
  },

  methods: {
    showUpdater() {
      this.$emit('showUpdater');
    }
  }
}

</script>

<style scoped lang="scss">
  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    align-items: center;
			position: fixed;
			left: 0;
			right: 0;
/*    margin-bottom: 1rem;*/
    background: $white;
    // background: #F7F7F7;
		z-index: 10000;
    padding: 1.5rem 2rem;
    // border-bottom: 2px solid darken($gray--light, 5%);
/*    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.2);*/
/*		box-shadow: inset 0px 10px 50px -4px rgba(0,0,0,.19);*/

    @include media($small) {
      flex-direction: row;
    }
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;

    @include media($mobile) {
      flex-direction: row;
    }
  }

  button {
		font-size: 14px;
		font-weight: 700;
		background-color: transparent;
		color: $blue;
		transition: all .25s ease-out 0s;
			&.login {
				background-color: $yellow;
				color: $white;
			}
			&:hover {
					opacity: 0.5;
					transform: scale(1.05);
			}
    @include media($mobile) {
      margin: 0 0 0 1rem;
    }
  }

  h1 {
    margin: 0;
  }

  a {
	  font-family: $special-heading-font-family;
/*    font-weight: 600;*/
    color: $blue;
    font-size: 33px;
/*		text-shadow: 0 0 .3em #888;*/
  }

  p {
    text-align: center;
    margin: .5rem 0 1rem;

    @include media($mobile) {
      margin: 0;
      text-align: right;
    }
  }
</style>

