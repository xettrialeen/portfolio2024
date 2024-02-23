<script>
	import { onMount } from 'svelte';
	import Matter from 'matter-js';

	let canvas;

	onMount(() => {
		// Check to ensure code runs only in the browser
		if (typeof window === 'undefined') return;

		const heroSection = document.querySelector('.ContactHome-section ');
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

		const wallThickness = 10; // Increase wall thickness
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
		const texts = [
			'Have A Project?👋',
			'Xettri Aleen',
			'💻',
			'Get',
			'In Touch🐱‍💻',
			'Sveltekit',
			'Chrome Extension',
			'Pocketbase',
			'Figma plugin',
			'Html To Figma',
			'Debugmatic',
			'Equitool'
		];
		for (let i = 0; i < 60; i++) {
			addRoundedRect(
				engine.world,
				Math.random() * canvas.width,
				Math.random() * canvas.height,
				150, // width
				50 + Math.random() * 10, // height
				200, // cornerRadius
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
					ctx.font = '16px Suisse Intl';
					ctx.fillStyle = 'white';
					ctx.textAlign = 'center';
					ctx.textBaseline = 'middle';
					ctx.fillStyle = '#fff';
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

		// Assuming canvasName is defined outside of the event listeners for broader scope
		const canvasName = document.querySelector('.matterData');
		console.log(canvasName);

		// Disable pointer events on wheel scroll
		window.addEventListener('wheel', (e) => {
			canvasName.style.pointerEvents = 'none';
		});

		// Re-enable pointer events on mouse move
		window.addEventListener('mousemove', () => {
			canvasName.style.pointerEvents = 'all';
		});

		//         window.addEventListener("wheel", async (e) => {
		//   // Assuming canvasName is defined elsewhere

		//   const canvasName= document.querySelector('.matterData');
		//   console.log(canvasName);
		//   canvasName.style.pointerEvents = "none";
		//     if (e.deltaY > 0) {
		//         // Scrolling down

		//     } else {
		//         // Scrolling up
		//         canvasName.style.pointerEvents = "all";
		//     }
		// });
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
			chamfer: { radius: 2 },
			// Indicate this body should have text rendered
			renderText: true,
			label: text,
			render: {
				fillStyle: 'transparent ',
				strokeStyle: '#ffffff',
				lineWidth: 4
			}
		});
		Matter.World.add(world, body);
	}
</script>

<section class="ContactHome-section main-width-center">
	<div class="ContactHome-section-wrapper width-1500 border-r border-b"></div>
</section>

<section class="ContactHome-section-3 main-width-center sticky-animate">
	<div class="ContactHome-section-wrapper-3 width-1500 border-r border-b">
        <div class="marque-container">
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> Contact </span>
				</div>
				<div class="title">
					<span> Contact </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					fill="none"
					viewBox="0 0 23 49"
				>
					<path
						fill="#D7D7D7"
						stroke="#fff"
						d="m22.314 19.174-4.304 4.583L.686 5.313 4.991.73l17.323 18.444ZM4.991 48.27.686 43.686 18.01 25.243l4.304 4.583L4.991 48.27Z"
					/>
				</svg>
			</div>
		</div>
    </div>
</section>

<section class="ContactHome-section-2 main-width-center">
	<div class="ContactHome-section-wrapper-2 width-1500 border-r border-b">
        
    </div>
</section>

<section class="ContactHome-section-4 main-width-center">
	<a href="#" class="ContactHome-section-wrapper-4 width-1500 ">
        <section>
			<div class="Component-item-title custom-cursor border-r border-b">
				<h2 class="">
					<div class="component-item-transX"><span>Get In</span></div>
					<div class="component-item-transX"><span>Get In</span></div>
				</h2>
				<button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="74"
						height="74"
						fill="none"
						viewBox="0 0 74 74"
					>
						<path
							fill="#000"
							fill-rule="evenodd"
							d="m4.04 37 24.059 8.904L37 69.962l8.902-24.056L69.96 37H4.039Z"
							clip-rule="evenodd"
						/>
						<path
							fill="#000"
							fill-rule="evenodd"
							d="m4.04 37 24.059-8.904L37 4.039l8.902 24.057L69.96 37H4.039Z"
							clip-rule="evenodd"
							opacity=".4"
						/>
					</svg>
				</button>
			</div>
			<div class="contactHome-bg"></div>
		</section>
        <section>
			<div class="Component-item-title custom-cursor border-l border-b">
				<h2 class="">
					<div class="component-item-transX"><span>Touch</span></div>
					<div class="component-item-transX"><span>Touch</span></div>
				</h2>
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M110.669 68L17.3371 68L17.3371 60L110.669 60L110.669 68Z" fill="black"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M106.669 60C87.855 60 72.4817 76.5448 72.4817 94.1869L72.4817 98.1869L80.4817 98.1869L80.4817 94.1869C80.4817 80.7918 92.4425 68 106.669 68L110.669 68L110.669 60L106.669 60Z" fill="black"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M106.669 68C87.855 68 72.4817 51.4552 72.4817 33.8131L72.4817 29.8131L80.4817 29.8131L80.4817 33.8131C80.4817 47.2082 92.4425 60 106.669 60L110.669 60L110.669 68L106.669 68Z" fill="black"/>
					  </svg>
				</button>
			</div>
			<div class="contactHome-bg"></div>
		</section>
		
    </a>
</section>



<style lang="scss">
	@import '../../../scss/components/_contactHome';
</style>
