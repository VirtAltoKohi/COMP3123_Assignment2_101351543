import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ListEmployees() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/v1/emp/employees')
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        setError('Error fetching data: ', error);
        console.error(error);
      }
    };

    fetchData();
    
  }, [])

  const renderTable = () => {
    if (!data) {
      return null;
    }

    // Extract keys from the data object
    const keys = Object.keys(data);

    return (
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {keys.map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{data[key].firstName}</td>
              <td>{data[key].lastName}</td>
              <td>{data[key].email}</td>
              <td>{data[key].gender}</td>
              <td>${data[key].salary['$numberDecimal']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="App">
      <h1>Data from backend:</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        renderTable()
      )}
    </div>
  );
}

export default ListEmployees;
