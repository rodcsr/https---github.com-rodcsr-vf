const answers = {
    q1: ['a'], // Halo: Combat Evolved
    q2: ['a'], // Grand Theft Auto: Vice City
    q3: ['a'], // BioShock
    q4: ['a'], // Max Payne
    q5: ['a'], // The Sims
    q6: ['b'], // The Elder Scrolls IV: Oblivion
    q7: ['a', 'b'], // Call of Duty 4: Modern Warfare, Team Fortress 2
    q8: ['c'], // Warcraft III
    q9: ['a'], // God of War
    q10: ['a'] // Dragon Age: Origins
};

// Fonction pour corriger le QCM et calculer le score
function testqcm() {
let score = 0; // Initialisation du score à 0

// Parcourt chaque question définie dans l'objet 'answers'
Object.keys(answers).forEach(question => {
    // Sélectionne toutes les réponses cochées pour cette question
    const selected = Array.from(document.querySelectorAll(`input[name="${question}"]:checked`))
        .map(input => input.value); // Récupère les valeurs des réponses sélectionnées

    // Compare les réponses sélectionnées avec les réponses correctes
    if (JSON.stringify(selected.sort()) === JSON.stringify(answers[question].sort())) {
        score++; // Incrémente le score si la réponse est correcte
    }
});

// Affiche le score final dans un élément HTML avec l'ID 'result'
document.getElementById('result').innerHTML = `<p>Votre score est : ${score}/10</p>`;
}

// S'assure que le DOM est entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function () {

// Lie la fonction 'testqcm' au bouton ayant l'ID 'correction'
document.getElementById('correction').addEventListener('click', testqcm);

// Lie une fonction pour afficher le corrigé au bouton ayant l'ID 'corrige'
document.getElementById('corrige').addEventListener('click', function () {
    let corriges = `<h2>Corrigé</h2>`; // Titre pour le corrigé

    // Parcourt chaque question pour générer le texte du corrigé
    Object.keys(answers).forEach(question => {
        corriges += `<p>Question ${question.replace('q', '')} : Bonne réponse(s) : ${answers[question].join(', ')}</p>`;
    });

    // Ouvre une nouvelle fenêtre pour afficher le corrigé
    const corrigesWindow = window.open('', '_blank', 'width=400,height=600');
    corrigesWindow.document.write(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>Corrigé</title>
        </head>
        <body>
            ${corriges} <!-- Insère le contenu du corrigé dans le body -->
        </body>
        </html>
    `);
    corrigesWindow.document.close(); 
});
});