'use client';
import React, { ButtonHTMLAttributes, FC } from 'react';
import Button from '@/components/ui/Button';
import toast from 'react-hot-toast';
import { Copy } from 'lucide-react';

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    valueToCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({
    valueToCopy,
    className,
    ...props
}) => {
    return (
        <Button
            {...props}
            onClick={() => {
                navigator.clipboard.writeText(valueToCopy);
                toast.success('API key copied to clipboard');
            }}
            variant='ghost'
            className={className}
        >
            <Copy className='h-5 w-5' />
        </Button>
    );
};

export default CopyButton;
