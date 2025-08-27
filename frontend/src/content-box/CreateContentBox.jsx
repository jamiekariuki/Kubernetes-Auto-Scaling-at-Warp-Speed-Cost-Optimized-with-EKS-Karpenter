import React from 'react';
import './ContentBox.css';

const CreateContentBox = ({ onSubmit }) => {
  const [exercise, setExercise] = React.useState("");
  const [weight, setWeight] = React.useState(0);

  const handleSubmit = () => {
    onSubmit(exercise, weight || 0);
    setExercise('');
    setWeight(0);
  };

  return (
    <div className="content-box">
      <input
        type="text"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        placeholder="Exercise name"
      />
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(parseInt(e.target.value))}
        placeholder="Weight in Kg"
      />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};

export default CreateContentBox;
