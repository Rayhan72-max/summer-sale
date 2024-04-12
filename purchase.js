
document.getElementById("prod1").addEventListener('click',function(){
    listMaker("first-product","fp-price","pricing");
})
document.getElementById("prod2").addEventListener('click',function(){
    listMaker("second-product","sp-price","pricing");
})
document.getElementById("prod3").addEventListener('click',function(){
    listMaker("third-product","tp-price","pricing");
})
 function listMaker(cardName,cardPrice,oldCardPrice){
  const productName = document.getElementById(cardName).innerText;
  const textOldProductPrice= document.getElementById(oldCardPrice).innerText;
  const numberOldProductPrice = parseFloat(textOldProductPrice);
  const textProductPrice = document.getElementById(cardPrice).innerText;
  const numberProductPrice = parseFloat(textProductPrice);
  const totalProductPrice = numberOldProductPrice+numberProductPrice;
  console.log(totalProductPrice);
   const newName = document.getElementById("item-list").appendChild(document.createElement("li"));
    newName.innerText = productName;
   document.getElementById("pricing").innerText = totalProductPrice;
  if(totalProductPrice>=200){
    document.getElementById("coupon-btn").removeAttribute('disabled');
    const discountPrice = totalProductPrice*0.4;
    document.getElementById("discount").innerText = discountPrice;
    }
  
}






