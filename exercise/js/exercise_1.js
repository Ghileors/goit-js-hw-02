const logItems = function (array) {
    for (const index of array) {
      for (let i = 1; i < array.length; i += 1) {
        let number = array.indexOf(index);
        console.log(`${number + 1} - ${index}`);
      }
    }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);