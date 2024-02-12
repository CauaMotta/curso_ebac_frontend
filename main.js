const form = document.getElementsByTagName('form')[0];
const a = document.getElementById('numA');
const b = document.getElementById('numB');
const msg = document.getElementsByTagName('p')[0];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (a.value >= b.value) {
        msg.innerHTML = `Sua resposta está <b>inválida</b>, porque <b>A</b> é maior ou igual a <b>B</b>.`
        msg.style.display = 'block';
    } else {
        msg.innerHTML = `Sua resposta está <b>válida</b>, porque <b>A</b> é menor que <b>B</b>.`
        msg.style.display = 'block';
    }
    a.value = '';
    b.value = '';
})