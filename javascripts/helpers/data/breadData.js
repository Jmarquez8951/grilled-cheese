const bread = [
    {
        type: 'Wheat Bread',
        color: '',
        price: 1,
        id: 'wheat'
    },
    {
        type: 'Rye Bread',
        color: 'dark brown',
        price: 1,
        id: 'rye'
    },
    {
        type: 'White Bread',
        color: 'White',
        price: 1,
        id: 'white'
    }
];

let selectedBreadId = '';

const setSelectedBread = (breadId) => {
    selectedBreadId = breadId;
    console.log('selected bread', selectedBreadId);
}

const getBread = () => {
    return bread;
};

export default {getBread, setSelectedBread};