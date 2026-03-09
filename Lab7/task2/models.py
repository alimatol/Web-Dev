class Animal:
    def __init__(self, name, age, type = None):
        self.name = name
        self.age = age
        self.type = type

    def setType(self, type):
        self.type = type
    
    def eat(self, food):
        return f"{self.name} eats {food}"
    
    def sound(self, sound):
        return f"{self.type} makes '{sound}' sound"
    
    def __str__(self):
        return f"Name: {self.name}, Age: {self.age}, Species: {self.type} "
    
class Cat(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age, type = "Cat")
        self.breed = breed

    def eat(self, food):
        return f" {self.name} eats {food}"
    
    def monthlyBrushRoutine(self, timesMonth):
        return f"{self.name} needs to be brushed {timesMonth} in month"
    
    def __str__(self):
        return f"Name: {self.name}, Age: {self.age}, Species: {self.type}, Breed: {self.breed} "
    
class Fish(Animal):
    def __init__(self, name, age, color):
        super().__init__( name, age, type= "Fish")
        self.color = color

    def eat(self, food):
        return f" {self.name} eats {food}"
    
    def requiredWater(self, water_type):
        return f"{self.name} requires {water_type} type of water"
    
    def __str__(self):
        return f"Name: {self.name}, Age: {self.age}, Species: {self.type}, Color: {self.color}"
    

    
    
