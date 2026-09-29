function getDayOfWeek(year, month, day) {
  const date = new Date(year, month - 1, day);

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekdays[date.getDay()];
}

console.log(getDayOfWeek(2024, 5, 11)); // "Saturday"
console.log(getDayOfWeek(2023, 1, 1));
console.log(getDayOfWeek(2005, 8, 6));
console.log(getDayOfWeek(2026, 8, 6));
