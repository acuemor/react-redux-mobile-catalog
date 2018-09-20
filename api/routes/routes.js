const appRouter = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send('Welcome to our restful API. Please, go to /phones endpoint.');
  });
  app.get('/phones', (req, res) => {
    const data = [
      {
        key: 1,
        inStock: true,
        text: 'Huawei P20 Lite',
        description:
          'El Huawei P20 lite dispone de una pantalla de 5.84 pulgadas con una resolución de 2280x1080 pixeles, donde podrás disfrutar de forma fluida de todo tu contenido multimedia gracias a su procesador Kirin 659 de 8 núcleos y a sus 4GB de RAM.',
        url: 'https://static.phonehouse.es/res/autoimg/37800_spc_450_450_qhigh_product.jpg',
        color: 'Azul',
        price: '329',
        camera: '16Mpx',
        screen: "5.84''",
        battery: '3000mAh',
      },
      {
        key: 2,
        inStock: false,
        text: 'Xiaomi Redmi Note',
        description:
          'El Redmi Note 5 toma fotos de alta calidad incluso en condiciones de poca luz. Los píxeles de gran tamaño de 1.4μm de la cámara principal crean fotos brillantes y claras. Todo esto se ve incluso mejorado por el segundo sensor, que ofrece una profundidad de campo no disponible en las cámaras de los smartphones convencionales.',
        url: 'https://static.phonehouse.es/res/autoimg/41026_spc_450_450_qhigh_product.jpg',
        color: 'Negro',
        price: '189',
        camera: '12Mpx',
        screen: "5.99''",
        battery: '3000mAh',
      },
      {
        key: 3,
        inStock: false,
        text: 'Samsung Galaxy S8',
        description:
          'Con el Samsung Galaxy S8 podrás disfrutar de todo el contenido gracias a su pantalla infinita de 5,8" y su diseño inmersivo (pantalla sin bordes).',
        url: 'https://static.phonehouse.es/res/autoimg/35724_spc_450_450_qhigh_product.jpg',
        color: 'Plata',
        price: '447',
        camera: '12Mpx',
        screen: "5.8''",
        battery: '3500mAh',
      },
      {
        key: 4,
        inStock: true,
        text: 'BQ Aquaris VS',
        description:
          'Porque eres exigente y sabes lo que necesitas de un móvil sin renunciar al mejor precio, el Aquaris VS es para ti. Disfruta de la estética rompedora y de las especificaciones clave de la gama V: una experiencia multimedia inmersiva, una cámara con resultados de 10 y una batería de larga duración.',
        url: 'https://static.phonehouse.es/res/autoimg/37817_spc_450_450_qhigh_product.jpg',
        color: 'Blanco',
        price: '190',
        camera: '12Mpx',
        screen: "5.2''",
        battery: '3100mAh',
      },
      {
        key: 5,
        inStock: true,
        text: 'Sony Xperia L1',
        description:
          'El Xperia L1 cuenta con una pantalla de gran calidad de 5,5" y un marco suave y redondeado, ademas dispone de un procesador de cuatro núcleos y 2 GB de RAM y 16GB de memoria ampliables mediante ranura para tarjetas microSD de hasta 265GB. Cuenta con una cámara principal de 13Mpx y una para selfies de 5Mpx.',
        url: 'https://static.phonehouse.es/res/autoimg/36245_spc_450_450_qhigh_product.jpg',
        color: 'Negro',
        price: '139',
        camera: '13Mpx',
        screen: "5.5''",
        battery: '2620mAh',
      },
      {
        key: 6,
        inStock: true,
        text: 'Apple iPhone 6',
        description:
          'Incluye una pantalla Retina HD de 4,7 pulgadas. Chip A8 con arquitectura de 64 bits. Nueva cámara iSight de 8 megapíxeles con Focus Pixels.',
        url: 'https://static.phonehouse.es/res/autoimg/31200_spc_450_450_qhigh_product.jpg',
        color: 'Negro',
        price: '171',
        camera: '8Mpx',
        screen: "4.7''",
        battery: '1810mAh',
      },
    ];
    setTimeout(() => {
      res.status(200).send(data);
    }, 5000);
  });
};

module.exports = appRouter;
