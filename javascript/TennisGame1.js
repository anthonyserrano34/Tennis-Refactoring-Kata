// Critiques :
// - Les noms de variables comme m_score1, m_score2, tempScore et minusResult ne sont pas très "explicites" et peuvent être difficile à comprendre pour quelqu'un qui lit le code pour la première fois.
// - Tout dépend des préférences personnelles mais il serait intéressant d'ajouter des commentaires avant chaque fonction pour expliquer brièvement ce qu'elle fait afin de comprendre rapidement la logique derrière le code pour assurer une meilleure maintenabilité.
// - Il serait aussi intéressant d'ajouter des commentaires avant les fonctions pour documenter les paramètres attendus et les valeurs de retour.
// - L'indentation du code n'est pas uniforme ce qui rend la lecture du code difficile.
// - Plusieurs structures de contrôle imbriquées (if-else, switch, boucle for), ce qui rend là aussi la logique du code difficile à suivre.
// - Le code ne gère pas tous les cas possibles, par exemple, il ne traite pas le cas où les scores dépassent 3 sans être égaux.
// - Bien que l'utilisation des prototypes en JavaScript soit courante pour ajouter des méthodes à un objet, cela peut parfois rendre le code moins intuitif.
// - Le code semble être une seule grande fonction, ce qui peut rendre difficile la réutilisation de parties du code dans d'autres contextes ou la mise à jour de fonctionnalités spécifiques.
// - Le code vérifie si window est défini pour déterminer s'il s'exécute dans un navigateur ou dans un environnement Node.js, ce qui peut rendre le code moins portable et moins modulaire.
// - Le code n'utilise pas de syntaxe JavaScript moderne comme par exemple `let` et `const` au lieu de `var` pour la déclaration des variables.
// - Le code ne gère pas les erreurs.
// - La fonction getScore pourrait être beaucoup plus simplifiée.

var TennisGame1 = function(player1Name, player2Name) {
    
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

TennisGame1.prototype.getScore = function() {
    var score = "";
    var tempScore = 0;
    if (this.m_score1 === this.m_score2) {
        switch (this.m_score1) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        var minusResult = this.m_score1 - this.m_score2;
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.m_score1;
            else {
                score += "-";
                tempScore = this.m_score2;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}