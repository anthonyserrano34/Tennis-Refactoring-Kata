class TennisGame2 {
    constructor(player1Name, player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.resetPoints();
        this.pointHistory = [];  
    }

    resetPoints() {
        this.P1point = 0;
        this.P2point = 0;
        this.P1res = "";
        this.P2res = "";
    }

    getScore() {
        if (this.P1point === this.P2point) {
            return this.P1point < 3 ? `${this.pointToString(this.P1point)}-All` : 'Deuce';
        }

        if (this.P1point >= 4 || this.P2point >= 4) {
            const pointDifference = this.P1point - this.P2point;
            if (pointDifference === 1) return 'Avantage joueur 1';
            if (pointDifference === -1) return 'Avantage joueur 2';
            if (pointDifference >= 2) return 'Victoire pour joueur 1';
            if (pointDifference <= -2) return 'Victoire pour joueur 2';
        }

        return `${this.pointToString(this.P1point)}-${this.pointToString(this.P2point)}`;
    }

    pointToString(point) {
        switch (point) {
            case 0: return 'Love';
            case 1: return 'Quinze';
            case 2: return 'Trente';
            case 3: return 'Quarante';
        }
    }

    wonPoint(player) {
        if (player === "joueur1") {
            this.P1point++;
            this.pointHistory.push(`${this.player1Name} a gagné un point`); 
        } else {
            this.P2point++;
            this.pointHistory.push(`${this.player2Name} a gagné un point`); 
        }
    }

    getHistory() {
        return this.pointHistory.join('\n');  
    }

    setPlayer1Score(points) {
        this.P1point += points;
    }

    setPlayer2Score(points) {
        this.P2point += points;
    }
}


if (typeof window === "undefined") {
    module.exports = TennisGame2;
}
