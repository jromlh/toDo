const fs = require('fs');

let listado = [];

const guardarDB = () => {
    let data = JSON.stringify(listado);

    fs.writeFile('database/database.json', data, (err) => {
        if (err) throw err;
        console.log('Proceso exitoso');
    });
}


const cargarDB = () => {
    try {
        listado = require('../database/database.json');
    } catch (error) {
        listado = [];
    }
}


const crear = (desc) => {

    cargarDB();

    task = {
        desc: desc,
        done: false
    }

    listado.push(task);

    guardarDB();

    return task;
}

const actualizar = (desc, done = true) => {
    cargarDB();

    let index = listado.findIndex(task => {
        return task.desc === desc
    });

    if (index < 0) {
        console.log('Tarea no encontrada');
        return;
    }

    listado[index].done = done;

    guardarDB();

    return listado[index];
}

const borrar = (desc) => {
    cargarDB();

    let index = listado.findIndex(task => {
        return task.desc === desc;
    });

    if (index < 0) {
        console.log('Tarea no encontrada');
        return;
    }

    let borrada = listado[index];
    listado.splice(index, 1);

    guardarDB();

    return borrada;
}

const listar = () => {
    cargarDB();

    return listado;
}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}