import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-30%"
          src="https://img.freepik.com/premium-vector/mega-sale-advertiving-banner-with-3d-illustration-dofferent-home-smart-electronic-devices_348818-574.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.stylostreet.com/wp-content/uploads/2023/05/Outfitters-Sale-5-390x205.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/previews/002/179/047/original/website-landing-page-mockup-for-e-commerce-free-vector.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;