const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/Orcamento", () =>
{
  
    console.log("mongodb connected");
})