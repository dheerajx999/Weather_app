import {AsyncPaginate} from "react-select-async-paginate";
import {useState} from "react";
import {Geo_Api_Url, geoApiOptions} from "../../api";

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const loadOptions = async (inputData) => {
        return fetch(
            `${Geo_Api_Url}/cities?minPopulation=1000000&namePrefix=${inputData}`,
            geoApiOptions
        )
        .then((response) => response.json())
        .then((response) => {
            return {
                options : response.data.map((city) => {
                    return {
                        value : `${city.latitude} ${city.longitude}`,
                        label : `${city.name}, ${city.countryCode}`,
                    }
                })
            }
        }
        )
        .catch((error) => console.log(error));
    };


    return (
        <AsyncPaginate
            placeholder = "Search For The City "
            value = {search} debounceTimeout={600}
            onChange = {handleOnChange}
            loadOptions = {loadOptions}>
        </AsyncPaginate>
    )

}

export default Search ;