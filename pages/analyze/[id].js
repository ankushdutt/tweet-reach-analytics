import { useState, useRef } from "react";

function Analyze({ retweeted_by, retweeted_by_followers }) {
  const [data, setData] = useState(retweeted_by);
  const [dataF, setDataF] = useState(retweeted_by_followers);
  const total = useRef(new Set());

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <>
        <div>Reweeters ID and Name along with their number of followers:</div>
        {console.log(retweeted_by_followers)}
        {data.map(function (d, idx) {
          dataF[idx].forEach((element) => {
            total.current.add(element.id);
            console.log(total);
          });

          return (
            <li key={idx}>
              {d.id} {d.name} - {dataF[idx].length}
            </li>
          );
        })}
        <div className="mt-3 text-xl text-green-500">
          The Reach Potential is {total.current.size}
        </div>
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
  const obj = await res.json();
  const retweeted_by = obj.data;
  const retweeted_by_followers = [];
  for (let i = 0; i < retweeted_by.length; i++) {
    const res = await fetch(
      `https://api.twitter.com/2/users/${retweeted_by[i].id}/followers?max_results=1000`,
      {
        method: "GET",
        headers: {
          Authorization: `${process.env.BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    const obj = await res.json();
    const array = obj.data;
    retweeted_by_followers.push(array);
  }
  return { props: { retweeted_by, retweeted_by_followers } };
}

export default Analyze;
