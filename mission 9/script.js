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

// Fonction pour corriger le QCM et afficher le score
function testqcm() {
    let score = 0; // Initialisation du score à 0

    Object.keys(answers).forEach(question => {
        const selected = Array.from(document.querySelectorAll(`input[name="${question}"]:checked`))
            .map(input => input.value);

        // Vérifie si les réponses sélectionnées correspondent aux réponses correctes
        if (JSON.stringify(selected.sort()) === JSON.stringify(answers[question].sort())) {
            score++; // Augmente le score si la réponse est correcte
        }
    });

    // Affiche le score dans la page
    document.getElementById('result').innerHTML = `<p>Votre score est : ${score}/10</p>`;
}

// Fonction pour afficher le corrigé
function showCorrige() {
    let corriges = `<h2>Corrigé</h2>`;
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
            ${corriges}
        </body>
        </html>
    `);
    corrigesWindow.document.close();
}

// Fonction pour effacer les réponses sélectionnées
function resetQuiz() {
    // Réinitialise toutes les cases cochées et boutons radio
    document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => {
        input.checked = false;
    });

    // Efface le contenu affiché dans 'result'
    document.getElementById('result').innerHTML = '';
}

// S'assure que le DOM est chargé avant d'ajouter les événements
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('correction').addEventListener('click', testqcm); // Bouton pour corriger
    document.getElementById('corrige').addEventListener('click', showCorrige); // Bouton pour afficher le corrigé
    document.getElementById('delete').addEventListener('click', resetQuiz); // Bouton pour effacer
});
