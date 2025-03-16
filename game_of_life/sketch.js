let grid

async function setup() {
  frameRate(5)
  createCanvas(800, 800)
  grid = new Grid(GRID_SIZE, GRID_SIZE)

  grid.setup({
    initial_state: RANDOMIZE_START_STATE ? undefined : START_STATE
  })
}

async function draw() {
  noLoop()
  background("#f4ebd1");
  grid.render()
  await sleep(1000 / FRAME_RATE) 

  grid.update()
  loop()
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
