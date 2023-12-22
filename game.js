// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    MouseConstraint = Matter.MouseConstraint,
    Events = Matter.Events,
    Mouse = Matter.Mouse;

var width = 370;
var height = 620;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: width,
    height: height
  }
});

// create two boxes and a ground
var startCup = new StartCup(50, 100);
var endCup = new EndCup(300, 500);
var ball = new Ball(75, 100, 20);

Events.on(engine, 'collisionActive', function (event) {
  console.log(event.source.pairs.collisionActive[0].bodyA.label);
  if (event.source.pairs.collisionActive[0].bodyA.label == 'ball' && event.source.pairs.collisionActive[0].bodyB.label == 'ground') {
    console.log('RESET');
    Matter.Body.setPosition(ball.body, {x: 75, y: 100});
  }
});

var playField = new PlayField(engine, startCup, endCup, ball);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

var mouse = Mouse.create(render.canvas),
mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

Composite.add(engine.world, mouseConstraint);
