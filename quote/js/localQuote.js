function localQuote() {
    const quotes = [
        {
            "quote": "There are three principal means of acquiring knowledge... observation of nature," +
                    " reflection, and experimentation. Observation collects facts reflection combines" +
                    " them experimentation verifies the result of that combination.",
            "author": "Denis Diderot",
            "cat": "knowledge"
        }, {
            "quote": "A man is only as good as what he loves.",
            "author": "Saul Bellow",
            "cat": "good"
        }, {
            "quote": "The long and short of it is that I am now in a position in England to green ligh" +
                    "t movies, and that's really excellent - not high-budget movies, but movies none " +
                    "the less.",
            "author": "Idris Elba",
            "cat": "movies"
        }, {
            "quote": "I don't care what other critics say, I only hope to be played.",
            "author": "Virgil Thomson",
            "cat": "hope"
        }, {
            "quote": "The best form of flattery is to be admired, imitated or respected. I've always f" +
                    "elt proud our fans look up to us or feel we are inspirational.",
            "author": "Cheryl James",
            "cat": "best"
        }, {
            "quote": "I went looking for dresses and realized there was a niche I could fill in the we" +
                    "dding dress market.",
            "author": "Monique Lhuillier",
            "cat": "wedding"
        }, {
            "quote": "I've always wanted to go to Switzerland to see what the army does with those wee" +
                    " red knives.",
            "author": "Billy Connolly",
            "cat": "funny"
        }, {
            "quote": "Every morning I wake up with new ideas.",
            "author": "Caroll Shelby",
            "cat": "morning"
        }, {
            "quote": "All our knowledge has its origins in our perceptions.",
            "author": "Leonardo da Vinci",
            "cat": "knowledge"
        }, {
            "quote": "If you can be well without health, you may be happy without virtue.",
            "author": "Edmund Burke",
            "cat": "health"
        }, {
            "quote": "Let us develop the resources of our land, call forth its powers, build up its in" +
                    "stitutions, promote all its great interests, and see whether we also, in our day" +
                    " and generation, may not perform something worthy to be remembered.",
            "author": "W. Somerset Maugham",
            "cat": "great"
        }, {
            "quote": "To be outspoken, or different at all, is a problem for women.",
            "author": "Megan Fox",
            "cat": "women"
        }, {
            "quote": "The love of liberty is the love of others the love of power is the love of ourse" +
                    "lves.",
            "author": "William Hazlitt",
            "cat": "power"
        }, {
            "quote": "I'll always be this crazy, fun person, but when it's time to get married, I'm go" +
                    "ing to be an amazing wife.",
            "author": "Nicole Polizzi",
            "cat": "amazing"
        }, {
            "quote": "Beauty ought to look a little surprised: it is the emotion that best suits her f" +
                    "ace. The beauty who does not look surprised, who accepts her position as her due" +
                    " - she reminds us too much of a prima donna.",
            "author": "E. M. Forster",
            "cat": "beauty"
        }, {
            "quote": "In fact, I thought that Christianity was very a good and a very valuable thing f" +
                    "or us. But after a while, I began to feel that the story that I was told about t" +
                    "his religion wasn't perhaps completely whole, that something was left out.",
            "author": "Chinua Achebe",
            "cat": "good"
        }, {
            "quote": "We have abolished the death penalty for humans, so why should it continue for an" +
                    "imals?",
            "author": "Brigitte Bardot",
            "cat": "death"
        }, {
            "quote": "I can't be on the cheeseburger diet all the time.",
            "author": "Bobby Flay",
            "cat": "diet"
        }, {
            "quote": "In the 1970s and 1980s there was so little decent fiction for young people, but " +
                    "we're now in a golden age that shows no sign of fading. Philip Pullman, J. K. Ro" +
                    "wling, Lemony Snicket are only three of the best known among a good number of eq" +
                    "uals.",
            "author": "David Mitchell",
            "cat": "age"
        }, {
            "quote": "I don't think that there's been one example in history where somebody has openly" +
                    " talked about their personal life and it's done them any good.",
            "author": "Rashida Jones",
            "cat": "history"
        }, {
            "quote": "Success is not the key to happiness. Happiness is the key to success. If you lov" +
                    "e what you are doing, you will be successful.",
            "author": "Albert Schweitzer",
            "cat": "happiness"
        }, {
            "quote": "I just broke up with my boyfriend, and I've been spending more time alone than I" +
                    "'d like.",
            "author": "Lucinda Williams",
            "cat": "alone"
        }, {
            "quote": "I don't see that any buildings should be excluded from the term architecture, as" +
                    " long as they are done properly.",
            "author": "Arne Jacobsen",
            "cat": "architecture"
        }, {
            "quote": "Dating co-stars is natural. When you're working with someone, it's habit.",
            "author": "Rachel Bilson",
            "cat": "dating"
        }, {
            "quote": "Buddhism notes that it is always a mistake to think your soul can go it alone.",
            "author": "Annie Dillard",
            "cat": "alone"
        }, {
            "quote": "It is not in the stars to hold our destiny but in ourselves.",
            "author": "William Shakespeare",
            "cat": "future"
        }, {
            "quote": "On Monday mornings I am dedicated to the proposition that all men are created je" +
                    "rks.",
            "author": "H. Allen Smith",
            "cat": "men"
        }, {
            "quote": "Kinkade estimated that one of his paintings hung in every twenty homes in Americ" +
                    "a. Yet the art world unanimously ignores or reviles him. Me included.",
            "author": "Jerry Saltz",
            "cat": "art"
        }, {
            "quote": "Freedom of speech, freedom of the press, and freedom of religion all have a doub" +
                    "le aspect - freedom of thought and freedom of action.",
            "author": "Frank Murphy",
            "cat": "freedom"
        }, {
            "quote": "It's quite hard to have your mom as a teacher - it's like, she's not necessarily" +
                    " a 'real teacher' for me. But she'd always teach me to really hear the music, an" +
                    "d develop my ear, and to try and hear the harmonics of the piano.",
            "author": "Birdy",
            "cat": "mom"
        }, {
            "quote": "You know more of a road by having traveled it than by all the conjectures and de" +
                    "scriptions in the world.",
            "author": "William Hazlitt",
            "cat": "travel"
        }, {
            "quote": "No matter how bad things are, you can at least be happy that you woke up this mo" +
                    "rning.",
            "author": "D. L. Hughley",
            "cat": "morning"
        }, {
            "quote": "My actions constituted pure hacking that resulted in relatively trivial expenses" +
                    " for the companies involved, despite the government's false claims.",
            "author": "Kevin Mitnick",
            "cat": "government"
        }, {
            "quote": "The failure of the Russian Socialist Republic will be the defeat of the proletar" +
                    "iat of the whole world.",
            "author": "Karl Liebknecht",
            "cat": "failure"
        }, {
            "quote": "Remember our proud history of social justice, universal health care, public pens" +
                    "ions and making sure no one is left behind. Let's continue to move forward.",
            "author": "Jack Layton",
            "cat": "health"
        }, {
            "quote": "How are fears born? They are born because of differences in tradition and histor" +
                    "y they are born because of differences in emotional, political and national circ" +
                    "umstances. Because of such differences, people fear they cannot live together.",
            "author": "Ehud Olmert",
            "cat": "fear"
        }, {
            "quote": "The loss of liberty at home is to be charged to the provisions against danger, r" +
                    "eal or imagined, from abroad.",
            "author": "James Madison",
            "cat": "home"
        }, {
            "quote": "Everything that goes up must come down. But there comes a time when not everythi" +
                    "ng that's down can come up.",
            "author": "George Burns",
            "cat": "time"
        }, {
            "quote": "It's definitely true that there are a lot of the devices we used on 'Star Trek,'" +
                    " that came out the imagination of the writers, and the creators that are actuall" +
                    "y in the world today.",
            "author": "LeVar Burton",
            "cat": "imagination"
        }, {
            "quote": "Friendship is an arrangement by which we undertake to exchange small favors for " +
                    "big ones.",
            "author": "Charles de Montesquieu",
            "cat": "friendship"
        }, {
            "quote": "We mistake politics for legislative debate. You can be passionate without being " +
                    "personal.",
            "author": "Richard Dreyfuss",
            "cat": "politics"
        }, {
            "quote": "How does one kill fear, I wonder? How do you shoot a specter through the heart, " +
                    "slash off its spectral head, take it by its spectral throat?",
            "author": "Joseph Conrad",
            "cat": "fear"
        }, {
            "quote": "I would always encourage people of any age not to be so quick to follow other pe" +
                    "ople's truths but to search and follow your own moral code and live by your own " +
                    "integrity, and mostly just be brave.",
            "author": "Jewel",
            "cat": "age"
        }, {
            "quote": "Marriage requires a special talent, like acting. Monogamy requires genius.",
            "author": "Warren Beatty",
            "cat": "marriage"
        }, {
            "quote": "What is an adult? A child blown up by age.",
            "author": "Simone de Beauvoir",
            "cat": "age"
        }, {
            "quote": "Most of these alternative arrangements, so-called, arise out of the ruins of mar" +
                    "riages, not as an improvement of old fashioned marriage.",
            "author": "Christopher Lasch",
            "cat": "marriage"
        }, {
            "quote": "Corporate America cannot afford to remain silent or passive about the downward s" +
                    "piral we are undergoing. It cannot turn a blind eye to how difficult the experie" +
                    "nce of life is for so many of their customers.",
            "author": "Simon Mainwaring",
            "cat": "experience"
        }, {
            "quote": "I've become a less brave traveller since I became a dad, but in the past I was m" +
                    "ore foolhardy than brave.",
            "author": "David Mitchell",
            "cat": "dad"
        }, {
            "quote": "The thing that gave me the most pain in life, psychologically, and it gave me tr" +
                    "emendous pain psychologically, is man's disrespect for nature.",
            "author": "Joni Mitchell",
            "cat": "nature"
        }, {
            "quote": "Breastfeeding is the very best diet I've been on.",
            "author": "Rebecca Romijn",
            "cat": "diet"
        }, {
            "quote": "The Teutons have been singing the swan song ever since they entered the ranks of" +
                    " history. They have always confounded truth with death.",
            "author": "Henry Miller",
            "cat": "death"
        }, {
            "quote": "90 percent of my time is spent on 10 percent of the world.",
            "author": "Colin Powell",
            "cat": "history"
        }, {
            "quote": "When I play live, it's a conversation that we're all having with the song, and t" +
                    "he audience... their response and relationship with the songs is as valid as my " +
                    "relationship with the songs.",
            "author": "Tori Amos",
            "cat": "relationship"
        }, {
            "quote": "I like to smile when its natural. I'm not mad or anything. That's my style.",
            "author": "Jesse McCartney",
            "cat": "smile"
        }, {
            "quote": "The best way out of a difficulty is through it.",
            "author": "Will Rogers",
            "cat": "best"
        }, {
            "quote": "I grew up being the girl who would always tune in to watch famous people talk ab" +
                    "out their careers, how they handled scandals and mega fame. I'm trying to pick u" +
                    "p tips.",
            "author": "Rebecca Black",
            "cat": "famous"
        }, {
            "quote": "I think it goes back to my high school days. In computer class, the first assign" +
                    "ment was to write a program to print the first 100 Fibonacci numbers. Instead, I" +
                    " wrote a program that would steal passwords of students. My teacher gave me an A" +
                    ".",
            "author": "Kevin Mitnick",
            "cat": "teacher"
        }, {
            "quote": "Poetry a criticism of life under the conditions fixed for such a criticism by th" +
                    "e laws of poetic truth and poetic beauty.",
            "author": "Matthew Arnold",
            "cat": "beauty"
        }, {
            "quote": "I'm not saying that there's anything better than mated bliss at its best, but I'" +
                    "m saying that living alone is as good in its own way. But we haven't quite given" +
                    " ourselves permission to recognize that.",
            "author": "Barbara Feldon",
            "cat": "alone"
        }, {
            "quote": "Fear is the mother of morality.",
            "author": "Friedrich Nietzsche",
            "cat": "fear"
        }, {
            "quote": "Everything in life is luck.",
            "author": "Donald Trump",
            "cat": "life"
        }, {
            "quote": "A commercial society whose members are essentially ascetic and indifferent in so" +
                    "cial ritual has to be provided with blueprints and specifications for evoking th" +
                    "e right tone for every occasion.",
            "author": "Marshall McLuhan",
            "cat": "society"
        }, {
            "quote": "A face to lose youth for, to occupy age With the dream of, meet death with.",
            "author": "Robert Browning",
            "cat": "age"
        }, {
            "quote": "Be what you would seem to be - or, if you'd like it put more simply - a house is" +
                    " no home unless it contains food and fire for the mind as well as the body.",
            "author": "Margaret Fuller",
            "cat": "food"
        }, {
            "quote": "Feature-length film comedy is harder to pull off than the episodic sitcom - it d" +
                    "oesn't have the same factory machinery up and running, teams of writers putting " +
                    "familiar characters through permutations - but that doesn't explain the widening" +
                    " quality gap that makes movie humor look like a genetic defective.",
            "author": "James Wolcott",
            "cat": "humor"
        }, {
            "quote": "There is not in nature, a thing that makes man so deformed, so beastly, as doth " +
                    "intemperate anger.",
            "author": "Alan Bleasdale",
            "cat": "anger"
        }, {
            "quote": "People who live in the past generally are afraid to compete in the present. I've" +
                    " got my faults, but living in the past is not one of them. There's no future in " +
                    "it.",
            "author": "Sparky Anderson",
            "cat": "future"
        }, {
            "quote": "The Feminist Me says that a woman's right to her own body should be inviolate at" +
                    " all times, free from fear of peeping paps.",
            "author": "Julie Burchill",
            "cat": "fear"
        }, {
            "quote": "If Greece had gone through a very normal political life, I may have not been in " +
                    "politics. But just the fact that I lived through huge upheavals and very difficu" +
                    "lt struggles and polarization and the barbarism of dictatorships - that made me " +
                    "feel that we had to change this country.",
            "author": "George Papandreou",
            "cat": "politics"
        }, {
            "quote": "There are men so philosophical that they can see humor in their own toothaches. " +
                    "But there has never lived a man so philosophical that he could see the toothache" +
                    " in his own humor.",
            "author": "H. L. Mencken",
            "cat": "humor"
        }, {
            "quote": "There is a bit of a movement as far as younger people in country music. That is " +
                    "cool because people are saying things like, 'I didn't listen to country music un" +
                    "til so-and-so came along.' And I'm like, 'Yeah! Now you know why I love it.'",
            "author": "Hunter Hayes",
            "cat": "cool"
        }, {
            "quote": "Beauty will be convulsive or will not be at all.",
            "author": "Andre Breton",
            "cat": "beauty"
        }, {
            "quote": "Actually, I loved Chucky. It's one of the strangest movies I've ever seen.",
            "author": "Bill Condon",
            "cat": "movies"
        }, {
            "quote": "If there hadn't been women we'd still be squatting in a cave eating raw meat, be" +
                    "cause we made civilization in order to impress our girlfriends.",
            "author": "Orson Welles",
            "cat": "dating"
        }, {
            "quote": "I think I'm too cynical for L.A. My sense of humor doesn't go down well here, wh" +
                    "ich probably affects my love life. I need to have a laugh track following me aro" +
                    "und so people know I'm trying to be funny.",
            "author": "Teddy Thompson",
            "cat": "humor"
        }, {
            "quote": "Have the courage to act instead of react.",
            "author": "Oliver Wendell Holmes",
            "cat": "courage"
        }, {
            "quote": "It's pretty cool that people will pay for something even though they don't have " +
                    "to. It's totally different now to back in the day. Now you're paying for a recor" +
                    "d because you believe in the band. In the future that will be the only time peop" +
                    "le will pay for albums, because there's some kind of connection.",
            "author": "Ezra Koenig",
            "cat": "cool"
        }, {
            "quote": "Language is the armory of the human mind, and at once contains the trophies of i" +
                    "ts past and the weapons of its future conquests.",
            "author": "Samuel Taylor Coleridge",
            "cat": "future"
        }, {
            "quote": "With any group of people in life, sad things happen, and crazy things, and happy" +
                    " things. When you're in the public eye, it's just amplified, that's all.",
            "author": "Margot Kidder",
            "cat": "sad"
        }, {
            "quote": "Of the various forms of government which have prevailed in the world, an heredit" +
                    "ary monarchy seems to present the fairest scope for ridicule.",
            "author": "Edward Gibbon",
            "cat": "government"
        }, {
            "quote": "The beautiful thing about learning is nobody can take it away from you.",
            "author": "B. B. King",
            "cat": "learning"
        }, {
            "quote": "When you're out of sight for as long as I was, there's a funny feeling of betray" +
                    "al that comes over people when they see you again.",
            "author": "Esther Williams",
            "cat": "funny"
        }, {
            "quote": "I was a mixture of being incredibly old for my age and incredibly backwards. I w" +
                    "as born quite old, but then I stopped growing. I lived with my mum and dad till " +
                    "I was 30.",
            "author": "Helena Bonham Carter",
            "cat": "age"
        }, {
            "quote": "A sense is what has the power of receiving into itself the sensible forms of thi" +
                    "ngs without the matter, in the way in which a piece of wax takes on the impress " +
                    "of a signet-ring without the iron or gold.",
            "author": "Aristotle",
            "cat": "power"
        }, {
            "quote": "I'm blessed to have cool roles in these big movies.",
            "author": "Jeremy Renner",
            "cat": "cool"
        }, {
            "quote": "I plays Joe's best friend. I am the only one he has ever been able to trust in h" +
                    "is life, so I help him understand what happened to him when he was younger.",
            "author": "Michelle Trachtenberg",
            "cat": "trust"
        }, {
            "quote": "A strong woman is a woman determined to do something others are determined not b" +
                    "e done.",
            "author": "Marge Piercy",
            "cat": "strength"
        }, {
            "quote": "Beauty is not something you can count on. Usually, when people say you are beaut" +
                    "iful, it is when there is a harmony between the inside and the outside.",
            "author": "Emmanuelle Beart",
            "cat": "beauty"
        }, {
            "quote": "I just think that people take me a little more seriously as a brunette. I don't " +
                    "know if that's just because of a societal preconceived notion that all blondes a" +
                    "re stupid, but it's a different kind of attitude.",
            "author": "Kate Bosworth",
            "cat": "attitude"
        }, {
            "quote": "You can involve yourself in electronics, computers, puzzles... there's a lot of " +
                    "creativity and brain working. There's a lot to model trains that people don't re" +
                    "alize.",
            "author": "Gary Coleman",
            "cat": "computers"
        }, {
            "quote": "It takes both courage and talent to stand up in front of fellow human beings and" +
                    " make them crack a smile, and at the same time keep it clean.",
            "author": "Ray Comfort",
            "cat": "courage"
        }, {
            "quote": "Each relationship nurtures a strength or weakness within you.",
            "author": "Mike Murdock",
            "cat": "relationship"
        }, {
            "quote": "I was always depressed growing up. There wasn't a reason for it, I just was. I w" +
                    "as sad and morose. I cried a lot, I wrote a lot, and I read a lot and that was h" +
                    "ow I dealt with it.",
            "author": "Amanda Hocking",
            "cat": "sad"
        }, {
            "quote": "I try to decorate my imagination as much as I can.",
            "author": "Franz Schubert",
            "cat": "imagination"
        }, {
            "quote": "Most of us start out with a positive attitude and a plan to do our best.",
            "author": "Marilu Henner",
            "cat": "attitude"
        }, {
            "quote": "Diligence is the mother of good luck.",
            "author": "Benjamin Franklin",
            "cat": "good"
        }, {
            "quote": "My mother's family were full-on Irish Catholics - faith in an elaborate old fash" +
                    "ioned, highly conservative and madly baroque style. I sort of fell out of the tr" +
                    "ibe over women's rights and social justice issues when I was just 13 years old.",
            "author": "Geraldine Brooks",
            "cat": "faith"
        }, {
            "quote": "I think all the knowledge and all the travels that I've done, I'm going to do a " +
                    "lot of great work in the future.",
            "author": "Chris Tucker",
            "cat": "knowledge"
        }, {
            "quote": "I think if they put a laugh track on 'Intervention,' it would be funny.",
            "author": "Zach Galifianakis",
            "cat": "funny"
        }, {
            "quote": "Whoever marries the spirit of this age will find himself a widower in the next.",
            "author": "William Ralph Inge",
            "cat": "age"
        }
    ]
    const randomElement = (arr) => arr[Math.floor(arr.length * Math.random())]
    return randomElement(quotes)
}