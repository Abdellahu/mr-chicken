import { useEffect, useRef } from "react";
import "./About.css";
import {
  AlignTop,
  ArrowRight,
  Check2Circle,
  Dot,
  Fire,
  Globe2,
  HandThumbsUp,
  Heart,
  People,
  Phone,
  CaretUp,
  EmojiSmile,
  CheckCircle,
  Leaf,
  Map,
  Clock,
} from "react-bootstrap-icons";
import { useTheme } from "./../Header/Brightness";
import { Link, useNavigate } from "react-router";

function About() {
  const { theme } = useTheme();
  const aboutRef = useRef(null);
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("./../Contact/Contact.js");
  };
  const goToMenu = () => {
    navigate("./../Menu/Menu.js");
  };

  useEffect(() => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);
  return (
    <div
      ref={aboutRef}
      className={theme === "dark" ? "about-page toDimAbout" : "about-page"}
    >
      <div className="container">
        <div className="welcome">
          <div className="sign-texts">
            <div className="pre-text for-about  text-favo">
              <CaretUp />
              <p>Welcome to our family since 2004</p>
            </div>
            <div className="taste taste-about ">
              <p className="you">Hey there! We're</p>
              <p className="tasteT cata-sign">Mr Chicken ✨</p>
            </div>
            <div className="difference">
              <p className="grey grey-font">
                Come as you are, leave as family! We're passionate about
                bringing you the most delicious Ethiopian flavors right here in
                the heart of Addis Ababa. Every meal is made with love,
                laughter, and a whole lot of flavor!
              </p>
            </div>
          </div>
          <div className="pre-flex-div ">
            <Link onClick={goToContact} to="/contact" className="pre-exp  ">
              {" "}
              Send us a message <ArrowRight className="toHover" />
            </Link>
            <Link to="tel: +251941250000" className="pre-find ">
              <Phone /> Call Now
            </Link>
          </div>
        </div>
        <div className="happy">
          <div className="happy-wraper row">
            <div className="photo-part col-lg-6">
              <div className="text-onPhoto">
                <p className="magic">
                  <Fire /> Where the magic happens ✨
                </p>
                <p className="magiK">Our happy kitchen!</p>
              </div>
            </div>
            <div className="thuf-part col-lg-6">
              <div className="logo-wraper for-love">
                <div className="logo-image">
                  <div className="iconals">
                    <p className="meem">
                      <Heart />
                    </p>
                  </div>
                </div>
                <div className="logo-text">
                  <div className="mr-chick-text">
                    Our Love Story 💕
                    <p className="  grey">
                      Born from a love of good food & great friends
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div className="long-text grey">
                <p>
                  You know what? Mr Chicken started because we absolutely{" "}
                  <em className="italics inlines">fell in love</em> with Ethiopian
                  food! Our founders dreamed of a cozy spot where friends and
                  families could gather, share amazing meals, and create
                  beautiful memories together. We mix grandmother's secret
                  recipes with some cool modern twists - and trust us, your
                  taste buds will thank you! 😋
                </p>
              </div>
              <div className="made row">
                <div className="visitLists lawd col-lg-6">
                  <div className="iconals">
                    <p className="meem">
                      <HandThumbsUp />
                    </p>
                  </div>
                  <div className="bySide">
                    <p className="usVisit kens">Made with Love❤️</p>
                    <p className="grey">
                      Every dish gets our chef's personal touch
                    </p>
                  </div>
                </div>
                <div className="visitLists lawd col-lg-6">
                  <div className="iconals">
                    <p className="meem">
                      <Globe2 />
                    </p>
                  </div>
                  <div className="bySide">
                    <p className="usVisit kens">Best of Both Worlds🌍</p>
                    <p className="grey">
                      Traditional recipes meet modern flair
                    </p>
                  </div>
                </div>
                <div className="visitLists lawd col-lg-6">
                  <div className="iconals">
                    <p className="meem">
                      <People />
                    </p>
                  </div>
                  <div className="bySide">
                    <p className="usVisit kens">You're Family Here👨‍👩‍👧‍👦</p>
                    <p className="grey">Come hungry, leave happy and full!</p>
                  </div>
                </div>
                <div className="visitLists lawd col-lg-6">
                  <div className="iconals">
                    <p className="meem">
                      <AlignTop />
                    </p>
                  </div>
                  <div className="bySide">
                    <p className="usVisit kens">Only the Good Stuff⭐</p>
                    <p className="grey">Fresh ingredients, every single day</p>
                  </div>
                </div>
              </div>
              <div className="karemela">
                <div className="for-space-ab">
                  <div className="pre-text small-lists for-about  text-favo">
                    <Check2Circle />
                    <p>Fresh Daily 🌱</p>
                  </div>
                </div>
                <div className="for-space-ab">
                  <div className="pre-text small-lists for-about  text-favo">
                    <Fire />
                    <p>Super Quick ⚡</p>
                  </div>
                </div>
                <div className="for-space-ab">
                  <div className="pre-text small-lists for-about  text-favo">
                    <Fire />
                    <p>100% Authentic 🔥</p>
                  </div>
                </div>
                <div className="for-space-ab">
                  <div className="pre-text for-about small-lists  text-favo">
                    <EmojiSmile />
                    <p>Always Smiling 😊</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="family">
          <div className="sign-texts esti-mokr">
            <div className="pre-text for-about dotts  text-favo">
              <Dot size={27} />
              <p>Welcome to our family since 2004</p>
              <Dot size={27} />
            </div>
            <div className="taste test-fam">
              <p className="you">Hey there!</p> <br />
              <p className="tasteT cata-sign">We're Mr Chicken</p>
              <br />
              <p>👋✨</p>
            </div>
            <div className="difference aletkew">
              <p className="grey">
                Come as you are, leave as family! <br /> We're passionate about
                bringing you the most delicious Ethiopian flavors right here in
                the heart of Addis Ababa. Every meal is made with love,
                laughter, and a whole lot of flavor!
              </p>
            </div>
          </div>
          <div className="sebsabi row">
            <div className="fresh col-md-6 col-xl-3 really new-adis">
              <div className="innerWrapper">
                <p className="meem noon">❤️</p>
                <p className="alw-top main-txt">2024</p>
                <p className="grey ahunm-grey">Founded with Love</p>
              </div>
            </div>
            <div className="fresh col-md-6 col-xl-3 really new-adis">
              <div className="innerWrapper">
                <p className="meem noon">🍽️</p>
                <p className="alw-top main-txt">50+</p>
                <p className="grey ahunm-grey">Delicius Dishes</p>
              </div>
            </div>
            <div className="fresh col-md-6 col-xl-3 really new-adis">
              <div className="innerWrapper">
                <p className="meem noon">🔥</p>
                <p className="alw-top main-txt">100%</p>
                <p className="grey ahunm-grey">Authentic Flavors</p>
              </div>
            </div>
            <div className="fresh col-md-6 col-xl-3 really new-adis">
              <div className="innerWrapper">
                <p className="meem noon">😊</p>
                <p className="alw-top main-txt  ">∞</p>
                <p className="grey ahunm-grey">Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="pre-flex-div about-flex">
            <Link onClick={goToMenu} to="/menu" className="pre-exp">
              🍽️ Lets Eat Together <ArrowRight />
            </Link>
            <Link onClick={goToContact} to="/contact" className="pre-find">
              👋 Come Say Hi!
            </Link>
          </div>
          <div className="pre-text caution text-favo">
            <p className="grey italic">
              "Life's too short for boring food! Come taste the difference that
              passion makes."
            </p>
            <br />
            <p className="boold">- The Mr Chicken Family 💚</p>
          </div>
        </div>
      </div>
      <div className="values">
        <div className="values-wraper">
          <div className="sign-texts">
            <div className="pre-text drives text-favo">
              <CheckCircle />
              <p>Our Values</p>
            </div>
            <div className="taste">
              <p className="you">What</p>
              <p className="tasteT cata-sign">Drives Us</p>
            </div>
            <div className="difference">
              <p className="grey">
                Our core principles guide every decision and shape every
                experience we create
              </p>
            </div>
          </div>
          <div className="row marginerow">
            <div className="toSpace col-sm-6 col-xl-3 items">
              <div className="fresh core">
                <div className="iconals">
                  <p className="meem nnon">
                    <HandThumbsUp size={35} />
                  </p>
                </div>
                <p className="alw-top core-bold">Culinary Excellence</p>
                <p className="grey">
                  Every dish is crafted with precision and passion using
                  authentic Ethiopian techniques
                </p>
              </div>
            </div>
            <div className="toSpace col-sm-6 col-xl-3 items">
              <div className="fresh core">
                <div className="iconals">
                  <p className="meem nnon">
                    <Leaf size={35} />
                  </p>
                </div>
                <p className="alw-top core-bold">Sustainability</p>
                <p className="grey">
                  Committed to eco-friendly practices and supporting local
                  Ethiopian farmers
                </p>
              </div>
            </div>
            <div className="toSpace col-sm-6 col-xl-3 items">
              <div className="fresh core">
                <div className="iconals">
                  <p className="meem nnon">
                    <Heart size={35} />
                  </p>
                </div>
                <p className="alw-top core-bold">Community</p>
                <p className="grey">
                  Building connections through food and celebrating Ethiopian
                  hospitality
                </p>
              </div>
            </div>
            <div className="toSpace col-sm-6 col-xl-3 items">
              <div className="fresh core">
                <div className="iconals">
                  <p className="meem nnon">
                    <AlignTop size={35} />
                  </p>
                </div>
                <p className="alw-top core-bold">Innovation</p>
                <p className="grey">
                  Constantly evolving while respecting traditional Ethiopian
                  culinary heritage
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="ready">
          <div className="ready-wraper">
            <div className="familly">
              <div className="sign-texts">
                <div className="taste">
                  <p className="you">Ready for Some</p>
                  <p className="tasteT cata-sign">Amazing Food? 🍽️</p>
                </div>
                <div className="difference">
                  <p className="grey">
                    We can't wait to welcome you to our table! Whether you're
                    grabbing a quick bite or celebrating with friends, we've got
                    the perfect spot (and dish) waiting for you.
                  </p>
                </div>
              </div>

              <div className="pre-flex-div last-ab">
                <Link onClick={goToMenu} to="/menu" className="pre-exp">
                  Show Me the Menu! <ArrowRight />
                </Link>
                <Link onClick={goToContact} to="/contact" className="pre-find">
                  <Map /> Find Us!
                </Link>
              </div>

              <div className="row lastItem">
                <div className="toSpace  col-md-4 items">
                  <div className="fresh ab-foot">
                    <div className="iconals">
                      <p className="meem">
                        <Heart />
                      </p>
                    </div>
                    <p className="alw-top laste">📍 Find Us Here</p>
                    <p className="grey glaste">Bole, Addis Ababa</p>
                    <p className="grey">Right in the heart of the city!</p>
                  </div>
                </div>
                <div className="toSpace col-md-4 items">
                  <div className="fresh ab-foot">
                    <div className="iconals">
                      <p className="meem">
                        <Clock />
                      </p>
                    </div>
                    <p className="alw-top laste">🕐 We're Open</p>
                    <p className="grey glaste">Daily 10AM - 10PM</p>
                    <p className="grey">Come hungry, any time!</p>
                  </div>
                </div>
                <div className="toSpace col-md-4 items">
                  <div className="fresh ab-foot">
                    <div className="iconals">
                      <p className="meem">
                        <Phone />
                      </p>
                    </div>
                    <p className="alw-top laste">📞 Give Us a Ring</p>
                    <p className="grey glaste">+251 94 125 0000</p>
                    <p className="grey">We love hearing from you!</p>
                  </div>
                </div>
              </div>

              <div className="pre-text caution text-favo">
                <p className="grey italic">
                  "Life's too short for boring food! Come taste the difference
                  that passion makes."
                </p>
                <br />
                <p className="boold">- The Mr Chicken Family 💚</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
