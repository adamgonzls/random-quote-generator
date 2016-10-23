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
	},
	{
		quote: "There are two great days in a person’s life- the day we are born and the day we discover why.",
		author: "William Barclay",
		profession: "Scottish theologian and author"
	},
	{
		quote: "Figuring out who you are is the whole point of the human experience.",
		author: "Anna Quindlen",
		profession: "American journalist and author"
	},
	{
		quote: "You don't lead by pointing and telling people some place to go. You lead by going to that place and making a case.",
		author: "Ken Kesey",
		profession: "American author"
	},
	{
		quote: "I walk slowly, but I never walk backward.",
		author: "Abraham Lincoln",
		profession: "16th U.S. president"
	},
	{
		quote: "We judge ourselves by what we feel capable of doing, while others judge us by what we have already done.",
		author: "Henry Wadsworth Longfellow",
		profession: "American poet and educator"
	},
	{
		quote: "Some men have thousands of reasons why they cannot do what they want to, when all they need is one reason why they can.",
		author: "Willis R. Whitney",
		profession: "American chemist"
	},
	{
		quote: "Too many people overvalue what they are not and undervalue what they are.",
		author: "Malcolm Forbes",
		profession: "American magazine publisher"
	},
	{
		quote: "The important work of moving the world forward does not wait to be done by perfect men.",
		author: "George Eliot",
		profession: "British writer"
	},
	{
		quote: "Freedom is man's capacity to take a hand in his own development. It is our capacity to mold ourselves.",
		author: "Rollo May",
		profession: "American psychologist"
	},
	{
		quote: "Imagination is more important than knowledge.",
		author: "Albert Einstein",
		profession: "German-born physicist"
	},
	{
		quote: "A failure is not always a mistake, it may simply be the best one can do under the circumstances. The real mistake is to stop trying.",
		author: "B.F. Skinner",
		profession: "American psychologist, inventor and author"
	},
	{
		quote: "Has fortune dealt you some bad cards. Then let wisdom make you a good gamester.",
		author: "Francis Quarles",
		profession: "British poet"
	},
	{
		quote: "I know of no more encouraging fact than the unquestionable ability of man to elevate his life by conscious endeavor.",
		author: "Henry David Thoreau",
		profession: "American author and poet"
	},
	{
		quote: "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.",
		author: "Bernice Johnson Reagon",
		profession: "American singer, composer, scholar and social activist"
	},
	{
		quote: "Write the bad things that are done to you in sand, but write the good things that happen to you on a piece of marble.",
		author: "Arabic proverb"
	},
	{
		quote: "To avoid criticism do nothing, say nothing, be nothing.",
		author: "Elbert Hubbard",
		profession: "American writer, artist and philosopher"
	},
	{
		quote: "I still find each day too short for all the thoughts I want to think, all the walks I want to take, all the books I want to read, and all the friends I want to see.",
		author: "John Burroughs",
		profession: "American naturalist and essayist"
	},
	{
		quote: "Procrastination is opportunity's assassin.",
		author: "Victor Kiam",
		profession: "American businessman"
	},
	{
		quote: "It may be that those who do most, dream most.",
		author: "Stephen Butler Leacock",
		profession: "British-Canadian political economist and humorist"
	},
	{
		quote: "In order to be irreplaceable one must always be different.",
		author: "Coco Chanel",
		profession: "French fashion designer"
	},
	{
		quote: "The future belongs to those who believe in the beauty of their dreams.",
		author: "Eleanor Roosevelt",
		profession: "former U.S. first lady"
	},
	{
		quote: "What we see depends mainly on what we look for.",
		author: "John Lubbock",
		profession: "British banker, politician, naturalist and archaeologist"
	},
	{
		quote: "Most people never run far enough on their first wind to find out they've got a second.",
		author: "William James",
		profession: "American psychologist and philosopher"
	},
	{
		quote: "I'll walk where my own nature would be leading: It vexes me to choose another guide.",
		author: "Emily Bront&euml;",
		profession: "British novelist and poet"
	},
	{
		quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
		author: "Thomas Edison",
		profession: "American inventor"
	},
	{
		quote: "Worry does not empty tomorrow of its sorrow; it empties today of its strength.",
		author: "Corrie ten Boom",
		profession: "Dutch writer"
	},
	{
		quote: "In times of change, learners inherit the earth; while the learned find themselves beautifully equipped to deal with a world that no longer exists.",
		author: "Eric Hoffer",
		profession: "American social writer"
	},
	{
		quote: "Well done is better than well said.",
		author: "Benjamin Franklin",
		profession: ""
	},
	{
		quote: "A ship in harbor is safe, but that is not what ships are built for.",
		author: "William G.T. Shedd",
		profession: ""
	},
	{
		quote: "If fate means you to lose, give him a good fight anyhow.",
		author: "William McFee",
		profession: "British-American writer"
	},
	{
		quote: "The man who insists upon seeing with perfect clearness before he decides, never decides. Accept life, and you must accept regret.",
		author: "Henri Frédéric Amiel",
		profession: "Swiss philosopher, poet and critic"
	},
	{
		quote: "That which grows fast, withers as rapidly. That which grows slowly, endures.",
		author: "Josiah Gilbert Holland",
		profession: "American writer and poet"
	},
	{
		quote: "Action is a great restorer and builder of confidence. Inaction is not only the result, but the cause, of fear.",
		author: "Norman Vincent Peale",
		profession: "American minister and author"
	},
	{
		quote: "Life isn't about finding yourself. Life is about creating yourself.",
		author: "George Bernard Shaw",
		profession: "Irish playwright"
	},
	{
		quote: "Optimism is essential to achievement and it is also the foundation of courage and true progress.",
		author: "Nicholas Murray Butler",
		profession: "American diplomat and educator"
	},
	{
		quote: "You may be disappointed if you fail, but you are doomed if you don't try.",
		author: "Beverly Sills",
		profession: "American opera singer and opera manager"
	}
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quote-display').innerHTML = quotes[randomNumber].quote;
	document.getElementById('quote-author').innerHTML = "-" + quotes[randomNumber].author;
}
newQuote();

