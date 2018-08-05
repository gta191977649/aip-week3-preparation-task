//Experss server
const express = require('express');
const app = express();
app.get('/api/customers',(request,response) => {
    //Hard coded data ....
    const data = [
        {id:1,fristname:'Hello',lastname:'world'},
        {id:2,fristname:'222',lastname:'33'},
        {id:3,fristname:'sfsea',lastname:'b43'}
    ];
    response.json(data);
});
const port = 8081;
app.listen(port, () => 
console.log(`Server is runing at port ${port}`));