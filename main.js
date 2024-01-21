const list1 = document.querySelectorAll('.species')
for (let i = 0; i < list1.length; i++){
    list1[i].addEventListener('click', ()=>{
        list1[i].style.textDecoration = "line-through"
    })
}

const list2 = document.querySelectorAll('.speciesFade')
for (let i = 0; i < list2.length; i++){
    list2[i].addEventListener('click', ()=>{
        list2[i].style.opacity = "50%"
    })
}

const listImage = document.querySelectorAll('.images')
for (let i = 0; i < listImage.length; i++){
    listImage[i].addEventListener('click', ()=>{
        listImage[i].style.display = "none"
    })
}

document.querySelector("#destroy-all").addEventListener('click', ()=>{
    for(let i = 0; i < list1.length; i++){
        list1[i].style.textDecoration = "line-through"
    }
    for(let i = 0; i < list2.length; i++){
        list2[i].style.opacity = "50%"
    }
    for(let i = 0; i < listImage.length; i++){
        listImage[i].style.display = "none"
    }
})
