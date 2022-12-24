import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { countryId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetchCountry(countryId).then(country => {
      setCountry(country);
      setIsLoading(false);
    });
  }, [countryId]);

  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <div
          style={{
            marginBottom: '60px',
            color: '#f2f2f2',
            letterSpacing: '0.06em',
            textDecoration: 'underline',

            borderColor: 'gray',
          }}
        >
          <Link to={goBackLink}>Back to Countries</Link>
        </div>
        {country && <CountryInfo data={country} />}
      </Container>
    </Section>
  );
};
