(() => {
  "use strict";
  console.log(function (e) {
    console.log("::: Running checkForName :::", e),
      ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"].includes(e) &&
        alert("Welcome, Captain!");
  }),
    alert("I EXIST");
})();
