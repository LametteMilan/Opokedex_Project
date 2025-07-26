import { Teams } from "../models/associations.js";
import { teamCreateSchema } from "../schemas/teams.schema.js";
import { teamUpdateSchema } from "../schemas/teams.schema.js";

export const teamsController = {
  getAll: async (_, res) => {
    try {
      const teams = await Teams.findAll({
        attributes: ["id", "name", "description"],
      });
      res.json(teams);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getOne: async (req, res, next) => {
    // Récupère l'ID de la carte à partir des paramètres de la requête
    const { id } = req.params;
    // Récupère la carte par son ID, incluant les tags associés
    const oneTeam = await Teams.findByPk(id);

    // Vérifie si la carte existe
    if (!oneTeam) {
      // Si la carte n'existe pas, renvoie une erreur 404 avec un message
      return next(new NotFoundError("Team not found"));
    }

    // Envoie la carte récupérée au client sous forme de JSON
    res.json(oneTeam);
  },

  create: async (req, res) => {
    await teamCreateSchema.parseAsync(req.body);
    const newTeam = await Teams.create(req.body);
    res.status(201).json(newTeam);
  },

  update: async (req, res) => {
    const { id } = req.params;
    await teamUpdateSchema.parseAsync(req.body);
    const [updated] = await Teams.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedTeam = await Teams.findByPk(id);
      return res.status(200).json(updatedTeam);
    }
    throw new NotFoundError("Team not found");
  },
};
