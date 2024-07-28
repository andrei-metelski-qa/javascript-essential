/* eslint-disable no-unused-vars */
/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  lidOpen: false,
  strapLength: {
    left: 26,
    right: 26,
  },
  renameBackPack: function (newName) {
    this.name = newName;
  },
  changeVolume: function (newVolume) {
    this.volume = newVolume;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
  changeNumPockets: function (numPockets) {
    this.pocketNum = numPockets;
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.clear();
console.log(`Backpack initial name: ${backpack.name}`);
backpack.renameBackPack("Mountain backpack");
console.log(`Backpack new name: ${backpack.name}`);

console.log(`Backpack initial volume: ${backpack.volume}`);
backpack.changeVolume(50);
console.log(`Backpack new volume: ${backpack.volume}`);

console.log(`Backpack initial color: ${backpack["color"]}`);
backpack.changeColor("blue");
console.log(`Backpack new color: ${backpack["color"]}`);

console.log(`Backpack initial number of packets: ${backpack.pocketNum}`);
backpack.changeNumPockets(20);
console.log(`Backpack new pocket number: ${backpack.pocketNum}`);

console.log(`Backpack lid open initial status: ${backpack.lidOpen}`);
backpack.toggleLid(true);
console.log(`Backpack lid open new status: ${backpack.lidOpen}`);

console.log(`Backpack strap initial lengths: left: ${backpack.strapLength.left} and right: ${backpack.strapLength.right}`);
backpack.newStrapLength(100, 150);
console.log(`Backpack strap new lengths: left: ${backpack.strapLength.left} and right: ${backpack.strapLength.right}`);
