import { useState } from 'react';
import PropTypes from 'prop-types';

const Color = ({ color, setSelectedColor }) => {
  return (
    <div
      className={color}
      onClick={() => setSelectedColor(color)}
      style={{ backgroundColor: color, width: '50px', height: '50px', margin: '5px'}}
      ></div>
  )
};

Color.propTypes = {
  color: PropTypes.string.isRequired,
  setSelectedColor: PropTypes.func.isRequired,
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div style={{ backgroundColor: selectedColor, width: '50px', height: '20px' }}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="green" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="violet" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;