const appRouter = app => {
  app.get("/", (req, res) => {
    res
      .status(200)
      .send("Welcome to our restful API. Please, go to /phones endpoint.");
  });

  app.get("/phones", (req, res) => {
    const data = [
      {
        key: 1,
        inStock: true,
        text: "Huawei P20 Lite",
        description:
          "El Huawei P20 lite dispone de una pantalla de 5.84 pulgadas con una resolución de 2280x1080 pixeles, donde podrás disfrutar de forma fluida de todo tu contenido multimedia gracias a su procesador Kirin 659 de 8 núcleos y a sus 4GB de RAM.",
        url: `http://${req.hostname}:3001/images/hp20lite.jpg`,
        color: "Azul",
        price: "329",
        camera: "16Mpx",
        screen: "5.84''",
        battery: "3000mAh"
      },
      {
        key: 2,
        inStock: false,
        text: "Xiaomi Redmi Note",
        description:
          "El Redmi Note 5 toma fotos de alta calidad incluso en condiciones de poca luz. Los píxeles de gran tamaño de 1.4μm de la cámara principal crean fotos brillantes y claras. Todo esto se ve incluso mejorado por el segundo sensor, que ofrece una profundidad de campo no disponible en las cámaras de los smartphones convencionales.",
        url: `http://${req.hostname}:3001/images/xrn.jpg`,
        color: "Negro",
        price: "189",
        camera: "12Mpx",
        screen: "5.99''",
        battery: "3000mAh"
      },
      {
        key: 3,
        inStock: false,
        text: "Samsung Galaxy S8",
        description:
          'Con el Samsung Galaxy S8 podrás disfrutar de todo el contenido gracias a su pantalla infinita de 5,8" y su diseño inmersivo (pantalla sin bordes).',
        url: `http://${req.hostname}:3001/images/ss8.jpg`,
        color: "Plata",
        price: "447",
        camera: "12Mpx",
        screen: "5.8''",
        battery: "3500mAh"
      },
      {
        key: 4,
        inStock: true,
        text: "BQ Aquaris VS",
        description:
          "Porque eres exigente y sabes lo que necesitas de un móvil sin renunciar al mejor precio, el Aquaris VS es para ti. Disfruta de la estética rompedora y de las especificaciones clave de la gama V: una experiencia multimedia inmersiva, una cámara con resultados de 10 y una batería de larga duración.",
        url: `http://${req.hostname}:3001/images/bqvs.jpg`,
        color: "Blanco",
        price: "190",
        camera: "12Mpx",
        screen: "5.2''",
        battery: "3100mAh"
      },
      {
        key: 5,
        inStock: true,
        text: "Sony Xperia L1",
        description:
          'El Xperia L1 cuenta con una pantalla de gran calidad de 5,5" y un marco suave y redondeado, ademas dispone de un procesador de cuatro núcleos y 2 GB de RAM y 16GB de memoria ampliables mediante ranura para tarjetas microSD de hasta 265GB. Cuenta con una cámara principal de 13Mpx y una para selfies de 5Mpx.',
        url: `http://${req.hostname}:3001/images/sxl1.jpg`,
        color: "Negro",
        price: "139",
        camera: "13Mpx",
        screen: "5.5''",
        battery: "2620mAh"
      },
      {
        key: 6,
        inStock: true,
        text: "Apple iPhone 6",
        description:
          "Incluye una pantalla Retina HD de 4,7 pulgadas. Chip A8 con arquitectura de 64 bits. Nueva cámara iSight de 8 megapíxeles con Focus Pixels.",
        url: `http://${req.hostname}:3001/images/iphone6.jpg`,
        color: "Negro",
        price: "171",
        camera: "8Mpx",
        screen: "4.7''",
        battery: "1810mAh"
      },
      {
        key: 7,
        inStock: true,
        text: "Huawei Mate 10 Lite",
        description:
          "El Huawei Mate 10 Lite destaca principalmente por su pantalla FullView y sus cuatro cámaras.",
        url: `http://${req.hostname}:3001/images/hm10lite.jpg`,
        color: "Azul",
        price: "219",
        camera: "16Mpx",
        screen: "5.99''",
        battery: "3340mAh"
      },
      {
        key: 8,
        inStock: false,
        text: "Meizu M6 Note",
        description:
          "tiene una pantalla de 5'' con resolución HD (1280x720), una cámara trasera de 8Mpx, con una apertura de f/2.0 que permitirá hacer unas fotos con mucha luminosidad, enfoque AF y flash dual",
        url: `http://${req.hostname}:3001/images/meizu.jpg`,
        color: "Dorado",
        price: "159",
        camera: "12Mpx",
        screen: "5.5''",
        battery: "4000mAh"
      },
      {
        key: 9,
        inStock: false,
        text: "Nubia Z17 Lite",
        description:
          "El Nubia Z17 Lite dispone de una pantalla IPS de 5.5 pulgadas con una resolución de 1920x1080 donde podrás visualizar el contenido multimedia de forma fluida gracias a su procesador Qualcomm Snapdragon de 8 núcleos y a su memoria RAM de 6GB.",
        url: `http://${req.hostname}:3001/images/nubia.jpg`,
        color: "Plata",
        price: "259",
        camera: "13Mpx",
        screen: "5.5''",
        battery: "3200mAh"
      },
      {
        key: 10,
        inStock: true,
        text: "LG K10",
        description:
          "El LG K10 2017 tiene una pantalla de 5.3'' de resolución HD, en la que podrás disfrutar de todos los contenidos de tu LG K10 2017 Negro sin problemas.",
        url: `http://${req.hostname}:3001/images/lgk10.jpg`,
        color: "Blanco",
        price: "114.90",
        camera: "13Mpx",
        screen: "5.3''",
        battery: "2800mAh"
      },
      {
        key: 11,
        inStock: true,
        text: "Huawei P Smart +",
        description:
          "Un dispositivo que llega como una evolución potenciada del Huawei P Smart mejorando en todos los aspectos técnicos, añadiendo más pantalla, rendimiento y un apartado fotográfico muy renovado que incluye 4 sensores, dos a cada lado del dispositivo.",
        url: `http://${req.hostname}:3001/images/hpsmart.jpg`,
        color: "Negro",
        price: "289",
        camera: "16Mpx",
        screen: "6.3''",
        battery: "3340mAh"
      },
      {
        key: 12,
        inStock: true,
        text: "Honor 7A",
        description:
          "El Honor 7A dispone de una pantalla de 5.7 pulgadas con una resolución de 1440x720 p. La cámara principal es de 13 MP, mientras que la cámara frontal es de 8 MP y también cuenta con Flash. En su interior monta un procesador Qualcomm MSM8937 con 8 núcleos y 2 GB de RAM, mientras que la memoria interna es de 16 GB ampliables mediante microSD. Además es dual SIM, dispone de sensor de huellas, desbloqueo facial y una batería de 3.000 mAh.",
        url: `http://${req.hostname}:3001/images/honor7a.jpg`,
        color: "Negro",
        price: "129",
        camera: "13Mpx",
        screen: "5.7''",
        battery: "3000mAh"
      },
      {
        key: 13,
        inStock: true,
        text: "Samsung Galaxy S9+",
        description:
          "El Samsung Galaxy S9+ dispone de una pantalla infinita de 6.2 pulgadas con una resolución de 2960x1440 y tecnología Super AMOLED. Respecto a las cámaras, incorpora una cámara principal dual de 12MP+12MP con tecnología Dual Pixel y estabilizador óptico de imagen. La cámara frontal es de 8MP. En cuanto a su rendimiento, su potente procesador Exynos 9180 con 8 núcleos junto con sus 6GB de RAM harán que puedas disfrutar de tu contenido multimedia con la máxima fluidez. La memoria interna es de 64GB ampliable mediante microSD. Además, incorpora una batería de 3.500mAh, cuenta con certificación IP68, es dual SIM y cuenta con reconocimiento facial, de iris y de huellas dactilares.",
        url: `http://${req.hostname}:3001/images/sgs9.jpg`,
        color: "Azul",
        price: "849",
        camera: "12Mpx",
        screen: "6.2''",
        battery: "3500mAh"
      },
      {
        key: 14,
        inStock: false,
        text: "Samsung Galaxy J6",
        description:
          "El Redmi Note 5 toma fotos de alta calidad incluso en condiciones de poca luz. Los píxeles de gran tamaño de 1.4μm de la cámara principal crean fotos brillantes y claras. Todo esto se ve incluso mejorado por el segundo sensor, que ofrece una profundidad de campo no disponible en las cámaras de los smartphones convencionales.",
        url: `http://${req.hostname}:3001/images/sgj6.jpg`,
        color: "Negro",
        price: "190",
        camera: "13Mpx",
        screen: "5.6''",
        battery: "3000mAh"
      },
      {
        key: 15,
        inStock: false,
        text: "Jiayu M2",
        description:
          "El Jiayu M2 es un Smartphone elegante por su material metalizado que lo hace de lo más elegante. La parte trasera, es completamente lisa, con una cámara situada en la parte superior al centro",
        url: `http://${req.hostname}:3001/images/jm2.jpg`,
        color: "Gris",
        price: "447",
        camera: "13Mpx",
        screen: "5''",
        battery: "2450mAh"
      },
      {
        key: 16,
        inStock: false,
        text: "Samsung Galaxy J5",
        description:
          "El Samsung Galaxy J5 2017 Dual, tiene una pantalla de 5.2'' HD Super Amoled que nos permite disfrutar de la calidad de sus fotografias, que realizan una fantástica cámara frontal de 13Mpx con apertura f1.7 y flash, y una cámara frontal con flash de 13Mpx. El sistema de este J5 2017 es Android 7 y para moverlo tenemos el procesador Octa Core 1.6GHz con 2GB de RAM con 16GB de memoria ampliables mediante microSD. Disponemos de sensor de huellas NFC para tus pagos sin tarjeta. La batería es de 3000mAh.",
        url: `http://${req.hostname}:3001/images/sgj5.jpg`,
        color: "Blanco",
        price: "169",
        camera: "13Mpx",
        screen: "5.2''",
        battery: "3000mAh"
      },
      {
        key: 17,
        inStock: true,
        text: "Honor 10",
        description:
          "El Honor 10 tiene una pantalla de 5.84 pulgadas con una resolución de 2280x1080 pixeles. La cámara principal es dual de 16MP+24MP mientras que la cámara frontal es de 24MP. En su interior dispone de un procesador Kirin 970 con 8 núcleos. Dispone de conector USB tipo C, batería de 3.400 mAh y es dual SIM.",
        url: `http://${req.hostname}:3001/images/honor10.jpg`,
        color: "Negro",
        price: "339",
        camera: "24Mpx",
        screen: "5.84''",
        battery: "3400mAh"
      },
      {
        key: 18,
        inStock: true,
        text: "Honor 9 Lite",
        description:
          "Despídete de los marcos. Dispone de una Pantalla Infinita de 5.65 pulgadas en un cuerpo de un smartphone clásico de 5.2 pulgadas. Lo que significa que podrás disfrutar de una mayor visión en un tamaño más reducido. Y todo ello en una pantalla con definición Full HD+.",
        url: `http://${req.hostname}:3001/images/honor9lite.jpg`,
        color: "Azul",
        price: "229",
        camera: "13Mpx",
        screen: "5.65''",
        battery: "3000mAh"
      }
    ];
    setTimeout(() => {
      res.status(200).send(data);
    }, 0);
  });
};

module.exports = appRouter;
