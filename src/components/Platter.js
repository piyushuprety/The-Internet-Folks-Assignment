import { Card } from "./Card"

export const Platter = (props) => {  
  return (
    <div className="platterHolder">
      <div className="pCards">
        {props.data.map((ele, key) => {
          return (
            <div id={key}>
              <Card img={ele.img} title={ele.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}