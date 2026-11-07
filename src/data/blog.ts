export type Nota = {
	slug: string;
	title: string;
	description: string;
	sections: { titulo: string; parrafos: string[] }[];
};

export const notas: Nota[] = [
	{
		slug: "tipos-de-apertura-box-de-bano",
		title: "Corrediza, batiente o plegable",
		description: "Tres formas de abrir un box de baño y cuándo entra cada una.",
		sections: [
			{
				titulo: "Corrediza",
				parrafos: [
					"La hoja corre sobre el vano y no barre el baño. Entra cuando el inodoro, el lavatorio o la puerta quedan en el camino de una hoja que abre.",
				],
			},
			{
				titulo: "Batiente",
				parrafos: [
					"Abre como una puerta. Hace falta el espacio libre delante o detrás de la hoja. Si ese espacio está, es la más simple de usar.",
				],
			},
			{
				titulo: "Plegable",
				parrafos: [
					"Las hojas se juntan a un costado y el vano queda casi libre. Lleva más herraje que las otras dos. Sirve en baños chicos, donde la hoja no tiene dónde abrir ni por dónde correr.",
					"En una vivienda instalamos templado de 8 mm incoloro con perfil de aluminio fosco. La apertura se define con el ancho libre, no con el gusto solo.",
				],
			},
		],
	},
	{
		slug: "cielo-raso-pvc-vs-yeso",
		title: "PVC, yeso o desmontable",
		description: "Qué cielo raso usamos cuando hay que lavar, pintar o llegar a las instalaciones.",
		sections: [
			{
				titulo: "PVC",
				parrafos: [
					"Se lava. Lo instalamos en el CARDE de la APF, en Ypané, un espacio de alto uso donde la placa no puede ser delicada.",
				],
			},
			{
				titulo: "Yeso o Durlock",
				parrafos: [
					"Queda una superficie continua, para pintar. En Tigo Central el cielo es de yeso. En las salas del IPS Central, Durlock.",
				],
			},
			{
				titulo: "Desmontable",
				parrafos: [
					"Sacás una placa y llegás al cable o al aire. Lo usamos en oficinas y en la Cooperativa Medalla Milagrosa de Concepción, junto con las mamparas.",
					"En Virgen del Huerto el cielo lleva paneles LED. El artefacto forma parte de ese pedido, no de todos.",
				],
			},
		],
	},
	{
		slug: "vidrio-vs-panel-solido",
		title: "Vidrio o panel en una mampara",
		description: "Cuándo la división deja pasar la luz y cuándo tiene que tapar la vista.",
		sections: [
			{
				titulo: "Vidrio",
				parrafos: [
					"Pasa la luz y se ve del otro lado, salvo que sea esmerilado o polarizado. En la Cooperativa Medalla Milagrosa de Fernando de la Mora las divisiones son de cristal.",
				],
			},
			{
				titulo: "Panel",
				parrafos: [
					"Durlock o un panel ciego tapan la vista. Sirve en una sala de atención o en un puesto donde no querés que se vea adentro. En el IPS Central las salas combinan cielo raso y mamparas.",
				],
			},
			{
				titulo: "Las dos",
				parrafos: [
					"Se puede dejar vidrio en la parte alta y panel abajo. La luz sigue entrando y la mesa de trabajo queda cubierta. Para cotizar hacen falta el largo, la altura y si la sala tiene que cerrar el sonido o solo la vista.",
				],
			},
		],
	},
];

export function notaPorSlug(slug: string) {
	return notas.find((nota) => nota.slug === slug);
}
