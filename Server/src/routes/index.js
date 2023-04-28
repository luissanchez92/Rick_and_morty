const {getCharById}= require('../controlles/getCharById');
const {postFav, deleteFav}= require('../controlles/handleFavorites');
const {login} = require('../controlles/login');

const router=require('express').Router();

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports=router;