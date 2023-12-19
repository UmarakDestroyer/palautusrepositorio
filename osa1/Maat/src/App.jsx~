import { useEffect, useState } from "react";
import axios from "axios";
const api_key = import.meta.env.VITE_SOME_KEY

const CountryInformation = ({ country }) => {
  const getWeather = (lat, lon) => {
	//const request = `https://api.openweathermap.org/data/3.0/onecall?lat=}&lon=&exclude=hourly&appid=${api_key}`
        const request = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${api_key}`
	const req = axios.get(request).then(res=>res.data)
	console.log(req)
	return (<div></div>)
  }
  return (
    <div>
      <h1>{country.name.official}</h1>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Capital </td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{country.area}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>Languages</div>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <br></br>
      <img src={country.flags.png} />
      <div>{getWeather(country.capitalInfo.latlng[0],country.capitalInfo.latlng[1]) }</div>
    </div>
  );
};
function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [countries, setCountries] = useState("");
  const [showCountries, setShowCountries] = useState([]);
  const regex = () => {
    return countries == "" ? new RegExp("*") : RegExp(`${countries}*`);
  };
  const countryChanged = (event) => {
    event.preventDefault();
    setCountries(event.target.value);
  };
  const renderFiltered = () => {
    const filtered = countriesData.filter((c) => {
      const regex =
        countries == ""
          ? new RegExp(".*", "i")
          : new RegExp(`^(${countries}).*`, "i");
      return regex.test(c.name.common);
    });
    if (filtered.length > 1 && filtered.length <= 10) {
      return filtered.map((c) => {
        const render = showCountries.includes(c.name.common) ? (
          <CountryInformation country={c} />
        ) : (
          <li>
            {c.name.common}
            <button
              onClick={(event) => {
                event.preventDefault();
                setShowCountries([...showCountries, c.name.common]);
              }}
            >
              show
            </button>
          </li>
        );
        return render;
      });
    } else if (filtered.length == 1) {
      return <CountryInformation country={filtered[0]} />;
    } else {
      for (let i = 0; i < showCountries.length; i++) {
        if (!filtered.map((c) => c.name.common).includes(showCountries[i])) {
          const poista = showCountries[i];
          setShowCountries(showCountries.filter((a) => a != poista));
        }
      }
      return <div>nyt ei sovi</div>;
    }
  };

  useEffect(() => {
    const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/";
    const req = axios.get(`${baseUrl}/all`);
    req
      .then((res) => setCountriesData(res.data))
      .catch(() => console.log("ei"));
    console.log(countriesData);
  }, []);
  return (
    <div>
      <div>
        find countries <input value={countries} onChange={countryChanged} />
      </div>
      <ul>{renderFiltered()}</ul>
    </div>
  );
}

export default App;
