function dis(n){

   const a = document.getElementById("display");
   
   a.value += n;

}
function clr(){
   const a = document.getElementById("display");
  a.value = '0' ;

}
function calci(){
   
   document.getElementById("display").value = eval( document.getElementById("display").value);
   
}
function del(){
    document.getElementById("display").value = document.getElementById("display").value.slice(0,-1);
}
function modulus(){
   const a = document.getElementById("display");
   a.value = a.value/100;

}

