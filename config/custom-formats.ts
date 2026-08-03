// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
	// Snakewood NatDex
	///////////////////////////////////////////////////////////////////

	{
		section: "Snakewood NatDex",
	},
	{
		name: "[Gen 3] National Dex Ubers",
		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard NatDex', 'Deoxys Camouflage Clause Mod', 'One Baton Pass Clause'],
		banlist: ['Wobbuffet + Leftovers', 'Wynaut + Leftovers', 'Baton Pass'],
	},
];