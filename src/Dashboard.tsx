import { useEffect, useState } from "react";
import axiosInstance from "./Services/axiosService";
import { Button, Header } from "@vitelib/component-library";
export const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const callApi = async () => {
      try {
        const result = await axiosInstance.get("/photos");
        if (result && result.data) {
          setData(result.data.slice(0, 50));
        }
      } catch (error) {}
    };
    callApi();
  }, []);

  return (
    <div className="app-container">
      <Header></Header>
      <div className="fixed-header"></div>
      <Button
        primary={false}
        label={" imported button lib"}
        backgroundColor={"#754242"}
        size={"medium"}
      />

      <div className="scrollable-content">
        <div className="color-palette-wrapper">
          <div className="color-palette">
            {data && data.length ? (
              data.map((elt) => {
                return (
                  <div key={elt.id} className="color-card">
                    <img src={elt.url} height={100} width={100} />
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
