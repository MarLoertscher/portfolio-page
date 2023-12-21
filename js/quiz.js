

async function fetchData(apiURL) {
    try {
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data; // Return the data
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Rethrow the error for further handling, if needed
    }
}




let count = 0
var resultData = ""
let questionCount = 0
let points = 0
async function play() {
    try {
        const form = document.getElementById("quizForm");
        const category = form.elements["category"].value;
        const difficulty = form.elements["difficulty"].value;
        const amount = form.elements["numberOfQuestions"].value;
        const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=boolean`
        resultData = await fetchData(url);
        questionCount = resultData['results']['length']
        setupScreen()
        toggleTrueFalse()
    } catch (error) {
        // Handle errors if necessary
        console.error('Error:', error);
    }    
}

function setupScreen(){
    document.getElementById("questionbox").innerHTML = resultData['results'][count]['question'] + '\n' +'True or False?' ;
    document.getElementById("counterbox").innerHTML = 'Question ' + (count+1) + ' of ' + questionCount;
}

function checkAnswer(answer) {
    if (answer == resultData['results'][count]['correct_answer']) {
        points += 1
    } 
    count += 1
    if (count == questionCount) {
        endRound()
        return
    }else{
        setupScreen()
    }
}

function endRound() {
    document.getElementById("congratulations").innerHTML = "Congratulations! You got " + points + " points!"
    count = 0
    points = 0
    document.getElementById("questionbox").innerHTML = "Want to play again?"
    document.getElementById("counterbox").innerHTML = ""
    document.getElementById("retryButton").style.display = "block"
    toggleTrueFalse()
}

function pressTrue() {
    checkAnswer('True')
}
function pressFalse() {
    checkAnswer('False')
}

//create a function that hides the start button and shows the quiz   
function startQuiz() {
    document.getElementById("playButton").style.display = "none";
    document.getElementById("quiz").style.display = "block"
    play()
}

function toggleTrueFalseOff() {
    document.getElementById("trueButton").style.display = "none";
    document.getElementById("falseButton").style.display = "none";
}
function toggleTrueFalseOn() {
    document.getElementById("trueButton").style.display = "block";
    document.getElementById("falseButton").style.display = "block";
}
// combine the two functions into one
function toggleTrueFalse() {
    if (document.getElementById("trueButton").style.display === "none") {
        toggleTrueFalseOn()
    } else {
        toggleTrueFalseOff()
    }
}

function reloadPage() {
    location.reload();
}


