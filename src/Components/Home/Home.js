import { 
  useEffect,
  useRef,
  useState,
} from "react";
import "./Home.css";
import {
  AlignTop,
  ArrowBarRight,
  ArrowRight,
  Check2Circle,
  People,
  Star,
  HandThumbsUp,
  Heart,
  Map,
  Phone,
  Clock,
  Chat,
  Dot,
  StarFill,
  Plus,
  Fire,
} from "react-bootstrap-icons";
import MapComponent from "./MapComponent";
import { Link, useNavigate } from "react-router";
import { useTheme } from "./../Header/Brightness";
import FeedBack from "./FeedBack";
import FeedDataProvider from "./FeedDataProvider";

function Home() {
  const [feedFormVisible, setFeedFormVisible] = useState(false);
  const { theme } = useTheme();
  const homeRef = useRef(null);
  const navigate = useNavigate();
  const CloseFeedForm = (message) => {
    setFeedFormVisible(message);
  };

  const OpenFeedForm = () => {
    setFeedFormVisible(true);
  };

  const goToContact = () => {
    navigate("./../Contact/Contact.js");
  };
  const goToMenu = () => {
    navigate("./../Menu/Menu.js");
  };
 
  useEffect(() => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);
  return (
    <div
      ref={homeRef}
      className={theme === "dark" ? "home-page toDimHome" : "home-page"}
    >
      <div className="premium">
        <div className="pre-box-wraper">
          <div className="pre-text for-about firstOffAll  text-favo">
            <p>PREMIUM ETHIOPIAN CUISINE</p>
          </div>
          <div className="crispy">
            <p>Crispy. Juicy.</p>
            <p className="redcol">Always Fire-Grilled.</p>
          </div>
          <div className="pre-desc grey">
            <p>
              Authentic Ethiopian chicken crafted with premium spices and
              traditional techniques for an unforgettable dining experience.
            </p>
          </div>
          <div className=" mart pre-flex-div">
            <Link onClick={goToMenu} to="/menu" className="pre-exp">
              {" "}
              Explore Menu <ArrowRight />
            </Link>
            <a href="#location" className="pre-find">
              Find Location
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="quality">
          <div className="whyDiv">
            <div className="choose">
              <p className="choose-text">
                <ArrowBarRight className="arrower" />
                Why 95% Choose Us Again
              </p>
            </div>
            <div className="taste">
              <p className="you">Quality You Can</p>
              <p className="tasteT">Taste & Trust</p>
            </div>

            <div className="difference">
              <p className="grey">
                Experience the difference with our commitment to quality,
                freshness, and authentic Ethiopian flavors
              </p>
            </div>
          </div>

          <div className="qualityList">
            <div className="qualityWraper row">
              <div className="toSpace col-md-6 col-xl-3 items">
                <div className="fresh">
                  <div className="iconals">
                    <p className="meem">
                      <Check2Circle />
                    </p>
                  </div>
                  <p className="alw-top">Always Fresh</p>
                  <p className="grey">
                    Daily sourced ingredients, prepared fresh every morning
                  </p>
                  <hr />
                  <p className="as-btn"> 0 Preservatives</p>
                </div>
              </div>
              <div className="toSpace col-md-6 col-xl-3 items">
                <div className="fresh">
                  <div className="iconals">
                    <p className="meem">
                      <Clock />
                    </p>
                  </div>
                  <p className="alw-top">Quick Service</p>
                  <p className="grey">
                    Fast preparation without compromising on quality
                  </p>
                  <hr />
                  <p className="as-btn"> Under 10 mins</p>
                </div>
              </div>
              <div className="toSpace col-md-6 col-xl-3 items">
                <div className="fresh">
                  <div className="iconals">
                    <p className="meem">
                      <People />
                    </p>
                  </div>
                  <p className="alw-top">Family Recipes</p>
                  <p className="grey">
                    Traditional Ethiopian flavors passed down generations
                  </p>
                  <hr />
                  <p className="as-btn"> Since 1960s</p>
                </div>
              </div>
              <div className="toSpace col-md-6 col-xl-3 items">
                <div className="fresh">
                  <div className="iconals">
                    <p className="meem">
                      <AlignTop />
                    </p>
                  </div>
                  <p className="alw-top">Premium Quality</p>
                  <p className="grey">
                    Only the finest ingredients and expert preparation
                  </p>
                  <hr />
                  <p className="as-btn"> Top Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="signiture">
          <div className="sign-texts lerase">
            <div className="pre-text graLight text-favo">
              <Star />
              <p className="grey">Customer Favorites</p>
            </div>
            <div className="taste">
              <p className="you">Explore Our</p>
              <p className="tasteT cata-sign">Signiture Catagories</p>
            </div>
            <div className="difference">
              <p className="grey">
                Discover our carefully crafted selection of authentic Ethiopian
                dishes, from traditional favorites to modern innovations
              </p>
            </div>
          </div>
          <div className="dishesMenu container row">
            <div className="for-space col-md-6 col-xl-4 col-xxl-3">
              <div className="eachDish ">
                <Link
                  to="/menu"
                  className="EachDishWraper written-home leHover "
                >
                  <div className="  home-visual visualHomeA1">
                    <div className="iconals home-iconals">
                      <p className="home-meem">
                        <HandThumbsUp />
                      </p>

                      <p className="most">Most Popular</p>
                    </div>
                  </div>

                  <div className="writen home-writen">
                    <div className="name">
                      <p>Main Dish</p>
                    </div>
                    <div className="description">
                      <p>Delicious chicken dishes</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="for-space col-md-6 col-xl-4 col-xxl-3">
              <div className="eachDish ">
                <Link
                  to="/menu"
                  className="EachDishWraper written-home leHover"
                >
                  <div className="  home-visual visualHomeA2">
                    <div className="iconals home-iconals">
                      <p className="home-meem">
                        <HandThumbsUp />
                      </p>
                    </div>
                  </div>

                  <div className="writen home-writen">
                    <div className="name">
                      <p>Fasting</p>
                    </div>
                    <div className="description">
                      <p>Fasting dishes</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="for-space col-md-6 col-xl-4 col-xxl-3">
              <div className="eachDish ">
                <Link
                  to="/menu"
                  className="EachDishWraper written-home leHover"
                >
                  <div className="  home-visual visualHomeA3">
                    <div className="iconals home-iconals">
                      <p className="home-meem">
                        <HandThumbsUp />{" "}
                      </p>
                    </div>
                  </div>

                  <div className="writen home-writen">
                    <div className="name">
                      <p>Mojito</p>
                    </div>
                    <div className="description">
                      <p>Refreshing drinks</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="for-space col-md-6 col-xl-4 col-xxl-3">
              <div className="eachDish abstract">
                <Link
                  to="/menu"
                  className="EachDishWraper simpleHight   leHover"
                >
                  <div className="writen home-writen">
                    <div className="name ">
                      <p>Juice</p>
                    </div>
                    <div className="description descHere">
                      <p>Juice </p>
                      <div className="dishers">
                        <p className="no-dishes grey">9 dishes</p>
                        <p className="viewMenu">
                          View Menu <ArrowRight />
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="for-space col-md-6 col-xl-4 col-xxl-3">
              <div className="eachDish ">
                <Link to="/menu" className="EachDishWraper simpleHight leHover">
                  <div className="writen home-writen">
                    <div className="name">
                      <p>Drink</p>
                    </div>
                    <div className="description descHere">
                      <p>Other drinks</p>
                      <div className="dishers">
                        <p className="no-dishes grey">23 dishes</p>
                        <p className="viewMenu">
                          View Menu <ArrowRight />
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="for-space col-md-6 col-xl-4 col-xxl-3">
              <div className="eachDish ">
                <Link to="/menu" className="EachDishWraper simpleHight leHover">
                  <div className="writen home-writen">
                    <div className="name">
                      <p>Extra</p>
                    </div>
                    <div className="description">
                      <p>Extra sauces and dips</p>
                      <div className="dishers">
                        <p className="no-dishes grey">15 dishes</p>
                        <p className="viewMenu">
                          View Menu <ArrowRight />
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="chef">
          <div className="sign-texts lerase">
            <div className="pre-text yelloo text-favo">
              <Fire color="#ff5429" />
              <p>Chef's Selection</p>
            </div>
            <div className="taste">
              <p className="you">Signiture Chicken</p>
              <p className="tasteT cata-sign">Masterpieces</p>
            </div>
            <div className="difference">
              <p className="grey">
                Our most popular chichen dishes, prepared with authentic
                Ethiopian spices and fire-grilled to perfection
              </p>
            </div>
          </div>

          <div className="dishesMenu container row">
            <div className="for-space col-md-6 col-xl-4 col-xxl-3">
              <div className="eachDish ">
                <div className="EachDishWraper written-home">
                  <div className="visual visualV1 home-visual">
                    <div className="iconals home-iconals">
                      <p className="most firer">🔥 Trending #1</p>
                      <p className="home-meem esat">
                        <Fire size={18} color="red" />
                      </p>
                    </div>
                    <p className="most monster">
                      {" "}
                      <StarFill color="black" /> Most Popular
                    </p>
                  </div>

                  <div className="writen home-writen">
                    <div className="name namisha">
                      <p>Special Shawarma</p>
                      <p className="rdrd">630.00</p>
                    </div>
                    <div className="description">
                      <p className="grey">
                        A bold twist on a classic favorite! Tender, marinated
                        meat—grilled to juicy...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="for-space col-md-6 col-xl-4 col-xxl-3">
              <div className="eachDish ">
                <div className="EachDishWraper written-home">
                  <div className="visual visualV2 home-visual">
                    <div className="iconals home-iconals">
                      <p className="most yell">⭐ Stuff Pick</p>
                      <p className="home-meem esat">
                        <Fire size={18} color="red" />
                      </p>
                    </div>
                  </div>

                  <div className="writen home-writen">
                    <div className="name namisha">
                      <p>Half Grill</p>

                      <p className="rdrd">1250.00</p>
                    </div>
                    <div className="description">
                      <p className="grey">
                        Perfectly grilled half chicken, marinated in a blend of
                        bold spices and slow-cooked..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="for-space col-md-6 col-xl-4 col-xxl-3">
              <div className="eachDish ">
                <div className="EachDishWraper written-home">
                  <div className="visual visualV3 home-visual">
                    <div className="iconals home-iconals">
                      <p className="most gree">🌱 Most Ordered</p>
                      <p className="home-meem esat">
                        <Fire size={18} color="red" />
                      </p>
                    </div>
                  </div>

                  <div className="writen home-writen">
                    <div className="name namisha">
                      <p>Half Roasted</p>
                      <p className="rdrd">1420.00</p>
                    </div>
                    <div className="description">
                      <p className="grey">
                        Succulent half chicken, slow-roasted to perfection with
                        a rich blend...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="location row">
          <div className="forrow col-lg-6">
            <div className="visit">
              <div className="sign-texts demo-forHere">
                <div className="pre-text graLight text-favo">
                  <Heart />
                  <p>Visit Us Today</p>
                </div>
                <div className="taste again-here">
                  <p className="you">Experience Authentic</p>
                  <p className="tasteT cata-sign">Ethiopian Cuisine</p>
                </div>
                <div className="difference">
                  <p className="grey">
                    Join us in our warm, welcoming atmosphere where traditional
                    Ethiopian flavors meet modern dining. Every visit promises
                    an unforgatable culinary journey.
                  </p>
                </div>
              </div>
            </div>
            <div className="wholeVisit">
              <div className="visitLists">
                <div className="iconals">
                  <p className="meem">
                    <Map />
                  </p>
                </div>
                <div className="bySide">
                  <p className="usVisit">Visit Us</p>
                  <p className="grey">Bole, Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className="visitLists">
                <div className="iconals">
                  <p className="meem blues">
                    <Phone />
                  </p>
                </div>
                <div className="bySide">
                  <p className="usVisit">Call Us</p>
                  <p className="grey">+25194 125 0000</p>
                </div>
              </div>
              <div className="visitLists">
                <div className="iconals">
                  <p className="meem greeys">
                    <Clock />
                  </p>
                </div>
                <div className="bySide">
                  <p className="usVisit">Open Hours</p>
                  <p className="grey">Daily 10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
            <div className="get-dir">
              <div className="pre-flex-div">
                <Link onClick={goToContact} to="/contact" className="pre-exp">
                  <ArrowBarRight /> Get Directions <ArrowRight />
                </Link>
                <Link to="tel: +251941250000" className="pre-find fullWidth">
                  <Phone /> Call Now <Chat />
                </Link>
              </div>
            </div>
          </div>
          <div className="local-place col-lg-6" id="location">
            <div className="place-wraper">
              <div className="mr-lock">
                <div className="iconals">
                  <p className="meem">
                    <Map />
                  </p>
                </div>
                <div className="text-part">
                  <p className="mr-part">Mr. Chicken Location</p>
                  <p className="dec-parts grey">Bole, Addis Ababa</p>
                </div>
              </div>
              <div className="real-lock">
                <MapComponent />
              </div>
              <div className="easy-park">
                <div className="park grey">Easy parking avilable</div>
                <div className="open">
                  <Dot size={38} />
                  Open Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeedDataProvider />
      <div className="feed-back row">
        {feedFormVisible ? (
          <FeedBack className="real-f" onMessage={CloseFeedForm} />
        ) : (
          <div className="feedBack-wraper">
            <div className="iconals">
              <p className="meem">
                <Chat />
              </p>
            </div>
            <p className="alw-top">Have feedback?</p>
            <p className="grey">
              We'd love to hear about your experience with our product
            </p>
            <Link onClick={OpenFeedForm} className="pre-exp kasfelege">
              <Plus size={27} className="plus-sign" /> Leave Feedback
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
