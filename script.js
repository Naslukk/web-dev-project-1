var items = document.querySelectorAll(".item")
var curentId

for (let i = 0; i < items.length; i++) {
    if(document.getElementById(i).className.match("active")){
        curentId = i;
    };
    items[i].addEventListener('click',()=>{
        document.getElementById(curentId).classList.remove("active");
        document.getElementById(i).classList.add('active');
        curentId =i;
    })
}

