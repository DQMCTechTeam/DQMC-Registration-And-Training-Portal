import { Fragment } from "react";
import ResourceItem from "./ResourceItem";
import classes from './Resources.module.css'

const Resources = (props) =>{
    return (
        <Fragment>
            {props.resources.map((resource)=>(
            <div>
                <p className={classes.p}>Adhoc Training Guides</p>
                <ul>
                    <ResourceItem title={resource.title} link={resource.link}/>   
                </ul>      
            </div>
                    ))
            
                }
        </Fragment> 



    )
};

export default Resources;