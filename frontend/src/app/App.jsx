import React from "react";

import './App.css';
import VerticalContainer from '../vertical-container/VerticalContainer';
import CreateContentBox from '../content-box/CreateContentBox';
import ReadContentBox from '../content-box/ReadContentBox';
import UpdateContentBox from '../content-box/UpdateContentBox';
import DeleteContentBox from '../content-box/DeleteContentBox';

export function Home() {
  const [records, setRecords] = React.useState([]);

 const API_BASE_URL = "/api";

  React.useEffect(() => {
    fetch(`${API_BASE_URL}/gym/records`, {
      method: "GET"
    }).then(response => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    }).then(data => {
      if (data !== null) {
        setRecords(data);
      }
    });
  }, []);

  const handleCreateSubmit = (exercise, weight) => {
    fetch(`${API_BASE_URL}/gym/records`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ exercise, weight })
    }).then(response => {
      if (response.status === 201) {
        return response.json();
      }
      return null;
    }).then(data => {
      if (data !== null) {
        setRecords([...records, data]);
      }
    });
  };

  const handleUpdateSubmit = (recordToUpdate) => {
    fetch(`${API_BASE_URL}/gym/records/${recordToUpdate.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        exercise: recordToUpdate.exercise,
        weight: recordToUpdate.weight
      })
    }).then(response => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    }).then(data => {
      if (data !== null) {
        setRecords(records.map(record =>
          record.id === data.id
            ? { ...record, exercise: data.exercise, weight: data.weight }
            : record
        ));
      }
    });
  };

  const handleDeleteSubmit = (id) => {
    fetch(`${API_BASE_URL}/gym/records/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" }
    }).then(response => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    }).then(data => {
      if (data !== null) {
        setRecords(records.filter(record => record.id !== data.id));
      }
    });
  };

  return (
    <div className="main-component">
      <div>
        <VerticalContainer>
          <div>
            <h2>Create</h2>
            <CreateContentBox onSubmit={handleCreateSubmit} />
          </div>
        </VerticalContainer>
      </div>

      <div>
        <VerticalContainer>
          <div>
            <h2>Read</h2>
            {records.map(record => (
              <ReadContentBox
                key={`${record.id}-${record.exercise}-${record.weight}`}
                content={record}
              />
            ))}
          </div>
        </VerticalContainer>
      </div>

      <div>
        <VerticalContainer>
          <div>
            <h2>Update</h2>
            {records.map(record => (
              <UpdateContentBox
                key={`${record.id}-${record.exercise}-${record.weight}`}
                onSubmit={handleUpdateSubmit}
                content={record}
              />
            ))}
          </div>
        </VerticalContainer>
      </div>

      <div>
        <VerticalContainer>
          <div>
            <h2>Delete</h2>
            {records.map(record => (
              <DeleteContentBox
                key={`${record.id}-${record.exercise}-${record.weight}`}
                onSubmit={handleDeleteSubmit}
                content={record}
              />
            ))}
          </div>
        </VerticalContainer>
      </div>
    </div>
  );
}

export default Home;
