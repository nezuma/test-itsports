import { FastifySchema } from "fastify";

export const readerSchema: FastifySchema = {
  tags: "Reader",
  summary: "Маршрут теста",
  querystring: {
    type: "object",
    properties: {
      match: {
        type: "string",
      },
    },
  },
  response: {},
};
