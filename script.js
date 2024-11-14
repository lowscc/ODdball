const quotes = [
    "Change is the end result of all true learning.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Innovation distinguishes between a leader and a follower.",
    "Learning is a treasure that will follow its owner everywhere.",
    "An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage."
];

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById("quote-display");
    quoteDisplay.textContent = quotes[randomIndex];
}
