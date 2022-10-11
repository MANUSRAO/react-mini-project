import { useState } from "react";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [clicked, setClicked] = useState(false);
  //   Handling Input
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  //   Handling Submit
  const submitHandler = (event) => {
    if (note.title === "" && note.content === "") return;
    props.onSubmit(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  };
  return (
    <div className="createArea">
      {clicked && (
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={changeHandler}
          value={note.title}
        ></input>
      )}
      <textarea
        type="text"
        placeholder="Take a note"
        rows="1"
        cols="7"
        name="content"
        onChange={changeHandler}
        value={note.content}
        onClick={(event) => {
          setClicked(true);
          event.target.rows = 3;
        }}
      ></textarea>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default CreateArea;
