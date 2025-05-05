"use client"

// pages/index.js
import { useEffect, useState } from 'react';
import { auth, provider, signInWithPopup, signOut } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Container, Button, Typography, Avatar } from '@mui/material';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <Container style={{ marginTop: '4rem', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to TwinAuth 👯‍♀️
      </Typography>

      {user ? (
        <>
          <Avatar
            src={user.photoURL}
            alt={user.displayName}
            sx={{ width: 80, height: 80, margin: 'auto' }}
          />
          <Typography variant="h6" style={{ marginTop: '1rem' }}>
            Hello, {user.displayName}
          </Typography>
          <Button variant="contained" color="secondary" onClick={handleLogout} style={{ marginTop: '1rem' }}>
            Logout
          </Button>
        </>
      ) : (
        <Button variant="contained" color="primary" onClick={handleSignIn}>
          Sign in with Google
        </Button>
      )}
    </Container>
  );
}
