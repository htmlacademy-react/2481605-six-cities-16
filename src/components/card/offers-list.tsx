import Cards from './card.tsx';
import { OffersCard } from '../../types/offers.ts';

type OfferCardsProps = {
  offers: OffersCard[];
}

function OffersList({ offers }: OfferCardsProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Cards key={offer.id} offer={offer} />)}
    </div>
  );
}

export default OffersList;
