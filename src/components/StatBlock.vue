<template>
  <div class="stat-block">
    <StatBlockHeader v-bind="stats"
      :Senses="stats.Abilities.SENSE"
      :Perception="stats.Skills.Perception"
    />
    <StatBlockDefense v-bind="stats"
      :DefensiveAbilities="stats.Abilities.DEFENSE"
      :Immunities="stats.Abilities.IMMUNITY"
      :Weaknesses="stats.Abilities.WEAKNESS"
    />
    <StatBlockOffense v-bind="stats" />
    <StatBlockStatistics v-bind="stats"
      :OtherAbilities="stats.Abilities.OTHER"
    />
    <StatBlockOffense v-bind="stats" />
    <StatBlockOffense v-bind="stats" />
    <StatBlockOffense v-bind="stats" />
    <StatBlockOffense v-bind="stats" />
    <StatBlockOffense v-bind="stats" />
    <StatBlockOffense v-bind="stats" />
  </div>
</template>

<script>
import StatBlockHeader from './StatBlockHeader'
import StatBlockDefense from './StatBlockDefense'
import StatBlockOffense from './StatBlockOffense'
import StatBlockStatistics from './StatBlockStatistics'

export default {
  name: 'StatBlock',
  components: {
    StatBlockHeader,
    StatBlockDefense,
    StatBlockOffense,
    StatBlockStatistics
  },
  props: ['stats'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.stat-block {
  display: flex;
  flex-flow: column wrap;
  > section {
    flex: 0 0 auto;
    max-width: 20em;
  }
  dt {
    display: inline;
    font-weight: bold;
  }
  dd {
    display: inline;
    margin-left: .5em;
  }
  dd:not(:last-child)::after {
    content: "; ";
  }
  h2 {
    font-size: 1.2em;
    margin-top: .05em;
    margin-bottom: .5em;
  }
  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: .1em solid black;

    > * {
      font-size: 1.2em;
      margin-bottom: -0.25em;
    }
  }
}
</style>
