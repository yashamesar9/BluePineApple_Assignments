const express = require('express');
const path = require('path')
const app=express();

let Article= require('./models/article');
//let Articles = require('./models/article');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

db.once('open',function(){
    console.log('connected to mongodb');
});

db.on('error',function(err){
    console.log(err);
});


// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
  console.log(Article);
  console.log(typeof(Article));
    Article.find({}, function(err, articles){
      if(err){
        console.log(err);
      } else {
        res.render('index', {
          title:'Article',
          articles: articles
        });
      }
    });
  });
  console.log(Article);
  console.log(typeof(Article));
app.get('/articles/add',function(req,res){

    res.render('add_article',{
        title:' add_article'
    });
    
});
app.post('/articles/add',function(req,res){

    console.log('submitted');
});
app.listen(3000,function(){
    console.log('server started');

}

);