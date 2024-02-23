<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	function componentStat() {
		const tl = gsap.timeline();
		const items = document.querySelectorAll('.Component-item');
		items.forEach((element) => {
			element.addEventListener('click', () => {
				items.forEach((element) => {
					element.classList.remove('component-item-active');
				});
				element.classList.add('component-item-active');
				// const height = element.getBoundingClientRect().height;
				// tl.fromTo(element,{
				// 	height:`${(160 / height) * 100}%`,
					
					
				// },{
					
				// 	height:"100% ",
				// 	duration:5,
				// 	ease:"back.inOut",
				// 	onComplete:() => {
				// 		// 
				// 	}
				// },0)
			});
		});
	}
	onMount(componentStat);
</script>

<section class="Work-section main-width-center sticky-animate">
	<div class="width-1500 Work-section-wrapper border-l border-b">
		<div class="marque-container">
			<div class="marquee-item">
				<div class="title">
					<span> work </span>
				</div>
				<div class="title">
					<span> work </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					viewBox="0 0 23 49"
					fill="none"
				>
					<path
						d="M0.685959 29.8255L4.99043 25.2426L22.314 43.6868L18.0092 48.2697L0.685959 29.8255ZM18.0092 0.730353L22.314 5.31403L4.99044 23.7574L0.68596 19.1745L18.0092 0.730353Z"
						fill="#D7D7D7"
						stroke="white"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> work </span>
				</div>
				<div class="title">
					<span> work </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					viewBox="0 0 23 49"
					fill="none"
				>
					<path
						d="M0.685959 29.8255L4.99043 25.2426L22.314 43.6868L18.0092 48.2697L0.685959 29.8255ZM18.0092 0.730353L22.314 5.31403L4.99044 23.7574L0.68596 19.1745L18.0092 0.730353Z"
						fill="#D7D7D7"
						stroke="white"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> work </span>
				</div>
				<div class="title">
					<span> work </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					viewBox="0 0 23 49"
					fill="none"
				>
					<path
						d="M0.685959 29.8255L4.99043 25.2426L22.314 43.6868L18.0092 48.2697L0.685959 29.8255ZM18.0092 0.730353L22.314 5.31403L4.99044 23.7574L0.68596 19.1745L18.0092 0.730353Z"
						fill="#D7D7D7"
						stroke="white"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> work </span>
				</div>
				<div class="title">
					<span> work </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					viewBox="0 0 23 49"
					fill="none"
				>
					<path
						d="M0.685959 29.8255L4.99043 25.2426L22.314 43.6868L18.0092 48.2697L0.685959 29.8255ZM18.0092 0.730353L22.314 5.31403L4.99044 23.7574L0.68596 19.1745L18.0092 0.730353Z"
						fill="#D7D7D7"
						stroke="white"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> work </span>
				</div>
				<div class="title">
					<span> work </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					viewBox="0 0 23 49"
					fill="none"
				>
					<path
						d="M0.685959 29.8255L4.99043 25.2426L22.314 43.6868L18.0092 48.2697L0.685959 29.8255ZM18.0092 0.730353L22.314 5.31403L4.99044 23.7574L0.68596 19.1745L18.0092 0.730353Z"
						fill="#D7D7D7"
						stroke="white"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> work </span>
				</div>
				<div class="title">
					<span> work </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					viewBox="0 0 23 49"
					fill="none"
				>
					<path
						d="M0.685959 29.8255L4.99043 25.2426L22.314 43.6868L18.0092 48.2697L0.685959 29.8255ZM18.0092 0.730353L22.314 5.31403L4.99044 23.7574L0.68596 19.1745L18.0092 0.730353Z"
						fill="#D7D7D7"
						stroke="white"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> work </span>
				</div>
				<div class="title">
					<span> work </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					viewBox="0 0 23 49"
					fill="none"
				>
					<path
						d="M0.685959 29.8255L4.99043 25.2426L22.314 43.6868L18.0092 48.2697L0.685959 29.8255ZM18.0092 0.730353L22.314 5.31403L4.99044 23.7574L0.68596 19.1745L18.0092 0.730353Z"
						fill="#D7D7D7"
						stroke="white"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> work </span>
				</div>
				<div class="title">
					<span> work </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					viewBox="0 0 23 49"
					fill="none"
				>
					<path
						d="M0.685959 29.8255L4.99043 25.2426L22.314 43.6868L18.0092 48.2697L0.685959 29.8255ZM18.0092 0.730353L22.314 5.31403L4.99044 23.7574L0.68596 19.1745L18.0092 0.730353Z"
						fill="#D7D7D7"
						stroke="white"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> work </span>
				</div>
				<div class="title">
					<span> work </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					viewBox="0 0 23 49"
					fill="none"
				>
					<path
						d="M0.685959 29.8255L4.99043 25.2426L22.314 43.6868L18.0092 48.2697L0.685959 29.8255ZM18.0092 0.730353L22.314 5.31403L4.99044 23.7574L0.68596 19.1745L18.0092 0.730353Z"
						fill="#D7D7D7"
						stroke="white"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> work </span>
				</div>
				<div class="title">
					<span> work </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					viewBox="0 0 23 49"
					fill="none"
				>
					<path
						d="M0.685959 29.8255L4.99043 25.2426L22.314 43.6868L18.0092 48.2697L0.685959 29.8255ZM18.0092 0.730353L22.314 5.31403L4.99044 23.7574L0.68596 19.1745L18.0092 0.730353Z"
						fill="#D7D7D7"
						stroke="white"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> work </span>
				</div>
				<div class="title">
					<span> work </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					viewBox="0 0 23 49"
					fill="none"
				>
					<path
						d="M0.685959 29.8255L4.99043 25.2426L22.314 43.6868L18.0092 48.2697L0.685959 29.8255ZM18.0092 0.730353L22.314 5.31403L4.99044 23.7574L0.68596 19.1745L18.0092 0.730353Z"
						fill="#D7D7D7"
						stroke="white"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> work </span>
				</div>
				<div class="title">
					<span> work </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					viewBox="0 0 23 49"
					fill="none"
				>
					<path
						d="M0.685959 29.8255L4.99043 25.2426L22.314 43.6868L18.0092 48.2697L0.685959 29.8255ZM18.0092 0.730353L22.314 5.31403L4.99044 23.7574L0.68596 19.1745L18.0092 0.730353Z"
						fill="#D7D7D7"
						stroke="white"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> work </span>
				</div>
				<div class="title">
					<span> work </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					viewBox="0 0 23 49"
					fill="none"
				>
					<path
						d="M0.685959 29.8255L4.99043 25.2426L22.314 43.6868L18.0092 48.2697L0.685959 29.8255ZM18.0092 0.730353L22.314 5.31403L4.99044 23.7574L0.68596 19.1745L18.0092 0.730353Z"
						fill="#D7D7D7"
						stroke="white"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> work </span>
				</div>
				<div class="title">
					<span> work </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					viewBox="0 0 23 49"
					fill="none"
				>
					<path
						d="M0.685959 29.8255L4.99043 25.2426L22.314 43.6868L18.0092 48.2697L0.685959 29.8255ZM18.0092 0.730353L22.314 5.31403L4.99044 23.7574L0.68596 19.1745L18.0092 0.730353Z"
						fill="#D7D7D7"
						stroke="white"
					/>
				</svg>
			</div>
			<div class="marquee-item">
				<div class="title">
					<span> work </span>
				</div>
				<div class="title">
					<span> work </span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="49"
					viewBox="0 0 23 49"
					fill="none"
				>
					<path
						d="M0.685959 29.8255L4.99043 25.2426L22.314 43.6868L18.0092 48.2697L0.685959 29.8255ZM18.0092 0.730353L22.314 5.31403L4.99044 23.7574L0.68596 19.1745L18.0092 0.730353Z"
						fill="#D7D7D7"
						stroke="white"
					/>
				</svg>
			</div>
		</div>
	</div>
</section>
<section class="Work-section-2">
	<div class="Work-section-wrapper-2">
		<div class="Component-item border-t border-b component-item-active">
			<div class="Component-item-wrapper">
				<div class="Component-item-title custom-cursor">
					<h2 class="">
						<div class="component-item-transX"><span>Full Stack Developer</span></div>
						<div class="component-item-transX"><span>Full Stack Developer</span></div>
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
				<div class="Component-item-body">
					<section class="Component-item-body-stacks">
						<h3 class="Componet-ibs-title">Technology</h3>
						<div class="component-ibs-body-item">
							<ul>
								<li>Javascript</li>
								<li>Sveltekit</li>
								<li>Three.js</li>
								<li>Chrome Extension development</li>
								<li>pocketbase</li>
								<li>pocketbase</li>
								<li>Figma plugin develeopment</li>
								<li>gsap animation</li>
								<li>Web scrapping</li>
							</ul>
						</div>
					</section>
					<section class="Component-item-body-footer">
						<a href="#" class="cibf-link">
							<span>Move Straight to showcase</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="18"
								viewBox="0 0 16 18"
								fill="none"
							>
								<path
									opacity="0.4"
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M8.99976 0.29126V16.6915H6.99976V0.29126H8.99976Z"
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M1.97842 8.82739L8.00043 14.8744L14.0214 8.82739L15.4387 10.2386L8.00055 17.7088L0.561279 10.2387L1.97842 8.82739Z"
									fill="white"
								/>
							</svg>
						</a>
						<a href="#" class="cibf-link">
							<span>
								<svg
								xmlns="http://www.w3.org/2000/svg"
								width="34"
								height="34"
								viewBox="0 0 34 34"
								fill="none"
							>
								<g clip-path="url(#clip0_17_298)">
									<path
										d="M16.6584 1.45569C7.48834 1.45569 0.0610352 8.75851 0.0610352 17.7653C0.0610352 24.9727 4.81617 31.0847 11.4095 33.2396C12.2393 33.3931 12.5436 32.8882 12.5436 32.4553C12.5436 32.0681 12.5298 31.0418 12.5229 29.6822C7.90604 30.6656 6.93233 27.4941 6.93233 27.4941C6.17715 25.6117 5.08587 25.1083 5.08587 25.1083C3.58243 24.0972 5.20205 24.1179 5.20205 24.1179C6.8687 24.2314 7.74421 25.7984 7.74421 25.7984C9.22414 28.2922 11.6294 27.5716 12.5782 27.1553C12.7276 26.0999 13.1549 25.3821 13.6293 24.9741C9.94336 24.5661 6.06926 23.1636 6.06926 16.9147C6.06926 15.1346 6.71241 13.6796 7.77741 12.5385C7.59069 12.1264 7.03053 10.468 7.92263 8.22186C7.92263 8.22186 9.31266 7.7848 12.4869 9.89404C13.8147 9.53167 15.2255 9.35186 16.6362 9.34356C18.047 9.35186 19.4578 9.53167 20.7856 9.89404C23.939 7.7848 25.3291 8.22186 25.3291 8.22186C26.2212 10.468 25.661 12.1264 25.495 12.5385C26.5531 13.6796 27.1963 15.1346 27.1963 16.9147C27.1963 23.1802 23.3166 24.5592 19.6237 24.9603C20.2047 25.4499 20.7441 26.4499 20.7441 27.9782C20.7441 30.1608 20.7233 31.9145 20.7233 32.4443C20.7233 32.8716 21.0138 33.382 21.8644 33.2188C28.5047 31.0778 33.2557 24.9616 33.2557 17.7653C33.2557 8.75851 25.8242 1.45569 16.6584 1.45569Z"
										fill="#E0E0E0"
									/>
								</g>
								<defs>
									<clipPath id="clip0_17_298">
										<rect
											width="33.1946"
											height="33.1946"
											fill="white"
											transform="translate(0.0610352 0.76416)"
										/>
									</clipPath>
								</defs>
							</svg>

								<div>Github</div>
							</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="16"
								viewBox="0 0 18 16"
								fill="none"
							>
								<path
									opacity="0.4"
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M0.29126 8.99976L16.6915 8.99976L16.6915 6.99976L0.29126 6.99976L0.29126 8.99976Z"
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M8.82739 1.97842L14.8744 8.00043L8.82739 14.0214L10.2386 15.4387L17.7088 8.00055L10.2387 0.561279L8.82739 1.97842Z"
									fill="white"
								/>
							</svg>
						</a>
					</section>
				</div>
			</div>

			<div class="Component-item-bg"></div>
		</div>
		<div class="Component-item border-b">
			<div class="Component-item-wrapper">
				<div class="Component-item-title custom-cursor">
					<h2 class="">
						<div class="component-item-transX"><span>UI/UX Designer</span></div>
						<div class="component-item-transX"><span>UI/UX Designer</span></div>
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
				<div class="Component-item-body">
					<section class="Component-item-body-stacks">
						<h3 class="Componet-ibs-title">Suggested UI Specific Topics</h3>
						<div class="component-ibs-body-item">
							<ul>
								<li>Web Design</li>
								<li>Interactive Design</li>
								<li>Wireframing</li>
								<li>Usability Testing</li>
								<li>Information Architecture</li>
								<li>Branding and Identity</li>
								<li>Accessibility Design</li>
								<li>Design Systems</li>
								<li>Prototype Design</li>
							</ul>
						</div>
					</section>
					<section class="Component-item-body-footer">
						<a href="#" class="cibf-link">
							<span>Move Straight to showcase</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="18"
								viewBox="0 0 16 18"
								fill="none"
							>
								<path
									opacity="0.4"
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M8.99976 0.29126V16.6915H6.99976V0.29126H8.99976Z"
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M1.97842 8.82739L8.00043 14.8744L14.0214 8.82739L15.4387 10.2386L8.00055 17.7088L0.561279 10.2387L1.97842 8.82739Z"
									fill="white"
								/>
							</svg>
						</a>
					
					</section>
				</div>
			</div>

			<div class="Component-item-bg"></div>
		</div>
		<div class="Component-item border-b">
			<div class="Component-item-wrapper">
				<div class="Component-item-title custom-cursor">
					<h2 class="">
						<div class="component-item-transX"><span>Reverse Engineer</span></div>
						<div class="component-item-transX"><span>Reverse Engineer</span></div>
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
				<div class="Component-item-body">
					<section class="Component-item-body-stacks">
						<h3 class="Componet-ibs-title">Methods</h3>
						<div class="component-ibs-body-item">
							<ul>
								<li>Source Code Auditing</li>
								<li>Game Reverse Engineering</li>
								<li>Application Protocol Analysis</li>
								<li>API Reverse Engineering</li>
								<li>Software Reverse Engineering</li>
								<li>Network Protocol Analysis</li>
								<li>Obfuscation and Deobfuscation Techniques</li>
								
							</ul>
						</div>
					</section>
					<section class="Component-item-body-footer">
						<a href="#" class="cibf-link">
							<span>Move Straight to showcase</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="18"
								viewBox="0 0 16 18"
								fill="none"
							>
								<path
									opacity="0.4"
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M8.99976 0.29126V16.6915H6.99976V0.29126H8.99976Z"
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M1.97842 8.82739L8.00043 14.8744L14.0214 8.82739L15.4387 10.2386L8.00055 17.7088L0.561279 10.2387L1.97842 8.82739Z"
									fill="white"
								/>
							</svg>
						</a>
				
					</section>
				</div>
			</div>

			<div class="Component-item-bg"></div>
		</div>
	</div>
</section>

<style>
	@import '../../../scss/components/__work.scss';
</style>
