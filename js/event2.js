function changeText(){
    const changedText = document.getElementById('h1-text');
    changedText.innerText = 'Hi Css';
}

document.getElementById('change2').addEventListener('click', function (){
    const changedText = document.getElementById('h1-text');
    changedText.innerText = 'Changed by add Event Listener';
})


document.getElementById('update-btn').addEventListener('click', function(){
    let inputText = document.getElementById('input-value');
    let value = inputText.value;
    console.log(value);
    let pText = document.getElementById('p-text');
    pText.innerText = value;
    inputText.value = '';
})