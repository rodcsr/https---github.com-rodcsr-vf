function test_age() {
    let age = prompt("Quel est votre âge ?");
    if (age < 18) {
        document.write('Attention : accès refusé, vous êtes mineur.');
        document.body.style.backgroundColor = 'red';
    } else {
        document.write('Accès autorisé, vous êtes majeur.');
        document.body.style.backgroundColor = 'green';
    }
}

function test_couleur() {
    let couleur = prompt("Donnez une couleur ) ");
    try {
        document.body.style.backgroundColor = couleur;

        if (document.body.style.backgroundColor === "") {
            throw new Error("Couleur invalide");
        }
    } catch (e) {
        alert('Couleur non comprise');
        test_couleur();
    }
}

function affichage() {
    let prenom = prompt("Saisissez votre prénom");
    let nom = prompt("Saisissez votre nom");

    document.write(`
        <div style="border: 5px solid navy; padding: 20px; margin: 20px; background-color: lightblue;">
            <h2>Bonjour, ${prenom} ${nom}</h2>
        </div>
    `);
}

function calcul_moyenne() {
    let n1 = prompt("Donnez la première note :");
    let n2 = prompt("Donnez la deuxième note :");
    let n3 = prompt("Donnez la troisième note :");

    let somme = Number(n1) + Number(n2) + Number(n3);
    document.write("Voici la somme : " + somme + "<br>");

    let moyenne = somme / 3;
    document.write("Voici la moyenne : " + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("Refusé");
    } else if (moyenne < 14) {
        document.write("Admis passable");
    } else {
        document.write("Admis Mention Bien");
    }
}
