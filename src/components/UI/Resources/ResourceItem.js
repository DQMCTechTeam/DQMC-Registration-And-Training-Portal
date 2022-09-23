import { Fragment } from "react";

const ResourceItem = (props) => {
  return (
    <Fragment>
      {props.items.map((item) => (
        <li>
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.title}
          </a>
        </li>
      ))}
    </Fragment>
  );
};

export default ResourceItem;
