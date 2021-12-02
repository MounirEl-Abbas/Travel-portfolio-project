/* Canada */
import {
  ottawa1,
  ottawa2,
  ottawa3,
  toronto1,
  toronto2,
  toronto3,
  montreal1,
  montreal2,
  montreal3,
} from "./countriesInfo/canada/";

/* unitedStates */
import {
  washington1,
  washington2,
  washington3,
  newYork1,
  newYork2,
  newYork3,
  losAngeles1,
  losAngeles2,
  losAngeles3,
} from "./countriesInfo/unitedStates";
/* France */
import {
  paris1,
  paris2,
  paris3,
  toulouse1,
  toulouse2,
  toulouse3,
  nice1,
  nice2,
  nice3,
} from "./countriesInfo/france";

/* Austria */

import {
  vienna1,
  vienna2,
  vienna3,
  salzburg1,
  salzburg2,
  salzburg3,
  innsbruck1,
  innsbruck2,
  innsbruck3,
} from "./countriesInfo/austria";

/* Germany */

import {
  berlin1,
  berlin2,
  berlin3,
  munich1,
  munich2,
  munich3,
  hamburg1,
  hamburg2,
  hamburg3,
} from "./countriesInfo/germany";

/* Italy */

import {
  rome1,
  rome2,
  rome3,
  venice1,
  venice2,
  venice3,
  milan1,
  milan2,
  milan3,
} from "./countriesInfo/italy";

/* Switzerland */

import {
  zurich1,
  zurich2,
  zurich3,
  geneva1,
  geneva2,
  geneva3,
  bern1,
  bern2,
  bern3,
} from "./countriesInfo/switzerland";

const data = [
  {
    country: "France",
    cities: [
      {
        id: 1,
        cityName: "Paris",
        population: 2200000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [paris1, paris2, paris3],
      },

      {
        id: 2,
        cityName: "Toulouse",
        population: 440000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [toulouse1, toulouse2, toulouse3],
      },
      {
        id: 3,
        cityName: "Nice",
        population: 340000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [nice1, nice2, nice3],
      },
    ],
  },
  {
    country: "Austria",
    cities: [
      {
        id: 4,
        cityName: "Vienna",
        population: 1700000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [vienna1, vienna2, vienna3],
      },
      {
        id: 5,
        cityName: "Salzburg",
        population: 160000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [salzburg1, salzburg2, salzburg3],
      },
      {
        id: 6,
        cityName: "Innsbruck",
        population: 130000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [innsbruck1, innsbruck2, innsbruck3],
      },
    ],
  },

  {
    country: "Germany",
    cities: [
      {
        id: 7,
        cityName: "Berlin",
        population: 3700000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [berlin1, berlin2, berlin3],
      },
      {
        id: 8,
        cityName: "Munich",
        population: 1400000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [munich1, munich2, munich3],
      },
      {
        id: 9,
        cityName: "Hamburg",
        population: 1800000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [hamburg1, hamburg2, hamburg3],
      },
    ],
  },

  {
    country: "Italy",
    cities: [
      {
        id: 10,
        cityName: "Rome",
        population: 2600000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [rome1, rome2, rome3],
      },
      {
        id: 11,
        cityName: "Venice",
        population: 260000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [venice1, venice2, venice3],
      },
      {
        id: 12,
        cityName: "Milan",
        population: 1400000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [milan1, milan2, milan3],
      },
    ],
  },

  {
    country: "Switzerland",
    cities: [
      {
        id: 13,
        cityName: "Zurich",
        population: 380000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [zurich1, zurich2, zurich3],
      },
      {
        id: 14,
        cityName: "Geneva",
        population: 200000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [geneva1, geneva2, geneva3],
      },
      {
        id: 15,
        cityName: "Bern",
        population: 140000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [bern1, bern2, bern3],
      },
    ],
  },
  {
    country: "Canada",
    cities: [
      {
        id: 16,
        cityName: "Ottawa",
        population: 2200000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [ottawa1, ottawa2, ottawa3],
      },

      {
        id: 17,
        cityName: "Toronto",
        population: 2930000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [toronto1, toronto2, toronto3],
      },
      {
        id: 18,
        cityName: "Montreal",
        population: 1780000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [montreal1, montreal2, montreal3],
      },
    ],
  },
  {
    country: "United States",
    cities: [
      {
        id: 19,
        cityName: "WashingtonDC",
        population: 7615000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [washington1, washington2, washington3],
      },

      {
        id: 20,
        cityName: "New York",
        population: 8419000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [newYork1, newYork2, newYork3],
      },
      {
        id: 21,
        cityName: "Los Angeles",
        population: 3967000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum perspiciatis ea voluptate consequuntur, ut ipsam impedit a fugiat, recusandae, sint natus expedita sequi nisi vero. Harum cumque iusto numquam.",
        images: [losAngeles1, losAngeles2, losAngeles3],
      },
    ],
  },
];

export default data;
