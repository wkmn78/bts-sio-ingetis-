function direBonjour() {
    document.getElementById("message").textContent =
    "Bonjour ! Bienvenue sur ma page.";
    }
    
    function afficherDate() {
    var maintenant = new Date();
    
    var texte = "Nous sommes le " +
    maintenant.toLocaleDateString("fr-FR") +
    " et il est " +
    maintenant.toLocaleTimeString("fr-FR") + ".";
    
    document.getElementById("message").textContent = texte;
    }
    
    function changerCouleur() {
    var couleurs = [
    "#ffeaa7",
    "#fab1a0",
    "#81ecec",
    "#a29bfe",
    "#b2f2bb"
    ];
    
    var indice = Math.floor(Math.random() * couleurs.length);
    
    document.body.style.backgroundColor = couleurs[indice];
    
    document.getElementById("message").textContent =
    "Nouvelle couleur de fond : " + couleurs[indice];
    }
    
    function nombreAleatoire() {
    var nombre = Math.floor(Math.random() * 100) + 1;
    
    document.getElementById("message").textContent =
    "Votre nombre aléatoire est : " + nombre;
    }
    
    function effacer() {
    document.getElementById("message").textContent = "";
    }
    
    function verif_age() {
    let n1 = prompt("Donnez votre âge :");
    
    if (n1 === null || n1.trim() === "") {
    document.getElementById("message").textContent =
    "Vous n'avez pas renseigné votre âge.";
    return;
    }
    
    let age = Number(n1);
    
    if (!Number.isInteger(age) || age < 0) {
    document.getElementById("message").textContent =
    "Veuillez entrer un âge valide.";
    } else if (age < 18) {
    document.getElementById("message").textContent =
    "Vous êtes mineur.";
    document.body.style.backgroundColor = "red";
    } else {
    document.getElementById("message").textContent =
    "Vous êtes majeur.";
    document.body.style.backgroundColor = "green";
    }
    }
    
    function calculerNotes() {
    let n1 = prompt("Donnez la première note :");
    if (n1 === null || n1.trim() === "") return;
    
    let n2 = prompt("Donnez la deuxième note :");
    if (n2 === null || n2.trim() === "") return;
    
    let n3 = prompt("Donnez la troisième note :");
    if (n3 === null || n3.trim() === "") return;
    
    n1 = Number(n1);
    n2 = Number(n2);
    n3 = Number(n3);
    
    if (
    !Number.isFinite(n1) || n1 < 0 || n1 > 20 ||
    !Number.isFinite(n2) || n2 < 0 || n2 > 20 ||
    !Number.isFinite(n3) || n3 < 0 || n3 > 20
    ) {
    document.getElementById("message").textContent =
    "Veuillez saisir trois notes entre 0 et 20.";
    return;
    }
    
    let Somme = n1 + n2 + n3;
    let moyenne = Somme / 3;
    
    document.getElementById("message").textContent =
    "Somme : " + Somme +
    " | Moyenne : " + moyenne.toFixed(2) + "/20";
    }
    