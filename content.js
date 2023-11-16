// content.js
function fillForm() {
    // Replace these selectors and values with the actual ones on the target webpage
    var formSelectors = {
        input1: '#mantine-x62fsu8g7',
        input2: '#mantine-ecpftqh89',
        input3: '#mantine-rczhudtfd',
        input4: '#mantine-u5m0cwzpw',
        input5: '#mantine-fl9tbnfv0',
        input6: '#mantine-z8vtm5g7v',
        submitButton: 'button[type="submit"]',
    };

    var formData = [
        {
            "name": "Chijioke Walker",
            "matNumber": "EDU2001989",
            "email": "chijioke walker@example.com",
            "password": "ee3wbbm5",
            "username": "chijioke walker37",
            "level": 300
        },
        {
            "name": "Okonkwo Adaugo",
            "matNumber": "EDU1901488",
            "email": "okonkwo adaugo@example.com",
            "password": "iqsa18pe",
            "username": "okonkwo adaugo55",
            "level": 400
        },
        {
            "name": "Amina Akintola",
            "matNumber": "EDU1906562",
            "email": "amina akintola@example.com",
            "password": "8ju4w62s",
            "username": "amina akintola40",
            "level": 400
        },
        {
            "name": "Adekunle Akande",
            "matNumber": "EDU1905871",
            "email": "adekunle akande@example.com",
            "password": "vhk3emun",
            "username": "adekunle akande78",
            "level": 400
        },
        {
            "name": "Oluwaseyi Adegoke",
            "matNumber": "EDU2002392",
            "email": "oluwaseyi adegoke@example.com",
            "password": "k064x5je",
            "username": "oluwaseyi adegoke51",
            "level": 300
        },
        {
            "name": "Johnson Chuka",
            "matNumber": "EDU1903280",
            "email": "johnson chuka@example.com",
            "password": "olmni10j",
            "username": "johnson chuka11",
            "level": 400
        },
        {
            "name": "Ngozi Olanrewaju",
            "matNumber": "EDU1901182",
            "email": "ngozi olanrewaju@example.com",
            "password": "54vung79",
            "username": "ngozi olanrewaju93",
            "level": 400
        },
        {
            "name": "Williams Ngozi",
            "matNumber": "EDU190642",
            "email": "williams ngozi@example.com",
            "password": "i1fpy9ws",
            "username": "williams ngozi97",
            "level": 400
        },
        {
            "name": "Emeka Wright",
            "matNumber": "EDU1905059",
            "email": "emeka wright@example.com",
            "password": "l8ittsx8",
            "username": "emeka wright99",
            "level": 400
        }
    ];

    function fillFormData(index) {
        if (index < formData.length) {
            var data = formData[index];
            document.querySelector(formSelectors.input1).value = data.name;
            document.querySelector(formSelectors.input2).value = data.username;
            document.querySelector(formSelectors.input3).value = data.email;
            document.querySelector(formSelectors.input4).value = data.matNumber;
            document.querySelector(formSelectors.input5).value = data.level;
            document.querySelector(formSelectors.input6).value = data.password;
            // document.querySelector(formSelectors.submitButton).click();

            // Wait for the form submission to complete (adjust timing as needed)
            // setTimeout(function () {
            //     fillFormData(index + 1);
            // }, 2000);
        }
    }

    fillFormData(0);
}
