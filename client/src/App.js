import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import { io } from "socket.io-client";

import { Button, DatePicker, version, Table, Tag, Space } from "antd";
import { useEffect, useState } from 'react';
// import Component from './Component';

const SERVER_URL = 'http://localhost:4000/';
const socket = io.connect(SERVER_URL);

socket.on("connect", () => {
  console.log('Hi Alex!!!');
});

socket.on("disconnect", (reason) => {
  console.log('Bye Alex!!!');
});

const columns = [
  {
    title: 'Ticker',
    dataIndex: 'ticker',
    key: 'ticker',
  },
  {
    title: 'Exchange',
    dataIndex: 'exchange',
    key: 'exchange',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Change',
    dataIndex: 'change',
    key: 'change',
  },
  {
    title: 'Change percent',
    dataIndex: 'change_percent',
    key: 'change_percent',
  },
  {
    title: 'Dividend',
    dataIndex: 'dividend',
    key: 'dividend',
  },
  {
    title: 'Yield',
    dataIndex: 'yield',
    key: 'yield',
  },
  {
    title: 'Last trade time',
    dataIndex: 'last_trade_time',
    key: 'last_trade_time',
  },
];

const data = [
  {
    ticker:"AAPL",
    exchange:"NASDAQ",
    price:"257.42",
    change:"5.34",
    change_percent:"0.20",
    dividend:"0.45",
    yield:"1.58",
    last_trade_time:"2021-07-03T17:33:55.000Z"
  },
  {
    ticker:"AAPL",
    exchange:"NASDAQ",
    price:"257.42",
    change:"5.34",
    change_percent:"0.20",
    dividend:"0.45",
    yield:"1.58",
    last_trade_time:"2021-07-03T17:33:55.000Z"
  },
  {
    ticker:"AAPL",
    exchange:"NASDAQ",
    price:"257.42",
    change:"5.34",
    change_percent:"0.20",
    dividend:"0.45",
    yield:"1.58",
    last_trade_time:"2021-07-03T17:33:55.000Z"
  },
  {
    ticker:"AAPL",
    exchange:"NASDAQ",
    price:"257.42",
    change:"5.34",
    change_percent:"0.20",
    dividend:"0.45",
    yield:"1.58",
    last_trade_time:"2021-07-03T17:33:55.000Z"
  },
  {
    ticker:"AAPL",
    exchange:"NASDAQ",
    price:"257.42",
    change:"5.34",
    change_percent:"0.20",
    dividend:"0.45",
    yield:"1.58",
    last_trade_time:"2021-07-03T17:33:55.000Z"
  },
]; 

function App() {
  const [tickers, setTickers] = useState([]);
  useEffect(() => {
    socket.emit('start');
    socket.on("ticker", (response) => {
      setTickers(response);
      console.log(tickers);
    });
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Table columns={columns} dataSource={tickers} />
      </header>
    </div>
  );
}

export default App;
