import { Container, CountryList, Loader, Section } from 'components';
import { getCountries } from 'service/country-service';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      const countriesArr = await getCountries();
      setCountries(countriesArr);
      setIsLoading(false);
    };
    fetchCountries();
  }, []);
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
