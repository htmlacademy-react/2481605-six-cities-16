export type OfferHost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type OfferReview = {
  user: {
    name: string;
    avatarUrl: string;
  };
  rating: number;
  comment: string;
  date: string;
};

export type FullOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: OfferHost;
  images: string[];
  maxAdults: number;
  reviews: OfferReview[];
};
