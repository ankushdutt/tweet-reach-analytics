function Analyze({ retweeted_by }) {
  return (
    <div>
      <>
        {retweeted_by.data.map(function (d, idx) {
          return (
            <li key={idx}>
              {d.id} {d.name}
            </li>
          );
        })}
      </>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://api.twitter.com/2/tweets/${params.id}/retweeted_by`,
    {
      method: "GET",
      headers: {
        Authorization: `${process.env.BEARER_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const retweeted_by = await res.json();
  return { props: { retweeted_by } };
}

export default Analyze;
