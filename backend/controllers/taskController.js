// const getData = (req, res) => {
//     console.log("Responding...!");
//     res.status(200).json({
//         message: "Responding...!"
//     });
// };

// export { getData };


let students = [];
let idCounter = 1;

export const addStudent = (req, res) => {
  const { rollNumber, name, branch, college } = req.body;

  const student = {
    id: idCounter++,
    rollNumber,
    name,
    branch,
    college
  };

  students.push(student);
  res.status(201).json(student);
};

export const getStudents = (req, res) => {
  res.json(students);
};

export const updateStudent = (req, res) => {
  const { id } = req.params;
  const { rollNumber, name, branch, college } = req.body;

  const student = students.find(s => s.id == id);
  if (!student) return res.status(404).json({ message: "Student not found" });

  student.rollNumber = rollNumber;
  student.name = name;
  student.branch = branch;
  student.college = college;

  res.json(student);
};

export const deleteStudent = (req, res) => {
  const { id } = req.params;
  students = students.filter(s => s.id != id);
  res.json({ message: "Student deleted" });
};
