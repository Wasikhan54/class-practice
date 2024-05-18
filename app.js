// const students = [
//     {
//         id: 1,
//         name: 'wasi khan',
//         subject: 'chemistry',
//         score: 98,
//     },
//     {
//         id: 2,
//         name: 'taha khan',
//         subject: 'math',
//         score: 32,
//     },
//     {
//         id: 3,
//         name: 'fahim Khan',
//         subject: 'math',
//         score: 77,
//     },
//     {
//         id: 4,
//         name: 'bob',
//         subject: 'urdu',
//         score: 87,
//     },
//     {
//         id: 5,
//         name: 'peter',
//         subject: 'urdu',
//         score: 22,
//     }
// ]
// // const aveargeScore = students.reduce((int , curr) => {
// //         return int + curr.score
// //     },0)
// //     const totalAveargeScoe = aveargeScore/5
// //     console.log(totalAveargeScoe)




// servey
const students = [
    { id: 1, name: 'wasi khan', subject: 'chemistry', score: 98 },
    { id: 2, name: 'taha khan', subject: 'math', score: 32 },
    { id: 3, name: 'fahim Khan', subject: 'math', score: 77 },
    { id: 4, name: 'bob', subject: 'urdu', score: 87 },
    { id: 5, name: 'peter', subject: 'urdu', score: 22 }
];

const subjectCounts = students.reduce((acc, student) => {
    const { subject } = student;
    if (acc[subject]) {
        acc[subject]++;
    } else {
        acc[subject] = 1;
    }
    return acc;
}, {});

console.log(subjectCounts);























// toug

// const students = [
//     { id: 1, name: 'wasi khan', subject: 'chemistry', score:89 },
//     { id: 2, name: 'taha khan', subject: 'math', score: 89 },
//     { id: 3, name: 'fahim Khan', subject: 'math', score: 77 },
//     { id: 4, name: 'bob', subject: 'urdu', score: 87 },
//     { id: 5, name: 'peter', subject: 'urdu', score: 22 }
// ];
// const arrr=[1,3,4,56,65 ,9,67,2,8]
// const subjectCounts = arrr.reduce((acc, student) => {
//     // const { subject } = student;
//     // if (acc[score]) {
//     //     acc[score]++;
//     // } else {
//     //     acc[subject] = 1;
//     // }
//     return acc + student
// },0);

// console.log(subjectCounts);