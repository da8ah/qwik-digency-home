import { component$ } from "@builder.io/qwik";
import Button from "~/components/ui/button";
import SectionTitle from "~/components/ui/title";

export default component$(() => {
	return (
		<section
			id="newsletter"
			class={
				"py-10 px-1 lg:py-10 lg:px-20 flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-white to-[#816aff] md:bg-gradient-to-r md:from-white md:via-[#9a89f8] md:to-[#816aff] dark:bg-gradient-to-r dark:from-[#1b0973] dark:via-[#170960] dark:to-[#0e0938] text-[--primary-color-light] dark:text-[--primary-color]"
			}
		>
			<div
				class={
					"md:w-[50%] text-center md:text-left flex flex-col justify-center content-center"
				}
			>
				<h3 class={"text-2xl"}>Let's work together</h3>
				<SectionTitle
					class="pt-5 pb-10 text-3xl"
					title={"Explore the"}
					bold={"hidden"}
					opt={"ideas and subscribe!"}
				/>
			</div>
			<div class={"w-full md:w-[50%]"}>
				<div
					class={
						"rounded-lg px-3 py-1 flex flex-col md:flex-row justify-center items-center bg-none md:bg-white"
					}
				>
					<input
						class={
							"w-[70%] rounded-md flex flex-grow p-2 my-10 md:m-0 md:px-2 md:py-1 bg-white text-black md:bg-none focus:outline-none"
						}
						type="email"
						placeholder="Email"
					/>
					<Button class="rounded-md px-2" size="lg">
						Subscribe Now
					</Button>
				</div>
			</div>
		</section>
	);
});
