| Table            | Clés & Attributs                                                                                      |
|------------------|------------------------------------------------------------------------------------------------------|
| **pokemon**      | id (PK), name (unique), hp, atk, def, atk_spe, def_spe, speed                                        |
| **type**         | id (PK), name, color                                                                                 |
| **team**         | id (PK), name, description                                                                           |
| **pokemon_type** | id (PK), pokemon_id (FK pokemon), type_id (FK type)                                                  |
| **team_pokemon** | id (PK), pokemon_id (FK pokemon), team_id (FK team)                                                  |
