//Object Create

const Cliente = {
    imprimirSaldo: function(){
        return `hola ${this.nombre} tu saldo es ${this.saldo}`;
    },
    retirarSaldo : function(retiro){
        return this.saldo -= retiro;
    }
}
//Esta es una forma mas facil de trabajar con los protos
//Asignamos aqui el proto de Cliente, estoy hablando de las dos funciones que se establecieron en el objeto
//Asignamos de manera directa los atributos de nombre y saldo.
//mandamos a imprimir las funciones que se heredaron del proto de cliente.

const mary = Object.create(Cliente);
mary.nombre = 'Mary';
mary.saldo = 10000;
console.log(mary);
console.log(mary.imprimirSaldo());
console.log(mary.retirarSaldo(500));
console.log(mary.imprimirSaldo());