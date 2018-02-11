<template>
  <section>
    <div class="header-bar">
      <h2>STATISTICS</h2>
    </div>
    <dl>
      <dt>Str</dt><dd>{{ STR }}</dd>
      <dt>Dex</dt><dd>{{ DEX }}</dd>
      <dt>Con</dt><dd>{{ CON }}</dd>
      <dt>Int</dt><dd>{{ INT }}</dd>
      <dt>Wis</dt><dd>{{ WIS }}</dd>
      <dt>Cha</dt><dd>{{ CHA }}</dd>
    </dl>
    <dl>
      <dt>Skills</dt><dd>{{ displaySkills(Skills) }}</dd>
    </dl>
    <dl v-if="Languages">
      <dt>Languages</dt><dd>{{ displayLanguages(Languages) }}</dd>
    </dl>
    <dl v-if="OtherAbilities">
      <dt>Other Abilities</dt><dd>{{ displayAbilities(OtherAbilities) }}</dd>
    </dl>
  </section>
</template>

<script>
import util from '@/util'

export default {
  name: 'StatBlockDefense',
  mixins: [util],
  props: [
    'STR',
    'DEX',
    'CON',
    'INT',
    'WIS',
    'CHA',
    'Skills',
    'Languages',
    'OtherAbilities'
  ]
}
</script>
