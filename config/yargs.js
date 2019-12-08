const descipcion = {
  demand: true,
  alias: "d",
  desc: "Descripcion de la tarea"
};

const completado = {
  demand: true,
  alias: "c",
  desc: "Marca como completado o pendiente la tarea"
};

const argv = require("yargs")
  .command("crear", "Crear un elemento por hacer", {
    descripcion
  })
  .command("actualizar", "Actualizar el estado compretado de una tarea", {
    descripcion,
    completado
  })
  .command("borrar", "Borrar una tarea", {
    descripcion
  })
  .help().argv;

module.exports = { argv };
