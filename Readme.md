## Examen Eco Pratique - 20251217

J'ai utilisé Vite pour ce projet.
Pour lancer le projet en local en mode Dev (prérequis&nbsp;: avoir Node installé sur ton Mac)&nbsp;:

```sh
npm install
npm run dev
```

Tu auras un lien vers ton localhost avec le port associé qui s'affichera dans le terminal. Pour voir le projet en version compilée tu devra lancer `npm run build` puis `npm run preview` pour le visualiser dans ton navigateur.

J'ai codé le CSS en PostCSS pour avoir le nesting (indispensable...), tu devras donc installer l'extension "PostCSS Language Support" et associer cette dernière aux fichiers CSS et Emmet dans VSCode&nbsp;:

```json
"files.associations": {
  "*.css": "postcss"
},
"emmet.includeLanguages": {
  "postcss": "css"
},
```