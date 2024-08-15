import fs from "fs/promises";
export class ReaderService {
  async readFilesAndFindMatch(match: string): Promise<string[]> {
    const [file1, file2, file3] = await Promise.all([
      fs.readFile("../../reader/files/file1.txt", "utf8"),
      fs.readFile("../../reader/files/file2.txt", "utf8"),
      fs.readFile("../../reader/files/file3.txt", "utf8"),
    ]);
    // захардкожу
    const files = [
      { name: "file1.txt", content: file1 },
      { name: "file2.txt", content: file2 },
      { name: "file3.txt", content: file3 },
    ];

    const matches: string[] = [];

    files.forEach((file) => {
      if (file.content.includes(match)) {
        matches.push(file.name);
      }
    });

    return matches;
  }
}
