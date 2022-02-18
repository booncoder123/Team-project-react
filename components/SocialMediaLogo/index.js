import classes from "./index.module.css";
import Image from "next/image"
export default function SocialMediaLogo(props) {
    return(
        <div className={classes.logo} style={{...props.style}}>
        <Image
            objectPosition="center"
            alt={"social media icon"}
            src={props.source}
            objectFit="contain"
            width={40}
            height={48}
          />
          </div>
    );
}