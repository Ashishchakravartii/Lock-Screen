let time = document.querySelector(".time");
let date = document.querySelector(".date");

setInterval(() => {
    let currentTime = new Date().toLocaleTimeString();
    time.innerHTML = `${currentTime}`
}, 1000);

let scrollFeature = document.querySelector(".scroll");

document.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        // scrollFeature.style.top= -100;
        scrollFeature.style.top = '-1000px';

    }
})

 let form = document.querySelector("form");

 form.addEventListener("submit",(event)=>{
    event.preventDefault();
     const[password]=event.target;
     if(password.value==123){
        let passScreen= document.querySelector(".Pass-screen");
        passScreen.style.top="-1000px"
     }else{
        let h5= document.querySelector(".form-h5");
        h5.innerHTML=("Wrong input. Try again");
     }
 })


// --------------------------logic for password--------------------------


// // const form = document.querySelector("form");

// // form.addEventListener("submit", (event) => {
// //     event.preventDefault();
// //     const [name, email] = event.target;
// //     const user = {
// //         name: name.value,
// //         email: email.value,
// //     };
// //     console.log(user)


// // })