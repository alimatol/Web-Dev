from models import Animal, Cat, Fish

def main():
    cat1 = Cat("Remi", 5, "Scottish Straight")
    fish1 = Fish("Cris", 2, "Black")
    animal1 = Animal("Bob", 3)

    cat1.eat("fish")

    animal1.setType("Dog")

    print(cat1)
    print(animal1)
    print(fish1)

if __name__ == "__main__":
    main()


    