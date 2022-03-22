import { React, useState, useEffect } from "react";
import UpdateDialogue from "./UpdateDialogue";

function List(props) {
  const API_URL = "http://dummy.restapiexample.com/api/v1/employees";
  const [EmployeeData, setEmployeeData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [postNumber] = useState(7);

  const currentPageNumber = pageNumber * postNumber - postNumber;

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((response) => {
        setEmployeeData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filteredData = EmployeeData.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.employee_name.toLowerCase().includes(props.input)
    }
  });

  const paginatedData = filteredData.splice(currentPageNumber, postNumber);
  
  return (
    <>
      <ul>
        
        {paginatedData.map((user) => (
          <UpdateDialogue user={user} key={user.id} />
        ))}
      </ul>
      <div>Page {pageNumber} </div>
      <div>
        <button disabled={pageNumber==1} style={{marginRight:10}} onClick={handlePrev}>prev</button>
        <button disabled={pageNumber*postNumber>paginatedData} onClick={handleNext}>next</button>
      </div>
    </>
  );
}

export default List;
