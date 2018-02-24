'use strict';

module.exports = (req, res, next) =>{
    let
        user = { 'login': false, 'isAdmin':false};

    // if (req && req.session.user) {
    //     user = req.session.user;
    //     user.login = true;
    // }    

    ownerChecker(req, res, next);

    function ownerChecker(req, res, next) {
        // let 
        //     id = req.params.user_id;    
	    
        if(req.url && req.url.indexOf('/api/')!=-1){
             console.log('middleware owner ')
            
            // if (user.login && user.id == id) {
            //     next();
            // } else {
            //     res.send({erro:'Somente owner pode executar essa ação'});
            // }

            //Quando ativar login e seção remover essa linha
            next();
	    }else{
		    next();
	    }	
    }

};
