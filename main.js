const counter=document.getElementById('counter');
const butonPlus=document.getElementById('plus');
const butonMinus=document.getElementById('minus');
let counterValue=0;
const applePrice=0.97;
const total=document.getElementById('total');
var calculPrice = counterValue

butonPlus.addEventListener('click', function(){
    counterValue++;
    console.log(counterValue);
    counter.innerHTML=counterValue+' articles';
    if(counterValue== 1){
        counter.innerHTML=counterValue+' article';
    }
    
    else{
        counter.innerHTML=counterValue+' articles';
        total.innerHTML=calculPrice;
    }


}
);

butonMinus.addEventListener('click', function(){
    counterValue--;
    console.log(counterValue);
    if(counterValue<=0){
        counterValue=0 ;
        counter.innerHTML=counterValue+' article';
    }
    else if(counterValue== 1){
        counter.innerHTML=counterValue+' article';
    }
    
    else{
        counter.innerHTML=counterValue+' articles';
    }

    total.innerHTML= counterValue*applePrice;

}


);

