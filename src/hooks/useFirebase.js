import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import initApp from "../firebase/firebase.init";

initApp();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const GoogleSingin = (navigate) => {

        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                navigate('/');
            }).catch((error) => {
                console.log(error.message);
            })
            .finally(() => setLoading(false));

    };

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

        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => setLoading(false));

    };

    const SingOut = () => {

        setLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            console.log(error.message);
        })
            .finally(() => setLoading(false));


    };

    useEffect(() => {

        const subscribed = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
            } else {
                setUser({});
            }

        });

        setLoading(false);
        return () => subscribed;

    }, [auth]);

    return {
        user,
        GoogleSingin,
        SingupWithEmailAndPassword,
        SinginWithEmailAndPassword,
        SingOut,
        loading
    };

};

export default useFirebase;
