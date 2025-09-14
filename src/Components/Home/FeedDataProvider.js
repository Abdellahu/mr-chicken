import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight, StarFill } from "react-bootstrap-icons";

function FeedDataProvider() {
  const containerRef = useRef(null);
  const feedArray = [
    ["Samuel Habtamu", "4", '"lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit"', "Sep 5, 2025" ], 
    ["Kalkidan Shifu", "2", '"lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit"', "Sep 1, 2025" ], 
    ["Abraham Tolosa", "4", '"lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit"', "Oct 5, 2025" ], 
    ["Chala Zare", "5", '"lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit"', "Apr 25, 2025" ], 
    ["Zele Kewtiw", "3", '"lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit"', "Feb 1, 2025" ], 
    ["Xavi Mossaw", "5", '"lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit"', "Jan 15, 2025" ]
]

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 100;
    }
  };
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 100;
    }
  };
   
  return (
    <div className="feeds">
      <div className="feeds-wraper">
        <div  className="real-feeds" ref={containerRef}>
        {feedArray.map((feed, index) => (
            <div key={index} className="feed">
              <div className="feed-wraper">
                <div className="feed-head">
                  <div className="name-letter">
                    <p className="circle-head">
                      {feed[0].charAt(0)}
                    </p>
                    <p className="rating-pad">
                      <StarFill />
                      {feed[1]}
                    </p>
                  </div>
                  <div className="name-feeder">
                    <p>{feed[0]}</p>
                  </div>
                </div>
                <div className="feed-desc">
                  <p className="italics grey">{feed[2]}</p>
                </div>
                <div className="feed-date">
                  <hr />
                  <p className="grey">{feed[3]}</p>
                </div>
              </div>
            </div>
        ))}
        </div>
        
        <div className="feedBtn">
          <div className="Ido">
            <button className="scrollBtn1" onClick={scrollLeft}>
              <ArrowLeft />
            </button>
            <button className="scrollBtn2" onClick={scrollRight}>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedDataProvider;
