import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const region = searchParams.get('query')
    if (!region) {
      return
    }
    fetchByRegion(region).then((data) => {
       setCountries(data);
    }
  
)
  },[searchParams])


  const searchQuery = (query) => {
setSearchParams({query})
  }


  return (
    <Section>
      <Container>
        <SearchForm onSubmit={searchQuery} />
        <CountryList countries={countries}/>
      </Container>
    </Section>
  );
};
