'use strict';


module.exports = (req, res, next) =>{

    let
        user = { 'login': false, 'isAdmin':false};

    // if (req && req.session.user) {
    //     user = req.session.user;
    //     user.login = true;
    // }    

    loginChecker(req, res, next);

    function loginChecker(req, res, next) {    
	    if(req.url && req.url.indexOf('/api/')!=-1){
             console.log('middleware login')
            // if (user.login) {
            //     next();
            // } else {
            //     res.send({erro:'Usuário não está logado'});
            // }

            //Quando ativar login e seção remover essa linha
            next();
	    }else{
		    next();
	    }	
    }

};
