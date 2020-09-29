import React from 'react';
import Button from './button';

const ButtonPanel = () => (
  <div className="button-collection">
    <div className="button-group">
      <Button name="AC" color="#E0E0E0" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="÷" />
    </div>
    <div className="button-group">
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" />
    </div>
    <div className="button-group">
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" />
    </div>
    <div className="button-group">
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" />
    </div>
    <div className="button-group last-btns">
      <Button name="0" />
      <Button name="." />
      <Button name="=" />
    </div>
  </div>
);
export default ButtonPanel;