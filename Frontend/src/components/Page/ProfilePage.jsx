import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import './ProfilePage.css';

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${user.id}`);
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user info:', error);
        setError('Error fetching user info');
      }
    };

    if (user) {
      fetchUserInfo();
    }
  }, [user]);

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-info">
        <h2>Profile</h2>
        {error && <div className="error-message">{error}</div>}
        {userInfo ? (
          <>
            <div className="profile-detail">
              <strong>Username:</strong> {userInfo.username}
            </div>
            <div className="profile-detail">
              <strong>Email:</strong> {userInfo.email}
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;