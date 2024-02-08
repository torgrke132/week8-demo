const userInput = document.querySelector('#userInput');
const numberOfPrints = document.querySelector('#numberOfPrints');
const btnPrint = document.querySelector('button');
const resultList = document.querySelector('#resultPrints');

btnPrint.addEventListener('click', () => {
    resultList.innerHTML = '';
    const userInputToPrint = userInput.value;
    const n = numberOfPrints.value;

    for(let i = 0; i < n; i++) {
        const newLi = document.createElement('li');
        newLi.innerText = userInputToPrint;
        resultList.appendChild(newLi);
    }
    
});
