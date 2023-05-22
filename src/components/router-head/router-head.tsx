import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { subpath } from "~/root";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
	const head = useDocumentHead();
	const loc = useLocation();

	return (
		<>
			<title>{head.title}</title>

			<link rel="canonical" href={loc.url.href} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" type="image/svg+xml" href={`${subpath}/favicon.svg`} />
			<link rel="stylesheet" href={`${subpath}/build/q-1c3cd476.css`} />
			<script
				dangerouslySetInnerHTML={`if(localStorage.theme==="dark"){document.documentElement.classList.add("dark");}else if(typeof localStorage.theme==="undefined"){if(window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.classList.add("dark");}}`}
			/>

			{head.meta.map((m) => (
				<meta key={m.key} {...m} />
			))}
			{/* HEAD LINKS */}
			{/* {head.links.map((l) => (
				<link key={l.key} {...l} />
			))} */}

			{head.styles.map((s) => (
				<style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
			))}
		</>
	);
});
