
export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Main = '/',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const styles: { [key: string]: React.CSSProperties } = {
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
