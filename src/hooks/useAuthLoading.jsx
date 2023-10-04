'use client'

import useAuth from "./useAuth";


const useAuthLoading = () => {
    const { loading } = useAuth()
    if (loading) {
        return true
    }
    return false
};

export default useAuthLoading;