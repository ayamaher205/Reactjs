import react from 'react'
import resume from "../../assets/files/cv.pdf";
import './About.css'
const About = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-3 heading">
                    <h2>About Me</h2>
                </div>
                <div class="col">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem quod cupiditate iure amet dolorem ea earum natus,
                        aperiam ab alias omnis nobis facere. Temporibus autem eum veniam.
                        Esse, quis doloremque?
                    </p>
                    <a href={resume} attributes-list download>
                        <button>
                            Download Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
