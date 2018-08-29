import React from 'react';

// data[selected-index].ethnicity === 'Italian'
// ethnicity value = Mexican
// genre value = pizza
// budget value = $
// distance value = > 20

// let filteredData = data.filter(x => x.ethnicity === 'Italian' && x.genre === )
// and then call random on the new array

// const newData = []

// data.filter (x => x.ethnicity === "italian")

// const newData = [
//     {
//         name: 'North Italia',
//         Ethnicity: 'Italian',
//         Genre: 'Pizza',
//         Budget: '$$',
//         Alcohol: true,
//         Distance: '3.3 miles',
//         Attire: 'Casual'
//     }
// ]

// Math.random(math.floor(newData) * newData.length)


const Data = [
    {
        name: 'North Italia',
        ethnicity: 'Italian',
        genre: 'Pizza',
        budget: '$$',
        alcohol: true,
        distance: '3.3 miles',
        attire: 'Casual',
        dineIn: true,
        takeOut: true,
        alcohol: true

    },
    {
        name: 'HiroNori Craft Ramen',
        ethnicity: 'Japanese',
        genre: 'Ramen',
        budget: '$$',
        alcohol: true,
        distance: '2.6 miles',
        attire: 'Casual',
        dineIn: true,
        takeOut: false,
        alcohol: true
    },
    {
        name: 'Agora Churrascaria',
        ethnicity: 'Brazilian',
        genre: 'Steak, Barbecue',
        budget: '$$$',
        alcohol: true,
        distance: '2.1 miles',
        attire: 'Casual',
        dineIn: true,
        takeOut: false,
        alcohol: true
    },
    {
        name: 'H2O Poke & Grill',
        ethnicity: 'Hawaiian, Japanese',
        genre: 'Poke',
        budget: '$',
        alcohol: false,
        distance: '5.1 miles',
        attire: 'Casual',
        dineIn: true,
        takeOut: true,
        alcohol: false,
    },
    {
        name: 'Din Tai Fung',
        ethnicity: 'Taiwanese',
        genre: 'Dim Sum',
        budget: '$$',
        alcohol: true,
        distance: '3.5 miles',
        attire: 'Casual',
        dineIn: true,
        takeOut: true,
        alcohol: true,
        
    },
    {
        name: 'Pho Tasty',
        ethnicity: 'Vietnamese',
        genre: 'Soup, Noodles',
        budget: '$',
        alcohol: false,
        distance: '23.4 miles',
        attire: 'Casual',
        dineIn: true,
        takeOut: true,
        alcohol: false
    }
]

export default Data