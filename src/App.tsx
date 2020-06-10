import React from 'react';
import Child from './components/Child';
import './App.scss';

const App: React.FC = () => { 
    return (
        <div className="App">
            <Child message="プロップスで渡した文字列">
                <h1>適当な文字列</h1>
            </Child>
        </div>
    )
}

export default App;