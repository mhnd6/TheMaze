const {
  Engine,
  Render,
  Runner,
  World,
  Bodies,
  MouseConstraint,
  Mouse,
} = Matter;

const width = 800;
const hight = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    hight,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);

// Walls
const walls = [
  Bodies.rectangle(400, 0, 800, 30, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 30, { isStatic: true }),
  Bodies.rectangle(0, 300, 30, 600, { isStatic: true }),
  Bodies.rectangle(800, 300, 30, 600, { isStatic: true }),
];

World.add(world, walls);

// Random shapes

for (let i = 0; i < 20; i++) {
  if (Math.random() > 0.5) {
    World.add(
      world,
      Bodies.rectangle(Math.random() * width, Math.random() * hight, 50, 50)
    );
  } else {
    World.add(
      world,
      Bodies.circle(Math.random() * width, Math.random() * hight, 35, {
        render: {
          fillStyle: "#fff",
        },
      })
    );
  }
}
