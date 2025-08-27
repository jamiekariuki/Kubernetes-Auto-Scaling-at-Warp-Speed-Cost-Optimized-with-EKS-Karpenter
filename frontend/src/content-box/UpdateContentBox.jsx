import React from 'react';
import './ContentBox.css';

const UpdateContentBox = ({ onSubmit, content }) => {
  const [record, setRecord] = React.useState(content);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  const handleSubmit = () => {
    onSubmit(record);
  };

  return (
    <div className="content-box">
      
      <input
        type="text"
        value={record.exercise}
        onChange={(e) => setRecord({ ...record, exercise: e.target.value })}
        placeholder="Exercise name"
      />
      <input
        type="number"
        value={record.weight}
        onChange={(e) => setRecord({ ...record, weight: parseInt(e.target.value) })}
        placeholder="Weight in Kg"
      />
      <p>Time: {formatDate(record.date)}</p>
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
};

export default UpdateContentBox;

