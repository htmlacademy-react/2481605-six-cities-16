import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const/const';
import { Helmet } from 'react-helmet-async';

function NotFound(): JSX.Element {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    link: {
      fontSize: '1rem',
      color: '#007bff',
      marginTop: '1rem',
      padding: '0.5rem 1rem',
      border: '1px solid #007bff',
      borderRadius: '0.25rem',
    },
  };

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
