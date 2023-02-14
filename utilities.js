
 function getvalueId(Idname,values){
  const quantity_value=document.getElementById(Idname).value;
  const price=quantity_value*values;
  const pricenumber=parseInt(price);
  return pricenumber;

 }
 function getinnerText(Idname1,addprice){
    document.getElementById(Idname1).innerText=addprice;
 }
 function getidnumber(takeid){
    const takenid=document.getElementById(takeid).innerText;
    const takenid_number=parseFloat(takenid);
    return takenid_number;
 }
 function totalvalue(){
    const total=getidnumber("chocolate")+getidnumber("rose")+getidnumber("diary");
 
  const total_value=  document.getElementById('total');
  total_value.innerText=total;
    
   
 }
 
