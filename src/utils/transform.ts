import { OffersCard } from '../types/offers';
import { FullOffer, OfferReview } from '../types/full-offer';
import { PHOTO_URL } from '../components/const/const';

export function transformOffer(offer: OffersCard): FullOffer {
  const reviews: OfferReview[] = [
    {
      user: {
        name: 'Max',
        avatarUrl: 'img/avatar-max.jpg',
      },
      rating: 4.8,
      comment: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      date: '2019-04-24',
    },
  ];

  const temporaryOffer = {
    ...offer,
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: `${PHOTO_URL}?rnd=${Math.random()}`,
      isPro: false,
    },
    images: [`${PHOTO_URL}?rnd=${Math.random()}`],
    maxAdults: 4,
    reviews,
  };

  return temporaryOffer as FullOffer;
}
