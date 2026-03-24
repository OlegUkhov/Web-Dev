class Student:
    def __init__(self, name, student_id, grades):
        self.name = name
        self.student_id = student_id
        self.grades = grades

    def add_grade(self, grade):
        self.grades.append(grade)
    def get_average(self):
        return int(sum(self.grades) / len(self.grades))
    def get_letter_grade(self):
        if int(self.get_average()) >= 90:
            return "A"
        elif 90 > int(self.get_average()) >= 80:
            return "B"
        elif 80 > int(self.get_average()) >= 70:
            return "C"
        elif 70 > int(self.get_average()) >= 60:
            return "D"
        return "F"

    def __str__(self):
        return f"{self.name}({self.student_id}) - Average: {self.get_average()}({self.get_letter_grade()})"
