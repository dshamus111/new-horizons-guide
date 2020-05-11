import { MONTH } from './Animal.model';
import { SHADOW, Fish, FISH_LOCATION } from './Animal.model';

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
      }
    },
    {
      name: 'Pale Chub',
      picture: '../../assets/img/fish/palechub.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
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
      }
    },
    {
      name: 'Crucian Carp',
      picture: '../../assets/img/fish/cruciancarp.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
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
      }
    },
    {
      name: 'Dace',
      picture: '../../assets/img/fish/dace.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
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
      }
    },
    {
      name: 'Carp',
      picture: '../../assets/img/fish/carp.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
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
      }
    },
    {
      name: 'Koi',
      picture: '../../assets/img/fish/koi.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
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
      }
    },
    {
      name: 'Goldfish',
      picture: '../../assets/img/fish/goldfish.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
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
      }
    },
    {
      name: 'Pop-Eyed Goldfish',
      picture: '../../assets/img/fish/popeyedgoldfish.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
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
      }
    },
    {
      name: 'Ranchu Goldfish',
      picture: '../../assets/img/fish/ranchugoldfish.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
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
      }
    },
    {
      name: 'Killifish',
      picture: '../../assets/img/fish/killifish.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August],
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
      }
    },
    {
      name: 'Crawfish',
      picture: '../../assets/img/fish/crawfish.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
      }
    },
    {
      name: 'Soft-Shelled Turtle',
      picture: '../../assets/img/fish/softshelledturtle.png',
      available_month: [MONTH.August, MONTH.September],
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
      }
    },
    {
      name: 'Snapping Turtle',
      picture: '../../assets/img/fish/snappingturtle.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
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
      }
    },
    {
      name: 'Tadpole',
      picture: '../../assets/img/fish/tadpole.png',
      available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July],
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
      }
    },
    {
      name: 'Frog',
      picture: '../../assets/img/fish/frog.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August],
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
      }
    },
    {
      name: 'Freshwater Goby',
      picture: '../../assets/img/fish/freshwatergoby.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
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
      }
    },
    {
      name: 'Loach',
      picture: '../../assets/img/fish/loach.png',
      available_month: [MONTH.March, MONTH.April, MONTH.May],
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
      }
    },
    {
      name: 'Catfish',
      picture: '../../assets/img/fish/catfish.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
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
      }
    },
    {
      name: 'Giant Snakehead',
      picture: '../../assets/img/fish/giantsnakehead.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August],
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
      }
    },
    {
      name: 'Yellow Perch',
      picture: '../../assets/img/fish/yellowperch.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.October, MONTH.November, MONTH.December],
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
      }
    },
    {
      name: 'Black Bass',
      picture: '../../assets/img/fish/blackbass.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July,
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
      }
    },
    {
      name: 'Tilapia',
      picture: '../../assets/img/fish/tilapia.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
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
      }
    },
    {
      name: 'Pike',
      picture: '../../assets/img/fish/pike.png',
      available_month: [MONTH.September, MONTH.October, MONTH.November, MONTH.December],
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
      caught: false,
      in_museum: false,
      price: 800,
      shadow: SHADOW.Medium,
      location: FISH_LOCATION.River_Cliff,
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
      name: 'Char',
      picture: '../../assets/img/fish/char.png',
      available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.September, MONTH.October, MONTH.November],
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
      }
    },
    {
      name: 'Golden Trout',
      picture: '../../assets/img/fish/goldentrout.png',
      available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.September, MONTH.October, MONTH.November],
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
      }
    },
    {
      name: 'Stringfish',
      picture: '../../assets/img/fish/stringfish.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
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
      }
    },
    {
      name: 'Salmon',
      picture: '../../assets/img/fish/salmon.png',
      available_month: [MONTH.September],
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
      }
    },
    {
      name: 'Mitten Crab',
      picture: '../../assets/img/fish/mittencrab.png',
      available_month: [MONTH.September, MONTH.October, MONTH.November],
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
      }
    },
    {
      name: 'Guppy',
      picture: '../../assets/img/fish/guppy.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October, MONTH.November],
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
      }
    },
    {
      name: 'Nibble Fish',
      picture: '../../assets/img/fish/nibblefish.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
      }
    },
    {
      name: 'Angelfish',
      picture: '../../assets/img/fish/angelfish.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
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
      }
    },
    {
      name: 'Betta',
      picture: '../../assets/img/fish/betta.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
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
      name: 'Neon Tetra',
      picture: '../../assets/img/fish/neontetra.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September,
        MONTH.October, MONTH.November
      ],
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
      }
    },
    {
      name: 'Rainbowfish',
      picture: '../../assets/img/fish/rainbowfish.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH. September, MONTH.October],
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
      }
    },
    {
      name: 'Piranha - Morning',
      picture: '../../assets/img/fish/piranha.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
      }
    },
    {
      name: 'Saddled Bichir',
      picture: '../../assets/img/fish/saddledbichir.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
        hours: 0,
        minutes: 0
      }
    },
    {
      name: 'Sea Butterfly',
      picture: '../../assets/img/fish/seabutterfly.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.December],
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
        hours: 0,
        minutes: 0
      }
    },
    {
      name: 'Sea Horse',
      picture: '../../assets/img/fish/seahorse.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September,
        MONTH.October, MONTH.November],
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
      }
    },
    {
      name: 'Clown Fish',
      picture: '../../assets/img/fish/clownfish.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
      }
    },
    {
      name: 'Surgeonfish',
      picture: '../../assets/img/fish/surgeonfish.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
      }
    },
    {
      name: 'Butterfly Fish',
      picture: '../../assets/img/fish/butterflyfish.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
      }
    },
    {
      name: 'Napoleonfish',
      picture: '../../assets/img/fish/napoleonfish.png',
      available_month: [MONTH.July, MONTH.August],
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
        hours: 23,
        minutes: 0
      }
    },
    {
      name: 'Zebra Turkeyfish',
      picture: '../../assets/img/fish/zebraturkeyfish.png',
      available_month: [MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
        MONTH.September, MONTH.October, MONTH.November],
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
      }
    },
    {
      name: 'Blowfish',
      picture: '../../assets/img/fish/blowfish.png',
      available_month: [MONTH.January, MONTH.February, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 5000,
      shadow: SHADOW.Medium,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 23,
        minutes: 0
      },
      time_end: {
        hours: 4,
        minutes: 0
      }
    },
    {
      name: 'Pufferfish',
      picture: '../../assets/img/fish/pufferfish.png',
      available_month: [MONTH.July, MONTH.August, MONTH.September],
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
        hours: 23,
        minutes: 0
      }
    },
    {
      name: 'Horse Mackerel',
      picture: '../../assets/img/fish/horsemackerel.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
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
      }
    },
    {
      name: 'Barred Knifejaw',
      picture: '../../assets/img/fish/barredknifejaw.png',
      available_month: [MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
      MONTH.September, MONTH.October, MONTH.November],
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
      }
    },
    {
      name: 'Sea Bass',
      picture: '../../assets/img/fish/seabass.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
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
      }
    },
    {
      name: 'Red Snapper',
      picture: '../../assets/img/fish/redsnapper.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
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
      }
    },
    {
      name: 'Dab',
      picture: '../../assets/img/fish/dab.png',
      available_month: [MONTH.January, MONTH.February, MONTH.February, MONTH.March, MONTH.October,
      MONTH.November, MONTH.December],
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
      }
    },
    {
      name: 'Olive Flounder',
      picture: '../../assets/img/fish/oliveflounder.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
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
      }
    },
    {
      name: 'Squid',
      picture: '../../assets/img/fish/squid.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June,
      MONTH.July, MONTH.August, MONTH.December],
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
      }
    },
    {
      name: 'Moray Eel',
      picture: '../../assets/img/fish/morayeel.png',
      available_month: [MONTH.August, MONTH.September, MONTH.October],
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
      }
    },
    {
      name: 'Blue Marlin',
      picture: '../../assets/img/fish/bluemarlin.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.July, MONTH.August,
        MONTH.September, MONTH.November, MONTH.December],
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
      }
    },
    {
      name: 'Giant Trevally',
      picture: '../../assets/img/fish/gianttrevally.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.November],
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
      }
    },
    {
      name: 'Mahi-Mahi',
      picture: '../../assets/img/fish/mahimahi.png',
      available_month: [MONTH.May, MONTH.June, MONTH.July, MONTH.August, MONTH.September, MONTH.October],
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
      }
    },
    {
      name: 'Ocean Sunfish',
      picture: '../../assets/img/fish/oceansunfish.png',
      available_month: [MONTH.July, MONTH.August, MONTH.September],
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
        hours: 23,
        minutes: 0
      }
    },
    {
      name: 'Ray',
      picture: '../../assets/img/fish/ray.png',
      available_month: [MONTH.August, MONTH.September, MONTH.October, MONTH.November],
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
        hours: 23,
        minutes: 0
      }
    },
    {
      name: 'Saw Shark',
      picture: '../../assets/img/fish/sawshark.png',
      available_month: [MONTH.June, MONTH.July, MONTH.August, MONTH.September],
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
      }
    },
    {
      name: 'Oarfish',
      picture: '../../assets/img/fish/oarfish.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.December],
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
      }
    },
    {
      name: 'BarrelEye',
      picture: '../../assets/img/fish/barreleye.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
        MONTH.September, MONTH.October, MONTH.November, MONTH.December],
      caught: false,
      in_museum: false,
      price: 15000,
      shadow: SHADOW.Small,
      location: FISH_LOCATION.Sea,
      time_start: {
        hours: 23,
        minutes: 0
      },
      time_end: {
        hours: 4,
        minutes: 0
      }
    },
    {
      name: 'Coelacanth',
      picture: '../../assets/img/fish/coelacanth.png',
      available_month: [MONTH.January, MONTH.February, MONTH.March, MONTH.April, MONTH.May, MONTH.June, MONTH.July, MONTH.August,
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
      notes: 'Only available when raining.'
    },

];
