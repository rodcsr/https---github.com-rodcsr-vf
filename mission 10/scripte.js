document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour calculer les montants de la facture
    function calcul() {
        const lignes = document.querySelectorAll(".ligne-facture");
        let sousTotal = 0;

        // Calcul du total pour chaque ligne
        lignes.forEach((ligne) => {
            const quantité = parseFloat(ligne.querySelector(".quantité").value) || 0;
            const prix = parseFloat(ligne.querySelector(".prix").value) || 0;
            const total = quantité * prix;

            ligne.querySelector(".total").value = total.toFixed(2);
            sousTotal += total;
        });

        // Calculer la remise
        const remise = parseFloat(document.getElementById("remise").value) || 0;
        if (remise < 0 || remise > 100) {
            alert("La remise doit être entre 0 et 100.");
            return;
        }

        const sousTotalMoinsRemise = sousTotal - (sousTotal * remise /100);

        // Calculer la taxe (10%)
        const tauxTaxe = 0.10; // 10% de taxe
        const taxe = sousTotalMoinsRemise * tauxTaxe;

        // Calculer le solde dû
        const solde = sousTotalMoinsRemise + taxe;

        document.getElementById("resultTotal").value = sousTotal.toFixed(2);
        document.getElementById("taxe").value = taxe.toFixed(2);
        document.getElementById("solde").value = solde.toFixed(2);
    }

    // Fonction pour ajouter une nouvelle ligne à la facture
    function ajouterLigne() {
        const tbody = document.querySelector("#facture-body");
        const ligneModele = document.getElementById('ligne-modele');
        const nouvelleLigne = ligneModele.cloneNode(true);
        nouvelleLigne.removeAttribute('id');
        nouvelleLigne.style.display = '';

        tbody.insertBefore(nouvelleLigne, ligneModele);
    }

    // Fonction pour réinitialiser tous les champs
    function reinitialiser() {
        document.querySelectorAll("input").forEach((input) => {
            input.value = "";
        });
    }

    // Fonction pour remplir automatiquement les champs avec des valeurs aléatoires
    function remplissageAuto() {
        const lignes = document.querySelectorAll(".ligne-facture");

        lignes.forEach((ligne) => {
            const descriptionInput = ligne.querySelector(".description");
            const quantitéInput = ligne.querySelector(".quantité");
            const prixInput = ligne.querySelector(".prix");

            // Génère des valeurs aléatoires entre 1 et 10 pour la quantité et le prix
            const quantitéAléatoire = Math.floor(Math.random() * 10) + 1;
            const prixAléatoire = (Math.random() * 10 + 1).toFixed(2); // Génère un prix entre 1 et 10 avec 2 décimales

            descriptionInput.value = `Produit ${Math.floor(Math.random() * 100) + 1}`; // Description aléatoire
            quantitéInput.value = quantitéAléatoire;
            prixInput.value = prixAléatoire;
        });
    }

    // Lier les fonctions aux boutons
    document.getElementById("ajouterLigne").addEventListener("click", ajouterLigne);
    document.getElementById("reinitialiser").addEventListener("click", reinitialiser);
    document.getElementById("remplissageAuto").addEventListener("click", remplissageAuto);
    document.getElementById("calculer").addEventListener("click", calcul); // Nouveau événement pour le bouton calculer
});
