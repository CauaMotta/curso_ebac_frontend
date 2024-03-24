document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-sorteador').addEventListener('submit', (e) => {
        e.preventDefault();
        let numMax = document.getElementById('num-max').value;
        numMax = parseInt(numMax);

        let numRandom = Math.random() * numMax;
        numRandom = Math.floor(numRandom) + 1;

        document.getElementById('resultado-valor').innerText = numRandom;
        document.querySelector('.resultado').style.display = 'block';
    })
})