export default function Home({ data }) {
  return (
    <div>
      <div>
        {data.data.forEach((element) => {
          console.log(element.name);
        })}
      </div>
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
  const data = await res.json();
  return { props: { data } };
}
