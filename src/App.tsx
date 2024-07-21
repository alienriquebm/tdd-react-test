import { Button } from 'react-aria-components';

function App() {
  return (
    <div className="text-xl text-slate-600">
      <Button onPress={() => alert('Hello world!')}>Press me</Button>
    </div>
  );
}

export default App;
