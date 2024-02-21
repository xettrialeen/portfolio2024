<script>
	import About from "$lib/component/layout/About.svelte";
	import ContactHome from "$lib/component/layout/ContactHome.svelte";
import Header from "$lib/component/layout/Header.svelte";
	import HeroSection from "$lib/component/layout/HeroSection.svelte";
	import Profession from "$lib/component/layout/Profession.svelte";
	import ShowcaseSection from "$lib/component/layout/ShowcaseSection.svelte";
	import WorkSection from "$lib/component/layout/WorkSection.svelte";

</script>

<Header />
<HeroSection />
<WorkSection />
<ShowcaseSection />
<About />
<Profession />
<ContactHome />

<style lang="scss">
    @import '../scss/main.scss'
</style>