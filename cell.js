export class Cell {
    constructor (gridElement, x, y) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridElement.append(cell);
        this.x = x;
        this.y = y;
    }

    linkTile(tile) {
        tile.setXY(this.x, this.y);
        this.linkedTile = tile;
    }

    unlinkTile() {
        this.linkedTile = null;
    }

    isEmpty() {
        return !this.linkedTile;
    }

    linkTileForMerge(tile) {
        tile.setXY(this.x, this.y);
        this.linkedTileForMerge = tile;
    }

    unlinkTileForMerge() {
        this.linkedTileForMerge = null;
    }

    hasTileForMerge() {
        return !!this.linkedTileForMerge;
    }

    canAccept(newTile) {
        return this.isEmpty() || (!this.hasTileForMerge() && this.linkedTile.value === newTile.value);
    }

    mergeTiles() {
        let score = 0;
        this.linkedTile.setValue(this.linkedTile.value + this.linkedTileForMerge.value);
        score += this.linkedTile.value;
        allScores(score);
        this.linkedTileForMerge.removeFromDOM();
        this.unlinkTileForMerge();
    };   
}

export let maxBox = 0;

function allScores(score) {
    if (score > maxBox) { 
        maxBox = score
        //console.log(maxBox);
    }
}