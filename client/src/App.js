import React, { useState } from 'react';
import styled from 'styled-components';
import CourseInfo from './components/CourseInfo';
import StudentInfo from './components/StudentInfo';
import AdditionalInfo from './components/AdditionalInfo';
import DigitalSignature from './components/DigitalSignature';
import RegistrationList from './components/RegistrationList';
import axios from 'axios';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f0f4f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SubmitButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const App = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    studentName: '',
    email: '',
    additionalInfo: '',
    signature: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/registrations', formData);
      alert('Registration submitted successfully!');
      setFormData({
        courseName: '',
        studentName: '',
        email: '',
        additionalInfo: '',
        signature: ''
      });
    } catch (error) {
      console.error('Error submitting registration:', error);
      alert('Failed to submit registration. Please try again.');
    }
  };

  return (
    <AppContainer>
      <Title>Training Registration System</Title>
      <Form onSubmit={handleSubmit}>
        <CourseInfo 
          courseName={formData.courseName} 
          handleInputChange={handleInputChange} 
        />
        <StudentInfo 
          studentName={formData.studentName} 
          email={formData.email} 
          handleInputChange={handleInputChange} 
        />
        <AdditionalInfo 
          additionalInfo={formData.additionalInfo} 
          handleInputChange={handleInputChange} 
        />
        <DigitalSignature 
          signature={formData.signature} 
          handleInputChange={handleInputChange} 
        />
        <SubmitButton type="submit">Submit Registration</SubmitButton>
      </Form>
      <RegistrationList />
    </AppContainer>
  );
};

export default App;