class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.state = this._createState()
    }

    setup( config = {initial_state: undefined}) {
        if (config.initial_state == undefined) this._generateRandomState()
        else this._setupState(config.initial_state)
    }

    update() {
        let nextState = this._createState()

        for (let i=0; i<this.width; i++) {
            for (let j=0; j<this.height; j++) {
                let numberOfNeighbours = this._aliveNeighbours(i, j)

                let lives = this._cellLives(numberOfNeighbours, this.state[i][j])
                nextState[i][j] = lives
            }
        }
        this.state = nextState
    }

    _setupState(stateString="") {
        Array.from(stateString).forEach((c, k) => {
            let posWidth = k % this.width
            let posHeight = int(k / this.height)

            let state = c != '0'
            this.state[posWidth][posHeight] = state
        })
    }

    _generateRandomState() {
        var randomState =  Array.from({ length: this.width*this.height }, () => Math.floor(Math.random() + 0.5)).join('')
        this._setupState(randomState)
    }

    _createState() {
        let state = new Array(this.width)
        for(let i = 0; i< this.width; i++) {
            state[i] = new Array(this.height).fill(false)
        }
        return state
    }

    _aliveNeighbours(x, y) {
        let n = 0
        for(let i = max(0, x-1); i<=min(this.width -1, x+1); i++) {
            for(let j = max(0, y-1); j<=min(this.height -1, y+1); j++) {
                if (i == x && j == y) continue
                n += this.state[i][j]
            }
        }
        return n
    }

    _cellLives(numberOfNeighbours, currentState) {
        if (currentState) {
            return DIES_FROM_UNDERPOPULATION < numberOfNeighbours 
                && numberOfNeighbours < DIES_FROM_OVERPOPULATION
        } else {
            return numberOfNeighbours == LIVES_FROM_REPRODUCTION
        }
    }
}