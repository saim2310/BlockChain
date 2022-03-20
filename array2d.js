array= [
    student1={
        name:"jahangir",
        rollno:90,
        course:"blockchain",
        marks: 91,
        attendence:85
    },
    student2 ={
        nmme:"saim",
        rollno:091,
        course:"blockchain",
        marks:88,
        attendence:56

}
]
console.log(student1);
if (student1.attendence< 60 && student1.marks< 50 ) {
    console.log("jahangir attendence is short and also failed");
    
}
else if (student1.marks>= 50 && student1.attendence < 60) {
    console.log("jahangir is  passed  but short attendence");
    
}
else if (student1.marks>= 50 && student1.attendence>= 60) {
    console.log("jahangir is passed and having full attendence");
    
}
else {
    console.log("jahangir is failed");
}


console.log(student2);
if (student2.attendence< 60 && student2.marks< 50 ) {
    console.log("saim attendence is short and also failed");
    
}
else if (student2.marks>= 50 && student2.attendence < 60) {
    console.log("saim is  passed  but short attendence");
    
}
else if (student2.marks>= 50 && student2.attendence>= 60) {
    console.log("saim is passed and having full attendence");
    
}
else {
    console.log("saim is failed");
}