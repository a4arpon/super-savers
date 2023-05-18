import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import fApp from '../_firebase/Firebase.conf'

const fAuth = getAuth(fApp)
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const signInWithEmail = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(fAuth, email, password)
  }
  // Firebase signIn with Email
  const signUpWithEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(fAuth, email, password)
  }
  // This function updates user name while user is been created with email and password.
  const updateUserName = (name) => {
    return updateProfile(fAuth.currentUser, {
      displayName: name,
      photoURL:
        'https://hips.hearstapps.com/hmg-prod/images/ben-affleck-attends-the-los-angeles-premiere-of-amazon-news-photo-1678983790.jpg?crop=1xw:0.968xh;center,top&resize=240:*'
    })
  }
  // Firebase signIn with Google
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    setLoading(true)
    return signInWithPopup(fAuth, provider)
  }
  const logout = () => {
    signOut(fAuth)
  }
  // This effect watches all event of user such as login, logout, signUp etc. etc.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fAuth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [user])
  // Context function and value container to provide all
  const auth = {
    user,
    setUser,
    loading,
    signInWithGoogle,
    signUpWithEmail,
    updateUserName,
    logout,
    signInWithEmail
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
export default AuthProvider
