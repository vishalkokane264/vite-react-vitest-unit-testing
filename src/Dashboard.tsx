import { useEffect, useState } from "react";
import axiosInstance from "./Services/axiosService";
export const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const callApi = async () => {
      try {
        const result = await axiosInstance.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        if (result && result.data) {
          setData(result.data.slice(0, 50));
        }
      } catch (error) {}
    };
    const callProductApi = async () => {
      try {
        const result = await axiosInstance.get(
          "https://dummyjson.com/products"
        );
        if (result) {
          console.log(result);
          setData(result.data.products.slice(0, 50));
        }
      } catch (error) {}
    };
    // callApi();
    callProductApi();
  }, []);

  return (
    <div className="app-container">
      <div className="fixed-header"></div>
      <div className="scrollable-content">
        <div className="color-palette-wrapper">
          <div className="color-palette">
            {data && data.length ? (
              data.map((elt) => {
                return (
                  <div key={elt.id} className="color-card">
                    <img src={elt.thumbnail} height={200} width={200} />
                    {/* <h5>{elt.title}</h5> */}
                  </div>
                );
              })
            ) : (
              <div>Colors getting fetched</div>
            )}
          </div>
        </div>
      </div>

      <footer className="fixed-footer">
        <h1>f1</h1>
      </footer>
    </div>
  );

  //   return (
  //     <div>
  //       <div>
  //         <h4>Images</h4>
  //       </div>
  //       <div className="color-palette-wrapper">
  //         <div className="color-palette">
  //           {data && data.length ? (
  //             data.map((elt) => {
  //               return (
  //                 <div key={elt.id} className="color-card">
  //                   <img src={elt.url} height={100} width={100} />
  //                   {/* <h5>{elt.title}</h5> */}
  //                 </div>
  //               );
  //             })
  //           ) : (
  //             <div>placeholder</div>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   );
};
export default Dashboard;
