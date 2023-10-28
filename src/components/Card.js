export const Card = (props) => {
  return (
    <div className="lcard">
      <img className="pimg" src={props.img} alt="food" />
      <p className="l-cardTitle">{props.title}</p>
      <p className="l-cardText">
        PLorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard...
      </p>
      <button className="l-btn aboutBtn H-btn">Read More</button>
    </div>
  );
}