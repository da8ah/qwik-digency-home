import { component$ } from "@builder.io/qwik";
import SectionTitle from "~/components/ui/title";
import { Slider } from "~/components/ui/slider";

export default component$(() => {
	return (
		<section
			id="testimonials"
			class={
				"w-full h-full py-10 px-1 lg:p-20 flex flex-col justify-center bg-[--body-bg-light] dark:bg-[--body-bg] text-[--primary-color-light] dark:text-[--primary-color]"
			}
		>
			<div class={"w-full text-center"}>
				<h3 class={"text-2xl"}>Testimonials</h3>
				<SectionTitle
					class="pt-5 pb-10 text-3xl"
					title={"Trusted by more than"}
					bold={"5,000 customers"}
				/>
			</div>
			<Slider />
		</section>
	);
});
