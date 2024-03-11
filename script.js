let age = 34;           //declararea si atribuirea unei valori variabilei (de tip let) age
let years = 10;         //atribuire valoare variabilei years

console.log(age);       //afiseaza in consola din browser valoarea lui age
console.log(years);     //afiseaza in consola din browser valoarea lui years

age = 40;               // re-atribuirea unei valori variabilei age
console.log(age);       // afisarea noii valori a variabilei age

const piNumber = 3.14;  //declararea si atribuirea unei valori variabilei (de tip const) piNumber 
console.log(piNumber);  //afisarea ei in consola

let userName = `Andra`;     //declarare + atribuire valoare variabilei (let) userName;
console.log(`Name: `)       //afiseaza textul: "Name: "
console.log(userName);      //afiseaza pe urmatorul rand userName

//OPERATORI  DATE  NUMERICE__________________

let firstNumber = 10;
firstNumber = 12;   
let secondNumber = 21;
let sum = firstNumber + secondNumber;   //  ADUNARE
console.log(sum);                       //afisare -mod 1  -SAU- 
console.log(`Rezultatul sumei dintre ${firstNumber} si ${secondNumber} este ${sum}.`);   //afisare mod 2

let pastAge = age - years;              //  SCADERE
console.log(`In urma cu ${years} ani,  aveam varsta de ${pastAge}.`);   //afisare mod 1   -SAU-
console.log(`In urma cu ${years} ani, aveam varsta de ${age-years}.`);  // afisare mod 2

let numberA = 12;
let numberB  = 5;
let multiplyResult = numberA * numberB ;    // INMULTIRE
console.log(`Rezultatul inmultirii celor doua numere este ${multiplyResult}.`);   //afisare mod 1  -SAU- 
console.log (`Rezultatul inmultirii dintre ${numberA} si ${numberB} este ${multiplyResult}.`);  //afisare mod 2

let numberC = 7;
let numberD = 3;
let divisionResult = numberC / numberD;     // IMPARTIRE
console.log(`Rezultatul impartirii lui ${numberC} la ${numberD} este ${divisionResult}.`); // Rezultatul exact al impartirii

let moduloResult = numberC % numberD;       // RESTUL IMPARTIRII
console.log(moduloResult);                   // afisare rest

let checkedNumber = 21;                   // VERIFICARE NUMAR PAR/IMPAR
let remainder = checkedNumber % 2;        // remainder = rest; daca un nr se imparte perfect la 2 este par
let isEven = remainder === 0;              // daca restul este verificat si are valoarea zero, inseamna ca nr este par
console.log(`Number ${checkedNumber} is even: ${isEven}.`);

// Numere de tip NUMBER______________________

console.log(Number.MAX_SAFE_INTEGER);       // cel mai mare numar de tip NUMBER
console.log(Number.MIN_SAFE_INTEGER);       // cel mai mic numar de tip NUMBER

// Numere de tip BigInt _____________________

let bigIntNumber = 1265267238276763482n;
console.log(`BigInt value is: ${bigIntNumber}.`);

// STRING____________________________________

const myName = 'Andra Eusei';       //AFISAREA PRIMULUI CARACTER DIN STRING
const firstCharInName = myName[0];          // [0] identifica caracterul cu indexul O (primul caracter);
console.log(`Primul caracter din sirul '${myName}' este ${firstCharInName}.`);   //afiseaza primul caracter din sir; 

const myNameLength = myName.length;  // LUNGIMEA sirului de caractere calculata prin functia length
console.log(`Lungimea sirului de caractere este ${myNameLength}.`); 
                                           
                                    //AFISAREA ULTIMUL CARACTER DIN SIR       
let lastCharIndex =myNameLength-1;         //calculam care este ultimul index din sirul nostru (care este intotdeauna cu lungimea -1 )
let lastChar = myName[lastCharIndex];      //accesam caracterul de la indexul calculat
console.log(`Ultimul caracter din sir este: '${lastChar}'.`);

let firstName = 'Andra';            
let lastName = 'Eusei';
let separator = ' ';
let fullName = firstName + separator + lastName;     // ADUNARE siruri de caractere 
console.log(`Numele meu complet este ${fullName}.`); 

let upperCaseName = fullName.toUpperCase();          // converteste literele in MAJUSCULE
console.log(upperCaseName);

let lowerCaseName = fullName.toLowerCase();         // converteste literele in MINUSCULE
console.log(lowerCaseName);

let substringResult = firstName.substring(1,4);      // afiseaza sirul fara primul si fara ultimul caracter (din ANDRA)
console.log(substringResult);

// VALORI BOOLEENE_________________________________

let isAdult = true;    // cream o variabila care contine date booleene cu valoarea true
let isOld = false;     // am creat o noua valoarea booleena care are valoarea false;
console.log(`isAdult = ${isAdult}`);
console.log(`isOld = ${isOld}`);

// DATE  NULL  SAU  UNDEFINED_______________________

let nullValue=null;
console.log(`nullValue = ${nullValue}`);

let notInitialized;            
console.log(`notInitialized = ${notInitialized}`);

// OPERATORI  DE  ATRIBUIRE____________________________

let x=10;                  
console.log(`x=`, x);      //concatenare de stringuri
x++;                       //INCREMENTARE CU +1
console.log(`x=`, x);

// OPERATORI  DE  COMPARATIE_____________________________

let value1 = 22;
let value2 = 22;
let value3 = 23;
let value4 = '22';
           //comparator de EGALITATE
let firstCompareResult = value1 == value2;
console.log(`${value1} == ${value2} => ${firstCompareResult}`);

let secondCompareResult = value1 == value3;
console.log(`${value1} == ${value3} => ${secondCompareResult}`);

let stringAndNumberEquality = value1 == value4;
console.log(`${value1} == ${value4} => ${stringAndNumberEquality}`);

           // comparator de EGALITATE STRICTA
let strictEqualCompare = value1 === value4;
console.log(`${value1} === ${value4} => ${strictEqualCompare} pentru ca au aceesi valoare, dar sunt tipuri de date diferite`);

let strictEqualCompareNumbers = value1 === value2;
console.log(`${value1} === ${value2} => ${strictEqualCompareNumbers} pentru ca au aceeasi valoare si sunt acelasi tip de date`);

            // comparatorul MAI MIC, MAI MIC SAU EGAL (<=)
let num1 = 5;
let num2 = 6;
let num3 = 5;
let lessThanComparison = num1 < num2;
console.log(`${num1} < ${num2} => ${lessThanComparison}`);

let lessThanComparison2 = num2<num1;
console.log(`${num2} < ${num1} => ${lessThanComparison2}`);

let lessOrEqualComparison = num1 <= num2;
console.log(`${num1} <= ${num2} => ${lessOrEqualComparison}`);

let lessOrEqualComparison2 = num1 <= num3;
console.log(`${num1} <= ${num3} => ${lessOrEqualComparison}`);


                      