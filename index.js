const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let students = [];

// POST - Add new Student
app.post('/students', (req, res) => {
    const student = req.body;
    students.push(student);
    res.status(201).json({message: 'Student added', data: student});
});

// GET - Get all Students
app.get('/students', (req, res) =>{
    res.json(students);
})

// New GET method to retrieve Student data by Id
app.get('/students/:id', (req, res) => {
    const student_id = req.params.id;

    let student = students.find(s=>s.id == student_id);

    if (student) {
        res.json(student);
    }
    else {
        res.status(404).json({message: 'Student not found'});
    }
})

// PUT - Update a Student's data
app.put('/students/:id', (req, res) => {
    const student_id = req.params.id;
    const updated_data = req.body;

    let student = students.find(s => s.id == student_id);

    if (student) {
        Object.assign(student, updated_data);
        res.json({message: 'Student Updated', data: student});
    }
    else {
        res.status(404).json({message: 'Student not found'});
    }
});

// DELETE - Delete a Student by Id
app.delete('/students/:id', (req, res) => {
    const student_id = req.params.id;
    const index = students.findIndex(s => s.id == student_id);

    if (index !== -1) {
        const deleted = students.splice(index, 1);
        res.json({message: 'Student deleted', data: deleted[0]});
    }
    else {
        res.status(404).json({message: 'Student not found'})
    }
});


app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});