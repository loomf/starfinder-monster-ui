<template>
  <section>
    <div class="header-bar">
      <h2>OFFENSE</h2>
    </div>
    <dl v-if="Speed">
      <dt>Speed</dt><dd>{{ displaySpeed(Speed) }}</dd>
    </dl>
    <dl v-if="Melee">
      <dt>Melee</dt><dd>{{ displayAttacks(Melee, 'Melee') }}</dd>
    </dl>
    <dl v-if="Ranged">
      <dt>Ranged</dt><dd>{{ displayAttacks(Ranged, 'Ranged') }}</dd>
    </dl>
  </section>
</template>

<script>
import util from '@/util'

export default {
  name: 'StatBlockOffense',
  mixins: [util],
  props: [
    'Speed',
    'Melee',
    'Ranged'
  ]
}
</script>
