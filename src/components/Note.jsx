const Note = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="note">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Note;
