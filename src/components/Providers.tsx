'use client';
import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
interface IProps {}

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
        >
            <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
    );
};

export default Providers;