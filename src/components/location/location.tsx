
function Location() {
  const locations = [
    { name: 'Paris' },
    { name: 'Cologne' },
    { name: 'Brussels' },
    { name: 'Amsterdam', active: true },
    { name: 'Hamburg' },
    { name: 'Dusseldorf' }
  ];

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((location) => (
          <li key={location.name} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${location.active ? 'tabs__item--active' : ''}`}
              href="#"
            >
              <span>{location.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Location;
