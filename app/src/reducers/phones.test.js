import * as reducer from './phones';

describe('PhonesReducer', () => {
  const mockedPhoneList = [
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
  ];

  it('should return the initial state', () => {
    expect(reducer.phones(undefined, {})).toEqual({
      phoneList: [],
      loading: false,
    });
  });

  it('should handle GET_PHONE_LIST', () => {
    expect(
      reducer.phones([], {
        type: 'GET_PHONE_LIST',
        phoneList: mockedPhoneList,
      }),
    ).toEqual({
      phoneList: mockedPhoneList,
    });
  });

  it('should handle GET_PHONE_DETAIL', () => {
    expect(
      reducer.phones(
        {
          phoneList: [],
          loading: false,
        },
        {
          type: 'GET_PHONE_DETAIL',
        },
      ),
    ).toEqual({
      phoneList: [],
      loading: false,
    });
  });

  it('should handle RESTORE_PHONE_DETAIL', () => {
    expect(
      reducer.phones(
        {
          phoneList: [],
          loading: false,
        },
        {
          type: 'RESTORE_PHONE_DETAIL',
        },
      ),
    ).toEqual({
      phoneList: [],
      loading: false,
    });
  });

  it('should handle SPINNER', () => {
    expect(
      reducer.phones(
        {
          phoneList: [],
          loading: false,
        },
        {
          type: 'SPINNER',
          loading: true,
        },
      ),
    ).toEqual({
      phoneList: [],
      loading: true,
    });
  });
});
