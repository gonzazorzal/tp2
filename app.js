const moduloTareas = require('./tareas/funcionesdetareas');
const process = require('process');

const comando = process.argv[2];

switch (comando) {
    case undefined:

        console.log('Atención - Tienes que pasar una acción.');
        break;

    case 'agregar':
        let titulo = process.argv[3];
        if (!titulo) {
            console.log('dame una tarea!');
            break;
        }

        let estado = process.argv[4];

        moduloTareas.agregarTarea(titulo, estado);

        break;
    case 'listar':
        moduloTareas.listarTareas();

        break;
    case 'filtrar':
        moduloTareas.filtrarTareas(process.argv[3]);
        break;

    default:
        console.log('No entiendo qué quieres hacer');
        break;
}


