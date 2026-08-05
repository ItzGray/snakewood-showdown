// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [

	// Snakewood
	///////////////////////////////////////////////////////////////////

	{
		section: "Snakewood",
	},
	{
		name: "[Gen 3] Ubers",
		mod: 'gen3',
		ruleset: ['Standard', 'Deoxys Camouflage Clause Mod', 'One Baton Pass Clause'],
		banlist: ['Skylax + Belly Drum', 'Kenchukuo + Belly Drum'],
	},
	{
		name: "[Gen 3] OU",
		mod: 'gen3',
		ruleset: ['Standard', 'One Boost Passer Clause', 'Accuracy Trap Clause', 'Speed Pass Clause'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 3] Doubles OU",
		mod: 'gen3',
		gameType: 'doubles',
		ruleset: ['Standard', '!Switch Priority Clause Mod'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 3] UU",
		mod: 'gen3',
		ruleset: ['Standard'],
		banlist: ['Uber', 'OU', 'UUBL'],
	},
	{
		name: "[Gen 3] RU",
		mod: 'gen3',
		ruleset: ['Standard'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'RUBL'],
	},
	{
		name: "[Gen 3] NU",
		mod: 'gen3',
		ruleset: ['Standard', 'One Boost Passer Clause'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'NUBL'],
	},
	{
		name: "[Gen 3] PU",
		mod: 'gen3',
		ruleset: ['Standard', 'Baton Pass Stat Clause'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'NUBL', 'NU', 'PUBL'],
	},
	{
		name: "[Gen 3] LC",
		mod: 'gen3',
		ruleset: ['Standard', 'Little Cup', 'Pomeg Glitch Clause', 'Sleep Moves Clause', 'Accuracy Moves Clause'],
		banlist: [],
	},
	{
		name: "[Gen 3] ZU",
		mod: 'gen3',
		ruleset: ['Standard', 'Sleep Moves Clause', 'Baton Pass Stat Trap Clause'],
		banlist: ['Uber', 'OU', 'UUBL', 'UU', 'RUBL', 'RU', 'NUBL', 'NU', 'PUBL', 'PU', 'ZUBL'],
	},
	{
		name: "[Gen 3] Custom Game",
		mod: 'gen3',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 3] Doubles Custom Game",
		mod: 'gen3',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
];
