function Frame({title, content}) {
  return (
    <div className="frame-container">
        <h1>{title}</h1>
         {/*Verander content naar slot  */}
        {content}
    </div>
  );
}

export default Frame