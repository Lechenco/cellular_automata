# Game of Life

![game_of_life.gif](assets/game_of_life.gif)

### Constants

| Name | Description | Value |
| -- | -- | -- |
|    RANDOMIZE_START_STATE   |      Enable a random first state to the grid       |     true    |
|    START_STATE   |      Set Fixed initial state, only when  RANDOMIZE_START_STATE is False      |     "01001001000001110011000000"    |
|    LIVES_FROM_REPRODUCTION   |      Number of neighbours from a dead cell come alive       |     3    |
|    DIES_FROM_UNDERPOPULATION   |    Cells with this number of neighbours or less will die        |    1     |
|    DIES_FROM_OVERPOPULATION   |     Cells with this number of neighbours or more will die        |      4   |
|   GRID_SIZE    |   Number os cells in each row and column      |      10   |
|   CELL_PADDING    |  Distance in px between cells        |     8    |
|    CELL_SIZE   |     Widht and Height of each cell        |      50   |
|    CELL_RADIUS   |   Border radius of each cell          |    10     |
|     CELL_DEAFULT_COLOR  |     Default inactive color of cells        |    "#f3fcff"     |
|     CELL_ACTIVE_COLOR  |     Active color of cells        |     "#ffa600"    |
| FRAME_RATE   |     FPS of the animation        |      3   |