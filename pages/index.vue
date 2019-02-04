<template>
  <section>
    <h1 class="m-4 text-center">Some Stuff</h1>
    <p>A paragraph</p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '~/components/Card.vue'

@Component({
  components: {
    Card,
  },
})
export default class IndexPage extends Vue {
  state = ''
}
</script>
