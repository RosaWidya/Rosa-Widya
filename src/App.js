import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//    <h1>ok</h1>
//       </header>
//     </div>
//   );
// }
function MyButton(){
  return <button> I'am Button</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1> Welcome To My App</h1>
      <MyButton />
    </div>
  )
}