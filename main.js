let imgList = Array.from(document.querySelectorAll(".item img"));
let boxContainer = document.querySelector('.box-container')
let boxItem = document.querySelector('.box-item')
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let closeBtn = document.getElementById('closeBtn');
let index;




for (let i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener('click', function (e) {

        boxContainer.classList.remove('d-none');
        let imgSrc = e.target.getAttribute('src');
        index = imgList.indexOf(e.target);
        boxItem.style.backgroundImage = `url(${imgSrc})`

    })
}




function nextImge() {
    index++;
    if (index > imgList.length - 1) {
        index = 0
    }
    let imgSrc = imgList[index].getAttribute('src');

    boxItem.style.backgroundImage = `url(${imgSrc})`

}

function prevImage() {
    index--;
    if (index < 0) {
        index = imgList.length - 1
    }
    let imgSrc = imgList[index].getAttribute('src');

    boxItem.style.backgroundImage = `url(${imgSrc})`

}


function closeFun() {
    boxContainer.classList.add('d-none');

}



next.addEventListener('click', nextImge)
prev.addEventListener('click', prevImage)
closeBtn.addEventListener('click', closeFun)



document.addEventListener('keyup',function(e){
    if(e.code=="ArrowRight"){
        nextImge()
    }
    else if(e.code=="ArrowLeft"){
        prevImage()
    }
    else if(e.code=="Escape"){
        closeFun()
    }
})
boxContainer.addEventListener('click',function(e){
    if(e.target.getAttribute('id')=="booox"){
        closeFun()
    }
})