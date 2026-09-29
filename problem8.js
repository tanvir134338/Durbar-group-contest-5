function swapKeysAndValues(obj) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    result[value] = key;
  }

  return result;
}
console.log(swapKeysAndValues({ a: "x", b: "y" }));
// { x: "a", y: "b" }

console.log(swapKeysAndValues({ a: "x", b: "x" }));
// { x: "b" }

console.log(swapKeysAndValues({ name: "Tanvir", city: "Dhaka" }));
// { Tanvir: "name", Dhaka: "city" }

console.log(swapKeysAndValues({ a: 1, b: 2, c: 3 }));
// { "1": "a", "2": "b", "3": "c" }

console.log(swapKeysAndValues({ age: 25, score: 100, level: 5 }));
// { "5": "level", "25": "age", "100": "score" }

console.log(swapKeysAndValues({ a: "same", b: "same", c: "same" }));
// { same: "c" }

console.log(swapKeysAndValues({}));
// {}

console.log(swapKeysAndValues({ first: "A", second: "B", third: "C" }));
// { A: "first", B: "second", C: "third" }

console.log(swapKeysAndValues({ html: "HTML", css: "CSS", js: "JavaScript" }));
// { HTML: "html", CSS: "css", JavaScript: "js" }

console.log(swapKeysAndValues({ a: 10, b: "10" }));
// { "10": "b" }
