
new Vue({
  el: '#app',
  data: {
	"CR": "14",
	"XP": 0,
	"Size": "",
	"Initiative": 0,
	"EAC": 27,
	"KAC": 28,
	"HP": 215,
	"Fort": 12,
	"Reflex": 12,
	"Will": 19,
	"DR": "",
	"Skills": {
		"Computers": 30,
		"Disguise": 25,
		"Engineering": 30,
		"Perception": 25
	},
	"Speed": null,
	"Senses": {},
	"Immunities": {
		"Immunity Critical Hits": {}
	},
	"Resistances": {},
	"Weaknesses": {},
	"Specials": null,
	"Melee": [{
		"DamageDice": {
			"Num": 6,
			"Size": 6
		},
		"AttackBonus": 23,
		"DamageType": "Kinetic"
	}],
	"Ranged": [{
		"DamageDice": {
			"Num": 4,
			"Size": 8
		},
		"AttackBonus": 21,
		"DamageType": "Kinetic"
	}],
	"OffensiveAbilities": {},
	"DefensiveAbilities": {
		"Amorphous": {},
		"Fast Healing": {}
	},
	"SpecialAbilities": {},
	"OtherAbilities": {},
	"STR": 3,
	"DEX": -1,
	"CON": 4,
	"INT": 1,
	"WIS": 6,
	"CHA": 8,
	"Languages": null,
	"AbilityDC": 22,
	"BaseSpellDC": 19
}
})
