import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

const API = "http://localhost:5000/api";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    const res = await axios.get(`${API}/students`);
    setStudents(res.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`${API}/students/${id}`);
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="cards-container">
      {students.map(s => (
        <div className="card" key={s.id}>
          <p><b>ID:</b> {s.id}</p>
          <p><b>Roll:</b> {s.rollNumber}</p>
          <p><b>Name:</b> {s.name}</p>
          <p><b>Branch:</b> {s.branch}</p>
          <p><b>College:</b> {s.college}</p>

          <button onClick={() => navigate(`/edit/${s.id}`)}>
            Update
          </button>

          <button onClick={() => deleteStudent(s.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
