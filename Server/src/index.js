const http=require('http');
const { error } = require('console');
const { stringify } = require('querystring');
const {getCharById} =require('./controlles/getCharById')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url}=req;

    if (url.includes('/rickandmorty/character')){
        const id=url.split('/').at(-1);
        getCharById(res, +id);
    }

    

}).listen(3001, 'localhost')