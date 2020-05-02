import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { css } from '@emotion/core';

import { GET_PROFILE } from '../../src/graphql/queries/profilePage';
import { Repositories } from '../../src/components/repositories';
import { ProfileData } from '../../src/interfaces/ProdileData';
import { Grid } from '../../src/components/layout/grid';
import { Theme } from '../../src/theme/theme';
import { UserCard } from '../../src/components/userCard';

const ProfilePage = () => {
  const router = useRouter();
  const { profile: login } = router.query;

  const { data, error } = useQuery<ProfileData>(GET_PROFILE, {
    variables: {
      login,
    },
    skip: !login,
  });

  return (
    <Grid>
      <div
        css={(theme: Theme) => css`
          margin-bottom: ${theme.spacing(3)};
        `}
      >
        <Link href="../../">
          <a>Back</a>
        </Link>
      </div>
      <aside
        css={(theme: Theme) => css`
          grid-column: 1 / -1;
          margin-bottom: ${theme.spacing(4)};

          @media (min-width: ${theme.breakpoints.md}) {
            grid-column: 1 / 4;
          }

          @media (min-width: ${theme.breakpoints.lg}) {
            grid-column: 1 / 5;
          }
        `}
      >
        {data && (
          <React.Fragment>
            <img
              css={css`
                width: 100%;
              `}
              alt="avatar"
              src={data.user.avatarUrl}
            />
            <UserCard user={data.user} />
          </React.Fragment>
        )}

        {error && <pre>{JSON.stringify({ error }, null, 2)}</pre>}
      </aside>

      <div
        css={(theme: Theme) => css`
          grid-column: 1 / -1;
          margin-bottom: ${theme.spacing(4)};

          @media (min-width: ${theme.breakpoints.md}) {
            grid-column: 4 / -1;
          }

          @media (min-width: ${theme.breakpoints.lg}) {
            grid-column: 5 / -1;
          }
        `}
      >
        {login && <Repositories login={login as string} />}
      </div>
    </Grid>
  );
};

export default ProfilePage;
