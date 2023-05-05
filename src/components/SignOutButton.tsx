'use client';

import React, { FC } from 'react';
import Button from '@/ui/Button';
import { signIn, signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';

interface IProps {}

const SignOutButton: FC<IProps> = (props) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const signUserOut = async () => {
        setIsLoading(true);
        try {
            await signOut();
        } catch (error) {
            toast.error('Error signing out');
        }
    };
    return (
        <Button
            onClick={signUserOut}
            isLoading={isLoading}
        >
            Sign Out
        </Button>
    );
};

export default SignOutButton;
