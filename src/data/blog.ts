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
	{
		slug: "cuanto-cuesta-box-de-bano-paraguay",
		title: "Cuánto cuesta un box de baño en Paraguay y cuál conviene según tu espacio",
		description: "Qué define el precio de un box de baño en Paraguay: material, apertura, medidas, herrajes e instalación. Con tus medidas, el presupuesto sale por WhatsApp.",
		sections: [
			{
				titulo: "Por qué no hay un precio único",
				parrafos: [
					"Dos boxes de la misma medida pueden costar muy distinto. Cambia el material, el tipo de apertura, los herrajes y la instalación. Por eso en esta nota no hay un monto: un número suelto te llevaría a pensar en el piso y el presupuesto real llegaría más arriba.",
					"Lo que sí podemos decirte es qué mueve el precio y cómo elegir antes de pedirlo.",
				],
			},
			{
				titulo: "Material",
				parrafos: [
					"Entre las tres opciones que hacemos, el acrílico es la más económica, el sistema plegable queda en el medio y el cristal templado es la de mayor inversión.",
					"El acrílico es de estructura de aluminio con paneles texturizados y pide poco mantenimiento. El cristal templado se limpia mejor, deja pasar la luz y es el que más se pide en baños principales. En una vivienda instalamos templado de 8 mm incoloro con perfil de aluminio fosco.",
				],
			},
			{
				titulo: "Apertura",
				parrafos: [
					"La corrediza ocupa poco espacio. La batiente necesita lugar libre delante o detrás de la hoja. La plegable libera casi todo el vano y lleva más herraje, y eso se nota en el presupuesto.",
				],
			},
			{
				titulo: "Medidas e instalación",
				parrafos: [
					"Cuanto más grande el box, más material. La instalación incluye el montaje y el sellado con silicona antihongos. Si el baño tiene el revestimiento sin terminar, la grifería sin colocar o el plato de ducha pendiente, eso no forma parte del box: conviene tenerlo resuelto antes de medir.",
				],
			},
			{
				titulo: "Cuál conviene según tu espacio",
				parrafos: [
					"Si el baño es muy chico o hay personas mayores, el plegable. Si querés cerrar la ducha con un gasto más contenido, el acrílico. Si priorizás limpieza e imagen, el cristal templado.",
				],
			},
			{
				titulo: "Qué mandar para recibir el presupuesto",
				parrafos: [
					"Ancho y alto aproximados, fotos del baño, la apertura que preferís y la zona de la obra. Lo podés armar en la página del box de baño y el mensaje sale por WhatsApp con esos datos. El precio final se cierra cuando medimos en el baño.",
				],
			},
		],
	},
	{
		slug: "cuanto-cuesta-cielo-raso-paraguay",
		title: "Cuánto cuesta un cielo raso en Paraguay y qué influye en el presupuesto",
		description: "Qué define el precio de un cielo raso en Paraguay: sistema, superficie, estructura, preparación del techo y artefactos. Mandá fotos y medidas y te pasamos el presupuesto.",
		sections: [
			{
				titulo: "Por qué no hay un precio por metro",
				parrafos: [
					"El precio de un cielo raso depende del sistema, la superficie, la estructura que lleva, el estado del techo y la complejidad de la obra. Un monto por metro cuadrado sin esos datos no sirve para presupuestar, y por eso no publicamos uno.",
				],
			},
			{
				titulo: "Sistema",
				parrafos: [
					"Hacemos PVC, yeso, Durlock con junta tomada, desmontable y Eucatex o modular. Cada uno tiene una estructura y un montaje distintos.",
					"El PVC es lavable y se monta rápido: lo instalamos en el CARDE de la APF, en Ypané. El Durlock deja una superficie continua para pintar: en el IPS Central. El desmontable permite llegar a las instalaciones sacando una placa.",
				],
			},
			{
				titulo: "Superficie y estado del techo",
				parrafos: [
					"Más metros llevan más estructura y más placas. Si el techo original está desparejo o hay que ocultar vigas e instalaciones, la preparación suma trabajo.",
				],
			},
			{
				titulo: "Lo que no está incluido",
				parrafos: [
					"Los artefactos de iluminación y el aire acondicionado entran solo si están en el pedido. En Virgen del Huerto, por ejemplo, el cielo lleva paneles LED y eso forma parte de ese trabajo, no de todos.",
				],
			},
			{
				titulo: "Qué sistema conviene",
				parrafos: [
					"Si necesitás llegar a las instalaciones seguido, el desmontable. Si querés una terminación continua, Durlock o yeso. Si hay que lavarlo, PVC. Si querés reponer por módulos, modular.",
				],
			},
			{
				titulo: "Qué mandar para recibir el presupuesto",
				parrafos: [
					"Fotos del espacio, medidas aproximadas, la ubicación de la obra, el tipo de ambiente y el sistema que buscás, si ya lo sabés. El plazo se confirma al cotizar.",
				],
			},
		],
	},
	{
		slug: "costo-mamparas-divisorias",
		title: "Cuánto cuesta instalar mamparas divisorias en Paraguay y qué cambia el presupuesto",
		description: "Qué define el precio de una mampara divisoria en Paraguay: material, altura, puertas, privacidad y condiciones del espacio. Mandá medidas y fotos y te pasamos el presupuesto.",
		sections: [
			{
				titulo: "Por qué no publicamos un monto",
				parrafos: [
					"Una división de 3 metros con una puerta y una de 12 metros con tres salas no se parecen en nada, aunque las dos se llamen mampara. El precio sale del largo, la altura, el material, las puertas y el espacio donde se instala.",
				],
			},
			{
				titulo: "Material",
				parrafos: [
					"Hacemos mamparas de cristal templado, de Eucatex y tabiques de Durlock. El cristal deja pasar la luz y da una imagen limpia. El Eucatex es modular y se arma rápido. El Durlock da privacidad y una terminación continua.",
				],
			},
			{
				titulo: "Altura, largo y puertas",
				parrafos: [
					"Cada metro de división suma material y perfilería. Una puerta agrega hoja, herrajes y cerradura. Una mampara de piso a techo se resuelve distinto que una que llega a media altura.",
				],
			},
			{
				titulo: "Privacidad y ruido",
				parrafos: [
					"Si necesitás que la sala cierre el sonido y no solo la vista, el sistema cambia. El vidrio no tapa la vista y el Eucatex aísla poco. El Durlock puede aislar más, según cómo se arme. Se puede combinar: vidrio arriba y panel abajo.",
				],
			},
			{
				titulo: "Condiciones del espacio",
				parrafos: [
					"El estado del piso y del techo, el acceso para entrar los materiales y los puestos que hay que mover cambian el montaje. El aire acondicionado y la electricidad de los puestos no forman parte de la mampara.",
				],
			},
			{
				titulo: "Qué mandar para recibir el presupuesto",
				parrafos: [
					"Largo y altura aproximados, fotos o plano, el uso del ambiente y si priorizás privacidad, luz o poder cambiar la distribución. Antes de instalar relevamos las medidas definitivas.",
				],
			},
		],
	},
];

export function notaPorSlug(slug: string) {
	return notas.find((nota) => nota.slug === slug);
}
