<template>
  <section>
    <div class="header-bar">
      <h2>DEFENSE</h2>
      <dl><dt>HP</dt><dd>{{ HP }}</dd></dl>
    </div>
    <dl>
      <dt>EAC</dt><dd>{{ EAC }}</dd>
      <dt>KAC</dt><dd>{{ KAC }}</dd>
    </dl>
    <dl>
      <dt>Fort</dt><dd>{{ displayModifier(Fort) }}</dd>
      <dt>Ref</dt><dd>{{ displayModifier(Reflex) }}</dd>
      <dt>Will</dt><dd>{{ displayModifier(Will) }}</dd>
    </dl>
    <dl>
      <template v-if="DefensiveAbilities">
        <dt>Defensive Abilities</dt><dd>{{ displayAbilities(DefensiveAbilities) }}</dd>
      </template>
      <template v-if="Immunities">
        <dt>Immunities</dt><dd>{{ displayAbilities(Immunities) }}</dd>
      </template>
    </dl>
    <dl v-if="Weaknesses">
      <dt>Weaknesses</dt><dd>{{ displayAbilities(Weaknesses) }}</dd>
    </dl>
  </section>
</template>

<script>
import util from '@/util'

export default {
  name: 'StatBlockDefense',
  mixins: [util],
  props: [
    'HP',
    'EAC',
    'KAC',
    'Fort',
    'Reflex',
    'Will',
    'DefensiveAbilities',
    'Immunities',
    'Weaknesses'
  ]
}
</script>
