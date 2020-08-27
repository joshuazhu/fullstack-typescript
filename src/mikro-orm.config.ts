import { Post } from "./entities/Post";
import { PROD } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';

export default {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex p
    },
    entities: [Post],
    dbName: "fullstack_typescript",
    type: "postgresql",
    debug: !PROD
} as Parameters<typeof MikroORM.init>[0];