// Scopes
var c = 300 // ye print nahi hota khyu mi var all reday liya hai aur avr ko avoid karo 


{ } //-> is ko bol te hai scope 
// object me bhi aata hai to  wo object declaration hai 
//{}-> ye jab if/else me aata hai function ke sath aata hai tab is se bol te hai scope if aur else ka scope 

if (true) {
    //ye jo scope hai kya hona chaiye 
    let a = 10 // ye undefind hota hai if else ke condition 
    const b = 20 // ye value avilabale nahi hai 
    var c = 30 // ye print ho jata hai waha pr
    
    // 3. if ke under likha hai wo hai block scope 
}
// 3.aur is ke bahar likha hai to ye hai global scope 

// 4. scope kese use kar te hai

// 5. aagele video me dekhe ge core scope

// node se run kare ge globel scope ko tab wo alag haia  

// console.log(a); / a difiend nahi hai 
// console.log(b); // Bb bhi clear
// console.log(c);


//Nested scope

function one(){
    const username = "ani"

    function two (){
        const website = "youtube"
        console.log(username); // function ke under hai user dekh na hai hume 

    }
   // console.log(website)// one ke under hai tow ke baha r hai 

    // two() // is ko commet kiya to ye excued nahi honga 
}

// one()

if(true){
    const username= "ani"
    if (username === "ani") {

        const website = " youtube"
        console.log(username + website) // aisa print honga
        
    }
    // console.log(website); // 1st error
}

// console.log(username);



//+++++++++++++++++interesting ++++++++++++++++++++++++

// Q

//technic hai function ko bana ne ke 

//1st method

function addone(num){
    return num + 1
    
}

console.log(addone(5))

//2nd method

addtwo(5) // pahile access kar ra honge aapn is liye kam me padh ta hai 
const addtwo = function(num){
    return num + 2

}
