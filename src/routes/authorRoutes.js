const express= require('express');
const app = express();
const authorRouter =  express.Router();

function authorroute(nav){

  var authors=[
    {
    
    author:'Mahatma Gandhi',
    img:"MG.jpg"
    
    },

   {
    
    author:'William Shakespeare',
    img: "WS.jpg" 
   },

   {
     
     author:'Basheer',
     img: "VMB.jpg"
  },

  {
    
    author:'Salman Rushdi',
    img:"Rushdi.jpg"

  },

  {

    author:'Dr.APJ Abdul Kalam',
    img:"APJK.jpg"

  },
  {
    
    author:'Charles Dickens',
    img:"Dickens.jpg"
  },
  {
    
    author:'Jk Rouling',
    img:"JK.jpg"

  },
  {
    
    author:'RK Narayan',
    img:"RKN.jpg"

  }
]
authorRouter.get('/',function(req,res){
    res.render('authors',{
        nav,
        title:'Library',
        authors
     
    });   
});

authorRouter.get('/:id',function(req,res){
  const id = req.params.id
  res.render('author',{
    nav,
    title:'Library',
    author:authors[id]
  });
});

return authorRouter;
}

module.exports=authorroute;