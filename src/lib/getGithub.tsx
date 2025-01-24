import { getBaseURL } from "./helpers";

const getGitHub = async () => {
  const baseURL = getBaseURL();
  const githubResponse = await fetch(`${baseURL}/api/github/ardi`, {
    next: { revalidate: 120 },
  });

  if (!githubResponse.ok) {
    console.error(`Failed to fetch API: ${githubResponse.statusText}`);
    throw new Error("❌ Error calling Github Data");
  }

  const github = await githubResponse.json();
  return github;
};

export default getGitHub;
