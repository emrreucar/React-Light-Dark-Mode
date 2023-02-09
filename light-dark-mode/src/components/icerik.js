import React, { useContext } from 'react';
import { TemaVerisi } from '../App';

export default function Icerik() {
  return (
    <div style={useContext(TemaVerisi)}>
      <h1>Hello React</h1>
      <h1>Bu bir light-dark mode yapımıdır. Tabikide React ile</h1>
      <p>lorem ipsum dolor sit amet.</p>
      <p>lorem ipsum dolor sit amet.</p>
      <p>lorem ipsum dolor sit amet.</p>
      <p>lorem ipsum dolor sit amet.</p>
      <p>lorem ipsum dolor sit amet.</p>
    </div>
  )
}
