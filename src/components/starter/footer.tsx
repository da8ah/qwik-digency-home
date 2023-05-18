import { component$ } from "@builder.io/qwik";

export default component$(() => {
	const classUl =
		"text-xl text-[--primary-color-light] dark:text-[--primary-color]";
	const ulArr = [
		{
			title: <h2 class={classUl}>Solutions</h2>,
			pages: ["Marketing", "Analytics", "Commerce"],
		},
		{
			title: <h2 class={classUl}>Support</h2>,
			pages: ["Pricing", "Documentation", "Guides"],
		},
		{
			title: <h2 class={classUl}>Company</h2>,
			pages: ["About", "Jobs", "Blog"],
		},
	];
	return (
		<footer>
			<div
				class={
					"py-10 px-1 lg:p-20 flex flex-col md:flex-row justify-center text-center md:text-left bg-[--body-bg-light] dark:bg-[--body-bg] text-[--small-text-color-light] dark:text-[--small-text-color]"
				}
			>
				<div class={"md:w-[50%] flex flex-col justify-center content-center"}>
					<div class={"pb-5"}>
						<h2
							class={
								"text-3xl text-[--primary-color-light] dark:text-[--primary-color]"
							}
						>
							Digency
						</h2>
						<h5>Grow with us</h5>
					</div>
					<p class={"leading-loose"}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						viverra ligula cursus felis ultrices imperdiet. Mauris dapibus,
						purus sed tincidunt placerat, lectus purus sollicitudin ante, nec
						pulvinar nunc nibh in leo.
					</p>
				</div>
				<div class={"md:w-[50%] py-10 md:p-0 flex text-center"}>
					<ul
						class={
							"w-full h-[20vh] md:h-full flex flex-row flex-grow justify-around"
						}
					>
						{ulArr.map((element, index) => {
							return (
								<li key={index} class={"flex flex-col flex-grow"}>
									<ul class={"flex flex-col flex-grow justify-between text-md"}>
										<li>{element.title}</li>
										{element.pages.map((li, index) => {
											return <li key={index}>{li}</li>;
										})}
									</ul>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</footer>
	);
});
