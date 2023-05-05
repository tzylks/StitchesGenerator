import Image from 'next/image';
import Link from 'next/link';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';

import 'simplebar-react/dist/simplebar.min.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Stitches Generator API | Home',
    description: 'Free & open-source text similarity API',
};

export default function Home() {
    return (
        <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
            <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
                <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
                    <LargeHeading
                        size='lg'
                        className='three-d text-black dark:text-light-gold'
                    >
                        Generate stitches <br /> with ease.
                    </LargeHeading>

                    <Paragraph className='max-w-xl lg:text-left'>
                        Using Stitches Generator API will allow you to create
                        simple stitches based components with no hassle{' '}
                        <Link
                            href='/login'
                            className='underline underline-offset-2 text-black dark:text-light-gold'
                        >
                            API key
                        </Link>
                        .
                    </Paragraph>

                    <div className='mt-10 ml-10 sm:m-0 relative w-full max-w-xl lg:max-w-2xl lg:left-1/2 aspect-square lg:absolute'>
                        <Image
                            priority
                            className='img-shadow'
                            quality={100}
                            style={{ objectFit: 'contain' }}
                            src='/lightbulb.png'
                            alt='lightbulb'
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
