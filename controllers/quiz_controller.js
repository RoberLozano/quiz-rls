var models = require('../models/models.js');
//GET quizes questions
exports.show = function(req, res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
		res.render('quizes/show.ejs', {quiz: quiz});
	})
};

exports.index = function(req, res){
    models.Quiz.findAll().then(function(quizes){
      res.render('quizes/index', {quizes: quizes});
    })

};

//GET quiz answer
exports.answer = function(req, res){
    models.Quiz.find(req.params.quizId).then(function(quiz)
        if(req.query.respuesta === quiz[0].respuesta){
        res.render('quizes/answer', {quiz: quiz, respuesta:'Correcto'});
    }else{
        res.render('quizes/answer', {quiz: quiz, respuesta:'Incorrecto'});
    }
    })
};

 exports.author = function(req, res){
 	res.render('author', {nombre: 'Roberto Lozano Sáez'});
};
