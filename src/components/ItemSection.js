const Section = (props) => {
  return (
    <div className="py-5">
      <h1 className="display-2">{props.sectionTitle}</h1>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {props.children}
      </div>
    </div>
  );
};

export default Section;
