export const mockCharactersData = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/'
    ],
    species: [],
    vehicles: [
      'https://swapi.dev/api/vehicles/14/',
      'https://swapi.dev/api/vehicles/30/'
    ],
    starships: [
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/22/'
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/'
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/4/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/'
    ],
    species: ['https://swapi.dev/api/species/2/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:10:51.357000Z',
    edited: '2014-12-20T21:17:50.309000Z',
    url: 'https://swapi.dev/api/people/2/'
  }
];

export const mockCharacter = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/'
  ],
  species: [],
  vehicles: [
    'https://swapi.dev/api/vehicles/14/',
    'https://swapi.dev/api/vehicles/30/'
  ],
  starships: [
    'https://swapi.dev/api/starships/12/',
    'https://swapi.dev/api/starships/22/'
  ],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/'
};
export const mockFilms = {
  count: 6,
  next: null,
  previous: null,
  results: [
    {
      title: 'A New Hope',
      episode_id: 4,
      opening_crawl:
        "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      director: 'George Lucas',
      producer: 'Gary Kurtz, Rick McCallum',
      release_date: '1977-05-25',
      characters: [
        'https://swapi.dev/api/people/1/',
        'https://swapi.dev/api/people/2/',
        'https://swapi.dev/api/people/3/',
        'https://swapi.dev/api/people/4/',
        'https://swapi.dev/api/people/5/',
        'https://swapi.dev/api/people/6/',
        'https://swapi.dev/api/people/7/',
        'https://swapi.dev/api/people/8/',
        'https://swapi.dev/api/people/9/',
        'https://swapi.dev/api/people/10/',
        'https://swapi.dev/api/people/12/',
        'https://swapi.dev/api/people/13/',
        'https://swapi.dev/api/people/14/',
        'https://swapi.dev/api/people/15/',
        'https://swapi.dev/api/people/16/',
        'https://swapi.dev/api/people/18/',
        'https://swapi.dev/api/people/19/',
        'https://swapi.dev/api/people/81/'
      ],
      planets: [
        'https://swapi.dev/api/planets/1/',
        'https://swapi.dev/api/planets/2/',
        'https://swapi.dev/api/planets/3/'
      ],
      starships: [
        'https://swapi.dev/api/starships/2/',
        'https://swapi.dev/api/starships/3/',
        'https://swapi.dev/api/starships/5/',
        'https://swapi.dev/api/starships/9/',
        'https://swapi.dev/api/starships/10/',
        'https://swapi.dev/api/starships/11/',
        'https://swapi.dev/api/starships/12/',
        'https://swapi.dev/api/starships/13/'
      ],
      vehicles: [
        'https://swapi.dev/api/vehicles/4/',
        'https://swapi.dev/api/vehicles/6/',
        'https://swapi.dev/api/vehicles/7/',
        'https://swapi.dev/api/vehicles/8/'
      ],
      species: [
        'https://swapi.dev/api/species/1/',
        'https://swapi.dev/api/species/2/',
        'https://swapi.dev/api/species/3/',
        'https://swapi.dev/api/species/4/',
        'https://swapi.dev/api/species/5/'
      ],
      created: '2014-12-10T14:23:31.880000Z',
      edited: '2014-12-20T19:49:45.256000Z',
      url: 'https://swapi.dev/api/films/1/'
    },
    {
      title: 'The Empire Strikes Back',
      episode_id: 5,
      opening_crawl:
        'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
      director: 'Irvin Kershner',
      producer: 'Gary Kurtz, Rick McCallum',
      release_date: '1980-05-17',
      characters: [
        'https://swapi.dev/api/people/1/',
        'https://swapi.dev/api/people/2/',
        'https://swapi.dev/api/people/3/',
        'https://swapi.dev/api/people/4/',
        'https://swapi.dev/api/people/5/',
        'https://swapi.dev/api/people/10/',
        'https://swapi.dev/api/people/13/',
        'https://swapi.dev/api/people/14/',
        'https://swapi.dev/api/people/18/',
        'https://swapi.dev/api/people/20/',
        'https://swapi.dev/api/people/21/',
        'https://swapi.dev/api/people/22/',
        'https://swapi.dev/api/people/23/',
        'https://swapi.dev/api/people/24/',
        'https://swapi.dev/api/people/25/',
        'https://swapi.dev/api/people/26/'
      ],
      planets: [
        'https://swapi.dev/api/planets/4/',
        'https://swapi.dev/api/planets/5/',
        'https://swapi.dev/api/planets/6/',
        'https://swapi.dev/api/planets/27/'
      ],
      starships: [
        'https://swapi.dev/api/starships/3/',
        'https://swapi.dev/api/starships/10/',
        'https://swapi.dev/api/starships/11/',
        'https://swapi.dev/api/starships/12/',
        'https://swapi.dev/api/starships/15/',
        'https://swapi.dev/api/starships/17/',
        'https://swapi.dev/api/starships/21/',
        'https://swapi.dev/api/starships/22/',
        'https://swapi.dev/api/starships/23/'
      ],
      vehicles: [
        'https://swapi.dev/api/vehicles/8/',
        'https://swapi.dev/api/vehicles/14/',
        'https://swapi.dev/api/vehicles/16/',
        'https://swapi.dev/api/vehicles/18/',
        'https://swapi.dev/api/vehicles/19/',
        'https://swapi.dev/api/vehicles/20/'
      ],
      species: [
        'https://swapi.dev/api/species/1/',
        'https://swapi.dev/api/species/2/',
        'https://swapi.dev/api/species/3/',
        'https://swapi.dev/api/species/6/',
        'https://swapi.dev/api/species/7/'
      ],
      created: '2014-12-12T11:26:24.656000Z',
      edited: '2014-12-15T13:07:53.386000Z',
      url: 'https://swapi.dev/api/films/2/'
    }
  ]
};
export const mockStarShips = {
  count: 36,
  next: 'https://sw-api.starnavi.io/starships/?names=11&page=2',
  previous: null,
  results: [
    {
      id: 27,
      name: 'Calamari Cruiser',
      model: 'MC80 Liberty type Star Cruiser',
      manufacturer: 'Mon Calamari shipyards',
      cost_in_credits: '104000000',
      length: '1200',
      max_atmosphering_speed: 'n/a',
      crew: '5400',
      passengers: '1200',
      cargo_capacity: 'unknown',
      consumables: '2 years',
      hyperdrive_rating: '1.0',
      MGLT: '60',
      starship_class: 'Star Cruiser',
      pilots: [],
      films: [3],
      created: '2014-12-18T10:54:57.804000Z',
      edited: '2014-12-20T21:23:49.904000Z',
      url: 'https://sw-api.starnavi.io/starships/27/'
    },
    {
      id: 31,
      name: 'Republic Cruiser',
      model: 'Consular-class cruiser',
      manufacturer: 'Corellian Engineering Corporation',
      cost_in_credits: 'unknown',
      length: '115',
      max_atmosphering_speed: '900',
      crew: '9',
      passengers: '16',
      cargo_capacity: 'unknown',
      consumables: 'unknown',
      hyperdrive_rating: '2.0',
      MGLT: 'unknown',
      starship_class: 'Space cruiser',
      pilots: [],
      films: [4],
      created: '2014-12-19T17:01:31.488000Z',
      edited: '2014-12-20T21:23:49.912000Z',
      url: 'https://sw-api.starnavi.io/starships/31/'
    },
    {
      id: 41,
      name: 'Scimitar',
      model: 'Star Courier',
      manufacturer: 'Republic Sienar Systems',
      cost_in_credits: '55000000',
      length: '26.5',
      max_atmosphering_speed: '1180',
      crew: '1',
      passengers: '6',
      cargo_capacity: '2500000',
      consumables: '30 days',
      hyperdrive_rating: '1.5',
      MGLT: 'unknown',
      starship_class: 'Space Transport',
      pilots: [44],
      films: [4],
      created: '2014-12-20T09:39:56.116000Z',
      edited: '2014-12-20T21:23:49.922000Z',
      url: 'https://sw-api.starnavi.io/starships/41/'
    },
    {
      id: 43,
      name: 'J-type diplomatic barge',
      model: 'J-type diplomatic barge',
      manufacturer:
        'Theed Palace Space Vessel Engineering Corps, Nubia Star Drives',
      cost_in_credits: '2000000',
      length: '39',
      max_atmosphering_speed: '2000',
      crew: '5',
      passengers: '10',
      cargo_capacity: 'unknown',
      consumables: '1 year',
      hyperdrive_rating: '0.7',
      MGLT: 'unknown',
      starship_class: 'Diplomatic barge',
      pilots: [],
      films: [5],
      created: '2014-12-20T11:05:51.237000Z',
      edited: '2014-12-20T21:23:49.925000Z',
      url: 'https://sw-api.starnavi.io/starships/43/'
    },
    {
      id: 47,
      name: 'AA-9 Coruscant freighter',
      model: 'Botajef AA-9 Freighter-Liner',
      manufacturer: 'Botajef Shipyards',
      cost_in_credits: 'unknown',
      length: '390',
      max_atmosphering_speed: 'unknown',
      crew: 'unknown',
      passengers: '30000',
      cargo_capacity: 'unknown',
      consumables: 'unknown',
      hyperdrive_rating: 'unknown',
      MGLT: 'unknown',
      starship_class: 'freighter',
      pilots: [],
      films: [5],
      created: '2014-12-20T17:24:23.509000Z',
      edited: '2014-12-20T21:23:49.928000Z',
      url: 'https://sw-api.starnavi.io/starships/47/'
    },
    {
      id: 48,
      name: 'Jedi starfighter',
      model: 'Delta-7 Aethersprite-class interceptor',
      manufacturer: 'Kuat Systems Engineering',
      cost_in_credits: '180000',
      length: '8',
      max_atmosphering_speed: '1150',
      crew: '1',
      passengers: '0',
      cargo_capacity: '60',
      consumables: '7 days',
      hyperdrive_rating: '1.0',
      MGLT: 'unknown',
      starship_class: 'Starfighter',
      pilots: [10, 58],
      films: [5, 6],
      created: '2014-12-20T17:35:23.906000Z',
      edited: '2014-12-20T21:23:49.930000Z',
      url: 'https://sw-api.starnavi.io/starships/48/'
    },
    {
      id: 49,
      name: 'H-type Nubian yacht',
      model: 'H-type Nubian yacht',
      manufacturer: 'Theed Palace Space Vessel Engineering Corps',
      cost_in_credits: 'unknown',
      length: '47.9',
      max_atmosphering_speed: '8000',
      crew: '4',
      passengers: 'unknown',
      cargo_capacity: 'unknown',
      consumables: 'unknown',
      hyperdrive_rating: '0.9',
      MGLT: 'unknown',
      starship_class: 'yacht',
      pilots: [35],
      films: [5],
      created: '2014-12-20T17:46:46.847000Z',
      edited: '2014-12-20T21:23:49.932000Z',
      url: 'https://sw-api.starnavi.io/starships/49/'
    }
  ]
};
