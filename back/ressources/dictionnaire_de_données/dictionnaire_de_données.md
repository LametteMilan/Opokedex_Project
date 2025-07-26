### Dictionnaire de données Pokémon

#### Table `TYPE`
| Champ     | Type         | Description                          | Contrainte          |
|-----------|--------------|--------------------------------------|---------------------|
| `id`      | INT          | Identifiant unique                   | PK, Auto-incrément  |
| `nom`     | VARCHAR(255) | Nom du type (ex: "Feu")              | NOT NULL            |
| `couleur` | VARCHAR(7)   | Code couleur (ex: `#FF0000`)         | NOT NULL            |

#### Table `POKEMON`
| Champ      | Type         | Description                          | Contrainte          |
|------------|--------------|--------------------------------------|---------------------|
| `id`       | INT          | Identifiant unique                   | PK, Auto-incrément  |
| `nom`      | VARCHAR(255) | Nom du Pokémon (ex: "Pikachu")       | NOT NULL            |
| `hp`       | INT          | Points de vie                        | NOT NULL            |
| `atk`      | INT          | Attaque physique                     | NOT NULL            |
| `def`      | INT          | Défense physique                     | NOT NULL            |
| `atk_spe`  | INT          | Attaque spéciale                     | NOT NULL            |
| `def_spe`  | INT          | Défense spéciale                     | NOT NULL            |
| `speed`    | INT          | Vitesse                              | NOT NULL            |

#### Table `EQUIPE`
| Champ          | Type         | Description                          | Contrainte          |
|----------------|--------------|--------------------------------------|---------------------|
| `id`           | INT          | Identifiant unique                   | PK, Auto-incrément  |
| `nom`          | VARCHAR(255) | Nom de l'équipe (ex: "Team Rocket")  | NOT NULL            |
| `description`  | TEXT         | Description optionnelle              | NULL autorisé       |

#### Table `POKEMON_TYPE`
| Champ          | Type  | Description                          | Contrainte          |
|---------------|-------|--------------------------------------|---------------------|
| `id`          | INT   | Identifiant unique                   | PK, Auto-incrément  |
| `pokemon_id`  | INT   | Référence à `POKEMON.id`             | FK, NOT NULL        |
| `type_id`     | INT   | Référence à `TYPE.id`                | FK, NOT NULL        |

#### Table `TEAM_POKEMON`
| Champ          | Type  | Description                          | Contrainte          |
|---------------|-------|--------------------------------------|---------------------|
| `id`          | INT   | Identifiant unique                   | PK, Auto-incrément  |
| `pokemon_id`  | INT   | Référence à `POKEMON.id`             | FK, NOT NULL        |
| `team_id`     | INT   | Référence à `EQUIPE.id`              | FK, NOT NULL        |

### Relations clés
- Chaque Pokémon possède **1 ou 2 types** via `POKEMON_TYPE`
- Chaque équipe contient **1 ou plusieurs Pokémon** via `TEAM_POKEMON`
- Un Pokémon peut appartenir à **0 ou 1 équipe**