const getGitHub = async () => {
  const githubResponse = await fetch(`${process.env.URL}/api/github`);
  const github = await githubResponse.json();
  return github;
};

export default getGitHub;
