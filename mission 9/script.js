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
    
    function testqcm() {
        let score = 0;
    
        Object.keys(answers).forEach(question => {
            const selected = Array.from(document.querySelectorAll(`input[name="${question}"]:checked`))
                .map(input => input.value);
    
            if (JSON.stringify(selected.sort()) === JSON.stringify(answers[question].sort())) {
                score++;
            }
        });
    
        document.getElementById('result').innerHTML = `<p>Votre score est : ${score}/10</p>`;
    }

// Fonction qui  affiche le corrigé
document.getElementById('corrige').addEventListener('click', function () {
    let corriges = <h2>Corrigé</h2>;
    Object.keys(answers).forEach(question => {
        corriges += <p>Question ${question.replace('q', '')} : Bonne réponse(s) : ${answers[question].join(', ')}</p>;
    });

    const corrigesWindow = window.open('', '_blank', 'width=400,height=600');
    corrigesWindow.document.write(corriges);
    corrigesWindow.document.close();
});

// Lier les événements
document.getElementById('correction').addEventListener('click', testqcm);