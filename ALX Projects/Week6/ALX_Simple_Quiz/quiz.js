// Define the function to check the user's answer
function checkAnswer() {
    // The correct answer to the quiz question
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Access the feedback element to display messages
    const feedback = document.getElementById('feedback');

    // Check if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green"; // Provide visual feedback for a correct answer
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red"; // Provide visual feedback for an incorrect answer
        }
    } else {
        // Prompt the user to select an answer if none is chosen
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "orange";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
