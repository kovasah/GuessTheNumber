
const btn = document.querySelector('button')

function rand25() {
    return Math.floor((Math.random() * 25) + 1);
}

btn.addEventListener("click" ,() => {
    const input = document.getElementById('input');
    let inputNumber = Number(input.value);
    console.log(inputNumber);
    let randNumber = rand25();

    if (inputNumber != randNumber) {
    alert(`Bummer... You guessed ${inputNumber} and the secret number was ${randNumber}`)
} else {
    alert(`You number ${inputNumber} was correct. You can be named many things, hungry not being one of them.`)
}
});

