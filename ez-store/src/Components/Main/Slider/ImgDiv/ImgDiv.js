import s from "../ImgDiv/ImgDiv.module.css";

const ImgDiv = (props) => {
  return (
    <div className="img_wrapper">
      <img className={s.img} src={props.img} alt="gameslider"></img>
    </div>
  );
};

export default ImgDiv;
