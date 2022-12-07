// 3.
const task = process.argv[2]
const tasksList = ["Treinar vôlei", "Instalar programas"]
const newTasksList = [...tasksList, task]
console.log("Tarefas: ", newTasksList)
