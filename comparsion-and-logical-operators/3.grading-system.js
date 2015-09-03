var gradeScore = 79,
    grade = "A";

if (gradeScore < 40) {
    grade = "F";
}
else if(gradeScore < 50) {
    grade = "E";
}
else if(gradeScore < 60) {
    grade = "D";
}
else if(gradeScore < 70) {
    grade = "C";
}
else if(gradeScore < 80) {
    grade = "B";
}

console.log(grade);