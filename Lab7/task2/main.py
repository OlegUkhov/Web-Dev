from models import Animal, Dog, Cat, Bird

dog1 = Dog("Buddy", 3, 12.5, "Labrador")
dog2 = Dog("Max", 5, 8.0, "Poodle")
cat1 = Cat("Whiskers", 2, 4.2, True)
cat2 = Cat("Shadow", 4, 5.1, False)
bird1 = Bird("Tweety", 1, 0.3, True)
bird2 = Bird("Penguin", 6, 15.0, False)

animals = [dog1, dog2, cat1, cat2, bird1, bird2]

print("=" * 50)
print("ALL ANIMALS")
print("=" * 50)
for animal in animals:
    print(animal)

print("\n" + "=" * 50)
print("POLYMORPHISM — speak()")
print("=" * 50)
for animal in animals:
    print(animal.speak())

print("\n" + "=" * 50)
print("COMMON METHODS — eat() and sleep()")
print("=" * 50)
for animal in animals:
    print(animal.eat())
    print(animal.sleep())

print("\n" + "=" * 50)
print("UNIQUE METHODS")
print("=" * 50)
for animal in animals:
    if isinstance(animal, Dog):
        print(animal.fetch())
    elif isinstance(animal, Cat):
        print(animal.purr())
    elif isinstance(animal, Bird):
        print(animal.fly())
