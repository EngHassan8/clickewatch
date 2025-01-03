let heading = document.querySelector("#tiro")
let button1 = document.querySelector("#btnincreament")
let button2 = document.querySelector("#btnReset")
let button3 = document.querySelector ("#btn")


let value = 0

  
button1.addEventListener("click", function(){
   value= 0
   heading.innerHTML =value
})

button3.addEventListener("click", function(){
   value++
   heading.innerHTML =value
})
button2.addEventListener("click", function(){
   value= 
   heading.innerHTML = value
   heading.style.backgroundColor =" blue"
  
     
  
 
})





















// button1.addEventListener("click",function(){
//    value++
//    heading.innerHTML = value
//    if( value == 10  ){
//        document.body.style.backgroundColor = "red"
    
//    }
//    else if ( value == 1) {
//       document.body.style.backgroundColor = "red"
//    }
//    else if ( value == 2) {
//       document.body.style.backgroundColor =" blue"
//    }
//    else if ( value ==3) {
//       document.body.style.backgroundColor ="yellow"
//    }
//    else if ( value == 4) {
//       document.body.style. backgroundColor = " green"
//    }
   
//    else if ( value == 5 ) {
//       document.body.style.backgroundColor ="orange"
//    }
//    else{
//    document.body.style.backgroundColor = "transparent"
//    }
   
// })












 //  button2.addEventListener("click", function(){
//     value = 0
//     heading.innerHTML= value
//     if( value == 10  ){
//         document.body.style.backgroundColor = "red"
     
//     }
//     else if ( value == 1) {
//        heading.style.backgroundColor = "red"
//     }
//     else if ( value == 2) {
//        heading.style.backgroundColor =" blue"
       
//     }
//     else if ( value ==3) {
//        heading.style.backgroundColor =" yellow"
//     }
//     else if ( value == 4) {
//       heading.style.backgroundColo = " green"
//     }
    
//     else if ( value == 5 ) {
//       heading.style.backgroundColor ="orange"
//     }
//     else{
//     document.body.style.backgroundColor = "transparent"
//     }

//  }
