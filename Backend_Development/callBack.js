function studentDetailsById(id, studentSubjects) {
    console.log("Getting student details by ID");
    studentSubjects({studentroll: 530})
}
function studentSubjects(studentRoll, studentMarks) {
    console.log("Getting student Subject details by student Roll: ", studentRoll)
    studentMarks({subjectid: 101})
}
function studentMarks(subjectID) {
    console.log("Getting student marks by subject ID", subjectID)
}

studentDetailsById("256", function(studentRoll){
    studentSubjects(studentRoll, function(subjectID){
        studentMarks(subjectID)
    })
})