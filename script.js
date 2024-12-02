// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Firebase configuration (Ensure to secure this)

const firebaseConfig = {
    apiKey: "AIzaSyBECV0o9hTB-Ht5HazJ0l7pif7aEDYv3Iw",
    authDomain: "quiz-maker-32ed0.firebaseapp.com",
    databaseURL: "https://quiz-maker-32ed0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quiz-maker-32ed0",
    storageBucket: "quiz-maker-32ed0.firebasestorage.app",
    messagingSenderId: "413118107082",
    appId: "1:413118107082:web:ecc58f4f3b582c7a319333",
    measurementId: "G-R0QKG3SCMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Questions
const questions = [ 
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        correctAnswer: "Ottawa",
    },
    {
        question: "What is the SI unit of temperature?",
        options: ["Kelvin", "Celsius", "Fahrenheit", "Rankine"],
        correctAnswer: "Kelvin",
    },
    {
        question: "Which element has the atomic number 8?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon"],
        correctAnswer: "Oxygen",
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correctAnswer: "Pacific Ocean",
    },
    {
        question: "What is the term for the process by which plants lose water vapor?",
        options: ["Photosynthesis", "Transpiration", "Evaporation", "Condensation"],
        correctAnswer: "Transpiration",
    },
    {
        question: "What does LAN stand for?",
        options: ["Local Access Network", "Large Area Network", "Local Area Network", "Long Area Network"],
        correctAnswer: "Local Area Network",
    },
    {
        question: "What is the smallest unit of life?",
        options: ["Tissue", "Organ", "Cell", "Molecule"],
        correctAnswer: "Cell",
    },
    {
        question: "What is the process by which a caterpillar becomes a butterfly?",
        options: ["Fertilization", "Metamorphosis", "Evolution", "Pollination"],
        correctAnswer: "Metamorphosis",
    },
    {
        question: "What is the currency of the United Kingdom?",
        options: ["Euro", "Dollar", "Pound Sterling", "Franc"],
        correctAnswer: "Pound Sterling",
    },
    {
        question: "What is the speed of sound in air at sea level?",
        options: ["300 m/s", "343 m/s", "400 m/s", "500 m/s"],
        correctAnswer: "343 m/s",
    },
    {
        question: "Who wrote *Romeo and Juliet*?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare",
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
        correctAnswer: "Tokyo",
    },
    {
        question: "What does JSON stand for?",
        options: ["JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Open Network", "Java Syntax Object Network"],
        correctAnswer: "JavaScript Object Notation",
    },
    {
        question: "Which planet is known as the Evening Star?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        correctAnswer: "Venus",
    },
    {
        question: "What is the freezing point of water in Kelvin?",
        options: ["0 K", "100 K", "273 K", "373 K"],
        correctAnswer: "273 K",
    },
    {
        question: "Which animal is known as the Ship of the Desert?",
        options: ["Elephant", "Camel", "Horse", "Donkey"],
        correctAnswer: "Camel",
    },
    {
        question: "What does RAM stand for?",
        options: ["Random Access Memory", "Read-Only Memory", "Rapid Access Module", "Remote Access Memory"],
        correctAnswer: "Random Access Memory",
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        correctAnswer: "Brasília",
    },
    {
        question: "Which country is known as the Land of a Thousand Lakes?",
        options: ["Sweden", "Finland", "Norway", "Iceland"],
        correctAnswer: "Finland",
    },
    {
        question: "What is the term for the process by which rocks are broken down by natural forces?",
        options: ["Erosion", "Weathering", "Deposition", "Crystallization"],
        correctAnswer: "Weathering",
    },
    {
        question: "What is the primary function of white blood cells?",
        options: ["Transport oxygen", "Clot blood", "Fight infections", "Digest food"],
        correctAnswer: "Fight infections",
    },
    {
        question: "What does AI stand for?",
        options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Integration", "Applied Informatics"],
        correctAnswer: "Artificial Intelligence",
    },
    {
        question: "What is the main gas responsible for the greenhouse effect?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        correctAnswer: "Carbon Dioxide",
    },
    {
        question: "Which is the smallest bone in the human body?",
        options: ["Femur", "Tibia", "Stapes", "Ulna"],
        correctAnswer: "Stapes",
    },
    {
        question: "Who is known as the father of computers?",
        options: ["Alan Turing", "Charles Babbage", "John von Neumann", "George Boole"],
        correctAnswer: "Charles Babbage",
    },
    {
        question: "What is the largest land animal?",
        options: ["White Rhino", "Elephant", "Giraffe", "Hippopotamus"],
        correctAnswer: "Elephant",
    },
    {
        question: "What is the term for a community of living organisms interacting with their environment?",
        options: ["Habitat", "Biosphere", "Ecosystem", "Biome"],
        correctAnswer: "Ecosystem",
    },
    {
        question: "What does SMTP stand for?",
        options: ["Simple Mail Transfer Protocol", "Secure Mail Transfer Protocol", "Simple Messaging Text Protocol", "Secure Messaging Transmission Protocol"],
        correctAnswer: "Simple Mail Transfer Protocol",
    },
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        correctAnswer: "Delhi",
    },
    {
        question: "What is the largest moon of Saturn?",
        options: ["Titan", "Europa", "Ganymede", "Callisto"],
        correctAnswer: "Titan",
    },
    {
        question: "Which layer of the atmosphere contains the ozone layer?",
        options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
        correctAnswer: "Stratosphere",
    },
    {
        question: "What is the main ingredient in sushi?",
        options: ["Fish", "Rice", "Seaweed", "Soy Sauce"],
        correctAnswer: "Rice",
    },
    {
        question: "Which country is famous for its pyramids?",
        options: ["Mexico", "Egypt", "Peru", "Greece"],
        correctAnswer: "Egypt",
    },
    {
        question: "What does URL stand for?",
        options: ["Universal Resource Locator", "Uniform Resource Locator", "Unified Reference Locator", "Unique Resource Locator"],
        correctAnswer: "Uniform Resource Locator",
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        correctAnswer: "2",
    },
    {
        question: "Which element has the chemical symbol 'He'?",
        options: ["Helium", "Hafnium", "Hydrogen", "Holmium"],
        correctAnswer: "Helium",
    },
    {
        question: "Which is the hottest planet in the solar system?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        correctAnswer: "Venus",
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Si", "Ag", "Au", "Sr"],
        correctAnswer: "Ag",
    },
    {
        question: "Which animal is known as the king of the jungle?",
        options: ["Tiger", "Lion", "Leopard", "Elephant"],
        correctAnswer: "Lion",
    },
    {
        question: "Which country is the largest producer of tea in the world?",
        options: ["India", "China", "Sri Lanka", "Kenya"],
        correctAnswer: "China",
    },
    {
        question: "What is the basic unit of a chemical element?",
        options: ["Molecule", "Atom", "Compound", "Proton"],
        correctAnswer: "Atom",
    },
    {
        question: "What does DNS stand for in networking?",
        options: ["Domain Name System", "Digital Network Service", "Domain Network Server", "Dynamic Name Server"],
        correctAnswer: "Domain Name System",
    },
    {
        question: "What is the main function of chlorophyll in plants?",
        options: ["Respiration", "Photosynthesis", "Pollination", "Reproduction"],
        correctAnswer: "Photosynthesis",
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Skin", "Liver", "Brain"],
        correctAnswer: "Skin",
    },
    {
        question: "Who painted *The Last Supper*?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        correctAnswer: "Leonardo da Vinci",
    },

    {
        question: "What is the capital of Germany?",
        options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
        correctAnswer: "Berlin",
    },
    {
        question: "What does the acronym 'Wi-Fi' stand for?",
        options: ["Wireless Fidelity", "Wireless Frequency", "Wide Fidelity", "Wide Frequency"],
        correctAnswer: "Wireless Fidelity",
    },
    {
        question: "What is the smallest unit of a chemical element?",
        options: ["Molecule", "Atom", "Electron", "Proton"],
        correctAnswer: "Atom",
    },
    {
        question: "Which programming language is used for creating web pages?",
        options: ["Python", "JavaScript", "HTML", "C++"],
        correctAnswer: "HTML",
    },
    {
        question: "What is the term for a group of wolves?",
        options: ["Herd", "Pack", "Flock", "Pride"],
        correctAnswer: "Pack",
    },
    {
        question: "Which planet has the tallest volcano in the solar system?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
    },
    {
        question: "Which organ is responsible for detoxifying chemicals and metabolizing drugs in the human body?",
        options: ["Kidneys", "Liver", "Pancreas", "Spleen"],
        correctAnswer: "Liver",
    },
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "HO2", "O2H", "OH2"],
        correctAnswer: "H2O",
    },
    {
        question: "What is the capital of South Africa?",
        options: ["Pretoria", "Cape Town", "Bloemfontein", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        question: "Which country is known for the Great Barrier Reef?",
        options: ["Brazil", "Australia", "Indonesia", "South Africa"],
        correctAnswer: "Australia",
    },
    {
        question: "What does DNS stand for in networking?",
        options: ["Domain Name System", "Digital Network Service", "Domain Network Server", "Digital Name Server"],
        correctAnswer: "Domain Name System",
    },
    {
        question: "Which gas is responsible for global warming?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        correctAnswer: "Carbon Dioxide",
    },
    {
        question: "Which programming language is associated with Android development?",
        options: ["Swift", "Kotlin", "C#", "PHP"],
        correctAnswer: "Kotlin",
    },
    {
        question: "Which continent is the largest by land area?",
        options: ["Africa", "Asia", "North America", "Europe"],
        correctAnswer: "Asia",
    },
    {
        question: "What is the square root of 49?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "7",
    },
    {
        question: "Who discovered electricity?",
        options: ["Thomas Edison", "Benjamin Franklin", "Nikola Tesla", "Michael Faraday"],
        correctAnswer: "Benjamin Franklin",
    },
    {
        question: "Which country is famous for the Eiffel Tower?",
        options: ["Germany", "France", "Italy", "Spain"],
        correctAnswer: "France",
    },
    {
        question: "What is the chemical symbol for calcium?",
        options: ["Ca", "Cl", "C", "Ce"],
        correctAnswer: "Ca",
    },
    {
        question: "What is the main function of the root system in plants?",
        options: ["Photosynthesis", "Water absorption", "Pollination", "Reproduction"],
        correctAnswer: "Water absorption",
    },
    {
        question: "Which type of blood cells are responsible for clotting?",
        options: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
        correctAnswer: "Platelets",
    },
    {
        question: "What is the primary ingredient in traditional hummus?",
        options: ["Lentils", "Chickpeas", "Soybeans", "Peas"],
        correctAnswer: "Chickpeas",
    },
    {
        question: "Which planet is the second from the Sun?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        correctAnswer: "Venus",
    },
    {
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Applied Program Interaction", "Automated Programming Interaction", "Application Program Integration"],
        correctAnswer: "Application Programming Interface",
    },
    {
        question: "Which is the world's largest desert?",
        options: ["Sahara", "Antarctic", "Gobi", "Kalahari"],
        correctAnswer: "Antarctic",
    },
    {
        question: "What is the main language spoken in Argentina?",
        options: ["French", "Portuguese", "Spanish", "English"],
        correctAnswer: "Spanish",
    },
    {
        question: "What is the process of heating liquids to remove bacteria called?",
        options: ["Pasteurization", "Sterilization", "Filtration", "Fermentation"],
        correctAnswer: "Pasteurization",
    },
    {
        question: "Which organ is primarily responsible for pumping blood?",
        options: ["Liver", "Lungs", "Heart", "Kidneys"],
        correctAnswer: "Heart",
    },
    {
        question: "What is the main programming language used for web styling?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        correctAnswer: "CSS",
    },
    {
        question: "Who painted the Sistine Chapel ceiling?",
        options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
        correctAnswer: "Michelangelo",
    },
    {
        question: "What does HTTPS stand for?",
        options: ["Hyper Text Transfer Protocol Secure", "Hyper Text Transmission Protocol Secure", "Hyperlink Transfer Protocol Secure", "Hyperlink Transmission Protocol Secure"],
        correctAnswer: "Hyper Text Transfer Protocol Secure",
    },
    {
        question: "Which is the largest island in the world?",
        options: ["Madagascar", "Greenland", "New Guinea", "Borneo"],
        correctAnswer: "Greenland",
    },
    {
        question: "What is the term for a word that has the same spelling but a different meaning?",
        options: ["Homonym", "Synonym", "Antonym", "Homophone"],
        correctAnswer: "Homonym",
    },
    {
        question: "Which instrument is used to measure atmospheric pressure?",
        options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
        correctAnswer: "Barometer",
    },
    {
        question: "What is the hardest natural material on Earth?",
        options: ["Gold", "Granite", "Diamond", "Quartz"],
        correctAnswer: "Diamond",
    },
    {
        question: "What is the SI unit of force?",
        options: ["Joule", "Newton", "Pascal", "Watt"],
        correctAnswer: "Newton",
    },
    {
        question: "Who developed the polio vaccine?",
        options: ["Jonas Salk", "Louis Pasteur", "Alexander Fleming", "Edward Jenner"],
        correctAnswer: "Jonas Salk",
    },
    {
        question: "What is the atomic number of carbon?",
        options: ["4", "6", "8", "12"],
        correctAnswer: "6",
    },
    {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "12",
    },
    {
        question: "Which programming language is best known for its simplicity and readability?",
        options: ["C++", "Java", "Python", "Perl"],
        correctAnswer: "Python",
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Rupee"],
        correctAnswer: "Yen",
    },
    {
        question: "What does RAM stand for?",
        options: ["Random Access Memory", "Read-Only Memory", "Rapid Access Module", "Remote Access Memory"],
        correctAnswer: "Random Access Memory",
    },
    {
        question: "Which is the longest river in North America?",
        options: ["Mississippi", "Missouri", "Rio Grande", "Colorado"],
        correctAnswer: "Missouri",
    },
    {
        question: "What is the main function of red blood cells?",
        options: ["Clot blood", "Fight infections", "Transport oxygen", "Digest food"],
        correctAnswer: "Transport oxygen",
    },
    {
        question: "Which is the smallest planet in our solar system?",
        options: ["Mars", "Mercury", "Venus", "Pluto"],
        correctAnswer: "Mercury",
    },
    {
        question: "What is the term for molten rock beneath the Earth's surface?",
        options: ["Lava", "Magma", "Basalt", "Ash"],
        correctAnswer: "Magma",
    },
    {
        question: "What is the chemical symbol for potassium?",
        options: ["K", "P", "Pt", "Po"],
        correctAnswer: "K",
    },
    {
        question: "What is the primary gas in the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        correctAnswer: "Nitrogen",
    },
    {
        question: "What is the capital of Spain?",
        options: ["Madrid", "Barcelona", "Seville", "Valencia"],
        correctAnswer: "Madrid",
    },
    {
        question: "What is the term for animals that eat only plants?",
        options: ["Carnivores", "Omnivores", "Herbivores", "Insectivores"],
        correctAnswer: "Herbivores",
    },
    {
        question: "Which organ in the human body produces bile?",
        options: ["Liver", "Pancreas", "Gallbladder", "Kidneys"],
        correctAnswer: "Liver",
    },
    {
        question: "What does HTTP stand for?",
        options: ["Hyper Text Transfer Protocol", "Hyper Text Transmission Protocol", "Hyperlink Transfer Protocol", "Hyperlink Transmission Protocol"],
        correctAnswer: "Hyper Text Transfer Protocol",
    },
    {
        question: "What is the largest planet in the solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Neptune"],
        correctAnswer: "Jupiter",
    },
    {
        question: "What is the capital of Russia?",
        options: ["St. Petersburg", "Moscow", "Novosibirsk", "Kazan"],
        correctAnswer: "Moscow",
    },
    {
        question: "Which element is represented by the symbol 'N'?",
        options: ["Nickel", "Neon", "Nitrogen", "Nihonium"],
        correctAnswer: "Nitrogen",
    },
    {
        question: "What is the boiling point of water in Fahrenheit?",
        options: ["100°F", "180°F", "212°F", "220°F"],
        correctAnswer: "212°F",
    },
    {
        question: "Which river is the longest in Europe?",
        options: ["Danube", "Volga", "Rhine", "Seine"],
        correctAnswer: "Volga",
    },
    {
        question: "What is the chemical symbol for copper?",
        options: ["Co", "Cu", "Cr", "C"],
        correctAnswer: "Cu",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        correctAnswer: "Japan",
    },
    {
        question: "Which continent is the Sahara Desert located on?",
        options: ["Asia", "Africa", "Australia", "South America"],
        correctAnswer: "Africa",
    },
    {
        question: "What does USB stand for?",
        options: ["Universal Serial Bus", "Universal System Bus", "Universal Signal Bus", "Universal Source Bus"],
        correctAnswer: "Universal Serial Bus",
    },
    {
        question: "What is the term for a baby kangaroo?",
        options: ["Cub", "Joey", "Calf", "Pup"],
        correctAnswer: "Joey",
    },
    {
        question: "What is the main language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        correctAnswer: "Portuguese",
    },
    {
        question: "Which is the largest freshwater lake by volume in the world?",
        options: ["Lake Victoria", "Lake Baikal", "Lake Superior", "Lake Tanganyika"],
        correctAnswer: "Lake Baikal",
    },
    {
        question: "Who is the Greek god of the underworld?",
        options: ["Zeus", "Poseidon", "Hades", "Apollo"],
        correctAnswer: "Hades",
    },
    {
        question: "What does the acronym 'IP' stand for in networking?",
        options: ["Internet Protocol", "Interconnected Process", "Input Packet", "Integrated Path"],
        correctAnswer: "Internet Protocol",
    },
    {
        question: "Which programming language is primarily used for developing iOS applications?",
        options: ["Kotlin", "Java", "Swift", "C++"],
        correctAnswer: "Swift",
    },
    {
        question: "Which famous scientist discovered the law of universal gravitation?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
        correctAnswer: "Isaac Newton",
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Liechtenstein", "San Marino", "Vatican City"],
        correctAnswer: "Vatican City",
    },
    {
        question: "Which programming language is known for its use in data analysis and visualization?",
        options: ["Java", "Python", "C++", "R"],
        correctAnswer: "R",
    },
    {
        question: "What is the term for an organism that makes its own food?",
        options: ["Heterotroph", "Autotroph", "Carnivore", "Decomposer"],
        correctAnswer: "Autotroph",
    },
    {
        question: "Which is the smallest particle of an element?",
        options: ["Molecule", "Atom", "Proton", "Electron"],
        correctAnswer: "Atom",
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Canberra", "Melbourne", "Perth"],
        correctAnswer: "Canberra",
    },
    {
        question: "Which programming concept uses 'inheritance' and 'polymorphism'?",
        options: ["Functional Programming", "Object-Oriented Programming", "Procedural Programming", "Event-Driven Programming"],
        correctAnswer: "Object-Oriented Programming",
    },
    {
        question: "What is the term for a word with the opposite meaning of another word?",
        options: ["Synonym", "Antonym", "Homonym", "Homophone"],
        correctAnswer: "Antonym",
    },
    {
        question: "What is the chemical formula for carbon dioxide?",
        options: ["CO2", "CO", "C2O", "CO3"],
        correctAnswer: "CO2",
    },
    {
        question: "Which animal is known as the king of the jungle?",
        options: ["Tiger", "Lion", "Elephant", "Leopard"],
        correctAnswer: "Lion",
    },
    {
        question: "What is the sum of angles in a triangle?",
        options: ["90°", "180°", "360°", "270°"],
        correctAnswer: "180°",
    },
    {
        question: "What is the capital of Italy?",
        options: ["Rome", "Venice", "Florence", "Milan"],
        correctAnswer: "Rome",
    },
    {
        question: "Which planet has the most moons?",
        options: ["Saturn", "Jupiter", "Mars", "Neptune"],
        correctAnswer: "Saturn",
    },
    {
        question: "What is the name of the famous clock tower in London?",
        options: ["Big Ben", "London Eye", "Tower of London", "St. Paul's Cathedral"],
        correctAnswer: "Big Ben",
    },
    {
        question: "What is the process by which water changes into vapor?",
        options: ["Condensation", "Evaporation", "Precipitation", "Sublimation"],
        correctAnswer: "Evaporation",
    },
    {
        question: "Who was the first president of the United States?",
        options: ["Thomas Jefferson", "Abraham Lincoln", "John Adams", "George Washington"],
        correctAnswer: "George Washington",
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Iron", "Diamond", "Quartz", "Graphite"],
        correctAnswer: "Diamond",
    },
    {
        question: "Which country is the largest producer of coffee in the world?",
        options: ["Colombia", "Brazil", "Vietnam", "Ethiopia"],
        correctAnswer: "Brazil",
    },
    {
        question: "What is the primary ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Cucumber", "Pepper"],
        correctAnswer: "Avocado",
    },
    {
        question: "What does the term 'CPU' stand for?",
        options: ["Central Processing Unit", "Computer Processing Unit", "Central Programming Unit", "Core Processing Unit"],
        correctAnswer: "Central Processing Unit",
    },
    {
        question: "What is the capital of Egypt?",
        options: ["Alexandria", "Cairo", "Giza", "Luxor"],
        correctAnswer: "Cairo",
    },
    {
        question: "Which metal is liquid at room temperature?",
        options: ["Mercury", "Lead", "Silver", "Gold"],
        correctAnswer: "Mercury",
    },
    {
        question: "What is the chemical symbol for hydrogen?",
        options: ["H", "He", "Hy", "Hg"],
        correctAnswer: "H",
    },
    {
        question: "Which is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        correctAnswer: "Skin",
    },
    {
        question: "Which ocean is the deepest in the world?",
        options: ["Atlantic", "Pacific", "Indian", "Arctic"],
        correctAnswer: "Pacific",
    },
    {
        question: "What is the primary function of the lungs?",
        options: ["Pump blood", "Filter toxins", "Facilitate respiration", "Digest food"],
        correctAnswer: "Facilitate respiration",
    },
    {
        question: "What is the capital of Greece?",
        options: ["Athens", "Sparta", "Delphi", "Thessaloniki"],
        correctAnswer: "Athens",
    },
    {
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Ampere", "Watt", "Ohm"],
        correctAnswer: "Ampere",
    },
    {
        question: "What does PDF stand for?",
        options: ["Portable Document Format", "Public Document Format", "Printed Digital File", "Private Document File"],
        correctAnswer: "Portable Document Format",
    },
    {
        question: "Which programming language is known for its snake logo?",
        options: ["Python", "Java", "Ruby", "Swift"],
        correctAnswer: "Python",
    },
    {
        question: "What is the main component of the sun?",
        options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
        correctAnswer: "Hydrogen",
    },
    {
        question: "Who is the author of *To Kill a Mockingbird*?",
        options: ["Harper Lee", "J.D. Salinger", "George Orwell", "Ernest Hemingway"],
        correctAnswer: "Harper Lee",
    },
    {
        question: "Which river is the longest in Asia?",
        options: ["Yangtze", "Ganges", "Mekong", "Yellow River"],
        correctAnswer: "Yangtze",
    },
    {
        question: "What is the study of weather called?",
        options: ["Geology", "Meteorology", "Astronomy", "Ecology"],
        correctAnswer: "Meteorology",
    },
    {
        question: "Which layer of the Earth is liquid?",
        options: ["Crust", "Mantle", "Outer Core", "Inner Core"],
        correctAnswer: "Outer Core",
    },
    {
        question: "Which planet has the Great Red Spot?",
        options: ["Mars", "Jupiter", "Saturn", "Neptune"],
        correctAnswer: "Jupiter",
    },
    {
        question: "What is the capital of Turkey?",
        options: ["Istanbul", "Ankara", "Izmir", "Bursa"],
        correctAnswer: "Ankara",
    },
    {
        question: "What is the binary equivalent of decimal 10?",
        options: ["1000", "1010", "1100", "1110"],
        correctAnswer: "1010",
    },
    {
        question: "Which planet is the smallest in our solar system?",
        options: ["Mars", "Mercury", "Venus", "Pluto"],
        correctAnswer: "Mercury",
    },
    {
        question: "Who wrote *1984*?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
        correctAnswer: "George Orwell",
    },
    {
        question: "What does GPU stand for?",
        options: ["Graphics Processing Unit", "General Processing Unit", "Graphical Program Unit", "Graphical Peripheral Unit"],
        correctAnswer: "Graphics Processing Unit",
    },
    {
        question: "Which type of electromagnetic wave has the longest wavelength?",
        options: ["Gamma Rays", "X-rays", "Microwaves", "Radio Waves"],
        correctAnswer: "Radio Waves",
    },
    {
        question: "What is the atomic number of helium?",
        options: ["1", "2", "4", "8"],
        correctAnswer: "2",
    },
    {
        question: "What is the capital of South Korea?",
        options: ["Busan", "Seoul", "Incheon", "Daegu"],
        correctAnswer: "Seoul",
    },
    {
        question: "Which programming concept uses 'if' and 'else' statements?",
        options: ["Looping", "Conditionals", "Recursion", "Polymorphism"],
        correctAnswer: "Conditionals",
    },
    {
        question: "Which is the largest internal organ in the human body?",
        options: ["Liver", "Heart", "Lungs", "Intestines"],
        correctAnswer: "Liver",
    },
    {
        question: "What is the first element on the periodic table?",
        options: ["Helium", "Oxygen", "Hydrogen", "Lithium"],
        correctAnswer: "Hydrogen",
    },
    {
        question: "Which is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
    },
    {
        question: "What is the square of 15?",
        options: ["225", "200", "215", "250"],
        correctAnswer: "225",
    },
    {
        question: "What is the process plants use to convert sunlight into energy?",
        options: ["Respiration", "Photosynthesis", "Digestion", "Oxidation"],
        correctAnswer: "Photosynthesis",
    },
    {
        question: "Which country has the largest population in the world?",
        options: ["India", "China", "United States", "Indonesia"],
        correctAnswer: "China",
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["90°C", "100°C", "120°C", "80°C"],
        correctAnswer: "100°C",
    },
    {
        question: "Which animal is known for its black-and-white striped coat?",
        options: ["Tiger", "Zebra", "Panda", "Skunk"],
        correctAnswer: "Zebra",
    },
    {
        question: "What does XML stand for?",
        options: ["Extensible Markup Language", "Executable Markup Language", "Extra Markup Language", "Extension Markup Language"],
        correctAnswer: "Extensible Markup Language",
    },
    {
        question: "Who painted the *Starry Night*?",
        options: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Leonardo da Vinci"],
        correctAnswer: "Vincent van Gogh",
    },
    {
        question: "What is the chemical formula for salt?",
        options: ["NaCl", "KCl", "H2O", "CO2"],
        correctAnswer: "NaCl",
    },
    {
        question: "Which layer of the atmosphere is closest to Earth?",
        options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
        correctAnswer: "Troposphere",
    },
    {
        question: "Which country is the largest by land area?",
        options: ["Canada", "China", "United States", "Russia"],
        correctAnswer: "Russia",
    },
    {
        question: "What is the name of the device used to measure earthquakes?",
        options: ["Barometer", "Seismograph", "Thermometer", "Anemometer"],
        correctAnswer: "Seismograph",
    },
    {
        question: "Which planet is closest to the sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        correctAnswer: "Mercury",
    },
    {
        question: "Which number system uses only 0s and 1s?",
        options: ["Decimal", "Binary", "Hexadecimal", "Octal"],
        correctAnswer: "Binary",
    },
    {
        question: "What is the name of the main character in *The Legend of Zelda*?",
        options: ["Zelda", "Link", "Ganon", "Mario"],
        correctAnswer: "Link",
    },
    {
        question: "What does the abbreviation 'LAN' stand for?",
        options: ["Local Access Network", "Local Area Network", "Large Area Network", "Linked Access Network"],
        correctAnswer: "Local Area Network",
    },
    {
        question: "What is the third planet from the sun?",
        options: ["Mars", "Earth", "Venus", "Mercury"],
        correctAnswer: "Earth",
    },
    {
        question: "Who invented the light bulb?",
        options: ["Nikola Tesla", "Thomas Edison", "Benjamin Franklin", "Alexander Graham Bell"],
        correctAnswer: "Thomas Edison",
    },
    {
        question: "Which continent is the Amazon Rainforest located on?",
        options: ["Africa", "Asia", "South America", "Australia"],
        correctAnswer: "South America",
    },
    {
        question: "What is the chemical symbol for iron?",
        options: ["Ir", "Fe", "In", "I"],
        correctAnswer: "Fe",
    },
    {
        question: "What is the main source of energy for the Earth?",
        options: ["Wind", "Sun", "Geothermal", "Water"],
        correctAnswer: "Sun",
    },
    {
        question: "What is the primary gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        correctAnswer: "Nitrogen",
    },
    {
        question: "Which country is home to the Great Wall?",
        options: ["Japan", "China", "India", "Mongolia"],
        correctAnswer: "China",
    },
    {
        question: "What does RAM stand for in computers?",
        options: ["Read Access Memory", "Random Access Memory", "Read-Only Memory", "Rapid Access Memory"],
        correctAnswer: "Random Access Memory",
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Gd", "Pb"],
        correctAnswer: "Au",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Mercury", "Saturn"],
        correctAnswer: "Mars",
    },
    {
        question: "What is the primary function of the heart?",
        options: ["Pump blood", "Filter oxygen", "Produce enzymes", "Digest food"],
        correctAnswer: "Pump blood",
    },
    {
        question: "What is the capital of the United States?",
        options: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],
        correctAnswer: "Washington D.C.",
    },
    {
        question: "What is the most widely spoken language in the world?",
        options: ["English", "Mandarin", "Spanish", "Hindi"],
        correctAnswer: "Mandarin",
    },
    {
        question: "Which scientist formulated the three laws of motion?",
        options: ["Galileo", "Newton", "Einstein", "Kepler"],
        correctAnswer: "Newton",
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["300,000 m/s", "300,000 km/s", "150,000 km/s", "450,000 km/s"],
        correctAnswer: "300,000 km/s",
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Oxide", "Obsidian"],
        correctAnswer: "Oxygen",
    },
    {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Standard Query Language", "Sequential Query Logic", "Simple Query Logic"],
        correctAnswer: "Structured Query Language",
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris",
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: "Nile",
    },
    {
        question: "What is the smallest unit of matter?",
        options: ["Atom", "Proton", "Molecule", "Electron"],
        correctAnswer: "Atom",
    },
    {
        question: "What does 'CSS' stand for in web development?",
        options: ["Cascading Style Sheets", "Computer Styling System", "Creative Style Syntax", "Code Style Sheets"],
        correctAnswer: "Cascading Style Sheets",
    },
    {
        question: "What is the main ingredient in bread?",
        options: ["Rice", "Wheat", "Flour", "Sugar"],
        correctAnswer: "Flour",
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
        correctAnswer: "Albert Einstein",
    },
    {
        question: "What is the most abundant element in the universe?",
        options: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
        correctAnswer: "Hydrogen",
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Pacific", "Indian", "Arctic"],
        correctAnswer: "Pacific",
    },
    {
        question: "Which is the hottest planet in the solar system?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        correctAnswer: "Venus",
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: "Ottawa",
    },
    {
        question: "What is the sum of 10 and 15?",
        options: ["20", "25", "30", "35"],
        correctAnswer: "25",
    },
    {
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
    },
    {
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
        correctAnswer: "Alexander Graham Bell",
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
        correctAnswer: "Tokyo",
    },
    {
        question: "What is the SI unit of time?",
        options: ["Minute", "Hour", "Second", "Day"],
        correctAnswer: "Second",
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tech Markup Language"],
        correctAnswer: "Hyper Text Markup Language",
    },
    {
        question: "What is the square root of 100?",
        options: ["5", "10", "15", "20"],
        correctAnswer: "10",
    },
    {
        question: "Which planet is known as the 'Blue Planet'?",
        options: ["Earth", "Neptune", "Uranus", "Mars"],
        correctAnswer: "Earth",
    },
    {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Gregor Mendel"],
        correctAnswer: "Alexander Fleming",
    },
    {
        question: "What is the capital of Italy?",
        options: ["Rome", "Venice", "Florence", "Milan"],
        correctAnswer: "Rome",
    },
    {
        question: "Which gas is commonly known as laughing gas?",
        options: ["Nitrous Oxide", "Carbon Dioxide", "Oxygen", "Helium"],
        correctAnswer: "Nitrous Oxide",
    },
    {
        question: "What is the term for molten rock that erupts from a volcano?",
        options: ["Magma", "Lava", "Basalt", "Ash"],
        correctAnswer: "Lava",
    },
    {
        question: "What is the smallest continent by land area?",
        options: ["Europe", "Australia", "Antarctica", "South America"],
        correctAnswer: "Australia",
    },
    {
        question: "What is the chemical symbol for sodium?",
        options: ["S", "Na", "N", "So"],
        correctAnswer: "Na",
    },
    {
        question: "Which is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale",
    },
    {
        question: "What is the basic unit of life?",
        options: ["Cell", "Tissue", "Organ", "Organism"],
        correctAnswer: "Cell",
    },
    {
        question: "Who wrote *The Iliad*?",
        options: ["Homer", "Virgil", "Sophocles", "Plato"],
        correctAnswer: "Homer",
    },
    {
        question: "Which layer of Earth's atmosphere contains the ozone layer?",
        options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
        correctAnswer: "Stratosphere",
    },
    {
        question: "What does FTP stand for?",
        options: ["File Transfer Protocol", "File Transmission Protocol", "Fast Transfer Protocol", "Fast Transmission Protocol"],
        correctAnswer: "File Transfer Protocol",
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Quartz", "Diamond", "Iron", "Granite"],
        correctAnswer: "Diamond",
    },
    {
        question: "Which programming language is known as the language of the web?",
        options: ["Python", "JavaScript", "Java", "Ruby"],
        correctAnswer: "JavaScript",
    },
    {
        question: "Which element is represented by the symbol 'Fe'?",
        options: ["Fluorine", "Ferrium", "Iron", "Francium"],
        correctAnswer: "Iron",
    },
    {
        question: "What is the primary energy source for the Earth?",
        options: ["The Sun", "Wind", "Water", "Geothermal Energy"],
        correctAnswer: "The Sun",
    },
    {
        question: "What does VPN stand for?",
        options: ["Virtual Private Network", "Virtual Proxy Network", "Virtual Protected Network", "Virtual Public Network"],
        correctAnswer: "Virtual Private Network",
    },
    {
        question: "Which scientist proposed the law of universal gravitation?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Johannes Kepler"],
        correctAnswer: "Isaac Newton",
    },
    {
        question: "What does the 'F' in FPS stand for in gaming?",
        options: ["Frames", "Frequency", "Format", "Features"],
        correctAnswer: "Frames",
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
        correctAnswer: "Brasília",
    },
    {
        question: "What is the term for the energy of motion?",
        options: ["Potential energy", "Kinetic energy", "Thermal energy", "Nuclear energy"],
        correctAnswer: "Kinetic energy",
    },
    {
        question: "What does DNA store?",
        options: ["Proteins", "Genetic information", "Carbohydrates", "Fats"],
        correctAnswer: "Genetic information",
    },
    {
        question: "Which country is famous for its tulips?",
        options: ["Belgium", "Netherlands", "Germany", "France"],
        correctAnswer: "Netherlands",
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
        correctAnswer: "Hydrogen",
    },
    {
        question: "What is the main programming language used in Android development?",
        options: ["Swift", "Kotlin", "Python", "C#"],
        correctAnswer: "Kotlin",
    },
    {
        question: "Which is the largest moon in our solar system?",
        options: ["Europa", "Titan", "Ganymede", "Callisto"],
        correctAnswer: "Ganymede",
    },
    {
        question: "What is the process of cell division called?",
        options: ["Meiosis", "Mitosis", "Fusion", "Replication"],
        correctAnswer: "Mitosis",
    },
    {
        question: "What is the currency of China?",
        options: ["Yen", "Won", "Yuan", "Baht"],
        correctAnswer: "Yuan",
    },
    {
        question: "Who painted the *Mona Lisa*?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Caravaggio"],
        correctAnswer: "Leonardo da Vinci",
    },
    {
        question: "Which programming concept uses 'classes' and 'objects'?",
        options: ["Functional programming", "Object-Oriented Programming", "Procedural programming", "Declarative programming"],
        correctAnswer: "Object-Oriented Programming",
    },
    {
        question: "Which country hosted the 2020 Summer Olympics in 2021?",
        options: ["China", "Brazil", "Japan", "Australia"],
        correctAnswer: "Japan",
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Ag", "Au", "Si", "S"],
        correctAnswer: "Ag",
    },
    {
        question: "Which force keeps planets in orbit around the sun?",
        options: ["Magnetic Force", "Nuclear Force", "Gravitational Force", "Electrostatic Force"],
        correctAnswer: "Gravitational Force",
    },
    {
        question: "What is the smallest bone in the human body?",
        options: ["Femur", "Stapes", "Tibia", "Ulna"],
        correctAnswer: "Stapes",
    },
    {
        question: "What does URL stand for?",
        options: ["Uniform Resource Locator", "Universal Resource Link", "Universal Reference Locator", "Uniform Reference Link"],
        correctAnswer: "Uniform Resource Locator",
    },
    {
        question: "Which continent is the Sahara Desert located in?",
        options: ["Asia", "Africa", "Australia", "South America"],
        correctAnswer: "Africa",
    },
    {
        question: "What is the name of the first manned moon mission?",
        options: ["Apollo 10", "Apollo 11", "Gemini 4", "Mercury 6"],
        correctAnswer: "Apollo 11",
    },
    {
        question: "What is the basic building block of proteins?",
        options: ["Lipids", "Amino acids", "Carbohydrates", "Nucleotides"],
        correctAnswer: "Amino acids",
    },
    {
        question: "What is the primary purpose of a router in a network?",
        options: ["Process data", "Transmit packets", "Store data", "Encrypt data"],
        correctAnswer: "Transmit packets",
    },
    {
        question: "Which animal is known as the 'Ship of the Desert'?",
        options: ["Elephant", "Camel", "Horse", "Donkey"],
        correctAnswer: "Camel",
    },
    {
        question: "Which country has the most volcanoes in the world?",
        options: ["Japan", "Indonesia", "United States", "Philippines"],
        correctAnswer: "Indonesia",
    },
    {
        question: "What does SVG stand for in web development?",
        options: ["Scalable Vector Graphics", "Structured Vector Graphics", "Simple Vector Graphics", "Systematic Vector Graphics"],
        correctAnswer: "Scalable Vector Graphics",
    },
    {
        question: "What is the name of the world's largest rainforest?",
        options: ["Congo Rainforest", "Amazon Rainforest", "Daintree Rainforest", "Sundarbans"],
        correctAnswer: "Amazon Rainforest",
    },
    {
        question: "What is the process by which plants convert sunlight into food?",
        options: ["Respiration", "Photosynthesis", "Transpiration", "Absorption"],
        correctAnswer: "Photosynthesis",
    },
    {
        question: "Which organ in the human body filters blood?",
        options: ["Liver", "Kidneys", "Heart", "Lungs"],
        correctAnswer: "Kidneys",
    },
    {
        question: "What is the approximate speed of sound in air?",
        options: ["300 m/s", "343 m/s", "400 m/s", "500 m/s"],
        correctAnswer: "343 m/s",
    },
    {
        question: "Which two colors combine to make green?",
        options: ["Red and Blue", "Blue and Yellow", "Yellow and Red", "Red and Green"],
        correctAnswer: "Blue and Yellow",
    },
    {
        question: "What does SMTP stand for in networking?",
        options: ["Simple Mail Transfer Protocol", "Secure Mail Transfer Protocol", "Simple Messaging Text Protocol", "Secure Messaging Transmission Protocol"],
        correctAnswer: "Simple Mail Transfer Protocol",
    },
    {
        question: "Which gas is essential for humans to breathe?",
        options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
        correctAnswer: "Oxygen",
    },
    {
        question: "Which planet in our solar system is known as the Blue Planet?",
        options: ["Earth", "Uranus", "Neptune", "Mars"],
        correctAnswer: "Earth",
    },
    {
        question: "What is the term for a word that has the same meaning as another word?",
        options: ["Homonym", "Synonym", "Antonym", "Homophone"],
        correctAnswer: "Synonym",
    },
    {
        question: "What is the main ingredient in sushi?",
        options: ["Bread", "Rice", "Wheat", "Barley"],
        correctAnswer: "Rice",
    },
    {
        question: "What is the capital of Egypt?",
        options: ["Cairo", "Alexandria", "Luxor", "Giza"],
        correctAnswer: "Cairo",
    },
    {
        question: "What does HTTPS stand for?",
        options: ["Hyper Text Transmission Protocol Secure", "Hyper Text Transfer Protocol Secure", "Hyperlink Transmission Protocol Secure", "Hyperlink Transfer Protocol Secure"],
        correctAnswer: "Hyper Text Transfer Protocol Secure",
    },
    {
        question: "What is the most common blood type in humans?",
        options: ["A", "B", "AB", "O"],
        correctAnswer: "O",
    },
    {
        question: "Which programming concept uses inheritance and polymorphism?",
        options: ["Object-Oriented Programming", "Functional Programming", "Procedural Programming", "Logic Programming"],
        correctAnswer: "Object-Oriented Programming",
    },
    {
        question: "What is the boiling point of water at sea level in Kelvin?",
        options: ["273 K", "310 K", "373 K", "400 K"],
        correctAnswer: "373 K",
    },
    {
        question: "What is the capital of Mexico?",
        options: ["Monterrey", "Guadalajara", "Mexico City", "Cancun"],
        correctAnswer: "Mexico City",
    },
    {
        question: "Which bird is known for its ability to mimic human speech?",
        options: ["Crow", "Parrot", "Sparrow", "Pigeon"],
        correctAnswer: "Parrot",
    },
        {
            question: "Which planet is known as the Morning Star?",
            options: ["Mars", "Venus", "Mercury", "Jupiter"],
            correctAnswer: "Venus",
        },
        {
            question: "What is the chemical symbol for lead?",
            options: ["Pb", "L", "Ld", "P"],
            correctAnswer: "Pb",
        },
        {
            question: "Which is the largest animal on Earth?",
            options: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
            correctAnswer: "Blue Whale",
        },
        {
            question: "What is the capital of Germany?",
            options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
            correctAnswer: "Berlin",
        },
        {
            question: "What does JSON stand for?",
            options: ["JavaScript Object Notation", "Java Syntax Object Notation", "JavaScript Open Network", "Java Secure Object Network"],
            correctAnswer: "JavaScript Object Notation",
        },
        {
            question: "What is the largest continent on Earth?",
            options: ["Africa", "Asia", "Europe", "North America"],
            correctAnswer: "Asia",
        },
        {
            question: "Who is credited with inventing the World Wide Web?",
            options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Alan Turing"],
            correctAnswer: "Tim Berners-Lee",
        },
        {
            question: "Which gas is most abundant in the Earth's atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
            correctAnswer: "Nitrogen",
        },
        {
            question: "What is the freezing point of water in Kelvin?",
            options: ["0 K", "100 K", "273 K", "373 K"],
            correctAnswer: "273 K",
        },
        {
            question: "What is the name of the Greek god of the sea?",
            options: ["Zeus", "Poseidon", "Hades", "Apollo"],
            correctAnswer: "Poseidon",
        },
        {
            question: "What is the main ingredient in a traditional omelette?",
            options: ["Flour", "Eggs", "Milk", "Butter"],
            correctAnswer: "Eggs",
        },
        {
            question: "What is the term for animals that live on land and water?",
            options: ["Reptiles", "Amphibians", "Mammals", "Fish"],
            correctAnswer: "Amphibians",
        },
        {
            question: "Who discovered America in 1492?",
            options: ["Christopher Columbus", "Ferdinand Magellan", "Marco Polo", "Vasco da Gama"],
            correctAnswer: "Christopher Columbus",
        },
        {
            question: "What does the acronym SEO stand for?",
            options: ["Search Engine Optimization", "Social Engagement Output", "Search Engine Organization", "Social Event Optimization"],
            correctAnswer: "Search Engine Optimization",
        },
        {
            question: "What is the chemical formula for methane?",
            options: ["CH3", "CH4", "C2H6", "CH2"],
            correctAnswer: "CH4",
        },
        {
            question: "What is the main language spoken in Spain?",
            options: ["Portuguese", "French", "Spanish", "Italian"],
            correctAnswer: "Spanish",
        },
        {
            question: "Who wrote the play *Macbeth*?",
            options: ["William Shakespeare", "Oscar Wilde", "George Bernard Shaw", "Tennessee Williams"],
            correctAnswer: "William Shakespeare",
        },
        {
            question: "What does the term CPU refer to in computers?",
            options: ["Central Processing Unit", "Computer Processing Unit", "Control Program Unit", "Core Processor Unit"],
            correctAnswer: "Central Processing Unit",
        },
        {
            question: "Which instrument is used to measure temperature?",
            options: ["Thermometer", "Barometer", "Anemometer", "Hydrometer"],
            correctAnswer: "Thermometer",
        },
        {
            question: "Which programming language is most commonly used for backend web development?",
            options: ["JavaScript", "Python", "PHP", "All of the above"],
            correctAnswer: "All of the above",
        },
        {
            question: "What is the boiling point of water in Celsius?",
            options: ["90°C", "100°C", "120°C", "80°C"],
            correctAnswer: "100°C",
        },
        {
            question: "Which country is known as the Land of Maple Leaf?",
            options: ["United States", "Canada", "Australia", "New Zealand"],
            correctAnswer: "Canada",
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
            correctAnswer: "Canberra",
        },
        {
            question: "What is the process of converting a solid directly into a gas?",
            options: ["Evaporation", "Condensation", "Sublimation", "Precipitation"],
            correctAnswer: "Sublimation",
        },
        {
            question: "Who developed the theory of general relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Stephen Hawking"],
            correctAnswer: "Albert Einstein",
        },
        {
            question: "Which river is the longest in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            correctAnswer: "Nile",
        },
        {
            question: "What is the main ingredient in chocolate?",
            options: ["Cocoa beans", "Milk", "Sugar", "Butter"],
            correctAnswer: "Cocoa beans",
        },
        {
            question: "What is the capital of Japan?",
            options: ["Kyoto", "Tokyo", "Osaka", "Nagoya"],
            correctAnswer: "Tokyo",
        },
        {
            question: "What does SSL stand for in web security?",
            options: ["Secure Socket Layer", "Secure Site Lock", "System Security Layer", "Server Security Link"],
            correctAnswer: "Secure Socket Layer",
        },
        {
            question: "What is the term for the outermost layer of the Earth?",
            options: ["Mantle", "Core", "Crust", "Lithosphere"],
            correctAnswer: "Crust",
        },
        {
            question: "What is the approximate age of the Earth?",
            options: ["3.5 billion years", "4.5 billion years", "5.5 billion years", "6.5 billion years"],
            correctAnswer: "4.5 billion years",
        },
        {
            question: "What is the largest species of bird in the world?",
            options: ["Eagle", "Ostrich", "Albatross", "Pelican"],
            correctAnswer: "Ostrich",
        },
        {
            question: "What is the primary gas used in neon signs?",
            options: ["Argon", "Neon", "Krypton", "Xenon"],
            correctAnswer: "Neon",
        },
        {
            question: "Who is the author of *Pride and Prejudice*?",
            options: ["Jane Austen", "Emily Bronte", "Charlotte Bronte", "George Eliot"],
            correctAnswer: "Jane Austen",
        },
        {
            question: "What is the term for the measure of the amount of matter in an object?",
            options: ["Weight", "Volume", "Mass", "Density"],
            correctAnswer: "Mass",
        },
        {
            question: "Which programming language is most commonly used in data visualization?",
            options: ["R", "Python", "JavaScript", "All of the above"],
            correctAnswer: "All of the above",
        },
        {
            question: "What is the process by which a caterpillar becomes a butterfly?",
            options: ["Fertilization", "Metamorphosis", "Transmutation", "Incubation"],
            correctAnswer: "Metamorphosis",
        },
        {
            question: "What is the capital city of Italy?",
            options: ["Venice", "Milan", "Florence", "Rome"],
            correctAnswer: "Rome",
        },
        {
            question: "What does CSS stand for?",
            options: ["Creative Style System", "Cascading Style Sheets", "Coded Style Syntax", "Computer Styling Software"],
            correctAnswer: "Cascading Style Sheets",
        },
        {
            question: "Which country gifted the Statue of Liberty to the USA?",
            options: ["United Kingdom", "France", "Italy", "Germany"],
            correctAnswer: "France",
        },
        {
            question: "What is the process plants use to make their food?",
            options: ["Respiration", "Photosynthesis", "Digestion", "Decomposition"],
            correctAnswer: "Photosynthesis",
        },
        {
            question: "What is the primary programming language used to build iOS apps?",
            options: ["Kotlin", "Java", "Swift", "C#"],
            correctAnswer: "Swift",
        },
        {
            question: "What is the smallest planet in the solar system?",
            options: ["Venus", "Mars", "Mercury", "Pluto"],
            correctAnswer: "Mercury",
        },
        {
            question: "What does CPU stand for in computers?",
            options: ["Core Processing Unit", "Central Processing Unit", "Computer Power Unit", "Central Power Unit"],
            correctAnswer: "Central Processing Unit",
        },
    {
        question: "What is the currency used in the United Kingdom?",
        options: ["Euro", "Dollar", "Pound Sterling", "Franc"],
        correctAnswer: "Pound Sterling",
    },
    {
        question: "Which country is famous for the Eiffel Tower?",
        options: ["Spain", "France", "Italy", "Germany"],
        correctAnswer: "France",
    },
    {
        question: "What is the process by which plants lose water vapor through their leaves?",
        options: ["Photosynthesis", "Transpiration", "Respiration", "Evaporation"],
        correctAnswer: "Transpiration",
    },
    {
        question: "What does HTTP stand for in web development?",
        options: ["HyperText Transmission Protocol", "HyperText Transfer Protocol", "Hyperlink Transmission Protocol", "Hyperlink Transfer Protocol"],
        correctAnswer: "HyperText Transfer Protocol",
    },
    {
        question: "Which planet is known for having a ring system?",
        options: ["Mars", "Venus", "Saturn", "Neptune"],
        correctAnswer: "Saturn",
    },
    {
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
        correctAnswer: "Alexander Graham Bell",
    },
    {
        question: "What is the term for a shape with eight sides?",
        options: ["Hexagon", "Pentagon", "Octagon", "Heptagon"],
        correctAnswer: "Octagon",
    },
    {
        question: "Which country is known as the Land Down Under?",
        options: ["South Africa", "New Zealand", "Australia", "Argentina"],
        correctAnswer: "Australia",
    },
    {
        question: "What does the symbol 'C' represent in the periodic table?",
        options: ["Calcium", "Carbon", "Chlorine", "Cobalt"],
        correctAnswer: "Carbon",
    },
    {
        question: "What is the smallest particle of an element?",
        options: ["Proton", "Atom", "Neutron", "Molecule"],
        correctAnswer: "Atom",
    },
    {
        question: "Which sea is the saltiest on Earth?",
        options: ["Caspian Sea", "Red Sea", "Dead Sea", "Baltic Sea"],
        correctAnswer: "Dead Sea",
    },
    {
        question: "What is the capital of Argentina?",
        options: ["Buenos Aires", "Rio de Janeiro", "Lima", "Santiago"],
        correctAnswer: "Buenos Aires",
    },
    {
        question: "Which programming language is primarily used for data science and machine learning?",
        options: ["Ruby", "Python", "C++", "Swift"],
        correctAnswer: "Python",
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Uranus", "Earth"],
        correctAnswer: "Jupiter",
    },
    {
        question: "What does BIOS stand for in computing?",
        options: ["Basic Input Output System", "Binary Integrated Operating System", "Basic Internal Operating System", "Binary Input Output Structure"],
        correctAnswer: "Basic Input Output System",
    },
    {
        question: "What is the most abundant element in the universe?",
        options: ["Oxygen", "Hydrogen", "Carbon", "Helium"],
        correctAnswer: "Hydrogen",
    },
    {
        question: "Which country won the first FIFA World Cup?",
        options: ["Brazil", "Uruguay", "Germany", "Italy"],
        correctAnswer: "Uruguay",
    },
    {
        question: "What is the boiling point of water in Fahrenheit?",
        options: ["100°F", "180°F", "212°F", "220°F"],
        correctAnswer: "212°F",
    },
    {
        question: "What is the largest bone in the human body?",
        options: ["Tibia", "Humerus", "Femur", "Fibula"],
        correctAnswer: "Femur",
    },
    {
        question: "Which river flows through Egypt?",
        options: ["Nile", "Amazon", "Mississippi", "Yangtze"],
        correctAnswer: "Nile",
    },
    {
        question: "What is the capital of South Africa?",
        options: ["Pretoria", "Cape Town", "Bloemfontein", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        question: "Which programming language is often used for front-end web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        correctAnswer: "JavaScript",
    },
    {
        question: "What is the primary color of chlorophyll in plants?",
        options: ["Red", "Green", "Blue", "Yellow"],
        correctAnswer: "Green",
    },
    {
        question: "What is the first book of the Bible?",
        options: ["Genesis", "Exodus", "Leviticus", "Numbers"],
        correctAnswer: "Genesis",
    },
    {
        question: "Which is the smallest ocean in the world?",
        options: ["Atlantic", "Pacific", "Indian", "Arctic"],
        correctAnswer: "Arctic",
    },
    {
        question: "What is the name of the force that keeps planets in orbit around the sun?",
        options: ["Magnetic Force", "Nuclear Force", "Gravitational Force", "Centripetal Force"],
        correctAnswer: "Gravitational Force",
    },
    {
        question: "What does AI stand for in technology?",
        options: ["Automated Interface", "Artificial Intelligence", "Advanced Interaction", "Applied Informatics"],
        correctAnswer: "Artificial Intelligence",
    },
    {
        question: "What is the hardest rock on Earth?",
        options: ["Granite", "Diamond", "Quartzite", "Marble"],
        correctAnswer: "Diamond",
    },
    {
        question: "Which city is known as the Big Apple?",
        options: ["Los Angeles", "Chicago", "New York City", "San Francisco"],
        correctAnswer: "New York City",
    },
    {
        question: "What is the primary function of white blood cells?",
        options: ["Transport oxygen", "Fight infections", "Clot blood", "Carry nutrients"],
        correctAnswer: "Fight infections",
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Gregor Mendel"],
        correctAnswer: "Alexander Fleming",
    },
    {
        question: "Which programming language is used to create dynamic and interactive web pages?",
        options: ["HTML", "CSS", "JavaScript", "PHP"],
        correctAnswer: "JavaScript",
    },
    {
        question: "What does RGB stand for in design?",
        options: ["Red Green Black", "Red Green Blue", "Red Green Brown", "Red Gray Blue"],
        correctAnswer: "Red Green Blue",
    },
    {
        question: "Which is the longest river in South America?",
        options: ["Amazon", "Paraná", "Orinoco", "Magdalena"],
        correctAnswer: "Amazon",
    },
    {
        question: "What is the primary source of energy for life on Earth?",
        options: ["The Sun", "Fossil Fuels", "Wind", "The Moon"],
        correctAnswer: "The Sun",
    },
    {
        question: "What is the binary representation of the decimal number 5?",
        options: ["101", "111", "110", "100"],
        correctAnswer: "101",
    },
    {
        question: "Which famous scientist developed the laws of motion?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
        correctAnswer: "Isaac Newton",
    },
    {
        question: "What is the main purpose of a firewall in computing?",
        options: ["To secure a network", "To cool the computer", "To store files", "To display data"],
        correctAnswer: "To secure a network",
    },
    {
        question: "Which gas is commonly used in balloons to make them float?",
        options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        correctAnswer: "Helium",
    },
    {
        question: "What is the SI unit of mass?",
        options: ["Pound", "Kilogram", "Gram", "Ounce"],
        correctAnswer: "Kilogram",
    },
    {
        question: "Who painted the *Last Supper*?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        correctAnswer: "Leonardo da Vinci",
    },
    {
        question: "Which is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        correctAnswer: "2",
    },
    {
        question: "What is the chemical formula for water?",
        options: ["H2", "O2", "H2O", "HO2"],
        correctAnswer: "H2O",
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        correctAnswer: "Mitochondria",
    },
    {
        question: "What does DNA stand for?",
        options: ["Deoxyribonucleic Acid", "Deoxyribose Nucleic Acid", "Deoxyribonuclear Acid", "Deoxyribonucleic Agent"],
        correctAnswer: "Deoxyribonucleic Acid",
    },
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Bangalore", "Kolkata"],
        correctAnswer: "Delhi",
    },
    {
        question: "Which is the smallest unit of data in a computer?",
        options: ["Byte", "Bit", "Nibble", "Word"],
        correctAnswer: "Bit",
    },
    {
        question: "What is the freezing point of water in Fahrenheit?",
        options: ["0°F", "32°F", "100°F", "212°F"],
        correctAnswer: "32°F",
    },
    {
        question: "What is the tallest tree species in the world?",
        options: ["Oak", "Redwood", "Sequoia", "Baobab"],
        correctAnswer: "Redwood",
    },
    {
        question: "What is the capital of Russia?",
        options: ["St. Petersburg", "Moscow", "Kazan", "Novosibirsk"],
        correctAnswer: "Moscow",
    },
    {
        question: "What does XML stand for?",
        options: ["Extensible Markup Language", "Executable Markup Language", "Extra Markup Language", "Extension Markup Language"],
        correctAnswer: "Extensible Markup Language",
    },
    {
        question: "What is the primary purpose of the lungs?",
        options: ["Circulation", "Respiration", "Digestion", "Filtration"],
        correctAnswer: "Respiration",
    },
    {
        question: "What is the square root of 81?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "9",
    },
    {
        question: "Which artist is known for the painting *Starry Night*?",
        options: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Leonardo da Vinci"],
        correctAnswer: "Vincent van Gogh",
    },
    {
        question: "Which country is the Eiffel Tower located in?",
        options: ["Germany", "France", "Italy", "Spain"],
        correctAnswer: "France",
    },
    {
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Ampere", "Watt", "Ohm"],
        correctAnswer: "Ampere",
    },
    {
        question: "Which programming language is known as the backbone of the web?",
        options: ["Java", "Python", "HTML", "JavaScript"],
        correctAnswer: "HTML",
    },
    {
        question: "What is the chemical symbol for potassium?",
        options: ["K", "P", "Pt", "Po"],
        correctAnswer: "K",
    },
    {
        question: "Which planet has the most moons?",
        options: ["Earth", "Saturn", "Jupiter", "Neptune"],
        correctAnswer: "Saturn",
    },
    {
        question: "What is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        correctAnswer: "Greenland",
    },
    {
        question: "What does CSS stand for in web development?",
        options: ["Computer Styling System", "Cascading Style Sheets", "Creative Style Syntax", "Cascading Simple Sheets"],
        correctAnswer: "Cascading Style Sheets",
    },
    {
        question: "Which metal is the best conductor of electricity?",
        options: ["Gold", "Copper", "Silver", "Aluminum"],
        correctAnswer: "Silver",
    },
    {
        question: "Who is the main protagonist in the Harry Potter series?",
        options: ["Hermione Granger", "Ron Weasley", "Harry Potter", "Albus Dumbledore"],
        correctAnswer: "Harry Potter",
    },
    {
        question: "What is the sum of 45 and 55?",
        options: ["90", "100", "110", "120"],
        correctAnswer: "100",
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        correctAnswer: "Skin",
    },
    {
        question: "What is the main gas found in the Sun?",
        options: ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
        correctAnswer: "Hydrogen",
    },
    {
        question: "What is the process by which cells divide to form new cells?",
        options: ["Meiosis", "Mitosis", "Binary Fission", "Fusion"],
        correctAnswer: "Mitosis",
    },
    {
        question: "Which continent is the Amazon Rainforest located in?",
        options: ["Africa", "Asia", "South America", "Australia"],
        correctAnswer: "South America",
    },
    {
        question: "What is the capital of the United Kingdom?",
        options: ["London", "Manchester", "Birmingham", "Liverpool"],
        correctAnswer: "London",
    },
    {
        question: "Which programming language is used to style web pages?",
        options: ["HTML", "CSS", "JavaScript", "PHP"],
        correctAnswer: "CSS",
    },
    {
        question: "What is the closest star to Earth?",
        options: ["Alpha Centauri", "Sirius", "Proxima Centauri", "The Sun"],
        correctAnswer: "The Sun",
    },
    {
        question: "What is the name of the currency used in Japan?",
        options: ["Dollar", "Euro", "Yuan", "Yen"],
        correctAnswer: "Yen",
    },
    {
        question: "What is the chemical formula for carbon dioxide?",
        options: ["CO", "CO2", "C2O", "O2C"],
        correctAnswer: "CO2",
    },
    {
        question: "Which organ in the human body produces insulin?",
        options: ["Liver", "Pancreas", "Kidney", "Stomach"],
        correctAnswer: "Pancreas",
    },
    {
        question: "What does RAM stand for in computing?",
        options: ["Random Access Memory", "Read-Only Memory", "Remote Access Module", "Rapid Access Memory"],
        correctAnswer: "Random Access Memory",
    },
    {
        question: "Which is the deepest part of the world's oceans?",
        options: ["Mariana Trench", "Tonga Trench", "Puerto Rico Trench", "Java Trench"],
        correctAnswer: "Mariana Trench",
    },
    {
        question: "Which programming language is known for its snake logo?",
        options: ["JavaScript", "Python", "Ruby", "Swift"],
        correctAnswer: "Python",
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: "Ottawa",
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Iron", "Diamond", "Quartz", "Granite"],
        correctAnswer: "Diamond",
    },
    {
        question: "What does 'www' stand for in a website address?",
        options: ["World Wide Web", "Wide Web World", "Web Wide World", "World Web Wide"],
        correctAnswer: "World Wide Web",
    },
    {
        question: "Which is the largest land carnivore?",
        options: ["Tiger", "Polar Bear", "Lion", "Grizzly Bear"],
        correctAnswer: "Polar Bear",
    },
    {
        question: "What is the sum of 200 and 150?",
        options: ["250", "300", "350", "400"],
        correctAnswer: "350",
    },
    {
        question: "What is the term for the fear of heights?",
        options: ["Claustrophobia", "Acrophobia", "Arachnophobia", "Agoraphobia"],
        correctAnswer: "Acrophobia",
    },
    {
        question: "Which gas is responsible for the greenhouse effect?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
    },
    {
        question: "Who wrote *The Great Gatsby*?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "J.D. Salinger"],
        correctAnswer: "F. Scott Fitzgerald",
    },
    {
        question: "What is the process of water turning into vapor called?",
        options: ["Condensation", "Evaporation", "Precipitation", "Sublimation"],
        correctAnswer: "Evaporation",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Korea", "Thailand"],
        correctAnswer: "Japan",
    },
    {
        question: "What is the first element in the periodic table?",
        options: ["Helium", "Hydrogen", "Oxygen", "Lithium"],
        correctAnswer: "Hydrogen",
    },
    {
        question: "What is the total number of degrees in a circle?",
        options: ["90", "180", "270", "360"],
        correctAnswer: "360",
    },
    {
        question: "Which ancient civilization built the pyramids?",
        options: ["Romans", "Greeks", "Egyptians", "Mayans"],
        correctAnswer: "Egyptians",
    },
    {
        question: "Which organ is responsible for pumping blood through the body?",
        options: ["Liver", "Lungs", "Heart", "Kidneys"],
        correctAnswer: "Heart",
    },
    {
        question: "What does SQL stand for in databases?",
        options: ["Structured Query Language", "System Query Logic", "Sequential Query Language", "Structured Queue Logic"],
        correctAnswer: "Structured Query Language",
    },
    {
        question: "What is the name of the process by which plants make their food?",
        options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
        correctAnswer: "Photosynthesis",
    },
    {
        question: "Who was the first president of the United States?",
        options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
        correctAnswer: "George Washington",
    },
    {
        question: "What is the atomic number of carbon?",
        options: ["6", "8", "12", "14"],
        correctAnswer: "6",
    },
    {
        question: "Which is the smallest planet in our solar system?",
        options: ["Venus", "Mars", "Mercury", "Pluto"],
        correctAnswer: "Mercury",
    },
    {
        question: "What is the term for the study of weather?",
        options: ["Biology", "Meteorology", "Astronomy", "Ecology"],
        correctAnswer: "Meteorology",
    },
    {
        question: "Which programming language is often associated with the term 'write once, run anywhere'?",
        options: ["Python", "Java", "C++", "JavaScript"],
        correctAnswer: "Java",
    },
    {
        question: "Which country has the most spoken languages?",
        options: ["India", "China", "Papua New Guinea", "United States"],
        correctAnswer: "Papua New Guinea",
    },
    {
        question: "What is the primary ingredient in bread?",
        options: ["Rice", "Flour", "Sugar", "Corn"],
        correctAnswer: "Flour",
    },
    {
        question: "What does GPU stand for in computing?",
        options: ["General Processing Unit", "Graphical Processing Unit", "Graphics Processing Unit", "Graphical Peripheral Unit"],
        correctAnswer: "Graphics Processing Unit",
    },
    {
        question: "Who is known as the father of modern physics?",
        options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
        correctAnswer: "Albert Einstein",
    },
    {
        question: "What is the name of the smallest unit of matter?",
        options: ["Molecule", "Atom", "Electron", "Proton"],
        correctAnswer: "Atom",
    },
    {
        question: "What is the term for animals that eat both plants and meat?",
        options: ["Herbivores", "Carnivores", "Omnivores", "Insectivores"],
        correctAnswer: "Omnivores",
    },
    {
        question: "Which continent has the most countries?",
        options: ["Asia", "Africa", "Europe", "South America"],
        correctAnswer: "Africa",
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Florence Nightingale"],
        correctAnswer: "Marie Curie",
    },
    {
        question: "What is the primary gas in the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        correctAnswer: "Nitrogen",
    },
    {
        question: "What does USB stand for?",
        options: ["Universal Serial Bus", "Universal System Bus", "Universal Socket Base", "Unique Serial Bus"],
        correctAnswer: "Universal Serial Bus",
    },
    {
        question: "What is the value of pi (π) to two decimal places?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        correctAnswer: "3.14",
    },
    {
        question: "Which programming concept involves hiding internal details and showing only essential features?",
        options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
        correctAnswer: "Abstraction",
    },
    {
        question: "What is the term for molten rock beneath the Earth's surface?",
        options: ["Lava", "Magma", "Basalt", "Igneous"],
        correctAnswer: "Magma",
    },
    {
        question: "What is the square of 12?",
        options: ["124", "144", "154", "164"],
        correctAnswer: "144",
    },
    {
        question: "Who developed the theory of evolution by natural selection?",
        options: ["Charles Darwin", "Gregor Mendel", "Carl Linnaeus", "Jean-Baptiste Lamarck"],
        correctAnswer: "Charles Darwin",
    },
    {
        question: "Which ocean is the deepest?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Southern Ocean"],
        correctAnswer: "Pacific Ocean",
    },
    {
        question: "What is the most widely spoken language in the world?",
        options: ["Spanish", "English", "Mandarin", "Hindi"],
        correctAnswer: "Mandarin",
    },
    {
        question: "What is the term for the part of a computer that stores information permanently?",
        options: ["RAM", "Hard Drive", "Cache", "CPU"],
        correctAnswer: "Hard Drive",
    },
    {
        question: "Which animal is known as the king of the jungle?",
        options: ["Tiger", "Lion", "Elephant", "Leopard"],
        correctAnswer: "Lion",
    },
    {
        question: "What is the main source of energy for the Earth?",
        options: ["Wind", "Sun", "Geothermal", "Water"],
        correctAnswer: "Sun",
    },
    {
        question: "What is the hexadecimal value of binary 1010?",
        options: ["A", "B", "10", "F"],
        correctAnswer: "A",
    },
    {
        question: "Which layer of the Earth is liquid?",
        options: ["Inner core", "Outer core", "Mantle", "Crust"],
        correctAnswer: "Outer core",
    },
    {
        question: "What does HTTP stand for?",
        options: ["Hyper Text Transmission Protocol", "Hyper Text Transfer Protocol", "Hyper Text Transaction Protocol", "Hyperlink Transmission Protocol"],
        correctAnswer: "Hyper Text Transfer Protocol",
    },
    {
        question: "Who is the author of the novel *1984*?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Ernest Hemingway"],
        correctAnswer: "George Orwell",
    },
    {
        question: "Which programming language is used for iOS app development?",
        options: ["Swift", "Java", "Kotlin", "JavaScript"],
        correctAnswer: "Swift",
    },
    {
        question: "What is the name of the galaxy we live in?",
        options: ["Andromeda Galaxy", "Milky Way Galaxy", "Sombrero Galaxy", "Whirlpool Galaxy"],
        correctAnswer: "Milky Way Galaxy",
    },
    {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Brazil", "Germany", "France", "Argentina"],
        correctAnswer: "France",
    },
    {
        question: "What is the sum of angles in a triangle?",
        options: ["90 degrees", "180 degrees", "360 degrees", "270 degrees"],
        correctAnswer: "180 degrees",
    },
    {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "H2O", "CO2", "KCl"],
        correctAnswer: "NaCl",
    },
    {
        question: "Which continent is the Sahara Desert located on?",
        options: ["Asia", "Africa", "Australia", "South America"],
        correctAnswer: "Africa",
    },
    {
        question: "What is the primary function of roots in plants?",
        options: ["Photosynthesis", "Water absorption", "Pollination", "Reproduction"],
        correctAnswer: "Water absorption",
    },
    {
        question: "Who is the founder of Microsoft?",
        options: ["Steve Jobs", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
        correctAnswer: "Bill Gates",
    },
    {
        question: "Which of these is a prime number?",
        options: ["12", "15", "17", "20"],
        correctAnswer: "17",
    },
    {
        question: "Which organ in the human body is responsible for filtering blood?",
        options: ["Heart", "Liver", "Kidneys", "Lungs"],
        correctAnswer: "Kidneys",
    },
    {
        question: "What is the main language spoken in Brazil?",
        options: ["Spanish", "English", "Portuguese", "French"],
        correctAnswer: "Portuguese",
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "H2", "OH"],
        correctAnswer: "H2O",
    },
    {
        question: "Which country is the largest by land area?",
        options: ["Canada", "China", "United States", "Russia"],
        correctAnswer: "Russia",
    },
    {
        question: "What does CPU stand for in computing?",
        options: ["Central Processing Unit", "Core Processing Unit", "Central Program Unit", "Central Peripheral Unit"],
        correctAnswer: "Central Processing Unit",
    },
    {
        question: "Which year did World War II end?",
        options: ["1940", "1945", "1939", "1950"],
        correctAnswer: "1945",
    },
    {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        correctAnswer: "Nitrogen",
    },
    {
        question: "Who developed the polio vaccine?",
        options: ["Alexander Fleming", "Jonas Salk", "Marie Curie", "Edward Jenner"],
        correctAnswer: "Jonas Salk",
    },
    {
        question: "Which planet is the largest in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Neptune"],
        correctAnswer: "Jupiter",
    },
    {
        question: "What is the name of the main character in the video game *Legend of Zelda*?",
        options: ["Zelda", "Link", "Ganon", "Mario"],
        correctAnswer: "Link",
    },
    {
        question: "What is the smallest unit of life?",
        options: ["Organ", "Cell", "Tissue", "Atom"],
        correctAnswer: "Cell",
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
        correctAnswer: "Hydrogen",
    },
    {
        question: "What is the capital of Italy?",
        options: ["Venice", "Rome", "Florence", "Milan"],
        correctAnswer: "Rome",
    },
    {
        question: "Who wrote the *Harry Potter* series?",
        options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "Suzanne Collins"],
        correctAnswer: "J.K. Rowling",
    },
    {
        question: "What does DOM stand for in web development?",
        options: ["Document Object Model", "Data Object Model", "Digital Object Model", "Display Object Method"],
        correctAnswer: "Document Object Model",
    },
    {
        question: "Who was the first man to step on the moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
        correctAnswer: "Neil Armstrong",
    },
    {
        question: "What is the chemical symbol for iron?",
        options: ["Ir", "Fe", "In", "I"],
        correctAnswer: "Fe",
    },
    {
        question: "Which sea creature has three hearts?",
        options: ["Octopus", "Shark", "Dolphin", "Squid"],
        correctAnswer: "Octopus",
    },
    {
        question: "What is 10 divided by 2?",
        options: ["3", "5", "10", "20"],
        correctAnswer: "5",
    },
    {
        question: "What is the longest bone in the human body?",
        options: ["Femur", "Tibia", "Humerus", "Fibula"],
        correctAnswer: "Femur",
    },
    {
        question: "Which instrument measures atmospheric pressure?",
        options: ["Barometer", "Thermometer", "Anemometer", "Hygrometer"],
        correctAnswer: "Barometer",
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Marie Curie"],
        correctAnswer: "Alexander Fleming",
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomatoes", "Avocado", "Cucumber", "Peppers"],
        correctAnswer: "Avocado",
    },
    {
        question: "Which is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Kalahari", "Antarctic"],
        correctAnswer: "Antarctic",
    },
    {
        question: "What is the capital of South Korea?",
        options: ["Seoul", "Busan", "Tokyo", "Beijing"],
        correctAnswer: "Seoul",
    },
    {
        question: "Which programming language is primarily used for artificial intelligence?",
        options: ["JavaScript", "Python", "PHP", "Ruby"],
        correctAnswer: "Python",
    },
    {
        question: "What is the chemical symbol for sodium chloride?",
        options: ["NaCl", "Na", "Cl", "SCl"],
        correctAnswer: "NaCl",
    },
    {
        question: "Which chess piece can only move diagonally?",
        options: ["Rook", "Bishop", "Knight", "Pawn"],
        correctAnswer: "Bishop",
    },
    {
        question: "What year did the Titanic sink?",
        options: ["1910", "1912", "1920", "1905"],
        correctAnswer: "1912",
    },
    {
        question: "Which programming language is associated with the React library?",
        options: ["Python", "JavaScript", "Java", "C#"],
        correctAnswer: "JavaScript",
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        correctAnswer: "Michelangelo",
    },
    {
        question: "What is the name of the longest river in Africa?",
        options: ["Amazon", "Nile", "Congo", "Zambezi"],
        correctAnswer: "Nile",
    },
    {
        question: "What is the name of the programming concept that allows multiple forms of a function?",
        options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
        correctAnswer: "Polymorphism",
    },
    {
        question: "What is the term for a baby kangaroo?",
        options: ["Pup", "Joey", "Kit", "Cub"],
        correctAnswer: "Joey",
    },
    {
        question: "Which element is represented by the symbol 'He'?",
        options: ["Hydrogen", "Helium", "Hafnium", "Holmium"],
        correctAnswer: "Helium",
    },
    {
        question: "What is the capital of Spain?",
        options: ["Madrid", "Barcelona", "Seville", "Bilbao"],
        correctAnswer: "Madrid",
    },
    {
        question: "What is 5 multiplied by 6?",
        options: ["25", "30", "35", "40"],
        correctAnswer: "30",
    },
    {
        question: "Which sport is known as 'the beautiful game'?",
        options: ["Basketball", "Soccer", "Tennis", "Cricket"],
        correctAnswer: "Soccer",
    },
    {
        question: "Which year was the first iPhone released?",
        options: ["2005", "2006", "2007", "2008"],
        correctAnswer: "2007",
    },
    {
        question: "What is the third planet from the sun?",
        options: ["Mars", "Earth", "Venus", "Mercury"],
        correctAnswer: "Earth",
    },
    {
        question: "Which programming paradigm does JavaScript support?",
        options: ["Object-Oriented", "Functional", "Procedural", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        question: "Who wrote *The Theory of Everything*?",
        options: ["Albert Einstein", "Stephen Hawking", "Isaac Newton", "Richard Feynman"],
        correctAnswer: "Stephen Hawking",
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Granite"],
        correctAnswer: "Diamond",
    },
    {
        question: "What is the term for a group of lions?",
        options: ["Pack", "Herd", "Pride", "Flock"],
        correctAnswer: "Pride",
    },
    {
        question: "What is the primary function of the liver in the human body?",
        options: ["Digest food", "Produce bile", "Pump blood", "Filter oxygen"],
        correctAnswer: "Produce bile",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tech Markup Language"],
        correctAnswer: "Hyper Text Markup Language",
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Mozilla", "Netscape", "Google"],
        correctAnswer: "Netscape",
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Cascading Simple Sheets"],
        correctAnswer: "Cascading Style Sheets",
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
        correctAnswer: "Blue Whale",
    },
    {
        question: "Which programming language is known as the language of the web?",
        options: ["Python", "Java", "C#", "JavaScript"],
        correctAnswer: "JavaScript",
    },
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
        correctAnswer: "Tokyo",
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci",
    },
    {
        question: "What does API stand for in programming?",
        options: ["Application Programming Interface", "Advanced Protocol Integration", "Application Process Integration", "Automated Programming Interface"],
        correctAnswer: "Application Programming Interface",
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correctAnswer: "100°C",
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "100,000 km/s", "450,000 km/s"],
        correctAnswer: "300,000 km/s",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "India"],
        correctAnswer: "Japan",
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        correctAnswer: "Au",
    },
    {
        question: "Which programming language is primarily used for Android app development?",
        options: ["Swift", "Java", "Python", "Ruby"],
        correctAnswer: "Java",
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "8",
    },
    {
        question: "Who is known as the father of computers?",
        options: ["Charles Babbage", "Alan Turing", "Tim Berners-Lee", "John von Neumann"],
        correctAnswer: "Charles Babbage",
    },
    {
        question: "Which element has the chemical symbol O?",
        options: ["Oxygen", "Osmium", "Oxide", "Oganesson"],
        correctAnswer: "Oxygen",
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Canberra", "Melbourne", "Perth"],
        correctAnswer: "Canberra",
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
        correctAnswer: "Mount Everest",
    },
    {
        question: "What year was JavaScript first introduced?",
        options: ["1993", "1995", "1997", "1999"],
        correctAnswer: "1995",
    },
    {
        question: "What does RAM stand for in computing?",
        options: ["Random Access Memory", "Read-Only Memory", "Rapid Application Module", "Remote Access Management"],
        correctAnswer: "Random Access Memory",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare",
    },
    {
        question: "What is the largest continent in the world?",
        options: ["Africa", "Asia", "Europe", "Antarctica"],
        correctAnswer: "Asia",
    },
    {
        question: "Which gas do plants primarily use during photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["China", "Brazil", "Russia", "United States"],
        correctAnswer: "Brazil",
    },
    {
        question: "Who discovered gravity when he saw a falling apple?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correctAnswer: "Isaac Newton",
    },
    {
        question: "Which programming language is known for its simplicity and readability?",
        options: ["Python", "C++", "Assembly", "Java"],
        correctAnswer: "Python",
    },
    {
        question: "What is the capital of Germany?",
        options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
        correctAnswer: "Berlin",
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
    },
    {
        question: "Which planet is closest to the sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        correctAnswer: "Mercury",
    },
    {
        question: "What does JSON stand for?",
        options: ["JavaScript Object Notation", "Java Source Object Notation", "Java Syntax Output Notation", "JavaScript Syntax Object Network"],
        correctAnswer: "JavaScript Object Notation",
    },
    {
        question: "Which element has the chemical symbol Na?",
        options: ["Nitrogen", "Sodium", "Nickel", "Neon"],
        correctAnswer: "Sodium",
    },
    {
        question: "What is the primary function of an Operating System?",
        options: ["To browse the web", "To manage hardware and software resources", "To compile code", "To play videos"],
        correctAnswer: "To manage hardware and software resources",
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        correctAnswer: "Albert Einstein",
    },
    {
        question: "Which river is the longest in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: "Nile River",
    },
    {
        question: "What is 2 to the power of 3?",
        options: ["6", "8", "10", "16"],
        correctAnswer: "8",
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        correctAnswer: "CSS",
    },
    {
        question: "Who is the CEO of SpaceX as of 2024?",
        options: ["Jeff Bezos", "Elon Musk", "Tim Cook", "Mark Zuckerberg"],
        correctAnswer: "Elon Musk",
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        correctAnswer: "Ottawa",
    },
    {
        question: "Which is the hottest planet in our solar system?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        correctAnswer: "Venus",
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correctAnswer: "Pacific Ocean",
    },
    {
        question: "What does HTTP stand for?",
        options: ["Hyper Text Transfer Protocol", "Hyper Text Transmission Process", "Hyper Text Transfer Process", "Hyperlink Text Transfer Protocol"],
        correctAnswer: "Hyper Text Transfer Protocol",
    },
    {
        question: "What is the freezing point of water in Celsius?",
        options: ["0°C", "-10°C", "32°C", "-273°C"],
        correctAnswer: "0°C",
    },
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
        correctAnswer: "Alexander Graham Bell",
    },
    {
        question: "Which country is known as the Land of Kangaroos?",
        options: ["New Zealand", "Australia", "South Africa", "Canada"],
        correctAnswer: "Australia",
    },
    {
        question: "What is the result of 7 + 8?",
        options: ["15", "16", "14", "13"],
        correctAnswer: "15",
    },
    {
        question: "What is the primary language used for iOS app development?",
        options: ["Java", "Swift", "Python", "Kotlin"],
        correctAnswer: "Swift",
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Mars", "Venus", "Pluto"],
        correctAnswer: "Mercury",
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
        correctAnswer: "George Washington",
    },
    {
        question: "What is the fastest animal in the world?",
        options: ["Cheetah", "Peregrine Falcon", "Lion", "Elephant"],
        correctAnswer: "Peregrine Falcon",
    },
    {
        question: "Which planet is known as the 'Blue Planet'?",
        options: ["Earth", "Neptune", "Uranus", "Mars"],
        correctAnswer: "Earth",
    },
    {
        question: "Which ocean is located between Africa and Australia?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Indian Ocean",
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
        correctAnswer: "Ottawa",
    },
    {
        question: "Who invented the telephone?",
        options: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "James Watt"],
        correctAnswer: "Alexander Graham Bell",
    },
    {
        question: "Which animal is known for having a long neck?",
        options: ["Elephant", "Giraffe", "Hippopotamus", "Kangaroo"],
        correctAnswer: "Giraffe",
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Mount Kilimanjaro", "Mount Fuji"],
        correctAnswer: "Mount Everest",
    },
    {
        question: "What is the hardest substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correctAnswer: "Diamond",
    },
    {
        question: "What is the national flower of Japan?",
        options: ["Cherry Blossom", "Rose", "Lily", "Tulip"],
        correctAnswer: "Cherry Blossom",
    },
    {
        question: "What is the largest continent on Earth?",
        options: ["Asia", "Africa", "North America", "Europe"],
        correctAnswer: "Asia",
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        options: ["F. Scott Fitzgerald", "J.D. Salinger", "Harper Lee", "Ernest Hemingway"],
        correctAnswer: "J.D. Salinger",
    },
    {
        question: "Which animal is the largest mammal on Earth?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        correctAnswer: "Blue Whale",
    },
    {
        question: "Who was the first man to walk on the moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Yuri Gagarin"],
        correctAnswer: "Neil Armstrong",
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correctAnswer: "Japan",
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
        correctAnswer: "Vatican City",
    },
    {
        question: "What element has the symbol 'O'?",
        options: ["Oxygen", "Osmium", "Oganesson", "Opium"],
        correctAnswer: "Oxygen",
    },
    {
        question: "Which country is home to the Eiffel Tower?",
        options: ["Italy", "Germany", "France", "United Kingdom"],
        correctAnswer: "France",
    },
    {
        question: "Which gas do plants primarily use for photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
    },
    {
        question: "What is the name of the longest river in the world?",
        options: ["Amazon River", "Mississippi River", "Yangtze River", "Nile River"],
        correctAnswer: "Nile River",
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Pepper", "Onion"],
        correctAnswer: "Avocado",
    },
    {
        question: "Which animal is known for its ability to change color?",
        options: ["Chameleon", "Octopus", "Cuttlefish", "Squid"],
        correctAnswer: "Chameleon",
    },
    {
        question: "Which of these countries is a landlocked country?",
        options: ["Bolivia", "Argentina", "Chile", "Brazil"],
        correctAnswer: "Bolivia",
    },
    {
        question: "What is the capital of Spain?",
        options: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
        correctAnswer: "Madrid",
    },
    {
        question: "What is the capital of Italy?",
        options: ["Florence", "Rome", "Venice", "Milan"],
        correctAnswer: "Rome",
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Kalahari", "Gobi", "Antarctic Desert"],
        correctAnswer: "Antarctic Desert",
    },
    {
        question: "Which fruit is known for keeping the doctor away?",
        options: ["Apple", "Orange", "Banana", "Pear"],
        correctAnswer: "Apple",
    },
    {
        question: "Which is the longest-running TV show in the United States?",
        options: ["The Simpsons", "Friends", "The Office", "Saturday Night Live"],
        correctAnswer: "The Simpsons",
    },
    {
        question: "Which company is known for its 'iPhone'?",
        options: ["Apple", "Microsoft", "Samsung", "Nokia"],
        correctAnswer: "Apple",
    },
    {
        question: "Which of these is a type of pasta?",
        options: ["Sushi", "Ravioli", "Tempura", "Sashimi"],
        correctAnswer: "Ravioli",
    },
    {
        question: "Which country is famous for the Great Wall?",
        options: ["India", "China", "Mexico", "Russia"],
        correctAnswer: "China",
    },
    {
        question: "What is the name of the first artificial satellite?",
        options: ["Apollo 11", "Sputnik 1", "Voyager 1", "Hubble Space Telescope"],
        correctAnswer: "Sputnik 1",
    },
    {
        question: "Which planet is famous for its rings?",
        options: ["Saturn", "Jupiter", "Mars", "Venus"],
        correctAnswer: "Saturn",
    },
    {
        question: "Which chemical element has the symbol 'Fe'?",
        options: ["Iron", "Fluorine", "Flerovium", "Francium"],
        correctAnswer: "Iron",
    },
    {
        question: "Who is known for discovering the theory of relativity?",
        options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"],
        correctAnswer: "Albert Einstein",
    },
    {
        question: "What is the name of the longest river in the United States?",
        options: ["Mississippi River", "Missouri River", "Rio Grande", "Colorado River"],
        correctAnswer: "Mississippi River",
    },
    {
            question: "What is the largest planet in our solar system?",
            options: ["Jupiter", "Saturn", "Earth", "Mars"],
            correctAnswer: "Jupiter",
        },
        {
            question: "Who painted the Starry Night?",
            options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dali"],
            correctAnswer: "Vincent van Gogh",
        },
        {
            question: "What is the capital city of Canada?",
            options: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
            correctAnswer: "Ottawa",
        },
        {
            question: "Which famous landmark is located in Paris?",
            options: ["Colosseum", "Great Wall of China", "Eiffel Tower", "Statue of Liberty"],
            correctAnswer: "Eiffel Tower",
        },
        {
            question: "Which planet is known for its Great Red Spot?",
            options: ["Saturn", "Neptune", "Mars", "Jupiter"],
            correctAnswer: "Jupiter",
        },
        {
            question: "What is the capital of India?",
            options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
            correctAnswer: "New Delhi",
        },
        {
            question: "Which country is known for inventing pizza?",
            options: ["Italy", "Greece", "France", "United States"],
            correctAnswer: "Italy",
        },
        {
            question: "Who was the first man to travel in space?",
            options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
            correctAnswer: "Yuri Gagarin",
        },
        {
            question: "What is the smallest continent by land area?",
            options: ["Europe", "Africa", "Australia", "Antarctica"],
            correctAnswer: "Australia",
        },
        {
            question: "What is the most spoken language in the world?",
            options: ["English", "Mandarin", "Spanish", "Hindi"],
            correctAnswer: "Mandarin",
        },
        {
            question: "Which of these is a type of bear?",
            options: ["Grizzly", "Cheetah", "Lion", "Elephant"],
            correctAnswer: "Grizzly",
        },
        {
            question: "What is the longest river in the world?",
            options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            correctAnswer: "Nile River",
        },
        {
            question: "Which animal is the fastest on land?",
            options: ["Cheetah", "Lion", "Elephant", "Giraffe"],
            correctAnswer: "Cheetah",
        },
        {
            question: "Which element has the atomic number 1?",
            options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon"],
            correctAnswer: "Hydrogen",
        },
        {
            question: "What is the name of the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            correctAnswer: "Pacific Ocean",
        },
        {
            question: "Which country is known for its pyramids?",
            options: ["Mexico", "Egypt", "India", "China"],
            correctAnswer: "Egypt",
        },
        {
            question: "Who invented the light bulb?",
            options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Michael Faraday"],
            correctAnswer: "Thomas Edison",
        },
        {
            question: "Which of these is a primary color?",
            options: ["Green", "Orange", "Blue", "Purple"],
            correctAnswer: "Blue",
        },
        {
            question: "What is the capital city of the United Kingdom?",
            options: ["Manchester", "London", "Edinburgh", "Belfast"],
            correctAnswer: "London",
        },
        {
            question: "What type of animal is a Komodo Dragon?",
            options: ["Lizard", "Snake", "Bird", "Mammal"],
            correctAnswer: "Lizard",
        },
        {
            question: "What is the largest desert in the world?",
            options: ["Sahara", "Arctic", "Kalahari", "Gobi"],
            correctAnswer: "Arctic",
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Rome", "Berlin"],
            correctAnswer: "Paris",
        },
        {
            question: "What is the longest river in the United States?",
            options: ["Missouri River", "Mississippi River", "Colorado River", "Rio Grande"],
            correctAnswer: "Mississippi River",
        },
        {
            question: "Which planet is closest to the Sun?",
            options: ["Earth", "Venus", "Mars", "Mercury"],
            correctAnswer: "Mercury",
        },
        {
            question: "Which famous scientist discovered the laws of motion?",
            options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
            correctAnswer: "Isaac Newton",
        },
        {
            question: "Which bird is known for its ability to mimic human speech?",
            options: ["Crow", "Parrot", "Eagle", "Owl"],
            correctAnswer: "Parrot",
        },
        {
            question: "What is the capital of Italy?",
            options: ["Florence", "Rome", "Venice", "Milan"],
            correctAnswer: "Rome",
        },
        {
            question: "What is the largest living animal in the world?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
            correctAnswer: "Blue Whale",
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
            correctAnswer: "Vatican City",
        },
        {
            question: "Which ocean is located between Africa and Australia?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: "Indian Ocean",
        },
        {
            question: "Which country is the largest by population?",
            options: ["India", "United States", "China", "Brazil"],
            correctAnswer: "China",
        },
        {
            question: "Who was the first woman to fly solo across the Atlantic Ocean?",
            options: ["Amelia Earhart", "Bessie Coleman", "Sally Ride", "Valentina Tereshkova"],
            correctAnswer: "Amelia Earhart",
        },
        {
            question: "Who discovered penicillin?",
            options: ["Marie Curie", "Albert Einstein", "Isaac Newton", "Alexander Fleming"],
            correctAnswer: "Alexander Fleming",
        },
        {
            question: "Which country is the origin of the sport of judo?",
            options: ["South Korea", "China", "Japan", "India"],
            correctAnswer: "Japan",
        },
        {
            question: "Which of these is a mammal?",
            options: ["Shark", "Crocodile", "Bat", "Lizard"],
            correctAnswer: "Bat",
        },
    
        {
            question: "Which country is home to the Great Barrier Reef?",
            options: ["New Zealand", "Australia", "South Africa", "Brazil"],
            correctAnswer: "Australia",
        },
        {
            question: "What is the longest mountain range in the world?",
            options: ["Himalayas", "Andes", "Rockies", "Alps"],
            correctAnswer: "Andes",
        },
        {
            question: "Which animal is the symbol of the World Wildlife Fund (WWF)?",
            options: ["Panda", "Tiger", "Elephant", "Lion"],
            correctAnswer: "Panda",
        },
        {
            question: "What is the capital of Japan?",
            options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
            correctAnswer: "Tokyo",
        },
        {
            question: "Which of these is not a type of cloud?",
            options: ["Cumulus", "Stratus", "Nimbus", "Aurora"],
            correctAnswer: "Aurora",
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Lungs", "Skin", "Liver"],
            correctAnswer: "Skin",
        },
        {
            question: "Which famous scientist proposed the theory of evolution?",
            options: ["Charles Darwin", "Albert Einstein", "Isaac Newton", "Nikola Tesla"],
            correctAnswer: "Charles Darwin",
        },
        {
            question: "Which is the largest country by land area?",
            options: ["United States", "China", "Canada", "Russia"],
            correctAnswer: "Russia",
        },
        {
            question: "What is the hardest known natural material?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            correctAnswer: "Diamond",
        },
        {
            question: "Which of these is a capital city?",
            options: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
            correctAnswer: "Madrid",
        },
        {
            question: "What is the largest island in the world?",
            options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
            correctAnswer: "Greenland",
        },
        {
            question: "Which element is represented by the symbol 'O' on the periodic table?",
            options: ["Oxygen", "Osmium", "Oganesson", "Opium"],
            correctAnswer: "Oxygen",
        },
        {
            question: "Which country is known as the 'Land of the Rising Sun'?",
            options: ["South Korea", "China", "Japan", "Thailand"],
            correctAnswer: "Japan",
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            correctAnswer: "Leonardo da Vinci",
        },
        {
            question: "What is the capital of Egypt?",
            options: ["Cairo", "Alexandria", "Luxor", "Giza"],
            correctAnswer: "Cairo",
        },
        {
            question: "Which metal is liquid at room temperature?",
            options: ["Mercury", "Aluminum", "Gold", "Silver"],
            correctAnswer: "Mercury",
        },
        {
            question: "Which company developed the first personal computer?",
            options: ["Apple", "Microsoft", "IBM", "Compaq"],
            correctAnswer: "IBM",
        },
        {
            question: "Which of these countries is a landlocked country?",
            options: ["Bolivia", "Brazil", "Argentina", "Chile"],
            correctAnswer: "Bolivia",
        },
        {
            question: "Who wrote the play 'Romeo and Juliet'?",
            options: ["William Shakespeare", "George Orwell", "Homer", "Oscar Wilde"],
            correctAnswer: "William Shakespeare",
        },
        {
            question: "What is the largest animal on Earth?",
            options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
            correctAnswer: "Blue Whale",
        },
        {
            question: "What is the official language of Brazil?",
            options: ["Spanish", "Portuguese", "French", "English"],
            correctAnswer: "Portuguese",
        },
        {
            question: "Which continent is the Amazon Rainforest located on?",
            options: ["Africa", "Asia", "South America", "Australia"],
            correctAnswer: "South America",
        },
        {
            question: "Which planet has the most moons?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "Saturn",
        },
        {
            question: "What is the capital of Spain?",
            options: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
            correctAnswer: "Madrid",
        },
        {
            question: "Which famous scientist is known for his laws of motion?",
            options: ["Galileo Galilei", "Albert Einstein", "Isaac Newton", "Niels Bohr"],
            correctAnswer: "Isaac Newton",
        },
        {
            question: "Who wrote 'The Hobbit'?",
            options: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin"],
            correctAnswer: "J.R.R. Tolkien",
        },
        {
            question: "Which country is the origin of the game 'judo'?",
            options: ["China", "South Korea", "Japan", "India"],
            correctAnswer: "Japan",
        },
        {
            question: "What is the square root of 64?",
            options: ["6", "8", "10", "12"],
            correctAnswer: "8",
        },
        {
            question: "What is the smallest country in the world by population?",
            options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
            correctAnswer: "Vatican City",
        },
        {
            question: "Which country invented the sport of soccer (football)?",
            options: ["Germany", "Brazil", "England", "Italy"],
            correctAnswer: "England",
        },
        {
            question: "Who was the first woman to fly solo across the Atlantic Ocean?",
            options: ["Amelia Earhart", "Valentina Tereshkova", "Bessie Coleman", "Sally Ride"],
            correctAnswer: "Amelia Earhart",
        },
        {
            question: "Which gas makes up most of the Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correctAnswer: "Nitrogen",
        },
        {
            question: "What is the capital of Germany?",
            options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
            correctAnswer: "Berlin",
        },
        {
            question: "Which element has the chemical symbol 'H'?",
            options: ["Helium", "Hydrogen", "Hassium", "Holmium"],
            correctAnswer: "Hydrogen",
        },
        {
            question: "What is the world's largest ocean?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: "Pacific Ocean",
        },
        {
            question: "Which continent is the Sahara Desert located in?",
            options: ["Asia", "Africa", "North America", "Australia"],
            correctAnswer: "Africa",
        },
        {
            question: "Which bird is known for its distinctive colorful feathers and ability to mimic human speech?",
            options: ["Parrot", "Peacock", "Pigeon", "Eagle"],
            correctAnswer: "Parrot",
        },
        {
            question: "Which ocean is the deepest?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: "Pacific Ocean",
        },
        {
            question: "Which of these is a primary color?",
            options: ["Orange", "Green", "Purple", "Red"],
            correctAnswer: "Red",
        },
        {
            question: "Which is the largest desert in the world?",
            options: ["Sahara", "Kalahari", "Gobi", "Antarctic Desert"],
            correctAnswer: "Antarctic Desert",
        },
    
        {
            question: "Which country is famous for the Eiffel Tower?",
            options: ["Italy", "France", "Germany", "Spain"],
            correctAnswer: "France",
        },
        {
            question: "What is the capital of Canada?",
            options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
            correctAnswer: "Ottawa",
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Venus", "Mars", "Jupiter"],
            correctAnswer: "Mars",
        },
        {
            question: "Who developed the theory of relativity?",
            options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"],
            correctAnswer: "Albert Einstein",
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            correctAnswer: "Vatican City",
        },
        {
            question: "Who is the author of 'Harry Potter'?",
            options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "C.S. Lewis"],
            correctAnswer: "J.K. Rowling",
        },
        {
            question: "Which continent is the Sahara Desert located on?",
            options: ["Africa", "Asia", "Australia", "South America"],
            correctAnswer: "Africa",
        },
        {
            question: "Which animal is known for its black and white stripes?",
            options: ["Leopard", "Zebra", "Tiger", "Cheetah"],
            correctAnswer: "Zebra",
        },
        {
            question: "What is the capital of Russia?",
            options: ["Moscow", "St. Petersburg", "Novosibirsk", "Sochi"],
            correctAnswer: "Moscow",
        },
        {
            question: "Which is the largest continent by area?",
            options: ["Africa", "Asia", "Europe", "North America"],
            correctAnswer: "Asia",
        },
        {
            question: "What is the longest river in the United States?",
            options: ["Mississippi River", "Missouri River", "Colorado River", "Rio Grande"],
            correctAnswer: "Mississippi River",
        },
        {
            question: "Which element has the atomic number 79?",
            options: ["Silver", "Gold", "Platinum", "Copper"],
            correctAnswer: "Gold",
        },
        {
            question: "Who was the first president of the United States?",
            options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
            correctAnswer: "George Washington",
        },
        {
            question: "Which city is known as the Big Apple?",
            options: ["Los Angeles", "Chicago", "New York City", "Miami"],
            correctAnswer: "New York City",
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Diamond", "Iron", "Platinum"],
            correctAnswer: "Diamond",
        },
        {
            question: "Which planet is the closest to the sun?",
            options: ["Venus", "Earth", "Mercury", "Mars"],
            correctAnswer: "Mercury",
        },
        {
            question: "Which country is known for its tulips and windmills?",
            options: ["Germany", "Belgium", "Netherlands", "Switzerland"],
            correctAnswer: "Netherlands",
        },
        {
            question: "Which city hosted the 2008 Summer Olympics?",
            options: ["Beijing", "London", "Rio de Janeiro", "Tokyo"],
            correctAnswer: "Beijing",
        },
        {
            question: "Who painted the Sistine Chapel ceiling?",
            options: ["Leonardo da Vinci", "Vincent van Gogh", "Michelangelo", "Raphael"],
            correctAnswer: "Michelangelo",
        },
        {
            question: "Which animal is known for its ability to change color?",
            options: ["Cameleon", "Octopus", "Squid", "Chameleon"],
            correctAnswer: "Chameleon",
        },
        {
            question: "What is the capital of Brazil?",
            options: ["Sao Paulo", "Brasilia", "Rio de Janeiro", "Salvador"],
            correctAnswer: "Brasilia",
        },
        {
            question: "Which fruit is commonly used to make guacamole?",
            options: ["Tomato", "Mango", "Avocado", "Peach"],
            correctAnswer: "Avocado",
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Saturn", "Earth", "Jupiter", "Mars"],
            correctAnswer: "Jupiter",
        },
        {
            question: "Who is the author of '1984'?",
            options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "J.K. Rowling"],
            correctAnswer: "George Orwell",
        },
        {
            question: "What is the national flower of Japan?",
            options: ["Cherry Blossom", "Rose", "Tulip", "Lotus"],
            correctAnswer: "Cherry Blossom",
        },
        {
            question: "What is the longest river in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            correctAnswer: "Nile",
        },
        {
            question: "What is the official language of Brazil?",
            options: ["Spanish", "Portuguese", "French", "English"],
            correctAnswer: "Portuguese",
        },
        {
            question: "Which fruit is known as the king of fruits?",
            options: ["Durian", "Mango", "Pineapple", "Papaya"],
            correctAnswer: "Durian",
        },
        {
            question: "Which city is famous for its canals?",
            options: ["Venice", "Paris", "Amsterdam", "Prague"],
            correctAnswer: "Venice",
        },
        {
            question: "Which country is the largest producer of coffee?",
            options: ["Brazil", "Vietnam", "Colombia", "Ethiopia"],
            correctAnswer: "Brazil",
        },
        {
            question: "Which country is the birthplace of the Olympic Games?",
            options: ["Italy", "Germany", "Greece", "France"],
            correctAnswer: "Greece",
        },
        {
            question: "Which planet is known for its rings?",
            options: ["Mars", "Jupiter", "Saturn", "Neptune"],
            correctAnswer: "Saturn",
        },
        {
            question: "What is the capital of Italy?",
            options: ["Florence", "Venice", "Rome", "Milan"],
            correctAnswer: "Rome",
        },
        {
            question: "Which famous scientist is known for his work with electricity?",
            options: ["Nikola Tesla", "Albert Einstein", "Isaac Newton", "Thomas Edison"],
            correctAnswer: "Nikola Tesla",
        },
        {
            question: "Which country is known for its pyramids?",
            options: ["Egypt", "Mexico", "India", "Turkey"],
            correctAnswer: "Egypt",
        },
        {
            question: "Which is the smallest planet in our solar system?",
            options: ["Mercury", "Mars", "Venus", "Pluto"],
            correctAnswer: "Mercury",
        },
        {
            question: "Who was the first man to walk on the moon?",
            options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
            correctAnswer: "Neil Armstrong",
        },
        {
            question: "What is the capital of Egypt?",
            options: ["Cairo", "Alexandria", "Luxor", "Giza"],
            correctAnswer: "Cairo",
        },
        {
            question: "Which famous ship sank in 1912 after hitting an iceberg?",
            options: ["Titanic", "Lusitania", "Queen Mary", "Mayflower"],
            correctAnswer: "Titanic",
        },
        {
            question: "Which continent is the largest by population?",
            options: ["Asia", "Africa", "North America", "Europe"],
            correctAnswer: "Asia",
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            correctAnswer: "Canberra",
        },
        {
            question: "Which bird is known for its distinctive colorful feathers and ability to mimic human speech?",
            options: ["Parrot", "Pigeon", "Eagle", "Peacock"],
            correctAnswer: "Parrot",
        },
        {
            question: "What is the currency of the United States?",
            options: ["Dollar", "Pound", "Euro", "Yen"],
            correctAnswer: "Dollar",
        },
        {
            question: "Who invented the telephone?",
            options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Samuel Morse"],
            correctAnswer: "Alexander Graham Bell",
    },
    {
        question: "What is the longest river in the United States?",
        options: ["Missouri River", "Mississippi River", "Colorado River", "Ohio River"],
        correctAnswer: "Mississippi River",
    },
    {
        question: "Which city is known as the City of Light?",
        options: ["London", "New York", "Paris", "Rome"],
        correctAnswer: "Paris",
    },
    {
        question: "What is the largest island in the world?",
        options: ["Greenland", "Australia", "Madagascar", "New Guinea"],
        correctAnswer: "Greenland",
    },
    {
        question: "Which country is famous for the Great Wall?",
        options: ["China", "India", "Russia", "Egypt"],
        correctAnswer: "China",
    },
    {
        question: "What is the chemical formula for methane?",
        options: ["CH4", "CO2", "C6H12O6", "NH3"],
        correctAnswer: "CH4",
    },
    {
        question: "Which gas do plants absorb from the air for photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
    },
    {
        question: "Which mammal is known to fly?",
        options: ["Bat", "Squirrel", "Penguin", "Dolphin"],
        correctAnswer: "Bat",
    },
    {
        question: "Who is the author of '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
        correctAnswer: "George Orwell",
    },
    {
        question: "Which city hosted the 2008 Summer Olympics?",
        options: ["Athens", "Beijing", "London", "Sydney"],
        correctAnswer: "Beijing",
    },
    {
        question: "Which country is home to the famous landmark Machu Picchu?",
        options: ["Brazil", "Argentina", "Peru", "Chile"],
        correctAnswer: "Peru",
    },
    {
        question: "Who developed the theory of general relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Marie Curie", "Nikola Tesla"],
        correctAnswer: "Albert Einstein",
    },
    {
        question: "Which continent is the largest by land area?",
        options: ["Africa", "Asia", "Europe", "North America"],
        correctAnswer: "Asia",
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
        correctAnswer: "Canberra",
    },
    {
        question: "Who invented the telephone?",
        options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Albert Einstein"],
        correctAnswer: "Alexander Graham Bell",
    },
    {
        question: "What is the largest internal organ in the human body?",
        options: ["Heart", "Brain", "Liver", "Lungs"],
        correctAnswer: "Liver",
    },
    {
        question: "What is the main ingredient in a traditional Japanese dish sushi?",
        options: ["Seaweed", "Rice", "Fish", "Soy Sauce"],
        correctAnswer: "Rice",
    },
    {
        question: "Which ocean is located to the east of Africa?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Southern Ocean"],
        correctAnswer: "Indian Ocean",
    },
    {
        question: "Which country is famous for its tulips and windmills?",
        options: ["Netherlands", "France", "Germany", "Belgium"],
        correctAnswer: "Netherlands",
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        correctAnswer: "Ottawa",
    },
    {
        question: "Which country is known as the Land of the Midnight Sun?",
        options: ["Finland", "Norway", "Sweden", "Iceland"],
        correctAnswer: "Norway",
    },
    {
        question: "What is the name of the first artificial Earth satellite?",
        options: ["Apollo 11", "Sputnik 1", "Hubble", "Explorer 1"],
        correctAnswer: "Sputnik 1",
    },
    {
        question: "Which type of animal is the fastest swimming fish?",
        options: ["Shark", "Tuna", "Swordfish", "Dolphin"],
        correctAnswer: "Swordfish",
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Belo Horizonte"],
        correctAnswer: "Brasilia",
    },
    {
        question: "Who was the first president of the United States?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "James Madison"],
        correctAnswer: "George Washington",
    },
    {
        question: "Which country is known for having a maple leaf on its flag?",
        options: ["USA", "Canada", "Mexico", "Australia"],
        correctAnswer: "Canada",
    },
    {
        question: "Who wrote the famous novel 'Pride and Prejudice'?",
        options: ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "Mary Shelley"],
        correctAnswer: "Jane Austen",
    },
    {
        question: "What is the only continent without a desert?",
        options: ["Africa", "Asia", "Europe", "Antarctica"],
        correctAnswer: "Europe",
    },
    {
        question: "What is the primary function of red blood cells?",
        options: ["Fight infection", "Transport oxygen", "Digest food", "Produce hormones"],
        correctAnswer: "Transport oxygen",
    },
    {
        question: "What is the capital of Italy?",
        options: ["Florence", "Rome", "Venice", "Milan"],
        correctAnswer: "Rome",
    },
    {
        question: "Which country is known for its pyramids and Sphinx?",
        options: ["Egypt", "Mexico", "Greece", "Jordan"],
        correctAnswer: "Egypt",
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correctAnswer: "Vatican City",
    },
    {
        question: "What is the chemical formula for water?",
        options: ["CO2", "O2", "H2O", "H2SO4"],
        correctAnswer: "H2O",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
    },
    {
        question: "What type of animal is a Komodo Dragon?",
        options: ["Lizard", "Snake", "Crocodile", "Bird"],
        correctAnswer: "Lizard",
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
        correctAnswer: "Tokyo",
    },
    {
        question: "Which country is home to the famous landmark the Colosseum?",
        options: ["Greece", "Italy", "Spain", "Turkey"],
        correctAnswer: "Italy",
    },
    {
        question: "Which island is known for having the world's longest coral reef?",
        options: ["Bali", "Australia", "New Guinea", "Hawaii"],
        correctAnswer: "Australia",
    },
    {
        question: "Who painted the famous artwork 'The Starry Night'?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        correctAnswer: "Vincent van Gogh",
    },
    {
        question: "Which country is known for the Eiffel Tower?",
        options: ["France", "Italy", "Germany", "USA"],
        correctAnswer: "France",
    },
    {
        question: "What is the largest continent in the world?",
        options: ["Europe", "Africa", "Asia", "North America"],
        correctAnswer: "Asia",
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Florence Nightingale", "Ada Lovelace"],
        correctAnswer: "Marie Curie",
    },
    {
        question: "Which country invented the concept of tea?",
        options: ["India", "China", "Japan", "England"],
        correctAnswer: "China",
    },
    {
        question: "What is the longest mountain range in the world?",
        options: ["The Andes", "The Himalayas", "The Alps", "The Rockies"],
        correctAnswer: "The Andes",
    },
    {
        question: "Which gas makes up the majority of the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Argon", "Carbon Dioxide"],
        correctAnswer: "Nitrogen",
    },
    {
        question: "Which city is known as the Eternal City?",
        options: ["Athens", "Rome", "Paris", "London"],
        correctAnswer: "Rome",
    },
    {
        question: "Which bird is known for being a symbol of peace?",
        options: ["Eagle", "Dove", "Raven", "Owl"],
        correctAnswer: "Dove",
    },
    {
        question: "What is the currency of Japan?",
        options: ["Won", "Yuan", "Yen", "Ringgit"],
        correctAnswer: "Yen",
    },
    {
        question: "What is the name of the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: "Nile",
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correctAnswer: "Blue Whale",
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Ozone", "Oganesson"],
        correctAnswer: "Oxygen",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Fitzgerald"],
        correctAnswer: "Shakespeare"
    },
        
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correctAnswer: "Blue Whale",
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Ozone", "Oganesson"],
        correctAnswer: "Oxygen",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Fitzgerald"],
        correctAnswer: "Shakespeare",
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correctAnswer: "Japan",
    },
    {
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correctAnswer: "100°C",
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
        correctAnswer: "Mount Everest",
    },
    {
        question: "Which bird is known for its colorful feathers and ability to mimic human speech?",
        options: ["Eagle", "Peacock", "Parrot", "Crow"],
        correctAnswer: "Parrot",
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "8", "10", "12"],
        correctAnswer: "8",
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci",
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: "Nile River",
    },
    {
        question: "Which continent is the Sahara Desert located on?",
        options: ["Asia", "Africa", "Australia", "North America"],
        correctAnswer: "Africa",
    },
    {
        question: "Which country is home to the Great Barrier Reef?",
        options: ["USA", "Brazil", "Australia", "Mexico"],
        correctAnswer: "Australia",
    },
    {
        question: "Which element is represented by the symbol 'Na'?",
        options: ["Sodium", "Nickel", "Neon", "Nitrogen"],
        correctAnswer: "Sodium",
    },
    {
        question: "What is the most common gas in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        correctAnswer: "Nitrogen",
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        correctAnswer: "Yen",
    },
    {
        question: "Who discovered electricity?",
        options: ["Albert Einstein", "Nikola Tesla", "Benjamin Franklin", "Thomas Edison"],
        correctAnswer: "Benjamin Franklin",
    },
    {
        question: "Which is the smallest planet in our solar system?",
        options: ["Earth", "Mercury", "Venus", "Mars"],
        correctAnswer: "Mercury",
    },
    {
        question: "What is the national flower of Japan?",
        options: ["Cherry Blossom", "Rose", "Tulip", "Sunflower"],
        correctAnswer: "Cherry Blossom",
    },
    {
        question: "Which country invented pizza?",
        options: ["France", "Italy", "Greece", "USA"],
        correctAnswer: "Italy",
    },
    {
        question: "Which animal is known for its black and white stripes?",
        options: ["Tiger", "Zebra", "Leopard", "Cheetah"],
        correctAnswer: "Zebra",
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Cu", "Pb"],
        correctAnswer: "Au",
    },
    {
        question: "Which planet is the hottest in our solar system?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        correctAnswer: "Venus",
    },
    {
        question: "What is the largest desert on Earth?",
        options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
        correctAnswer: "Antarctic",
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1905", "1912", "1921", "1930"],
        correctAnswer: "1912",
    },
    {
        question: "Which city is known as the Big Apple?",
        options: ["Los Angeles", "San Francisco", "New York City", "Chicago"],
        correctAnswer: "New York City",
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Neptune"],
        correctAnswer: "Jupiter",
    },
    {
        question: "Which country is famous for its pyramids?",
        options: ["Mexico", "Egypt", "Greece", "Turkey"],
        correctAnswer: "Egypt",
    },
    {
        question: "Which is the longest bone in the human body?",
        options: ["Femur", "Humerus", "Radius", "Tibia"],
        correctAnswer: "Femur",
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
        correctAnswer: "Albert Einstein",
    },
    {
        question: "Which country is known for the Eiffel Tower?",
        options: ["Italy", "Germany", "Spain", "France"],
        correctAnswer: "France",
    },
    {
        question: "Which ocean lies to the west of the United States?",
        options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
        correctAnswer: "Pacific Ocean",
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: "Ottawa",
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        correctAnswer: "Mercury",
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Lemon"],
        correctAnswer: "Avocado",
    },
    {
        question: "Which famous structure was built by the ancient Egyptians?",
        options: ["The Parthenon", "The Colosseum", "The Great Wall", "The Pyramids of Giza"],
        correctAnswer: "The Pyramids of Giza",
    },
    {
        question: "What is the color of the sun?",
        options: ["Yellow", "White", "Orange", "Red"],
        correctAnswer: "White",
    },
    {
        question: "Which country is known as the Land of the Free?",
        options: ["Canada", "Mexico", "Australia", "United States"],
        correctAnswer: "United States",
    },
    {
        question: "Which bird is known for its ability to mimic sounds and human speech?",
        options: ["Sparrow", "Eagle", "Parrot", "Pigeon"],
        correctAnswer: "Parrot",
    },
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "O2", "H2SO4"],
        correctAnswer: "H2O",
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean",
    },
    {
        question: "Which fruit is known as the 'King of Fruits'?",
        options: ["Apple", "Mango", "Durian", "Pineapple"],
        correctAnswer: "Durian",
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Lion", "Tiger", "Elephant", "Giraffe"],
        correctAnswer: "Lion",
    },
    {
        question: "What is the fastest land animal?",
        options: ["Cheetah", "Lion", "Elephant", "Antelope"],
        correctAnswer: "Cheetah",
    },
    {
        question: "What is the capital of Germany?",
        options: ["Berlin", "Munich", "Hamburg", "Cologne"],
        correctAnswer: "Berlin",
    },
    {
        question: "Which country is famous for sushi?",
        options: ["China", "Thailand", "Japan", "India"],
        correctAnswer: "Japan",
    },
    {
        question: "What is the largest country in the world by area?",
        options: ["Canada", "USA", "China", "Russia"],
        correctAnswer: "Russia",
    },
    {
        question: "What is the most widely spoken language in the world?",
        options: ["Spanish", "Mandarin", "English", "Arabic"],
        correctAnswer: "Mandarin",
    },
    {
        question: "Which planet is known for its rings?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correctAnswer: "Saturn",
    },
    {
        question: "What is the longest running TV show?",
        options: ["The Simpsons", "Friends", "The Office", "Grey's Anatomy"],
        correctAnswer: "The Simpsons",
    },
    {
        question: "Who is the founder of Microsoft?",
        options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
        correctAnswer: "Bill Gates",
    },
    {
        question: "Which fruit is known for its high vitamin C content?",
        options: ["Banana", "Apple", "Orange", "Grapes"],
        correctAnswer: "Orange",
    },
    {
        question: "What is the most common type of blood in humans?",
        options: ["A", "B", "O", "AB"],
        correctAnswer: "O",
    },
    {
        question: "What is the only mammal capable of true flight?",
        options: ["Bat", "Bird", "Pterodactyl", "Flying Squirrel"],
        correctAnswer: "Bat",
    },
    {
        question: "Who was the first man to walk on the moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        correctAnswer: "Neil Armstrong",
    },
    {
        question: "What is the capital city of Italy?",
        options: ["Rome", "Milan", "Naples", "Florence"],
        correctAnswer: "Rome",
    },
    {
        question: "What is the national animal of Australia?",
        options: ["Kangaroo", "Koala", "Emu", "Platypus"],
        correctAnswer: "Kangaroo",
    },
    {
        question: "Which scientist is known for the theory of evolution?",
        options: ["Albert Einstein", "Isaac Newton", "Charles Darwin", "Nikola Tesla"],
        correctAnswer: "Charles Darwin",
    },
    {
        question: "Which chemical element is abbreviated as 'Fe'?",
        options: ["Iron", "Fermium", "Fluorine", "Francium"],
        correctAnswer: "Iron",
    },
    {
        question: "What is the tallest building in the world?",
        options: ["Burj Khalifa", "Shanghai Tower", "Petronas Towers", "Eiffel Tower"],
        correctAnswer: "Burj Khalifa",
    },
    {
        question: "Which country has the most pyramids?",
        options: ["Mexico", "Egypt", "Sudan", "Peru"],
        correctAnswer: "Sudan",
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Ag", "Au", "Si", "Al"],
        correctAnswer: "Ag",
    },
    {
        question: "What is the currency of the United Kingdom?",
        options: ["Euro", "Pound", "Dollar", "Yen"],
        correctAnswer: "Pound",
    },
    {
        question: "Which type of animal is the largest species of shark?",
        options: ["Great White Shark", "Hammerhead Shark", "Whale Shark", "Tiger Shark"],
        correctAnswer: "Whale Shark",
    },
    {
        question: "Which country was the first to land a man on the moon?",
        options: ["USA", "Soviet Union", "China", "India"],
        correctAnswer: "USA",
    },
    {
        question: "What is the capital city of Spain?",
        options: ["Madrid", "Barcelona", "Seville", "Valencia"],
        correctAnswer: "Madrid",
    },
    {
        question: "Which famous movie features a character named Luke Skywalker?",
        options: ["Star Trek", "The Matrix", "Star Wars", "Jurassic Park"],
        correctAnswer: "Star Wars",
    },
    {
        question: "Which animal is known for changing its color?",
        options: ["Chameleon", "Octopus", "Cuttlefish", "Alligator"],
        correctAnswer: "Chameleon",
    },
    {
        question: "Which planet is known as the 'Giant Red Spot'?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter",
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Garlic"],
        correctAnswer: "Avocado",
    },
    {
        question: "Which element is represented by the symbol 'O'?",
        options: ["Oxygen", "Osmium", "Ozone", "Omnium"],
        correctAnswer: "Oxygen",
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "8", "10", "16"],
        correctAnswer: "8",
    },
    {
        question: "Which ocean is the largest by surface area?",
        options: ["Atlantic", "Indian", "Southern", "Pacific"],
        correctAnswer: "Pacific",
    },
    {
        question: "Which famous scientist is known for his three laws of motion?",
        options: ["Galileo Galilei", "Isaac Newton", "Albert Einstein", "Nikola Tesla"],
        correctAnswer: "Isaac Newton",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correctAnswer: "Japan",
    },
    {
        question: "What is the capital of the United Kingdom?",
        options: ["Edinburgh", "London", "Cardiff", "Belfast"],
        correctAnswer: "London",
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci",
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Arctic", "Gobi", "Kalahari"],
        correctAnswer: "Sahara",
    },
    {
        question: "What is the primary function of the human skeleton?",
        options: ["Digestion", "Protection", "Reproduction", "Respiration"],
        correctAnswer: "Protection",
    },
    {
        question: "Who invented the light bulb?",
        options: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Michael Faraday"],
        correctAnswer: "Thomas Edison",
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        correctAnswer: "Au",
    },
    {
        question: "Which country is known as the Land of the Kangaroo?",
        options: ["New Zealand", "Australia", "South Africa", "India"],
        correctAnswer: "Australia",
    },
    {
        question: "Which is the largest country in Africa by land area?",
        options: ["Nigeria", "South Africa", "Sudan", "Algeria"],
        correctAnswer: "Algeria",
    },
    {
        question: "Which organ is responsible for pumping blood throughout the body?",
        options: ["Brain", "Liver", "Heart", "Lungs"],
        correctAnswer: "Heart",
    },
    {
        question: "Which country is famous for its pyramids?",
        options: ["Egypt", "Mexico", "Turkey", "India"],
        correctAnswer: "Egypt",
    },
    {
        question: "What is the smallest planet in the solar system?",
        options: ["Mercury", "Mars", "Venus", "Pluto"],
        correctAnswer: "Mercury",
    },
    {
        question: "Which gas do humans exhale?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide",
    },
    {
        question: "Which tree produces acorns?",
        options: ["Pine", "Oak", "Maple", "Birch"],
        correctAnswer: "Oak",
    },
    {
        question: "What is the longest bone in the human body?",
        options: ["Femur", "Tibia", "Humerus", "Radius"],
        correctAnswer: "Femur",
    },
    {
        question: "Which country is home to the ancient city of Petra?",
        options: ["Egypt", "Jordan", "Syria", "Turkey"],
        correctAnswer: "Jordan",
    },
    {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Isaac Newton"],
        correctAnswer: "Alexander Fleming",
    },
    {
        question: "Which bird is known for its distinctive bright red breast?",
        options: ["Robin", "Sparrow", "Pigeon", "Eagle"],
        correctAnswer: "Robin",
    },
    {
        question: "Which fruit is known as the 'king of fruits'?",
        options: ["Durian", "Mango", "Pineapple", "Banana"],
        correctAnswer: "Durian",
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "London", "Madrid"],
        correctAnswer: "Paris",
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Mount Kilimanjaro", "Mount McKinley"],
        correctAnswer: "Mount Everest",
    },
    {
        question: "Which country is known for the Eiffel Tower?",
        options: ["Italy", "France", "Spain", "Germany"],
        correctAnswer: "France",
    },
    {
        question: "Which animal is known as the symbol of peace?",
        options: ["Pigeon", "Eagle", "Lion", "Elephant"],
        correctAnswer: "Pigeon",
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        options: ["Amelia Earhart", "Harriet Quimby", "Bessie Coleman", "Jacqueline Cochran"],
        correctAnswer: "Amelia Earhart",
    },
    {
        question: "What is the capital of Japan?",
        options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
        correctAnswer: "Tokyo",
    },
    {
        question: "Which country is famous for the Great Wall?",
        options: ["Japan", "China", "India", "South Korea"],
        correctAnswer: "China",
    },
    {
        question: "Which type of animal is the fastest land animal?",
        options: ["Lion", "Cheetah", "Gazelle", "Leopard"],
        correctAnswer: "Cheetah",
    },
    {
        question: "What is the capital of Spain?",
        options: ["Madrid", "Barcelona", "Seville", "Valencia"],
        correctAnswer: "Madrid",
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Oxygen", "Hydrogen", "Carbon", "Helium"],
        correctAnswer: "Hydrogen",
    },
    {
        question: "Which continent is the Sahara Desert located on?",
        options: ["Africa", "Asia", "Australia", "Europe"],
        correctAnswer: "Africa",
    },
    {
        question: "What is the tallest waterfall in the world?",
        options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
        correctAnswer: "Angel Falls",
    },
    {
        question: "Which planet is known as the morning star?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Venus",
    },
    {
        question: "Who invented the airplane?",
        options: ["Wright Brothers", "Thomas Edison", "Nikola Tesla", "Alexander Graham Bell"],
        correctAnswer: "Wright Brothers",
    },
    {
        question: "Which bird is known for its ability to mimic human speech?",
        options: ["Parrot", "Owl", "Eagle", "Penguin"],
        correctAnswer: "Parrot",
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: "Nile",
    },
    {
        question: "Which country is known for the Taj Mahal?",
        options: ["China", "India", "Egypt", "Turkey"],
        correctAnswer: "India",
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Au", "Ag", "Si", "Sb"],
        correctAnswer: "Ag",
    },
    {
        question: "Which animal is the largest mammal on Earth?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        correctAnswer: "Blue Whale",
    },
    {
        question: "Which color is commonly associated with the sun?",
        options: ["Red", "Yellow", "Blue", "Green"],
        correctAnswer: "Yellow",
    },
    {
        question: "Which is the longest running animated TV show?",
        options: ["Family Guy", "South Park", "The Simpsons", "Futurama"],
        correctAnswer: "The Simpsons",
    },
    {
        question: "What is the capital of Germany?",
        options: ["Berlin", "Munich", "Hamburg", "Cologne"],
        correctAnswer: "Berlin",
    },
    {
        question: "Which animal is known as the king of the jungle?",
        options: ["Lion", "Elephant", "Tiger", "Giraffe"],
        correctAnswer: "Lion",
    },
    {
        question: "What is the currency of the United Kingdom?",
        options: ["Dollar", "Euro", "Pound", "Franc"],
        correctAnswer: "Pound",
    }
];

let currentQuestionIndex = 0;
let selectedOption = null;
let timer, timeRemaining = 30;

// Get references to DOM elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-button");
const resultElement = document.getElementById("result");

// Add event listeners for buttons
document.getElementById("start-infinite-quiz").addEventListener("click", startInfiniteQuiz);
document.getElementById("start-one-vs-one").addEventListener("click", startOneVsOneQuiz);

// Start Infinite Quiz
function startInfiniteQuiz() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("infinite-quiz").style.display = "block";

    // Initialize timer element
    const timerElement = document.getElementById("timer");
    displayQuestion();
}

// Display Question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.addEventListener("click", () => selectOption(option, button));
        optionsElement.appendChild(button);
    });

    resultElement.textContent = "";
    submitButton.disabled = true;
    startTimer();
}

// Select Option
function selectOption(option, button) {
    selectedOption = option;
    document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
    button.classList.add("selected");
    submitButton.disabled = false;
}

// Timer
function startTimer() {
    if (timer) clearInterval(timer);
    timeRemaining = 30;
    document.getElementById("timer").textContent = `Time remaining: ${timeRemaining}s`;

    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            document.getElementById("timer").textContent = `Time remaining: ${timeRemaining}s`;
        } else {
            clearInterval(timer);
            checkAnswer();
        }
    }, 1000);
}

// Check Answer
function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    clearInterval(timer);

    if (selectedOption === currentQuestion.correctAnswer) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = `Incorrect! The correct answer is ${currentQuestion.correctAnswer}.`;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(displayQuestion, 2000);
    } else {
        resultElement.innerHTML = "Quiz completed! 🎉 <button onclick='location.reload()'>Restart</button>";
    }
}

// Start 1v1 Quiz Mode
function startOneVsOneQuiz() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("one-vs-one").style.display = "block";
}

// Firebase: Generate 1v1 Quiz Link
document.getElementById("generate-link").addEventListener("click", () => {
    const playerName = document.getElementById("player-name").value || `Player_${Math.floor(Math.random() * 1000)}`;
    const uniqueID = Math.random().toString(36).substring(2, 15);
    const quizLink = `${window.location.origin}?id=${uniqueID}&name=${encodeURIComponent(playerName)}`;

    const quizRef = ref(database, 'quizzes/' + uniqueID);
    set(quizRef, {
        creator: playerName,
        participants: []
    });

    document.getElementById("generated-link").textContent = `Share this link: ${quizLink}`;
});

// Firebase: Handle Participant Joining the 1v1 Quiz
const urlParams = new URLSearchParams(window.location.search);
const quizID = urlParams.get("id");
const participantName = urlParams.get("name") || `Guest_${Math.floor(Math.random() * 1000)}`;

if (quizID) {
    const participantsRef = ref(database, `quizzes/${quizID}/participants`);
    push(participantsRef, participantName);
    document.getElementById("quiz-participant").innerHTML = `<p>Welcome, ${participantName}! Waiting for other players...</p>`;
}
