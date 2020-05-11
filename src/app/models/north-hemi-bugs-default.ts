import { MONTH } from './Animal.model';
import { Bug, BUG_LOCATION } from './Animal.model';

export const northBugs: Bug[] = [
    {
        name: 'Hermit Crab',
        picture: '../../assets/img/bugs/hermitcrab.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.May, MONTH.June,
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
        notes: 'Disguised as shells'
    },
    {
        name: 'Yellow Butterfly',
        picture: '../../assets/img/bugs/yellowbutterfly.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.September, MONTH.October],
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
        }
    },
    {
        name: 'Tiger Butterfly',
        picture: '../../assets/img/bugs/tigerbutterfly.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
        }
    },
    {
        name: 'Common Bluebottle',
        picture: '../../assets/img/bugs/ommonbluebottle.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
        }
    },
    {
        name: 'Paper Kite Butterfly',
        picture: '../../assets/img/bugs/paperkitebutterfly.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.May, MONTH.June,
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
        }
    },
    {
        name: 'Monarch Butterfly',
        picture: '../../assets/img/bugs/monarchbutterfly.png',
        available_month: [MONTH.September, MONTH.October, MONTH.November],
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
        }
    },
    {
        name: 'Emperor Butterfly',
        picture: '../../assets/img/bugs/emperorbutterfly.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.June, MONTH.July, MONTH.August,
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
        }
    },
    {
        name: 'Agrias Butterfly',
        picture: '../../assets/img/bugs/agriasbutterfly.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
        }
    },
    {
        name: 'Rajah Brooke\'s Birdwing',
        picture: '../../assets/img/bugs/rajahbrookesbirdwing.png',
        available_month: [MONTH.January, MONTH.February, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
        MONTH.August, MONTH.September, MONTH.December],
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
        }
    },
    {
        name: 'Queen Alexandra\'s Birdwing',
        picture: '../../assets/img/bugs/queenalexandrasbirdwing.png',
        available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
        }
    },
    {
        name: 'Madagascan Sunset Moth',
        picture: '../../assets/img/bugs/madagascansunsetmoth.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
        }
    },
    {
        name: 'Honeybee',
        picture: '../../assets/img/bugs/honeybee.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July],
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
        }
    },
    {
        name: 'Red Dragonfly',
        picture: '../../assets/img/bugs/reddragonfly.png',
        available_month: [MONTH.September, MONTH.October],
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
        }
    },
    {
        name: 'Darner Dragonfly',
        picture: '../../assets/img/bugs/darnerdragonfly.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
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
        }
    },
    {
        name: 'Banded Dragonfly',
        picture: '../../assets/img/bugs/bandeddragonfly.png',
        available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
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
        }
    },
    {
        name: 'Damselfly',
        picture: '../../assets/img/bugs/damselfly.png',
        available_month: [MONTH.January, MONTH.February, MONTH.November, MONTH.December],
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
        available_month: [MONTH.January, MONTH.February, MONTH.April, MONTH.May, MONTH.June,
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
        }
    },
    {
        name: 'Mosquito',
        picture: '../../assets/img/bugs/mosquito.png',
        available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
        }
    },
    {
        name: 'Peacock Butterfly',
        picture: '../../assets/img/bugs/peacockbutterfly.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June],
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
        notes: 'Near hybrid flowers'
    },
    {
        name: 'Moth',
        picture: '../../assets/img/bugs/moth.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
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
        notes: 'Near lights'
    },
    {
        name: 'Pill Bug',
        picture: '../../assets/img/bugs/pillbug.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
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
        notes: 'Hit rocks'
    },
    {
        name: 'Centipede',
        picture: '../../assets/img/bugs/centipede.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
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
        notes: 'Hit rocks'
    },
    {
        name: 'Wharf Roach',
        picture: '../../assets/img/bugs/wharfroach.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
            MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
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
        }
    },
    {
        name: 'Mantis',
        picture: '../../assets/img/bugs/mantis.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
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
        }
    },
    {
        name: 'Ladybug',
        picture: '../../assets/img/bugs/ladybug.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.October],
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
        }
    },
    {
        name: 'Man-Faced Stink Bug',
        picture: '../../assets/img/bugs/manfacedstinkbug.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
        MONTH.September, MONTH.October],
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
        }
    },
    {
        name: 'Stinkbug',
        picture: '../../assets/img/bugs/stinkbug.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
        MONTH.September, MONTH.October],
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
        }
    },
    {
        name: 'Orchid Mantis',
        picture: '../../assets/img/bugs/orchidmantis.png',
        available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
        MONTH.September, MONTH.October, MONTH.November],
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
        notes: 'Only on white flowers'
    },
    {
        name: 'Giant Water Bug',
        picture: '../../assets/img/bugs/giantwaterbug.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
        }
    },
    {
        name: 'Diving Beetle',
        picture: '../../assets/img/bugs/divingbeetle.png',
        available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
        }
    }
];
