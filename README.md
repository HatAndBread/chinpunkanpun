# A random gibberish generator

Why? Database seeding, language games, just for fun? Bug reports and contributions very welcome.

# Example

```
npm install gobbledygook
```

In your code...
```javascript
const g = require('gobbledygook');

for(let i = 0; i < 100; i++){
  console.log(g.sentence());
}
```

Output...
```
Why do boats win cellos?
Matthew McConaughey insists on tuna in Zambia.
Will you teach the smile that believed Olivia's photos?
Elisabeth Bergner's drawings will disappear if he doesn't bless the king in person.
Why is Edmund Husserl standing in El Salvador?
There are sore rooms in Mumbai.
Edith Evans' opuses will wander if he doesn't accept an ambulance by my side.
Their mother rigidly ran at the end of the day.
Her depressed magician scolded the cigarette.
Would you mind paralyzing Lucy Westenra's basket while I work on an analysis?
Who wanted Gilbert Blythe's hospitality?
Her sister overconfidently farted at night.
Who will healthily want their cousin?
What workers is Sir Thomas Bertram honouring in all honesty?
Why is Linda Hunt exploding in Paraguay?
He wants a life that catches diagnoses in Chicago.
Who asked about Sam Jaffe's racism?
I am going to trust in the excited regret.
Why did Gary Sinise judge Dennis' pros?
Why is her dirt loving the cow with Joseph Stalin?
Their grandson fully ate while sheep unloaded cities.
Our mouth cried when Dexter Gordon went to New Zealand.
Who will joyfully consult their mother?
They are thinking about eager people.
Who selected Cher's lightning?
Who honoured my black jobs?
There is a rose next to Richard Harris' wife.
I contradicted wild universities in Monaco.
May I specify their shopping with a nucleus?
Who forgot about his poised prisoners?
What lawyer is Lynn Carlin weeping for at home?
Who escaped from Tyrion Lannister's timber?
Who dragged your pollution?
Why is her danger irritating the painting with Robb Stark?
Who encouraged my fun?
She gathered the emerging king.
Bilbo Baggins' syllabuses will arrive if he doesn't melt the farm on the radio.
We won't answer musicians until Gary agrees.
Chairs will break barracks if Philip's human swims.
Is their blue-eyed morning vacating battles?
Is their embarrassed boss loading cows?
Why does their gold blame appendixes if our dinosaur tampers with the intellectual?
Her uncle faithfully responded to while morons irritated families.
There is the battle under Stephen Rea's theory.
Would you build his life on top of the farm?
Richard Farnsworth manufactures stimuli in Belo Horizonte.
Tattoos like falling.
Will you win a biscuit that watched Meera Syal's addenda?
Analysts are sympathetically upgrading bloody cigars.
She wants a house that helps sandwiches in Xi'an.
Why do philosophers maintain sopranos?
Who fascinated my wisdom?
Traders will aggravate lives if Dr Alexandre Manette's career screams.
The color establishes her lover near the calculation while fungi occur.
Why do floors furnish answers?
I am going to elaborate on an insect in the nude.
Why is his mail tampering with a fungus with Lorraine Bracco?
Is their angry grandson chopping up zoo keepers?
Is my innocent grandfather suffering from strangers?
A fruit smokes when weaknesses crawl.
Rocks are easily numbering dead errors.
Who comforted our pride?
Who will kiss the injection that Samantha videotaped?
Your exercise collected the town next to the morning.
Who will nearly key their grandfather?
Why did Kelly bend Joseph Stalin's nebulas?
I am going to slap the excited earthquake.
Can you concentrate on your shiny idea rarely?
Your father wearily vomited at least.
What did Carol Channing kill?
Who switched his charming forests?
What did Vito Corleone eat up?
There is a poem next to Bryan's strawberry.
Why did Thomasina Tittlemouse forgive Eric's strata?
Axes will wrack viruses if Don Cheadle's video jogs.
Why is his quartz grabbing the painter with Harriet Smith?
Thieves are sympathetically acquiring worrisome morons.
Will you honour the box that untied Carole Lombard's careers?
Their grandmother wildly remained while telephones raised analysts.
Do you knock while their trainer forgives teeth in Serbia?
A circle smells baggage.
There is the thief on Jonah Hill's building.
Why do vegetables accept stars?
Your lawyer offensively fell on top of a mountain.
A chicken switches scenery.
Their antenna stood when Dorothy went to Singapore.
There are anxious husbands in Togo.
How do socks burn?
There are prickly circles in Luxembourg.
I fascinated blushing airports in Honduras.
Can you aggravate her elated assumption unbearably?
Their aunt unethically walked at noon.
Quasimodo's theories will smile if she doesn't vacate the wish for luck.
They are dunking tired mornings.
Why does her safety underestimate cigarettes if my pie marries a drug?
Will you entertain the employer that layed Princess Lise Bolkonskaya's dots?
Why did Karen believe Norma Aleandro's spices?
You are sternly intimidating him.
The nation sails away when strawberries fall.
I am going to imitate the frantic exercise.
```

# Get individual words

```javascript
g.getWord(g.adjective);
// returns 'bewildered'

g.getWord(g.singularPronounBe);
// returns 'she is'

g.getWord(g.simplePluralIntransitive);
// returns 'sneeze'
```

Available word types
```
  adjective
  person
  place
  simplePluralIntransitive
  simplePluralTransitive
  intransitiveContinuous
  simpleSingularIntransitive
  simpleSingularTransitive
  pastTransitive
  pastIntransitive
  pluralNoun
  singularNoun
  uncountableNoun
  possessivePronoun
  transitiveContinuous
  relation
  adverb
  pluralPronoun
  pluralPronounBe
  pluralPronounObject
  singularPronoun
  singularPronounBe
  singularPronounObject
  personPossessive
  positionPrep
  prepPhrase
```

# Add sentence structures

```javascript
g.addStructure(
  [
    'why does',
    g.possessivePronoun,
    g.uncountableNoun,
    g.simplePluralTransitive,
    g.pluralNoun,
    'if',
    g.possessivePronoun,
    g.singularNoun,
    g.simpleSingularTransitive,
    g.singularNoun
  ]
);
```



