import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import firebaseApp from '../_firebase/Firebase.conf'

const firebaseAuth = getAuth(firebaseApp)
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const signInWithEmail = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(firebaseAuth, email, password)
  }
  // Firebase signIn with Email
  const signUpWithEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
  }
  // This function updates user name while user is been created with email and password.
  const updateUserName = (name) => {
    return updateProfile(firebaseAuth.currentUser, {
      displayName: name,
      photoURL:
        'https://hips.hearstapps.com/hmg-prod/images/johnnydepp.jpg?resize=240:*'
    })
  }
  // Firebase signIn with Google
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    setLoading(true)
    return signInWithPopup(firebaseAuth, provider)
  }
  // Firebase signIn with Github
  const signInWithGH = () => {
    const provider = new GithubAuthProvider()
    setLoading(true)
    return signInWithPopup(firebaseAuth, provider)
  }
  const logout = () => {
    signOut(firebaseAuth)
  }
  // This effect watches all event of user such as login, logout, signUp etc. etc.
  useEffect(() => {
    const unsubscribeUser = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribeUser()
    }
  }, [user])
  // Context function and value container
  const auth = {
    user,
    setUser,
    loading,
    signInWithGoogle,
    signInWithGH,
    signUpWithEmail,
    updateUserName,
    logout,
    signInWithEmail
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
export default AuthProvider
