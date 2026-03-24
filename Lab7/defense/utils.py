from Student import Student
def calculate_class_average(students):
    total = 0
    for a in students:
        total += a.get_average()
    return total/len(students)

def get_top_student(students):
    st = Student(" ", 0, 0)
    max_grade = 0
    for a in students:
        if a.get_average() > max_grade:
            max_grade = a.get_average()
            st = a
    return st

def get_students_by_grade(students, letter):
    stud = []
    for a in students:
        if a.get_letter_grade() == letter:
            stud.append(a)

    return stud