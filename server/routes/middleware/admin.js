'use strict';

module.exports = (req, res, next) =>{
    let
        user = { 'login': false, 'isAdmin':false};

    if (req && req.session.user) {
        user = req.session.user;
        user.login = true;
    }    

    adminChecker(req, res, next);

    function adminChecker(req, res, next) {           
	    if(req.url && req.url.indexOf('/api/')!=-1){
            console.log('middleware admin')
            // if (user.login && user.isAdmin) {
            //     next();
            // } else {
            //     res.send({erro:'Somente admin pode executar essa ação'});
            // }

            //Quando ativar login e seção remover essa linha
            next();
	    }else{
		    next();
	    }	
    }

};
