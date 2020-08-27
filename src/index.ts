import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import microconfig from "./mikro-orm.config";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";

const main = async () => {
  const orm = await MikroORM.init(microconfig);
  // await orm.getMigrator().up();

  const app = express();
  
  app.get('/', (_, res) => {
    res.send("hello")
  });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver],
      validate: false
    }),
    context: () => ({ em: orm.em })
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log()
  })
  // const posts = await orm.em.find(Post, {});
  // console.log('posts', posts)
};

main().catch(err => console.log(err));
