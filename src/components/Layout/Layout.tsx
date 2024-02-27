import { useEffect } from "react";
import Picture from "../../images/Rectangle_53-min.jpg";

function Layout({ preview = false }: { preview?: boolean }) {
  const prefix = preview ? "preview-" : "";
  useEffect(() => {
    if (preview) {
      // window.open("/preview", "_blank");
    }
  }, []);
  return (
    <section className="layout">
      <div className="layout__page p-8">
        <div className="flex justify-between mt-12">
          <div>
            <h1 id={`${prefix}1`} className="text-4xl font-bold text-black">
              Animation Settings
            </h1>

            <p id={`${prefix}2`} className="text-black max-w-xs mt-8">
              The user should have the option to select any element on the page
              and set up its animation using the controls in the right panel. A
              dotted line will show the element's position and state before the
              animation begins, giving the user a clear idea of how the
              animation will appear. The preview button on the top panel will
              open the result in a new tab.
            </p>
          </div>

          <img
            id={`${prefix}3`}
            className="ui-image"
            src={Picture}
            alt="Изображение. Монитор с интерфейсом программы по работе с изображениями"
          />
        </div>

        <button id={`${prefix}4`} className="ui-button">
          Button
        </button>
      </div>
    </section>
  );
}

export default Layout;
