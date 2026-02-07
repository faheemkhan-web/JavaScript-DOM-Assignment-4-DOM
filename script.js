            // Task 01
let buttton = document.getElementsByClassName("button01")[0];
let paragraph = document.querySelector("p");

buttton.addEventListener("click",()=> {
    paragraph.classList.add("highlights")
});

            // Task 02
let buttton2 = document.getElementsByClassName("button02")[0];            

buttton2.addEventListener("click",()=> {
    paragraph.classList.remove("highlights")
});            

//  Task 03

let buttton3 = document.getElementsByClassName("button03")[0];
buttton3.addEventListener("click",()=> {
    paragraph.classList.toggle("highlights")
});

//  Task 04
let buttton4 = document.getElementsByClassName("button04")[0];

buttton4.addEventListener("click",()=> {

    if (paragraph.classList.contains("highlights")) {
        alert("paragraph has a class");
    }else {alert("paragraph has no class");
    }
});

            //  task 05
let buttton5 = document.getElementsByClassName("button05")[0];
buttton5.addEventListener("click",()=> {
    buttton5.classList.toggle("active_btn")
});

// Task 06

let buttton6 = document.getElementsByClassName("button06")[0];
let body = document.getElementsByTagName("body")[0];
buttton6.addEventListener("click",()=> {
    body.classList.toggle("dark_mode")
});



