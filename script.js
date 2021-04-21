//         // smartPhone event handler..

// var smartphonePlus=  document.getElementById("case-increase");
// smartphonePlus.addEventListener('click',function(){
//     handleProductChangeCase(true);
//     // const caseCount =document.getElementById("case-count");
//     // const caseNumber=parseInt(caseCount.value);
//     // const caseNewCount=caseNumber+1;
//     //    caseCount.value=caseNewCount;

//     //  const caseTotalPlus= caseNewCount*59;
//     //  document.getElementById('case-total').innerText= '$'+ caseTotalPlus;
   
    

      
// })

// // minus event handler..

// var smartphoneMinus=document.getElementById("case-decrease");
// smartphoneMinus.addEventListener('click',function(){

//     handleProductChangeCase(false);
// //    const caseDecreaseCount=document.getElementById("case-count");
// //    const caseDecreaseNumber=parseInt(caseDecreaseCount.value);
// //    const caseDecreaseNewCount=caseDecreaseNumber-1;
// //     caseDecreaseCount.value=caseDecreaseNewCount;

    
// //     const caseTotalMinus=caseDecreaseNewCount*59;

// //     document.getElementById("case-total").innerText='$'+ caseTotalMinus;
// })

// function handleProductChangeCase(isIncreaseCase){
//     const caseCount=document.getElementById("case-count");
//     const caseNumber=parseInt(caseCount.value);
//     // const caseDecreaseNewCount=caseDecreaseNumber-1;
//     let caseNewCount=caseNumber;
//     if(isIncreaseCase==true){
//              caseNewCount=caseNumber+1;
//     }

//     else if(isIncreaseCase==false && caseNumber>0){
//         caseNewCount=caseNumber-1;
//     }
//     caseCount.value=caseNewCount;
 
     
//      const caseTotal=caseNewCount*59;
 
//      document.getElementById("case-total").innerText='$'+ caseTotal;
// }

// //  iPhone event handler..

// var iPhonePlus=document.getElementById('phone-increase');

// iPhonePlus.addEventListener('click',function(){
//     handleProductChangePhone(true);
//     // const phoneCount=document.getElementById('phone-count');
//     //  const phoneCountNumber=parseInt(phoneCount.value);
//     //  const phoneNewCount=phoneCountNumber+1;

//     //  phoneCount.value=phoneNewCount;

//     //  const phoneTotalPlus=phoneCountNumber*1219;

//     //  document.getElementById('phone-total').innerText='$'+ phoneTotalPlus;
// })

// //  Minus event handler..

// var iPhoneMinus=document.getElementById('phone-decrease');

// iPhoneMinus.addEventListener('click',function(){
//     handleProductChangePhone(false);
// //    const PhoneDecreaseCount=document.getElementById('phone-count');
// //    const PhoneDecreaseNumber=parseInt( PhoneDecreaseCount.value);
// //    const phoneDecreaseNewCount=PhoneDecreaseNumber-1;
// //    PhoneDecreaseCount.value=phoneDecreaseNewCount;

// //    const phoneTotalMinus=phoneDecreaseNewCount*'$'+1219;
// //    document.getElementById('phone-total').innerText='$'+ phoneTotalMinus;
// })


// function handleProductChangePhone(isIncreasePhone){
//     const phoneCount=document.getElementById("phone-count");
//     const phoneNumber=parseInt(phoneCount.value);
//     // const caseDecreaseNewCount=caseDecreaseNumber-1;
//     let phoneNewCount=phoneNumber;
//     if(isIncreasePhone==true){
//         phoneNewCount=phoneNumber+1;
//     }

//     else if(isIncreaseCase==false && phoneNumber>0){
//         phoneNewCount=phoneNumber-1;
//     }
//     phoneCount.value=phoneNewCount;
 
     
//      const phoneTotal= phoneNewCount*59;
 
//      document.getElementById("case-total").innerText='$'+ caseTotal;
// }


// // function handleProductChangePhone(isIncreasePhone){

// //     const phoneCount=document.getElementById('phone-count');
// //      const phoneCountNumber=parseInt(phoneCount.value);
// //     //  const phoneNewCount=phoneCountNumber+1;
// //     let  phoneNewCount=phoneCountNumber;

// //     if(isIncreasePhone==true){
// //         phoneNewCount=phoneCountNumber+1;
// //     }
// //     else if(isIncreasePhone==false && phoneCountNumber>0){
// //         phoneNewCount=phoneCountNumber-1;
// //     }

// //      phoneCount.value=phoneNewCount;

// //      const phoneTotal=phoneCountNumber*1219;

// //      document.getElementById('phone-total').innerText='$'+ phoneTotal;
// // }


        // optimize code...

function handleProductChange(product,isIncreasePhone){

    // const phoneCount=document.getElementById(product+'-count');
    //  const phoneCountNumber=parseInt(phoneCount.value);
    //  const phoneNewCount=phoneCountNumber+1;
    const phoneCountNumber=getInputValue(product);
  
    let  phoneNewCount=phoneCountNumber;

    if(isIncreasePhone==true){
        phoneNewCount=phoneCountNumber+1;
    }
    else if(isIncreasePhone==false && phoneCountNumber>0){
        phoneNewCount=phoneCountNumber-1;
    }
    document.getElementById(product + '-count').value = phoneNewCount;
    let productTotal = 0;

    if (product == 'phone') {
        productTotal = phoneNewCount * 1219;
    }
    else if (product == 'case') {
        productTotal = phoneNewCount * 59;
    }

    //  phoneCount.value=phoneNewCount;

    //  const phoneTotal=phoneNewCount*1219;

     document.getElementById(product+'-total').innerText='$'+ productTotal;
     calculateTotal();
}

function calculateTotal(){
    // const phoneInput = document.getElementById('phone-count');
    // const phoneCount=parseInt(phoneInput.value);

    // const caseInput = document.getElementById('case-count');
    // const caseCount=parseInt(caseInput.value);
  
    const phoneCount=getInputValue('phone');
    const caseCount=getInputValue('case');

   const totalPrice=phoneCount * 1219 + caseCount * 59;
   document.getElementById('total-price').innerText='$'+ totalPrice;

   const tax= Math.round(totalPrice * 0.1);
  document.getElementById('tax-amount').innerText='$'+ tax;

  const grandTotal= totalPrice + tax;
  document.getElementById('grand-total').innerText='$'+ grandTotal;

}

function getInputValue(product){
  
    const productInput = document.getElementById(product+'-count');
    const productCount=parseInt(productInput.value);
    return productCount;
     
}
