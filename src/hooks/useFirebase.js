import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import initApp from "../firebase/firebase.init";

initApp();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const GoogleSingin = (navigate) => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                navigate('/');
            }).catch((error) => {
                console.log(error.message);
            });

    };
    console.log(user);
    const SingupWithEmailAndPassword = (userName, email, password, navigate) => {

        createUserWithEmailAndPassword(auth, email, password)

            .then((result) => {

                const newUser = { email, displayName: userName };
                setUser(newUser);

                updateProfile(auth.currentUser, {
                    displayName: userName
                }).then(() => {

                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            alert('user created');
                            navigate('/');
                        });

                }).catch((error) => {
                    console.log(error.message);
                });

            })
            .catch((error) => {
                console.log(error.message);
            });

    };

    const SinginWithEmailAndPassword = (email, password, navigate) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message);
            });

    };

    const SingOut = () => {

        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            console.log(error.message);
        });

    };

    useEffect(() => {

        const subscribed = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
            } else {
                setUser({});
            }

        });

        return () => subscribed;

    }, []);

    return {
        user,
        GoogleSingin,
        SingupWithEmailAndPassword,
        SinginWithEmailAndPassword,
        SingOut
    };

};

export default useFirebase;
