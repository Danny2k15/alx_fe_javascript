// Array to hold quote objects
const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Inspirational" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "Get busy living or get busy dying.", category: "Motivational" },
];

// Function to display a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    // Create or update the quote display area
    const quoteDisplay = document.getElementById('quoteDisplay');
    if (!quoteDisplay) {
        const newQuoteDisplay = document.createElement('div');
        newQuoteDisplay.id = 'quoteDisplay';
        document.body.appendChild(newQuoteDisplay);
    }
    document.getElementById('quoteDisplay').innerHTML = `
        <p><strong>Category:</strong> ${quote.category}</p>
        <p><em>"${quote.text}"</em></p>
    `;
}

// Function to create the form for adding a new quote
function createAddQuoteForm() {
    const formContainer = document.getElementById('addQuoteForm');
    if (!formContainer) {
        const newFormContainer = document.createElement('div');
        newFormContainer.id = 'addQuoteForm';
        document.body.appendChild(newFormContainer);
    }

    // Clear any existing form
    document.getElementById('addQuoteForm').innerHTML = `
        <h3>Add a New Quote</h3>
        <form id="quoteForm">
            <label for="quoteText">Quote Text:</label><br>
            <textarea id="quoteText" required></textarea><br>
            <label for="quoteCategory">Category:</label><br>
            <input type="text" id="quoteCategory" required /><br>
            <button type="submit">Add Quote</button>
        </form>
    `;

    // Add event listener to handle the form submission
    document.getElementById('quoteForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const quoteText = document.getElementById('quoteText').value;
        const quoteCategory = document.getElementById('quoteCategory').value;

        // Add the new quote to the array
        quotes.push({ text: quoteText, category: quoteCategory });

        // Clear form fields
        document.getElementById('quoteText').value = '';
        document.getElementById('quoteCategory').value = '';

        // Optional: Display a confirmation message
        alert('Quote added successfully!');

        // Optionally, you could call showRandomQuote here to show the latest quote
        showRandomQuote();
    });
}

// Add event listeners to buttons for user interactions
document.addEventListener('DOMContentLoaded', () => {
    // Button to show a random quote
    const randomQuoteButton = document.createElement('button');
    randomQuoteButton.textContent = 'Show Random Quote';
    document.body.appendChild(randomQuoteButton);
    randomQuoteButton.addEventListener('click', showRandomQuote);

    // Button to create the add quote form
    const addQuoteButton = document.createElement('button');
    addQuoteButton.textContent = 'Add a Quote';
    document.body.appendChild(addQuoteButton);
    addQuoteButton.addEventListener('click', createAddQuoteForm);
});
