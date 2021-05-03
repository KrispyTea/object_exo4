let vieille_dame = {
    âge: 80 + "ans",
    nom: {
        prenom: "Jacqueline",
        nom: "Franck"
    },
    moral: "mal",
    objet: "canne",
    parler(){
        if (this.moral == "mal") {
            alert("Vous me dérangez et frappe avec sa " + this.objet)
        } else if (this.moral == "bien") {
            alert("Bonjour " + vieil_homme.nom)
        }

    }
}
let vieil_homme = {
    nom: "Jean",
    adoucir(){
        vieille_dame.moral = "bien"
    }
}

vieille_dame.parler()
vieil_homme.adoucir()
vieille_dame.parler()