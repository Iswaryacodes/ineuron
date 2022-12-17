////////Q.No.1) Write a JavaScript program to get an array from the user and return the:
////////a) Sum of all elements in the array using reduce()
/*
let Arr = [1,2,3,4,5];
let res = Arr.reduce((a,b)=>a+b);
console.log(res);
*/

////////Q.No.2)

let students = [
    { name: "John", marks: 92 },
    { name: "Oliver", marks: 85 },
    { name: "Michael", marks: 79 },
    { name: "Dwight", marks: 95},
    { name: "Oscar", marks: 64},
    { name: "Kevin", marks: 48},
    ];
/*
a) Calculate grades on basis of marks
>90 = A
>80 = B
>70 = C
>60 = D
>50 = E
else = F
*/
function grades(marks)
{
    if(marks>=91) return "A"
    else if(marks>=81 && marks<=90) return "B";
    else if(marks>=71 && marks<=80) return "C";
    else if(marks>=61 && marks<=70) return "D";
    else if(marks>=51 && marks<=60) return "E";
    else return "F";
}
///// Grades according to Marks attained
const result = students.map(students => grades(students.marks));
console.log(result);


//b) Map the grades of each student
let studentswithGrades = students.map((students)=>{
    let grade = grades(students.marks);
    return {...students, Grade:grade}
});
console.log(studentswithGrades);

//c) Group students according to the grades they have received and display.
// let Key = [A,B,C,D,E,F];
let SortedStudents = studentswithGrades.sort((a,b)=> {
    if(a.Grade<b.Grade) return -1;
    if(a.Grade>b.Grade) return 1;
});
console.log(SortedStudents);






