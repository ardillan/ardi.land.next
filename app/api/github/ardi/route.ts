export async function GET() {
  const githubRes = await fetch(
    "https://api.github.com/repos/ardillan/ardi-next"
  );
  const github = await githubRes.json();

  return Response.json({ ...github });
}
