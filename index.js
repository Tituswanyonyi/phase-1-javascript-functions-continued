function saturdayFun(undertaking="roller-skate") {
    return `This Saturday, I want to ${undertaking}!`
  }
  
  let mondayWork = function(undertaking="go to the office") {
    return `This Monday, I will ${undertaking}!`
  }
  
  let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }

