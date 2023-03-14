import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='relative'>
            <Head>

            </Head>
            <Header />
            <main className='min-h-screen bg-gray-200'>
                {children}
            </main>
        </div>
    )
}
