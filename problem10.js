function simulateTicketQueue(commands) {
  const queue = [];
  const served = [];

  for (const command of commands) {
    if (command.startsWith("join ")) {
      const name = command.slice(5);

      if (!queue.includes(name)) {
        queue.push(name);
      }
    } else if (command.startsWith("leave ")) {
      const name = command.slice(6);

      const index = queue.indexOf(name);

      if (index !== -1) {
        queue.splice(index, 1);
      }
    } else if (command === "serve") {
      if (queue.length > 0) {
        const name = queue.shift();
        served.push(name);
      }
    }
  }

  return {
    queue,
    served,
  };
}

console.log(
  simulateTicketQueue([
    "join Rafi",
    "join Sara",
    "serve",
    "join Alex",
    "leave Sara",
    "serve",
  ]),
);
// { queue: [], served: ["Rafi", "Alex"] }

console.log(
  simulateTicketQueue([
    "serve",
    "join Bob",
    "join Bob",
    "leave Alice",
    "join Alice",
    "serve",
  ]),
);
// { queue: ["Alice"], served: ["Bob"] }

console.log(simulateTicketQueue([]));
// { queue: [], served: [] }

console.log(simulateTicketQueue(["serve", "serve", "serve"]));
// { queue: [], served: [] }

console.log(simulateTicketQueue(["join Rafi", "join Rafi", "join Rafi"]));
// { queue: ["Rafi"], served: [] }

console.log(simulateTicketQueue(["join Rafi", "join Sara", "join Karim"]));
// { queue: ["Rafi", "Sara", "Karim"], served: [] }

console.log(simulateTicketQueue(["join Rafi", "join Sara", "leave Rafi"]));
// { queue: ["Sara"], served: [] }

console.log(
  simulateTicketQueue(["join Rafi", "leave Rafi", "leave Rafi", "serve"]),
);
// { queue: [], served: [] }

console.log(
  simulateTicketQueue(["join Rafi", "join Sara", "serve", "join Rafi"]),
);
// { queue: ["Rafi"], served: ["Rafi"] }

console.log(
  simulateTicketQueue(["join Rafi", "join Sara", "join Karim", "serve"]),
);
// { queue: ["Sara", "Karim"], served: ["Rafi"] }

console.log(
  simulateTicketQueue([
    "join Rafi",
    "join Sara",
    "join Karim",
    "serve",
    "serve",
  ]),
);
// { queue: ["Karim"], served: ["Rafi", "Sara"] }

console.log(
  simulateTicketQueue([
    "join Rafi",
    "join Sara",
    "leave Sara",
    "join Karim",
    "serve",
  ]),
);
// { queue: ["Karim"], served: ["Rafi"] }

console.log(
  simulateTicketQueue(["join Rafi", "leave Rafi", "join Rafi", "serve"]),
);
// { queue: [], served: ["Rafi"] }

console.log(
  simulateTicketQueue([
    "join Alice",
    "join Bob",
    "leave Alice",
    "join Charlie",
    "serve",
  ]),
);
// { queue: ["Charlie"], served: ["Bob"] }

console.log(
  simulateTicketQueue([
    "join A",
    "join B",
    "join C",
    "leave B",
    "serve",
    "join D",
    "serve",
  ]),
);
// { queue: ["D"], served: ["A", "C"] }

console.log(simulateTicketQueue(["join Rafi", "join rafi", "join Rafi"]));
// { queue: ["Rafi", "rafi"], served: [] }
