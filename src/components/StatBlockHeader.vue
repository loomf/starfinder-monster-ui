<template>
  <section class="stat-block-header">
    <div class="header-bar">
      <h1>{{ (Name || 'Unnamed').toUpperCase() }}</h1>
      <h1>CR {{ CR }}</h1>
    </div>
    <h2>XP {{ XP }}</h2>
    {{ Alignment || 'Unaligned' }} {{ Size || 'Unsized' }} {{ Type }} ({{ Subtype }})
    <dl>
      <dt>Init</dt><dd>{{ displayModifier(Initiative) }}</dd>
      <dt>Senses</dt><dd>{{ displayAbilities(Senses) }}</dd>
      <dt>Perception</dt><dd>{{ displayModifier(Perception) }}</dd>
    </dl>
  </section>
</template>

<script>
import util from '@/util'

export default {
  name: 'StatBlockHeader',
  mixins: [util],
  props: [
    'Name',
    'CR',
    'XP',
    'Alignment',
    'Size',
    'Type',
    'Subtype',
    'Initiative',
    'Senses',
    'Perception'
  ]
}
</script>

<style scoped>
.header-bar {
  background-color: black;
  color: white;
  border: none;
}
.header-bar h1 {
  margin: .05em .3em;
}
</style>
