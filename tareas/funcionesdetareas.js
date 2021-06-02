const fs = require('fs');


module.exports = {
    leerJson: function () {
        return JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8'));
    },
    agregarTarea: function (titulo, estado) {
        /* con los parametros creo una nueva tarea*/
        let nuevaTarea = {
            titulo,
            estado
        };
        let tareas = this.leerJson();//leo el array
        tareas.push(nuevaTarea);//agrego una nueva tarea
        fs.writeFileSync('./db/tareas.json', JSON.stringify(tareas, 'utf-8'));
        this.listarTareas();

    },
    listarTareas: function () {
        let tareas = this.leerJson();
        /*for (let i = 0; i < tareas.length; i++) {
            console.log(tareas[i]);

        }*/
        tareas.forEach(tarea => {
             console.log(tarea); 




        });

    },
    filtrarTareas: function (filtro) {
        let tareas = this.leerJson();

        let filtrar = tareas.filter(tarea => tarea.estado === filtro);
        console.log(filtrar);

    }

};