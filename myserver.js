const express = require ('express');
const cookieParser = require ('cookie-parser');
const app = express();
app.use(cookieParser());
app.get('/login',(req , res) => {
       const username = req.query.username;
       const password = req.query.password;
       res.cookie('sessionID', '12345678');
   res.send(`Wellcome , ${username}! you are now logged in.`);
})
app.listen(3000 , ()=>{
       console.log("Server listening on port 3000! http://localhost:3000");
})