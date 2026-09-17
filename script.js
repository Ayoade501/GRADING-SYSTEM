function grade(){
    let userScore = document.getElementById('userInput').value;
    let displayArea = document.getElementById('see');
    if (userScore == '') {
      displayArea.innerHTML = `<h2>Please enter a valid score between 1 and 100</h2>`
    }else if (userScore <= 40) {
       displayArea.innerHTML = `<h2>F9-fail</h2>` 
    }else if (userScore <= 44) {
       displayArea.innerHTML = `<h2>E8-pass</h2>` 
    }else if (userScore <= 49) {
        displayArea.innerHTML = `<h2>D7-Average</h2>`
    }else if (userScore <= 54) {
        displayArea.innerHTML = `<h2>C6-Credit</h2>`
    }else if (userScore <= 59) {
        displayArea.innerHTML = `<h2>C5-Credit</h2>`
    }else if (userScore <= 64) {
        displayArea.innerHTML = `<h2>C4-Credit</h2>`
    }else if (userScore <= 69) {
        displayArea.innerHTML = `<h2>B2-Good</h2>`
    }else if (userScore <= 100) {
        displayArea.innerHTML = `<h2>A1-EXcellent</h2>`
    }
}