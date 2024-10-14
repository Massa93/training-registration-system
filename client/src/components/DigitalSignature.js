import React from 'react';
import styled from 'styled-components';

const SignatureContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #34495e;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #bdc3c7;
  border-radius: 3px;
  font-size: 16px;
`;

const DigitalSignature = ({ signature, handleInputChange }) => {
  return (
    <SignatureContainer>
      <Label htmlFor="signature">Digital Signature:</Label>
      <Input
        type="text"
        id="signature"
        name="signature"
        value={signature}
        onChange={handleInputChange}
        placeholder="Type your full name as signature"
        required
      />
    </SignatureContainer>
  );
};

export default DigitalSignature;