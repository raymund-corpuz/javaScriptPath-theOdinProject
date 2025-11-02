// function getLength(value: string | string[]) {
//   if (typeof value === "string") {
//     return value.length;
//   }
//   return value.length;
// }

// console.log(getLength("Typescript"));
// console.log(getLength(["Type", "Script"]));

// function getLengths(value: string | string[]) {
//   if (typeof value === "string") {
//     return value.length;
//   }

//   return value.length;
// }

// console.log(getLengths("Typescript"));
// console.log(getLengths(["The", "quick", "brown"]));

function getLength(value: string | string[]) {
  if (typeof value === "string") {
    return value.length;
  }
  return value.length;
}
console.log(getLength("TypeScript"));
console.log(getLength(["type", "script"]));
