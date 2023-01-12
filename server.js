const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

/* Middleware */
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/*views and static*/
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "frontend/views"));
app.use('/static', express.static(path.join(__dirname, 'frontend/static')));
 
/* Router */
const detailsRouter = require('./backend/routes/details');
app.use('/',detailsRouter);
const PORT = 3001;

app.listen(PORT, async () => {
    console.log(`Listening to PORT: ${PORT}`);
    
})
