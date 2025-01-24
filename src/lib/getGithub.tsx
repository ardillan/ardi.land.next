import { getBaseURL } from "./helpers";

const getGitHub = async () => {
  try {
    const baseURL = getBaseURL();
    const githubResponse = await fetch(`${baseURL}/api/github/ardi`, {
      next: { revalidate: 120 },
    });

    if (!githubResponse.ok) {
      console.error(`Failed to fetch API: ${githubResponse.statusText}`);
      return null;
    }

    const github = await githubResponse.json();
    return github;
  } catch (error) {
    console.error("❌ Error calling Github Data:", error);
    return null;
  }
};

export default getGitHub;
