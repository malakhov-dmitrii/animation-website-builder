import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import LayoutSettings from "../LayoutSettings/LayoutSettings";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <main className="main">
          <Layout />
          <LayoutSettings />

          <Modal open={false}>
            <Layout preview={true} />
          </Modal>
        </main>
      </div>
    </div>
  );
}

export default App;
