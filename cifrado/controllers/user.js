const { response } = require('express');

const usuariosGet= (req , res= response) => {
    const body = req.body.textoPlano;
    res.json({
        msg: 'get API -CONTROLLER'
    });
    console.log('hola mundo111');
}



const usuarioEncrip = (req , res= response) => {
  

    const textoPlano = req.body.textoPlano;
    const clave = req.body.clave;

    console.log('Texto textoPlano:', req.body);

    

const textoCifrado = cifrarVigenere(textoPlano, clave);
console.log('Texto Cifrado:', textoCifrado); // Imprime el texto cifrado

    function cifrarVigenere(textoPlano, clave) {
        return textoPlano.split('').map((letra, i) => {
            const textoValor = letra.charCodeAt(0) - 'A'.charCodeAt(0);
            const claveValor = clave[i % clave.length].charCodeAt(0) - 'A'.charCodeAt(0);
            const cifradoValor = (textoValor + claveValor) % 26;
            return String.fromCharCode(cifradoValor + 'A'.charCodeAt(0));
        }).join('');
    }

    //res.send(textoCifrado);
    res.json({

        textoCifrado

    });
    console.log('hola mundo222');
}


const usuarioDes = (req , res= response) => {  

    const textoCifrado =  req.body.textoCifrado;
    const clave = req.body.clave;

const textoDescifrado = descifrarVigenere(textoCifrado, clave);
console.log('Texto Descifrado:', textoDescifrado); // Imprime el texto descifrado


    function descifrarVigenere(textoCifrado, clave) {
        return textoCifrado.split('').map((letra, i) => {
            const cifradoValor = letra.charCodeAt(0) - 'A'.charCodeAt(0);
            const claveValor = clave[i % clave.length].charCodeAt(0) - 'A'.charCodeAt(0);
            const textoValor = (cifradoValor - claveValor + 26) % 26;
            return String.fromCharCode(textoValor + 'A'.charCodeAt(0));
        }).join('');
    }

    //res.send(textoDescifrado);
    res.json({

        textoDescifrado

    });
    console.log('hola mundo333');
}

module.exports = {
    usuariosGet,
    usuarioEncrip,
    usuarioDes

}