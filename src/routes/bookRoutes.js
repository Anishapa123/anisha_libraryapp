 const express= require('express');
 const app = express();
 const booksRouter= express.Router();
 function router(nav){

  var books=[
    {
    title:'Tom and Jerry',
    author:'Joseph Barbera',
    genre:'cartoon',
    img:"tom and jerry.jpg"
  },

   {
    title:'Harry potter',
    author:'Jk Rouling',
    genre:'Fantasy',
    img: "harrypotter.jpg" 
   },

   {
     title:'Mathilukal',
     author:'Basheer',
     genre:'Dramma', 
     img: "mathilukal.jpg"
  },

  {
    title:'Oliver Twist',
    author:'Charles Dickens',
    genre:'Novel',
    img:"oliver.jpg"

  },

  {
    title:'wings of Fire',
    author:'Dr.APJ Abdul Kalam',
    genre:'Autobiography',
    img:"apj.jpg"

  }
]
booksRouter.get('/',function(req,res){
    res.render("books",{
        nav,
        title:'Library',
        books
     
    });   
});

booksRouter.get('/:id',function(req,res){
  const id = req.params.id
  res.render('book',{
    nav,
    title:'Library',
     book:books[id]
  });
});

return booksRouter;
}

module.exports= router;