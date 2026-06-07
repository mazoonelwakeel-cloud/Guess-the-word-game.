import random
playing = True
while playing:
    fruits = ["apple", "mango", "guava", "melon", "lemon", "peach", "berry", "grape", ]
    food = ["pizza", "paste", "bread", "donut", "candy", "steak", "sushi", "grape","chips" ]
    animals = ["tiger","zebra","horse","snake","shark","whale","eagle","mouse"]
    objects = ["chair","table","clock","phone","brush","knife","spoon","couch"]
    cities =["cairo","paris","tokyo","miami","delhi","dubai","milan","turin"]
    countries = ["egypt","china","japan","spain","ghana","india","italy","syria"]
    category=[fruits,food,animals,objects,cities,countries]
    user_category=input("Choose a category to play: \n (fruits - food - animals - objects - cities - countries) ")
    if user_category.lower()=="fruits":
        category=fruits
    elif user_category.lower()=="food":
        category=food
    elif user_category.lower()=="objects":
        category=objects
    elif user_category.lower()=="animals":
        category=animals
    elif user_category.lower()=="cities":
        category=cities
    else:
        category=countries

    words_index = random.randint(0, 7)
    secret_word = category[words_index]
    attempts = 0

    while True:
        attempts += 1

        guess_word = input("Guess the secret 5-letter word: ")

        for i in range(len(secret_word)):
            if secret_word[i] == guess_word[i]:
                print(f"{guess_word[i]} is correct and is in correct position")

            elif guess_word[i] in secret_word:
                print(f"{guess_word[i]} is correct but not in correct position")

            else:
                print(f"{guess_word[i]} is not correct")

        if secret_word == guess_word:
            print("Your guess is correct!")
            print("Congratulations!")
            print(f"You attempted for {attempts}")
            break

    more_games = input("Do you want to play again?\n(yes / no): ")

    if more_games == "no":
        playing = False





        