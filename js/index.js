var quotes = [
	{
		quote: "Action is the antidote to despair",
		author: "Joan Baez",
		profession: "American Musician"
	},
	{
		quote: "If you have no confidence in self, you are twice defeated in the race of life. With confidence, you have won even before you have started.",
		author: "Marcus Garvey",
		profession: "Jamaican publisher, journalist, entrepreneur and orator"
	},
	{
		quote: "If you hire only those people you understand, the company will never get people better than you are. Always remember that you often find outstanding people among those you don't particularly like.",
		author: "Soichiro Honda",
		profession: "Japanese engineer and industrialist"
	},
	{
		quote: "Challenges make you discover things about yourself that you never really knew. They're what make the instrument stretch -- what make you go beyond the norm.",
		author: "Cicely Tyson",
		profession: "American actress"
	},
	{
		quote: "If there is no struggle, there is no progress",
		author: "Frederick Douglass",
		profession: "American abolitionist, author and orator"
	},
	{
		quote: "Where all think alike, no one thinks very much.",
		author: "Walter Lippmann", 
		profession: "writer and journalist"
	}
	// {
	// 	quote: "",
	// 	author: "",
	// 	profession: ""
	// }
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quote-display').innerHTML = quotes[randomNumber].quote;
	document.getElementById('quote-author').innerHTML = "-" + quotes[randomNumber].author;
}
newQuote();

