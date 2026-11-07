export type Bloque = {
	titulo: string;
	parrafos?: string[];
	items?: { titulo: string; texto: string }[];
};

export type Servicio = {
	slug: string;
	nombre: string;
	/** Title SEO sin el sufijo del sitio. Recupera las frases del sitio anterior. */
	title: string;
	h1: string;
	description: string;
	intro: string;
	resumen: string;
	foto: string;
	incluye: string[];
	noIncluye: string[];
	hechos: string[];
	bloques: Bloque[];
	faq: { p: string; r: string }[];
	calculadora: boolean;
};

/** Pasos que VIPAR ya describía en el sitio anterior para pedir un trabajo. */
export const pasos = [
	{ titulo: "Fotos y medidas", texto: "Mandás por WhatsApp fotos del lugar, medidas aproximadas y, si lo tenés, el tipo de apertura o sistema que te gusta." },
	{ titulo: "Revisión técnica", texto: "Tomamos las medidas en la obra y adaptamos el sistema al espacio disponible." },
	{ titulo: "Presupuesto", texto: "Recibís una propuesta con el material recomendado, el sistema y lo que incluye el trabajo." },
	{ titulo: "Preparación", texto: "Cortamos y armamos los materiales con las medidas relevadas." },
	{ titulo: "Instalación", texto: "Montamos el sistema en el lugar y lo dejamos terminado." },
];

export const servicios: Servicio[] = [
	{
		slug: "vidrio-templado",
		nombre: "Vidrio templado",
		title: "Vidrio templado y Blindex en Paraguay | A medida",
		h1: "Vidrio templado y Blindex en Paraguay",
		description: "Provisión e instalación de vidrio templado y Blindex en Paraguay. Puertas, mamparas, box de baño, barandas y fachadas a medida. Mirá obras reales.",
		intro: "Proveemos el vidrio y nos encargamos de la instalación en tu vivienda, oficina o comercio. Hacemos puertas, mamparas, box de baño, barandas, fachadas y cerramientos de quincho, siempre a medida.",
		resumen: "Puertas, mamparas, boxes, barandas y fachadas.",
		foto: "local-comercial-capiata",
		incluye: ["Vidrio cortado a la medida de la obra", "Perfiles y herrajes del sistema", "Instalación"],
		noIncluye: ["Albañilería, plomería y electricidad"],
		hechos: [
			"En Capiatá la fachada es templado de 10 mm incoloro.",
			"El box de una vivienda es templado de 8 mm, con perfil fosco.",
			"Blindex es una marca. Si la obra la pide, queda escrita en el presupuesto.",
		],
		bloques: [
			{
				titulo: "Vidrio para cada espacio",
				items: [
					{ titulo: "Puertas y accesos", texto: "Para frentes comerciales y accesos vidriados, como en la Sucursal Tigo de Mariano Roque Alonso." },
					{ titulo: "Mamparas y divisiones", texto: "Separan ambientes sin perder luz. En una oficina las combinamos con cielo raso desmontable." },
					{ titulo: "Box de baño", texto: "A medida, con la apertura que entra en tu baño." },
					{ titulo: "Barandas", texto: "En el Edificio Fortaleza Milano, de Asunción, hicimos barandas de acero inoxidable con vidrio templado en la escalera y la terraza." },
					{ titulo: "Fachadas", texto: "Vidrio y aluminio para frentes comerciales y edificios, como en el natatorio del Club Internacional de Tenis." },
					{ titulo: "Quinchos y terrazas", texto: "Cerramientos de vidrio para usar el espacio todo el año, como en el quincho del Edificio Brasília." },
				],
			},
			{
				titulo: "Vidrio templado, cristal templado y Blindex",
				parrafos: [
					"Vidrio templado y cristal templado son el mismo tipo de vidrio. Blindex es una marca con la que también trabajamos.",
					"Si tu obra pide Blindex, escribilo en la consulta. La marca y el espesor quedan detallados en el presupuesto.",
				],
			},
			{
				titulo: "Qué cambia el precio del vidrio templado",
				items: [
					{ titulo: "Medidas y uso", texto: "Ancho, alto y lugar de instalación. Una puerta, una mampara y una baranda necesitan soluciones distintas." },
					{ titulo: "Vidrio y accesorios", texto: "Espesor, marca, apertura, perfiles y herrajes." },
					{ titulo: "Instalación", texto: "Ubicación de la obra, acceso y preparación del lugar. El presupuesto detalla qué trabajos incluye." },
				],
			},
		],
		faq: [
			{ p: "¿VIPAR trabaja con Blindex?", r: "Sí. Proveemos e instalamos vidrio templado y Blindex. Si necesitás esa marca, pedila al consultar para que quede incluida en el presupuesto." },
			{ p: "¿Vidrio templado y Blindex son lo mismo?", r: "El vidrio templado es el tipo de vidrio y Blindex es una marca. Podemos cotizar Blindex si tu proyecto lo requiere." },
			{ p: "¿Qué espesor de vidrio necesito?", r: "Se define según dónde va el vidrio y qué medidas tiene. En nuestras obras hay templado de 8 mm en boxes y de 10 mm en una fachada. Una puerta, un box y una baranda tienen requisitos distintos, y lo revisamos antes de cotizar." },
			{ p: "¿Cuánto cuesta el vidrio templado en Paraguay?", r: "No publicamos un monto suelto porque cambia con las medidas, el espesor, los herrajes y la instalación. Mandanos fotos del lugar y medidas aproximadas por WhatsApp y te pasamos el presupuesto." },
			{ p: "¿Puedo pedir un presupuesto sin plano?", r: "Sí. Podés empezar con fotos y medidas aproximadas. Confirmamos las medidas definitivas antes de instalar." },
		],
		calculadora: false,
	},
	{
		slug: "carpinteria-de-aluminio",
		nombre: "Carpintería de aluminio",
		title: "Carpintería de aluminio en Paraguay | Puertas, ventanas y cerramientos",
		h1: "Carpintería de aluminio para puertas, ventanas y cerramientos",
		description: "Carpintería de aluminio en Paraguay: puertas batientes y corredizas, ventanas y cerramientos a medida, medidos e instalados en la obra.",
		intro: "Fabricamos e instalamos puertas, ventanas y cerramientos de aluminio. El perfil, el vidrio y el tipo de apertura se definen según tu obra, y cada abertura se mide en el lugar.",
		resumen: "Puertas, ventanas y cerramientos a medida.",
		foto: "vivienda-trotte",
		incluye: ["Perfiles de aluminio", "Vidrio del sistema elegido", "Instalación"],
		noIncluye: ["Albañilería para corregir el vano"],
		hechos: [
			"En la vivienda Trotte el aluminio es color verde, con ventanas proyectantes.",
			"En Recoleta las aberturas son corredizas.",
			"En Longvillage las ventanas corredizas recorren varias plantas.",
		],
		bloques: [
			{
				titulo: "Sistemas de apertura",
				items: [
					{ titulo: "Puertas batientes de aluminio", texto: "Abren como una puerta común. Van en accesos principales e interiores donde hay espacio libre para que la hoja gire, como entradas de viviendas, comercios y sectores de mucho paso." },
					{ titulo: "Puertas corredizas de aluminio", texto: "Las hojas se deslizan sobre rieles y aprovechan mejor el espacio. Sirven para salidas a galerías y patios, balcones de departamentos y divisiones de ambientes amplios." },
				],
			},
			{
				titulo: "Qué se define en cada abertura",
				items: [
					{ titulo: "Perfilería", texto: "El aluminio se elige según el proyecto y el uso." },
					{ titulo: "Vidriado", texto: "El vidrio se define según lo que pida la obra." },
					{ titulo: "Cierre", texto: "Los herrajes y las cerraduras dependen del sistema y de cómo se usa el espacio." },
				],
			},
			{
				titulo: "Aluminio en el clima de Paraguay",
				parrafos: [
					"Una abertura tiene que cerrar bien, abrir suave y no pedir mantenimiento complicado. Por eso medimos el vano real y elegimos el sistema según la ventilación, la entrada de luz y la exposición al sol y a la lluvia de cada ambiente.",
				],
			},
		],
		faq: [
			{ p: "¿Trabajan con medidas estándar?", r: "No. Cada abertura se define según el vano real y lo que necesita el ambiente." },
			{ p: "¿Qué incluye el trabajo?", r: "Perfiles de aluminio, el vidrio del sistema elegido y la instalación. Si el vano necesita corregirse con albañilería, eso no está incluido." },
			{ p: "¿Qué datos conviene enviar para cotizar?", r: "Fotos del lugar, medidas aproximadas, la zona de la obra y si buscás puerta o ventana, batiente o corrediza." },
		],
		calculadora: false,
	},
	{
		slug: "ventanas",
		nombre: "Ventanas",
		title: "Ventanas de aluminio en Paraguay | Corredizas, basculantes y cristal templado",
		h1: "Ventanas de aluminio y cristal templado para viviendas, comercios y obras",
		description: "Ventanas de aluminio y cristal templado en Paraguay: corredizas, basculantes y paños fijos a medida. Armá las medidas y pedí el presupuesto por WhatsApp.",
		intro: "Hacemos ventanas corredizas, basculantes y paños fijos, de aluminio o cristal templado, para viviendas, comercios y obras. Elegís el sistema, ponés las medidas y el pedido sale por WhatsApp con esos datos.",
		resumen: "Corredizas, basculantes y paños fijos.",
		foto: "recoleta-asuncion",
		incluye: ["Marco de aluminio", "Vidrio", "Instalación en el vano existente"],
		noIncluye: ["Revoque o modificación del vano"],
		hechos: [
			"En Presidente Franco se instalaron ventanas de aluminio de gran formato.",
			"En Recoleta, ventanas y puertas corredizas.",
			"En la vivienda Trotte, ventanas proyectantes.",
		],
		bloques: [
			{
				titulo: "Corrediza, basculante o paño fijo",
				items: [
					{ titulo: "Ventana basculante", texto: "Se abre por arriba o en forma parcial y ventila de manera controlada. Va bien en baños, cocinas y áreas de servicio." },
					{ titulo: "Ventana corrediza", texto: "Las hojas se deslizan, aprovechan mejor el espacio interior y permiten paños más amplios. Se usa en dormitorios, salas de estar y balcones." },
					{ titulo: "Paño fijo o cristal templado", texto: "Es la opción de lectura más limpia para frentes comerciales, oficinas y lugares donde la transparencia es parte del proyecto." },
				],
			},
			{
				titulo: "Cómo elegir",
				parrafos: [
					"Una ventana no es solo elegir un perfil. Hay que mirar cuánta ventilación necesita el ambiente, cuánta luz entra, cómo da al clima y cómo se usa.",
					"Si el ambiente es cerrado o húmedo, la basculante resuelve la ventilación y la privacidad. Si querés ganar superficie vidriada, la corrediza. Si lo que importa es la vista y el tipo de vidrio, el paño fijo.",
				],
			},
			{
				titulo: "Medidas",
				parrafos: [
					"No trabajamos con medidas estándar. Cada ventana se define según el vano real. Las medidas de la calculadora son aproximadas, y las definitivas las tomamos en la obra antes de fabricar.",
				],
			},
		],
		faq: [
			{ p: "¿Trabajan con medidas estándar?", r: "No. Cada ventana se define según el vano real y las necesidades del ambiente." },
			{ p: "¿Incluyen la instalación en el presupuesto?", r: "Sí, la instalación en el vano existente. Si hay que revocar o modificar el vano, eso no está incluido." },
			{ p: "¿Qué datos conviene enviar para cotizar?", r: "Fotos del lugar, medidas aproximadas, la zona de la obra y el tipo de ventana que tenés en mente." },
			{ p: "¿Cuánto cuesta una ventana de aluminio?", r: "No publicamos un monto suelto porque cambia con el sistema, la medida y la instalación. Armá tu pedido acá abajo y te pasamos el presupuesto por WhatsApp." },
		],
		calculadora: true,
	},
	{
		slug: "puertas",
		nombre: "Puertas",
		title: "Puertas de aluminio en Paraguay | Corredizas, batientes y plegables",
		h1: "Puertas de aluminio y cristal templado para viviendas, comercios, oficinas y obras en Paraguay",
		description: "Puertas de aluminio y cristal templado en Paraguay: batientes, corredizas y plegables a medida para viviendas, locales y oficinas.",
		intro: "Hacemos puertas a medida en perfilería de aluminio y cristal templado. Se definen según el vano, la forma de apertura y el uso que va a tener el acceso.",
		resumen: "Batientes, corredizas y de cristal.",
		foto: "galeria-senador-long",
		incluye: ["Hoja, marco y herrajes", "Instalación"],
		noIncluye: ["Cerradura electrónica, salvo que se pida en el pedido"],
		hechos: [
			"En la Galería Senador Long hay puertas batientes de cristal.",
			"En la vivienda LC, una puerta de aluminio fosco.",
			"En el laboratorio del IPS, puertas de cristal esmerilado.",
		],
		bloques: [
			{
				titulo: "Tipos de puerta",
				items: [
					{ titulo: "Puerta batiente", texto: "Apertura frontal, en una o dos hojas. Sirve en viviendas, oficinas y locales comerciales." },
					{ titulo: "Puerta corrediza", texto: "Las hojas se deslizan y no necesitan espacio para abrir. Se usa en locales, balcones, terrazas e ingresos secundarios." },
					{ titulo: "Puerta panorámica o plegable", texto: "Las hojas se pliegan y liberan buena parte del vano. Va en frentes comerciales, terrazas, quinchos y showrooms." },
				],
			},
			{
				titulo: "Cómo elegir",
				parrafos: [
					"Una puerta organiza la circulación entre ambientes. Antes de elegir miramos el tipo de apertura, cuánta gente pasa, la luz, la ventilación y el acabado que querés para el acceso.",
					"Si tenés espacio para que la hoja gire, la batiente es la más simple. Si no lo tenés, la corrediza. Si querés abrir casi todo el frente, la plegable.",
				],
			},
		],
		faq: [
			{ p: "¿Trabajan con medidas estándar?", r: "No. Cada puerta se define según el vano real y las necesidades del ambiente." },
			{ p: "¿Incluyen la instalación en el presupuesto?", r: "Sí. El presupuesto incluye hoja, marco, herrajes e instalación. La cerradura electrónica entra solo si la pedís." },
			{ p: "¿Qué datos conviene enviar para cotizar?", r: "Fotos del lugar, medidas aproximadas, la zona de la obra y el tipo de puerta que tenés en mente." },
		],
		calculadora: false,
	},
	{
		slug: "mamparas-divisorias",
		nombre: "Mamparas divisorias",
		title: "Mamparas divisorias para oficinas en Paraguay | Cristal, Durlock y Eucatex",
		h1: "Mamparas divisorias para oficinas, comercios y espacios corporativos",
		description: "Mamparas divisorias para oficinas, comercios y consultorios en Paraguay. Cristal templado, Durlock o Eucatex, con instalación y sin obra de mampostería.",
		intro: "Hacemos divisiones para salas de reunión, puestos de trabajo, recepciones y áreas operativas. Te ayudamos a elegir entre cristal templado, Durlock o Eucatex según la privacidad, la luz y la rapidez de obra que necesitás.",
		resumen: "Vidrio o panel para separar ambientes.",
		foto: "cooperativa-medalla",
		incluye: ["Perfilería", "Paño de vidrio o panel", "Instalación"],
		noIncluye: ["Aire acondicionado y electricidad de los puestos"],
		hechos: [
			"En la Cooperativa Medalla Milagrosa las divisiones son de cristal.",
			"En el IPS Central hay mamparas en salas de atención, junto con cielo raso Durlock.",
			"En una oficina combinamos divisorias de templado con cielo raso desmontable.",
		],
		bloques: [
			{
				titulo: "Tipos de mampara divisoria",
				items: [
					{ titulo: "Cristal templado", texto: "Para oficinas, salas de reunión y lugares donde la luz natural y la imagen limpia pesan más que el aislamiento acústico. Las visuales no se bloquean y los herrajes pueden ser mínimos." },
					{ titulo: "Eucatex", texto: "Solución modular para subdivisiones administrativas u operativas, donde importa cambiar la distribución y terminar rápido." },
					{ titulo: "Tabiques de Durlock", texto: "Tabiquería seca con más privacidad visual y una terminación continua. Sirve cuando buscás privacidad, robustez y un acabado definitivo." },
				],
			},
			{
				titulo: "Qué conviene según el espacio",
				items: [
					{ titulo: "Oficinas corporativas", texto: "Puestos, salas, directorios y recepciones." },
					{ titulo: "Locales comerciales", texto: "Atención, depósito y áreas de apoyo." },
					{ titulo: "Empresas e industrias", texto: "Separación de áreas operativas según el uso y la circulación." },
					{ titulo: "Clínicas y consultorios", texto: "Privacidad y limpieza según el sistema elegido." },
					{ titulo: "Obras temporales", texto: "Cerramientos desmontables para reorganizar rápido el espacio." },
				],
			},
			{
				titulo: "Señales de que hace falta renovar las divisiones",
				items: [
					{ titulo: "Ruido en las áreas de trabajo", texto: "Si las conversaciones cruzan las oficinas, hay que revisar cómo se divide el ambiente." },
					{ titulo: "Espacios oscuros o encerrados", texto: "Las paredes ciegas limitan la luz natural." },
					{ titulo: "Falta de privacidad en reuniones", texto: "Sin salas cerradas es difícil atender a un cliente o hacer una llamada sensible." },
				],
			},
			{
				titulo: "Vidrio, Durlock y Eucatex, lado a lado",
				parrafos: [
					"La privacidad visual es mayor en Durlock y Eucatex que en vidrio, salvo que el vidrio sea esmerilado. El paso de luz natural es mayor en vidrio. El control de ruido depende de cómo se arme cada sistema: el Eucatex es limitado y el Durlock puede aislar más según la composición.",
					"Cambiar la distribución más adelante es posible con Eucatex y limitado con vidrio. Los plazos y el montaje cambian con el sistema.",
				],
			},
			{
				titulo: "Cobertura",
				parrafos: ["Trabajamos en Asunción, Gran Asunción y ciudades del interior. Antes de cotizar relevamos el espacio."],
			},
		],
		faq: [
			{ p: "¿Qué tipo de mampara conviene para una oficina?", r: "Se decide con cuatro cosas: la privacidad que buscás, la luz que querés dejar pasar, la imagen de la oficina y qué tan rápido necesitás terminar." },
			{ p: "¿Qué diferencia hay entre cristal templado, Durlock y Eucatex?", r: "Cambia la privacidad, la estética, la posibilidad de reconfigurar el espacio y los tiempos de obra. El vidrio deja pasar la luz. El Durlock y el Eucatex tapan la vista." },
			{ p: "¿Qué datos necesito para cotizar?", r: "Medidas aproximadas, el uso del ambiente, fotos o plano, y si priorizás privacidad, luz o flexibilidad de la distribución." },
			{ p: "¿Puedo cotizar sin plano?", r: "Sí. Con fotos y medidas aproximadas podemos orientarte. El presupuesto final se cierra con las medidas relevadas en el lugar." },
			{ p: "¿Cuánto cuesta una mampara divisoria?", r: "Cambia con el material, la altura, las puertas y las condiciones del espacio. No publicamos un monto suelto: mandanos el largo, la altura y las fotos y te pasamos el presupuesto por WhatsApp." },
		],
		calculadora: false,
	},
	{
		slug: "fachadas",
		nombre: "Fachadas",
		title: "Fachadas de Vidrio y Aluminio en Paraguay | Muro Cortina y Glazing",
		h1: "Fachadas de vidrio y aluminio en Paraguay",
		description: "Fachadas de vidrio y aluminio en Paraguay: fachada entubada, muro cortina y sistema glazing para locales, oficinas, showrooms y edificios.",
		intro: "Hacemos fachadas entubadas, muro cortina y sistema glazing en locales comerciales, edificios, oficinas y showrooms. El sistema se elige según las medidas, la estructura existente y el diseño de cada obra.",
		resumen: "Vidrieras, fachadas y muros cortina.",
		foto: "sucursal-tigo-mra",
		incluye: ["Sistema de aluminio y vidrio", "Instalación"],
		noIncluye: ["Estructura de hormigón y losa"],
		hechos: [
			"Sucursal Tigo en Mariano Roque Alonso: fachada de cristal templado.",
			"Natatorio del CIT, en Luque: fachada de vidrio y aluminio.",
			"Universidad del Pacífico, en Pedro Juan Caballero: muro cortina de vidrio reflectivo azul.",
		],
		bloques: [
			{
				titulo: "Tres sistemas de fachada",
				items: [
					{ titulo: "Fachada entubada", texto: "Una estructura definida sostiene el vidrio y el aluminio. Se usa en locales comerciales, frentes de negocios, showrooms, accesos y espacios corporativos." },
					{ titulo: "Muro cortina", texto: "Fachada vidriada donde el vidrio y el aluminio tienen el protagonismo, común en edificios, oficinas y proyectos inmobiliarios. Se evalúa según la altura, la estructura, las medidas, la exposición y el diseño." },
					{ titulo: "Sistema glazing", texto: "Cerramiento de terminación más limpia, con mayor presencia visual del vidrio. Se usa en fachadas comerciales, showrooms, oficinas, accesos vidriados y edificios." },
				],
			},
			{
				titulo: "Cuándo conviene una fachada nueva",
				items: [
					{ titulo: "Frente viejo o improvisado", texto: "Locales, oficinas o showrooms que necesitan una imagen exterior más seria." },
					{ titulo: "Obra nueva o frente por resolver", texto: "Hay que definir el sistema, la estructura y la terminación según la escala real del frente." },
					{ titulo: "Más presencia desde la calle", texto: "Negocios, empresas o edificios que quieren mejorar la visibilidad y la primera impresión." },
				],
			},
			{
				titulo: "Qué sistema conviene",
				parrafos: [
					"No se define solo por el nombre del sistema. Hay que ver el frente, la estructura, la escala, el uso del espacio, el tipo de vidrio, la perfilería y las condiciones de instalación.",
					"En un local comercial o showroom solemos evaluar fachada entubada o glazing. En un edificio o una oficina de mayor escala, muro cortina. Cuando hace falta una estructura visible y bien resuelta, la entubada es una buena referencia.",
				],
			},
			{
				titulo: "Una fachada no tiene un monto de lista",
				parrafos: [
					"El precio sale de la medición, de la estructura que ya existe y del sistema elegido. Por eso no publicamos un monto. Con fotos del frente, medidas o planos, ubicación y tipo de proyecto, te orientamos sobre el sistema y armamos el presupuesto.",
				],
			},
		],
		faq: [
			{ p: "¿Qué tipos de fachadas hace VIPAR?", r: "Fachada entubada, muro cortina y sistema glazing, según el tipo de obra y la revisión técnica." },
			{ p: "¿Qué es una fachada entubada?", r: "Es un frente o cerramiento con una estructura definida que sostiene vidrio, aluminio u otros elementos. Se evalúa en locales, accesos y frentes comerciales." },
			{ p: "¿Qué es un muro cortina?", r: "Un sistema de fachada vidriada, generalmente en edificios, oficinas y proyectos donde el vidrio y el aluminio tienen mayor protagonismo." },
			{ p: "¿Qué es un sistema glazing?", r: "Un sistema de fachadas y cerramientos vidriados con una terminación más limpia y mayor presencia visual del vidrio." },
			{ p: "¿Qué fachada conviene para un local comercial?", r: "Depende del tamaño del frente, el presupuesto, el diseño, la estructura existente y la visibilidad que busques. En muchos casos se evalúa fachada entubada o glazing." },
			{ p: "¿Puedo cotizar una fachada enviando fotos?", r: "Sí. Lo ideal es mandar fotos del frente, medidas aproximadas, la ubicación de la obra y referencias visuales." },
		],
		calculadora: false,
	},
	{
		slug: "cortinas",
		nombre: "Cortinas de vidrio",
		title: "Cortinas de vidrio en Paraguay | Cerramientos corredizos",
		h1: "Cortinas de vidrio para cerrar sin perder visual ni flexibilidad",
		description: "Cortinas de vidrio en Paraguay: cerramientos corredizos y plegables de cristal templado para balcones, galerías, quinchos y frentes comerciales.",
		intro: "Son sistemas corredizos y plegables de cristal templado para balcones, galerías, quinchos y frentes comerciales. Cierran el espacio cuando hace falta y lo dejan casi libre cuando el clima acompaña.",
		resumen: "Para quinchos, galerías y balcones.",
		foto: "quincho-edificio-brasilia-asuncion",
		incluye: ["Hojas de vidrio", "Herrajes de apertura", "Instalación"],
		noIncluye: ["Techo ni piso del quincho"],
		hechos: [
			"En el quincho del Edificio Brasília el cierre es de vidrio con cortinas plegables.",
			"En la cooperativa de Concepción también instalamos cortinas horizontales.",
		],
		bloques: [
			{
				titulo: "Dónde se usan",
				items: [
					{ titulo: "Cortina para balcón", texto: "Cerramientos corredizos para departamentos y terrazas. Suman flexibilidad sin perder la vista ni la luz natural." },
					{ titulo: "Cortina para quincho o galería", texto: "Cerrás el espacio según el clima y lo abrís por completo cuando querés ventilación y continuidad con el exterior." },
					{ titulo: "Cortina para frente comercial", texto: "Cerramiento de vidrio con apertura práctica, para locales y showrooms que necesitan visibilidad y una fachada limpia." },
				],
			},
			{
				titulo: "Qué sistema elegir",
				items: [
					{ titulo: "Apertura total", texto: "Para espacios que tienen que poder liberarse casi por completo." },
					{ titulo: "Mayor control del cierre", texto: "Para lugares donde hay que revisar la exposición al clima y las condiciones del sitio." },
					{ titulo: "Lectura liviana", texto: "Para proyectos donde mandan la visual limpia y la transparencia." },
				],
			},
		],
		faq: [
			{ p: "¿Las cortinas de vidrio cierran del todo el paso del agua?", r: "Depende del sistema, de cuánto se expone el lugar y de cómo se instala. Al cotizar revisamos qué nivel de cierre se puede lograr en tu espacio." },
			{ p: "¿Se pueden abrir en gran parte?", r: "Sí, según el sistema. Hay configuraciones que apilan o desplazan las hojas para liberar buena parte del vano." },
			{ p: "¿Sirven para balcones y quinchos?", r: "Sí. Son dos de los usos más comunes porque dan flexibilidad de apertura y control del espacio según el clima." },
		],
		calculadora: false,
	},
	{
		slug: "cielo-raso",
		nombre: "Cielo raso",
		title: "Cielo raso en Paraguay | Instalación en PVC, Durlock y desmontable",
		h1: "Cielo raso en Paraguay: instalación en PVC, Durlock, yeso y desmontable",
		description: "Cielo raso en Paraguay: instalación en PVC, yeso, Durlock, Eucatex y desmontable para viviendas, oficinas y locales. Mirá obras reales.",
		intro: "Instalamos cielo raso en viviendas, oficinas y locales. Te ayudamos a elegir entre yeso, PVC, Durlock o desmontable según si hay que lavarlo, pintarlo o llegar a las instalaciones.",
		resumen: "PVC, yeso, Durlock y desmontable.",
		foto: "virgen-del-huerto-asuncion",
		incluye: ["Estructura y placas del sistema elegido", "Instalación"],
		noIncluye: ["Artefactos, salvo que estén en el pedido", "Aire acondicionado"],
		hechos: [
			"CARDE de la APF, en Ypané: PVC.",
			"Tigo Central: yeso.",
			"IPS Central: Durlock. Virgen del Huerto: paneles LED.",
		],
		bloques: [
			{
				titulo: "Sistemas de cielo raso",
				items: [
					{ titulo: "Desmontable", texto: "Para oficinas, comercios y espacios donde importa llegar a las instalaciones sin romper la terminación. Sacás una placa y llegás al cable o al aire acondicionado. En Virgen del Huerto, en Asunción, lleva paneles LED." },
					{ titulo: "Durlock o junta tomada", texto: "Una superficie continua, de acabado liso y lista para pintar. Se pide cuando querés una imagen limpia. En el IPS Central usamos Durlock y en la remodelación de un local de San Antonio, junta tomada." },
					{ titulo: "PVC", texto: "Es práctico y lavable, y se monta rápido. Lo instalamos en el CARDE de la APF, en Ypané, donde la placa no puede ser delicada." },
					{ titulo: "Eucatex o modular", texto: "Placas modulares para proyectos donde importa reponer por módulos y mantener fácil. Se pide también por su terminación prolija." },
				],
			},
			{
				titulo: "Qué sistema conviene según tu espacio",
				items: [
					{ titulo: "Si necesitás acceder a las instalaciones", texto: "El desmontable. Se revisa el registro y el mantenimiento." },
					{ titulo: "Si querés una terminación continua", texto: "El Durlock o la junta tomada. Se cuida el diseño y el acabado liso." },
					{ titulo: "Si tenés que lavarlo", texto: "El PVC. Se revisan las condiciones de montaje." },
					{ titulo: "Si querés reponer por módulos", texto: "El Eucatex o modular." },
				],
			},
			{
				titulo: "Para qué tipo de lugar",
				items: [
					{ titulo: "Residencial", texto: "Mejora la terminación y ordena las instalaciones del hogar. En Torre Provenza hay un cielo raso en ejecución." },
					{ titulo: "Comercial", texto: "Opciones de mantenimiento ágil para el local." },
					{ titulo: "Corporativo", texto: "Terminación continua o modular para oficinas." },
				],
			},
			{
				titulo: "Qué hace un cielo raso",
				parrafos: [
					"Ordena y oculta las instalaciones eléctricas y de aire acondicionado, mejora la terminación del ambiente y, según el sistema, facilita el mantenimiento. También tapa la estructura del techo original y deja una superficie renovada.",
				],
			},
		],
		faq: [
			{ p: "¿Qué tipos de cielo raso instala VIPAR?", r: "Yeso, PVC, Durlock, desmontable, Eucatex u otros sistemas, según el tipo de ambiente, el mantenimiento y las condiciones de la obra." },
			{ p: "¿Cuál conviene: yeso, PVC o Durlock?", r: "Depende de si hay que limpiarlo seguido, de la terminación que querés y de si necesitás acceder a las instalaciones." },
			{ p: "¿Qué cielo raso conviene para una oficina?", r: "Si hace falta llegar a las instalaciones, el desmontable. Si querés una terminación continua, Durlock. Si querés reponer por módulos, modular." },
			{ p: "¿Qué datos necesito para cotizar?", r: "Fotos del espacio, medidas aproximadas, la ubicación de la obra, el tipo de ambiente y, si ya lo sabés, el sistema que buscás." },
			{ p: "¿Cuánto cuesta un cielo raso?", r: "Cambia con el sistema, las medidas, la preparación del techo y la complejidad de la obra. No publicamos un monto suelto. Con fotos y medidas te pasamos el presupuesto por WhatsApp." },
		],
		calculadora: false,
	},
	{
		slug: "box-de-bano",
		nombre: "Box de baño",
		title: "Box de baño y mamparas para baño en Paraguay",
		h1: "Box de baño y mamparas de ducha a medida",
		description: "Box de baño y mamparas de ducha a medida en Paraguay: acrílico, cristal templado 8 mm o plegable. Elegí apertura y medidas y pedí presupuesto por WhatsApp.",
		intro: "Hacemos box de baño en acrílico, cristal templado de 8 mm y sistema plegable. Lo medimos en tu baño, lo armamos a medida y lo instalamos con sellado de silicona antihongos.",
		resumen: "Acrílico, templado 8 mm o plegable.",
		foto: "vivienda-box-de-bano",
		incluye: ["Paños y perfiles", "Herrajes", "Instalación y sellado"],
		noIncluye: ["Revestimiento, grifería y plato de ducha"],
		hechos: [
			"En una vivienda el box es templado de 8 mm incoloro, con aluminio fosco.",
			"Las aperturas que armamos: corrediza, batiente y plegable.",
			"En Tienda GO! Caaguazú hay mamparas de baño con puerta de celosía.",
		],
		bloques: [
			{
				titulo: "Acrílico, cristal templado o plegable",
				items: [
					{ titulo: "Acrílico", texto: "Estructura de aluminio con paneles de acrílico texturizado. Es la opción más accesible y pide poco mantenimiento. Va bien en baños de uso intensivo o con presupuesto ajustado." },
					{ titulo: "Cristal templado", texto: "Cristal a medida con perfiles de aluminio. Se limpia fácil, deja pasar la luz y hace que el baño se vea más amplio. Es el que más piden para baños principales. En una vivienda instalamos templado de 8 mm incoloro con perfil de aluminio fosco." },
					{ titulo: "Sistema plegable", texto: "Las hojas se juntan a un costado y el acceso queda casi libre. Sirve en baños muy chicos, para personas mayores o cuando la apertura es atípica." },
				],
			},
			{
				titulo: "Corrediza, batiente o plegable",
				parrafos: [
					"La corrediza ocupa poco espacio y entra bien en baños reducidos. La batiente abre como una puerta y necesita espacio libre delante o detrás de la hoja. La plegable libera casi todo el vano.",
				],
			},
			{
				titulo: "Qué conviene según tu baño",
				items: [
					{ titulo: "Si priorizás el presupuesto", texto: "El acrílico cierra la ducha con una inversión más contenida." },
					{ titulo: "Si priorizás limpieza e imagen", texto: "El cristal templado, por su terminación y su mantenimiento diario." },
					{ titulo: "Si el baño es muy chico", texto: "El sistema plegable, que libera el acceso." },
				],
			},
			{
				titulo: "Qué cambia el precio",
				parrafos: [
					"El precio de un box cambia con el material, los herrajes, la apertura, las medidas y la instalación. Dos boxes de la misma medida pueden costar distinto si uno es de acrílico y el otro de cristal. Por eso no publicamos un monto suelto.",
					"Con ancho, alto, fotos del baño y la apertura que preferís, te pasamos el presupuesto por WhatsApp. El precio final se cierra cuando medimos en el baño.",
				],
			},
			{
				titulo: "Una ducha sin box",
				parrafos: [
					"Una cortina de baño o una solución improvisada le resta orden al baño, ensucia el piso y deteriora los materiales de alrededor. Un box a medida ayuda a reducir las salpicaduras y a mantener el baño más seco. Con cristal o acrílico, además, la limpieza es más simple.",
				],
			},
		],
		faq: [
			{ p: "¿Qué diferencia hay entre acrílico y cristal templado?", r: "El acrílico es la opción más accesible y pide poco mantenimiento. El cristal templado se limpia mejor, deja pasar más luz y suele ser el preferido para baños principales." },
			{ p: "¿Qué datos necesito para pedir presupuesto?", r: "Ancho y alto aproximados, fotos del baño, la apertura que preferís y la zona de la obra." },
			{ p: "¿Instalan el box?", r: "Sí. El trabajo incluye paños, perfiles, herrajes, instalación y sellado. No incluye revestimiento, grifería ni plato de ducha." },
			{ p: "¿Cuánto cuesta un box de baño?", r: "Cambia con el material, la medida, la apertura y la instalación. No publicamos un monto suelto. Armá tu pedido acá abajo y te pasamos el presupuesto por WhatsApp." },
		],
		calculadora: true,
	},
];

export function servicioPorSlug(slug: string) {
	return servicios.find((servicio) => servicio.slug === slug);
}
