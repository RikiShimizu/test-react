import React from 'react';
import logo from './logo.svg';
import './App.scss';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Edit <code>src/App.tsx</code> and save to reload.</p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Test−React riki</a>
//       </header>
//     </div>
//   );
// }

// 型定義
type Item = {
    id: number
    title: string
}

// 配列定義
const items: Item[] = [
    {
        id: 1,
        title: '一番高い商品'
    }, {
        id: 2,
        title: '一番ださい商品'
    }
]

const App: React.FC = () => {
    return (
        <div className="App">
            <ul>
            {items.map((item: Item) => (
                <li key={item.id}>{item.title}</li>
            ))}
            </ul>
        </div>
    )
}

export default App;