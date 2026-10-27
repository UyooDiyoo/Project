let students = [
    { name: "Ada", score: 78 },
    { name: "Diyoo", score: 45 },
    { name: "Okech", score: 62 }
]

for (let i = 0; i < students.length; i++) {
  if (students[i].score >= 50) {
    console.log(`${students[i].name} passed.`);
  } else {
    console.log(`${students[i].name} failed.`);
  }
}