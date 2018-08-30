import React from 'react';
import NorthItalia from '../NorthItalia.png'
import AgoraChurrascaria from '../AgoraChurrascaria.png';
import DinTaiFung from '../DinTaiFung.png';
import H20PokeandGrill from '../H20PokeandGrill.png';
import HiroNori from '../HiroNori.png';
import PhoTasty from '../PhoTasty.png';


const Data = [
    {
        name: 'North Italia',
        ethnicity: 'Italian',
        genre: 'Pizza',
        budget: '$$',
        alcohol: 'true',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'take-out',
        photo: <img src={NorthItalia}/>
    },
    {
        name: 'HiroNori Craft Ramen',
        ethnicity: 'Japanese',
        genre: 'Ramen',
        budget: '$$',
        alcohol: 'true',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'take-out',
        photo: <img src={HiroNori}/>
    },
    {
        name: 'Agora Churrascaria',
        ethnicity: 'Brazilian',
        genre: 'Barbecue',
        budget: '$$$',
        alcohol: 'true',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'take-out',
        photo: <img src={AgoraChurrascaria}/>
    },
    {
        name: 'H2O Poke & Grill',
        ethnicity: 'Hawaiian',
        genre: 'Poke',
        budget: '$',
        alcohol: 'false',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'take-out',
        photo: <img src={H20PokeandGrill}/>
    },
    {
        name: 'Din Tai Fung',
        ethnicity: 'Taiwanese',
        genre: 'Dim Sum',
        budget: '$$',
        alcohol: 'true',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'take-out',
        photo: <img src={DinTaiFung}/>
        
    },
    {
        name: 'Pho Tasty',
        ethnicity: 'Vietnamese',
        genre: 'Soup/Noodles',
        budget: '$',
        alcohol: 'false',
        attire: 'Casual',
        dineIn: 'dine-in',
        takeOut: 'take-out',
        photo: <img src={PhoTasty}/>
    }
]

export default Data;