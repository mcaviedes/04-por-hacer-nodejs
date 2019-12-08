const argv = require("yargs")
  .command("crear", "Crear un elemento por hacer", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "Descripcion de la tarea"
    }
  })
  .command("actualizar", "Actualizar el estado compretado de una tarea", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "Descripcion de la tarea"
    },
    completado: {
      demand: true,
      alias: "c",
      desc: "Marca como completado o pendiente la tarea"
    }
  })
  .help().argv;

module.exports = { argv };
