import React, { FC } from 'react';
import { Metadata } from 'next';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import DocumentationTabs from '@/components/DocumentationTabs';

export const metadata: Metadata = {
    title: 'API | Documentation',
    description: 'Free & open-source API',
};
const componentName = () => {
    return (
        <div className='cotainer max-w-7xl mx-auto mt-12'>
            <div className='flex flex-col items-center gap-6'>
                <LargeHeading>Making a request</LargeHeading>
                <Paragraph>api/v1/similarity</Paragraph>

                <DocumentationTabs />
            </div>
        </div>
    );
};

export default componentName;
