// code your solution here
const saturdayFun = function(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }

  const wrapAdjective = function(delimiter = "*") {
    return function(adjective) {
      return `You are ${delimiter}${adjective}${delimiter}!`;
    };
  }