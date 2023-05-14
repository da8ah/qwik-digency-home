import { component$ } from "@builder.io/qwik";

export default component$(() => {
	const ulArr = [
		{
			title: (
				<h2
					class={
						"text-xl text-[--primary-color-light] dark:text-[--primary-color]"
					}
				>
					Solutions
				</h2>
			),
			pages: ["Marketing", "Analytics"],
		},
		{
			title: (
				<h2
					class={
						"text-xl text-[--primary-color-light] dark:text-[--primary-color]"
					}
				>
					Support
				</h2>
			),
			pages: ["Pricing", "Documentation"],
		},
	];
	return (
		<footer>
			<div
				class={
					"py-10 px-1 lg:py-10 lg:px-20 flex flex-row justify-center items-center bg-[--body-bg-light] dark:bg-[--body-bg] text-[--small-text-color-light] dark:text-[--small-text-color]"
				}
			>
				<div
					class={
						"w-[50%] text-left flex flex-col justify-center content-center"
					}
				>
					<div>
						<h2
							class={
								"text-3xl text-[--primary-color-light] dark:text-[--primary-color]"
							}
						>
							Digency
						</h2>
						<h5>Grow with us</h5>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						viverra ligula cursus felis ultrices imperdiet. Mauris dapibus,
						purus sed tincidunt placerat, lectus purus sollicitudin ante, nec
						pulvinar nunc nibh in leo. Sed ac eleifend nibh. Vestibulum vitae
						elementum massa. Maecenas consequat lorem in dolor mattis, ut mattis
						libero dictum.
					</p>
				</div>
				<div class={"w-[50%]"}>
					<ul class={"w-full flex flex-row justify-between items-center"}>
						{ulArr.map((element, index) => {
							return (
								<ul
									key={index}
									class={"flex flex-col justify-around items-center text-md"}
								>
									<li>{element.title}</li>
									{element.pages.map((li, index) => {
										return <li key={index}>{li}</li>;
									})}
								</ul>
							);
						})}
					</ul>
				</div>
			</div>
			<div>
				<span>Made with ♡ by Tiber</span>
				<span>{new Date().getFullYear()}</span>
			</div>
		</footer>
	);
});
