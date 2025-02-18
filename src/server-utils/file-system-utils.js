import fs from "fs/promises";
import path from "path";

function readFile(localPath) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

export function readDirectory(localPath) {
  return fs.readdir(path.join(process.cwd(), localPath));
}

export function writeFile(localPath, stringToWrite) {
  fs.writeFile(path.join(process.cwd(), localPath), stringToWrite, {
    encoding: "utf8",
    flag: "w",
  });
}

export async function writeToFileAppendWithISODate(localPath, stringToWrite) {
  await fs.writeFile(
    path.join(process.cwd(), localPath),
    new Date().toISOString() + "\n" + stringToWrite + "\n",
    {
      encoding: "utf8",
      flag: "a",
    },
  );
}

export async function readFirstLineFromFile(localPath) {
  const fileContent = await fs.readFile(
    path.join(process.cwd(), localPath),
    "utf-8",
  );
  return (fileContent.match(/(^.*)/) || [])[1] || "";
}
