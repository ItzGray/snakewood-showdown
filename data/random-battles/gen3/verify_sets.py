import json

with open("sets.json", "r") as sets_json:
	sets = json.load(sets_json)

with open("move_ids.txt", "r") as move_ids_txt:
	move_ids = move_ids_txt.read().split("\n")

for pkmn in sets.keys():
	for set in sets[pkmn]["sets"]:
		try:
			role = set["role"]
			move_pool = set["movepool"]
			abilities = set["abilities"]
		except:
			print(f"Error for pkmn {pkmn}: Variables are not declared correctly")
			continue
		for move in move_pool:
			if move not in move_ids:
				print(f"Error for pkmn {pkmn}: Move not a real move")
				break