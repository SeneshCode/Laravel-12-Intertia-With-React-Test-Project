import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Logo from '../assets/logo.png';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Home" />
            <div className="m-0 p-0">
                <div className="flex w-full flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center dark:bg-[#0a0a0a]">
                    <header className="sticky top-10 z-10 mt-10 mb-6 w-full max-w-[335px] rounded-xl px-4 py-2 text-sm backdrop-blur-2xl not-has-[nav]:hidden lg:max-w-4xl dark:bg-white/10">
                        <nav className="flex items-center justify-between gap-4">
                            {auth.user ? (
                                <>
                                    <Link href={route('home')} className="flex items-center justify-center">
                                        <img src={Logo} alt="techsa" className="size-8" />
                                        <span className="font-logo ml-2 text-2xl font-medium dark:text-white">TECHSA</span>
                                    </Link>
                                    <Link
                                        href={route('dashboard')}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Dashboard
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link href={route('home')} className="flex items-center justify-center">
                                        <img src={Logo} alt="techsa" className="size-8" />
                                        <span className="font-logo ml-2 text-2xl font-medium dark:text-white">TECHSA</span>
                                    </Link>
                                    <div className="space-x-2">
                                        <Link
                                            href={route('login')}
                                            className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:cursor-pointer hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:cursor-pointer hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </>
                            )}
                        </nav>
                    </header>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center opacity-100 transition-opacity duration-750 dark:text-white starting:opacity-0">
                    {/* Hero */}
                    <div className="relative overflow-hidden before:absolute before:start-1/2 before:top-0 before:-z-1 before:size-full before:-translate-x-1/2 before:transform before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-cover before:bg-top before:bg-no-repeat dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
                        <div className="mx-auto max-w-[85rem] px-4 pt-24 pb-10 sm:px-6 lg:px-8">
                            {/* Announcement Banner */}
                            <div className="flex justify-center">
                                <Link
                                    className="inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white p-1 ps-3 text-sm text-gray-800 transition hover:border-gray-300 focus:border-gray-300 focus:outline-hidden dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
                                    href={route('home')}
                                >
                                    Welcome to TECHSA
                                    <span className="inline-flex items-center justify-center gap-x-2 rounded-full bg-gray-200 px-2.5 py-1.5 text-sm font-semibold text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
                                        <svg
                                            className="size-4 shrink-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                            {/* End Announcement Banner */}

                            {/* Title */}
                            <div className="mx-auto mt-5 max-w-2xl text-center">
                                <h1 className="font-winky block text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl dark:text-neutral-200">
                                    Let’s Build the&nbsp;
                                    <span className="bg-linear-to-tl from-blue-600 to-violet-600 bg-clip-text font-semibold text-transparent">
                                        Future Together
                                    </span>
                                </h1>
                            </div>
                            {/* End Title */}

                            <div className="mx-auto mt-5 max-w-3xl text-center">
                                <p className="font-winky text-lg text-gray-600 dark:text-neutral-400">
                                    At TECHSA, we bring together brilliant minds to create cutting-edge solutions that drive progress. Whether you're
                                    a developer, partner, or client, we're excited to have you on this journey with us. Together, let's build the
                                    future.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="mt-8 flex justify-center gap-3">
                                <Link
                                    className="font-winky inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-linear-to-tl from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-medium text-white hover:from-violet-600 hover:to-blue-600 focus:from-violet-600 focus:to-blue-600 focus:outline-hidden"
                                    href={auth.user ? route('register') : route('login')}
                                >
                                    Join in
                                    <svg
                                        className="size-4 shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </Link>
                                <button
                                    type="button"
                                    className="group relative inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white p-2 ps-3 font-mono text-sm text-gray-800 shadow-2xs hover:bg-gray-50 focus:bg-gray-50 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                >
                                    $ join with TECHSA
                                    <span className="flex size-7 items-center justify-center rounded-md bg-gray-200 dark:bg-neutral-700 dark:text-neutral-400">
                                        <svg
                                            className="size-4 shrink-0 transition group-hover:rotate-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            {/* End Buttons */}

                            <div className="mt-5 flex flex-col items-center justify-center gap-1.5 sm:flex-row sm:gap-3">
                                <div className="flex flex-wrap gap-1 sm:gap-3">
                                    <span className="text-sm text-gray-600 dark:text-neutral-400">Founders :</span>
                                    <span className="text-sm font-bold text-gray-900 dark:text-white">Senesh, Thisara</span>
                                </div>
                                <svg
                                    className="hidden size-5 text-gray-300 sm:block dark:text-neutral-600"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
                                </svg>
                                <Link
                                    className="inline-flex items-center gap-x-1 text-sm font-medium text-blue-600 decoration-2 hover:underline focus:underline focus:outline-hidden dark:text-blue-500"
                                    href="../docs/index.html"
                                >
                                    Installation Guide
                                    <svg
                                        className="size-4 shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* End Hero */}
                </div>
            </div>
        </>
    );
}
