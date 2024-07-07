import { Images } from "../images"

export const NavList = [
  { 
    id: 1, 
    title: 'О нас',
    path: '/about/'
  },
  {
    id: 2, 
    title: 'Стеки',
    path: '/stacks/'
  },
  {
    id: 3, 
    title: 'Портфолио',
    path: '/portfolio/'
  }
]


export const Portfolio = [
  {
    id: 1, 
    title: 'TechnoFoods',
    image: Images.TechnoFoods,
    image2: Images.TechnoFoods1 ,
    stacks: [
      'Design',
      'Frontend',
      'Backend'
    ],
    link: 'https://technofoods.kg'
  },
  {
    id: 2, 
    title: 'Turkmed',
    image: Images.Turkmed,
    image2: Images.Turkmed1 ,
    stacks: [
      'Frontend',
      'Backend'
    ],
    link: 'https://turkmed-web.netlify.app/'
  },
  {
    id: 3, 
    title: 'Kelvin',
    image: Images.Kelvin,
    image2: Images.Kelvin1  ,
    stacks: [
      'Design',
      'Frontend',
      'Backend'
    ],
    link: 'https://kelvin-store.netlify.app/'
  },
  {
    id: 4, 
    title: 'GSR',
    image: Images.GSR,
    image2: Images.GSR1 ,
    stacks: [
      'Design',
      'Frontend',
    ],
    link: ''
  },
  {
    id: 5, 
    title: 'ВШМОП',
    image: Images.VSHMOP,
    image2: Images.VSHMOP1  ,
    stacks: [
      'Design',
      'Frontend',
    ],
    link: ''
  },
  {
    id: 6, 
    title: 'Finprogress',
    image: Images.Finprogress,
    image2: Images.Finprogress1 ,
    stacks: [
      'Frontend'
    ],
    link: 'https://finprogress.netlify.app/'
  },
  {
    id: 7, 
    title: 'CityFish',
    image: Images.Cityfish,
    image2: Images.Cityfish1  ,
    stacks: [
      'Design',
      'Frontend',
      'Backend'
    ],
    link: 'https://cityfishh.ru/'
  },
  {
    id: 8, 
    title: 'CityFish - Admin',
    image: Images.CityfishAdmin,
    image2: Images.CityfishAdmin1 ,
    stacks: [
      'Frontend',
      'Backend'
    ],
    link: ''
  },
  {
    id: 9, 
    title: 'До границы',
    image: Images.DoGranicy,
    image2: Images.DoGranicy1 ,
    stacks: [
      'Frontend',
      'Backend'
    ],
    link: 'https://do-granicy.ru/'
  },
  {
    id: 10, 
    title: 'Amway',
    image: Images.Amway,
    image2: Images.Amway1 ,
    stacks: [
      'Frontend',
      'Backend' 
    ],
    link: 'https://amway-site.netlify.app/'
  },
]