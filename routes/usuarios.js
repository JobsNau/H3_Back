
const{Router}=require('express')

const {usuariosGet, usuariosDelete, usuariosPost, usuariosPut}=require('../controllers/usuarios')

const router=Router()

router.get('/',usuariosGet)
router.delete('/',usuariosDelete)
router.put('/:id',usuariosPut)
router.post('/:id',usuariosPost)

module.exports=router