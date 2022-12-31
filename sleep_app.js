// function to determine users hour of sleep in a week
const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 9;
  } else if (day === "thursday") {
    return 6;
  } else if (day === "friday") {
    return 8;
  } else if (day === "saturday") {
    return 7;
  } else if (day === "sunday") {
    return 10;
  } else {
    return "Error!";
  }
};

console.log(getSleepHours("monday"));
console.log(getSleepHours("thursday"));
console.log(getSleepHours("adsfg"));

// Adding total hours of sleep
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

// Ideal amount of sleep
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

// function to calculate sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("Perfect amount of sleep! You got " + idealSleepHours + " of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got " + (actualSleepHours - idealSleepHours) + " more hours of sleep than needed!");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("You should get some rest! You got  " + (actualSleepHours - idealSleepHours) + " hours of less sleep then desired.");
  } else {
    console.log("Error!");
  }
};

calculateSleepDebt();