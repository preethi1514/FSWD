import React, { useState } from "react";

const Student = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John", present: false },
    { id: 2, name: "Emma", present: false },
    { id: 3, name: "Michael", present: false },
    { id: 4, name: "Sophia", present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  return (
    <div style={styles.container}>
      <h2>📋 Student Attendance Tracker</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td
                style={{
                  color: student.present ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {student.present ? "Present" : "Absent"}
              </td>
              <td>
                <button
                  onClick={() => toggleAttendance(student.id)}
                  style={
                    student.present
                      ? styles.absentBtn
                      : styles.presentBtn
                  }
                >
                  {student.present ? "Mark Absent" : "Mark Present"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: "15px" }}>
        ✅ Present Students:{" "}
        {students.filter((s) => s.present).length} / {students.length}
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: "520px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  presentBtn: {
    backgroundColor: "green",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  absentBtn: {
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Student;
