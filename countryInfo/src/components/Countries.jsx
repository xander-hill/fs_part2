const Countries = ({countries, showHandle}) => {
    if (countries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }

    else if (countries.length === 1) {
        return (
            <div>
                <h1>{countries[0].name.common}</h1>
                <p>Capital: {countries[0].capital}</p>
                <p>Area: {countries[0].area}</p>
                <h2>Languages:</h2>
                <ul>
                    {Object.values(countries[0].languages).map(language => (
                        <li key = {language} >{language}</li>
                    ))}
                </ul>
                <img
                    src={countries[0].flags.png}
                />
            </div>
        )
    }

    else if (countries.length === 0) {
        return (
            <div>No matches, try another filter</div>
        )
    }

    else {
        return (
            <div>
                {countries.map(country => (
                    <div key = {country.id}>{country.name.common} <button onClick={()=>showHandle(country.name.common)}>Show</button></div>
                ))}
            </div>
        )
    }
}

export default Countries