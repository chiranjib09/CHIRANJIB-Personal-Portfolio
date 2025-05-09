import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>With expertise in Web Development, I build fast, scalable, and dynamic sites that bring brands to life online.<br></br>In Brand Identity, I help businesses define their visual voice — creating cohesive branding systems that are memorable, impactful, and aligned with their mission.
                        Through Logo Design, I deliver distinctive, timeless logos that capture the essence of a brand in a single glance, ensuring strong first impressions and lasting recognition.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
    <img src={meter1} alt="Web Development Icon" />
    <h5>Web Development</h5>
</div>
<div className="item">
    <img src={meter2} alt="Brand Identity Icon" />
    <h5>Brand Identity</h5>
</div>
<div className="item">
    <img src={meter3} alt="Logo Design Icon" />
    <h5>Logo Design</h5>
</div>
<div className="item">
    <img src={meter1} alt="Web Development Icon" />
    <h5>Web Development</h5>
</div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Colorful sharp design background" />

    </section>
  )
}
