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
	},
	{
		quote: "Whenever the world throws rose petals at you, which thrill and seduce the ego, beware.",
		author: "Anne Lamott",
		profession: "American writer"
	},
	{
		quote: "One of the things I learned the hard way was that it doesn't pay to get discouraged. Keeping busy and making optimism a way of life can restore your faith in yourself.",
		author: "Lucille Ball",
		profession: "American actress and comedienne"
	},
	{
		quote: "The unfed mind devours itself.",
		author: "Gore Vidal",
		profession: "American Writer"
	},
	{
		quote: "Winning is not a sometime thing; it’s an all time thing. You don’t win once in a while, you don’t do things right once in a while, you do them right all the time. Winning is a habit, Unfortunately, so is losing.",
		author: "Vince Lombardi"
	},
	{
		quote: "Inaction Breeds Doubt And Fear. Action Breeds Confidence And Courage. If You Want To Conquer Fear, Do Not Sit Home And Think About It. Go Out And Get Busy.",
		author: "Dale Breckenridge Carnegie"
	},
	{
		quote: "The theory seems to be that as long as a man is a failure he is one of God's children, but that as soon as he succeeds he is taken over by the Devil.",
		author: "H.L. Mencken",
		profession: "American journalist and essayist"
	}
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quote-display').innerHTML = quotes[randomNumber].quote;
	document.getElementById('quote-author').innerHTML = "-" + quotes[randomNumber].author;
}
newQuote();

