import { component$ } from "@builder.io/qwik";

type InfoboxProps = {
	imgURL: string;
	imgAlt: string;
	title: string;
	description: string;
};
export default component$<InfoboxProps>((props) => {
	const { imgURL, imgAlt, title, description } = props;
	return (
		<li>
			{imgURL + imgAlt}
			{/* <img src={imgURL} alt={imgAlt} /> */}
			<div>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</li>
	);
});
