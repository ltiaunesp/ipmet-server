'use strict';
const express = require('express');
const Routes = require('./routes');

class ServerRunner{
  static run(){
    let app = express();

    app.use('/cidades', Routes.CidadesRouter.getRoute());


    app.listen(8000);
    return app;
  }
}

// IpmetRunner.run();
module.exports = ServerRunner;
