const cheese = [
    {
        type: 'Cheddar',
        color: '#fd941f',
        price: 1,
        id: 'cheese1'
    },
    {
        type: 'Pepper Jack',
        color: '#fd941f',
        price: 1,
        id: 'cheese2'
    },
    {
        type: 'Provolone',
        color: '#fd941f',
        price: 1,
        id: 'cheese3'
    },
    {
        type: 'Blue',
        color: '#fd941f',
        price: 1,
        id: 'cheese4'
    }
];

let selectedCheeseId = [];

const setCheese = (cheeseId) => {
    const foundCheese = cheese.find((x) => x.id === cheeseId);
    selectedCheeseId.push(foundCheese);
    console.log(selectedCheeseId);
};

const getCheese = () => {
    return cheese;
};

const getSelectedCheeses = () => {
    return selectedCheeseId;
}

export default {getCheese, setCheese, getSelectedCheeses};