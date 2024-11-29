// Tableau contenant les 15 exercices, leur description, leur solution et leur logique
const exercises = [
    {
        title: "Addition",
        description: "Créez une fonction qui retourne la somme de deux nombres.",
        solution: "function addition(a, b) { return a + b; }",
        execute: (input) => { 
            const [a, b] = input.split(',').map(Number);
            return a + b; 
        }
    },
    {
        title: "Soustraction",
        description: "Créez une fonction qui retourne la différence entre deux nombres.",
        solution: "function soustraction(a, b) { return a - b; }",
        execute: (input) => { 
            const [a, b] = input.split(',').map(Number);
            return a - b; 
        }
    },
    {
        title: "Multiplication",
        description: "Créez une fonction qui retourne le produit de deux nombres.",
        solution: "function multiplication(a, b) { return a * b; }",
        execute: (input) => { 
            const [a, b] = input.split(',').map(Number);
            return a * b; 
        }
    },
    {
        title: "Division",
        description: "Créez une fonction qui retourne le quotient de deux nombres.",
        solution: "function division(a, b) { return a / b; }",
        execute: (input) => { 
            const [a, b] = input.split(',').map(Number);
            return b !== 0 ? a / b : "Erreur : Division par zéro"; 
        }
    },
    {
        title: "Puissance",
        description: "Créez une fonction qui retourne la puissance d'un nombre.",
        solution: "function puissance(a, b) { return Math.pow(a, b); }",
        execute: (input) => { 
            const [a, b] = input.split(',').map(Number);
            return Math.pow(a, b); 
        }
    },
    {
        title: "Carré",
        description: "Créez une fonction qui retourne le carré d'un nombre.",
        solution: "function carre(a) { return a * a; }",
        execute: (input) => { 
            const a = Number(input);
            return a * a; 
        }
    },
    {
        title: "Racine carrée",
        description: "Créez une fonction qui retourne la racine carrée d'un nombre.",
        solution: "function racineCarree(a) { return Math.sqrt(a); }",
        execute: (input) => { 
            const a = Number(input);
            return Math.sqrt(a); 
        }
    },
    {
        title: "Nombre pair",
        description: "Créez une fonction qui vérifie si un nombre est pair.",
        solution: "function estPair(a) { return a % 2 === 0; }",
        execute: (input) => { 
            const a = Number(input);
            return a % 2 === 0 ? "Pair" : "Impair"; 
        }
    },
    {
        title: "Nombre impair",
        description: "Créez une fonction qui vérifie si un nombre est impair.",
        solution: "function estImpair(a) { return a % 2 !== 0; }",
        execute: (input) => { 
            const a = Number(input);
            return a % 2 !== 0 ? "Impair" : "Pair"; 
        }
    },
    {
        title: "Factorielle",
        description: "Créez une fonction qui calcule la factorielle d'un nombre.",
        solution: "function factorielle(n) { return n <= 1 ? 1 : n * factorielle(n - 1); }",
        execute: (input) => { 
            const n = Number(input);
            if (n < 0) return "Erreur : Nombre négatif";
            return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, val) => acc * val, 1);
        }
    },
    {
        title: "Inverser une chaîne",
        description: "Créez une fonction qui inverse une chaîne de caractères.",
        solution: "function inverser(chaine) { return chaine.split('').reverse().join(''); }",
        execute: (input) => { 
            return input.split('').reverse().join('');
        }
    },
    {
        title: "Maximum",
        description: "Créez une fonction qui retourne le maximum entre deux nombres.",
        solution: "function maximum(a, b) { return a > b ? a : b; }",
        execute: (input) => { 
            const [a, b] = input.split(',').map(Number);
            return Math.max(a, b);
        }
    },
    {
        title: "Somme d'un tableau",
        description: "Créez une fonction qui retourne la somme des éléments d'un tableau.",
        solution: "function somme(tab) { return tab.reduce((a, b) => a + b, 0); }",
        execute: (input) => { 
            const tab = input.split(',').map(Number);
            return tab.reduce((a, b) => a + b, 0);
        }
    },
    {
        title: "Voyelles",
        description: "Créez une fonction qui compte les voyelles dans une chaîne.",
        solution: "function compterVoyelles(chaine) { return (chaine.match(/[aeiouy]/gi) || []).length; }",
        execute: (input) => { 
            return (input.match(/[aeiouy]/gi) || []).length;
        }
    },
    {
        title: "Palindrome",
        description: "Créez une fonction qui vérifie si un mot est un palindrome.",
        solution: "function estPalindrome(mot) { return mot === mot.split('').reverse().join(''); }",
        execute: (input) => { 
            return input === input.split('').reverse().join('') ? "Palindrome" : "Pas un palindrome";
        }
    }
];

// Initialisation de la liste et des interactions
document.addEventListener("DOMContentLoaded", () => {
    const exerciseList = document.getElementById("exercise-list");
    const exerciseTitle = document.getElementById("exercise-title");
    const exerciseDescription = document.getElementById("exercise-description");
    const resultDisplay = document.getElementById("result");
    const solutionButton = document.getElementById("solution-button");
    const solutionDisplay = document.getElementById("solution");
    const inputField = document.getElementById("input");
    const calculateButton = document.getElementById("calculate-button");

    let currentExercise = null;

    // Ajouter tous les exercices à la liste
    exercises.forEach((exercise, index) => {
        const li = document.createElement("li");
        li.textContent = exercise.title;
        li.addEventListener("click", () => {
            currentExercise = exercise;
            exerciseTitle.textContent = exercise.title;
            exerciseDescription.textContent = exercise.description;
            resultDisplay.textContent = "Résultat : ";
            solutionDisplay.textContent = "";
            inputField.value = "";
        });
        exerciseList.appendChild(li);
    });

    // Calculer le résultat de l'exercice sélectionné
    calculateButton.addEventListener("click", () => {
        if (!currentExercise) {
            resultDisplay.textContent = "Veuillez sélectionner un exercice.";
            return;
        }
        const userInput = inputField.value.trim();
        if (!userInput) {
            resultDisplay.textContent = "Veuillez entrer des données.";
            return;
        }
        try {
            const result = currentExercise.execute(userInput);
            resultDisplay.textContent = `Résultat : ${result}`;
        } catch (error) {
            resultDisplay.textContent = "Erreur dans les données fournies.";
        }
    });

    // Afficher ou masquer la solution
    solutionButton.addEventListener("click", () => {
        if (currentExercise) {
            solutionDisplay.textContent = currentExercise.solution;
            solutionDisplay.classList.toggle("hidden");
        }
    });
});

