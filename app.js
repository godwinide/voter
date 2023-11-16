import fs from 'fs'
const _nigerian_names = [
    "Chijioke Okonkwo",
    "Amina Adekunle",
    "Oluwaseyi Johnson",
    "Ngozi Williams",
    "Emeka Cole",
    "Folake Ogunleye",
    "Jibril Eze",
    "Adanna Peters",
    "Chinedu Blair",
    "Kemi Alabi",
    "Tolu Okafor",
    "Yusuf Oni",
    "Chioma Douglas",
    "Nnamdi Thompson",
    "Ezinne Harrison",
    "Oluwatobi Walker",
    "Obinna Smith",
    "Zainab Obi",
    "Chuka Davies",
    "Ify Adewale",
    "Ikenna White",
    "Halima Taylor",
    "Olumide James",
    "Nkechi Brown",
    "Adewale Ogundele",
    "Chinwezu Clark",
    "Folarin Okeke",
    "Chidinma Mitchell",
    "Olamide Lawson",
    "Uche Harrison",
    "Omotayo Wright",
    "Chijindu Nwosu",
    "Nafisat Briggs",
    "Ayodele Martin",
    "Adaugo Okocha",
    "Gideon Amadi",
    "Chiamaka Cole",
    "Obioma Okechukwu",
    "Femi Thompson",
    "Tariq Adebayo",
    "Chinonso Nnamdi",
    "Yewande Olatunji",
    "Jide Afolabi",
    "Temitope Akande",
    "Ogechi Nwachukwu",
    "Efe Osagie",
    "Chuka Ibe",
    "Hassan Odumosu",
    "Folashade Akintola",
    "Olufemi Oladipo",
    "Tochukwu Taylor",
    "Adegoke Smith",
    "Chinelo Johnson",
    "Chibuzo Okafor",
    "Simisola Cole",
    "Oluwadamilola Taylor",
    "Yakubu Okeke",
    "Bolanle Odumosu",
    "Chukwuemeka Daniels",
    "Folake Adeyemi",
    "Jide Okafor",
    "Ifunanya Taylor",
    "Abubakar Ali",
    "Chinwe Ogundele",
    "Yusuf Akintola",
    "Nneka Oluwatosin",
    "Olumide Alade",
    "Zara Davies",
    "Emmanuel Ogundipe",
    "Aisha Lawal",
    "Adewale Bakare",
    "Chinyere Smith",
    "Olamide Ogunbanjo",
    "Uzoma Obi",
    "Abdullahi Johnson",
    "Chioma Okafor",
    "Folashade Taylor",
    "Chigozie Ogunleye",
    "Habiba Oni",
    "Olalekan Akintola",
    "Ngozi Okechukwu",
    "Femi Abubakar",
    "Adebola Okeke",
    "Chinaza Okonkwo",
    "Oluwatoyin Alabi",
    "Chukwudi Cole",
    "Amina Adeyemi",
    "Nkemakonam Afolabi",
    "Bamidele Okafor",
    "Chidiebere Taylor",
    "Omotunde Ogunbanjo",
    "Gideon Adebayo",
    "Kafilat Okeke",
    "Olanrewaju Martins",
    "Obinna Okonkwo",
    "Chinwe Ezeh",
    "Adesola Ogunleye",
    "Chuka Adekunle",
    "Adejoke Ogunbanjo",
    "Chinedu Okafor",
    "Mariam Thompson",
    "Oladimeji Cole",
    "Chinonso Adeyemi",
    "Adeola Alade",
    "Chibuike Davies",
    "Kehinde Okafor",
    "Ngozi Abiodun",
    "Oluwafemi Alabi",
    "Ifeoluwa Balogun",
    "Aminu Ogunbanjo",
    "Chinwe Nwosu",
    "Olayinka Akintola",
    "Chukwudi Akande",
    "Zainab Oluwadare",
    "Emmanuel Ogunleye",
    "Adebayo Adeyemi",
    "Chidiebere Okechukwu",
    "Olubunmi Thompson",
    "Chinaza Okonkwo",
    "Olamide Ogunbanjo",
    "Ugochukwu Okeke",
    "Tolulope Afolabi",
    "Chijioke Adekunle",
    "Amina Adeyemi",
    "Oluwaseyi Johnson",
    "Ngozi Williams",
    "Emeka Cole",
    "Folake Ogunleye",
    "Jibril Eze",
    "Adanna Peters",
    "Chinedu Blair",
    "Kemi Alabi",
    "Tolu Okafor",
    "Yusuf Oni",
    "Chioma Douglas",
    "Nnamdi Thompson",
    "Ezinne Harrison",
    "Oluwatobi Walker",
    "Obinna Smith",
    "Zainab Obi",
    "Chuka Davies",
    "Ify Adewale",
    "Ikenna White",
    "Halima Taylor",
    "Olumide James",
    "Nkechi Brown",
    "Adewale Ogundele",
    "Chinwezu Clark",
    "Folarin Okeke",
    "Chidinma Mitchell",
    "Olamide Lawson",
    "Uche Harrison",
    "Omotayo Wright",
    "Chijindu Nwosu",
    "Nafisat Briggs",
    "Ayodele Martin",
    "Adaugo Okocha",
    "Gideon Amadi",
    "Chiamaka Cole",
    "Obioma Okechukwu",
    "Femi Thompson",
    "Tariq Adebayo",
    "Chinonso Nnamdi",
    "Yewande Olatunji",
    "Jide Afolabi",
    "Temitope Akande",
    "Ogechi Nwachukwu",
    "Efe Osagie",
    "Chuka Ibe",
    "Hassan Odumosu",
    "Folashade Akintola",
    "Olufemi Oladipo",
    "Tochukwu Taylor",
    "Adegoke Smith",
    "Chinelo Johnson",
    "Chibuzo Okafor",
    "Simisola Cole",
    "Oluwadamilola Taylor",
    "Yakubu Okeke",
    "Bolanle Odumosu",
    "Chukwuemeka Daniels",
    "Folake Adeyemi",
    "Jide Okafor",
    "Ifunanya Taylor",
    "Abubakar Ali",
    "Chinwe Ogundele",
    "Yusuf Akintola",
    "Nneka Oluwatosin",
    "Olumide Alade",
    "Zara Davies",
    "Emmanuel Ogundipe",
    "Aisha Lawal",
    "Adewale Bakare",
    "Chinyere Smith",
    "Olamide Ogunbanjo",
    "Uzoma Obi",
    "Abdullahi Johnson",
    "Chioma Okafor",
    "Folashade Taylor",
    "Chigozie Ogunleye",
    "Habiba Oni",
    "Olalekan Akintola",
    "Ngozi Okechukwu",
    "Femi Abubakar",
    "Adebola Okeke",
    "Chinaza Okonkwo",
    "Oluwatoyin Alabi",
    "Chukwudi Cole",
    "Amina Adeyemi",
    "Nkemakonam Afolabi",
    "Bamidele Okafor",
    "Chidiebere Taylor",
    "Omotunde Ogunbanjo",
    "Gideon Adebayo",
    "Kafilat Okeke",
    "Olanrewaju Martins",
    "Obinna Okonkwo",
    "Chinwe Ezeh",
    "Adesola Ogunleye",
    "Chuka Adekunle",
    "Adejoke Ogunbanjo",
    "Chinedu Okafor",
    "Mariam Thompson",
    "Oladimeji Cole",
    "Chinonso Adeyemi",
    "Adeola Alade",
    "Chibuike Davies",
    "Kehinde Okafor",
    "Ngozi Abiodun",
    "Oluwafemi Alabi",
    "Ifeoluwa Balogun",
    "Aminu Ogunbanjo",
    "Chinwe Nwosu",
    "Olayinka Akintola",
    "Chukwudi Akande",
    "Zainab Oluwadare",
    "Emmanuel Ogunleye",
    "Adebayo Adeyemi",
    "Chidiebere Okechukwu",
    "Olubunmi Thompson",
]


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const nigerian_names = [
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names,
    ..._nigerian_names
];

shuffleArray(nigerian_names);


const courses = [
    "Computer Education",
    "Physics Education",
    "Integrated Science",
    "Chemistry Education",
    "Biology Education"
]

const namesArray = [];

nigerian_names.forEach(n => {
    const names = n.split(" ");
    namesArray.push(...names);
})


// Function to generate a random 10-digit mat number starting with either EDU190 or EDU20
function generateMatNumber() {
    var prefixes = ["EDU190", "EDU200"];
    var randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    var randomNumberPart = Math.floor(Math.random() * 7 * 1000) // Generates a random 9-digit number
    return randomPrefix + randomNumberPart;
}

// Function to generate a random email address based on the name
function generateEmail(name) {
    var lowerCaseName = name.toLowerCase() + Math.floor((Math.random() + 1) * 1123);
    return lowerCaseName + "@gmail.com";
}

// Function to generate a random password
function generatePassword() {
    // This is a simple example, you might want to use a more secure method for generating passwords
    return Math.random().toString(36).slice(-8);
}

// Function to generate a random username based on the name
function generateUsername(name) {
    var lowerCaseName = name.toLowerCase();
    return lowerCaseName + Math.floor(Math.random() * 100); // Appending a random number
}

// Function to determine the level based on the mat number prefix
function determineLevel(matNumber) {
    return matNumber.startsWith("EDU20") ? 300 : 400;
}

// Function to generate an object with the specified properties for each name
function generateUserObjects(namesArray) {
    return namesArray.map(function (name) {
        var lastName = namesArray[Math.floor(Math.random() * namesArray.length)];
        var fullName = name + " " + lastName;
        var matNumber = generateMatNumber();
        var email = generateEmail(lastName);
        var password = generatePassword();
        var username = generateUsername(lastName);
        var level = determineLevel(matNumber);

        return {
            name: fullName,
            "mat number ": matNumber,
            email: email,
            password: password,
            username: username,
            level: level,
            "course area": courses[Math.floor(Math.random() * 4)]
        };
    });
}

// Generate user objects
var userObjects = generateUserObjects(namesArray);

console.log(userObjects.length)

var jsonContent = JSON.stringify(userObjects, null, 2); // the third argument is for formatting (2 spaces indentation)

// Write to a JSON file
fs.writeFile('user_profiles3.json', jsonContent, 'utf8', function (err) {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('JSON file has been written successfully!');
    }
});


// Display the generated objects
// console.log(userObjects.length);
// console.log(namesArray.length)


