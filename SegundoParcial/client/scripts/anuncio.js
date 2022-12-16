class Anuncio{
    constructor(id,titulo,descripcion,animal,precio){
    this.id=id;
    this.titulo=titulo;
    this.descripcion=descripcion;
    this.animal=animal;
    this.precio=precio;
    }

    
}


class Anuncio_Mascota extends Anuncio{

    constructor(id,titulo,descripcion,animal,precio,raza,nacimiento,vacuna){
        super(id,titulo,descripcion,animal,precio);
        this.raza = raza;
        this.nacimiento = nacimiento;
        this.vacuna = vacuna;
    }

   
}

export default Anuncio_Mascota;