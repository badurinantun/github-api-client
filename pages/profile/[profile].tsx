import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

import { GET_PROFILE } from '../../src/graphql/queries/profilePage';
import { Repositories } from '../../src/components/repositories';
import { ProfileData } from '../../src/interfaces/ProdileData';

const ProfilePage = () => {
  const router = useRouter();
  const { profile: login } = router.query;

  const { data, error, loading } = useQuery<ProfileData>(GET_PROFILE, {
    variables: {
      login,
    },
    skip: !login,
  });

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <pre>{JSON.stringify({ error }, null, 2)}</pre>}

      {data && (
        <React.Fragment>
          <img alt="avatar" src={data.user.avatarUrl} />
          <h2>{data.user.name}</h2>
          <h3>{data.user.login}</h3>
          <a href={data.user.url} target="_blank" rel="noopener noreferrer">
            profile
          </a>
          <hr />
          {login && <Repositories login={login as string} />}
        </React.Fragment>
      )}
    </div>
  );
};

export default ProfilePage;
