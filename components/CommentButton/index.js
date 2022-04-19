import CommentIcon from '@mui/icons-material/Comment';
import classes from "./index.module.css";
import { useRouter } from 'next/router';

export default function CommentButton(props) {
    const router = useRouter();
    const nextPageHandler = () => {
      router.push(`/Feed/Discussions/Comments`);
    };
    return (
        <div className={classes.reactButton}>
            <CommentIcon sx={{ color: "#ff8a00" }} onClick={nextPageHandler}/>
          <div className={classes.number}>{props.numComments}</div>
        </div>
      );
}