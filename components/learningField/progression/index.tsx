import React from "react";
import classes from "./progression.module.scss";

interface Props {
    progress: number;
}

const Progression: React.FC<Props> = ({ progress }) => {
    return (
        <div className={classes.progression}>
            <p>
                Progrseeion <span>{progress}%</span>
            </p>
            <div>
                <style jsx>{`
                    div::before {
                        left: ${progress}%;
                    }
                    div::after {
                        width: ${progress}%;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Progression;
