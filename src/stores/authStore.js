import { async } from "@firebase/util";
import { writable } from "svelte/store";
import { createUserWithEmailAndPassword ,sendPasswordResetEmail, signOut } from "firebase/auth";
import { auth } from "$lib/firebaseConfig";

export const authStore = writable ({
    isLoading: true,
    currentUser: null
})

export const authHandlers => {
    signup: async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
    },
    logout: async() => {
        await signOut(auth)
    },
    resetPassword: async (email) => {
        await sendPasswordResetEmail(auth,email)
    }
}