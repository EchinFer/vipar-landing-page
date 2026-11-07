import { writeFileSync, mkdirSync } from "node:fs";
import { redirects } from "../redirects.mjs";

const lines = Object.entries(redirects).map(([from, to]) => {
	const origen = from.endsWith("/") ? from : `${from}/`;
	const destino = to.endsWith("/") ? to : `${to}/`;
	return `${origen} ${destino} 301`;
});
writeFileSync("public/_redirects", `${lines.join("\n")}\n`);

const vercel = {
	trailingSlash: true,
	redirects: Object.entries(redirects).flatMap(([from, to]) => {
		const destino = to.endsWith("/") ? to : `${to}/`;
		const limpio = from.replace(/\/$/, "");
		return [
			{ source: limpio, destination: destino, permanent: true },
			{ source: `${limpio}/`, destination: destino, permanent: true },
		];
	}),
};
writeFileSync("vercel.json", `${JSON.stringify(vercel, null, 2)}\n`);

mkdirSync("deploy", { recursive: true });
const nginx = Object.entries(redirects)
	.map(([from, to]) => {
		const origen = from.replace(/\/$/, "");
		const destino = to.endsWith("/") ? to : `${to}/`;
		return `rewrite ^${origen}/?$ ${destino} permanent;`;
	})
	.join("\n");
writeFileSync("deploy/nginx-vipar.conf", `${nginx}\n`);
console.log(`redirects: ${Object.keys(redirects).length}`);
