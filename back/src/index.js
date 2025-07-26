import path from 'node:path';
import express from "express";
import cors from 'cors';
import { router } from "./routers/index.router.js";

const app = express();


// * Quand on branche le middleware cors, on autorise tout le monde à interroger le serveur.
//  * ça peut être un comportement voulu, mais pas dans notre cas.
// app.use(cors());

// ? Quand on exécute une fonction, les infos entre parenthèses sont des arguments, quand on définit une fonction, les infos entre parenthèses sont des paramètres.
const definition = {
  definition: 'paramètres',
  "exécution": 'arguments'
};

// ? On autorise 6 URL à interroger notre serveur
// https://stackoverflow.com/questions/27365303/what-is-the-issue-cors-is-trying-to-solve
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5174',
  ]
}));

console.log(import.meta.dirname);
console.log('public');

console.log(path.join(import.meta.dirname, 'public'));


// * branchement du middleware qui sert à envoyer les fichiers front (js, css, img)
// ! faille de sécurité : path traversal | directory traversal
// * on mitige cette faille avec join uniquement, pas avec resolve
// https://nodejs.org/docs/latest-v22.x/api/path.html
// https://en.wikipedia.org/wiki/Directory_traversal_attack
app.use(express.static(path.join(import.meta.dirname, 'public')));

// BodyParser permettant d'interpréter des données fourni dans un POST, un PATCH ou un PUT, en tant que JSON. Ces données seront stockées dans req.body
app.use(express.json());

app.use(router);

const PORT = process.env.PORT ?? 3000; // c'est comme le  || sauf qu'il n'est pas truthy/falsy. CAD que si on fourni le port 0 dans la variable d'environnement, il ne le replacera pas par 3000, il conservera le 0 (0 est falsy)

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
}); 