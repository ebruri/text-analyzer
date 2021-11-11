//Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// // Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function ommitOffensiveWord(text) {
  const offensiveWords = text.split(" "); 
  let newArray = [];
  offensiveWords.forEach(function(word) {
    if (!(word === "zoinks" || word === "muppeteer" || word === "biffaroni" || word === "loopdaloo")) {
    newArray.push(word);
    }
  });
  return newArray.join(" "); 
  }


// UI Logic

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    const cleanPassage = ommitOffensiveWord(passage);
    $("#clean-passage").html(cleanPassage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    });
});


