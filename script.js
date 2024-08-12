const items = document.querySelectorAll(".item");
const menu = document.querySelectorAll(".menu");
const overlays = document.querySelectorAll(".overlay");

const expand = (item, i)=> { 
    let overlay = item.childNodes[1];
    let menu = item.childNodes[3];

    items.forEach((it,ind) => {
        if(i===ind) return;
        it.clicked = false;
    });

    //item 
    gsap.killweensOf(items);
    gsap.to(items,{
        width : item.clicked ? "10vw" : "8vw",
        duration : 2,
        ease : "elastic(1, .6)"
    });
    gsap.killweensOf(item);
    item.clicked = !item.clicked;
    gsap.to(item, { 
        width : item.clicked ? "25vw" : "10vw",
        duration : 2.5,
        ease : "elastic(1, .3)"
    })
}

items.forEach((item,i )=> {
    item.clicked = false;
    item.childNodes[1].clicked = false;
    item.childNodes[3].clicked = false;

    item.addEventListener("click",() => expand(item,i));
    
});