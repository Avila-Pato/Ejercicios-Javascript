// Metodos de propiedad

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo cancion ${id}`);
    },
    pausar : function() {
        console.log(`Pausando cancion...`);
    },
    borrar : function(id) {
        console.log(`Borrando cancion ${id}`);
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando playlist ${nombre}`);
    }
}

reproductor.reproducir(10);
reproductor.pausar();
reproductor.borrar(11);
reproductor.crearPlaylist('Chill Out')