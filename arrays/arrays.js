// --- 19/1/26 ---

// // array 
// let arr = [1,2,3,8,4,5]

// arr.push(0) // ise use karke hum last koi bhi value ko add kr skte hai
// arr.pop() // ise use krk hum last ki ek value ko hta skte hai
// let prem = arr.pop()
// arr.shift() // ise use krk hum arrey ki starting m se ek element ko hta skte hai
// arr.unshift(2) // ise use krk hum arrey ki starting m koi bhi arrey add kr skte hai


// // console.log(prem)
// console.log(arr)

// -- 20/1/26 -- 

// let array1 = [1,2,3,4,5,6,699,9,3,33,34,77,1,2,3,4,5,6]
// let array2 = [8,9,3,4,8,10,0,34,22,[2,3,4,5,1000000000,899,[88,77,66,55]],[888,666,555,444]]
// let array3 = [200,300]

// console.log(array1.length) // to check length of an arrey
// console.log(array1.indexOf(699)) // jis element ka index check krna hai uski value ko dalkr pta lga skte hao, ya fir jo vlue present nhi hai array mai or use dalege to -1 answer show hoga
// console.log(array1.at(10)) // yaha pr hum index no. daalkr us index ke element ki value pta kr skte hai
// console.log(array1.concat(array2),(array3)) // is method se hum ek ya ek se jada array merge kra skte hai ',' karke 

// console.log(array1.sort((a,b)=>a-b)) // ascending order mai array ko sort krne ka tarika
// console.log(array1.sort((a,b)=>b-a)) // descending order mai array ko sort krne ka tarika
// console.log(array2.flat(1)) // flat method ko use krk hum ek array mai jitni bhi arrays store hoti hai unhe hume concate ya merge kr skte hai
// console.log(array2.includes(10000)) // ye method ki madad se hum kisi bhi element ki value ko check kr skte hai ki vo array m present hai ki nhi, or ye answer true/false mai krta hai
// console.log(array1.join(" ")) // isse hume output string format mai dekhne ko milega

// practice qsn let concate all the arrays that i have created
// let array4 = array1.concat(array2.flat(4),array3)

// console.log(array4.sort((a,b)=>a-b))


// --- 21/1/26 ---

// let array4 = array1.slice(2,10) // slice method jo hai isse hum jo deleted array hai unhe alag se dekh sakte hai but inse original array mai koi effect nhi padta
// console.log(array4)

// console.log(array1)

// let array4 = array1.splice(2,9,"prem","dakh","raju") // splice method mai hum jo starting idex no. se end of the no. ke bich ke index ke elements hai vo alag se show hoge or is method se original array mai bhi effect pdta hai 
// console.log(array4)

// console.log(array1)

// callback => a funcion pass an argument to another function
// hof[higher order function] => a func which accept another func as parameter


 // for each -------- ye return ko ignore krta hai
// let array1 = [1,2,3,2,1]
// let new_arr = []

// let fun = array1.forEach((value, index) => {
//     console.log("value:", value,"index:", index) // hume isme ese operations bhi kara skte hai
//     new_arr.push(value+1) // for each ka simle mtlb yhi h ki hume ise operations karate hai or new array mai iske results dekhte hai poorane array mai isse koi changes nhi hote hai
//  })

// console.log(array1) // is foreach ke array mai koi changes nhi hai, It is mainly used for side effects (printing, DOM updates, API calls).
// console.log(new_arr)

// map ------------- It runs a function once for each element in an array., Original array change nahi hota (unless you manually change it).
// let map_fun = array1.map((value, index) => {
//     // console.log("value:", value,"index:", index)
//     return value*2
// })

// let map_fun = array1.map(num =>{
//     return num+2
// })

// console.log(map_fun) // It returns a new array. ✅New array ki length same hoti hai as original.




// 12/2/26

// let a = 10

// a = a+20

// b = a-5

// aaj padhna callback-hell / pyramid of doom

// 13/2/26

// let duhh = fetch("https://jsonplaceholder.typicode.com/todos/1")
// console.log(duhh)