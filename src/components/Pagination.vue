<template>
  <nav>
    <ul>
      <li>
        <router-link
          :class="{'is-disabled' : currentPage === 1}"
          :to="{ name: 'page', params: {page: this.currentPage - 1} }"
        >
          <icon name="arrow-left-bold-circle" :size="40"></icon>
        </router-link>
      </li>
      <li>
        <router-link
          :class="{'is-disabled' : currentPage === this.totalPages}"
          :to="{ name: 'page', params: {page: this.currentPage + 1} }"
        >
          <icon name="arrow-right-bold-circle" :size="40"></icon>
        </router-link>
      </li>
    </ul>

    <p><strong class="page-number">{{ currentPage }}</strong> / <strong>{{ totalPages }}</strong></p>
  </nav>
</template>

<script>
		import Icon from './Icon'
export default {
  name: 'Pagination',

  props: {
    currentPage: {
      default: 1
    },

    totalPages: {
      default: 1
    }
  },
		components: { Icon }
}

</script>

<style scoped lang="scss">
  nav {
    margin: 2rem 0 0;
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  li {
    & + & {
      margin-left: 1rem;
    }
  }

  p {
    font-size: 17px;
		font-family: $heading-font-family;
			color: #AAA;
			.page-number {
					font-size: 23px;
					color: $yellow + 2
			}
  }
</style>
