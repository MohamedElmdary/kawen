import React from "react";
import classes from "./project.module.scss";

interface Props {
    projectName: string;
    projectDescription: string;
}

const Project: React.FC<Props> = ({ projectDescription, projectName }) => {
    return (
        <section className={classes.project}>
            <h2 className="h5">{projectName}</h2>
            <p>{projectDescription}</p>
            <button className="btn">Upload the project</button>
            <footer>
                <button className="btn btn-outline">Next</button>
            </footer>
        </section>
    );
};

export default Project;
