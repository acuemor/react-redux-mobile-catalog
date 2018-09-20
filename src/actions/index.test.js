import * as actions from './index';

describe('Actions - Filter', () => {
  it('should create an action to show all catalog', () => {
    const filter = 'SHOW_ALL';
    const expectedAction = {
      type: 'SET_VISIBILITY_FILTER',
      filter,
    };
    expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction);
  });

  it('should create an action to show only devices in stock', () => {
    const filter = 'SHOW_IN_STOCK';
    const expectedAction = {
      type: 'SET_VISIBILITY_FILTER',
      filter,
    };
    expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction);
  });

  it('should create an action to show only devices solds out', () => {
    const filter = 'SHOW_SOLD_OUT';
    const expectedAction = {
      type: 'SET_VISIBILITY_FILTER',
      filter,
    };
    expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction);
  });
});

describe('Actions - Phone detail', () => {
  const phoneDetail = {
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
  };
  it('should create an action to get phone detail', () => {
    const expectedAction = {
      type: 'GET_PHONE_DETAIL',
      phoneDetail,
    };
    expect(actions.getPhoneDetail(phoneDetail)).toEqual(expectedAction);
  });

  it('should create an action to reset phone detail', () => {
    const expectedAction = {
      type: 'RESTORE_PHONE_DETAIL',
      phoneDetail,
    };
    expect(actions.restorePhoneDetail(phoneDetail)).toEqual(expectedAction);
  });
});
