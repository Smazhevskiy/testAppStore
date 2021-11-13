import React from 'react'
import './App.css'
import {DevicesAppBar} from './pages/MenuAppBar'
import {DevicesTable} from './pages/TableDevices/DevicesTable'

function App() {
    return (
        <div className="App">
            <DevicesAppBar/>
            <DevicesTable/>
        </div>
    )
}

export default App
