const { readFileSync, promises: fsPromises } = require("fs");

async function asyncReadFile(filename) {
  try {
    const contents = await fsPromises.readFile(filename, "utf-8");
    const arr = contents.split(/\r?\n/);
    return arr;
  } catch (err) {
    console.log(err);
  }
}

const convert = async (file) => {
  const arr = await asyncReadFile("./code.cpp");
  console.log(arr);
};

convert();
