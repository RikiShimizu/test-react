import React from 'react';
import './App.scss';
// import logo from './logo.svg';

// 型定義
type Item = {
    id: number
    title: string
}

// 配列定義
const items: Item[] = [
    {id: 1, title: '一番高い商品'}, 
    {id: 2, title: '一番ださい商品'}
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