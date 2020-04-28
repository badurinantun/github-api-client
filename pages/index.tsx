import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

function HomePage() {
  const { data, error, loading } = useQuery(gql`
    {
      viewer {
        login
      }
    }
  `);

  return <pre>{JSON.stringify({ data, error, loading }, null, 2)}</pre>;
}

export default HomePage;
