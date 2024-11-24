function mudoutamanho(){
    if (window.innerWidth >= 768){
        item.style.display = 'block'
    } else {
        item.style.display = 'none'
    }
}
function clickMenu(){
    if (item.style.display == 'block'){
        item.style.display = 'none'
    } else {
        item.style.display = 'block'
    }
}
