import { Fragment } from "react";

const ResourceItem = (props) => {
  return (
    <Fragment>
      {props.header.map((header) => {
        return (
          <li key={header.id}>
            <a href={header.link} target="_blank" rel="noreferrer">
              {header.title}
            </a>
          </li>
        );
      })}
    </Fragment>
  );
};

export default ResourceItem;
