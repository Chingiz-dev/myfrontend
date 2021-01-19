import React, {useState} from 'react';
import style from './inputImage.module.css'

const InputImage = ({id}) => {

  const [image, setImage] = useState(require('../../../../assets/img/addProduct_icon.svg'))

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]))
    }
  }

  return (
      <div>
      <label htmlFor={id}>
        <img className={style.img}  src={image}/>
      </label>
        <input
            onChange={onImageChange}
            className={style.input}
            type={'file'}
            accept="image/*"
            id={id}
        />
      </div>
  );
};

export default InputImage;