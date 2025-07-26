import { sequelize } from "../models/client.js";
import { Pokemon, Teams, Types } from "../models/associations.js";

// Sequelize seeding
import  sequelize from "../models/sequelizeClient.js";

import { Pokemon, Types, Teams, PokemonType, TeamPokemon } from "../models/index.js";

const types = [
  { name: 'Acier', color: 'aaaabb' },
  { name: 'Combat', color: 'bb5544' },
  { name: 'Dragon', color: '7766ee' },
  { name: 'Eau', color: '3399ff' },
  { name: 'Électrik', color: 'ffbb33' },
  { name: 'Feu', color: 'ff4422' },
  { name: 'Glace', color: '77ddff' },
  { name: 'Insecte', color: 'aabb22' },
  { name: 'Normal', color: 'bbaabb' },
  { name: 'Plante', color: '77cc55' },
  { name: 'Poison', color: 'aa5599' },
  { name: 'Psy', color: 'ff5599' },
  { name: 'Roche', color: 'bbaa66' },
  { name: 'Sol', color: 'ddbb55' },
  { name: 'Spectre', color: '6666bb' },
  { name: 'Ténèbres', color: '665544' },
  { name: 'Vol', color: '6699ff' }
];

const pokemons = [
  { name: 'Bulbizarre', hp: 45, atk: 49, def: 49, atk_spe: 65, def_spe: 65, speed: 45, types: [10, 11] },
  { name: 'Herbizarre', hp: 60, atk: 62, def: 63, atk_spe: 80, def_spe: 80, speed: 60, types: [10, 11] },
  { name: 'Florizarre', hp: 80, atk: 82, def: 83, atk_spe: 100, def_spe: 100, speed: 80, types: [10, 11] },
  { name: 'Salameche', hp: 39, atk: 52, def: 43, atk_spe: 60, def_spe: 50, speed: 65, types: [6] },
  { name: 'Reptincel', hp: 58, atk: 64, def: 58, atk_spe: 80, def_spe: 65, speed: 80, types: [6] },
  { name: 'Dracaufeu', hp: 78, atk: 84, def: 78, atk_spe: 109, def_spe: 85, speed: 100, types: [6, 17] },
  { name: 'Carapuce', hp: 44, atk: 48, def: 65, atk_spe: 50, def_spe: 64, speed: 43, types: [4] },
  { name: 'Carabaffe', hp: 59, atk: 63, def: 80, atk_spe: 65, def_spe: 80, speed: 58, types: [4] },
  { name: 'Tortank', hp: 79, atk: 83, def: 100, atk_spe: 85, def_spe: 105, speed: 78, types: [4] },
  { name: 'Chenipan', hp: 45, atk: 30, def: 35, atk_spe: 20, def_spe: 20, speed: 45, types: [10] },
  { name: 'Chrysacier', hp: 50, atk: 20, def: 55, atk_spe: 25, def_spe: 25, speed: 30, types: [10] },
  { name: 'Papilusion', hp: 60, atk: 45, def: 50, atk_spe: 80, def_spe: 80, speed: 70, types: [10, 11] },
  { name: 'Aspicot', hp: 40, atk: 35, def: 30, atk_spe: 20, def_spe: 20, speed: 50, types: [10] },
  { name: 'Coconfort', hp: 45, atk: 25, def: 50, atk_spe: 25, def_spe: 25, speed: 35, types: [10] },
  { name: 'Dardargnan', hp: 65, atk: 80, def: 40, atk_spe: 45, def_spe: 80, speed: 75, types: [10, 11] },
  { name: 'Roucool', hp: 40, atk: 45, def: 40, atk_spe: 35, def_spe: 35, speed: 56, types: [6, 17] },
  { name: 'Roucoups', hp: 63, atk: 60, def: 55, atk_spe: 50, def_spe: 50, speed: 71, types: [6, 17] },
  { name: 'Roucarnage', hp: 83, atk: 80, def: 75, atk_spe: 70, def_spe: 70, speed: 91, types: [6, 17] },
  { name: 'Rattata', hp: 30, atk: 56, def: 35, atk_spe: 25, def_spe: 35, speed: 72, types: [4] },
  { name: 'Rattatac', hp: 55, atk: 81, def: 60, atk_spe: 50, def_spe: 70, speed: 97, types: [4] },
  { name: 'Piafabec', hp: 40, atk: 60, def: 30, atk_spe: 31, def_spe: 31, speed: 70, types: [6] },
  { name: 'Rapasdepic', hp: 65, atk: 90, def: 65, atk_spe: 61, def_spe: 61, speed: 100, types: [6] },
  { name: 'Abo', hp: 35, atk: 60, def: 44, atk_spe: 40, def_spe: 54, speed: 55, types: [4, 11] },
  { name: 'Arbok', hp: 60, atk: 85, def: 69, atk_spe: 65, def_spe: 79, speed: 80, types: [4, 11] },
  { name: 'Pikachu', hp: 35, atk: 55, def: 30, atk_spe: 50, def_spe: 40, speed: 90, types: [5] },
  { name: 'Raichu', hp: 60, atk: 90, def: 55, atk_spe: 90, def_spe: 80, speed: 100, types: [5] },
  { name: 'Sabelette', hp: 50, atk: 75, def: 85, atk_spe: 20, def_spe: 30, speed: 40, types: [4, 7] },
  { name: 'Sablaireau', hp: 75, atk: 100, def: 110, atk_spe: 45, def_spe: 55, speed: 65, types: [4, 7] },
  { name: 'Nidoran F', hp: 55, atk: 47, def: 52, atk_spe: 40, def_spe: 40, speed: 41, types: [4] },
  { name: 'Nidorina', hp: 70, atk: 62, def: 67, atk_spe: 55, def_spe: 55, speed: 56, types: [4] },
  { name: 'Nidoqueen', hp: 90, atk: 82, def: 87, atk_spe: 75, def_spe: 85, speed: 76, types: [4, 11] },
  { name: 'Nidoran M', hp: 46, atk: 57, def: 40, atk_spe: 40, def_spe: 40, speed: 50, types: [4] },
  { name: 'Nidorino', hp: 61, atk: 72, def: 57, atk_spe: 55, def_spe: 55, speed: 65, types: [4] },
  { name: 'Nidoking', hp: 81, atk: 92, def: 77, atk_spe: 85, def_spe: 75, speed: 85, types: [4, 11] },
  { name: 'Melofee', hp: 70, atk: 45, def: 48, atk_spe: 60, def_spe: 65, speed: 35, types: [5] },
  { name: 'Melodelfe', hp: 95, atk: 70, def: 73, atk_spe: 85, def_spe: 90, speed: 60, types: [5] },
  { name: 'Goupix', hp: 38, atk: 41, def: 40, atk_spe: 50, def_spe: 65, speed: 65, types: [6] },
  { name: 'Feunard', hp: 73, atk: 76, def: 75, atk_spe: 81, def_spe: 100, speed: 100, types: [6] },
  { name: 'Rondoudou', hp: 115, atk: 45, def: 20, atk_spe: 45, def_spe: 25, speed: 20, types: [1] },
  { name: 'Grodoudou', hp: 140, atk: 70, def: 45, atk_spe: 75, def_spe: 50, speed: 45, types: [1] },
  { name: 'Nosferapti', hp: 40, atk: 45, def: 35, atk_spe: 30, def_spe: 40, speed: 55, types: [13, 14] },
  { name: 'Nosferalto', hp: 75, atk: 80, def: 70, atk_spe: 65, def_spe: 75, speed: 90, types: [13, 14] },
  { name: 'Mystherbe', hp: 45, atk: 50, def: 55, atk_spe: 75, def_spe: 65, speed: 30, types: [10, 11] },
  { name: 'Ortide', hp: 60, atk: 65, def: 70, atk_spe: 85, def_spe: 75, speed: 40, types: [10, 11] },
  { name: 'Rafflesia', hp: 75, atk: 80, def: 85, atk_spe: 100, def_spe: 90, speed: 50, types: [10, 11] },
  { name: 'Paras', hp: 35, atk: 70, def: 55, atk_spe: 45, def_spe: 55, speed: 25, types: [10, 11] },
  { name: 'Parasect', hp: 60, atk: 95, def: 80, atk_spe: 60, def_spe: 80, speed: 30, types: [10, 11] },
  { name: 'Mimitoss', hp: 60, atk: 55, def: 50, atk_spe: 40, def_spe: 55, speed: 45, types: [10] },
  { name: 'Aeromite', hp: 70, atk: 65, def: 60, atk_spe: 90, def_spe: 75, speed: 90, types: [10, 11] },
  { name: 'Taupiqueur', hp: 10, atk: 55, def: 25, atk_spe: 35, def_spe: 45, speed: 95, types: [4] },
  { name: 'Triopikeur', hp: 35, atk: 80, def: 50, atk_spe: 50, def_spe: 70, speed: 120, types: [4] },
  { name: 'Miaouss', hp: 40, atk: 45, def: 35, atk_spe: 40, def_spe: 40, speed: 90, types: [4] },
  { name: 'Persian', hp: 65, atk: 70, def: 60, atk_spe: 65, def_spe: 65, speed: 115, types: [4] },
  { name: 'Psykokwak', hp: 50, atk: 52, def: 48, atk_spe: 65, def_spe: 50, speed: 55, types: [11] },
  { name: 'Akwakwak', hp: 80, atk: 82, def: 78, atk_spe: 95, def_spe: 80, speed: 85, types: [11] },
  { name: 'Ferosinge', hp: 40, atk: 80, def: 35, atk_spe: 35, def_spe: 45, speed: 70, types: [2] },
  { name: 'Colossinge', hp: 65, atk: 105, def: 60, atk_spe: 60, def_spe: 70, speed: 95, types: [2] },
  { name: 'Caninos', hp: 55, atk: 70, def: 45, atk_spe: 70, def_spe: 50, speed: 60, types: [6] },
  { name: 'Arcanin', hp: 90, atk: 110, def: 80, atk_spe: 100, def_spe: 80, speed: 95, types: [6] },
  { name: 'Ptitard', hp: 40, atk: 50, def: 40, atk_spe: 40, def_spe: 40, speed: 90, types: [11] },
  { name: 'Tetarte', hp: 65, atk: 65, def: 65, atk_spe: 50, def_spe: 50, speed: 90, types: [11] },
  { name: 'Tartard', hp: 90, atk: 85, def: 95, atk_spe: 70, def_spe: 90, speed: 70, types: [11] },
  { name: 'Abra', hp: 25, atk: 20, def: 15, atk_spe: 105, def_spe: 55, speed: 90, types: [12] },
  { name: 'Kadabra', hp: 40, atk: 35, def: 30, atk_spe: 120, def_spe: 70, speed: 105, types: [12] },
  { name: 'Alakazam', hp: 55, atk: 50, def: 45, atk_spe: 135, def_spe: 85, speed: 120, types: [12] },
  { name: 'Machoc', hp: 70, atk: 80, def: 50, atk_spe: 35, def_spe: 35, speed: 35, types: [2] },
  { name: 'Machopeur', hp: 80, atk: 100, def: 70, atk_spe: 50, def_spe: 60, speed: 45, types: [2] },
  { name: 'Mackogneur', hp: 90, atk: 130, def: 80, atk_spe: 65, def_spe: 85, speed: 55, types: [2] },
  { name: 'Chetiflor', hp: 50, atk: 75, def: 35, atk_spe: 70, def_spe: 30, speed: 40, types: [10] },
  { name: 'Boustiflor', hp: 65, atk: 90, def: 50, atk_spe: 85, def_spe: 45, speed: 55, types: [10] },
  { name: 'Empiflor', hp: 80, atk: 105, def: 65, atk_spe: 100, def_spe: 60, speed: 70, types: [10] },
  { name: 'Tentacool', hp: 40, atk: 40, def: 35, atk_spe: 50, def_spe: 100, speed: 70, types: [6, 17] },
  { name: 'Tentacruel', hp: 80, atk: 70, def: 65, atk_spe: 80, def_spe: 120, speed: 100, types: [6, 17] },
  { name: 'Racaillou', hp: 40, atk: 80, def: 100, atk_spe: 30, def_spe: 30, speed: 20, types: [6, 17] },
  { name: 'Gravalanch', hp: 55, atk: 95, def: 115, atk_spe: 45, def_spe: 45, speed: 35, types: [6, 17] },
  { name: 'Grolem', hp: 80, atk: 110, def: 130, atk_spe: 55, def_spe: 65, speed: 45, types: [6, 17] },
  { name: 'Ponyta', hp: 50, atk: 85, def: 55, atk_spe: 65, def_spe: 65, speed: 90, types: [6] },
  { name: 'Galopa', hp: 65, atk: 100, def: 70, atk_spe: 80, def_spe: 80, speed: 105, types: [6] },
  { name: 'Ramoloss', hp: 90, atk: 65, def: 65, atk_spe: 40, def_spe: 40, speed: 15, types: [12] },
  { name: 'Flagadoss', hp: 95, atk: 75, def: 110, atk_spe: 100, def_spe: 80, speed: 30, types: [12] },
  { name: 'Magneti', hp: 25, atk: 35, def: 70, atk_spe: 95, def_spe: 55, speed: 45, types: [5, 9] },
  { name: 'Magneton', hp: 50, atk: 60, def: 95, atk_spe: 120, def_spe: 70, speed: 70, types: [5, 9] },
  { name: 'Canarticho', hp: 52, atk: 65, def: 55, atk_spe: 58, def_spe: 62, speed: 60, types: [6, 17] },
  { name: 'Doduo', hp: 35, atk: 85, def: 45, atk_spe: 35, def_spe: 35, speed: 75, types: [6, 17] },
  { name: 'Dodrio', hp: 60, atk: 110, def: 70, atk_spe: 60, def_spe: 60, speed: 100, types: [6, 17] },
  { name: 'Otaria', hp: 65, atk: 45, def: 55, atk_spe: 45, def_spe: 70, speed: 45, types: [6] },
  { name: 'Lamantine', hp: 90, atk: 70, def: 80, atk_spe: 70, def_spe: 95, speed: 70, types: [6, 17] },
  { name: 'Tadmorv', hp: 80, atk: 80, def: 50, atk_spe: 40, def_spe: 50, speed: 25, types: [4] },
  { name: 'Grotadmorv', hp: 105, atk: 105, def: 75, atk_spe: 65, def_spe: 100, speed: 50, types: [4] },
  { name: 'Kokiyas', hp: 30, atk: 65, def: 100, atk_spe: 45, def_spe: 25, speed: 40, types: [11] },
  { name: 'Crustabri', hp: 50, atk: 95, def: 180, atk_spe: 85, def_spe: 45, speed: 70, types: [11] },
  { name: 'Fantominus', hp: 30, atk: 35, def: 30, atk_spe: 100, def_spe: 35, speed: 80, types: [13, 14] },
  { name: 'Spectrum', hp: 45, atk: 50, def: 45, atk_spe: 115, def_spe: 55, speed: 95, types: [13, 14] },
  { name: 'Ectoplasma', hp: 60, atk: 65, def: 60, atk_spe: 130, def_spe: 75, speed: 110, types: [13, 14] },
  { name: 'Onix', hp: 35, atk: 45, def: 160, atk_spe: 30, def_spe: 45, speed: 70, types: [6, 17] },
  { name: 'Soporifik', hp: 60, atk: 48, def: 45, atk_spe: 43, def_spe: 90, speed: 42, types: [13] },
  { name: 'Hypnomade', hp: 85, atk: 73, def: 70, atk_spe: 73, def_spe: 115, speed: 67, types: [13] },
  { name: 'Krabby', hp: 30, atk: 105, def: 90, atk_spe: 25, def_spe: 25, speed: 50, types: [11] },
  { name: 'Krabboss', hp: 55, atk: 130, def: 115, atk_spe: 50, def_spe: 50, speed: 75, types: [11] },
  { name: 'Voltorbe', hp: 40, atk: 30, def: 50, atk_spe: 55, def_spe: 55, speed: 100, types: [5] },
  { name: 'Electrode', hp: 60, atk: 50, def: 70, atk_spe: 80, def_spe: 80, speed: 140, types: [5] },
  { name: 'Noeunoeuf', hp: 60, atk: 40, def: 80, atk_spe: 60, def_spe: 45, speed: 40, types: [12] },
  { name: 'Noadkoko', hp: 95, atk: 95, def: 85, atk_spe: 125, def_spe: 75, speed: 55, types: [12] },
  { name: 'Osselait', hp: 50, atk: 50, def: 95, atk_spe: 40, def_spe: 50, speed: 35, types: [4] },
  { name: 'Ossatueur', hp: 60, atk: 80, def: 110, atk_spe: 50, def_spe: 80, speed: 45, types: [4] },
  { name: 'Kicklee', hp: 50, atk: 120, def: 53, atk_spe: 35, def_spe: 110, speed: 87, types: [2] },
  { name: 'Tygnon', hp: 50, atk: 105, def: 79, atk_spe: 35, def_spe: 110, speed: 76, types: [2] },
  { name: 'Excelangue', hp: 90, atk: 55, def: 75, atk_spe: 60, def_spe: 75, speed: 30, types: [1] },
  { name: 'Smogo', hp: 40, atk: 65, def: 95, atk_spe: 60, def_spe: 45, speed: 35, types: [4, 14] },
  { name: 'Smogogo', hp: 65, atk: 90, def: 120, atk_spe: 85, def_spe: 70, speed: 60, types: [4, 14] },
  { name: 'Rhinocorne', hp: 80, atk: 85, def: 95, atk_spe: 30, def_spe: 30, speed: 25, types: [6, 17] },
  { name: 'Rhinoféros', hp: 105, atk: 130, def: 120, atk_spe: 45, def_spe: 45, speed: 40, types: [6, 17] },
  { name: 'Leveinard', hp: 250, atk: 5, def: 5, atk_spe: 35, def_spe: 105, speed: 50, types: [1] },
  { name: 'Saquedeneu', hp: 65, atk: 55, def: 115, atk_spe: 100, def_spe: 40, speed: 60, types: [10, 11] },
  { name: 'Kangourex', hp: 105, atk: 95, def: 80, atk_spe: 40, def_spe: 80, speed: 90, types: [1] },
  { name: 'Hypotrempe', hp: 30, atk: 40, def: 70, atk_spe: 70, def_spe: 25, speed: 60, types: [11] },
  { name: 'Hypocean', hp: 55, atk: 65, def: 95, atk_spe: 95, def_spe: 45, speed: 85, types: [11] },
  { name: 'Poissirène', hp: 45, atk: 67, def: 60, atk_spe: 35, def_spe: 50, speed: 63, types: [11] },
  { name: 'Poissoroy', hp: 80, atk: 92, def: 65, atk_spe: 65, def_spe: 80, speed: 68, types: [11] },
  { name: 'Stari', hp: 30, atk: 45, def: 55, atk_spe: 70, def_spe: 55, speed: 85, types: [11] },
  { name: 'Staross', hp: 60, atk: 75, def: 85, atk_spe: 100, def_spe: 85, speed: 115, types: [11] },
  { name: 'M. Mime', hp: 40, atk: 45, def: 65, atk_spe: 100, def_spe: 120, speed: 90, types: [12, 14] },
  { name: 'Insécateur', hp: 70, atk: 110, def: 80, atk_spe: 55, def_spe: 80, speed: 105, types: [10, 11] },
  { name: 'Lippoutou', hp: 65, atk: 50, def: 35, atk_spe: 115, def_spe: 95, speed: 95, types: [12, 14] },
  { name: 'Elektek', hp: 65, atk: 83, def: 57, atk_spe: 95, def_spe: 85, speed: 105, types: [5] },
  { name: 'Magmar', hp: 65, atk: 95, def: 57, atk_spe: 100, def_spe: 85, speed: 93, types: [8] },
  { name: 'Scarabrute', hp: 80, atk: 125, def: 75, atk_spe: 40, def_spe: 95, speed: 85, types: [7] },
  { name: 'Tauros', hp: 75, atk: 100, def: 95, atk_spe: 40, def_spe: 70, speed: 110, types: [1] },
  { name: 'Magicarpe', hp: 20, atk: 10, def: 55, atk_spe: 15, def_spe: 20, speed: 80, types: [11] },
  { name: 'Leviator', hp: 95, atk: 125, def: 79, atk_spe: 60, def_spe: 100, speed: 81, types: [11] },
  { name: 'Lokhlass', hp: 130, atk: 85, def: 80, atk_spe: 85, def_spe: 95, speed: 60, types: [11, 17] },
  { name: 'Métamorph', hp: 48, atk: 48, def: 48, atk_spe: 48, def_spe: 48, speed: 48, types: [1] },
  { name: 'Evoli', hp: 55, atk: 55, def: 50, atk_spe: 45, def_spe: 65, speed: 55, types: [1] },
  { name: 'Aquali', hp: 130, atk: 65, def: 60, atk_spe: 110, def_spe: 95, speed: 65, types: [11] },
  { name: 'Voltali', hp: 65, atk: 65, def: 60, atk_spe: 110, def_spe: 95, speed: 130, types: [5] },
  { name: 'Pyroli', hp: 65, atk: 130, def: 60, atk_spe: 95, def_spe: 110, speed: 65, types: [8] },
  { name: 'Porygon', hp: 65, atk: 60, def: 70, atk_spe: 85, def_spe: 75, speed: 40, types: [1] },
  { name: 'Amonita', hp: 35, atk: 40, def: 100, atk_spe: 90, def_spe: 55, speed: 35, types: [11, 17] },
  { name: 'Amonistar', hp: 70, atk: 60, def: 125, atk_spe: 115, def_spe: 70, speed: 55, types: [11, 17] },
  { name: 'Kabuto', hp: 30, atk: 80, def: 90, atk_spe: 55, def_spe: 45, speed: 55, types: [11, 17] },
  { name: 'Kabutops', hp: 60, atk: 115, def: 105, atk_spe: 65, def_spe: 70, speed: 80, types: [11, 17] },
  { name: 'Ptéra', hp: 80, atk: 105, def: 65, atk_spe: 60, def_spe: 75, speed: 130, types: [6, 17] },
  { name: 'Ronflex', hp: 160, atk: 110, def: 65, atk_spe: 65, def_spe: 110, speed: 30, types: [1] },
  { name: 'Artikodin', hp: 90, atk: 85, def: 100, atk_spe: 95, def_spe: 125, speed: 85, types: [14, 17] },
  { name: 'Électhor', hp: 90, atk: 90, def: 85, atk_spe: 125, def_spe: 90, speed: 100, types: [5, 17] },
  { name: 'Sulfura', hp: 90, atk: 100, def: 90, atk_spe: 125, def_spe: 85, speed: 90, types: [8, 17] },
  { name: 'Minidraco', hp: 41, atk: 64, def: 45, atk_spe: 50, def_spe: 50, speed: 50, types: [16] },
  { name: 'Draco', hp: 61, atk: 84, def: 65, atk_spe: 70, def_spe: 70, speed: 70, types: [16] },
  { name: 'Dracolosse', hp: 91, atk: 134, def: 95, atk_spe: 100, def_spe: 100, speed: 80, types: [16, 17] },
  { name: 'Mewtwo', hp: 106, atk: 110, def: 90, atk_spe: 154, def_spe: 90, speed: 130, types: [12] },
  { name: 'Mew', hp: 100, atk: 100, def: 100, atk_spe: 100, def_spe: 100, speed: 100, types: [12] },
];

for (const type of types) {
  const newType = await Types.create({
    id: type.id,
    name: type.name,
    color: type.color,
  });
}

for (const pokemon of pokemons) {
  try {
    const newPokemon = await Pokemon.create({
      id: pokemon.id,
      name: pokemon.name,
      hp: pokemon.hp,
      atk: pokemon.atk,
      def: pokemon.def,
      atk_spe: pokemon.atk_spe,
      def_spe: pokemon.def_spe,
      speed: pokemon.speed,
    });
  
    for (const typeId of pokemon.types) {
      const type = await Type.findByPk(typeId);
      await newPokemon.addType(type);
    }
  } catch (err) {
    console.log('Error with pokemon:', pokemon.name);
    console.error(err);
  }
}

// Insert teams
const teams = [
  { name: 'Ultimate Team', description: 'La meilleure team du monde', pokemons: [3, 6, 9, 12, 15, 34] },
  { name: 'La Team de l\'enfer', description: 'Le feuuuuu', pokemons: [6, 38, 59, 126, 136, 146] },
  { name: 'Squad fofolle', description: 'Pour tout gagner', pokemons: [151, 150, 149, 146, 145, 144] },
];

for (const team of teams) {
  const newTeam = await Teams.create({
    name: team.name,
    description: team.description,
  });

  for (const pokemonId of team.pokemons) {
    const pokemon = await Pokemon.findByPk(pokemonId);
    await newTeam.addPokemon(pokemon);
  }
}

console.log('\n✅ Seeding done!\n');
console.log('---')
console.log('Data inserted:'); 
console.log(types.length, 'types');
console.log(pokemons.length, 'pokemons');
console.log(teams.length, 'teams');
console.log('---')
console.log('');
await sequelize.close();