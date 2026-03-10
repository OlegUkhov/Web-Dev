class Animal:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def eat(self):
        return f"{self.name} is eating."

    def sleep(self):
        return f"{self.name} is sleeping."

    def speak(self):
        return f"{self.name} makes a sound."

    def __str__(self):
        return f"{self.__class__.__name__}(name={self.name}, age={self.age}, weight={self.weight}kg)"


class Dog(Animal):
    def __init__(self, name, age, weight, breed):
        super().__init__(name, age, weight)
        self.breed = breed

    def speak(self):
        return f"{self.name} says: Woof!"

    def fetch(self):
        return f"{self.name} fetches the ball!"

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, weight={self.weight}kg, breed={self.breed})"


class Cat(Animal):
    def __init__(self, name, age, weight, indoor):
        super().__init__(name, age, weight)
        self.indoor = indoor

    def speak(self):
        return f"{self.name} says: Meow!"

    def purr(self):
        return f"{self.name} is purring..."

    def __str__(self):
        indoor_status = "indoor" if self.indoor else "outdoor"
        return f"Cat(name={self.name}, age={self.age}, weight={self.weight}kg, {indoor_status})"


class Bird(Animal):
    def __init__(self, name, age, weight, can_fly):
        super().__init__(name, age, weight)
        self.can_fly = can_fly

    def speak(self):
        return f"{self.name} says: Tweet!"

    def fly(self):
        if self.can_fly:
            return f"{self.name} is flying high!"
        return f"{self.name} cannot fly."

    def __str__(self):
        fly_status = "can fly" if self.can_fly else "cannot fly"
        return f"Bird(name={self.name}, age={self.age}, weight={self.weight}kg, {fly_status})"
