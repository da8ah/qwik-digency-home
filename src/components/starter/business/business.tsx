import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<section>
			<h3>Our Services</h3>
			<h1>
				Save time managing your business with
				<br />
				<span class="highlight">our best services</span>
			</h1>
			<ul>
				<li>
					<div>
						{/* <img src="" alt="" /> */}
						<h2>App Development</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</li>
				<li>
					<div>
						{/* <img src="" alt="" /> */}
						<h2>Web Design</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</li>
				<li>
					<div>
						{/* <img src="" alt="" /> */}
						<h2>Graphics Design</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</li>
				<li>
					<div>
						{/* <img src="" alt="" /> */}
						<h2>Digital Marketing</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
});
