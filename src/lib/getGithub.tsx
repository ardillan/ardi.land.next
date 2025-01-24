import { getBaseURL } from "./helpers";

const getGitHub = async () => {
  const baseURL = getBaseURL();
  const githubResponse = await fetch(`${baseURL}/api/github/ardi.next`, {
    next: { revalidate: 120 },
  });
  const github = await githubResponse.json();
  return github;
};

export default getGitHub;
