import express, { Response, Request } from "express";

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => res.send('Welcome to jsondb!'))

app.listen(port, () => console.log(`JSONDB listening on port ${port}!`))