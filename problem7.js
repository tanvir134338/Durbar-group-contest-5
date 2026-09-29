function commonSkills(skills1, skills2) {
  const set1 = new Set(skills1.map((skill) => skill.toLowerCase()));

  const common = [];

  for (let i = 0; i < skills2.length; i++) {
    const skill = skills2[i].toLowerCase();

    if (set1.has(skill)) {
      common.push(skill);
    }
  }

  return [...new Set(common)].sort();
}

console.log(commonSkills(["JS", "React", "Node"], ["react", "css", "js"]));
// ["js", "react"]

console.log(commonSkills(["Python", "SQL"], ["Java", "C++"]));
// []

console.log(
  commonSkills(
    ["React", "react", "REACT", "JavaScript"],
    ["REACT", "React", "react"],
  ),
);
// ["react"]

console.log(
  commonSkills(["HTML", "CSS", "JavaScript"], ["html", "css", "typescript"]),
);
// ["css", "html"]

console.log(
  commonSkills(["Node", "Express", "MongoDB"], ["node", "MONGODB", "express"]),
);
// ["express", "mongodb", "node"]

console.log(commonSkills(["Java", "Python", "C++"], ["JAVA", "PYTHON", "GO"]));
// ["java", "python"]

console.log(
  commonSkills(["React", "Vue", "Angular"], ["react", "VUE", "Svelte"]),
);
// ["react", "vue"]

console.log(
  commonSkills(["Git", "GitHub", "Docker"], ["github", "docker", "git"]),
);
// ["docker", "git", "github"]

console.log(
  commonSkills(["HTML", "HTML", "CSS", "css"], ["html", "CSS", "HTML"]),
);
// ["css", "html"]

console.log(commonSkills([], ["React", "JS"]));
// []

console.log(commonSkills(["React", "JS"], []));
// []

console.log(
  commonSkills(
    ["TypeScript", "JavaScript", "React"],
    ["typescript", "javascript", "react"],
  ),
);
// ["javascript", "react", "typescript"]
