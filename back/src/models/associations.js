import { Teams } from "./teams.js";
import { Pokemon } from "./pokemons.js";
import { Types } from "./types.js";

Teams.belongsToMany(Pokemon, {
  through: "team_pokemon",
  foreignKey: "team_id",
  otherKey: "pokemon_id",
  onDelete: "CASCADE",
});

Pokemon.belongsToMany(Teams, {
  through: "team_pokemon",
  foreignKey: "pokemon_id",
  otherKey: "team_id",
  onDelete: "CASCADE",
});

Pokemon.belongsToMany(Types, {
  through: "pokemon_type",
  foreignKey: "pokemon_id",
  otherKey: "type_id",
  onDelete: "CASCADE",
});

Types.belongsToMany(Pokemon, {
  through: "pokemon_type",
  foreignKey: "type_id",
  otherKey: "pokemon_id",
  onDelete: "CASCADE",
});

export { Teams, Pokemon, Types };