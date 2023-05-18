import about1 from "../images/about1.png";
import about2 from "../images/about2.png";
import about3 from "../images/about3.png";
import about4 from "../images/about4.png";
import about5 from "../images/about5.png";
import about6 from "../images/about6.png";
import about7 from "../images/about7.png";
import about8 from "../images/about8.png";

function About() {
  return (
    <div className="aboutcontainer">
      <section className="snap-section">
        <img className="h-screen" src={about1} alt="" />
      </section>
      <section className="snap-section">
        <img className="h-screen" src={about2} alt="" />
      </section>
      <section className="snap-section">
        <img className="h-screen" src={about3} alt="" />
      </section>
      <section className="snap-section">
        <img className="h-screen" src={about4} alt="" />
      </section>
      <section className="snap-section">
        <img className="h-screen" src={about5} alt="" />
      </section>
      <section className="snap-section">
        <img className="h-screen" src={about6} alt="" />
      </section>
      <section className="snap-section">
        <img className="h-screen" src={about7} alt="" />
      </section>
      <section className="snap-section">
        <img className="h-screen" src={about8} alt="" />
      </section>
    </div>
  );
}

export default About;
