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
  data: {
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
  }
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
      pilots: [1],
      films: ['3'],
      created: '2014-12-18T10:54:57.804000Z',
      edited: '2014-12-20T21:23:49.904000Z',
      url: 'https://sw-api.starnavi.io/starships/27/'
    }
  ]
};
