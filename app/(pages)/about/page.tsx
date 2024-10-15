import React, { Suspense, lazy } from 'react';
import LoadingSpinner from '@/app/_components/common/Loading-spinner';
const AboutPage = lazy(() => import('./about-us'));

const page = () => {
  return (
    <div className='flex justify-center items-center'>
      <Suspense fallback={<LoadingSpinner />}>
        <AboutPage />
      </Suspense>
    </div>
  )
}

export default page