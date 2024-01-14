document.getElementById('text-field').addEventListener('keyup', function(event){
    let text = event.target.value;
    console.log(text);
    if(text === 'hide'){
        document.getElementById('hide-btn').removeAttribute('disabled');
        document.getElementById('hide-btn').addEventListener('click', function(){
            document.getElementById('hide-h1').style.display = 'none';
        })
    }
    else{
        document.getElementById('hide-btn').setAttribute('disabled', true);
    }
})