import React, { useContext } from 'react';
import { Link, Outlet, useMatch } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function Default()
{
    const { user } = useContext(UserContext);

    const userIsSetup: boolean = user.allergies.length > 0 || user.intolerances.length > 0;

    const getStartedUrl:string = userIsSetup ? '/translate' : '/setup';

    return (
        <>
            <nav className="relative container mx-auto p-6">
            {/* Flex container */}
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="pt-2">
                        <img src="img/logo.svg" alt="" />
                    </div>
                    {/* Button */}
                    <a href={getStartedUrl} className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseLine hover:bg-brightRedLight md:block">Get Started</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero">
                {/* Flex Container */}
                <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
                    {/* Left Item */}
                    <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Translate your food requirements</h1>
                        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                            Food Requirement Translator makes it easy to translate your allergies, intolerances and dietary requirements into at least two languages!
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <a href={getStartedUrl} className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseLine hover:bg-brightRedLight">Get Started</a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2">
                        <img src="img/illustration-intro.svg" alt="" />
                    </div>
                </div>
            </section>
            
            {/* Features Section */}
            <section>
                {/* Flex Container */}
                <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                    {/* Whats Different */}
                    <div className="flex flex-col space-y-12 md:w-1/2">
                        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">What's different about Food Requirement Translator?</h2>
                        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                            Text here
                        </p>
                    </div>
                    
                    {/* Numbered List */}
                    <div className="flex flex-col space-y-8 md:w-1/2">
                        
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">01</div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Free to use
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">
                                    Free to use
                                </h3>
                                <p className="text-darkGrayishBlue">
                                    Food Requirement Translator is, and always will be, completely free to use
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">02</div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Easy access, where you need it
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">
                                    Easy access, where you need it
                                </h3>
                                <p className="text-darkGrayishBlue">
                                    Either browse to the website, or use the app on your device! Yay
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">03</div>
                                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                                        Lots of languages supported
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">
                                    Lots of languages supported
                                </h3>
                                <p className="text-darkGrayishBlue">
                                    One day maybe...
                                </p>
                            </div>
                        </div>
                    </div>


                </div>

            </section>

            {/* CTA Section */}
            <section id="cta" className="bg-brightRed">
                {/* Flex Container */}
                <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
                    {/* Heading */}
                    <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                        Simplify how your team works today
                    </h2>
                    {/* Button */}
                    <div>
                        <a href={getStartedUrl} className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full baseLine hover:bg-gray-400">Get Started</a>
                    </div>
                </div>
            </section>
        </>
    )
}