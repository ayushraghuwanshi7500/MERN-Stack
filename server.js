const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
app.get('/',function(req,res){
    res.send('<h1>Connection Successful</h1>')
});

app.listen(PORT,function(){
    console.log(`Server started at port ${PORT}`);
})