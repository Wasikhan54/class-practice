// var mainDate = new Date()
//  var date = mainDate.getFullYear(2023);




// console.log(mainDate)
// const person = {
//     name: "wasi" ,//property
//     greeting(){
//         console.log('hey i am wasi');
//     },
// };
// // console.log(person);
// console.log(person.name);
// person.greeting();



// function fullName(firstName, lastName){
// var name = `${firstName} ${lastName}`; 
// var result = name.toLocaleUpperCase();
// console.log(result)

// }
// fullName('samm','jhon')

// spread opertor

// var a = {
//     name :'wasikhan',
//     fName: "fahim",

// }
// var b ={...a, fName : 'khan', no : 31222 , name : ''}
// console.log(a)
// console.log(b)

// termaly opertor

// var a = 2 < 1;
// var b;
// a ? b =5 : b = 6 
// console.log(b)
// console.log(b)
//  const foo=(a) =>{
//     console.log( 'hello world')
//  }
//  foo(1)


// higher oder call back



const morning = () => {
    console.log(`good morning  ${name}`)
}


// arrya 99

const students = [
    {
        id: 1,
        name: 'wasi khan',
        subject: 'chemistry',
        score: 98,
    },
    {
        id: 2,
        name: 'taha khan',
        subject: 'math',
        score: 32,
    },
    {
        id: 3,
        name: 'fahim Khan',
        subject: 'physics',
        score: 77,
    },
    {
        id: 4,
        name: 'bob',
        subject: 'biology',
        score: 87,
    },
    {
        id: 5,
        name: 'peter',
        subject: 'urdu',
        score: 22,
    }

]
const updatedStudents =  students.map((item) => {
    return {
        ...item,
          role:"Studnet"
    }
})
console.log(updatedStudents)


// HighScore
// const highscore = students.filter((item) => {
//     return item.score >= 80
// })
// console.log(highscore)

//specifed


const speified = students.find((iid)=>{

    return iid.id = 5
})
console.log(speified)