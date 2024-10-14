import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ListContainer = styled.div`
  margin-top: 30px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ListTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 15px;
`;

const RegistrationItem = styled.div`
  border-bottom: 1px solid #ecf0f1;
  padding: 10px 0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const RegistrationList = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/registrations');
        setRegistrations(response.data);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <ListContainer>
      <ListTitle>Submitted Registrations</ListTitle>
      {registrations.map((registration, index) => (
        <RegistrationItem key={index}>
          <p><strong>Course:</strong> {registration.courseName}</p>
          <p><strong>Student:</strong> {registration.studentName}</p>
          <p><strong>Email:</strong> {registration.email}</p>
        </RegistrationItem>
      ))}
    </ListContainer>
  );
};

export default RegistrationList;