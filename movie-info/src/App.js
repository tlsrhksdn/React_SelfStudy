import {useState} from "react";

function App() {
  const [toDo, setToDO] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
	  event.preventDefault();
	  if (toDO === ""){
		  return;
	  }
	  setToDo("");
	  setToDos(currentArray => [toDo, ]);
  };
  console.log(toDos);
  return (
	<div>
		  <form onSubmit = {onSubmit}>
		  	<input
				onChange = {onChange}
				value = {toDo}
				type = "text"
				placeholder = "Write your to do..."
		  </form>
			

	</div>
  );
}

export default App;
