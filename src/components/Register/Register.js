import React from 'react';
import Header from 'components/Header/Header';
import Form from 'components/Form/Form';
import Input from 'components/Input/Input';

const RegisterContainer = {
  display: 'flex',
  justifyContent: 'center',
  height: '130vh',
};

function Register() {
  return (
    <div style={RegisterContainer}>
      <Header />
      <Form text="Bli Medlem">
        <Input placeholder="Förnamn" />
        <Input placeholder="Efternamn" />
        <Input placeholder="Adress" />
        <Input placeholder="C/O" />
        <Input placeholder="Postnummer" />
        <Input placeholder="Postadress" />
        <Input placeholder="Epost" />
        <Input placeholder="Lösenord" />
        <Input placeholder="Upprepa lösenord" />
      </Form>
    </div>
  );
}

export default Register;