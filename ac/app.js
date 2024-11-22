// let smallimg=document.getElementsByClassName("oldImg");
// for(let i=0;i<smallimg.length;i++)
// {

//   smallimg[i].src="assets/spiderman_img.png";
//   console.log(`value of img no ${i} changed`);

// }
// let list=document.querySelectorAll(".box a")
// // for(let i=0;i<list.length;i++)
// // {
// //   list[i].style.color='red';
// // }
// for(link of list)
// {
//   link.style.color='red',link.style.fontFamily='cursive';
// }
 

//    addEventListeners
let btn =document.querySelector("button");

let   count = ()=>
{
   console.log("Button was clicked");
}
let txt = ()=>
   {
      console.log("txt message");
   }

btn.addEventListener("click",txt)



