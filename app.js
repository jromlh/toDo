const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./to-do/to-do');


let comand = argv._[0];

switch (comand) {
    case 'crear':
        let task = toDo.crear(argv.descripcion);
        console.log(task);
        break;

    case 'actualizar':
        let act = toDo.actualizar(argv.descripcion, argv.completado);
        if (act) {
            console.log(act);
        }
        break;

    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion);
        if (borrado) {
            console.log(borrado);
        }
        break;

    case 'listar':
        let listado = toDo.listar();
        for (let task of listado) {
            console.log('======================='.green);
            console.log(task.desc);
            console.log(`Terminado : ${task.done}`);
            console.log('======================='.green);
        }
        break;


    default:
        console.log('Comando no establecido');
        break;
}