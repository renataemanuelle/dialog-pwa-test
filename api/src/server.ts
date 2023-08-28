import http from 'http';
import express, { Express } from 'express';
import cors from 'cors'
import morgan from 'morgan';
import { graphqlHTTP } from 'express-graphql'
import { schema } from './schemas/schema';
import { buildSchema } from 'graphql';
import { rootValue } from './resolvers/users';

const app: Express = express();

app.use(morgan('dev'));
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/list',
graphqlHTTP({
  schema: buildSchema(schema),
  rootValue: rootValue,
  graphiql: true,
}));

const httpServer = http.createServer(app);
const PORT: any = process.env.PORT ?? 4000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
