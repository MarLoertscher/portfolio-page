// function getQuizData(apiURL){
//     const main = document.querySelector('main');
//     fetch(apiURL)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//         })
//     .then(json => {
//         // Use the data from the API response
//         for (let i = 0; i <=9; i++) {
//             console.log(json['results'][i]['question']);
//             document.getElementById("questionbox").innerHTML = json['results'][i]['question'];
            
//         }
//         questions = json;
//         console.log(typeof questions);
//         console.log(Object.keys(json['results']))
//         return json['results'] ;
        
        
//     })
//     .catch(error => {
//         // Handle any errors
//         console.error('There was a problem with the fetch operation:', error);
//     });
// }





const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean";




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
        resultData = await fetchData(url);
        console.log(resultData['results']); // Use the resultData variable for further processing
        questionCount = resultData['results']['length']
        startQuiz()
        setupScreen()
        toggleTrueFalse()
    } catch (error) {
        // Handle errors if necessary
        console.error('Error:', error);
    }    
}

function setupScreen(){
    document.getElementById("questionbox").innerHTML = resultData['results'][count]['question'] + '\n' +'True of False?' ;
    document.getElementById("counterbox").innerHTML = 'Question ' + (count+1) + ' of ' + questionCount;
}

function checkAnswer(answer) {
    if (answer == resultData['results'][count]['correct_answer']) {
        // alert('Correct!')
        points += 1
    } else {
        // alert('Wrong!')
    }
    count += 1
    if (count == questionCount) {
        alert('You got ' + points + ' points!')
        endRound()
        return
    }else{
        setupScreen()
    }
}

function endRound() {
    count = 0
    points = 0
    document.getElementById("questionbox").innerHTML = "Want to play again?"
    document.getElementById("counterbox").innerHTML = ""
    toggleTrueFalse()
}

function pressTrue() {
    checkAnswer('True')
}
function pressFalse() {
    checkAnswer('False')
}

// //create a function that hides the start button and shows the quiz   
// function startQuiz() {
//     document.getElementById("playButton").style.display = "none";
//     document.getElementById("quiz").style.display = "block";
//     play()
// }

// function toggleTrueFalseOff() {
//     document.getElementById("trueButton").style.display = "none";
//     document.getElementById("falseButton").style.display = "none";
// }
// function toggleTrueFalseOn() {
//     document.getElementById("trueButton").style.display = "true";
//     document.getElementById("falseButton").style.display = "true";
// }
// // combine the two functions into one
// function toggleTrueFalse() {
//     if (document.getElementById("trueButton").style.display === "none") {
//         toggleTrueFalseOn()
//     } else {
//         toggleTrueFalseOff()
//     }
// }