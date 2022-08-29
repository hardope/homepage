import csv
import sys
import pandas

data = []

def main():


    while True:
        action = input("Action: ")
        if action.strip().lower() == 'search':
            search_contacts()
            print("")

        if action.strip().lower() == 'new contact':
            new_contact()
            print("")

        if action.strip().lower() == 'exit':
            sys.exit()

        if action.strip().lower() == 'list':
            list_names()
            print("")

        if action.strip().lower() == 'delete contact':
            delete_contact()
            print("")


def search_contacts():
    data = []
    b = 0

    with open('Data.csv', "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            names = row['names']
            numbers = row['numbers']
            email = row['email']
            data.append({'names': names, 'numbers': numbers, 'email': email})

    search = input("Search: ").strip()
    print("Searching............")
    for i in range(len(data)):
        if search.lower() == data[i]['names'].lower() or search == data[i]['numbers'] or search == data[i]['email']:
            print(f"Name: {data[i]['names']}")
            print(f"Number: {data[i]['numbers']}")
            print(f"E-Mail: {data[i]['email']}")
            b += 1
            return
    if b == 0:
        print("Not Found")
        return

def new_contact():
    data = []
    a = 0
    with open('Data.csv', "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            names = row['names']
            numbers = row['numbers']
            email = row['email']
            data.append({'names': names, 'numbers': numbers, 'email': email})

        names = input("Name: ").strip()

        for i in range(len(data)):
            if names.lower() == data[i]['names'].lower():
                a += 1
                print("Name Exists..")
                return
        numbers = input("Number: ").strip()
        email = input("E-Mail: ").strip()

    with open('Data.csv', "a") as new_file:
        writer = csv.writer(new_file)
        writer.writerow({names : names, numbers : numbers, email: email})
        print("Saved.")
        return



def list_names():
    with open('Data.csv', "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            print(row['names'])

def delete_contact():
    z = 0
    b = 0
    Details = ['names','numbers','email']
    contact = input("Contact to delete: ").strip()
    print("Searching............")
    new_data = []
    with open('Data.csv', "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            names = row['names']
            numbers = row['numbers']
            email = row['email']
            data.append({'names': names, 'numbers': numbers, 'email': email})

        for i in range(len(data)):
            if contact.lower() == data[i]['names'].lower():
                print("Found.........\nDeleting......")

    with open('Data.csv', "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            if contact.lower() != row['names']:
                names = row['names']
                numbers = row['numbers']
                email = row['email']
                new_data.append({'names': names, 'numbers': numbers, 'email': email})


    with open('Data.csv', "w") as file:
        write = csv.writer(file)
        write.writerow(Details)

    with open('Data.csv', "a") as new_file:
        print(len(new_data))
        for i in range(len(new_data)):
            print(new_data[i]['names'])
            writer = csv.writer(new_file)
            writer.writerow({names : new_data[i]['names'], numbers : new_data[i]['numbers'], email : new_data[i]['email']})

    print("Deleted.")

    return

if __name__ == "__main__":
    main()

