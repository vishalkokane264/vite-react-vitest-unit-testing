import { useEffect, useState } from "react";
import callGetApi from "../Services/apiService";

export const DisplayRecords = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      resolve(
        callGetApi({
          url: "https://jsonplaceholder.typicode.com/comments?postId=1",
          body: null,
          headers: null,
          params: null,
        })
      );
    })
      .then((response) => setData(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data && data.length ? (
        <div>
          <h3>displaying data</h3>
          {data && data.length
            ? data.map((elt) => {
                return (
                  <div className="data-display" key={elt.id}>
                    <p>{elt.id}</p>
                    <p>{elt.email}</p>
                  </div>
                );
              })
            : null}
        </div>
      ) : (
        <p>no data</p>
      )}
    </div>
  );
};

export default DisplayRecords;
