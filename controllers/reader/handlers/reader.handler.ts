import { di } from "@config";
import { FastifyRequest, FastifyReply } from "fastify";
import { ReaderService } from "../../../services";

export const readerHandler = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  // Сервис через DI, резолвим его в хендлере.
  const readerService = di.container.resolve<ReaderService>("readerService");
  // Получаем из query соответствие (будет подчеркивать из-за незарегистрированных роутов)
  const match = req.query["match"] as string;
  // Читаем файлы, по переданному слову
  const filenames = await readerService.readFilesAndFindMatch(match);

  return filenames;
};
