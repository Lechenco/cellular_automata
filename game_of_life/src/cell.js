class Cell {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.color = CELL_DEAFULT_COLOR
        this.active = false
    }

    setActive(active) {
        this.active = active
        this.color = this.active ? CELL_ACTIVE_COLOR : CELL_DEAFULT_COLOR
    }

    render() {
        fill(this.color)
        let x = this.x * (CELL_SIZE + CELL_PADDING)
        let y = this.y * (CELL_SIZE + CELL_PADDING)
        square(x, y, CELL_SIZE, CELL_RADIUS)
    }
}
