import classes from './PostUpdate.module.css';
import { SystemUpdateAlt } from '@mui/icons-material';
import uploadImage from "../../assets/uploadImage.png";
import { useState, useEffect } from "react";

const PostUpdate = (props) => {
  const [inputImage, setInputImage] = useState(null);
  const [inputText, setInputText] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const postImageLink = `/api/post/${props.image.postId}`;

  useEffect(() => {
    if (inputImage || inputText) {
      setIsFormValid(true);
    }
    else {
      setIsFormValid(false);
    }
  }, [inputImage, inputText, setIsFormValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();

    inputImage && formData.append('image', inputImage);
    inputText && formData.append('message', inputText);

    props.update({ postId : props.image.postId, formData})
  }

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes.updateForm}>
        <div className={classes.image}>
          <label
            htmlFor="postImage"
            className={classes.coverPictureChangeLabel}
          >
            <SystemUpdateAlt />
            <span>Change</span>
          </label>
          <img
            src={
              inputImage ? URL.createObjectURL(inputImage) : props.image.hasImage ? postImageLink : uploadImage 
            }
            className={classes.profileCoverImg}
            alt="PostImage"
          />
          <input
            style={{ display: "none" }}
            type="file"
            id="postImage"
            accept=".png, .jpeg, .jpg"
            onChange={(e) => setInputImage(e.target.files[0])}
          />
        </div>
        <input className={classes.textInput} onChange={(e) => {setInputText(e.target.value)}} value={inputText} type="text" placeholder='Write your message...' />
        <button disabled={!isFormValid}>Update</button>
      </form>
      <button onClick={props.onClose}>Close</button>
    </div>
  )
}

export default PostUpdate;