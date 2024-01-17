import Image from "react-bootstrap/Image";
import fieldPitch from "../../assets/pitch/pitch.svg";
import classes from "./Pitch.module.css";
const Pitch = () => {
  return (
    <div className={classes.pitch}>
      <Image src={fieldPitch} className={classes.pitchImg} fluid></Image>
    </div>
  );
};

export default Pitch;
