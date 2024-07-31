import { OffersCard } from '../../types/offers';

type CitiesMapProps = {
  offers: OffersCard[];
};

function CitiesMap({ offers }: CitiesMapProps): JSX.Element {
  return (
    <section className="cities__map map">
      {offers.map((offer) => (
        <div key={offer.id}>
        </div>
      ))}
    </section>
  );
}

export default CitiesMap;
