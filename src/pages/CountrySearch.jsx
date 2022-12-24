import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Container,
  SearchForm,
  Section,
  Loader,
  CountryList,
} from 'components';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const region = searchParams.get('query');
    if (!region) {
      return;
    }
    setIsLoading(true);
    fetchByRegion(region).then(data => {
      setCountries(data);
      setIsLoading(false);
    });
  }, [searchParams]);

  const searchQuery = query => {
    setSearchParams({ query });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={searchQuery} />
        {isLoading && <Loader />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
