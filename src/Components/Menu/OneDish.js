import { HandThumbsUpFill } from "react-bootstrap-icons";

function OneDish({ passer }) {
  return (
    <div className="dishesMenu container row">
      {passer.map((dish) => (
        <div
          key={dish[0]}
          className="for-space col-md-6 col-xl-4 col-xxl-3"
        >
          <div className="eachDish ">
            <div className="EachDishWraper">
              <div className="visual">
                <img
                  className="visualImage"
                  src={dish[5]}
                  alt="DishImage"
                />
              </div>
              <div className="writen">
                <div className="type">
                  <HandThumbsUpFill size={15} />{" "}
                  <p className="disher">{dish[1]}</p>
                </div>
                <div className="name">
                  <p>{dish[2]}</p>
                </div>
                <div className="description">
                  <p>{dish[3]}</p>
                </div>
                <div className="price">
                  <hr />
                  <div className="priceWrap">
                    <p className="realPrice">
                      ETB {dish[4] }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OneDish;
