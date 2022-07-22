import Header from "./components/Header";
import Content from "./components/Content";
import data from "./data.js"

function App() {
  const journal = data.map((item) => {
    return <Content key={item.id}
      {...item} />
  })
  return (
    <div className="App">
      <Header />
      <div className="container">
        {journal}
      </div>
    </div>
  );
}

export default App;
