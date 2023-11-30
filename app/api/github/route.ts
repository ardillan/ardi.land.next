export async function GET() {
  const githubRes = await fetch(
    "https://api.github.com/repos/ardillan/ardi.land.next"
  );
  const github = await githubRes.json();

  console.log("🟠", github);

  return Response.json({ ...github });
}
