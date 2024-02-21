import Matter from 'matter-js';

	let canvas;

	onMount(() => {
		// Check to ensure code runs only in the browser
		if (typeof window === 'undefined') return;

		const heroSection = document.querySelector('.hero-section-2-container ');
		if (!heroSection) {
			console.error('Hero section not found');
			return;
		}
		// Retrieve the dimensions of the hero section
		const { width, height } = heroSection.getBoundingClientRect();

		// Create and append the canvas to the hero section
		canvas = document.createElement('canvas');
		canvas.className = 'matterData';
		heroSection.appendChild(canvas);

		// Set canvas size to match the hero section
		canvas.width = width;
		canvas.height = height;
		canvas.style = `
position: absolute;
`;

		const engine = Matter.Engine.create();
		const render = Matter.Render.create({
			canvas: canvas,
			engine: engine,
			options: {
				width: width,
				height: height,
				background: 'transparent',
				wireframes: false
			}
		});

		const wallThickness = 6; // Increase wall thickness
		createWalls(engine.world, canvas.width, canvas.height, wallThickness);

		const mouse = Matter.Mouse.create(render.canvas);
		const mouseConstraint = Matter.MouseConstraint.create(engine, {
			mouse: mouse,
			constraint: { render: { visible: false } }
		});

		Matter.World.add(engine.world, mouseConstraint);

		// Assuming mouseConstraint and render.canvas are already defined
		render.canvas.addEventListener('mousemove', function (event) {
			const mousePos = { x: event.offsetX, y: event.offsetY };
			const bodies = Matter.Composite.allBodies(engine.world);
			// Use Matter.Query.point to check if the mouse is over any body
			const isOverBody = Matter.Query.point(bodies, mousePos).length > 0;

			if (mouseConstraint.mouse.button === -1 && isOverBody) {
				// Mouse is over a body and not dragging
				render.canvas.style.cursor = 'grab';
			} else if (mouseConstraint.mouse.button === 0) {
				// Mouse is down, could be dragging
				// This state alone doesn't guarantee dragging, but it's a simple approximation
				render.canvas.style.cursor = 'grabbing';
			}
		});

		render.canvas.addEventListener('mouseup', function () {
			// When mouse is released, revert to default cursor
			// or determine if it should be 'grab' based on mouse position
			render.canvas.style.cursor = 'grab';
		});

		// Add multiple rectangles with random text
		const texts = ['Hello👋', 'Javascript 💀', 'Svelte💻', 'Python🐍', 'Hacker Cat🐱‍💻'];
		for (let i = 0; i < 10; i++) {
			addRoundedRect(
				engine.world,
				Math.random() * canvas.width,
				Math.random() * canvas.height,
				200, // width
				50 + Math.random() * 25, // height
				20, // cornerRadius
				texts[Math.floor(Math.random() * texts.length)] // random text
			);
		}

		Matter.Engine.run(engine);
		Matter.Render.run(render);

		Matter.Events.on(render, 'afterRender', function (event) {
			const ctx = render.context;
			engine.world.bodies.forEach((body) => {
				// Check for a specific property to determine if this body should have text rendered
				// For example, you might add a `renderText: true` property to bodies when creating them
				if (body.renderText) {
					ctx.font = '24px Arial';
					ctx.fillStyle = 'white';
					ctx.textAlign = 'center';
					ctx.textBaseline = 'middle';
					ctx.fillStyle = '#151515';
					ctx.fillText(body.label || '', body.position.x, body.position.y);
				}
			});
		});

		window.addEventListener('resize', () => {
			const { width: newWidth, height: newHeight } = heroSection.getBoundingClientRect();
			canvas.width = newWidth;
			canvas.height = newHeight;
			render.canvas.width = newWidth;
			render.canvas.height = newHeight;
			render.options.width = newWidth;
			render.options.height = newHeight;

			// Optionally, reposition or resize your objects based on the new dimensions
			// and recreate walls to fit the new canvas size
		});

	
	});

	function createWalls(world, width, height, thickness) {
		const walls = [
			Matter.Bodies.rectangle(width / 2, height, width, thickness, {
				isStatic: true,
				render: {
					fillStyle: 'transparent', // Example fill color
					strokeStyle: 'transparent', // Make the stroke transparent
					lineWidth: 0
				}
			}), // bottom
			Matter.Bodies.rectangle(width / 2, 0, width, thickness, {
				isStatic: true,
				render: {
					fillStyle: 'transparent', // Fill color for top wall
					strokeStyle: 'transparent', // Transparent stroke for top wall
					lineWidth: 0
				}
			}), // top
			Matter.Bodies.rectangle(0, height / 2, thickness, height, {
				isStatic: true,
				render: {
					fillStyle: 'transparent', // Fill color for left wall
					strokeStyle: 'transparent', // Transparent stroke for left wall
					lineWidth: 0
				}
			}), // left
			Matter.Bodies.rectangle(width, height / 2, thickness, height, {
				isStatic: true,
				render: {
					fillStyle: 'transparent', // Fill color for right wall
					strokeStyle: 'transparent', // Transparent stroke for right wall
					lineWidth: 0
				}
			}) // right
		];
		Matter.World.add(world, walls);
	}

	function addRoundedRect(world, x, y, width, height, cornerRadius, text) {
		const body = Matter.Bodies.rectangle(x, y, width, height, {
			chamfer: { radius: 0 },
			// Indicate this body should have text rendered
			renderText: true,
			label: text,
			render: {
				fillStyle: 'transparent ',
				strokeStyle: '#9F24FF',
				lineWidth: 3
			}
		});
		Matter.World.add(world, body);
	}