
// note - this. -> current context ko refer kar ta hai 
// context -> values context ka matalab hai value / yane kis ke bare me bat kare hai 
//{} -> jo this hai empty object deta hai 

// interview mai puch te hai - global object hai wo window object hote hai aru node.js me {empty} object aata hai 

const user= {
 
        username: "ani",
        price: 199,
 
        welcomeMessage: function (){
            console.log(`${this.username} , welcome to website`);// 1.direct username nahi dal sakh te hai 
            //1 this laga sakh te hai  
            console.log(this)
        }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

//context current value batat hai

// function chai(){
//     let username = "ani"
//     console.log(this.username) // this.username kar ke undefind aata hai DOM manipulation mai kam me aaye ga 

// }

// chai()

// this ke under kuch to rakha hai aap chijo ko access kar sakh te hai 


// const chai = function () {
//     console.log(this.username);
// } // undifind aaye ga 

const chai = () => {
    let username = "ani"
    console.log(this.username); // is me undefind hai 
} 
// ye syntax hai =()=> ye hai array function hai

// chai()

//Array function hota kese hai 
//****** */ expleset return**** -  jab aap return key word use kar na padh ta hai 

// () => {} // ye hai arrao functions 

// const addTwo = (num1, num2) => {
//     return num1 + num2
 
// }note imp - curly bresess use huva to aap ko return key word likh na padhe ga 

// asia syntax hai ye hai basic 

//  *****implicit return*** -  "mai man leta hu" is ka ye matalb hota hai

// const addTwo = (num1, num2) =>num1 + num2 
// implicit return  aur ye ek line mai likh na padh ta hai aur ye ek line ka hi hota hai

// const addTwo = (num1, num2) =>(num1 + num2) // parentises longe to retrun nahi lena padhe ga 

const addTwo = (num1, num2) =>({
    username:"ani"
}) // is tarike se nahi kar sakh te () -> is me warp kar na padhe ga 

console.log(addTwo(3, 4))

const myArray = [1,2,3,4,5]

// myArray.forEach()

//


