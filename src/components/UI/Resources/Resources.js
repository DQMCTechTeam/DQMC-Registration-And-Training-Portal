import { Fragment } from "react";
import ResourceItem from "./ResourceItem";
import classes from "./Resources.module.css";

const Resources = (props) => {

    console.log(`resources: ${props.resources}`);
  return (
    <Fragment>
      {props.resources.map((resource) => (
        <Fragment>
          <p className={classes.p}>{resource.title}</p>
          <ul>
            <ResourceItem items={resource.resources} title={resource.title} link={resource.link} />
          </ul>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Resources;
