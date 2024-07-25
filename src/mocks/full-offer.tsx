import { PHOTO_URL } from '../components/const/const';
import { FullOffer } from '../types/full-offer';

export const fullOffer: FullOffer = {
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
    }
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isFavorite: false,
  isPremium: false,
  rating: 4,
  description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
  bedrooms: 3,
  goods: ['Heating'],
  host: {
    name: 'Oliver Conner',
    avatarUrl: `${PHOTO_URL}?rnd=${Math.random()}`,
    isPro: false
  },
  images: [`${PHOTO_URL}?rnd=${Math.random()}`],
  maxAdults: 4,
  reviews: [
    {
      user: {
        name: 'Max',
        avatarUrl: 'img/avatar-max.jpg',
      },
      rating: 4.8,
      comment: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      date: '2019-04-24',
    },
  ],
};
