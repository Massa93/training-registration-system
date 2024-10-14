import React from 'react';
import styled from 'styled-components';

const StudentInfoContainer = styled.div`
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
  margin-bottom: 10px;
`;

const StudentInfo = ({ studentName, email, handleInputChange }) => {
  return (
    <StudentInfoContainer>
      <Label htmlFor="studentName">Student Name:</Label>
      <Input
        type="text"
        id="studentName"
        name="studentName"
        value={studentName}
        onChange={handleInputChange}
        required
      />
      <Label htmlFor="email">Email:</Label>
      <Input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        required
      />
    </StudentInfoContainer>
  );
};

export default StudentInfo;