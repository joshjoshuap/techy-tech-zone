const Section = (props) => {
  return (
    <div className="mb-5">
      <h1 className="display-2 mb-3">{props.sectionTitle}</h1>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {props.children}
      </div>
    </div>
  );
};

export default Section;
