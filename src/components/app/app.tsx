import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFound from '../not-found/not-found';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';
import PrivateRoute from '../private-route/private-rote';
import { HelmetProvider } from 'react-helmet-async';
import { OffersCard } from '../../types/offers';
import { FullOffer } from '../../types/full-offer';
import { FavoritesOffers } from '../../types/favorites-offers';
import { transformOffer } from '../../utils/transform';
import { favoritesOffers } from '../../mocks/favorites-offers';

type AppProps = {
  offersCount: number;
  offersCard: OffersCard[];
}

const App = ({ offersCount, offersCard }: AppProps): JSX.Element => {
  const fullOffers: FullOffer[] = offersCard.map(transformOffer);
  const favoriteOffers: FavoritesOffers[] = [favoritesOffers]; // Пример использования mock данных

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offersCount={offersCount} offersCard={offersCard} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesPage offers={favoriteOffers} />
              </PrivateRoute>
            }
          />
          <Route
            path="/offer/:id"
            element={<OfferPage offers={fullOffers} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
