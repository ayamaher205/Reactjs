import React from "react";
import "./Skills.css"; // Import the CSS file
import CustomizedProgressBars from '../../resuableComponents/ProgressBar/ProgressBar'
const Skills = () => {
    const contents = [ 'HTML', 'CSS', 'Java', 'Pyhton' ];
    return (
        <div className="skills-container">
            <div className="skills-content">
                <h1>Skills</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
                    ducimus optio nesciunt rem dolorem quae. Laborum explicabo voluptate
                    odio dolorem. Alias qui possimus, perferendis accusantium quod
                    distinctio aliquam fugiat ratione.
                </p>
            </div>
            <div className="container focus-container">
                <div className="row justify-content-between">
                    <div className="col-3 focus-item">
                        <h3>My focus</h3>
                        <hr style={{ height: "3px", color: "white" }} />
                        <ul style={{ textAlign: "center", listStyle: "none" }}>
                            <li>An active item</li>
                            <li>A second item</li>
                            <li>A third item</li>
                            <li>A fourth item</li>
                            <li>And a fifth one</li>
                        </ul>
                    </div>
                    <div className="col progress-bar-container">
                        <table className="table-primary" style={{ borderSpacing: "0" }}>
                            { contents.map((e) => {
                            return (<tr className="table-secondary">
                                <td className="table-secondary" style={{ width: "400px", padding: "0" }}>
                                    <CustomizedProgressBars content={e}></CustomizedProgressBars>
                                </td>
                            </tr>)
                            })}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
