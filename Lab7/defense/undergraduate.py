from Student import Student
class UndergraduateStudentClass(Student):
    def __init__(self, name, student_id, grades, year):
        Student.__init__(self, name, student_id, grades)
        self.year = year

    def get_status(self):
        return f"Undergraduate - Year {self.year}"

    def __str__(self):
        return f"{self.name}({self.student_id})-Average: {self.get_average()}({self.get_letter_grade()}) - Year: ({self.year})"

