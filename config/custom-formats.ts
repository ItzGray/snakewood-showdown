// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
	// Snakewood NatDex
	///////////////////////////////////////////////////////////////////

	{
		section: "Snakewood NatDex",
	},
	{
		name: "[Gen 3] National Dex Random Battle",
		mod: 'gen3',
		team: 'random',
		bestOfDefault: true,
		ruleset: ['Standard NatDex'],
	},
	{
		name: "[Gen 3] National Dex Ubers",
		mod: 'gen3',
		ruleset: ['Standard NatDex', 'Deoxys Camouflage Clause Mod', 'One Baton Pass Clause'],
		banlist: ['Skylax + Belly Drum', 'Kenchukuo + Belly Drum'],
	},
	{
		name: "[Gen 3] National Dex",
		mod: 'gen3',
		ruleset: ['Standard NatDex', 'One Boost Passer Clause', 'Accuracy Trap Clause', 'Speed Pass Clause'],
		banlist: ['Uber', 'Soul Dew'],
	},
	{
		name: "[Gen 3] National Dex UU",
		mod: 'gen3',
		ruleset: ['Standard NatDex'],
		banlist: ['Uber', 'OU', 'UUBL'],
	},
	{
		name: "[Gen 3] National Dex RU",
		mod: 'gen3',
		ruleset: ['Standard NatDex'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'RUBL'],
	},
];