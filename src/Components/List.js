import { React, useState, useEffect } from "react";
// import data from "./listData.json";
import Dialogue from './Dialogue'

function List(props) {
  //const API_URL = "https://jsonplaceholder.typicode.com/posts/";
  const API_URL = "http://dummy.restapiexample.com/api/v1/employees";
  const [masterDataSource, setMasterDataSource] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((response) => {
        setMasterDataSource(response.data);

      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filteredData = masterDataSource.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.employee_name.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul>
      {filteredData.map((user) => (
        <Dialogue user={user} key={user.id} />
      ))}
    </ul>
  );
}

export default List;
