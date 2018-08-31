import NorthItalia from '../images/NorthItalia.png'
import AgoraChurrascaria from '../images/AgoraChurrascaria.png';
import DinTaiFung from '../images/DinTaiFung.png';
import H20PokeandGrill from '../images/H20PokeandGrill.png';
import HiroNori from '../images/HiroNori.png';
import PhoTasty from '../images/PhoTasty.png';
import Angelinas from '..images/Angelinas.png';
import ChaCha from '../images/ChaCha.png';
import Enoteca from '../images/Enoteca.png';
import haLong from '../images/haLong.png';
import LaSirena from '..images/LaSirena.png'
import Puesto from '..images/Puesto.png'
import Silvas from '..images/Silas.png'
import TexasDeBrazil from '..images/TexasDeBrazil.png'
import CAVA from '../images/CAVA.png';
import DonerG from '..images/DonerG.png';
import KebabShop from '../images/KebabShop.png';
import LunaGrill from '..images/LunaGrill.png';
import Aloha from '..images/Aloha.png';
import DaLuau from '..images/Daluau.png';
import LL from '..images/LL.png';
import ilFornaio from '..images/ilFornaio.png';


const Data = [
    {
        name: 'North Italia',
        ethnicity: 'Italian',
        genre: 'Pizza',
        budget: '$$',
        alcohol: 'yes',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: NorthItalia,
        link: 'https://www.yelp.com/biz/north-italia-irvine'
    },
    {
        name: 'HiroNori Craft Ramen',
        ethnicity: 'Japanese',
        genre: 'Ramen',
        budget: '$$',
        alcohol: 'yes',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: HiroNori,
        link: 'https://www.yelp.com/biz/hironori-craft-ramen-irvine'
    },
    {
        name: 'Agora Churrascaria',
        ethnicity: 'Brazilian',
        genre: 'Barbecue',
        budget: '$$$',
        alcohol: 'yes',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'no',
        photo: AgoraChurrascaria,
        link: 'https://www.yelp.com/biz/agora-churrascaria-irvine'
    },
    {
        name: 'H2O Poke & Grill',
        ethnicity: 'Hawaiian',
        genre: 'Poke',
        budget: '$',
        alcohol: 'no',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: H20PokeandGrill,
        link: 'https://www.yelp.com/biz/h2o-poke-and-grill-irvine'
    },
    {
        name: 'Din Tai Fung',
        ethnicity: 'Taiwanese',
        genre: 'Dim Sum',
        budget: '$$',
        alcohol: 'yes',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: DinTaiFung,
        link: 'https://www.yelp.com/biz/din-tai-fung-costa-mesa'
        
    },
    {
        name: 'Pho Tasty',
        ethnicity: 'Vietnamese',
        genre: 'Soup/Noodles',
        budget: '$',
        alcohol: 'no',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: PhoTasty,
        link: 'https://www.yelp.com/biz/pho-tasty-artesia?osq=pho+tasty'
    },
    {
        name: 'Ha Long Vietnamese',
        ethnicity: 'Vietnamese',
        genre: 'Soup/Noodles',
        budget: '$',
        alcohol: 'no',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: haLong,
        link: 'https://www.yelp.com/biz/ha-long-vietnamese-cuisine-irvine?osq=ha+long+vietnamese'
    },
    {
        name: 'Texas de Brazil',
        ethnicity: 'Brazilian',
        genre: 'Barbecue',
        budget: '$$',
        alcohol: 'yes',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'no',
        photo: TexasDeBrazil,
        link: 'https://www.yelp.com/biz/texas-de-brazil-irvine-5?osq=brazilian+food'
    },
    {
        name: 'Silva\'s Brazilian',
        ethnicity: 'Brazilian',
        genre: 'Barbecue',
        budget: '$$',
        alcohol: 'no',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'no',
        photo: Silvas,
        link: 'https://www.yelp.com/biz/silvas-brazilian-bar-and-grill-santa-ana?osq=brazilian+food'
    },
    {
        name: 'CUCINA enoteca',
        ethnicity: 'Italian',
        genre: 'Pizza',
        budget: '$$',
        alcohol: 'no',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: Enoteca,
        link: 'https://www.yelp.com/biz/cucina-enoteca-irvine-irvine-2?osq=italian'
    },
    {
        name: 'Angelina\'s Pizzeria',
        ethnicity: 'Italian',
        genre: 'Pizza',
        budget: '$$',
        alcohol: 'yes',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: Angelinas,
        link: 'https://www.yelp.com/biz/angelinas-pizzeria-napoletana-irvine-2'
    },
    {
        name: 'il Fornaio',
        ethnicity: 'Italian',
        genre: 'Pizza',
        budget: '$',
        alcohol: 'yes',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: ilFornaio,
        link: 'https://www.yelp.com/biz/il-fornaio-irvine?osq=italian'
    },
    {
        name: 'Puesto Los Olivos',
        ethnicity: 'Mexican',
        genre: 'Tacos',
        budget: '$$',
        alcohol: 'yes',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'no',
        photo: Puesto,
        link: 'https://www.yelp.com/biz/puesto-los-olivos-irvine-irvine-2?osq=Mexican+food'
    },
    {
        name: 'La Sirena Grill',
        ethnicity: 'Mexican',
        genre: 'Tacos',
        budget: '$',
        alcohol: 'yes',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: LaSirena,
        link: 'https://www.yelp.com/biz/la-sirena-grill-irvine-2?osq=Mexican+food'
    },
    {
        name: 'Cha Cha\'s Latin Kitchen',
        ethnicity: 'Mexican',
        genre: 'Tacos',
        budget: '$$',
        alcohol: 'yes',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: ChaCha,
        link: 'https://www.yelp.com/biz/cha-chas-latin-kitchen-irvine?osq=Mexican+food'
    },
    {
        name: 'CAVA',
        ethnicity: 'Mediterranean',
        genre: 'Gyros',
        budget: '$$',
        alcohol: 'no',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: CAVA,
        link: 'https://www.yelp.com/biz/cava-irvine?osq=Mediterranean+Food'
    },
    {
        name: 'The Kebab Shop',
        ethnicity: 'Mediterranean',
        genre: 'Kebabs',
        budget: '$$',
        alcohol: 'yes',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: KebabShop,
        link: 'https://www.yelp.com/biz/the-kebab-shop-irvine-3?osq=Mediterranean+Food'
    },
    {
        name: 'Luna Grill',
        ethnicity: 'Mediterranean',
        genre: 'Gyros',
        budget: '$$',
        alcohol: 'yes',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: LunaGrill,
        link: 'https://www.yelp.com/biz/luna-grill-westpark-irvine?osq=Mediterranean+Food'
    },
    {
        name: 'Doner G',
        ethnicity: 'Mediterranean',
        genre: 'Gyros',
        budget: '$',
        alcohol: 'no',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: DonerG,
        link: 'https://www.yelp.com/biz/donerg-turkish-and-mediterranean-grill-irvine-irvine?osq=Mediterranean+Food'
    },
    {
        name: 'Da Luau Hawaiian Grill',
        ethnicity: 'Hawaiian',
        genre: 'Breakfast/Brunch',
        budget: '$',
        alcohol: 'no',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: DaLuau,
        link: 'https://www.yelp.com/biz/da-luau-hawaiian-grill-irvine'
    },
    {
        name: 'Aloha Hawaiian BBQ',
        ethnicity: 'Hawaiian',
        genre: 'Kalbi',
        budget: '$',
        alcohol: 'no',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: Aloha,
        link: 'https://www.yelp.com/biz/aloha-hawaiian-bbq-tustin?osq=hawaiian+food'
    },
    {
        name: 'L&L Hawaiian BBQ',
        ethnicity: 'Hawaiian',
        genre: 'Kalbi',
        budget: '$',
        alcohol: 'no',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'yes',
        photo: LL,
        link: 'https://www.yelp.com/biz/l-and-l-hawaiian-barbecue-irvine?osq=hawaiian+food'
    },
    
    
]

export default Data;