// add solution here
function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (var i = 0, l = musicians.length; i < l; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts){
 var shoutedFacts = [];
 var i = 0
  while (i < facts.length) {
    shoutedFacts.push(facts[i]+"!!!")
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(number){
  var iLoveTheBeatlesArray = []

  do {
<<<<<<< HEAD
    iLoveTheBeatlesArray.push('I love the Beatles!')
=======
    iLoveTheBeatlesArray.push('I Love the Beatles')
>>>>>>> de41c37669e9448a34f6eaa8cd44bcc3403cdc00
    number++
  } while (number < 15);

  return iLoveTheBeatlesArray
}
