document.getElementById('btn-hover').addEventListener('blur', function(){
    console.log('Hi there');
})
document.getElementById('textArea').addEventListener('mouseleave', function(event){
    console.log(event.target.value);
})