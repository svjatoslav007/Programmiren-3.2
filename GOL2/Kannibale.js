

const Creature = require('./Creature');
const random = require('./utils')
module.exports = class Kannibale extends Creature {
    constructor(x, y) {
        //Positio
        super(x, y)
        // FressenzÃ¤hler
        this.multiply = 0;
        this.energy = 20;
        this.notEaten = 5;

        // Sicht auf die Nachbarfelder

    }
    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }



    move() {
        let emptyFields = this.chooseFields(0);
        if (emptyFields.length > 0) {
            let theChosenField = random(emptyFields);
            let newX = theChosenField[0];
            let newY = theChosenField[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }

    }

    eat_predator() {
        // suchen nach Grasobjekten in der Nachbarschaft
        let predatorFields = this.chooseFields(5);
        // ist Grass vorhanden wÃ¤hle zufÃ¤llig eines aus
        if (predatorFields.length > 0 && this.energy > 0) {
            let theChosenField = random(predatorFields);
            let newX = theChosenField[0];
            let newY = theChosenField[1];
            // Grasobjekt fressen: 

            // Positionen in der Matrix / Spielfeld aktualisieren
            // neue Pos bekommt Wert 2
            matrix[newY][newX] = 5;
            // alte Pos bekommt Wert 0
            matrix[this.y][this.x] = 0;

            // eigene Position updaten
            this.x = newX;
            this.y = newY;

            // Grasobjekt aus GrassArr lÃ¶schen
            // finden in der Liste: Wie?
            for (let i = 0; i < predatorArr.length; i++) {
                let predatorObj = predatorArr[i];
                // PrÃ¼fen der Positionswerte
                if (predatorObj.x == this.x && predatorObj.y == this.y) {
                    // lÃ¶schen
                    predatorArr.splice(i, 1);
                    break;
                }
            }

            // eatcounter erhÃ¶hen
            this.eatCount += 1;
            this.energy++;
        } else {
            this.eatCount = 0;
            this.energy -= 1;
            if (this.energy <= 0) {
                this.die();
            } else {
                this.move();
            }


        }
    }

    eat_grazer() {
        // suchen nach Grasobjekten in der Nachbarschaft
        let grazerFields = this.chooseFields(5);
        // ist Grass vorhanden wÃ¤hle zufÃ¤llig eines aus
        if (grazerFields.length > 0 && this.energy > 0) {
            let theChosenField = random(grazerFields);
            let newX = theChosenField[0];
            let newY = theChosenField[1];
            // Grasobjekt fressen: 

            // Positionen in der Matrix / Spielfeld aktualisieren
            // neue Pos bekommt Wert 2
            matrix[newY][newX] = 5;
            // alte Pos bekommt Wert 0
            matrix[this.y][this.x] = 0;

            // eigene Position updaten
            this.x = newX;
            this.y = newY;

            // Grasobjekt aus GrassArr lÃ¶schen
            // finden in der Liste: Wie?
            for (let i = 0; i < grazerArr.length; i++) {
                let grazerObj = grazerArr[i];
                // PrÃ¼fen der Positionswerte
                if (grazerObj.x == this.x && grazerObj.y == this.y) {
                    // lÃ¶schen
                    grazerArr.splice(i, 1);
                    break;
                }
            }

            // eatcounter erhÃ¶hen
            this.eatCount += 1;
            this.energy++;
        } else {
            this.eatCount = 0;
            this.energy -= 1;
            if (this.energy <= 0) {
                this.die();
            } else {
                this.move();
            }


        }
    }
    mul() {
        if (this.eatCount >= 5) {
            // finde alle leeren Nachbarfelder
            let emptyFields = this.chooseFields(0);
            if (emptyFields.length > 0) {
                // wenn es welche gibt, dann wÃ¤hle eines davon zufÃ¤llig aus
                let theChosenField = random(emptyFields); // Array mit 2 element - x und y
                // Erzeuge neues Grass-Objekt mit Pos des ausgewÃ¤hlten Nachbarfeldes
                let newX = theChosenField[0];
                let newY = theChosenField[1];
                let kannibaleObj = new Kannibale(newX, newY);
                // zur Grassobj-Liste hinzufÃ¼gen
                kannibaleArr.push(kannibaleObj);
                // Matrix wird an dieser Pos statt der 0 eine 1
                matrix[newY][newX] = 5;
            }

            this.eatCount = 0;
        }


    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let i = 0; i < kannibaleArr.length; i++) {
            let kannibaleObj = kannibaleArr[i];
            if (kannibaleObj.x == this.x && kannibaleObj.y == this.y) {
                kannibaleArr.splice(i, 1);
                break;
            }


        }
    }
}
