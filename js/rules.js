const Back = document.getElementById('back');
const Popup = document.getElementById('popup');
const Rule = document.getElementById('rule');
const Exit = document.getElementById('exit');

Rule.addEventListener('click',()=>{
    Popup.className = "popup active"
    Back.className = "back active"
})

Exit.addEventListener('click',()=>{
    Popup.className = "popup"
    Back.className = "back"
})
