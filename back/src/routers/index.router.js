import { Router } from "express";
import { pokemonController } from "../controllers/pokemons.controller.js";
import { controllerWrapper } from "../middleware/controller.wrapper.js";
import { typesController } from "../controllers/types.controller.js";
import { teamsController } from "../controllers/teams.controller.js";

export const router = new Router();

router.route("/pokemon").get(controllerWrapper(pokemonController.getAll));

router.route("/pokemon/:id").get(controllerWrapper(pokemonController.getOne));

router.route("/type").get(controllerWrapper(typesController.getAll));

router.route("/type/:id").get(controllerWrapper(typesController.getOne));

router.route("/team")
.get(controllerWrapper(teamsController.getAll))
.post(controllerWrapper(teamsController.create))
.patch(controllerWrapper(teamsController.update));

router.route("/team/:id").get(controllerWrapper(teamsController.getOne));

router.route("/team/:id including=pokemon").get(controllerWrapper(teamsController.getOne));

router.use((_, res) => {
  res.status(404).json({ error: "Not Found" });
});

//export { router };
