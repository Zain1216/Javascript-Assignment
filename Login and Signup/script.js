let persons = [
    {
        Email: 'zain@aptech.com',
        Password: 'zain123',
    },
    {
        Email: 'usama@aptech.com',
        Password: 'usama123',
    },
    {
        Email: 'sameer@aptech.com',
        Password: 'sameer123',
    },
    {
        Email: 'danish@aptech.com',
        Password: 'danish123',
    },
]

let isUserExist = false;

let Email = prompt('Enter your Email');
let Password = prompt('Enter your Password');

for (let i = 0; i < persons.length; i++) {
    if (Email === persons[i].Email && Password === persons[i].Password) {
        isUserExist = true;
        break;
    }
}

if (isUserExist) {
    console.log('Welcome to Aptech Portal');
    alert('Welcome to Aptech Portal');
} else {
    console.log("Sorry! I didn't find your Email & Password");
    alert("Sorry! I didn't find your Email & Password");
}
