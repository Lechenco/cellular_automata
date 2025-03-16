class Grid {

    constructor(width, height) {
        this.cells = []
        this.width = width
        this.height = height

        this.game = new Game()

        for (let i=0; i<width; i++) {
            this.cells[i] = []
            for (let j=0; j<height; j++) {
                this.cells[i][j] = new Cell(i, j)
            }
        }
    }

    setup(config) {
        this.game = new Game(this.width, this.height)
        this.game.setup(config)

        this._updateCells()
    }

    update() {
        this.game.update()
        this._updateCells()
    }

    render() {
        this.cells.forEach(row => row.forEach(cell => {cell.render()}))
    }

    _updateCells() {
        for (let i=0; i<this.width; i++) {
            for (let j=0; j<this.height; j++) {
                this.cells[i][j].setActive(this.game.state[i][j])
            }
        }
    }
}