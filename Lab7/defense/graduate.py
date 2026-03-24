from Student import Student
class GraduateStudent(Student):
    def __init__(self, name, student_id, grades, thesis_title):
        Student.__init__(self, name, student_id, grades)
        self.thesis_title = thesis_title

    def get_status(self):
        return "Graduate Student"

    def __str__(self):
        return f"{self.name}({self.student_id})-Average: {self.get_average()}({self.get_letter_grade()}) - Thesis: ({self.thesis_title})"

