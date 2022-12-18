import { Close } from '@mui/icons-material';
import classes from './PostOptions.module.css';

const PostOptions = (props) => {
  return (
    <div className={classes.postOptions}>
        <button onClick={props.onClose} className={classes.closeOptionButton}><Close className={classes.closeOption} /></button>
        <button className={classes.optionButton}>Update</button>
        <button className={classes.optionButton}>Delete</button>
    </div>
  );
}

export default PostOptions;