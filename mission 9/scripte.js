// Les réponses correctes pour chaque question
const answers = {
    q1: ['a'], // Halo: Combat Evolved
    q2: ['a']
    q3: ['a']
    q4: ['a']
    q5: ['a']
    q6: ['b']
    q7: ['a','b']
    q8: ['c']
    q9: ['a']
    q10: ['a']
};

//  correction
function testqcm() {
    let score = 0;

    Object.keys(answers).forEach(question => {
        const selected = Array.from(document.querySelectorAll(`input[name="${question}"]:checked`))
            .map(input => input.value);

        if (JSON.stringify(selected.sort()) === JSON.stringify(answers[question].sort())) {
            score++;
        }
    });

    // Afficher le score
    document.getElementById('result').innerHTML = `<p>Votre score est : ${score}/10</p>`;
}

// Fonction qui  affiche le corrigé
document.getElementById('corrige').addEventListener('click', function () {
    let corriges = `<h2>Corrigé</h2>`;
    Object.keys(answers).forEach(question => {
        corriges += `<p>Question ${question.replace('q', '')} : Bonne réponse(s) : ${answers[question].join(', ')}</p>`;
    });

    const corrigesWindow = window.open('', '_blank', 'width=400,height=600');
    corrigesWindow.document.write(corriges);
    corrigesWindow.document.close();
});

// Lier les événements
document.getElementById('correction').addEventListener('click', testqcm);

