import { component$ } from "@builder.io/qwik";

type BusinessCardProps = {
	imgURL: string;
	imgAlt: string;
	title: string;
	description: string;
};
export const BusinessCard = component$<BusinessCardProps>((props) => {
	const { imgURL, imgAlt, title, description } = props;
	return (
		<li>
			<div>
				{imgURL + imgAlt}
				{/* <img src={imgURL} alt={imgAlt} /> */}
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</li>
	);
});

type TeamCardProps = {
	imgURL: string;
	imgAlt: string;
	title: string;
	description: string;
};
export const TeamCard = component$<TeamCardProps>((props) => {
	const { imgURL, imgAlt, title, description } = props;
	return (
		<li>
			<div>
				{imgURL + imgAlt}
				{/* <img src={imgURL} alt={imgAlt} /> */}
				<h3>{title}</h3>
				<p>{description}</p>
				<div>
					<img src="" alt="linkedin icon" />
					<img src="" alt="twitter icon" />
				</div>
			</div>
		</li>
	);
});

type BlogCardProps = {
	imgURL: string;
	imgAlt: string;
	title: string;
	description: string;
};
export const BlogCard = component$<BlogCardProps>((props) => {
	const { imgURL, imgAlt, title, description } = props;
	return (
		<li>
			<div>
				<h3>{title}</h3>
				{imgURL + imgAlt}
				{/* <img src={imgURL} alt={imgAlt} /> */}
				<p>{description}</p>
				<div>
					<img src="" alt="go to icon" />
				</div>
			</div>
		</li>
	);
});
