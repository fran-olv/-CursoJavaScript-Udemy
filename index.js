//My first JS code 
console.log('Hello World');

///>variables
let pessoa ='Fran';
console.log(pessoa);

//let firstName = 'Fran', lastName = 'Oliveira'; ou
let firstName = 'Fran';
let lastName = 'Oliveira';

///>constantes
let interestRate = 0.3; //variavel
interestRate = 1; //constant
const rate = 3;
console.log(interestRate); //result 1
console.log(rate); //result 3

///>Primitive/value Types x Reference Types
let nameFlour = 'Rosa'; //String Literal
let age = 28; //Number Literal
let isApproved = true; //Boolean literal
let nameOfFather = undefined; //not common
let bankBalance = null; 

///>Dynamic Typing
//static language (statically-typed) ex: string name = 'John'
//Dynamic language (Dynamically-typed) ex let name = John

//Primitive/value Types: String, Number, Boolean, undefined and null
//Reference Types: Object, array, function

///> Objects
let person = {
    name:"Fran",
    age: 28
}; //object literall

//Dot Notation
person.name = 'Franciele'

//bracket Notation
person['name'] = 'Mary'
console.log(person.name);

///>Array - list of items

let CoresSelecionadas = ['red','blue'];
CoresSelecionadas[2]='green';
console.log(CoresSelecionadas.length);


///>Functions
//definition
//performing a task
function greet(nome){
    console.log('Hello World '+ nome);
}

greet('Fran');
greet('Pessoas');

//calculating values
function square(number){
    return number * number;
}

let number = square(2);
console.log(number);
console.log(square(3));


//----> Operators<----
//(types) Arithmetic, Assignment, Comparison, Logical, Bitwise

///>arithmetic + * / - %
let x = 10;
let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y); //resto
// console.log(x ** y); //exponencial

//increment (++)
console.log(++x); //11
console.log(x++); //10
console.log(x);

//decrement (--)
console.log(--x);

///>Assignment
x = 10;
x++;
x=x+5;
x+=5;

x=x*3;
x*=3;

///> Comparison
x=1;
console.log(x>0);
console.log(x>=1);
console.log(x<1);
console.log(x<=1);

//equality
//strict equality = type + value
console.log(x===1);
console.log('1'===1); //false string e number

//lose equalitity = value
console.log(x!==1);
console.log('1'==1);//true

///> Ternary Operators.
let points =110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

///> Logical 

//AND (&&)
//returns TRUE if both operands are TRUE

console.log(true && true);//true
console.log(false && true);//false
console.log(false && false);//false

//OR (||)
//Returns TRUE if one of the operands is TRUE
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;

//NOT (!)
let applicationRefused = !eligibleForLoan;

console.log(eligibleForLoan);

