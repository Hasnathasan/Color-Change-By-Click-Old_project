document.getElementById('submit-btn').addEventListener('click', function(){
    let inputArea = document.getElementById('textInput');
    let comment = inputArea.value;
    let commentBox = document.getElementById('comment-container');
    let p = document.createElement('p');
    p.innerText = comment;
    commentBox.appendChild(p);
    inputArea.value = '';
})