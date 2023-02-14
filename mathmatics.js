document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
  const choclate_price=getvalueId("kitkat-quantity",200)
    if(isNaN(choclate_price)){
     alert("please enter number");
     return;
    }
    else{
     getinnerText("chocolate",choclate_price);
      

    }
    totalvalue();
    document.getElementById('kitkat-quantity').value="";
 });
//rose
 document.getElementById('rose-buy-btn').addEventListener('click',function(){
    const rose_price=getvalueId("rose-quantity",100)
      if(isNaN(rose_price)){
       alert("please enter number");
       return;
      }
      else{
         getinnerText("rose",rose_price);
  
      }
      totalvalue();
      document.getElementById('rose-quantity').value="";
   });
//diary

document.getElementById('diary-buy-btn').addEventListener('click',function(){
    const diary_price=getvalueId("diary-quantity",100)
      if(isNaN(diary_price)){
       alert("please enter number");
       return;
      }
      else{
         getinnerText("diary",diary_price);
  
      }
      totalvalue();
      document.getElementById('diary-quantity').value="";
   });



document.getElementById('apply_btn').addEventListener('click',function(){
    const promo_code=document.getElementById("promo-code").value;
    // const promo_code_number=parseInt(promo_code);
    const promo=promo_code;
    // if(isNaN(promo_code_number)){
        const totalnumber=getidnumber("chocolate")+getidnumber("rose")+getidnumber("diary");

    // }
    if((promo==101)&&(promo!=NaN) ){
     const discount_value=totalnumber-(totalnumber*0.1);
     document.getElementById('all-total').innerText=discount_value;
    }
    else{
        alert("You have entered a wrong promocode");
    }
   
});
document.getElementById("promo-code").value="";
// //shopping with badget
// // document.getElementById('promo-code').addEventListener('focus',function(){
// //    const badget=document.getElementById('badget').value;
// //    const badgetnumber=parseInt(badget);
// //    if(badgetnumber<totalnumber_convert){
// //      alert("You have not enough money");
// //    }
   
   
// })

