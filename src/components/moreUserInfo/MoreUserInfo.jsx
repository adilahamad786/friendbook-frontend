import classes from './MoreUserInfo.module.css';

const MoreUserInfo = (props) => {
  return (
    <div className={classes.container}>
        <div className={classes.item}>
            <span className={classes.title}>Age :</span>
            <span>{props.age}</span>
        </div>
        <div className={classes.item}>
            <span className={classes.title}>Gender :</span>
            <span>{props.gender === 1 ? "Male" : "Female"}</span>
        </div>
        <div className={classes.item}>
            <span className={classes.title}>Relationship :</span>
            <span>{props.relationship === 1 ? "Single" : "Married"}</span>
        </div>
    </div>
  )
}

export default MoreUserInfo;