//Empezamos a traajar con Objetos

const cliente = {
    nombre : 'Juan',
    saldo : 5500,
    //una funcion dentro de un objeto se le conoce como método
    tipoCliente : function(){
        let tipo;
        if(this.saldo > 1000){
            tipo = 'Gold';
        }else if(this.saldo > 5000){
            tipo = 'Platinum';
        }else{
            tipo ='Normal';
        }
        return tipo;
    }
}

//console.log(cliente.tipoCliente());

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function(){
        let tipo;
        if(this.saldo > 5000){
            tipo = 'Platino';
        }else if(this.saldo > 1000){
            tipo = 'Gold';
        }else{
            tipo = 'Normal'
        }
        return tipo;
    }
}

const persona = new Cliente('David',50);
console.log(persona.tipoCliente());
console.log(persona.nombre);