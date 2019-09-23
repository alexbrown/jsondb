import express, { Response, Request } from "express";
import routes from "./routes";

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => console.log(`JSONDB listening on port ${port}!`))