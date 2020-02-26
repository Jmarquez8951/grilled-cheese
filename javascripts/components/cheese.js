import util from '../helpers/util.js';
import cheeseData from '../helpers/data/cheeseData.js';

const addCheese = (e) => {
    const cheeseId = e.target.id;
    cheeseData.setCheese(cheeseId);
};

const buttonEvents = () => {
    const cheeseButtons = document.getElementsByClassName('cheeseButtons');
    for (let i = 0; i < cheeseButtons.length; i++){
        cheeseButtons[i].addEventListener('click', addCheese);
    }
};

const makeCheeseSection = () => {
    const cheeses = cheeseData.getCheese();
    let domString = '';

    cheeses.forEach((cheese) => {
        domString += `
        <button id="${cheese.id}" type="button" class="btn btn-dark cheeseButtons">${cheese.type}</button>`
    })

    util.printToDom('cheese-container', domString);
    buttonEvents();
};

export default {makeCheeseSection};