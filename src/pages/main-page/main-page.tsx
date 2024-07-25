import OffersList from '../../components/card/offers-list.tsx';
import Logo from '../../components/logo/logo';
import HeaderNav from '../../components/header-nav/header-nav';
import Location from '../../components/location/location';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import CitiesMap from '../../components/cities-map/cities-map';
import { OffersCard } from '../../types/offers.ts';

type MainPageProps = {
  offersCount: number;
  offersCard: OffersCard[];
}

function MainPage({ offersCount, offersCard }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <HeaderNav/>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Location/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
              <PlacesSorting/>
              <OffersList offers={offersCard} />
            </section>
            <div className="cities__right-section">
              <CitiesMap offers={offersCard} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
