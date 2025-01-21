class StudentsController {
    constructor() {
        this.students = [];
    }

    getAllStudents(req, res) {
        res.json(this.students);
    }

    addStudent(req, res) {
        const student = req.body;
        this.students.push(student);
        res.status(201).json(student);
    }

    getStudentById(req, res) {
        const studentId = req.params.id;
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            res.json(student);
        } else {
            res.status(404).send('Student not found');
        }
    }

    updateStudent(req, res) {
        const studentId = req.params.id;
        const index = this.students.findIndex(s => s.id === studentId);
        if (index !== -1) {
            this.students[index] = { ...this.students[index], ...req.body };
            res.json(this.students[index]);
        } else {
            res.status(404).send('Student not found');
        }
    }

    deleteStudent(req, res) {
        const studentId = req.params.id;
        const index = this.students.findIndex(s => s.id === studentId);
        if (index !== -1) {
            this.students.splice(index, 1);
            res.status(204).send();
        } else {
            res.status(404).send('Student not found');
        }
    }
}

export default new StudentsController();