const text = document.querySelector("#text-box");
const inputs=document.querySelectorAll('.btn');
const clear = document.querySelector(".clear");
let ans="";
clear.addEventListener('click', function () {
    text.value = "0";
    ans = "";
 });
inputs.forEach(function (input){
input.addEventListener('click',function (i){
    const inp=i.target.value;
   if(inp==''){
    try{ ans=eval(ans);
        text.value=ans;
        ans='';
   } catch(error){
    text.value='--ERROR--';
    ans='';

   }
   }
   else if(inp=='c'){
    text.value=0;
    ans="";
   }
   else{
    ans=ans+inp;
    text.value=ans;
   }
});
});


