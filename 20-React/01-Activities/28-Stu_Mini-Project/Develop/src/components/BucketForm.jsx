// import { useState } from 'react';

// function BucketForm(props) {
//   const [input, setInput] = useState('');
//   let [eagerness, setEagerness] = useState('');

//   // TODO: Use this array in the return statement below
//   const eagernessLevel = ['high', 'medium', 'low']

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!eagerness) {
//       eagerness = 'low';
//     }

//     props.onSubmit({
//       id: Math.random(Math.floor() * 1000),
//       text: input,
//       eagerness: eagerness,
//     });

//     setInput('');
//     setEagerness('');
//   };

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };

//   // First we check to see if "edit" prop exists. If not, we render the normal form
//   // If the prop "edit" exists, we know to render the update form instead
//   return !props.edit ? (
//     <div>
//       <form className="bucket-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add to your bucket list"
//           value={input}
//           name="text"
//           className="bucket-input"
//           onChange={handleChange}
//         ></input>
//         <div className="dropdown">
//           <button className={`dropbtn ${eagerness}`}>
//             {eagerness || 'Priority'}
//           </button>
//           <div className="dropdown-content">
//             {/* TODO: Add an onClick event that will set the corresponding eagerness level from the `eagernessLevel` array */}
//             <p onClick={}>Must do</p>
//             <p onClick={}>Want to do</p>
//             <p onClick={}>Take it or leave it</p>
//           </div>
//         </div>
//         <button className="bucket-button">Add bucket list item</button>
//       </form>
//     </div>
//   ) : (
//     <div>
//       <h3>Update entry: {props.edit.value}</h3>
//       <form className="bucket-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder={props.edit.value}
//           value={input}
//           name="text"
//           className="bucket-input"
//           onChange={handleChange}
//         ></input>
//         <div className="dropdown">
//           <button className={`dropbtn ${eagerness}`}>
//             {eagerness || 'Priority'}
//           </button>
//           <div className="dropdown-content">
//             {/* TODO: Add an onClick event that will set the corresponding eagerness level from the `eagernessLevel` array */}
//             <p onClick={}>Must do</p>
//             <p onClick={}>Want to do</p>
//             <p onClick={}>Take it or leave it</p>
//           </div>
//         </div>
//         <button className="bucket-button">Update</button>
//       </form>
//     </div>
//   );
// }

// export default BucketForm;

import { useState } from 'react';

function BucketForm(props) {
  const [input, setInput] = useState('');
  const [eagerness, setEagerness] = useState('');

  const eagernessLevel = ['high', 'medium', 'low'];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eagerness) {
      setEagerness('low');
    }

    props.onSubmit({
      id: Math.random().toString(36).substr(2, 9),
      value: input,
      eagerness: eagerness,
    });

    setInput('');
    setEagerness('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleEagernessChange = (level) => {
    setEagerness(level);
  };

  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        />
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {eagernessLevel.map((level, index) => (
              <p key={index} onClick={() => handleEagernessChange(level)}>
                {level}
              </p>
            ))}
          </div>
        </div>
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        />
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {eagernessLevel.map((level, index) => (
              <p key={index} onClick={() => handleEagernessChange(level)}>
                {level}
              </p>
            ))}
          </div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default BucketForm;