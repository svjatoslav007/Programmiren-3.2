class Creature {
    constructor(x, y) {
        //Position
        this.x = x;
        this.y = y;
        // RundenzÃ¤hler
        this.multiply = 0;
        // Sicht auf die Nachbarfelder
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
    chooseFields(character) {
        // Array
        let found = [];
        // Liste mit Nachbarfelder
        // fÃ¼r jedes Nachbarfeld
        for (let i in this.directions) {
            i = parseInt(i);
            let fieldPos = this.directions[i];
            // Position des jeweiligen Nachbarfeldes auslesen
            let posX = fieldPos[0];
            let posY = fieldPos[1];
            // Wenn innerhalb der Spielfeldgrenzen / Matrix
            if (posX >= 0 && posX < matrix[0].length && posY >= 0 && posY < matrix.length) {
                // schau nach, ob es leer ist 
                //- Wert 0 in der Matrix an dieser Pos
                if (matrix[posY][posX] == character) {
                    // dann haben wir ein leeres nachbarfeld gefunden
                    // wenn dem so ist, dann merk es Dir
                    found.push(fieldPos);
                }
            }
        }
        return found;
    }

}