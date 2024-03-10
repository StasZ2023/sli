let block = [
    '1.jpg',
    '2.jpeg',
    '3.jpg',
    '4.jpg'
]
let blo = [
    'item',
    'ite',
    'it'
]
let btn = document.querySelectorAll('.button');
let img = document.querySelector('.full');
let bod = document.querySelector('body')
let photo = function(teg,src){
    teg.addEventListener('click', function(){
        img.src = src;
        // bod.classList.add('item')
        img.classList.add('ful')
    })
}
for(let i = 0; i < btn.length; i++){
    photo(btn[i],block[i])
    
}