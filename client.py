import requests

id = input("Enter id: ")
name = input("Enter name: ")
age = input("Enter age: ")

data = {
    'id': id,
    'name': name,
    'age': age,
}

URL = 'http://localhost:3000/students'
response = requests.post(URL, json=data)

print("Status Code:", response.status_code)
print("Response JSON:", response.json())