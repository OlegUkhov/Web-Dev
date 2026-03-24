from defense.Student import Student
from defense.graduate import GraduateStudent
from defense.undergraduate import UndergraduateStudentClass
from defense.utils import *


grad1 = GraduateStudent("Oleg", 1, [60, 70, 80, 90], "my thesis 1")
grad2 = GraduateStudent("Anatoliy", 2, [70, 80, 90], "my thesis 2")
under_grad1 = UndergraduateStudentClass("Ukhov", 3, [40, 50, 70, 10], 2)
under_grad2 = UndergraduateStudentClass("Kim", 4, [30, 50, 80], 3)
under_grad3 = UndergraduateStudentClass("Timur", 5, [90, 90, 65], 1)

students = [grad1, grad2, under_grad1, under_grad2, under_grad3]
print("Students\n")
for a in students:
    print(a)

print("\n")
class_average = 0
for b in students:
    class_average += b.get_average()

print ("students with grade A")
print(get_students_by_grade(students, "A"))

print("student status")
for a in students:
    print(a.name, ":", a.get_status())

print("class_average")
t = class_average / len(students)
print(t)
print("top student = ", get_top_student(students))