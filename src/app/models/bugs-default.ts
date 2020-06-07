import { MONTH } from './Animal.model';
import { Bug, BUG_LOCATION } from './Animal.model';

export const northBugs: Bug[] = [
    {
        name: 'Hermit Crab',
        picture: '../../assets/img/bugs/hermitcrab.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March,MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        available_south:  [MONTH.January, MONTH.February, MONTH.March,MONTH.April, MONTH.May, MONTH.June,
            MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 1000,
        location: BUG_LOCATION.Beach,
        time_start: {
            hours: 19,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        },
        preview_notes: 'Disguised as shells',
        notes: 'The Hermit Crab is a master of disguise. It will be on the shoreline disguised as a shell. '+
        'When approaching the Hermit Crab, it will spook and run away.',
        b_fact: 'The Hermit Crab is not an insect... Though it most certainly resembles one! Blech! '+
        'It looks much like a spider—what with its creepy eyes and crawly legs—but is, in fact, a crustacean. '+
        'As such, the Hermit Crab has 10 legs and also wears a shell. But it doesn\'t grow this shell itself. '+
        'It slips its soft body into shells left behind by snails, you see, and moves into ever-larger ones as it grows. '+
        'Talk about a strange way to make a home.'
    },
    {
        name: 'Yellow Butterfly',
        picture: '../../assets/img/bugs/yellowbutterfly.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.September, MONTH.October],
        available_south: [MONTH.March, MONTH.April, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 160,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 4,
            minutes: 0
        },
        time_end: {
            hours: 19,
            minutes: 0
        },
        b_fact: 'Allow me to enlighten you... The Yellow Butterfly is named for its yellow wings. Need I say more? '+
        'If I must, then allow me to note that the female Yellow Butterfly can lay up to 600 eggs at a time! Bleech! '+
        'And their creepy crawly caterpillars just love to chomp on clover plants. A recipe for disaster, I say. '+
        'Just imagine reaching for a four-leaf clover, only to touch a larva instead! Yuck! The worst of luck!'
    },
    {
        name: 'Tiger Butterfly',
        picture: '../../assets/img/bugs/tigerbutterfly.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 240,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 4,
            minutes: 0
        },
        time_end: {
            hours: 19,
            minutes: 0
        },
        b_fact: 'Tiger Butterflies are known for their majestic wings, which many consider quite beautiful. '+
        'Truth be told, I find them monstrous! Those strange striped patterns... They give this owl the goose bumps! '+
        'And while you may imagine young Tiger Butterfly larvae to look like lovely green caterpillars... it\'s not so! '+
        'Why, when Tiger Butterflies are but babes, they\'re covered in unsightly white, brown, and black spots. '+
        'In this way, they camouflage themselves as... as... bird droppings! Putrid pests, indeed!'
    },
    {
        name: 'Common Bluebottle',
        picture: '../../assets/img/bugs/commonbluebottle.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 300,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 4,
            minutes: 0
        },
        time_end: {
            hours: 19,
            minutes: 0
        },
        b_fact: 'The Common Bluebottle is a type of swallowtail butterfly with a bright blue line running down its wings. '+
        'They fly quite nimbly, it seems, and are thus quite difficult to catch. '+
        'But seeing how they\'ve been known to slurp nutrients from MUD puddles... '+
        'I simply CAN\'T imagine wanting to catch one myself. What awful breath!'
    },
    {
        name: 'Paper Kite Butterfly',
        picture: '../../assets/img/bugs/paperkitebutterfly.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH. April, MONTH.May, MONTH.June,
            MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH. April, MONTH.May, MONTH.June,
            MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 1000,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 19,
            minutes: 0
        }
    },
    {
        name: 'Great Purple Emperor',
        picture: '../../assets/img/bugs/greatpurpleemperor.png',
        available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 3000,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 4,
            minutes: 0
        },
        time_end: {
            hours: 19,
            minutes: 0
        },
        b_fact: 'The Great Purple Emperor lives high in the treetops and is renowned for its pretty purple-hued wings. '+
        'Its impressive bird-like wingspan and elusive nature have made it a favorite among butterfly aficionados. '+
        'But truth be told, the so-called Great Purple Emperor has some not-so-great personal peculiarities. '+
        'For one... it has two horrid HORNS upon its head when it is in its caterpillar form. '+
        'For two... it has been known to dine on feces and animal carcasses! Hoo! That\'s why I call it the Emperor of EWWW!'
    },
    {
        name: 'Monarch Butterfly',
        picture: '../../assets/img/bugs/monarchbutterfly.png',
        available_month: [MONTH.September, MONTH.October, MONTH.November],
        available_south: [MONTH.March, MONTH.April, MONTH.May],
        caught: false,
        in_museum: false,
        price: 140,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 4,
            minutes: 0
        },
        time_end: {
            hours: 17,
            minutes: 0
        },
        b_fact: 'Did you know the Monarch Butterfly migrates south for the winter and returns north for the summer? '+
        'Indeed, these horrid orange beasties do not tolerate the cold and travel 3,000 miles to escape the winter. '+
        'During the journey, they cluster together in trees by the thousands just to stay warm. Imagine! '+
        'Hordes of the foul flittering fiends huddled together in one place! If only they\'d put on tiny coats instead.'
    },
    {
        name: 'Emperor Butterfly',
        picture: '../../assets/img/bugs/emperorbutterfly.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.June, MONTH.July, MONTH.August,
        MONTH.September, MONTH.December],
        available_south:  [MONTH.January, MONTH.February, MONTH.March, MONTH.June, MONTH.July, MONTH.August,
        MONTH.September, MONTH.December],
        caught: false,
        in_museum: false,
        price: 4000,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        },
        b_fact: 'The Emperor Butterfly is called the jewel of the forest. But its vivid blue hue... '+
        'Eww, let me tell you! The color does not come from a dye, but rather from light reflecting off translucent scales. '+
        'Yes, butterfly wings are covered in tiny scales! SCALES! Butterfly? Bah! More like snake of the sky!'
    },
    {
        name: 'Agrias Butterfly',
        picture: '../../assets/img/bugs/agriasbutterfly.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
        available_south:[MONTH.January, MONTH.February, MONTH.March, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 3000,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 17,
            minutes: 0
        },
        b_fact: 'Some say the Agrias Butterfly is one of the most beautiful butterflies in the world. ' +
        'Bah, I say! BAH! They may have brightly colored wings, but the way they flutter and flitter... SO FOUL! ' +
        'In fact, the Agrias Butterfly flies so fast, it is quite a feat to catch one. ' +
        'I suppose I should congratulate you on your good fortune... But catching any bug seems a misfortune to me.'
    },
    {
        name: 'Rajah Brooke\'s Birdwing',
        picture: '../../assets/img/bugs/rajahbrookesbirdwing.png',
        available_month: [MONTH.January, MONTH.February, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
        MONTH.August, MONTH.September, MONTH.December],
        available_south:[MONTH.January, MONTH.February, MONTH.March, MONTH.June, MONTH.July,
        MONTH.August, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 2500,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 17,
            minutes: 0
        },
        b_fact: 'Did you know that the repulsive Rajah Brooke\'s Birdwing loves to luxuriate in hot-springs water? '+
        'It\'s true! Hoo! The males gather in groups to sip the moisture while the females hide in jungle trees. '+
        'And though they dress to impress in red and green, these fluttering fiends are not just stylish... '+
        'They\'re also quite malicious! Their little larvae pack a poisonous punch that\'s supposed to protect them from predators... '+
        'But I suspect more diabolical designs.'
    },
    {
        name: 'Queen Alexandra\'s Birdwing',
        picture: '../../assets/img/bugs/queenalexandrasbirdwing.png',
        available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
        available_south:[MONTH.January, MONTH.February, MONTH.March, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 4000,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 16,
            minutes: 0
        },
        b_fact: 'Hoo! The horror! This behemoth butterfly may be called a Queen Alexandra\'s Birdwing... '+
        'But I call it the Queen of My Nightmares! It is huge! Indeed, the world\'s hugest. '+
        'No butterfly can best its foot-long wingspan. The larvae alone grow to more than 4 inches. '+
        'As if that weren\'t appalling enough... they\'re poisonous! Murderous monsters, indeed!'
    },
    {
        name: 'Madagascan Sunset Moth',
        picture: '../../assets/img/bugs/madagascansunsetmoth.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 2500,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 16,
            minutes: 0
        },
        b_fact: 'The Madagascan Sunset Moth is said to be the most beautiful moth in the world... '+
        'a sentiment even I can\'t deny. '+
        'While most moths are nocturnal, this one flutters about during the day, making good use of the light. '+
        'That is, when the daylight reflects off its wings, a kaleidoscope of colors are revealed! Oh! '+
        'Eh... too bad it has such startling red feet as a caterpillar. I might have found it almost tolerable otherwise. '+
        'Almost, but not quite.'
    },
    {
        name: 'Honeybee',
        picture: '../../assets/img/bugs/honeybee.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July],
        available_south: [MONTH.January, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 200,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 17,
            minutes: 0
        },
        b_fact: 'Did you know it takes a team of Honeybees working together to transform flower nectar into honey? '+
        'Indeed, forager bees suck nectar from flowers into their "honey stomachs" and then fly it to the hive. '+
        'Hive bees then chew the substance and spit it into the honeycomb, fluttering their wings to dry it out. '+
        'Yes, you could say honey is a tasty tribute to the hard work of the humble Honeybee. Oh! Oh my!'+
        'You mustn\'t confuse my lengthy description for admiration! '+
        'At the end of the day, Honeybees are still insects, and thus still ghastly! A wee bit ghastly than most, I admit.'
    },
    {
        name: 'Red Dragonfly',
        picture: '../../assets/img/bugs/reddragonfly.png',
        available_month: [MONTH.September, MONTH.October],
        available_south: [MONTH.February, MONTH.March],
        caught: false,
        in_museum: false,
        price: 180,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 19,
            minutes: 0
        },
        b_fact: 'I won\'t deny that the wretched Red Dragonfly is an elegant aeronaut. '+
        'It manipulates its four wings quite uniquely so it can hover and maneuver through the air with ease. '+
        'But the veins on its wings! What ghastly things! One can\'t help but gasp at the sight of them... '+
        'Appalling aerodynamics, indeed!'
    },
    {
        name: 'Darner Dragonfly',
        picture: '../../assets/img/bugs/darnerdragonfly.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, 
        MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 230,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 17,
            minutes: 0
        },
        b_fact: 'The Darner Dragonfly is a very fast dragonfly, flying at speeds up to 40 miles per hour! '+
        'They all have a distinctive green hue, but the males have blue underbellies while females have yellow ones. '+
        'It all sounds pleasant enough, no? Well, did you know their young eat tadpoles...and even some small fish! '+
        'Worse, these creepy carnivores will eat each other in a pinch! Grotesque does not describe it...'
    },
    {
        name: 'Banded Dragonfly',
        picture: '../../assets/img/bugs/bandeddragonfly.png',
        available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
        available_south: [ MONTH.January, MONTH.February, MONTH.March, MONTH.April,
        MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 4500,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 17,
            minutes: 0
        },
        b_fact: 'The Banded Dragonfly is known for its black-and-yellow-striped body, as well as for its piercing green eyes. '+
        'And it is those very eyes that help make dragonflies master hunters, you see. '+
        'Alas, when one looks at me, I can\'t help but feel it is sizing me up for a meal! Hoot! The horrors! Look away, fiend!'
    },
    {
        name: 'Damselfly',
        picture: '../../assets/img/bugs/damselfly.png',
        available_month: [MONTH.January, MONTH.February, MONTH.November, MONTH.December],
        available_south: [MONTH.May, MONTH.June, MONTH.July, MONTH.August],
        caught: false,
        in_museum: false,
        price: 500,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        }
    },
    {
        name: 'Firefly',
        picture: '../../assets/img/bugs/firefly.png',
        available_month: [MONTH.June],
        available_south: [MONTH.December],
        caught: false,
        in_museum: false,
        price: 300,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 19,
            minutes: 0
        },
        time_end: {
            hours: 4,
            minutes: 0
        }
    },
    {
        name: 'Common Butterfly',
        picture: '../../assets/img/bugs/commonbutterfly.png',
        available_month: [MONTH.January, MONTH.February,MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        available_south: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
        MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 160,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 4,
            minutes: 0
        },
        time_end: {
            hours: 19,
            minutes: 0
        },
        b_fact: 'The Common Butterfly would have you believe it is but a beautiful friend flitting prettily about the flowers. '+
        'Bah, I say! They may seem innocent things with their pretty white wings, but they hide a dark side! '+
        'The Common Butterfly caterpillar is called a cabbage worm, you see, and it\'s a most voracious pest. '+
        'The ravenous beasts chew through cabbage, broccoli, kale and the like with a devastating gusto. '+
        'And my feathers! Their green coloring is truly GROSS! A hoo-rrific hue, I say.'
    },
    {
        name: 'Mosquito',
        picture: '../../assets/img/bugs/mosquito.png',
        available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
        caught: false,
        in_museum: false,
        price: 130,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 4,
            minutes: 0
        },
        notes: 'You can hear the Mosquito\'s high=pitched buzz when it is flying nearby. If it bites you, you will stop everything to '+
        'scratch immediately. This means that if you are fishing, you will pull your line out of the water to scratch the Mosquito bite.'
    },
    {
        name: 'Peacock Butterfly',
        picture: '../../assets/img/bugs/peacockbutterfly.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June],
        available_south: [MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 2500,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 4,
            minutes: 0
        },
        time_end: {
            hours: 19,
            minutes: 0
        },
        preview_notes: 'Near hybrid flowers',
        notes: 'The Peacock Butterfly can be found flying near hybrid flowers.',
        b_fact: 'Pretty as a peacock? Bah, I say! The wings of the Peacock Butterfly may have a pattern similar to that of the beautiful bird... '+
        'But its forewings are also often covered in a dark, velvety hair! You heard that right! HAIRY wings! A hair-raising revelation indeed!'
    },
    {
        name: 'Moth',
        picture: '../../assets/img/bugs/moth.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 130,
        location: BUG_LOCATION.Flying,
        time_start: {
            hours: 19,
            minutes: 0
        },
        time_end: {
            hours: 4,
            minutes: 0
        },
        preview_notes: 'Near lights',
        notes: 'The Moth can be found flying near lights that are on.',
        b_fact: 'Many think the Moth is strictly a nocturnal creature. Alas, no! '+
        'These frightful fluttering beasts have been known to haunt the daylight and twilight hours too. '+
        'Thus, there is no time of day one might escape the Moth trait I dislike most of all--those feathery antennae! '+
        'The mere thought of them gives my feathers goosebumps. And I\'m no goose.'
    },
    {
        name: 'Pill Bug',
        picture: '../../assets/img/bugs/pillbug.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        available_south: [MONTH.March, MONTH.April, MONTH.May, MONTH.June,MONTH.July, MONTH.August,
        MONTH.September, MONTH.October, MONTH.November, MONTH.December], 
        caught: false,
        in_museum: false,
        price: 250,
        location: BUG_LOCATION.Rocks,
        time_start: {
            hours: 23,
            minutes: 0
        },
        time_end: {
            hours: 16,
            minutes: 0
        },
        preview_notes: 'Hit rocks',
        notes: 'When hitting rocks, the Pill Bug can pop out and scurry away.',
        b_fact: 'Blech, the Pill Bug! Children delight at the way these beasts roll into balls when poked... '+
        'But the appeal is utterly lost on me. One look at their leggy undersides... Hoo! Ewww! How they wriggle! '+
        'Young Pill Bugs shed their exo-skeletons as they grow, and in doing so, sprout another pair of legs. '+
        'As if 12 appendages weren\'t alarming enough! Yuck, I say. Yuck!'
    },
    {
        name: 'Centipede',
        picture: '../../assets/img/bugs/centipede.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        available_south: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
        MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 300,
        location: BUG_LOCATION.Rocks,
        time_start: {
            hours: 16,
            minutes: 0
        },
        time_end: {
            hours: 23,
            minutes: 0
        },
        preview_notes: 'Hit rocks',
        notes: 'When hitting rocks, the Centipede can pop out and scurry away.',
        b_fact: 'The Centipede\'s name means \'100 legs.\' But I tell you now, that\'s a lie! '+
        'These ugly bugs can have as few as 15 pairs of legs... or as many as 171. '+
        'But because of how their bodies are segmented, they never have exactly 100! Hoo! '+
        'It\'s true! You know what else is true? Centipedes are carnivorous, aggressive, and venomous! '+
        'And their bite is quite painful too! Hoo-rrible things, I say'
    },
    {
        name: 'Wharf Roach',
        picture: '../../assets/img/bugs/wharfroach.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 200,
        location: BUG_LOCATION.Beach_Rocks,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        b_fact: 'The Wharf Roach is an omnivore, which is merely a polite way of saying it will eat almost anything. '+
        'This skittering scavenger and its uncouth appetite help keep beaches clean, it\'s said. '+
        'But I dare say, their long antenna and bulging eyes turn MY stomach. Unappetizing indeed...'
    },
    {
        name: 'Mantis',
        picture: '../../assets/img/bugs/mantis.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
        MONTH.September, MONTH.October, MONTH.November],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May,
        MONTH.September, MONTH.October, MONTH.November, MONTH.December], 
        caught: false,
        in_museum: false,
        price: 430,
        location: BUG_LOCATION.Flowers,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 17,
            minutes: 0
        },
        b_fact: 'Hoo! Don\'t let the Mantis\'s angelic pose fool you... for it is truly monstrous. '+
        'The Mantis is known for its large size and tremendous strength... and for sickle-like arms that pack a punch. '+
        'And though they tend to eat bugs and spiders... Mantises have been known to dine on small animals too! '+
        'And those eerie eyes! Oh my! Did you know it has five of them! Two big ones and three small!'
    },
    {
        name: 'Man-Faced Stink Bug',
        picture: '../../assets/img/bugs/manfacedstinkbug.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
        MONTH.September, MONTH.October],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April,
        MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 1000,
        location: BUG_LOCATION.Flowers,
        time_start: {
            hours: 19,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        },
        b_fact: 'Never mind this Stink Bug\'s smell. What you have here is a bug... with a FACE... on its BACK!! '+
        'Wot-wot! Simply put, the Man-Faced Stink Bug have markings on its shell that resemble a human face. '+
        'Once you noticice this face, you cannot UN-notice it. Indeeed, this face might haunt you forever. '+
        'At least the face will distract you from the stink.'
    },
    {
        name: 'Stinkbug',
        picture: '../../assets/img/bugs/stinkbug.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
        MONTH.September, MONTH.October],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April,
        MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 120,
        location: BUG_LOCATION.Flowers,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        b_fact: 'I daresay the name says it all... Stinkbugs are known for their stench. Hoo! Peeyew! '+
        'As it happens, these crop-eating pests use straw-like mouths to pierce plants and drink the juices. '+
        'And when threatened, they use a smelly chemical in their belly to release their odious odor! '+
        'Hoo! How DO they live with themselves?'
    },
    {
        name: 'Orchid Mantis',
        picture: '../../assets/img/bugs/orchidmantis.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
        MONTH.September, MONTH.October, MONTH.November],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May,
        MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 2400,
        location: BUG_LOCATION.Flowers,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 17,
            minutes: 0
        },
        preview_notes: 'White flowers',
        notes: 'The Orchid Mantis will only perch on white flowers.',
        b_fact: 'The Orchid Mantis is a bug whose brilliant colors and petal-shaped limbs give it the look of a flower. '+
        'This masterful mimicry allows it to hide from predators in among the orchids. But oh this fraudulent flower! '+
        'It lures other insects in to drink its nectar... And makes a meal of them instead! Imagine! '+
        'To behold a beautiful bud... only to discover it\'s a bug instead! A repulsive revelation indeed!'
    },
    {
        name: 'Diving Beetle',
        picture: '../../assets/img/bugs/divingbeetle.png',
        available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 800,
        location: BUG_LOCATION.Ponds_or_River,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 19,
            minutes: 0
        },
        b_fact: 'Ah, the dastardly Diving Beetle! Famous for its distinctive round shape... and its voracious appetite. '+
        'This powerful predator uses thick back legs covered in hairs to paddle after its prey. '+
        'And it uses suction cups on its front legs to grip its quarry for good. My own legs have gone weak thinking about it...'
    },
    {
        name: 'Giant Water Bug',
        picture: '../../assets/img/bugs/giantwaterbug.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 2000,
        location: BUG_LOCATION.Ponds_or_River,
        time_start: {
            hours: 19,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        },
        b_fact: 'How to put this gently? Ah yes... BEWARE the Giant Water Bug! '+
        'I tell you, this vicious predator has been known to attack fish, frogs, and even snakes! '+
        'SNAKES! Truth be told, no one is safe! Its nickname is \'the toe-biter,\' for goodness sakes! '+
        'Now, one final fact before I faint... The gruesome bug uses its nose... '+
        'to inject its prey... with digestive juices. Hoo... Must stop thinking about... the unthinkable.'
    },
    {
        name: 'Ladybug',
        picture: '../../assets/img/bugs/ladybug.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.October],
        available_south: [MONTH.April, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 200,
        location: BUG_LOCATION.Flowers,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 17,
            minutes: 0
        },
        b_fact: 'Yes. Yes. Ladybugs are quite beloved thanks to their tiny round shape and adorable spots. '+
        'To that I say BAH! The fact of the matter is, some have stripes instead of spots. And SOME have no markings at all! '+
        'No, I shall never understand why it is said that when a Ladybug lands on you.. you\'ll have good luck. '+
        'I shall only have a fainting spell.'
    },
    {
        name: 'Tiger Beetle',
        picture: '../../assets/img/bugs/tigerbeetle.png',
        available_month: [MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
        MONTH.September, MONTH.October],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.August,
        MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 1500,
        location: BUG_LOCATION.Ground,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        b_fact: 'The Tiger Beetle is extremely fleet of foot, though it runs in a rather peculiar way. '+
        'That is, it sprints, then stops, then sprints again... using these speedy maneuvers to run down its prey. '+
        'You see, the Tiger Beetle- like a real tiger-is a powerful predator. '+
        'The mere thought of it giving chase gives me the willies. Tigers are terrifying at any size.'
    },
    {
        name: 'Jewel Beetle',
        picture: '../../assets/img/bugs/jewelbeetle.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 2400,
        location: BUG_LOCATION.Stumps,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        b_fact: 'The green shimmer of the Jewel Beetle\'s wings is nothing short of nauseating... yes? '+
        'No? Well, so says you. Though... Jewel Beetles were once prized by collectors who turned their iridescent wings into pretty jewelry. '+
        'Why anyone would want to wear bug parts on their body is beyond me. Fashion foul indeed.'
    },
    {
        name: 'Violin Beetle',
        picture: '../../assets/img/bugs/violinbeetle.png',
        available_month: [MONTH.May, MONTH.June, MONTH.September, MONTH.October, MONTH.November],
        available_south:[MONTH.March, MONTH.April, MONTH.May, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 450,
        location: BUG_LOCATION.Stumps,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        b_fact: 'The Violin Beetle gets its name from its shape. That is, SOME think it resembles the stringed instrument. '+
        'If you ask me, this is an insult to violins! '+
        'With its flat body and small head, the Violin Beetle looks like nothing but a repulsive bug, plain and simple. '+
        'In fact it is so repulsive, it oozes a foul liquid when frightened! Ugh! This insect strikes a sour note indeed.'
    },
    {
        name: 'Citrus Long-Horned Beetle',
        picture: '../../assets/img/bugs/citruslonghornedbeetle.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        available_south:[MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 350,
        location: BUG_LOCATION.Stumps,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        b_fact: 'The Citrus Long-Horned Beetle is a putrid pest and a grave threat to trees. Hoo! '+
        'It\'s true! Adults possess powerful jaws and use them to chomp through hardwood and plant fibers with ease. '+
        'The little larvae are no better, boring bullet-like holes into innocent trees with gusto--citrus trees especially. '+
        'Voracious and vile, indeed!'
    },
    {
        name: 'Rosalia Batesi Beetle',
        picture: '../../assets/img/bugs/rosaliabatesibeetle.png',
        available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 3000,
        location: BUG_LOCATION.Stumps,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        b_fact: 'The Rosalia Batesi Beetle is a type of longhorn beetle, so named for the long antenna upon its head. '+
        'But did you know that longhorn beetles often grow antenna LONGER than their very own bodies, wot wot? '+
        'As if this weren\'t odious enough, look closely and you will find these antenna... are covered in tufts of hair! '+
        'Best not look closely, I say'
    },
    {
        name: 'Blue Weevil Beetle',
        picture: '../../assets/img/bugs/blueweevilbeetle.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 800,
        location: BUG_LOCATION.Coco_Tree,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        b_fact:'Yes, yes. The Blue Weevil Beetle does come in beautiful shades of blue. '+
        'The colors are so bright, some say it looks like a living jewel. '+
        'But I say it looks like a weevil... and weevil rhymes with EVIL. Draw your own conclusions from there. Hoot! '+
        'I certainly have!'
    },
    {
        name: 'Dung Beetle',
        picture: '../../assets/img/bugs/dungbeetle.png',
        available_month: [MONTH.January, MONTH.February, MONTH.December],
        available_south: [MONTH.June, MONTH.July, MONTH.August],
        caught: false,
        in_museum: false,
        price: 3000,
        location: BUG_LOCATION.Ground,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        notes: 'With no dung to roll on this getaway island, the Dung Beetle has adapted and started to roll snowballs.'
    },
    {
        name: 'Earth-Boring Dung Beetle',
        picture: '../../assets/img/bugs/earthboringdungbeetle.png',
        available_month: [MONTH.July, MONTH.August, MONTH.September],
        available_south: [MONTH.January, MONTH.February, MONTH.March],
        caught: false,
        in_museum: false,
        price: 300,
        location: BUG_LOCATION.Ground,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        b_fact: 'Earth-Boring Dung Beetles are considered quite handsome by some, thanks to their metallic luster. '+
        'In fact, some even think them to be good omens and bringers of favorable fortune. '+
        'But I must protest! These field- ravaging pests love to burrow under piles of dung and lay their eggs. '+
        'They raise their young under DUNG! Need I say more? Ick. I think not.'
    },
    {
        name: 'Scarab Beetle',
        picture: '../../assets/img/bugs/scarabbeetle.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 10000,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 23,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        }
    },
    {
        name: 'Drone Beetle',
        picture: '../../assets/img/bugs/dronebeetle.png',
        available_month: [MONTH.June, MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February, MONTH.December],
        caught: false,
        in_museum: false,
        price: 200,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        b_fact: 'I must say, the Drone Beetle is like that boorish acquaintance who is much too loud for polite company. '+
        'That is, it is a large bug with a square head and is so named for the droning noise it makes when it flies. '+
        'Furthermore, it has hooks on its feet that help it to cling tightly to trees. HOOK FEET... How gauche!'
    },
    {
        name: 'Goliath Beetle',
        picture: '../../assets/img/bugs/goliathbeetle.png',
        available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
        caught: false,
        in_museum: false,
        price: 8000,
        location: BUG_LOCATION.Coco_Tree,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        }
    },
    {
        name: 'Saw Stag',
        picture: '../../assets/img/bugs/sawstag.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 2000,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        }
    },
    {
        name: 'Miyama Stag',
        picture: '../../assets/img/bugs/miyamastag.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 1000,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        }
    },
    {
        name: 'Giant Stag',
        picture: '../../assets/img/bugs/giantstag.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 10000,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 23,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        }
    },
    {
        name: 'Rainbow Stag',
        picture: '../../assets/img/bugs/rainbowstag.png',
        available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
        caught: false,
        in_museum: false,
        price: 6000,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 19,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        }
    },
    {
        name: 'Cyclommatus Stag',
        picture: '../../assets/img/bugs/cyclommatusstag.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February], 
        caught: false,
        in_museum: false,
        price: 8000,
        location: BUG_LOCATION.Coco_Tree,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        }
    },
    {
        name: 'Golden Stag',
        picture: '../../assets/img/bugs/goldenstag.png',
        available_month: [MONTH.July, MONTH.August],
        available_south:  [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 12000,
        location: BUG_LOCATION.Coco_Tree,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        }
    },
    {
        name: 'Giraffe Stag',
        picture: '../../assets/img/bugs/giraffestag.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 12000,
        location: BUG_LOCATION.Coco_Tree,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        },
        b_fact: 'The Giraffe Stag Beetle is a bug of preposterous proportions. '+
        'Not only is its body rather large, it has two long, jagged jaws that can put it over five inches in size! '+
        'The Giraffe Stag Beetle\'s long jaws have been compared to the long neck of the giraffe... hence the name. '+
        'But I say such comparisons are a stretch. Giraffe necks are NOT lined with spikes! If I were a giraffe, I would protest.'
    },
    {
        name: 'Horned Dynastid',
        picture: '../../assets/img/bugs/horneddynastid.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 1350,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        }
    },
    {
        name: 'Horned Atlas',
        picture: '../../assets/img/bugs/hornedatlas.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 8000,
        location: BUG_LOCATION.Coco_Tree,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        }
    },
    {
        name: 'Horned Elephant',
        picture: '../../assets/img/bugs/hornedelephant.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 8000,
        location: BUG_LOCATION.Coco_Tree,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        }
    },
    {
        name: 'Horned Hercules',
        picture: '../../assets/img/bugs/hornedhercules.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 12000,
        location: BUG_LOCATION.Coco_Tree,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        }
    },
    {
        name: 'Walking Stick - Morning',
        picture: '../../assets/img/bugs/walkingstick.png',
        available_month: [MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May],
        caught: false,
        in_museum: false,
        price: 600,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 4,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        },
        b_fact: 'The Walking Stick looks just like a twig, does it not? Hoo! '+
        'It even has knots like a real twig would! These bashful bugs mimic plants in this way to hide from predators. '+
        'A noble goal, you might say. But though the deceptive wretches fool some, they do not fool me! '+
        'I see these bugs for what they are... Monsters, plain and simple! I say, did you know that Walking Sticks can grow to two feet long?! '+
        'Imagine running into one! Surely I would faint.'
    },
    {
        name: 'Walking Stick - Night',
        picture: '../../assets/img/bugs/walkingstick.png',
        available_month: [MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May],
        caught: false,
        in_museum: false,
        price: 600,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 19,
            minutes: 0
        },
        b_fact: 'The Walking Stick looks just like a twig, does it not? Hoo! '+
        'It even has knots like a real twig would! These bashful bugs mimic plants in this way to hide from predators. '+
        'A noble goal, you might say. But though the deceptive wretches fool some, they do not fool me! '+
        'I see these bugs for what they are... Monsters, plain and simple! I say, did you know that Walking Sticks can grow to two feet long?! '+
        'Imagine running into one! Surely I would faint.'
    },
    {
        name: 'Walking Leaf',
        picture: '../../assets/img/bugs/walkingleaf.png',
        available_month: [MONTH.July, MONTH.August, MONTH.September],
        available_south: [MONTH.January, MONTH.February, MONTH.March],
        caught: false,
        in_museum: false,
        price: 600,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        preview_notes: 'Disguised as leaves',
        notes: 'The Walking Leaf is a master of disguise. It will be under the trees diguising itself as a leaf.'
    },
    {
        name: 'Bagworm',
        picture: '../../assets/img/bugs/bagworm.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 600,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        preview_notes: 'Shake trees',
        notes: 'When shaking trees, the Bagworm can descend on its silk for a short amount of time before returning into the leaves of the tree.',
        b_fact: 'The Bagworm is, in fact, not a worm at all, but a caterpillar instead. '+
        'The filthy fraud uses silk and leaves to spin a cozy bag for it to hide inside-hence the name. '+
        'Some find it cute the way Bagworms dangle from trees. But the truth is they\'re gluttonous monsters. '+
        'These beasts love to stuff their bug-gullets full of leaves, devouring the very trees they hang upon. '+
        'Wretched villains is what they are.'
    },
    {
        name: 'Ant',
        picture: '../../assets/img/bugs/ant.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 80,
        location: BUG_LOCATION.Rot_Food,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        b_fact: 'I warn you, the Ant may be a small bug, but it finds scary strength in numbers. '+
        'You see, the Ant itself is the strongest creature in the world in relation to its size. '+
        'One of these diminutive fiends can carry 50 times its own bodyweight! '+
        'And if it wants to lift something even larger... Why, it simply calls on its Ant friends to join the effort. '+
        'Creepy cooperation, I say...'
    },
    {
        name: 'Atlas Moth',
        picture: '../../assets/img/bugs/atlasmoth.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 3000,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 19,
            minutes: 0
        },
        time_end: {
            hours: 4,
            minutes: 0
        },
        b_fact: 'The Atlas Moth is a monstrous thing! Not only is it one of the largest moths in the world... '+
        'The tips of its wings look rather like the heads of venomous snakes! '+
        'Despite its largeness and loathsome looks, the adult Atlas Moth lives only for a few days. '+
        'It emerges from its cocoon without a mouth, you see... and so cannot eat. '+
        'I feel for the poor thing... but it is still foul!'
    },
    {
        name: 'Long Locust',
        picture: '../../assets/img/bugs/longlocust.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.July, 
        MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 200,
        location: BUG_LOCATION.Ground,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 19,
            minutes: 0
        },
        b_fact: 'As if the average locust weren\'t large enough... we must suffer the Long Locust too! '+
        'The wretched beasts are known for their unusually long hind legs as well as their elongated heads. '+
        'But that is hardly the Long Locusts\' worst trait... I tell you, they spit brown goo when they\'re scared! '+
        'Revolting behavior indeed! Ugh and ewww!'
    },
    {
        name: 'Migratory Locust',
        picture: '../../assets/img/bugs/migratorylocust.png',
        available_month: [MONTH.August, MONTH.September, MONTH.October, MONTH.November],
        available_south: [MONTH.February, MONTH.March, MONTH.April, MONTH.May],
        caught: false,
        in_museum: false,
        price: 600,
        location: BUG_LOCATION.Ground,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 19,
            minutes: 0
        }
    },
    {
        name: 'Rice Grasshopper',
        picture: '../../assets/img/bugs/ricegrasshopper.png',
        available_month: [MONTH.August, MONTH.September, MONTH.October, MONTH.November],
        available_south: [MONTH.February, MONTH.March, MONTH.April, MONTH.May],
        caught: false,
        in_museum: false,
        price: 160,
        location: BUG_LOCATION.Ground,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 19,
            minutes: 0
        }
    },
    {
        name: 'Grasshopper',
        picture: '../../assets/img/bugs/grasshopper.png',
        available_month: [MONTH.July, MONTH.August, MONTH.September],
        available_south: [MONTH.January, MONTH.February, MONTH.March],
        caught: false,
        in_museum: false,
        price: 160,
        location: BUG_LOCATION.Ground,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 17,
            minutes: 0
        }
    },
    {
        name: 'Cricket',
        picture: '../../assets/img/bugs/cricket.png',
        available_month: [MONTH.September, MONTH.October, MONTH.November],
        available_south: [MONTH.March, MONTH.April, MONTH.May],
        caught: false,
        in_museum: false,
        price: 130,
        location: BUG_LOCATION.Ground,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        }
    },
    {
        name: 'Bell Cricket',
        picture: '../../assets/img/bugs/bellcricket.png',
        available_month: [MONTH.September, MONTH.October],
        available_south: [MONTH.March, MONTH.April],
        caught: false,
        in_museum: false,
        price: 430,
        location: BUG_LOCATION.Ground,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        }
    },
    {
        name: 'Wasp',
        picture: '../../assets/img/bugs/wasp.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        available_south:  [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 2500,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        preview_notes: 'Shake trees. Aggressive',
        notes: 'When shaking trees, you can dislodge a Wasp Nest. The wasps will swarm you and sting, causing you to pass out. '+
        'The nest can be collected to craft medicine.',
        b_fact: 'Hoo! Allow me to share a fact with you! Wasps are sometimes called "meat bees" because... They. Eat. MEAT! MEAT! '+
        'Of almost any sort! Surely you\'ve seen what a menace they make of themselves at picnics. \'Tis hardly the worst of it, wot wot! '+
        'Aggressive predators with venomous stingers, Wasps not only hunt and eat other insects... '+
        'they paralyze their prey, then drag their victims home ALIVE, leaving them for their larva to feed upon. '+
        'Suddenly a simple sting seems quote tolerable.'
    },
    {
        name: 'Brown Cicada',
        picture: '../../assets/img/bugs/browncicada.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 250,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 17,
            minutes: 0
        },
        b_fact: 'Cicadas are obnoxious insects. And not just Brown Cicadas mind you... but all Cicadas! '+
        'They flex ribbed membranes on their torso called tymbals to make a loud snapping sound. So rude! Hoo! '+
        'Yes, it is only the males who make the noise. Sometimes at a volume that can produce pain at close range! '+
        'Appallingly inconsiderate, I must say...'
    },
    {
        name: 'Robust Cicada',
        picture: '../../assets/img/bugs/robustcicada.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 300,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 17,
            minutes: 0
        }
    },
    {
        name: 'Giant Cicada',
        picture: '../../assets/img/bugs/giantcicada.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 500,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 17,
            minutes: 0
        }
    },
    {
        name: 'Walker Cicada',
        picture: '../../assets/img/bugs/walkercicada.png',
        available_month: [MONTH.August, MONTH.September],
        available_south: [MONTH.February, MONTH.March],
        caught: false,
        in_museum: false,
        price: 400,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 17,
            minutes: 0
        }
    },
    {
        name: 'Evening Cicada - Morning',
        picture: '../../assets/img/bugs/eveningcicada.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 550,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 4,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        }
    },
    {
        name: 'Evening Cicada - Night',
        picture: '../../assets/img/bugs/eveningcicada.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 550,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 16,
            minutes: 0
        },
        time_end: {
            hours: 19,
            minutes: 0
        }
    },
    {
        name: 'Cicada Shell',
        picture: '../../assets/img/bugs/cicadashell.png',
        available_month: [MONTH.July, MONTH.August],
        available_south: [MONTH.January, MONTH.February],
        caught: false,
        in_museum: false,
        price: 10,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        b_fact: 'Cicadas! The nerve! Not only are they loud, they leave their Cicada Shells lying about! '+
        'When it\'s time for a Cicada nymph to turn into an adult, you see, it clings to a tree and sheds its exoskeleton. '+
        'Then it just leaves this shell of its former self hanging right there! Awful manners, really... and awfully terrifying too.'
    },
    {
        name: 'Mole Cricket',
        picture: '../../assets/img/bugs/molecricket.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May,
        MONTH.November, MONTH.December],
        available_south: [MONTH.May, MONTH.June, MONTH.August, MONTH.September, MONTH.October,
        MONTH.November],
        caught: false,
        in_museum: false,
        price: 500,
        location: BUG_LOCATION.Underground,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        notes: 'The Mole Cricket can be found by digging where you hear the Mole Cricket chirping the loudest. '+
        'The Mole Cricket will attempt to scurry away, so have your net ready.',
        b_fact: 'Be warned, there is nowhere one might hide from the Mole Cricket. '+
        'This plump pest has powerful front claws made for digging holes, and oh how it loves to burrow underground! '+
        'A cousin to the grasshopper, it also has wings and can easily take to the air. And I swear this on my pinfeathers... '+
        'Some have even been seen walking on water! Oh mercy, I may need a moment. This is making me feel rather woozy...'
    },
    {
        name: 'Pondskater',
        picture: '../../assets/img/bugs/pondskater.png',
        available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 130,
        location: BUG_LOCATION.Ponds_or_River,
        time_start: {
            hours: 8,
            minutes: 0
        },
        time_end: {
            hours: 19,
            minutes: 0
        },
        b_fact: 'Putrid Pondskaters! They walk on water, you know... which is most preposterous! '+
        'It is a trick they perform by secreting oil onto the hairs of their feet. To which I say BLEEECH! '+
        'And one must wonder... What will they do next? Walk on air? Walk through walls? Perish the thought...'
    },
    {
        name: 'Fly',
        picture: '../../assets/img/bugs/fly.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],    
        caught: false,
        in_museum: false,
        price: 60,
        location: BUG_LOCATION.Trash,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        b_fact: 'The foul Fly is quite the disquieting creature. I tell you, it tastes its food with its feet! '+
        'Yeep! In fact, when Flies rub their legs together, they do so to get rid of debris blocking their taste receptors. '+
        'And did you know, their hairy toes release a sticky goo so they can walk on any surface? '+
        'Even your ceiling! This gross goo gets on your food too!'
    },
    {
        name: 'Flea',
        picture: '../../assets/img/bugs/flea.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September,
        MONTH.October, MONTH.November],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May,
        MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 70,
        location: BUG_LOCATION.Villager,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        notes: 'The Flea can be found on villager\'s heads.',
        b_fact: 'Allow me to be blunt. The Flea is foul! It is also disgusting, repugnant, and vile! '+
        'Hoo! But I digress... This horrid pest sucks the blood of humans and animals. '+
        'In fact, it is the Flea\'s own saliva that makes us itch! '+
        'And did you know their legs are so strong, they can jump more than 50 times their body length? '+
        'So you see, it\'s all too easy for a Flea to jump from you to me! I itch at the very thought.'
    },
    {
        name: 'Snail',
        picture: '../../assets/img/bugs/snail.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 250,
        location: BUG_LOCATION.Rocks_or_Bushes,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        preview_notes: 'Raining',
        notes: 'The Snail will only come out in the rain.',
        b_fact: 'Snails are not insects, I\'ll admit. But they\'re just as revolting to me. '+
        'Snails are mollusks, you see, and are born wearing shells they cannot remove. '+
        'Instead, their shells get bigger and biggers as they grow. Hoo! They must get heavy, don\'t you know! '+
        'I suppose that\'s why they need a trail of mucus to move about. A truly foul form of transportation.'
    },
    {
        name: 'Spider',
        picture: '../../assets/img/bugs/spider.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 600,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 19,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        },
        preview_notes: 'Shake trees',
        notes: 'When shaking trees, the Spider can descend on its silk for a short amount of time before returning into the leaves of the tree.',
        b_fact: 'The Spider is renowned for having eight eyes and eight legs... WHICH IS TOO MANY, I SAY! Oh dear. I do apologize. '+
        'Now where was I? Most Spiders are carnivorous. In fact, some will eat creatures several times larger than themselves. '+
        'To catch their prey, many of these ruthless predators spin sticky webs of surprising strength. '+
        'Worse yet, they\'ve also been known to ambush their victims, and some even chase down their meals! '+
        'All this talk about the feeding habits of Spiders... I\'m feeling quite queasy. Hoot! The Horror!"'
    },
    {
        name: 'Tarantula',
        picture: '../../assets/img/bugs/tarantula.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.November, MONTH.December],
        available_south: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
        caught: false,
        in_museum: false,
        price: 8000,
        location: BUG_LOCATION.Ground,
        time_start: {
            hours: 19,
            minutes: 0
        },
        time_end: {
            hours: 4,
            minutes: 0
        },
        preview_notes: 'Aggressive',
        notes: 'The Tarantula is aggressive. It will chase you. If the Tarantula attacks you, it will knock you out.',
        b_fact: 'As giant spiders go, the Tarantula is said to be quite docile. But have you ever seen such foul fuzziness?! '+
        'It is a fact, Tarantulas have barbed belly hair! I say again...BARBED. BELLY. HAIR! '+
        'These awful arachnids let loose their spiky, itchy hairs to protect themselves from predators. '+
        'But seeing how Tarantulas also prey on frogs, mice, and even birds, one must ask... Who needs protecting from whom?! '+
        'Hoo! Who indeed!'
    },
    {
        name: 'Scorpion',
        picture: '../../assets/img/bugs/scorpion.png',
        available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
        available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.November, MONTH.December],
        caught: false,
        in_museum: false,
        price: 8000,
        location: BUG_LOCATION.Ground,
        time_start: {
            hours: 19,
            minutes: 0
        },
        time_end: {
            hours: 4,
            minutes: 0
        },
        preview_notes: 'Aggressive',
        notes: 'The Scorpion is aggressive. It will chase you. If the Scorpion stings you, it will knock you out.',
        b_fact: 'The Scorpion... how should I put this? Those legs! Those pincers! That tail! And that venomous stinger! '+
        'It\'s as if someone took all the most awful insect parts... and put them together to make the scorpion! '+
        'All scorpions are venomous, you know! Though I understand that only a few kinds are truly deadly. I feel I might die just thinking about it.'
    },
];
