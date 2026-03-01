const FoodJournal = new URL('../assets/FoodJournal.jpeg', import.meta.url).href;
const homeDrinkMe = new URL('../assets/homeDrinkMe.jpg', import.meta.url).href;
const LoadingTightKnit = new URL('../assets/LoadingTightKnit.jpg', import.meta.url).href;
const VrProject = new URL('../assets/Vr-Project.jpeg', import.meta.url).href;

//screen case syntax upper case letters
const PROJECTS=[
{
    id: 1,
    title: 'Food Journal Web Application',
    description: 'Project food journal I helped built, which I was apart of the designing and devloping the front end portions of the web application.',
    link:'https://cse110-fa22-group29.github.io/cse110-fa22-group29/',
    image: FoodJournal,
    route: '/projects/food-journal'
},
{
    id:2,
    title: 'F.I.R.E Reading Experience',
    description: 'Project virtual reality experience, in which I handled the front end portion of the application.',
    link: 'https://docs.google.com/document/d/1IfdCnGKUj9x1eCp7lTwUJd2oKcRsti3u8fvsi-5Hb1g/edit?usp=sharing',
    image: VrProject,
    route: '/projects/fire-reading'
},
{
    id:3,
    title: 'DrinkMe Office Coffee Dispenser',
    description: 'Project coffee dispenser, where I designed the button layout and interactble portions of the design.',
    link: 'https://www.figma.com/proto/vUPWRBNjob3mVHMEOkGswM/Kiosk-Project?node-id=84%3A514&starting-point-node-id=84%3A514',
    image: homeDrinkMe,
    route: '/projects/drinkme'
},
{
    id:4,
    title: 'Tightknit',
    description:'Project app designed in Figma, I helped design some button layout.',
    link: 'https://www.figma.com/proto/SW0OxvHPTsb6BoqLWaIOtB/TightKnit-Prototyping?node-id=382%3A867&starting-point-node-id=417%3A717',
    image: LoadingTightKnit,
    route: '/projects/tightknit'
}
];

export default PROJECTS;
