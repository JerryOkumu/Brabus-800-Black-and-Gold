document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const userInput = document.getElementById('userInput').value;

    // Display feedback
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.textContent = `Hello, ${userInput}! We will send you an email with the code`;

    // Clear input field
    document.getElementById('userInput').value = '';
});
