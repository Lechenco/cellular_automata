class Neighbourhood {
    constructor() {
        this.neighbourhoodSize = NEIGHBOURHOOD_SIZE
        this.gridSize = GRID_SIZE

        this._setupShader(NEIGHBOURHOOD_SHADER)
    }

    _setupShader(shaderString="") {
        this.shader = new Array()
        Array.from(shaderString).forEach(c => {
            let state = c != '0'
            this.shader.push(state)
        })
    }

    _getNeighbourhood(state, x, y) {
        let startRow = max(0, x - this.neighbourhoodSize)
        let endRow = min(x + this.neighbourhoodSize + 1, this.gridSize)
        let startCol = max(0, y - this.neighbourhoodSize)
        let endCol = min(y + this.neighbourhoodSize + 1, this.gridSize)

        let subState = state.slice(startRow, endRow).map(row => row.slice(startCol, endCol)) 
        return subState
    }

    getAliveNeighbours(state, x, y) {
        let neighboorhood = this._getNeighbourhood(state, x, y)

        return neighboorhood
            .reduce((acc, value) => [...acc, ...value], [])
            .filter((_, k) => this.shader[k])
            .reduce((acc, value) => acc + value, 0) 
            - state[x][y]
    }
}