const getBlock = (id) => {
  return document.getElementById(id);
};

const letter = () => () => document.createElement("letter");

const word = (str) => {
  const characters = str.split("");
  const wrapper = document.createElement("div");
  wrapper.classList.add("word");
  const wrappedCharacters = characters.map(
    (character) => `<letter>${character}</letter>`
  );
  wrapper.innerHTML = wrappedCharacters.join("");
  return wrapper;
};

const javaCode = [
  "public class Main {",
  "\tpublic static void main(String[] args",
  "\t\tSystem.out.println('hello world');",
  "\t}",
  "}",
];

const cpp = [
  "#include <iostream>",
  "using namespace std;",
  "int main() {",
  "    int n, t1 = 0, t2 = 1, nextTerm = 0;",
  "",
  '    cout << "Enter the number of terms: ";',
  "    cin >> n;",
  "",
  '    cout << "Fibonacci Series: ";',
  "",
  "    for (int i = 1; i <= n; ++i) {",
  "        // Prints the first two terms.",
  "        if(i == 1) {",
  '            cout << t1 << ", ";',
  "            continue;",
  "        }",
  "        if(i == 2) {",
  '            cout << t2 << ", ";',
  "            continue;",
  "        }",
  "        nextTerm = t1 + t2;",
  "        t1 = t2;",
  "        t2 = nextTerm;",
  "        ",
  '        cout << nextTerm << ", ";',
  "    }",
  "    return 0;",
  "}",
];

onload = () => {
  cpp.map((line) => {
    getBlock("main").appendChild(word(line));
  });
  getBlock("main").addEventListener("click", (e) => {
    e.target.focus();
  });
  document.addEventListener("keydown", (e) => {
    if (document.activeElement == getBlock("main")) {
      console.log(e.key);
    }
  });
};
