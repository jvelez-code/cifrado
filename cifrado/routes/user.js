const { Router} = require('express');
const { usuariosGet, usuarioEncrip, usuarioDes } = require('../controllers/user');
const router = Router();


router.get('/', usuariosGet );


router.post('/encriptar', usuarioEncrip);


router.post('/desencriptar', usuarioDes);

module.exports= router;

