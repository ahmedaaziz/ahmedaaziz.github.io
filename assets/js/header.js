window.onload = function () { 
let header = document.getElementById('headerComponent');
let sticky = window.pageYOffset;

if(window.pageYOffset > sticky ){
    header.classList.add('sticky');
  // console.log(sticky,'sticky');
} else {
//   header.classList.remove('sticky');
  // console.log(sticky,'sticky');

}
};