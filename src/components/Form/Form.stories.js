import React from 'react';
import Colors from '../../variables';
import Form from './Form';
import Input from '../Input/Input';

export default { title: 'Forms' };

const StorybookWhiteCentered = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  background: Colors.Beige,
};

const StorybookBlueCentered = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  background: Colors.Beige,
};

export const DarkModeForm = () => {
  return (
    <div style={StorybookBlueCentered}>
      <Form darkmode text="Bli Medlem">
        <Input darkmode placeholder="Förnamn" />
        <Input darkmode placeholder="Efternamn" />
        <Input darkmode placeholder="Address" />
        <Input darkmode placeholder="C/O" />
        <Input darkmode placeholder="Lösenord" />
        <Input darkmode placeholder="Upprepa lösenord" />
      </Form>
    </div>
  );
};

export const LightModeForm = () => {
  return (
    <div style={StorybookWhiteCentered}>
      <Form text="Bli Medlem">
        <Input placeholder="Förnamn" />
        <Input placeholder="Efternamn" />
        <Input placeholder="Address" />
        <Input placeholder="C/O" />
        <Input placeholder="Lösenord" />
        <Input placeholder="Upprepa lösenord" />
      </Form>
    </div>
  );
};
