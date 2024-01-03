const getGitHub = async () => {
  const githubResponse = await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/github/ardi.land`
  );
  const github = await githubResponse.json();
  return github;
};

export default getGitHub;
