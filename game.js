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
var points = 0;

// create a renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: width,
    height: height,
    wireframes: false,
    background: "#191919"
  }
});
var playfields = [
  function (engine) {return new IntroField(engine)}, 
  function (engine) {return new HarderField(engine)},
  function (engine) {return new PingPongField(engine)},
  function (engine) {return new MoveField(engine)},
  function (engine) {return new FlipperField(engine)},
];
let stage = 0;
let playfield = playfields[stage](engine);

var lastCollision = Math.round(engine.timing.timestamp);
// Ball hits floor
Events.on(engine, 'collisionStart', function (event) {
  event.source.pairs.collisionStart.forEach((element) => {
    if (element.bodyA.label == 'ball' || element.bodyB.label == 'ball') {
      if (element.bodyA.label == 'ground' || element.bodyB.label == 'ground') {
        if (Math.round(engine.timing.timestamp) - lastCollision > 10) {
          points = points > 0 ? points -= 1 : 0; 
          console.log('points: ' + points);
          console.log(event);
          console.log(lastCollision);
          lastCollision = engine.timing.timestamp;
        }
        playfield.newBall(35 + ((Math.sin(engine.timing.timestamp * 0.002) + 1) * 150));
      }
    }
  });
});


function gotoFinish(engine, render, runner, points) {
  Engine.clear(engine);
  Render.stop(render)
  Runner.stop(runner);
  render.canvas.remove();
  var canvas = document.createElement('canvas');
  canvas.setAttribute('width', 370);
  canvas.setAttribute('height', 620);
  canvas.setAttribute('style', 'background-color: #191919');

  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  ctx.font = "50px Arial";
  ctx.fillStyle = 'white';
  ctx.fillText("Voitit!!", width/5, height/2); 

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  sleep(2000).then(() => { ctx.fillText('Pisteet: ' + points, width/7, height/2 + 150); });
}

// Ball hits goal
Events.on(engine, 'collisionStart', function (event) {
  event.source.pairs.collisionStart.forEach((element) => {
    if (element.bodyA.label == 'ball' || element.bodyB.label == 'ball') {
      if (element.bodyA.label == 'goal' || element.bodyB.label == 'goal') {
        // do actions: move to next playField or quit game
        points += 15;
        playfield.newBall(35 + ((Math.sin(engine.timing.timestamp * 0.002) + 1) * 150));
        stage +=1;
        if (stage >= playfields.length){
          gotoFinish(engine, render, runner, points);
        } else {
          Matter.Composite.clear(engine.world);
          playfield = playfields[stage](engine);
        }
      }
    }
  });
});

// Ball aiming system: shift ball around if not dropped
Events.on(engine, 'beforeUpdate', function() {
  if (!playfield.getDropped()) {
    var newX = (35 + ((Math.sin(engine.timing.timestamp * 0.002) + 1) * 150));
    var ball = playfield.getBall();
    Matter.Body.setPosition(playfield.getBall().body, { x: newX, y: ball.body.position.y }, false);
  }
});

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

document.addEventListener("keydown", function (event) {
  let keyCode = event.keyCode;
  switch (keyCode) {
    case 32:
      playfield.setDropped(true);
      break;
    case 82:
      playfield.newBall(35 + ((Math.sin(engine.timing.timestamp * 0.002) + 1) * 150));
    default:
      break;
  }
});

document.addEventListener("keydown", function (event) {
  let keyCode = event.keyCode;
  switch (keyCode) {
    case 32:
      playfield.setDropped(true);
      break;
    case 82:
      playfield.newBall(35 + ((Math.sin(engine.timing.timestamp * 0.002) + 1) * 150));
    default:
      break;
  }
});

function getMousePosition(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  console.log("Coordinate x: " + x,
      "Coordinate y: " + y);
  playfield.setDropped(true);
  if (event.detail == 2) {
    playfield.newBall(35 + ((Math.sin(engine.timing.timestamp * 0.002) + 1) * 150));
  }
}

let canvasElem = document.querySelector("canvas");

canvasElem.addEventListener("mousedown", function (e) {
  getMousePosition(canvasElem, e);
}); 

/*
var mouse = Mouse.create(render.canvas),
mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    collisionFilter: {mask: 0b1},
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});
*/

//Composite.add(engine.world, mouseConstraint);
