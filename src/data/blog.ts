import { estimar, formatGs, preciosDe, preciosFecha, preciosM2, preciosVigencia, type ServicioCalc } from "../lib/pedido";

const total = (servicio: ServicioCalc, material: string, ancho: number, alto: number, apertura = "0") => formatGs(estimar({ servicio, material, apertura, ancho, alto })!.total);
const cielo = preciosDe("cielo");
const mamparas = preciosDe("mamparas");
const buna = formatGs(preciosM2["cielo:durlock"].buna!);
const bunaHabitacion = formatGs(estimar({ servicio: "cielo", material: "durlock", apertura: "", ancho: 4, alto: 3 })!.buna);

export type Nota = {
	slug: string;
	title: string;
	/** Si falta, el H1 es el title. */
	h1?: string;
	/** Fecha ISO de la última revisión de los datos de la nota. */
	actualizado?: string;
	description: string;
	/** Slug del servicio al que lleva la nota. */
	servicio: string;
	sections: {
		titulo: string;
		parrafos: string[];
		tabla?: { titulo: string; columnas: string[]; filas: string[][] };
		/** Lleva montos: la nota le suma el aviso de precios de referencia. */
		precios?: boolean;
	}[];
};

export const notas: Nota[] = [
	{
		slug: "tipos-de-apertura-box-de-bano",
		title: "Tipos de apertura para box de baño: corrediza, batiente y plegable",
		description: "Cómo elegir la apertura de un box de baño según el espacio libre, la comodidad y el uso diario: corrediza, batiente o plegable.",
		servicio: "box-de-bano",
		sections: [
			{
				titulo: "Apertura corrediza",
				parrafos: [
					"La hoja corre sobre el vano y no barre el baño. Entra cuando el inodoro, el lavatorio o la puerta del baño quedan en el camino de una hoja que abre: no necesita espacio libre delante de la ducha.",
				],
			},
			{
				titulo: "Apertura batiente",
				parrafos: [
					"Abre como una puerta. Hace falta espacio libre delante o detrás de la hoja. Si ese espacio está, es la más simple de usar y de limpiar.",
				],
			},
			{
				titulo: "Apertura plegable",
				parrafos: [
					"Las hojas se juntan a un costado y el vano queda casi libre. Lleva más herraje que las otras dos. Sirve en baños muy chicos, para personas mayores o cuando la apertura es atípica.",
				],
			},
			{
				titulo: "Qué mirar antes de decidir",
				parrafos: [
					"El ancho libre del vano, qué hay delante de la ducha y quién la usa. La apertura se define con el espacio, no solo con el gusto.",
					"En una vivienda instalamos templado de 8 mm incoloro con perfil de aluminio fosco. Si nos mandás fotos del baño y el ancho aproximado, te decimos qué apertura entra.",
				],
			},
		],
	},
	{
		slug: "cielo-raso-pvc-vs-yeso",
		title: "Cielo raso PVC vs yeso: diferencias, ventajas y qué conviene evaluar",
		description: "Qué es mejor, cielo raso de yeso o de PVC: diferencias de limpieza, terminación, mantenimiento y uso, con obras de VIPAR en Paraguay.",
		servicio: "cielo-raso",
		sections: [
			{
				titulo: "Qué diferencia a un sistema del otro",
				parrafos: [
					"El PVC es un sistema de placas livianas que se lavan y se montan rápido. El yeso, igual que el Durlock con junta tomada, deja una superficie continua y lisa, lista para pintar.",
					"No hay uno mejor en general. Conviene uno u otro según el ambiente, cómo se limpia y qué terminación querés ver.",
				],
			},
			{
				titulo: "Cuándo conviene el PVC",
				parrafos: [
					"Cuando hay que lavar el cielo o el espacio tiene mucho uso. Lo instalamos en el CARDE de la APF, en Ypané, donde la placa no puede ser delicada.",
					"También cuando el plazo importa: el montaje es rápido.",
				],
			},
			{
				titulo: "Cuándo conviene el yeso o el Durlock",
				parrafos: [
					"Cuando querés una terminación continua, sin juntas a la vista, que se pinta como una pared. En Tigo Central el cielo es de yeso. En las salas del IPS Central usamos Durlock.",
				],
			},
			{
				titulo: "Y si necesitás llegar a las instalaciones",
				parrafos: [
					"Ni PVC ni yeso: el desmontable. Sacás una placa y llegás al cable o al aire acondicionado. Lo usamos en oficinas y en la Cooperativa Medalla Milagrosa de Concepción, junto con las mamparas.",
				],
			},
			{
				titulo: "Qué conviene aclarar antes de consultar",
				parrafos: [
					"El tipo de ambiente, los metros aproximados, si hay que lavarlo, si hay instalaciones arriba y fotos del techo actual. Con eso te recomendamos el sistema y armamos el presupuesto.",
				],
			},
		],
	},
	{
		slug: "vidrio-vs-panel-solido",
		title: "Vidrio o panel sólido: qué tipo de mampara elegir para una oficina",
		description: "Cuándo conviene una mampara de vidrio y cuándo un panel sólido en oficinas, salas y áreas de atención, según privacidad, luz y uso.",
		servicio: "mamparas-divisorias",
		sections: [
			{
				titulo: "Cuándo el vidrio tiene más sentido",
				parrafos: [
					"Cuando la luz natural y la imagen limpia pesan más que la privacidad. El vidrio pasa la luz y se ve del otro lado, salvo que sea esmerilado o polarizado. En la Cooperativa Medalla Milagrosa de Fernando de la Mora las divisiones son de cristal.",
				],
			},
			{
				titulo: "Cuándo un panel sólido puede ser mejor",
				parrafos: [
					"Durlock o un panel ciego tapan la vista. Sirve en una sala de atención o en un puesto donde no querés que se vea adentro. En el IPS Central las salas combinan cielo raso y mamparas.",
				],
			},
			{
				titulo: "Las dos cosas a la vez",
				parrafos: [
					"Se puede dejar vidrio en la parte alta y panel abajo. La luz sigue entrando y la mesa de trabajo queda cubierta.",
				],
			},
			{
				titulo: "Qué información ayuda a decidir",
				parrafos: [
					"El largo y la altura de la división, el uso de cada sala y si tiene que cerrar el sonido o solo la vista. Con fotos o un plano simple ya podemos orientarte.",
				],
			},
		],
	},
	{
		slug: "mamparas-divisorias-oficinas",
		title: "Mamparas divisorias para oficinas: ventajas y aplicaciones según el tipo de espacio",
		description: "Mamparas divisorias para oficinas en Paraguay: cuándo usar cristal templado, Eucatex o Durlock según privacidad, luz y tipo de trabajo.",
		servicio: "mamparas-divisorias",
		sections: [
			{
				titulo: "Dónde se aplican",
				parrafos: [
					"En oficinas corporativas, para puestos, salas, directorios y recepciones. En locales comerciales, para separar atención, depósito y áreas de apoyo. En clínicas y consultorios, donde importan la privacidad y la limpieza. En empresas e industrias, para ordenar áreas operativas según la circulación.",
					"También en obras temporales, con cerramientos desmontables para reorganizar el espacio rápido.",
				],
			},
			{
				titulo: "Privacidad, luz y ruido",
				parrafos: [
					"El cristal templado deja pasar la luz y da una imagen limpia, pero no tapa la vista. El Eucatex es modular, se arma rápido y aísla poco. El tabique de Durlock da privacidad y una terminación continua, y puede aislar más según cómo se arme.",
				],
			},
			{
				titulo: "Señales de que necesitás dividir",
				parrafos: [
					"Las conversaciones cruzan las oficinas. Las paredes ciegas dejan espacios oscuros. No hay una sala cerrada para atender a un cliente o hacer una llamada sensible.",
				],
			},
			{
				titulo: "Cómo pensar la elección",
				parrafos: [
					"Si priorizás luz e imagen, cristal. Si necesitás cambiar la distribución seguido y terminar rápido, Eucatex. Si buscás privacidad y un acabado definitivo, Durlock. Se pueden combinar en la misma oficina.",
					"En una oficina combinamos divisorias con cielo raso desmontable, para llegar a las instalaciones sin romper la terminación.",
				],
			},
			{
				titulo: "Qué conviene preparar para cotizar",
				parrafos: [
					"Largo y altura aproximados de las divisiones, cuántas puertas, fotos o un plano simple y si priorizás privacidad, luz o poder cambiar la distribución. Antes de instalar relevamos las medidas definitivas.",
				],
			},
		],
	},
	{
		slug: "medidas-estandar-box-de-bano",
		title: "Medidas estándar para box de baño y qué revisar antes de instalar",
		description: "Por qué no existe una sola medida estándar de box de baño, qué medir en tu ducha y qué datos mandar para cotizar uno a medida en Paraguay.",
		servicio: "box-de-bano",
		sections: [
			{
				titulo: "Por qué no existe una sola medida estándar",
				parrafos: [
					"Cada ducha tiene su ancho, su alto y sus paredes, y pocas coinciden. Por eso no trabajamos con medidas estándar: el box se fabrica con la medida de tu baño.",
				],
			},
			{
				titulo: "Qué conviene medir",
				parrafos: [
					"El ancho del vano de la ducha, de pared a pared, arriba y abajo: si las dos medidas no coinciden, la pared no está a plomo y hay que saberlo. El alto que querés que tenga el box. Si hay escalón, plato o desnivel en el piso.",
					"Fijate también dónde quedan la grifería, el toallero y la puerta del baño. Eso define la apertura.",
				],
			},
			{
				titulo: "Cómo se arma la cotización",
				parrafos: [
					"Con el ancho, el alto, el material y la apertura armamos el presupuesto. En el armador de pedido de la web la medida de ejemplo es 0,90 × 1,90 m: cambiala por la tuya.",
					"Antes de fabricar tomamos las medidas definitivas en el baño. El precio final se cierra con esa medición.",
				],
			},
			{
				titulo: "Qué mandar por WhatsApp",
				parrafos: [
					"Fotos de la ducha de frente y de costado, el ancho y el alto aproximados, el material que te interesa y la zona de la obra.",
				],
			},
		],
	},
	{
		slug: "box-de-bano-vidrio-vs-acrilico",
		title: "Box de baño de vidrio templado vs acrílico: qué conviene según tu baño",
		description: "Box de baño de cristal templado o de acrílico: diferencias de estética, limpieza, inversión y uso diario para elegir bien en Paraguay.",
		servicio: "box-de-bano",
		sections: [
			{
				titulo: "Qué cambia entre un material y otro",
				parrafos: [
					"El acrílico va en una estructura de aluminio con paneles texturizados. El cristal templado se corta a medida y se monta con perfiles de aluminio. En una vivienda instalamos templado de 8 mm incoloro con perfil fosco.",
					"Entre los dos, el acrílico es la opción más accesible y el cristal templado la de mayor inversión.",
				],
			},
			{
				titulo: "Limpieza y uso diario",
				parrafos: [
					"El cristal templado se limpia fácil, deja pasar la luz y hace que el baño se vea más amplio. El acrílico pide poco mantenimiento y aguanta bien el uso intensivo.",
				],
			},
			{
				titulo: "Cuándo conviene cada uno",
				parrafos: [
					"Acrílico, si querés cerrar la ducha con una inversión más contenida o el baño tiene mucho uso. Cristal templado, si priorizás limpieza e imagen: es el que más se pide para baños principales.",
					"Si el baño es muy chico, el sistema plegable libera el acceso con cualquiera de los dos.",
				],
			},
			{
				titulo: "Qué conviene enviar para comparar bien",
				parrafos: [
					"Fotos del baño, el ancho y el alto aproximados y la apertura que preferís. Con eso te pasamos las dos opciones para que compares.",
				],
			},
		],
	},

	{
		slug: "cuanto-cuesta-box-de-bano-paraguay",
		servicio: "box-de-bano",
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
		servicio: "cielo-raso",
		title: `Precio de cielo raso por m² en Paraguay (${preciosFecha.slice(0, 4)}): PVC, yeso y Durlock`,
		h1: "Cuánto cuesta un cielo raso en Paraguay: precio por m² de PVC, yeso, Durlock y desmontable",
		actualizado: preciosFecha,
		description: `Precio de cielo raso por m² en Paraguay (${preciosVigencia}): yeso desde ${formatGs(preciosM2["cielo:junta-tomada"].m2)}, PVC ${formatGs(preciosM2["cielo:pvc"].m2)}, Durlock ${formatGs(preciosM2["cielo:durlock"].m2)} y desmontable desde ${formatGs(preciosM2["cielo:foil"].m2)}.`,
		sections: [
			{
				titulo: "Precio por metro cuadrado",
				parrafos: [`Estos son los precios por metro cuadrado de cielo raso que maneja VIPAR en ${preciosVigencia}, según el sistema.`],
				tabla: { titulo: `Precio de cielo raso por m² en Paraguay, ${preciosVigencia}`, columnas: ["Sistema", "Precio por m²"], filas: cielo.map((item) => [item.nombre, formatGs(item.m2)]) },
				precios: true,
			},
			{
				titulo: "Un ejemplo con una habitación de 4 × 3 m",
				parrafos: [
					`Son 12 m². En yeso junta tomada da ${total("cielo", "junta-tomada", 4, 3)}, en PVC ${total("cielo", "pvc", 4, 3)} y en Durlock ${total("cielo", "durlock", 4, 3)}. En desmontable, entre ${total("cielo", "foil", 4, 3)} y ${total("cielo", "fibra-mineral", 4, 3)} según la placa.`,
					`La buña es la terminación del borde, donde el cielo se encuentra con la pared. En yeso y Durlock se cobra aparte, ${buna} por metro lineal: en esa habitación son 14 m y suma ${bunaHabitacion}.`,
				],
			},
			{
				titulo: "Qué puede mover el precio final",
				parrafos: [
					"El precio por m² es la base. En la medición se ve la altura, el estado del techo, si hay que ocultar vigas o instalaciones y el acceso a la obra.",
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
		servicio: "mamparas-divisorias",
		title: "Cuánto cuesta instalar mamparas divisorias en Paraguay y qué cambia el presupuesto",
		actualizado: preciosFecha,
		description: `Precio de mamparas divisorias por m² en Paraguay (${preciosVigencia}): Eucatex ciega ${formatGs(preciosM2["mamparas:eucatex-ciega"].m2)} y vidriada ${formatGs(preciosM2["mamparas:eucatex-vidriada"].m2)}, puertas aparte. Qué más cambia el presupuesto.`,
		sections: [
			{
				titulo: "Precio por metro cuadrado",
				parrafos: [`Estos son los precios por metro cuadrado de mamparas divisorias que maneja VIPAR en ${preciosVigencia}, con perfiles de chapa pintada. Las puertas se cobran por unidad. El cristal templado y el Durlock se cotizan con las medidas.`],
				tabla: { titulo: `Precio de mamparas divisorias por m² en Paraguay, ${preciosVigencia}`, columnas: ["Mampara", "Por m²", "Puerta"], filas: mamparas.map((item) => [item.nombre, formatGs(item.m2), formatGs(item.puerta!)]) },
				precios: true,
			},
			{
				titulo: "Un ejemplo: una división de 3 m de largo y 2,40 m de alto",
				parrafos: [
					`Son 7,20 m². En Eucatex ciega con una puerta da ${total("mamparas", "eucatex-ciega", 3, 2.4, "1")}. En Eucatex vidriada con una puerta vidriada, ${total("mamparas", "eucatex-vidriada", 3, 2.4, "1")}.`,
					"Una división de 3 metros con una puerta y una de 12 metros con tres salas no se parecen en nada, aunque las dos se llamen mampara. Por eso el precio final se confirma cuando medimos el espacio.",
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
