import { Link } from 'react-router-dom';
import { AppRoute } from '../const/const';
import { Helmet } from 'react-helmet-async';
import { styles } from '../const/const';

function NotFound(): JSX.Element {

  return (
    <div style={styles.container}>
      <Helmet>
        <title>6 cities — 404</title>
      </Helmet>
      <img
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
      <h1>404 Страница не найдена</h1>
      <Link
        to={AppRoute.Main}
        style={styles.link}
      >
        Вернуться на главную страницу
      </Link>
    </div>
  );
}

export default NotFound;
