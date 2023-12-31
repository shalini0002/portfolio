import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import header from "../assets/images/header-img.svg";
import "animate.css";
// import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["web Developer", "web Designer", "UI/UX Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <div className="col-md-6 ">
           
                  <div
                    className={
                      isVisible ? "animated__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>
                      {`Hi I'm Shalini `}
                      <span className="wrap">{text}</span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus, cum. Eum quasi maxime dolorum natus iure
                      aspernatur culpa non debitis.
                    </p>
                    <button onClick={() => console.log("connect")}>
                      Let's connect <ArrowRightCircle size={25} />
                    </button>
                  </div>
               
            
            </div>
            <div className=" col-md-6 ">
              <img src={header} alt="Header Img"></img>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};
