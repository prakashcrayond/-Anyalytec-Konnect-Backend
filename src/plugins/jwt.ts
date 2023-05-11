import fp from "fastify-plugin";
import fastifyJWT from "@fastify/jwt";

export default fp(async (fastify) => {
  fastify.register(fastifyJWT, {
    secret: "AScTB_XeicE*YHK!b-H9",
    sign: {
      expiresIn: "2d",
    },
  });
});
