import { Fragment } from "react";
import ResourceItem from "./ResourceItem";
import classes from "./Resources.module.css";

const Resources = (props) => {
  console.log(`headers: ${props.headers}`);
  return (
    <Fragment>
      <ul>
        {props.headers.map((header) => (
          <li key={header.id}>
            <p className={classes.p}>{header.title}</p>
            <ul>
              <ResourceItem
                key={header.id}            
                header={header.items}
              />
            </ul>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Resources;
