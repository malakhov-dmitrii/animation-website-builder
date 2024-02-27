import Checkbox from "../Checkbox/Checkbox";
import Dropdown from "../Dropdown/Dropdown";
import Slider from "../Slider/Slider";
import { useDispatch, useSelector } from "../../hooks/hooks";
import { useCallback, useEffect } from "react";
import { updateCurrentComponentId } from "../../services/actions/selectedComponent";

function LayoutSettings() {
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = document
      .querySelector(".layout")
      ?.addEventListener("click", function (event) {
        // @ts-expect-error ok
        const id = event.target.id;
        dispatch(updateCurrentComponentId(id));
      });

    return () => {
      // @ts-expect-error ok
      document.removeEventListener("click", listener);
    };
  }, []);
  const settingsArray = useSelector((store) => store.settings);
  const selectedComponent = useSelector((store) => store.selectedComponent);

  const selectedSettings = settingsArray.find(
    (item) => item.componentId === selectedComponent.cId
  ) || {
    componentId: "",
    settings: {
      x: 0,
      y: 0,
      opacity: -100,
      scale: 0,
      blur: -100,
      speed: -100,
      delay: -100,
      easing: "",
      replay: false,
    },
  };

  return (
    <>
      <section className="layout-settings">
        <h2 className="text-black text-left font-bold">
          Selected Component ID: {selectedComponent.cId}
        </h2>
        <Slider
          sliderName={"X"}
          fromCenter={true}
          value={selectedSettings.settings.x}
        />
        <Slider
          sliderName={"Y"}
          fromCenter={true}
          value={selectedSettings.settings.y}
        />
        <Slider
          sliderName={"Opacity"}
          fromCenter={false}
          value={selectedSettings.settings.opacity}
        />
        <Slider
          sliderName={"Scale"}
          fromCenter={true}
          value={selectedSettings.settings.scale}
        />
        <Slider
          sliderName={"Blur"}
          fromCenter={false}
          value={selectedSettings.settings.blur}
        />
        <Slider
          sliderName={"Speed"}
          fromCenter={false}
          value={selectedSettings.settings.speed}
        />
        <Slider
          sliderName={"Delay"}
          fromCenter={false}
          value={selectedSettings.settings.delay}
        />
        <Dropdown />
        <Checkbox checked={selectedSettings.settings.replay} />
      </section>
    </>
  );
}

export default LayoutSettings;
