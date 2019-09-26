import express, { Response, Request } from "express";
import bodyParser from 'body-parser';
import hbs from 'express-handlebars';
import path from 'path';
import routes from "./routes";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'hbs');

app.engine( 'hbs', hbs( {
  extname: 'hbs',
  layoutsDir: __dirname + '/views/',
}));

app.set('views',path.join(__dirname,'views'))

routes(app);

app.listen(port, () => console.log(`JSONDB listening on port ${port}!`))