'use client';

import React, { FC } from 'react';
import Button from '@/ui/Button';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';

interface IProps {}

const SignInButton: FC<IProps> = (props) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const signInWithGoogle = async () => {
        setIsLoading(true);
        try {
            await signIn('google');
        } catch (error) {
            toast.error('Error signing out');
        }
    };
    return (
        <Button
            onClick={signInWithGoogle}
            isLoading={isLoading}
        >
            Sign In
        </Button>
    );
};

export default SignInButton;
