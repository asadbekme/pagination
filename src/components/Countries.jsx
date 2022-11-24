const Countries = ({ countries, loading }) => {
  if (loading) {
    return <h2 className="text-center fw-bolder">Loading...</h2>
  }

  return (
    <ul className="list-group mb-3">
      {
        countries.map((country, index) => (
          <li className="list-group-item" key={index}>
            {country.name.common}
            <img src={country.flags.svg} alt="country-flag" className="d-inline-block mx-2" style={{ width: 27 }} />
          </li>
        ))
      }
    </ul>
  )
}

export default Countries