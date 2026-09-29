function generateProfileCard(user) {
  const name = user.name ?? "Anonymous";
  const city = user.address?.city ?? "Unknown";
  const followers = user.social?.followers ?? 0;

  return `${name} | ${city} | followers: ${followers}`;
}

console.log(
  generateProfileCard({
    name: "Rafi",
    address: { city: "Dhaka" },
    social: { followers: 1014 },
  }),
);

console.log(
  generateProfileCard({
    name: "Tanvir",
    address: { city: "Dhaka" },
    social: { followers: 1200 },
  }),
);
// Tanvir | Dhaka | followers: 1200

console.log(
  generateProfileCard({
    name: "Rahim",
    address: { city: "Khulna" },
    social: { followers: 500 },
  }),
);
// Rahim | Khulna | followers: 500

console.log(generateProfileCard({}));
// Anonymous | Unknown | followers: 0

console.log(
  generateProfileCard({
    name: "Karim",
  }),
);
// Karim | Unknown | followers: 0

console.log(
  generateProfileCard({
    address: { city: "Satkhira" },
  }),
);
// Anonymous | Satkhira | followers: 0

console.log(
  generateProfileCard({
    social: { followers: 999 },
  }),
);
// Anonymous | Unknown | followers: 999

console.log(
  generateProfileCard({
    name: null,
    address: null,
    social: null,
  }),
);
// Anonymous | Unknown | followers: 0

console.log(
  generateProfileCard({
    name: "",
    address: { city: "" },
    social: { followers: 0 },
  }),
);
//  |  | followers: 0

console.log(
  generateProfileCard({
    name: "Siam",
    address: {},
    social: {},
  }),
);
// Siam | Unknown | followers: 0

console.log(
  generateProfileCard({
    name: "Nabil",
    address: { city: "Jashore" },
    social: { followers: 0 },
  }),
);
// Nabil | Jashore | followers: 0

console.log(
  generateProfileCard({
    name: "Rafi",
    address: { city: "Chittagong" },
  }),
);
// Rafi | Chittagong | followers: 0

console.log(
  generateProfileCard({
    name: "Hasan",
    social: { followers: 10000 },
  }),
);
// Hasan | Unknown | followers: 10000
