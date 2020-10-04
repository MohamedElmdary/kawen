import React from "react";
import classes from "./project.module.scss";
import { ProjectProps } from "../../../data/learning-fieldProps";

const Project: React.FC<ProjectProps> = ({
    projectDescription,
    projectName,
}) => {
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
