import json

TYPES = [
	"Normal",
	"Fire",
	"Water",
	"Electric",
	"Grass",
	"Ice",
	"Fighting",
	"Poison",
	"Ground",
	"Flying",
	"Psychic",
	"Bug",
	"Rock",
	"Ghost",
	"Dragon",
	"Dark",
	"Steel",
	"???"
]

with open("sets.json", "r") as sets_json:
	sets = json.load(sets_json)

with open("move_ids.txt", "r") as move_ids_txt:
	move_ids = move_ids_txt.read().split("\n")

with open("abilities.txt", "r") as abilities_txt:
	ability_names = abilities_txt.read().split("\n")

print(f"Amount of pokemon: {len(sets.keys())}")
no_errors = True
pkmns = []
set_count = 0
for pkmn in sets.keys():
	set_pkmn_count = 0

	if pkmn not in pkmns:
		pkmns.append(pkmn)
	else:
		no_errors = False
		print(f"Error: pkmn {pkmn} is a dupe")
	
	for set in sets[pkmn]["sets"]:
		set_count += 1
		set_pkmn_count += 1
		
		try:
			role = set["role"]
			move_pool = set["movepool"]
			abilities = set["abilities"]
		except:
			no_errors = False
			print(f"Error for pkmn {pkmn} set {set_pkmn_count}: Variables are not declared correctly")
			continue
		
		try:
			preferred_types = set["preferredTypes"]
		except:
			pass
		else:
			for preferred_type in preferred_types:
				if preferred_type not in TYPES:
					no_errors = False
					print(f"Error for pkmn {pkmn} set {set_pkmn_count} ({role}): Preferred type {preferred_type} not a type")

		for ability in abilities:
			if ability not in ability_names:
				no_errors = False
				print(f"Error for pkmn {pkmn} set {set_pkmn_count} ({role}): Ability {ability} not a real ability")

		for move in move_pool:
			if move not in move_ids:
				no_errors = False
				print(f"Error for pkmn {pkmn} set {set_pkmn_count} ({role}): Move {move} not a real move")

print(f"Amount of sets: {set_count}")

if no_errors:
	print("No errors found.")