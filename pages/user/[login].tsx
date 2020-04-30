import { useRouter } from 'next/router';

const ProfilePage = () => {
  const router = useRouter();
  const { login } = router.query;

  return <p>Post: {login}</p>;
};

export default ProfilePage;
