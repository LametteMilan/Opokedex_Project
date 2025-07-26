import { Pokemon } from "../models/associations.js";

export const pokemonController = {

    getAll : async (req, res) => {
        try {
          const pokemons = await Pokemon.findAll({
            attributes: ['id', 'name'] // N'incluez pas createdAt et updatedAt
          });
          res.json(pokemons);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },

    
    getOne : async (req, res, next) =>{
        // Récupère l'ID de la carte à partir des paramètres de la requête
        const { id } = req.params;
        // Récupère la carte par son ID, incluant les tags associés
        const onePokemon = await Pokemon.findByPk(id);
    
        // Vérifie si la carte existe
        if(!onePokemon){
          // Si la carte n'existe pas, renvoie une erreur 404 avec un message
          return next(new NotFoundError('Pokemon not found'));
        }
    
        // Envoie la carte récupérée au client sous forme de JSON
        res.json(onePokemon);
      },
    };