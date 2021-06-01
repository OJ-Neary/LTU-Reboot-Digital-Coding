console.log('Hello Owen');

// Single line comment

/*

Multiple line comment

*/

var productName = 'Tinned Beans'
let price = '0.40'
const quantity = 1;
var inStock = true
let discountAmount = 0;

console.log(productName);
console.log(price);
console.log(quantity);
console.log(inStock);
console.log(discountAmount);

function showProductName(){
    //code goes here
    console.log(productName);
}

showProductName();

function totalPrice(productPrice,productQuantity){
    console.log(productPrice * productQuantity);
}

totalPrice(10,5);

function checkAvailability(productInStock){
    console.log(productInStock);
}

// checkAvailability(productInStock){
//    console.log(productInStock);
//}

//var checkAvailability = productInStock => {
//    console.log(ProductInStock);
//   }

var checkAvailability = productInStock => console.log(productInStock);

checkAvailability(5); 


var Number = 25;

function checkNumber(number){
    if(number < 10){
        return number + ' is less than 10';
    } else if(number < 20){
        return number + ' is less than 20 but more than 10';
    } else if(number < 30){
        return number + ' is less than 30 and mlre than 20';
    } else {
        return number + ' is not less than 30';
    }
}

console.log(checkNumber(8));
console.log(checkNumber(25));
console.log(checkNumber(34));
console.log(checkNumber(14));
console.log(checkNumber(12));

function drinkOrder(drink,size){
    let strMessage = 'You have ordered a ' + size;
    blnValidation = true;
    if(drink != 'cola' && drink != 'orange' && drink != 'lemon') {
        blnValidation = false;
        strMessage = 'You have tried to order a drink we do not sell';
    }
    if(size != 'small' && size != 'medium' && size != 'large') {
        blnValidation = false;
        strMessage = 'You have tried to order a size we do not sell';
    }
    if(blnValidation){
        switch(drink){
            case 'cola':
                strMessage += ' Coca-Cola';
                break;
            case 'orange':    
                strMessage += ' Tango';
                break;
            case 'lemon':
                strMessage += ' Schweppes';
                break;    
        }
    }
    console.log(strMessage);
}

drinkOrder('cola','small');
drinkOrder('orange','medium');
drinkOrder('lemon','large');
drinkOrder('coffee','large');
drinkOrder('lemon','extra large');

function calculator(number1,number2,operator){
    let sum;
    let blnValidation = true;
    if(isNaN(number1)) {
        blnValidation = false;
        sum = 'Number1 is not a valid number'; 
    }
    if(isNaN(number2)){
        blnValidation = false;
        sum = 'Number2 is not a valid number';
    }
    if(blnValidation){
        switch(operator){
            case '+':
                sum = number1 + number2;
            break;
            case '-':
                sum = number1 - number2;
            break;
            case '*':
                sum = number1 * number2;
            break;
            case '/':
                sum = number1 / number2;
            break;
            case '%':
                sum = number1 % number2;
            break;
            default:
                sum = 'OPerator is not valid';
        }
    }
    console.log(sum);
}

calculator(10,5,'+');
calculator(10,5,'-');
calculator(10,5,'*');
calculator(10,5,'/');
calculator(10,5,'%');
calculator('owen',5,'+');
calculator(10,'owen','-'); 

let arrItems = [
    productName,
    price,
    quantity,
    inStock,
    discountAmount,
];

console.log(arrItems);

let firstItem = arrItems[0];
let lastItem = arrItems[4];

console.log(firstItem);
console.log(lastItem);

// console.log(firstItem);
// console.log(lastItem);

let objItems = {
    productName:'Tinned Beans',
    price:'0.40',
    quantity:1,
    inStock:true,
    discountAmount:0
};

console.log(objItems);