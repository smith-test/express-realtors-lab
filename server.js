const express = require('express')  //express package we need
const cors = require('cors')
const logger = require('morgan')
const apartmentRouter = require('./routes/apartments')
const houseRouter = require('./routes/houses')

const PORT = process.env.PORT || 3000;
const app = express();  //using app variable to store the web app the the express package created


//Middleware Pipeline
app.use(/*mount our middleware*/cors());  //this returns the middleware we need
app.use(logger('dev'));  //we invoke logger too but pass a string to it called dev
 

//routers
app.get('/', function(req, res){
    res.send("Here is our first response")  //adding new router to our web app
})

app.use('/apartments', apartmentRouter)
app.use('/houses', houseRouter)

//Stays at the bottom
//request listener
app.listen(PORT, function() {
    console.log(`Server running on port: ${PORT}`);
});