import { OffersCard } from '../types/offers';
import { PHOTO_URL } from '../components/const/const';

export const offersCard: OffersCard[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 5,
    previewImage: `${PHOTO_URL}?rnd=${Math.random()}`
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 150,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 53.35514938496378,
        longitude: 5.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 53.35514938496378,
      longitude: 5.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: `${PHOTO_URL}?rnd=${Math.random()}`
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 200,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 54.35514938496378,
        longitude: 6.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 54.35514938496378,
      longitude: 6.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: `${PHOTO_URL}?rnd=${Math.random()}`
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 55.35514938496378,
        longitude: 6.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 55.35514938496378,
      longitude: 6.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.4,
    previewImage: `${PHOTO_URL}?rnd=${Math.random()}`
  },
];
