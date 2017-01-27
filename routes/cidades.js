'use strict';
const express = require('express');
class CidadesRouter{
  static getRoute(){
    let router = express.Router()

    router.get('/', (req, res)=>{
      res.status(200).json({'cidades': []});
    });

    return router;
  }
}

module.exports = CidadesRouter;
