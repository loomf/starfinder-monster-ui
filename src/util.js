export default {
  methods: {
    displayModifier: function (num) {
      if (num < 0) {
        return num.toString()
      } else {
        return '+' + num.toString()
      }
    },
    displayAbilities: function (abilityMap) {
      return Object.keys(abilityMap).join(', ')
    },
    displaySpeed: function (speedMap) {
      return Object.entries(speedMap).map(([type, speed]) => (type === 'Land' ? '' : type + ' ') + speed + 'ft.').join(', ')
    },
    displayDice: function (dice) {
      return dice.Num + 'd' + dice.Size
    },
    displayAttack: function (attack, type) {
      return type + ' ' + this.displayModifier(attack.AttackBonus) + ' (' + this.displayDice(attack.DamageDice) + (type === 'Melee' ? '+Str' : '') + ' ' + attack.DamageType[0] + ')'
    },
    displayAttacks: function (attacks, type) {
      return attacks.map(attack => this.displayAttack(attack, type)).join(', ')
    },
    displaySkills: function (skills) {
      return Object.entries(skills).map(([skill, mod]) => skill + ' ' + this.displayModifier(mod)).join(', ')
    }
  }
}
