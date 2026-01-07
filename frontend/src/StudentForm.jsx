import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

const API = "http://localhost:5000/api";

export default function StudentForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    rollNumber: "",
    name: "",
    branch: "",
    college: ""
  });

  useEffect(() => {
    if (id) {
      axios.get(`${API}/students`).then(res => {
        const student = res.data.find(s => s.id == id);
        if (student) setForm(student);
      });
    }
  }, [id]);

  const submitForm = async () => {
    if (id) {
      await axios.put(`${API}/students/${id}`, form);
    } else {
      await axios.post(`${API}/students`, form);
    }
    navigate("/students");
  };

  return (
    <div className="container">
      <h2>{id ? "Update Student" : "Student Registration"}</h2>

      <input
        placeholder="Roll Number"
        value={form.rollNumber}
        onChange={e => setForm({ ...form, rollNumber: e.target.value })}
      />
      <input
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Branch"
        value={form.branch}
        onChange={e => setForm({ ...form, branch: e.target.value })}
      />
      <input
        placeholder="College"
        value={form.college}
        onChange={e => setForm({ ...form, college: e.target.value })}
      />

      <button onClick={submitForm}>
        {id ? "Update Student" : "Submit"}
      </button>
    </div>
  );
}
