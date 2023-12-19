import {
    useEffect,
    useState
} from 'react'
import axios from 'axios'

const CountryInformation({
    countryData,
    country
}) => {

    return ( < div >
        <
        h1 > < /h1> <
        /div>

    )

}

function App() {

    const [countriesData, setCountriesData] = useState([])
    const [countries, setCountries] = useState("")

    const regex = () => {
        return countries == "" ? new RegExp("*") : RegExp(`${countries}*`)
    }
    const countryChanged = (event) => {
        event.preventDefault()
        setCountries(event.target.value)

    }
    const renderFiltered = () => {
            const filtered = countriesData.filter(c => {
                const regex = countries == "" ? new RegExp(".*", "i") : new RegExp(`^(${countries}).*`, "i");
                return regex.test(c.name.common)
            })
            if (filtered.length > 1 && filtered.length <= 10) {
                return filtered.map(c => < li > {
                            c.name.common
                        } < /li>)}
                        else if (filtered.length == 1) {
                            return < div > {
                                filtered[0]
                            } < /div>}
                            else {
                                return < div > nyt ei sovi < /div>}


                            }

                            useEffect(() => {
                                const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/"
                                const req = axios.get(`${baseUrl}/all`)
                                req.then((res) => setCountriesData(res.data)).catch(() => console.log("ei"))
                                console.log(countriesData)
                            }, [])
                            return ( <
                                div >
                                <
                                div >
                                find countries < input value = {
                                    countries
                                }
                                onChange = {
                                    countryChanged
                                }
                                /> <
                                /div>  <
                                ul >

                                {
                                    renderFiltered()
                                } <
                                /ul> <
                                /div> 

                            )
                        }

                        export default App