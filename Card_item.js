document.querySelectorAll('.select-value').forEach(function(select){
        select.addEventListener('change', SelectFunction);
    
});


let gettingselectvalue;
function SelectFunction(e){
    // e.preventDefault();
    gettingselectvalue = e.target.value;
    console.log(gettingselectvalue)
}



document.querySelectorAll('.onclick').forEach(function(button){
    button.addEventListener('click', clFunction)
});

function clFunction(e){

    e.preventDefault();

    if(typeof(gettingselectvalue) == "undefined" ){
    
        alert('Please Select DropDwon values');
    
    }
    else if(typeof(gettingselectvalue) == "string"){

        var closestheadername =  e.target.closest('.colsm3').querySelector('h4');
        var storingtitle = closestheadername.innerText;
    
        var addtocart = document.getElementById('product-card')
        var findElement = document.createElement('div');
        
        findElement.setAttribute('class','card border-warning mx-sm-1 p-3');
    
        findElement.innerText = storingtitle;
    
        var priceElement = document.createElement('div');
    
        priceElement.setAttribute('class','cart-price');
    
        var labelElement = document.createElement('span');
        
        labelElement.innerText = 'Price :';        
    
        priceElement.innerText = gettingselectvalue * 500;
    
        var buttoncreate = document.createElement('button');
        buttoncreate.setAttribute('class','btn btn-primary click-remove');
    
        buttoncreate.innerText = 'Remove'
        buttoncreate.addEventListener('click', remFunction)

        
        addtocart.append(findElement);

        findElement.appendChild(labelElement)
        findElement.appendChild(priceElement);
        
        findElement.appendChild(buttoncreate);

        gettingselectvalue = undefined;


    }
    
    
}

function remFunction(e){
    // e.preventDefault();
    var current_div = e.target.closest('.card');
    current_div.remove();
}
