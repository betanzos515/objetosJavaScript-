/* 
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
 */
/* const persona = new Cliente('David',50);
console.log(persona.tipoCliente());
console.log(persona.nombre); */

//vamos a crear prototipos


function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//Separamos la funcion en un prototipo el cual solo estará disponible en los objetos de tipo cliente
/* Cliente.prototype.tipoCliente = function(){
    let tipo;
    if(this.saldo > 5000){
        tipo = 'Platino';
    }else if(this.saldo > 1000){
        tipo = 'Gold';
    }else{
        tipo = 'Normal'
    }
    return tipo;
} */

// prototipo que imprime saldo y nombre
Cliente.prototype.imprimir = function(){
    console.log(`El nombre es : ${this.nombre} y su saldo es : ${this.saldo}`);

}

const persona = new Cliente('David',50000);
//console.log(persona.tipoCliente());
console.log(persona.imprimir());

//Herencia de Prototipos.
//banca para empresas 
//Vamos a heredar atributos
function Empresa(nombre, saldo, telefono, tipo){
    //con cliente call heredamos los atributos de Cliente
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}

//Ahora vamos a heredar el prototype de Cliente para poder hacer uso de la funcion imprimir
Empresa.prototype = Object.create(Cliente.prototype);
const empresa = new Empresa('Udemy',100000000,12091398,'Educacion');
console.log(empresa);
console.log(empresa.imprimir());
/* console.log(Empresa.imprimir());
 */ 