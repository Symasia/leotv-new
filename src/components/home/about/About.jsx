import React from "react";
import "./About.css";
import { FaCamera, FaCode, FaPaintBrush, FaPencilRuler } from "react-icons/fa";
const About = () => {
    return (
        <section className="about">
        <h2>We're not just a news channel!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          tempora quam iure deserunt, debitis ipsa recusandae? Doloremque ut
          sint quos. Accusamus, mollitia! Nobis quis eos ratione molestiae vero
          corporis dolorem.
        </p>
        <div className="skills">
          <div className="skill">
            <h3>Programming</h3>
            <FaCode className="icon" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              laboriosam eos enim placeat excepturi minus, numquam debitis harum
              maxime labore aperiam! Cumque, deserunt saepe minima incidunt
              voluptas rem quidem beatae?
            </p>
          </div>
          <div className="skill">
            <h3>Photography</h3>
            <FaCamera className="icon" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ducimus laborum perspiciatis dolore vitae officiis at
              consequuntur veritatis aliquid, sapiente laboriosam ratione est
              quia repellendus nostrum vel eius architecto nisi.
            </p>
          </div>
          <div className="skill">
            <h3>Graphic Design</h3>
            <FaPaintBrush className="icon" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ducimus laborum perspiciatis dolore vitae officiis at
              consequuntur veritatis aliquid, sapiente laboriosam ratione est
              quia repellendus nostrum vel eius architecto nisi.
            </p>
          </div>
          <div className="skill">
            <h3>Content Creation</h3>
            <FaPencilRuler className="icon" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ducimus laborum perspiciatis dolore vitae officiis at
              consequuntur veritatis aliquid, sapiente laboriosam ratione est
              quia repellendus nostrum vel eius architecto nisi.
            </p>
          </div>
        </div>
        <button data-type="dark">Get a quote</button>
      </section>
    );
}

export default About;