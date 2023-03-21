# Kermesse counter

> Et structure toute simple pour d'autres projets ? :-3

Contenu du projet:

- `/client` Projet createReactApp en typescript
  - \+ bonsai.css framework css minimaliste
- `/server` Server express en typescript (Alsa créations [API Rest avec Express et Typescript](https://www.alsacreations.com/tuto/lire/1857-Creation-dune-API-REST-avec-Express-et-TypeScript.html))
  - \+ Web socket

Versions fixes à utiliser:
- Node 18.15.0

## How to

Lancer les deux tâches de dev dans le serveur et le client.

```shell
npm start --prefix server&
npm start --prefix client&
```

## Suppression des librairies tierces
- React, compliqué
- bonsai.css, dans  `/client`, supprimer du `package.json` et supprimer l'import de la feuille de `src/index.css`