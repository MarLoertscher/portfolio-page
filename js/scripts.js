function getQuizData(apiURL){
    fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        })
    .then(json => {
        // Use the data from the API response
        console.log(json);
    })
    .catch(error => {
        // Handle any errors
        console.error('There was a problem with the fetch operation:', error);
    });
}