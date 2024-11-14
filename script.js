const quotes = [
   "Change is the end result of all true learning — Leo Buscaglia",
    "In organizations, real power and energy is generated through relationships. The patterns of relationships and the capacities to form them are more important than tasks, functions, roles, and positions — Margaret Wheatley",
    "An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage — Jack Welch",
    "Great things in business are never done by one person; they're done by a team of people — Steve Jobs",
    "Progress is impossible without change, and those who cannot change their minds cannot change anything — George Bernard Shaw",
    "The secret of change is to focus all of your energy, not on fighting the old, but on building the new — Socrates",
    "In a world of constant change, the spoils go to the nimble — Steve Forbes",
    "Organizations grow when their people grow — John C. Maxwell",
    "True leaders don't create followers; they create more leaders — Tom Peters",
    "Trust is the glue of life. It's the most essential ingredient in effective communication. It's the foundational principle that holds all relationships — Stephen Covey",
    "Culture eats strategy for breakfast — Peter Drucker",
    "The greatest danger in times of turbulence is not the turbulence; it is to act with yesterday's logic — Peter Drucker",
    "Leadership is not about being in charge. It is about taking care of those in your charge — Simon Sinek",
    "You don’t build a business. You build people, and people build the business — Zig Ziglar",
    "Change before you have to — Jack Welch",
    "Excellence is not an act, but a habit — Aristotle",
    "The strength of the team is each individual member. The strength of each member is the team — Phil Jackson",
    "An effective leader knows how to recognize and celebrate small wins — John C. Maxwell",
    "Adaptability is about the powerful difference between adapting to cope and adapting to win — Max McKeown",
    "People who are truly strong lift others up. People who are truly powerful bring others together — Michelle Obama",
    "Leaders instill in their people a hope for success and a belief in themselves.",
    "Empower people to see possible futures they haven't considered — Ron Heifetz",
    "Change is inevitable. Growth is optional — John C. Maxwell",
    "To handle yourself, use your head; to handle others, use your heart — Eleanor Roosevelt",
    "Our ability to reach unity in diversity will be the beauty and the test of our civilization — Mahatma Gandhi",
    "Continuous improvement is better than delayed perfection — Mark Twain",
    "The best way to predict the future is to create it — Peter Drucker",
    "Your success as a leader will be determined by what you leave behind.",
    "The only sustainable competitive advantage is an organization’s ability to learn faster than the competition — Peter Senge",
    "Change starts at the top but must be felt throughout the organization.",
    "Great leaders inspire action by connecting people to a cause greater than themselves — Simon Sinek",
    "The way a team plays as a whole determines its success — Babe Ruth",
    "Success is not the key to happiness. Happiness is the key to success — Albert Schweitzer",
    "Collaboration requires mutual respect, focus, and authenticity.",
    "Vision without action is merely a dream. Action without vision just passes the time. Vision with action can change the world — Joel A. Barker",
    "Innovation is the ability to see change as an opportunity — not a threat — Steve Jobs",
    "The greatest asset of any organization is its people.",
    "In the end, all business operations can be reduced to three words: people, product, and profits — Lee Iacocca",
    "It’s not what we do once in a while that shapes our lives, but what we do consistently — Tony Robbins",
    "A team is not a group of people who work together. A team is a group of people who trust each other — Simon Sinek",
    "Effective teamwork begins and ends with communication — Mike Krzyzewski",
    "Don’t fear failure. Fear being in the exact same place next year as you are today.",
    "The art of leadership is saying no, not yes. It is very easy to say yes — Tony Blair",
    "Success is a journey, not a destination — Arthur Ashe",
    "Change brings opportunity — Nido Qubein",
    "Simplicity is the ultimate sophistication — Leonardo da Vinci",
    "The best way to manage change is to create it — Peter Drucker",
    "Leadership is unlocking people's potential to become better — Bill Bradley",
    "Teams outperform individuals in competitive environments.",
    "When the culture of an organization is strong, performance will reflect it.",
    "Don't limit your challenges. Challenge your limits — Jerry Dunn",
    "Wisdom is knowing what to do next; virtue is doing it — David Starr Jordan",
    "Leadership is the capacity to translate vision into reality — Warren Bennis",
    "Good leaders must first become good servants — Robert K. Greenleaf",
    "Success is not in what you have, but who you are — Bo Bennett",
    "Every organization must be prepared to abandon everything it does to survive — Peter Drucker",
    "Your company’s most valuable asset isn’t something you own. It’s the people who work for you.",
    "Success seems to be connected with action. Successful people keep moving — Conrad Hilton",
    "The best organizations learn from their experiences, their successes, and their failures.",
    "Flexibility in life is a direct measure of intelligence — Bruce Lee",
    "Alone we can do so little; together we can do so much — Helen Keller",
    "Great leaders don't blame the tools they are given. They work to sharpen them — Simon Sinek",
    "Sometimes you win, sometimes you learn — John C. Maxwell",
    "Change the way you look at things, and the things you look at change — Wayne Dyer",
    "The strength of the team is each individual member — Phil Jackson",
    "If you want to go fast, go alone. If you want to go far, go together — African Proverb",
    "The only way to do great work is to love what you do — Steve Jobs",
    "People will forget what you said, but they will never forget how you made them feel — Maya Angelou",
    "Great organizations are built on great conversations.",
    "Be stubborn about your goals and flexible about your methods.",
    "In the middle of difficulty lies opportunity — Albert Einstein",
    "Empower your team and see them soar.",
    "People grow through experience if they meet life honestly and courageously — Eleanor Roosevelt",
    "When we strive to become better than we are, everything around us becomes better too — Paulo Coelho",
    "It's not what you look at that matters; it’s what you see — Henry David Thoreau",
    "The task of leadership is to create an alignment of strengths, making our weaknesses irrelevant — Peter Drucker",
    "The best teamwork comes from men who are working independently toward one goal — James Cash Penney",
    "People don’t resist change. They resist being changed — Peter Senge",
    "Growth is never by mere chance; it is the result of forces working together — James Cash Penney",
    "Success is achieved by developing our strengths, not by eliminating our weaknesses — Marilyn Vos Savant",
    "Learning never exhausts the mind — Leonardo da Vinci",
    "Leadership is the art of getting someone else to do something you want done because he wants to do it — Dwight D. Eisenhower",
    "The only thing worse than training your employees and having them leave is not training them and having them stay — Henry Ford",
    "An effective leader is a builder of trust and a catalyst of innovation.",
    "Effective management is about preparing for the future, not just fixing the past.",
    "The true test of leadership is how well you function in a crisis — Brian Tracy",
    "Failure is not fatal, but failure to change might be — John Wooden",
    "The successful leader is one who cultivates the moral values of their organization.",
    "Efficiency is doing things right; effectiveness is doing the right things — Peter Drucker",
    "The function of leadership is to produce more leaders, not more followers — Ralph Nader",
    "To win in the marketplace, you must first win in the workplace — Doug Conant",
    "Continuous improvement is better than delayed perfection — Mark Twain",
    "Employees want to be part of something that allows them to grow and make a difference.",
    "Adapt what is useful, reject what is useless, and add what is specifically your own — Bruce Lee",
    "Positive culture comes from being mindful and respecting your coworkers and being empathetic — Biz Stone",
    "One of the greatest values of mentors is the ability to see ahead what others cannot see and to help them navigate a course to their destination — John C. Maxwell",
    "The people who are crazy enough to think they can change the world are the ones who do — Rob Siltanen",
    "If you really want to grow as an organization, learn to delegate — John C. Maxwell",
    "In learning you will teach, and in teaching you will learn — Phil Collins",
    "A goal without a plan is just a wish — Antoine de Saint-Exupéry",
];

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById("quote-display");
    quoteDisplay.textContent = quotes[randomIndex];
}

//For Frameworks page sorting by alphabetical order or by theme 
function sortFrameworks() {
    const sortOption = document.getElementById("sort").value;
    const frameworkGrid = document.getElementById("framework-grid");
    const frameworks = Array.from(frameworkGrid.getElementsByClassName("framework-card"));

    if (sortOption === "alphabetical") {
        frameworks.sort((a, b) => a.getAttribute("data-name").localeCompare(b.getAttribute("data-name")));
    } else if (sortOption === "theme") {
        frameworks.sort((a, b) => a.getAttribute("data-theme").localeCompare(b.getAttribute("data-theme")));
    }

    // Clear existing frameworks and re-append sorted frameworks
    frameworkGrid.innerHTML = "";
    frameworks.forEach(card => frameworkGrid.appendChild(card));
}

// URL for the RSS feed (replace with your feed URL)
const rssUrl = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.feedburner.com%2FStrategyBusiness-Leadership";

// Function to fetch and display RSS feed
function fetchRSS() {
    fetch(rssUrl)
        .then(response => response.json())
        .then(data => {
            const rssFeedContainer = document.getElementById("rss-feed");
            rssFeedContainer.innerHTML = ""; // Clear initial content

            // Loop through each item in the RSS feed
            data.items.forEach(item => {
                // Create a new RSS item element
                const rssItem = document.createElement("div");
                rssItem.classList.add("rss-item");

                // Set the HTML content of the item
                rssItem.innerHTML = `
                    <h2><a href="${item.link}" target="_blank">${item.title}</a></h2>
                    <p>${item.description}</p>
                    <a href="${item.link}" target="_blank">Read more</a>
                `;

                // Append the RSS item to the container
                rssFeedContainer.appendChild(rssItem);
            });
        })
        .catch(error => {
            console.error("Error fetching RSS feed:", error);
            document.getElementById("rss-feed").innerHTML = "<p>Failed to load articles.</p>";
        });
}

// Fetch RSS feed on page load
fetchRSS();