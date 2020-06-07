import { MONTH } from './Animal.model';
import { SHADOW, Fish, FISH_LOCATION } from './Animal.model';
import { MatOption } from '@angular/material';

// List all north hemisphere fishes
// Use 24 hour notation for Time

export const northFish: Fish[] = [
    // {
    //   name: '',
    //   picture: '../../assets/img/fish/',
    //   available_month: [],
    //   caught: false,
    //   in_museum: false,
    //   price: ,
    //   shadow: SHADOW.,
    //   location: FISH_LOCATION.,
    //   time_start: {
    //     hours: ,
    //     minutes:
    //   },
    //   time_end: {
    //     hours: ,
    //     minutes:
    //   }
    // },
    {
      name: 'Bitterling',
      picture: '../../assets/img/fish/bitterling.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.November, MONTH.December],
      available_south: [MONTH.May, MONTH.June, MONTH. July, MONTH.August],
      caught: false,
      in_museum: false,
      price: 900,
      shadow: SHADOW.Tiny,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Bitterlings hide their eggs inside large bivalves—like clams—where the young can stay safe until grown. '+
      'The Bitterling isn\'t being sneaky. No, their young help keep the bivalve healthy by eating invading parasites! '+
      'It\'s a wonderful bit of evolutionary deal making, don\'t you think? Each one keeping the other safe... '+
      'Though eating parasites does not sound like a happy childhood... Is that why the fish is so bitter?'
    },
    {
      name: 'Pale Chub',
      picture: '../../assets/img/fish/palechub.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 200,
      shadow: SHADOW.Tiny,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 9,
        minutes: 0
      },
      time_end: {
        hours: 16,
        minutes: 0
      },
      b_fact: 'The Pale Chub is a river fish with simple back-and-silver coloring. '+
      'Interestingly, the males\' coloring becomes most vibrant when he\'s trying to attract a mate! '+
      'Though normally plain, these fellows really know how to look stylish when they want to. '+
      'Perhaps I could learn a thing or two from the Pale Chub...'
    },
    {
      name: 'Crucian Carp',
      picture: '../../assets/img/fish/cruciancarp.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 160,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'I wonder... Do you know how to tell the difference between a Crucian Carp and a standard-issue carp? '+
      'It\'s quite easy to tell the two apart... One must simply locate the barbels. Or, rather, the lack of them! '+
      'And just what is a barbel, you ask? Well, a barbel looks a little something like a mustache. '+
      'A run-of-the-mill carp will sport this unsightly "facial hair," while a Crucian Carp is considerably better groomed! '+
      'I tried to grow a mustache when I was younger. It never did fill in quite right... '+
      'All for the best in the end, as mustaches go so much better with noses than with beaks!'
    },
    {
      name: 'Dace',
      picture: '../../assets/img/fish/dace.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 240,
      shadow: SHADOW.Medium,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      },
      b_fact: 'Dace are shiny little fish that enjoy freshwater streams with gravelly bottoms and plenty of sunlight. '+
      'What a fishy paradise...until the larger fish move in and begin eating the dace! '+
      'Sadly, the shiny Dace are easy for other fish to spot, which makes them a popular snack. '+
      'However, this particular specimen here has no need to worry. '+
      'There\'s a strict "No Eating Your Neighbor" policy at this institution.'
    },
    {
      name: 'Carp',
      picture: '../../assets/img/fish/carp.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 300,
      shadow: SHADOW.Large,
      location: FISH_LOCATION.Pond,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Oh, the Carp... have you ever seen their teeth? For your sake, I hope you have not! '+
      'Carp have teeth in their throat strong enough to crunch on hard things like shells and fingers! '+
      'A good rule of thumb when dealing with other species is to keep your fingers out of their mouths. '+
      'Although, having neither thumbs nor fingers, I am quite safe from this little fellow!'
    },
    {
      name: 'Koi',
      picture: '../../assets/img/fish/koi.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 4000,
      shadow: SHADOW.Large,
      location: FISH_LOCATION.Pond,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      },
      b_fact: 'Koi are a variety of carp bred for their color mutations... starting more than a thousand years ago! '+
      'Well, one glance at their impressive coloring tells you that the centuries of effort were worth it. '+
      'And even today people still selectively breed Koi in search of new color combinations! '+
      'One marvels at the thought of what the Koi may look like in another thousand years.'
    },
    {
      name: 'Goldfish',
      picture: '../../assets/img/fish/goldfish.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 1300,
      shadow: SHADOW.Tiny,
      location: FISH_LOCATION.Pond,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Goldfish are so cute and delicate... but do you know how big they can get? '+
      'Why can grow up to... a foot in length! Well, sometimes. '+
      'The size of the tank they\'re kept in tends to restrict their growth. '+
      'And just how big will this Goldfish get in our large museum tank? I look forward to finding out!'
    },
    {
      name: 'Pop-Eyed Goldfish',
      picture: '../../assets/img/fish/popeyedgoldfish.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 1300,
      shadow: SHADOW.Tiny,
      location: FISH_LOCATION.Pond,
      time_start: {
        hours: 9,
        minutes: 0
      },
      time_end: {
        hours: 16,
        minutes: 0
      },
      b_fact: 'Pop-Eyed Goldfish have, as the name suggests, huge round eyes. But as babies they look like other goldfish! '+
      'As they grow, their eyes begin to pop out and they gain their, hoo, distinct apperance... '+
      'Imagine the poor fish fancier who unknowingly bought one! Their eyes might as well pop out just as far!'
    },
    {
      name: 'Ranchu Goldfish',
      picture: '../../assets/img/fish/ranchugoldfish.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 4500,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.Pond,
      time_start: {
        hours: 9,
        minutes: 0
      },
      time_end: {
        hours: 16,
        minutes: 0
      },
      b_fact: 'The Ranchu Goldfish is a charming relative of the goldfish with a bumpy head and stout, round body. '+
      'They have ordinary heads when born, but develop impressive rectangular heads after about three years. '+
      'Supposedly their head shape changes depending of factors like the size of their tank... '+
      'So Ranchu Goldfish enthusiasts aim to raise perfectly shaped specimens and work hard to achieve this. '+
      'Of course, no one asks the Ranchu Goldfish themselves what shape they want their heads to be...'
    },
    {
      name: 'Killifish',
      picture: '../../assets/img/fish/killifish.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 300,
      shadow: SHADOW.Tiny,
      location: FISH_LOCATION.Pond,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Ah, the magnificent Killifish! Did you know there are over 1,000 different species? '+
      'My goodness, what a family tree to keep track of! '+
      'My own favorite Killifish species are the mangrove, which can live on land for weeks, breathing air! '+
      'And... the mummichog, the first fish ever brought to space. '+
      'I wonder if the Killifish you\'ve brought me is related to either of those intrepid explorers?'
    },
    {
      name: 'Crawfish',
      picture: '../../assets/img/fish/crawfish.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 200,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.Pond,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Ohoo! So you have found a Crawfish. Neither crab nor lobster, Crawfish evolved in an interesting manner. '+
      'Beware their fearsome pinchy pinchers! Behold their many legs! I say! It is a big bug-like, eh wot... '+
      'The more I look at it, the more unsettled I feel... Let\'s be done with this and never speak of it again, shall we?'
    },
    {
      name: 'Soft-Shelled Turtle',
      picture: '../../assets/img/fish/softshelledturtle.png',
      available_month: [MONTH.August, MONTH.September],
      available_south: [MONTH.February, MONTH.March],
      caught: false,
      in_museum: false,
      price: 3750,
      shadow: SHADOW.Large,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      },
      b_fact: 'The Soft-Shelled Turtle is not one to shy away from biting when provoked. '+
      'In addition to its powerful bite, this little critter has the ability to breathe both above and below water! '+
      'It has an unusually long neck which it uses for both breathing and biting. '+
      'Come to think of it, how did you manage to avoid being bitten? '+
      'Well, it\'s a fearsome critter, but just look at that face! Rather silly, wot?'
    },
    {
      name: 'Snapping Turtle',
      picture: '../../assets/img/fish/snappingturtle.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 5000,
      shadow: SHADOW.XLarge,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 21,
        minutes: 0
      },
      time_end: {
        hours: 4,
        minutes: 0
      },
      b_fact: 'The Snapping Turtle is a large turtle known for its crocodile-like body and long claws. '+
      'No, wait—it is better known for its ferocious bite, which it can deliver with shocking speed for a turtle. '+
      'NO, WAIT—it is BEST known for that time one chased me across a parking lot and I had to climb on top of a car.'
    },
    {
      name: 'Tadpole',
      picture: '../../assets/img/fish/tadpole.png',
      available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July],
      available_south: [MONTH.January, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 100,
      shadow: SHADOW.Tiny,
      location: FISH_LOCATION.Pond,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Undoubtedly you know that Tadpoles eventually turn into frogs. '+
      'I must say, I find them impossibly adorable with their squiggly little tails. '+
      'But even cuter... when they sprout legs! Why, we can witness accelerated evolution in these squirmy little ones. '+
      'Hoo, it makes me so emotional!'
    },
    {
      name: 'Frog',
      picture: '../../assets/img/fish/frog.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August],
      available_south: [MONTH.January, MONTH.February, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 120,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.Pond,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'I understand that Frogs converse with fellow Frogs through a number of varied calls, as it were. '+
      'Ribbit! My prince has arrived! Gribbit riiibbit! This pond is tragic! Ribbity rib\'t! I think you\'re splendid! '+
      'Hoo hoo, of course I have no clue what they\'re saying, but I like to think that if I practice enough, I might!'
    },
    {
      name: 'Freshwater Goby',
      picture: '../../assets/img/fish/freshwatergoby.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 400,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      },
      b_fact: 'The Freshwater Goby is an unassuming specimen. But beneath that calm, fish exterior, true gluttony resides! '+
      'It will eat anything that will fit in its mouth... '+
      'And its mouth is quite the gaping maw, so I recommend you refrain from drawing attention to yourself!'
    },
    {
      name: 'Loach',
      picture: '../../assets/img/fish/loach.png',
      available_month: [MONTH.March, MONTH.April, MONTH.May],
      available_south: [MONTH.September, MONTH.October, MONTH.November],
      caught: false,
      in_museum: false,
      price: 400,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Loaches are a large group of bottom-feeding freshwater fish. '+
      'Because there are so many species, it is difficult to generalize about them all. '+
      'The one thing they all have in common is perhaps their most unappealing trait: the name \'Loach.\' '+
      'Repellent, isn\'t it? They should have just called it the \'cockloach\' and been done with it, eh wot! '+
      'Loach... Loach... It just tastes terrible in the beak.'
    },
    {
      name: 'Catfish',
      picture: '../../assets/img/fish/catfish.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 800,
      shadow: SHADOW.Large,
      location: FISH_LOCATION.Pond,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      },
      b_fact: 'Catfish don\'t have scales and are rather slimy. Believe it or not, this slime helps them breathe! '+
      'Some species of Catfish are nocturnal, and they\'ll feed on almost anything. '+
      'They use a suctioning action to pull in their food. Did I mention they can grow as large as you or I...'
    },
    {
      name: 'Giant Snakehead',
      picture: '../../assets/img/fish/giantsnakehead.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August],
      available_south: [MONTH. January, MONTH.February, MONTH.December],
      caught: false,
      in_museum: false,
      price: 5500,
      shadow: SHADOW.XLarge,
      location: FISH_LOCATION.Pond,
      time_start: {
        hours: 9,
        minutes: 0
      },
      time_end: {
        hours: 16,
        minutes: 0
      }
    },
    {
      name: 'Bluegill',
      picture: '../../assets/img/fish/bluegill.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 180,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 9,
        minutes: 0
      },
      time_end: {
        hours: 16,
        minutes: 0
      },
      b_fact: 'The Bluegill is incredibly common. A bit too common, depending upon where you are. '+
      'They eat anything that fits in their mouths and are highly adaptable. '+
      'The bane of fishermen in some areas, Bluegill is often the only fish to be caught! '+
      'But looking in its wee beady eyes, I must say I see no ill will in it...'
    },
    {
      name: 'Yellow Perch',
      picture: '../../assets/img/fish/yellowperch.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August],
      caught: false,
      in_museum: false,
      price: 300,
      shadow: SHADOW.Medium,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'The Yellow Perch is certainly worth squawking about. I find it a sight to behold! '+
      'That jagged dorsal fin! Those brilliant stripes! Those glorious colors! Hoo, truly it is quite the specimen. '+
      'I would be thrilled to witness it firsthand in its natural environment... '+
      'But the Yellow Perch\'s peak season is winter, I\'m afraid. So very afraid... of winter\'s biting chill...'
    },
    {
      name: 'Black Bass',
      picture: '../../assets/img/fish/blackbass.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 400,
      shadow: SHADOW.Large,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'The Black Bass is a formidably strong fish and, as such is a common target for sport anglers. '+
      'In some areas, there are even those who professionally catch just black bass! '+
      'Yet in other areas where they are NOT native, they are considered an ecological nuisance. '+
      'Invasive, even. One cannot help but wonder who is to blame for their invasion, hoo.'
    },
    {
      name: 'Tilapia',
      picture: '../../assets/img/fish/tilapia.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April],
      caught: false,
      in_museum: false,
      price: 800,
      shadow: SHADOW.Medium,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Wherever the waters are warm, the Tilapia can be found. '+
      'It is a highly adaptable river fish. '+
      'They mainly feed on algae, but they will also eat larvae and dead fish— or whatever fits in their mouths. '+
      'I will confess that, as a growing owlet, I similarly defined food as \'anything that fits in my beak.\''
    },
    {
      name: 'Pike',
      picture: '../../assets/img/fish/pike.png',
      available_month: [MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.March, MONTH.April, MONTH.May, MONTH.June],
      caught: false,
      in_museum: false,
      price: 1800,
      shadow: SHADOW.XLarge,
      location: FISH_LOCATION.River,
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
      name: 'Pond Smelt',
      picture: '../../assets/img/fish/pondsmelt.png',
      available_month: [MONTH.January, MONTH.February, MONTH.December],
      available_south: [MONTH.June, MONTH.July, MONTH.August],
      caught: false,
      in_museum: false,
      price: 500,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.River,
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
      name: 'Sweetfish',
      picture: '../../assets/img/fish/sweetfish.png',
      available_month: [MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March],
      caught: false,
      in_museum: false,
      price: 900,
      shadow: SHADOW.Medium,
      location: FISH_LOCATION.River,
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
      name: 'Cherry Salmon',
      picture: '../../assets/img/fish/cherrysalmon.png',
      available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.September, MONTH.October, MONTH.November],
      available_south: [MONTH.March, MONTH.April, MONTH.May, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 1000,
      shadow: SHADOW.Medium,
      location: FISH_LOCATION.River_Cliff,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      },
      b_fact: 'The Cherry Salmon is related to the salmon, and is known for its distinctive pattern of "polka dots." '+
      'Their polka dots disappear as they mature, but ONLY in the fish of certain geographic regions. '+
      'Pity the poor researchers that must make sense of the cherry salmon\'s fickle fashion sense.'
    },
    {
      name: 'Char',
      picture: '../../assets/img/fish/char.png',
      available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.September, MONTH.October, MONTH.November],
      available_south: [MONTH.March, MONTH.April, MONTH.May, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 3800,
      shadow: SHADOW.Medium,
      location: FISH_LOCATION.River_Cliff_or_Pond,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      },
      b_fact: 'The Char is one of the bigger fish around and, in the world of fish, that\'s quite an accomplishment! '+
      'They are territorial predators, and therefore must constantly defend their \'turf\' from others. '+
      'So when you see a large Char like this one, it is likely a skilled fighter and veteran of many battles. '+
      'My feathers! I hope it never has cause to go to battle with me!'
    },
    {
      name: 'Golden Trout',
      picture: '../../assets/img/fish/goldentrout.png',
      available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.September, MONTH.October, MONTH.November],
      available_south: [MONTH.March, MONTH.April, MONTH.May, MONTH.September, MONTH.October, MONTH.November],
      caught: false,
      in_museum: false,
      price: 15000,
      shadow: SHADOW.Medium,
      location: FISH_LOCATION.River_Cliff,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      },
      b_fact: 'The Golden Trout is a beautifully colored fish that can only live in very clean waters. '+
      'They are difficult to come across since they are found only in high mountain streams. '+
      'As a side note, I find it much easier to appreciate fish that aren\'t such prima donnas about everything.'
    },
    {
      name: 'Stringfish',
      picture: '../../assets/img/fish/stringfish.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
      available_south: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      caught: false,
      in_museum: false,
      price: 15000,
      shadow: SHADOW.XLarge,
      location: FISH_LOCATION.River_Cliff,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      },
      b_fact: 'The Stringfish grows slowly, but also lives quite a long time for a fish, with up to 15 years being typical. '+
      'Consequently, while it takes a while, they can get quite large-perhaps even up to six feet long! '+
      'The Stringfish is perhaps the best embodiment in the fish world of \'slow and steady wins the race\''
    },
    {
      name: 'Salmon',
      picture: '../../assets/img/fish/salmon.png',
      available_month: [MONTH.September],
      available_south: [MONTH.March],
      caught: false,
      in_museum: false,
      price: 700,
      shadow: SHADOW.Large,
      location: FISH_LOCATION.River_Mouth,
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
      name: 'King Salmon',
      picture: '../../assets/img/fish/kingsalmon.png',
      available_month: [MONTH.September],
      available_south: [MONTH.March],
      caught: false,
      in_museum: false,
      price: 1800,
      shadow: SHADOW.Gigantic,
      location: FISH_LOCATION.River_Mouth,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'The King Salmon didn\'t get its name for nothing. This stately fish can weigh in at up to 130 pounds! '+
      'It\'s clear why it\'s referred to as the king of salmon. '+
      'I imagine even the mightiest net can catch no more than a few at a time. '+
      'I must say it\'s a miracle to me that you didn\'t get dragged out to sea by this one, wot!'
    },
    {
      name: 'Mitten Crab',
      picture: '../../assets/img/fish/mittencrab.png',
      available_month: [MONTH.September, MONTH.October, MONTH.November],
      available_south: [MONTH.March, MONTH.April, MONTH.May],
      caught: false,
      in_museum: false,
      price: 2000,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      },
      b_fact: 'The Mitten Crab was named for its impossibly adorable and fuzzy little pincers. '+
      'These cute crustaceans embark on quite the journey. They\'re first born in brackish waters. '+
      'Then they mature in freshwater. Finally, they travel to the ocean to create more mitten crabs! '+
      'Hoo! How I delight in the thought of thousands of tiny mittened crabs scuttling about!'
    },
    {
      name: 'Guppy',
      picture: '../../assets/img/fish/guppy.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 1300,
      shadow: SHADOW.Tiny,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 9,
        minutes: 0
      },
      time_end: {
        hours: 16,
        minutes: 0
      },
      b_fact: 'Oh my! Would you look at that! Such a beautiful, snazzy little fellow that Guppy is! '+
      'The shape and coloration of Guppy fins are all unique. Quite eye-catching, I must say. '+
      'Do you imagine they host contests for \'most snazzy\'? And...do you suppose I might receive an invite?'
    },
    {
      name: 'Nibble Fish',
      picture: '../../assets/img/fish/nibblefish.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 1500,
      shadow: SHADOW.Tiny,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 9,
        minutes: 0
      },
      time_end: {
        hours: 16,
        minutes: 0
      },
      b_fact: 'Nibble Fish are best known for their use in a certain... skin treatment. '+
      'This treatment has been apparently been used for thousands of years. '+
      'I have never... experienced said treatment... because they eat your dead skin with their little toothless mouths! '+
      'Can you imagine anything so repellent?! Please don\'t ask me any follow-up questions. Hoo.'
    },
    {
      name: 'Angelfish',
      picture: '../../assets/img/fish/angelfish.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 3000,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      },
      b_fact: 'The Angelfish is truly a beautiful creature. '+
      'Just look at the elegance of those fins! Despite the name, however, these lovelies are known to be rather aggressive. '+
      'They\'ve no qualms about relentlessly pursuing fish much smaller than themselves! Why, they even attack their own kin! '+
      'It seems no fish is safe around these "angelic" bullies. It makes one wonder who comes up with these names. '+
      'Appearances— and names— can be deceiving.'
    },
    {
      name: 'Betta',
      picture: '../../assets/img/fish/betta.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 2500,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 9,
        minutes: 0
      },
      time_end: {
        hours: 16,
        minutes: 0
      },
      b_fact: 'The Betta has long fins and beautiful coloring. It is a tropical fish popular in decorative aquariums. '+
      'They\'re very territorial and will fight to complete exhaustion, so aquarists must keep them carefully. '+
      'Rarely do such beauty and violence commingle outside the rowdiest of sunset-viewing parties.'
    },
    {
      name: 'Neon Tetra',
      picture: '../../assets/img/fish/neontetra.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September,
      MONTH.October, MONTH.November],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May,
      MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 500,
      shadow: SHADOW.Tiny,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 9,
        minutes: 0
      },
      time_end: {
        hours: 16,
        minutes: 0
      },
      b_fact: 'Hoo! Wonderful! The Neon Tetra is truly a marvel of the tropical-fish world. '+
      'Just look at how tiny it is! And how very filled with... neon! '+
      'I imagine its environment must be just as flashy as it is for it to have developed such colors. '+
      'I wonder how flashy I might be, had I been raised somewhere even half as vibrant?'
    },
    {
      name: 'Rainbowfish',
      picture: '../../assets/img/fish/rainbowfish.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH. September, MONTH.October],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 800,
      shadow: SHADOW.Tiny,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 9,
        minutes: 0
      },
      time_end: {
        hours: 16,
        minutes: 0
      },
      b_fact: 'The Rainbowfish is a tropical fish known for its metallic colors and beautiful fins. '+
      'There are over 50 different species, each unique and pleasing color. '+
      'I must say, it does make me wish for feathers of a more exciting hue than "underbaked brownie."'
    },
    {
      name: 'Piranha - Morning',
      picture: '../../assets/img/fish/piranha.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
      caught: false,
      in_museum: false,
      price: 2500,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 9,
        minutes: 0
      },
      time_end: {
        hours: 16,
        minutes: 0
      }
    },
    {
      name: 'Piranha - Night',
      picture: '../../assets/img/fish/piranha.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
      caught: false,
      in_museum: false,
      price: 2500,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 21,
        minutes: 0
      },
      time_end: {
        hours: 4,
        minutes: 0
      }
    },
    {
      name: 'Arowana',
      picture: '../../assets/img/fish/arowana.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
      caught: false,
      in_museum: false,
      price: 10000,
      shadow: SHADOW.Large,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      }
    },
    {
      name: 'Dorado',
      picture: '../../assets/img/fish/dorado.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
      caught: false,
      in_museum: false,
      price: 15000,
      shadow: SHADOW.XLarge,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 4,
        minutes: 0
      },
      time_end: {
        hours: 21,
        minutes: 0
      }
    },
    {
      name: 'Gar',
      picture: '../../assets/img/fish/gar.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
      caught: false,
      in_museum: false,
      price: 6000,
      shadow: SHADOW.Gigantic,
      location: FISH_LOCATION.Pond,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      }
    },
    {
      name: 'Arapaima',
      picture: '../../assets/img/fish/arapaima.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
      caught: false,
      in_museum: false,
      price: 10000,
      shadow: SHADOW.Gigantic,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      },
      b_fact: 'The stately Arapaima is quite large. Indeed, it is among the largest freshwater fish there are. '+
      'Furthermore, these fascinating fish make quite the family unit. '+
      'That is to say, male Arapaimas protect their young by holding them gently in their mouths. '+
      'Meanwhile, female Arapaimas swim circles around these full-mouthed fathers fending off predators. '+
      'It simply goes to show that cold-blooded creatures can be heartwarming too.'
    },
    {
      name: 'Saddled Bichir',
      picture: '../../assets/img/fish/saddledbichir.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
      caught: false,
      in_museum: false,
      price: 4000,
      shadow: SHADOW.Large,
      location: FISH_LOCATION.River,
      time_start: {
        hours: 21,
        minutes: 0
      },
      time_end: {
        hours: 4,
        minutes: 0
      }
    },
    {
      name: 'Sturgeon',
      picture: '../../assets/img/fish/sturgeon.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      caught: false,
      in_museum: false,
      price: 10000,
      shadow: SHADOW.Gigantic,
      location: FISH_LOCATION.River_Mouth,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'The Sturgeon is a large and long-lived fish which has changed little in the last 300 million years. '+
      'One curious behavior of theirs is leaping high out of the water and falling back in on their sides. '+
      'The smacking sounds of their re-entry can be heard for up to half a mile away, likely more underwater! '+
      'No one knows why they do it, but I like to think it\'s their impression of bread popping out of a toaster!'
    },
    {
      name: 'Sea Butterfly',
      picture: '../../assets/img/fish/seabutterfly.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
      available_south: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      caught: false,
      in_museum: false,
      price: 1000,
      shadow: SHADOW.Tiny,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Such mystery! Such grace! Did you know that the Sea Butterfly\'s scientific name is Thecosomata? '+
      'A very rough translation of that is "shell body." Indeed, this illustrious creature is related to snails! '+
      'However, it reminds me much more of an elegant feathered friend, the way it flies through the water. '+
      'With such grace in flying, one shouldn\'t wonder if it\'s related to the owl, hoo hoo!'
    },
    {
      name: 'Sea Horse',
      picture: '../../assets/img/fish/seahorse.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September,
      MONTH.October, MONTH.November],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May,
      MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 1100,
      shadow: SHADOW.Tiny,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'A, a favorite of mine, to be sure! The Sea Horse is such a very unique creature and is indeed a fish! '+
      'Though, as far as fish go, Sea Horses are not great swimmers. '+
      'The sea horse, you see, has but a wee fin on its back, which propels it through water rather poorly. '+
      'Thus these fish are often found using their prehensile tails to hold tight in amongst the sea grass. '+
      'And here\'s one final fact for you... Sea Horses have no stomach and so must constantly feed to stay alive! '+
      'Indeed, the life of a land horse sounds far easier than that of the hardworking horse of the sea.'
    },
    {
      name: 'Clown Fish',
      picture: '../../assets/img/fish/clownfish.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 650,
      shadow: SHADOW.Tiny,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Few can deny the delightful qualities of the Clown Fish. '+
      'These vibrant fish make their home among venomous anemones. '+
      'It\'s a mutually beneficial arrangement. '+
      'The Clown Fish finds safety in the anemone\'s wriggling arms, as well as leftover scraps of food. '+
      'In return, clown fish ward off parasites and predators for the anemone. '+
      'Thus these colorful fish remind us of the importance of maintaining good cheer among our roommates."'
    },
    {
      name: 'Surgeonfish',
      picture: '../../assets/img/fish/surgeonfish.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 1000,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Hoo! Careful, now! These fish are particularly dangerous, despite their seemingly docile appearance. '+
      'With its saturated blue and yellow tones, the Surgeonfish is quite breathtaking. '+
      'It\'s got to keep up with all the other vibrant fish that live in the coral too, I wager. '+
      'Quite the competition! Its spine is sharp as a blade, so care must be taken when handling these beauties...'
    },
    {
      name: 'Butterfly Fish',
      picture: '../../assets/img/fish/butterflyfish.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 1000,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Ah, the Butterfly Fish is just charming with its beautiful colors and elegant movements. '+
      'I refer to it as a Butterfly Fish, but it\'s actually a grouping in which there are over 100 types! '+
      'These beautiful aquatic friends swim in schools amid coral, fluttering back and forth with the tides. '+
      'The sheer awe one must experience when witnessing such a sight. '+
      'It must be a dream! So much better than actual butterflies...'
    },
    {
      name: 'Napoleonfish',
      picture: '../../assets/img/fish/napoleonfish.png',
      available_month: [MONTH.July, MONTH.August],
      available_south: [MONTH.January, MONTH.February],
      caught: false,
      in_museum: false,
      price: 10000,
      shadow: SHADOW.Gigantic,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 4,
        minutes: 0
      },
      time_end: {
        hours: 21,
        minutes: 0
      },
      b_fact: 'Quite the catch you\'ve brought! The stately and debonair Napoleonfish is truly something to behold. '+
      'Those beady eyes! That bumpy head! That bold blue-green coloring! '+
      'Alas, this quirky creature is quite endangered due to a variety of factors. '+
      'Needless to say, we must do our very best to take care of our lumpy friend and its environment.'
    },
    {
      name: 'Zebra Turkeyfish',
      picture: '../../assets/img/fish/zebraturkeyfish.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
      MONTH.September, MONTH.October, MONTH.November],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May,
      MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 500,
      shadow: SHADOW.Medium,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'The sheer brilliance and diversity in the aquatic underworld never ceases to amaze me. '+
      'This Zebra Turkeyfish is as stunning to gaze upon as it is deadly. '+
      'Those spines that are part of its defining physique are chock-full of venom! '+
      'Fortunately, Zebra Turkeyfish are not susceptible to another\'s venom. '+
      'Though solitary, I imagine they give one another a mean fin bump when passing each other by.'
    },
    {
      name: 'Blowfish',
      picture: '../../assets/img/fish/blowfish.png',
      available_month: [MONTH.January, MONTH.February, MONTH.November, MONTH.December],
      available_south: [MONTH.May, MONTH.June, MONTH.July, MONTH.August],
      caught: false,
      in_museum: false,
      price: 5000,
      shadow: SHADOW.Medium,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 21,
        minutes: 0
      },
      time_end: {
        hours: 4,
        minutes: 0
      },
      b_fact: 'As you may know, Blowfish carry a deadly poison and are among the most toxic creatures on earth. '+
      'What you may not have known is that poison and spines are not the limit of this animal\'s defenses! '+
      'A predator that tries to swallow a Blowfish before it inflates can find itself quickly choking. '+
      'To be honest, if said predator can get past poison, spines, AND choking hazards, I feel they\'ve earned a meal.'
    },
    {
      name: 'Pufferfish',
      picture: '../../assets/img/fish/pufferfish.png',
      available_month: [MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March],
      caught: false,
      in_museum: false,
      price: 250,
      shadow: SHADOW.Medium,
      location: FISH_LOCATION.Sea,
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
      name: 'Anchovy',
      picture: '../../assets/img/fish/anchovy.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
      MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
      MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 200,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 4,
        minutes: 0
      },
      time_end: {
        hours: 21,
        minutes: 0
      },
      b_fact: 'There are more than 140 species of Anchovy, but they do all have some things in common. '+
      'They are all small and feed by simply swimming with heir mouths open to filter food particles from the sea. '+
      'In my sleepier moments, I sometimes wish I could do that...'
    },
    {
      name: 'Horse Mackerel',
      picture: '../../assets/img/fish/horsemackerel.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
      MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
      MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 150,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Supposedly the Horse Mackerel derives its name from a-false-myth about its strengh as a swimmer. '+
      'The gist of it is that these fish are so powerful underwater that smaller fish can ride them as steeds! '+
      'It\'s absurd, of course. Where would these alleged fish jockeys attach a saddle, much less horseshoes? '+
      'One does wish that people would construct their legends with a BIT more scientific plausibility!'
    },
    {
      name: 'Barred Knifejaw',
      picture: '../../assets/img/fish/barredknifejaw.png',
      available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
      MONTH.September, MONTH.October, MONTH.November],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May,
      MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 5000,
      shadow: SHADOW.Medium,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'The Barred Knifejaw, also called the striped beakfish, is a lovely fish with a distinctive striped pattern. '+
      'It is reportedly also a very curious fish in that it has been known to approach swimmers to "greet" them. '+
      'They also tend to be good at avoiding fishing hooks, so well done on outwitting this one!'
    },
    {
      name: 'Sea Bass',
      picture: '../../assets/img/fish/seabass.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
      MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
      MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 400,
      shadow: SHADOW.XLarge,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Sea Bass is a name given to a variety of different species of saltwater fish. '+
      'They are a varied bunch with some as small as four inches and some as staggeringly ginormous as eight feet! '+
      '"Sea bass" is a bit pedestrian, though. Many species have better names, such as "redbanded perch." '+
      'Or the delightfully whimsical dusky grouper! Or the potato cod! WILL NO ONE THINK OF THE PINK MAOMAO?!'
    },
    {
      name: 'Red Snapper',
      picture: '../../assets/img/fish/redsnapper.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
      MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
      MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 3000,
      shadow: SHADOW.Large,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: '\'Red Snapper\' is the common name of dozens of fish species, and I wonder why it is so popular. '+
      'Are there so many types of fish that are both a shade of red and have a tendency to snap? '+
      'Where there no other names? What about \'burgundy biter\'? \'Garnet grasper\'? \'Puce pincher\'?'
    },
    {
      name: 'Dab',
      picture: '../../assets/img/fish/dab.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.October,
      MONTH.November, MONTH.December],
      available_south: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
      caught: false,
      in_museum: false,
      price: 300,
      shadow: SHADOW.Medium,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact:'The Dab is a flatfish that bears some resemblance to the olive flounder, though their mouths are different. '+
      'Personally, I am morbidly fascinated by each fish\'s eye placement. '+
      'The Dab\'s eyes are both on its right side, while the Olive Flounder\'s are on the left. '+
      'These fish spend lots of time lying on their sides in the sand, so the odd eye placement makes some sense... '+
      'But its-how can I put this? Creepy? Viscerally disturbing? Profoundly upsetting to fans of symmetry?'
    },
    {
      name: 'Olive Flounder',
      picture: '../../assets/img/fish/oliveflounder.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
      MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
      MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 800,
      shadow: SHADOW.XLarge,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Did you know that the Olive Flounder is the same shape as other fish when it hatches? '+
      'But as it grows, it gets both wider and flatter, and can reach some three feet long. '+
      'These flat fish spend much of their lives buried under the sandy ocean floor, waiting for prey to happen by. '+
      'Imagine the surprise for said prey when they strike. It would be as if your kitchen floor were to bite you.'
    },
    {
      name: 'Squid',
      picture: '../../assets/img/fish/squid.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
      MONTH.July, MONTH.August, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.June, MONTH.July, MONTH.August, MONTH.September,
      MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 500,
      shadow: SHADOW.Medium,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'Well, first off, Squids are members of the mollusk family, just like the octopus. '+
      'Many mollusks like snails and clams have shells, but the squid\'s body is almost completely soft. '+
      'The exception is a long, narrow bit of hard material going through its main body-the last remnant of its shell. '+
      'Of course, having your shell INSIDE is not a best practice. Perhaps they lost the owner\'s manual!'
    },
    {
      name: 'Moray Eel',
      picture: '../../assets/img/fish/morayeel.png',
      available_month: [MONTH.August, MONTH.September, MONTH.October],
      available_south: [MONTH.February, MONTH.March, MONTH.April],
      caught: false,
      in_museum: false,
      price: 2000,
      shadow: SHADOW.Narrow,
      location: FISH_LOCATION.Sea,
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
      name: 'Ribbon Eel',
      picture: '../../assets/img/fish/ribboneel.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.December],
      caught: false,
      in_museum: false,
      price: 600,
      shadow: SHADOW.Narrow,
      location: FISH_LOCATION.Sea,
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
      name: 'Tuna',
      picture: '../../assets/img/fish/tuna.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.November, MONTH.December],
      available_south: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
      caught: false,
      in_museum: false,
      price: 7000,
      shadow: SHADOW.Gigantic,
      location: FISH_LOCATION.Pier,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'The Tuna is a large ocean fish that can reach upwards of nine feet long. '+
      'Besides its great size, it\'s notable for continuing to swin even when it\'s sleeping! '+
      'Well, to be fair, if it doesn\'t keep swimming, it won\'t be able to breathe and will of course die... '+
      'But sleep should be restful, eh wot! If I were the tuna I would feel very hard done by!'
    },
    {
      name: 'Blue Marlin',
      picture: '../../assets/img/fish/bluemarlin.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.July, MONTH.August,
      MONTH.September, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.May, MONTH.June, MONTH.July,
      MONTH.August, MONTH.September, MONTH.October],
      caught: false,
      in_museum: false,
      price: 10000,
      shadow: SHADOW.Gigantic,
      location: FISH_LOCATION.Pier,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'The Blue Marlin has a distinctive angular shape and no scales. It is an unusual relative of the Tuna. '+
      'These mighty fish can exceed 13 feet from bill to tail. Some accounts even have it fighting with whales! '+
      'No wonder it\'s a popular target for sport fishing: unlike most fish, it seems like a worthy opponent.'
    },
    {
      name: 'Giant Trevally',
      picture: '../../assets/img/fish/gianttrevally.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.November],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 4500,
      shadow: SHADOW.XLarge,
      location: FISH_LOCATION.Pier,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'The Giant Trevally, as befits its name, can reach six feet in length and 180 pounds! '+
      'Its size and strength have made it a favored opponent for anglers since time immemorial. '+
      'They are also ingenious hunters, sometimes taking advantage of other predators to distract their prey. '+
      'There have even been documented cases of them attacking—gulp—birds.'
    },
    {
      name: 'Mahi-Mahi',
      picture: '../../assets/img/fish/mahimahi.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 6000,
      shadow: SHADOW.XLarge,
      location: FISH_LOCATION.Pier,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'The Mahi-Mahi is an ocean fish known for its wide, somewhat-cute face. '+
      'It can reach over six feet long. It is known by many different names including "dolphinfish," even though it has no relation to dolphins. '+
      'They live only in warm, tropical waters... which perhaps explains the relaxed, happy look on their faces.'
    },
    {
      name: 'Ocean Sunfish',
      picture: '../../assets/img/fish/oceansunfish.png',
      available_month: [MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March],
      caught: false,
      in_museum: false,
      price: 4000,
      shadow: SHADOW.Gigantic_Finned,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 4,
        minutes: 0
      },
      time_end: {
        hours: 21,
        minutes: 0
      }
    },
    {
      name: 'Ray',
      picture: '../../assets/img/fish/ray.png',
      available_month: [MONTH.August, MONTH.September, MONTH.October, MONTH.November],
      available_south: [MONTH.February, MONTH.March, MONTH.April, MONTH.May],
      caught: false,
      in_museum: false,
      price: 3000,
      shadow: SHADOW.XLarge,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 4,
        minutes: 0
      },
      time_end: {
        hours: 21,
        minutes: 0
      }
    },
    {
      name: 'Saw Shark',
      picture: '../../assets/img/fish/sawshark.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south:[MONTH.January, MONTH.February, MONTH.March, MONTH.December],
      caught: false,
      in_museum: false,
      price: 12000,
      shadow: SHADOW.Gigantic_Finned,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      }
    },
    {
      name: 'Hammerhead Shark',
      picture: '../../assets/img/fish/hammerheadshark.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
      caught: false,
      in_museum: false,
      price: 8000,
      shadow: SHADOW.Gigantic_Finned,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      }
    },
    {
      name: 'Great White Shark',
      picture: '../../assets/img/fish/greatwhiteshark.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
      caught: false,
      in_museum: false,
      price: 15000,
      shadow: SHADOW.Gigantic_Finned,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      }
    },
    {
      name: 'Whale Shark',
      picture: '../../assets/img/fish/whaleshark.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
      caught: false,
      in_museum: false,
      price: 13000,
      shadow: SHADOW.Gigantic_Finned,
      location: FISH_LOCATION.Sea,
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
      name: 'Suckerfish',
      picture: '../../assets/img/fish/suckerfish.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
      caught: false,
      in_museum: false,
      price: 1500,
      shadow: SHADOW.Large_Finned,
      location: FISH_LOCATION.Sea,
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
      name: 'Football Fish',
      picture: '../../assets/img/fish/footballfish.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.November, MONTH.December],
      available_south: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
      caught: false,
      in_museum: false,
      price: 2500,
      shadow: SHADOW.Large,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 16,
        minutes: 0
      },
      time_end: {
        hours: 9,
        minutes: 0
      },
      b_fact: 'The Football Fish is a strange and grotesque deep-sea fish with a lantern-like light on its forehead. '+
      'Its light is apparently powered by luminous bacteria and other glowing microorganisms. '+
      'One theory says it can spray these luminescent sidekicks when prey approaches in order to dazzle them... '+
      'The deep contains many mysteries... as well as some things that are just sort of odd and off-putting.'
    },
    {
      name: 'Oarfish',
      picture: '../../assets/img/fish/oarfish.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.December],
      available_south: [MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November],
      caught: false,
      in_museum: false,
      price: 9000,
      shadow: SHADOW.Gigantic,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      b_fact: 'The Oarfish is a long, eel-like fish that can supposedly reach up to 36 feet in length. '+
      'They appear in various legends as things like messengers of the gods. '+
      'It seems to me a creature like that could explain the myth of massive, ship-crushing sea serpents. '+
      'It is, of course, well documented that people tend to exaggerate the size of "the one that got away"'
    },
    {
      name: 'BarrelEye',
      picture: '../../assets/img/fish/barreleye.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
      MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
      MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 15000,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 21,
        minutes: 0
      },
      time_end: {
        hours: 4,
        minutes: 0
      },
      b_fact: 'The Barreleye is a deep-sea fish with protuberant eyes and a clear head, so some of its organs are... visible. '+
      'At first blush, a transparent head seems absurd, but there is a reason: so it can see things directly above! '+
      'But I must confess - the more I learn about deep-sea fish, the happier I am to live on dry land, wot.'
    },
    {
      name: 'Coelacanth',
      picture: '../../assets/img/fish/coelacanth.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
      MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      available_south: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
      MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 15000,
      shadow: SHADOW.Gigantic,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 0,
        minutes: 0
      },
      time_end: {
        hours: 24,
        minutes: 0
      },
      preview_notes: 'Raining',
      notes: 'The Coelacanth will only be out swimming in the rain.',
      b_fact: 'The Coelacanth is a deep-sea fish that has been around since the age of the dinosaurs. '+
      'They were long thought extinct, so when living specimens were discovered, it was quite a shock! '+
      'Now I\'ll just have to figure out where in the museum to display it-fish or fossils!'
    },

];
