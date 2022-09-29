// 4.a)
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
// 4.b) Criaria um arquivo tsconfig.ts com todas as informações necessárias, acrescentaria um script "start": "tsc && node ./index.js" no package.json e rodaria o comando npm run start no terminal.
// 4.c) A diferença seria em alocar os arquivos js em uma pasta "build" ->  "start": "tsc && node ./build/index.js"
