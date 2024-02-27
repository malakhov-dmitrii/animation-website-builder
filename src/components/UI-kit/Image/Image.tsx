import Picture from "../../../images/Rectangle_53-min.jpg";
import SelectComponent from "../../SelectComponent/SelectComponent";

function Image() {
  return (
    <img
      id="3"
      className="ui-image"
      src={Picture}
      alt="Изображение. Монитор с интерфейсом программы по работе с изображениями"
    />
  );
}

export default Image;
