let i = 1
document.getElementById("bars").addEventListener("click", ()=>{
    i++ 
        
    if(i % 2 == 0){
        document.getElementById("list").classList.remove("list-close")
        document.getElementById("list").classList.add("list-open")  

        document.getElementById('header')
    } else {
        document.getElementById("list").classList.remove("list-open")
        document.getElementById("list").classList.add("list-close")
    }


})

document.getElementById("v1").addEventListener("click", ()=>{
    i++
        document.getElementById("list").classList.remove("list-open")
        document.getElementById("list").classList.add("list-close")
})

document.getElementById("v2").addEventListener("click", ()=>{
    i++
        document.getElementById("list").classList.remove("list-open")
        document.getElementById("list").classList.add("list-close")
})

document.getElementById("v3").addEventListener("click", ()=>{
    i++
        document.getElementById("list").classList.remove("list-open")
        document.getElementById("list").classList.add("list-close")
})

document.getElementById("v4").addEventListener("click", ()=>{
    i++
        document.getElementById("list").classList.remove("list-open")
        document.getElementById("list").classList.add("list-close")
})

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 500){
        document.getElementById("navS").classList.add("nav-custom-scroll")
    } else {
        document.getElementById("navS").classList.remove("nav-custom-scroll")
    }

    if(window.pageYOffset > 500 && window.pageYOffset < 1000 ){
        document.getElementById("left").classList.add("mireasa-after")
        document.getElementById("right").classList.add("mire-after")
    } else{

        document.getElementById("left").classList.remove("mireasa-after")
        document.getElementById("right").classList.remove("mire-after")

    }
    
})

window.addEventListener("load", ()=>{
    setTimeout(()=>{
        document.getElementById("mainI").classList.remove("main-ins")
        document.getElementById("mainI").classList.add("main-ins-after")
        
        document.getElementById("secondI").classList.add("second-ins-after")
        document.getElementById("secondI").classList.remove("second-ins")
    },1000)
})