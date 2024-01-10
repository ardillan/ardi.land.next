import { IGitHubRepository } from "@/interfaces/IGitHub";

import { getBaseURL } from "./helpers";

const getGitHub = async (): Promise<IGitHubRepository> => {
  const baseURL = getBaseURL();
  const githubResponse = await fetch(`${baseURL}/api/github/ardi.land`);
  const github = await githubResponse.json();
  return github;
};

export default getGitHub;
