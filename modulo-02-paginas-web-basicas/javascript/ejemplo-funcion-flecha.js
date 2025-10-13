// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

// Create an object
const obj = {
  value: 10,
  getValueNormal: function() {
    return this.value;
  },
  getValueArrow: () => {
    return this.value;
  }
};

console.log(obj.getValueNormal()); // 10
console.log(obj.getValueArrow()); // undefined
