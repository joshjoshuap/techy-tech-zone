const Section = (props) => {
  return (
    <div className="py-5">
      <h1 className="display-2">{props.sectionTitle}</h1>
      {props.children}
    </div>
  );
};

export default Section;
