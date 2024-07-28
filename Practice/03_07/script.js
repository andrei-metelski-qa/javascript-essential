/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const table = {
  numLegs: 4,
  type: "Dining table",
};

const computer = {
  CPUType: "Intel",
  HDDType: "SSD",
  RAM: 512,
  video: "NVidia",
  monitor: "LG",
  case: {
    manufacturer: "LionLee",
    numFans: 6,
  },
  motherboard: "Gigabyte",
};

console.clear();
console.log(computer);
console.log("This computer has video card of this manuafacture: ", computer["video"]);
console.log("This computer has case from: ", computer.case.manufacturer);
console.log(`This computer has case with ${computer.case.numFans} fans`);



