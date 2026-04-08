import Card from "./components/card";

function App() {
  return (
    <Card test={"Value"}>
      <Card.Header>
        <h1 style={{ margin: 0 }}>Header</h1>
      </Card.Header>

      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate, nibh vel iaculis vehicula, 
        odio dui semper lectus, nec commodo lectus dolor vitae risus. Ut cursus, sem et lobortis imperdiet, 
        libero dolor convallis nunc, at lobortis quam neque a massa. Donec sem est, sagittis vel nunc nec, 
        pharetra consectetur sem. Curabitur ut turpis ac sapien suscipit ultricies. Donec tincidunt congue vulputate. 
        Mauris ipsum lacus, maximus ut lobortis ac, blandit ut mauris. Etiam eu nunc a ipsum tincidunt feugiat volutpat in ante.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel nibh laoreet, 
        finibus libero id, ornare nibh. Vivamus enim dolor, laoreet ac purus in, malesuada gravida neque. 
        Phasellus tristique purus quis nisi convallis, imperdiet finibus mauris tempor. 
        In a placerat ex. Cras sed dui eu tortor aliquam dictum.
      </Card.Body>

      <Card.Footer>
        <button>Ok</button>
        <button>Cancel</button>
      </Card.Footer>
      
    </Card>
  );
}

export default App;
