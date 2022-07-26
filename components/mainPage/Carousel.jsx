import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/mainPage/carousel/industry_4.jpg"
          alt="First slide"
          style={{ height: "80vh", width: "100vw" }}
        />
        <Carousel.Caption>
          <h1>INNOVATE, INCULCATE and INSPIRE</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/mainPage/carousel/welding_engineer.jpg"
          alt="Second slide"
          style={{ height: "80vh", width: "100vw" }}
        />

        <Carousel.Caption>
          <h1>
            Create the Unseen
            <br />
            Explore the unknown
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/mainPage/carousel/future-work-digital-technology-economy.jpg"
          alt="Third slide"
          style={{ height: "80vh", width: "100vw" }}
        />

        <Carousel.Caption>
          <h1>
            Stretch your limits of knowledge
            <br />
            and create new beginnings
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/mainPage/carousel/teamwork-img.jpg"
          alt="Fourth slide"
          style={{ height: "80vh", width: "100vw" }}
        />

        <Carousel.Caption>
          <h1>Teamwork makes the dream work</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/mainPage/carousel/steel-pipelines-cables-plant.jpg"
          alt="Fifth slide"
          style={{ height: "80vh", width: "100vw" }}
        />

        <Carousel.Caption>
          <h1>Stay on the Forefront of Innovation</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
