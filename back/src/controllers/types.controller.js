import { Types } from "../models/associations.js";

export const typesController = {
  getAll : async (_, res) => {
    try {
      const types = await Types.findAll({
        attributes: ["id", "name", "color"],
      });
      res.json(types);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getOne : async (req, res, next) => {
    // Récupère l'ID de la carte à partir des paramètres de la requête
    const { id } = req.params;
    // Récupère la carte par son ID, incluant les tags associés
    const oneType = await Types.findByPk(id);

    // Vérifie si la carte existe
    if (!oneType) {
      // Si la carte n'existe pas, renvoie une erreur 404 avec un message
      return next(new NotFoundError("Type not found"));
    }

    // Envoie la carte récupérée au client sous forme de JSON
    res.json(oneType);
  },
};
