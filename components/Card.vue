<template>
  <div class="ba b--black-20 mw5 ma2">
    <div class="flex flex-column items-center pa2 b--black-20">
      <div class="f4">
        {{ person.first_name }} {{ person.last_name }}
      </div>
      <button class="w-100 bg-blue dim mv2 pv2 bn pointer" @click="select(person.id)">
        Select
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Card extends Vue {
  @Prop() person

  select() {
    // no operation
  }
}
</script>
