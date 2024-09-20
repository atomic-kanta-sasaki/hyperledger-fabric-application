import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { QRCode } from '../components/QR';
const socket = io('http://localhost:3000');
export const Home: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  useEffect(() => {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    socket.on('onMessage', (data: any) => {
      setMessages((prev) => [...prev, data.content]);
    });

    return () => {
      socket.off('onMessage');
    }
  }, []);

  const sendMessage = () => {
    // サーバーにメッセージを送信
    socket.emit('newMessage', message);
    setMessage(''); // 送信後に入力フィールドをクリア
  };

  const json = JSON.stringify({
    id: 1,
    actionType: 'Step1',
    Description: 'This is a description',
    batchNumber: 1,
    serialNumber: 1,
    manufactureDatetime: '2022-01-01T00:00:00.000Z',
    expireDatetime: '2022-01-01T00:00:00.000Z',
  });

  const encodePayload = btoa(json);
  const value = `http://localhost:3000?value=${encodePayload}`;
  return (
    <div>
      <h1>Chat Application</h1>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <QRCode value={value} />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};
