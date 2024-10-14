import React from 'react';
import styled from 'styled-components';

const AdditionalInfoContainer = styled.div`
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #bdc3c7;
  border-radius: 3px;
  font-size: 16px;
  resize: vertical;
  min-height: 100px;
`;

const AdditionalInfo = ({ additionalInfo, handleInputChange }) => {
  return (
    <AdditionalInfoContainer>
      <Label htmlFor="additionalInfo">Additional Information:</Label>
      <TextArea
        id="additionalInfo"
        name="additionalInfo"
        value={additionalInfo}
        onChange={handleInputChange}
      />
    </AdditionalInfoContainer>
  );
};

export default AdditionalInfo;