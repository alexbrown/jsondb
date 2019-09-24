import express, { Response, Request } from "express";
import bodyParser from 'body-parser';
import routes from "./routes";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes(app);

app.listen(port, () => console.log(`JSONDB listening on port ${port}!`))