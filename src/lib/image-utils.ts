// src/lib/image-utils.ts

const GITHUB_USER = "akshayparihardev";
const REPO_NAME = "DASCA-";
const BRANCH = "main";

export const getImageUrl = (fileName: string) => {
  return `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${REPO_NAME}@${BRANCH}/assets/members/${fileName}.png`;
};