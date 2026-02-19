// console.log("hey i'm Prem singh and fuck u")

// console.log(2+3)

// PRIMITIVE-DATATYPE :
// let  name = "Prem singh" // this is string data-type
// let age = 22     // this is number datay-type
// let iseligible = true    // this is boolean data-type isme ya to value true hogi ya false
// let city     //Jab variable bana hota hai par usme koi value dali hi nahi hoti, tab JS khud undefined de deta hai. 👉 Matlab: value missing hai
// let state = null     // null Jab aap jaan-bujh ke bolte ho “abhi koi value nahi”, tab null use karte ho. 👉 Matlab: value empty rakhi hai

// NON-PRIMITIVE DATATYPE :
let skills = ['Cooprative','hardworking','time-punctuality',8,10,true,null] //  Array: JS me array wo variable hota hai  jisme hum multiple values ko ek hi variable me  order (index) ke sath store karte hain.  Array me same ya different datatype dono ho sakte hain.
console.log(skills[8]) // to check particular value of array from index

let college_academics = {      // this is Object, jis variable mai hum multiple vairables ko store krate hai us variable ko hum object kahege
    department_name : ['BCA_1st','Agriculture','CSE'],
    makrks : [40,60,70],
    subjects : ["mathematics", "science", "python"]
}
console.log(college_academics.department_name) // to check value by using key value in object

// PRIMITIVE-DATATYPE :
// console.log(typeof name)
// console.log(typeof age)

// console.log(typeof name, typeof age) // hume do varibales ki value ko ek sath bhi print kara skte hai ',' use krk
//                         // "typeof" it is a operator which shows the type ko datatype

// console.log(typeof iseligible)
// console.log(typeof city)
// console.log(typeof state)


// NON-PRIMITIVE DATATYPE :
console.log(skills)

console.log(college_academics)