const input = document.querySelector('.input');
const output = document.querySelector('.output');
const decode = document.querySelector('.decode');
const reset = document.querySelector('.reset');

decode.addEventListener('click', () => {
    output.value = decodeURIComponent(input.value);
});

reset.addEventListener('click', () => {
    output.value = '';
    input.value = '';
});