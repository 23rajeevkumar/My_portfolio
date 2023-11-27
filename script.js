let h=document.querySelector(".ham");
let c=document.querySelector(".cancel");
let list=document.querySelector("ul");

h.addEventListener("click",function(){
        list.style.right = "0px" ;
        h.style.display = "none" ;
        c.style.display = "block" ;  
})

c.addEventListener("click",function(){
    list.style.right = "-100%" ;
    c.style.display = "none" ;
    h.style.display = "block" ;
})