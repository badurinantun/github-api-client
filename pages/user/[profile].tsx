import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

import { GET_PROFILE } from '../../src/graphql/queries/profile';

const ProfilePage = () => {
  const router = useRouter();
  const { profile } = router.query;

  const { data, error, loading } = useQuery(GET_PROFILE, {
    variables: {
      login: profile,
    },
  });

  return <pre>{JSON.stringify({ data, error, loading }, null, 2)}</pre>;
};

export default ProfilePage;
