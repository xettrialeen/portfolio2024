<script>
	import aleen from '../../../assets/my/aleen.png';
	import { onMount } from 'svelte';
	
</script>

<section class="Hero-Section main-width-center">
	<div class="Hero-Section-wrapper width-1500">
		<section class="Hero-Section__Item">
			<div class="HSI_Title">
				<h1>
					<div class="MaskSplitText__Wrapper">
						<div class="mask__line">
							<div class="mask__word text-xl">Hi</div>
						</div>
					</div>
					<div class="MaskSplitText__Wrapper">
						<div class="mask__line">
							<div class="mask__word text-xl">I’m</div>
							<div class="mask__word primary-active img-absolute text-xl">
								Aleen
								<div class="profile-image-mask">
									<img src={aleen} alt="profile picture of aleen" />
								</div>
							</div>
						</div>
					</div>
				</h1>

				<div class="paragraph_hero">
					<div class="MaskSplitText__Wrapper">
						<div class="mask__line">
							<p class="mask__word">Frontend & Fullstack Developer | SvelteKit Specialist | UI/</p>
						</div>
						<div class="mask__line">
							<p class="mask__word">UX Enthusiast | API Reverse Engineer.</p>
						</div>
						<button class="hero-action">
							<span>Download Resume</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="26"
								height="26"
								fill="none"
								viewBox="0 0 26 26"
							>
								<path
									fill="#151515"
									fill-rule="evenodd"
									d="M14.237 3.622v17.013h-2.075V3.622h2.075Z"
									clip-rule="evenodd"
									opacity=".4"
								/>
								<path
									fill="#151515"
									fill-rule="evenodd"
									d="M6.953 12.477 13.2 18.75l6.246-6.273 1.47 1.464L13.2 21.69l-7.717-7.75 1.47-1.463Z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
		<section class="Hero-Section__Item">
			<div class="HSCI__Title">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="484"
					height="480"
					fill="none"
					viewBox="0 0 484 480"
				>
				<path class="body" fill="#fff" d="M460.399 456.924H22.7c19.151-100.207 80.434-179.553 158.887-206.75l16.642-24.689c1.585-3.828 9.113-10.561 13.339-10.429l59.17.132c4.095-.265 11.491 1.716 13.076 5.677l17.698 29.309c78.321 27.197 139.604 106.543 158.887 206.75Z">
					<animateTransform
					attributeName="transform"
					attributeType="XML"
					type="translate"
					dur="3s"
					values="0,0; 0,2; 0,0"
					repeatCount="indefinite"/>
				</path>
					<path
						fill="#fff"
						fill-opacity=".76"
						d="M460.399 456.924H22.7c18.887-98.622 78.585-177.045 155.189-205.43 18.094 7.526 39.623 11.882 62.736 11.882 23.51 0 45.302-4.488 63.528-12.278 77.133 28.121 137.227 106.808 156.246 205.826Z"
					/>
					<path
						stroke="#000"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.556"
						d="M382.342 380.614v76.31H100.625v-76.31m65.377-124.235a198.174 198.174 0 0 1 15.585-6.205l18.359-27.197c3.698-6.601 11.358-8.318 15.452-8.186h49.793c4.226-.132 14.66 0 18.623 6.074l17.698 29.309a198.4 198.4 0 0 1 14.528 5.677c-20.207 11.354-46.623 18.087-75.415 18.087-28.528 0-54.547-6.601-74.623-17.559Z"
					/>
					<path
						stroke="#000"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.556"
						d="M460.399 456.924H22.7c18.887-98.622 78.585-177.045 155.189-205.43 18.094 7.526 39.623 11.882 62.736 11.882 23.51 0 45.302-4.488 63.528-12.278 77.133 28.121 137.227 106.808 156.246 205.826Z"
					/>
					<path
						stroke="#000"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.556"
						d="M460.399 456.924H22.7c19.151-100.207 80.434-179.553 158.887-206.75l18.359-27.197c3.698-6.601 11.358-8.318 15.453-8.186h49.792c4.227-.132 14.661 0 18.623 6.074l17.698 29.309c78.321 27.197 139.604 106.543 158.887 206.75Z"
					/>
					<path
					class="neck"
						fill="#fff"
						stroke="#000"
						stroke-width="1.556"
						d="m247.361 252.022-13.208.396c-11.886.264-21.66-9.109-21.924-20.991l-.528-21.784c-.265-11.883 9.113-21.652 21-21.916l13.207-.397c11.755-.264 21.528 9.11 21.925 20.992l.396 21.784c.396 11.882-8.981 21.652-20.868 21.916Z"
					/>
					<path
						fill="#000"
						d="M232.172 206.474s-29.189-1.452-43.849-13.334c-14.793-11.883-33.151-55.187-23.245-89.645 9.773-34.59 63.792-37.23 87.962-35.118 24.17 1.98 62.208 22.972 62.208 22.972s2.245 100.47-41.604 111.824c-43.981 11.354-41.472 3.301-41.472 3.301Z"
					/>
					<path
						fill="#fff"
						stroke="#000"
						stroke-width="1.556"
						d="M169.833 138.217c9.905.529 17.433 8.846 16.905 18.748-.528 9.77-8.981 17.295-18.755 16.767-9.905-.528-17.566-8.978-17.037-18.747.528-9.77 8.981-17.296 18.887-16.768Z"
					/>
					<path
						stroke="#000"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.037"
						d="M178.814 156.437c.264-5.413-3.963-10.034-9.378-10.298"
					/>
					<path
						fill="#fff"
						stroke="#000"
						stroke-width="1.556"
						d="M327.003 158.945c0 9.77-7.925 17.824-17.831 17.824-9.905.132-17.962-7.79-17.962-17.56-.132-9.769 7.793-17.823 17.698-17.955 9.906 0 17.963 7.921 18.095 17.691Z"
					/>
					<path
						stroke="#000"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.037"
						d="M299.135 159.209c0-5.413 4.358-9.901 9.905-9.901"
					/>
					<path class="face" fill="#fff" stroke="#000" stroke-width="1.556" d="M295.304 164.754c-.924 26.801-23.509 47.925-50.321 47.133l-15.717-.528c-26.811-.792-47.943-23.5-47.151-50.169l1.717-52.546c.793-26.669 23.51-47.925 50.189-47l15.849.528c26.812.792 47.944 23.368 47.019 50.169l-1.585 52.413Z">
						<animate attributeName="transform" attributeType="XML" type="translate" values="0,0; 0,2; 0,0" dur="1s" repeatCount="indefinite"/>
					</path>
				
					<animate
        attributeName="d"
        dur="0.5s"
        values="M255,170 Q235,180 215,170; M255,170 Q235,160 215,170; M255,170 Q235,180 215,170"
        repeatCount="indefinite"/>
					<path class="mouth" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.037" d="M255.021 169.507c-1.188 7.13-7.396 12.542-14.792 12.278-7.529-.264-13.34-6.073-14-13.202l28.792.924Z">
						<animate attributeName="d" values="M255.021 169.507c-1.188 7.13-7.396 12.542-14.792 12.278-7.529-.264-13.34-6.073-14-13.202l28.792.924Z; M255.021 174.507c-1.188 2.13-7.396 7.542-14.792 7.278-7.529-.264-13.34-3.073-14-10.202l28.792.924Z; M255.021 169.507c-1.188 7.13-7.396 12.542-14.792 12.278-7.529-.264-13.34-6.073-14-13.202l28.792.924Z" dur="1s" repeatCount="indefinite" />
					</path>
					<path
						fill="#000" class="eyes"
						d="M209.455 134.653c-.264 3.564-3.302 6.337-7 6.073-3.566-.264-6.34-3.301-6.076-6.997.265-3.565 3.302-6.338 7-6.073 3.567.264 6.34 3.3 6.076 6.997Zm69.34 1.452c-.132 3.697-3.302 6.469-6.868 6.205-3.698-.264-6.472-3.432-6.208-6.997.264-3.565 3.434-6.337 7-6.073 3.566.132 6.34 3.3 6.076 6.865Z"
					/>
					<path
						stroke="#000"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.556"
						d="M266.115 121.318s9.246-1.848 16.114 3.433m-72.51-4.621s-9.245-2.376-16.377 2.641m51.641 28.385-11.887-.264 6.208-25.745"
					/>
					<path class="hair" fill="#000" d="m310.757 138.614-12.415 7.525-1.585-17.427c-16.113-6.337-15.321-28.385-15.321-28.385-3.698 10.958 1.717 25.48 1.717 25.48-24.83-9.241-20.339-39.211-20.471-37.89-2.774 18.351-22.717 26.536-41.736 30.101-1.453.264 6.075-3.697 12.151-9.506 7.264-7.129 13.736-16.37 13.736-16.37s-12.416 9.241-16.642 12.277c-15.717 10.958-25.623 10.958-25.623 10.958s13.868-12.146 22.849-19.935c-17.962 13.994-42.528 25.216-42.528 25.216l-3.17 18.22-19.547-1.057s-20.34-40.399-5.019-77.498c15.189-37.23 66.038-39.739 83.472-36.703 14.396 2.509 16.377 5.678 17.566 8.714.528 1.32 1.453-3.565 15.981-2.904 23.642 1.056 48.34 24.16 51.906 52.941 4.887 38.815-15.321 56.243-15.321 56.243Z">
						<animateTransform
						attributeName="transform"
						attributeType="XML"
						type="translate"
						dur="3s"
						values="0,0; 0,-2; 0,0"
						repeatCount="indefinite"/>
					</path>
					<path
						stroke="#000"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.556"
						d="M258.191 32.334s16.51-15.315 48.34-1.188"
					/>
					<path
						stroke="#5A87FE"
						stroke-width="1.556"
						d="M228.738 128.976c0 15.579-12.151 28.253-26.943 28.121-14.925 0-26.944-12.674-26.811-28.253 0-15.579 12.15-28.121 26.943-28.121 14.924 0 26.943 12.674 26.811 28.253Zm77.793.396c0 15.579-12.151 28.121-26.944 27.989-14.924 0-26.943-12.674-26.943-28.253.132-15.579 12.283-28.121 27.076-28.121 14.924.132 26.943 12.806 26.811 28.385Z"
					/>
					<path
						stroke="#5A87FE"
						stroke-width="1.556"
						d="M227.285 137.293c2.906-1.32 7.265-2.904 12.416-2.904 6.075 0 11.094 1.848 14.264 3.432"
					/>
					<path
						fill="#fff"
						d="m288.436 255.983-13.868 23.632-31.302-24.16-24.566 24.16-23.905-23.632 10.83-29.177c6.604 7.921 21 13.466 37.641 13.466 15.189 0 28.397-4.489 35.661-11.354l9.509 27.065Z"
					/>
					<path fill="#59CC57" d="m218.7 279.351.133.132-.133.132v-.264Z" />
					<path
						stroke="#000"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.556"
						d="M278.927 228.918c-7.264 6.865-20.472 11.354-35.66 11.354-16.642 0-31.038-5.545-37.642-13.466m84.132 28.649-15.189 24.16-31.302-24.16-24.566 24.16-23.905-23.632"
					/>
				</svg>

				<p>“Today is a gift that’s why it is called present”</p>
			</div>

			<div class="social-wrapper">
				<a href="#" class=" custom-cursor">
					<span>Facebook</span>
				</a>
				<a href="#" class="custom-cursor">
					<span>Instagram</span>
				</a>
				<a href="#"  class="custom-cursor">
					<span>Github</span>
				</a>
				<a href="#" class="custom-cursor">
					<span>Linkedin</span>
				</a>
			</div>
		</section>
	</div>
</section>

<section class="main-width-center Hero-Section-2-wrapper">
	<div class="width-1500 border-l content-center border-b hero-section-2-container">
		<div class="content-center MaskSplitText__Wrapper hero-section-2">
			<h2>
				<div class="mask__line">
					<div class="mask__word text-xl">Embracing</div>
					<div class="mask__word text-xl">The</div>
					<div class="mask__word text-xl">Wild</div>
					<div class="mask__word text-xl">Side</div>
				</div>
				<div class="mask__line">
					<div class="mask__word text-xl">of</div>
					<div class="mask__word text-xl">coding</div>
					<div class="mask__word text-xl">and</div>
					<div class="mask__word underline text-xl primary-active icon-svg">
						design

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="71"
							height="74"
							viewBox="0 0 71 74"
							fill="none"
						>
							<path
								d="M6.26093 6.43475L41.8093 18.4839C44.5546 19.3423 47.0955 20.7496 49.2769 22.6198C51.4584 24.49 53.2346 26.7838 54.4971 29.3613C55.7595 31.9387 56.4818 34.7456 56.6197 37.6106C56.7577 40.4756 56.3084 43.3386 55.2993 46.0248L64.6907 56.3687L50.4262 69.2382L41.0993 58.9748C38.2211 59.7679 35.207 59.9446 32.2553 59.4932C29.3037 59.0417 26.4813 57.9724 23.9739 56.3556C21.4665 54.7388 19.3309 52.611 17.7075 50.1123C16.0841 47.6136 15.0097 44.8006 14.555 41.8582L6.26093 6.43475ZM6.26093 6.43475L35.3871 38.5282"
								stroke="#9F24FF"
								stroke-width="6"
							/>
							<path
								d="M38.9209 42.9844C38.3679 43.5379 37.7077 43.9734 36.9805 44.2645C36.2533 44.5556 35.4743 44.6962 34.6908 44.6777C33.9074 44.6591 33.136 44.4819 32.4235 44.1567C31.7109 43.8315 31.0722 43.3652 30.5462 42.7861C30.0201 42.2071 29.6178 41.5274 29.3635 40.7884C29.1093 40.0494 29.0086 39.2666 29.0675 38.4875C29.1263 37.7085 29.3436 36.9495 29.706 36.2569C30.0684 35.5642 30.5683 34.9522 31.1755 34.4583C32.3226 33.525 33.7854 33.0664 35.2619 33.1773C36.7384 33.2882 38.1158 33.96 39.1098 35.0542C40.1037 36.1483 40.6383 37.5811 40.6032 39.0569C40.568 40.5326 39.9658 41.9385 38.9209 42.9844Z"
								fill="#9F24FF"
							/>
						</svg>
					</div>
				</div>
				<div class="mask__line">
					<div class="mask__word text-xl">doing</div>
					<div class="mask__word text-xl">what</div>
					<div class="mask__word text-xl">others</div>
					<div class="mask__word text-xl">think</div>
				</div>
				<div class="mask__line">
					<div class="mask__word text-xl">is</div>
					<div class="mask__word text-xl">nuts</div>
					<div class="mask__word text-xl">is</div>
					<div class="mask__word text-xl">my</div>
					<div class="mask__word text-xl">jam!</div>
				</div>
			</h2>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../../scss/components/_hero';
</style>
