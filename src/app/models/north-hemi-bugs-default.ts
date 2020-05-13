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
        picture: '../../assets/img/bugs/commonbluebottle.png',
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
        name: 'Tiger Beetle',
        picture: '../../assets/img/bugs/tigerbeetle.png',
        available_month: [MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
        MONTH.September, MONTH.October],
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
        }
    },
    {
        name: 'Jewel Beetle',
        picture: '../../assets/img/bugs/jewelbeetle.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August],
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
        }
    },
    {
        name: 'Violin Beetle',
        picture: '../../assets/img/bugs/violinbeetle.png',
        available_month: [MONTH.May, MONTH.June, MONTH.September, MONTH.October, MONTH.November],
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
        }
    },
    {
        name: 'Citrus Long-Horned Beetle',
        picture: '../../assets/img/bugs/citruslonghornedbeetle.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
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
        }
    },
    {
        name: 'Rosalia Batesi Beetle',
        picture: '../../assets/img/bugs/rosaliabatesibeetle.png',
        available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
        }
    },
    {
        name: 'Blue Weevil Beetle',
        picture: '../../assets/img/bugs/blueweevilbeetle.png',
        available_month: [MONTH.July, MONTH.August],
        caught: false,
        in_museum: false,
        price: 800,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 0,
            minutes: 0
        },
        time_end: {
            hours: 24,
            minutes: 0
        },
        notes: 'On coconut trees'
    },
    {
        name: 'Dung Beetle',
        picture: '../../assets/img/bugs/dungbeetle.png',
        available_month: [MONTH.January, MONTH.February, MONTH.December],
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
        notes: 'Rolling snowballs'
    },
    {
        name: 'Earth-Boring Dung Beetle',
        picture: '../../assets/img/bugs/earthboringdungbeetle.png',
        available_month: [MONTH.July, MONTH.August, MONTH.September],
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
        }
    },
    {
        name: 'Scarab Beetle',
        picture: '../../assets/img/bugs/scarabbeetle.png',
        available_month: [MONTH.July, MONTH.August],
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
        }
    },
    {
        name: 'Goliath Beetle',
        picture: '../../assets/img/bugs/goliathbeetle.png',
        available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
        caught: false,
        in_museum: false,
        price: 8000,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        },
        notes: 'On cocnut trees'
    },
    {
        name: 'Saw Stag',
        picture: '../../assets/img/bugs/sawstag.png',
        available_month: [MONTH.July, MONTH.August],
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
        caught: false,
        in_museum: false,
        price: 8000,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        },
        notes: 'On coconut trees'
    },
    {
        name: 'Golden Stag',
        picture: '../../assets/img/bugs/goldenstag.png',
        available_month: [MONTH.July, MONTH.August],
        caught: false,
        in_museum: false,
        price: 12000,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        },
        notes: 'On coconut trees'
    },
    {
        name: 'Giraffe Stag',
        picture: '../../assets/img/bugs/giraffestag.png',
        available_month: [MONTH.July, MONTH.August],
        caught: false,
        in_museum: false,
        price: 12000,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        },
        notes: 'On coconut trees'
    },
    {
        name: 'Horned Dynastid',
        picture: '../../assets/img/bugs/horneddynastid.png',
        available_month: [MONTH.July, MONTH.August],
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
        caught: false,
        in_museum: false,
        price: 8000,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        },
        notes: 'On coconut trees'
    },
    {
        name: 'Horned Elephant',
        picture: '../../assets/img/bugs/hornedelephant.png',
        available_month: [MONTH.July, MONTH.August],
        caught: false,
        in_museum: false,
        price: 8000,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        },
        notes: 'On coconut trees'
    },
    {
        name: 'Horned Hercules',
        picture: '../../assets/img/bugs/hornedhercules.png',
        available_month: [MONTH.July, MONTH.August],
        caught: false,
        in_museum: false,
        price: 12000,
        location: BUG_LOCATION.Trees,
        time_start: {
            hours: 17,
            minutes: 0
        },
        time_end: {
            hours: 8,
            minutes: 0
        },
        notes: 'On coconut trees'
    },
    {
        name: 'Walking Stick - Morning',
        picture: '../../assets/img/bugs/walkingstick.png',
        available_month: [MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
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
        }
    },
    {
        name: 'Walking Stick - Night',
        picture: '../../assets/img/bugs/walkingstick.png',
        available_month: [MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November, MONTH.December],
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
        }
    },
    {
        name: 'Walking Leaf',
        picture: '../../assets/img/bugs/walkingleaf.png',
        available_month: [MONTH.July, MONTH.August, MONTH.September],
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
        notes: 'Disguised as leaves'
    },
    {
        name: 'Bagworm',
        picture: '../../assets/img/bugs/bagworm.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
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
        notes: 'Shake trees'
    },
    {
        name: 'Ant',
        picture: '../../assets/img/bugs/ant.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
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
        }
    },
    {
        name: 'Atlas Moth',
        picture: '../../assets/img/bugs/atlasmoh.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
        }
    },
    {
        name: 'Long Locust',
        picture: '../../assets/img/bugs/longlocust.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November],
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
        }
    },
    {
        name: 'Migratory Locust',
        picture: '../../assets/img/bugs/migratorylocust.png',
        available_month: [MONTH.August, MONTH.September, MONTH.October, MONTH.November],
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
        notes: 'Shake trees. Will sting'
    },
    {
        name: 'Brown Cicada',
        picture: '../../assets/img/bugs/browncicada.png',
        available_month: [MONTH.July, MONTH.August],
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
        }
    },
    {
        name: 'Robust Cicada',
        picture: '../../assets/img/bugs/robustcicada.png',
        available_month: [MONTH.July, MONTH.August],
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
        available_month: [MONTH.July, MONTH.August],
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
        caught: false,
        in_museum: false,
        price: 500,
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
        }
    },
    {
        name: 'Mole Cricket',
        picture: '../../assets/img/bugs/molecricket.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May,
        MONTH.November, MONTH.December],
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
        }
    },
    {
        name: 'Pondskater',
        picture: '../../assets/img/bugs/pondskater.png',
        available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
        }
    },
    {
        name: 'Fly',
        picture: '../../assets/img/bugs/fly.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
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
        }
    },
    {
        name: 'Flea',
        picture: '../../assets/img/bugs/flea.png',
        available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September,
        MONTH.October, MONTH.November],
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
        }
    },
    {
        name: 'Snail',
        picture: '../../assets/img/bugs/snail.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
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
        notes: 'Raining'
    },
    {
        name: 'Spider',
        picture: '../../assets/img/bugs/spider.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
        MONTH.July, MONTH.August, MONTH.September, MONTH.November, MONTH.October, MONTH.December],
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
        notes: 'Shake trees'
    },
    {
        name: 'Tarantula',
        picture: '../../assets/img/bugs/tarantula.png',
        available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.November, MONTH.December],
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
        notes: 'Will attack'
    },
    {
        name: 'Scorpion',
        picture: '../../assets/img/bugs/scorpion.png',
        available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
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
        notes: 'Will attack'
    },
];
