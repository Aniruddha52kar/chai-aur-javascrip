// function ki method 
        // FUNCTION ka nam likh ke (){} ye laga ke khatam ho jata hai funtion
        // end mai function ka nam () aur parentesis laga ke end 

        // function sayMyName(){
        //     console.log("a")
        // console.log("n")
        // console.log("i")
        // };

        // sayMyName() // aur ye end kar ne ka tarika 

        // do num ko add kar te hai
        //addTowNumbers"(num1, num2)" -> is me jo bhi input pass kar te hai is se bol te hai parameters 
        // addTowNumbers(3,4) //-> aur is se bol te hai orgument jo pass kar te hai end me 

        //1st method

        // function addTowNumbers(number1, number2) {
        //     console.log(number1 + number2)
            
        // }

        // 2nd methods

        function addTowNumbers(number1, number2) {
          //1st 

            // let result = number1 + number2
          
            // return result

            //2nd

            return number1 + number2
            
        } // jabhi aap return kare ge ek variable me store kar sakh te hai
        // ye ho gya basic 

       const result = addTowNumbers(3,4) 
       
    //    console.log("result", result);

    // ! -> ye wala symbole opposit kar ta hai true ko false ko aur false ko true ko
    // aur ye if else me use hota hai
    function loginUserMessage(username = "sam"){
        if(!username){// ye ! symbole opposit kar ta hai 
            console.log("please enter username ");// ye print honga if else ke condition me 
            return

        }
        return `${username} just logged in`
    }

    // loginUserMessage("Aniruddha")// aisa print nahi honga 

    // console.log(loginUserMessage("Aniruddha"))// aisa print ho jaye ga 

    // console.log(loginUserMessage(Aniruddha)) // undefined print honga ye interview mai puch te hai

   
 /////*****************Functions with object and array*************//////// */

    function calculateCartPrice(val1,val2,...num1){

        return num1

    }

    // console.log(calculateCartPrice(200, 400, 500)) // -- ise se array me mile ga  

// is ko solve kar ne ke liye rest oprater / aur spreed oprater value hona
// (...) yane khule me mil ra hai bundal me pack karo aur muje dedo is ka yahi matlab hai
// ... -> is se array me pass hongi jitni bhi value hongi 

// interview Q -> val1, val2 me ye value chale jati hai aur baki array form me aajaye ga like [500, 2000]



const user={
    username: "ani",
    price: 199

}
// ye hai function object 

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// 1st method

// handleObject(user); // idhar object passs kr na padhe ga 
// kuch issue aaya to value pass kare hai to type script se check kar na padhe ga 

//2nd method
handleObject({
    username:"sam",
    price:399
});

// ye hai basic ye ho gya object
// abhi dekhe ge array 

const myNewArray = [200, 300, 400]

function returnSecondValue(get){
    return get[1]// is se pata chal ta hai logic kese use kar ete haim 
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400]));


//**********************pratice********************* */

// const value={
//     valueA:'lal',
//     price:200
// }

// function handleObj(any){
//     console.log(`value is ${any.valueA} and price is ${any.price}`)

// }

// handleObj(value);

// handleObj({
//     valueA:"sam",
//     price:300
// });


const newArray=[1,2,3,4]

function returnValue(A){
    return A[3]
}

console.log(returnValue(newArray));
console.log(returnValue([1,2,3,4]));



