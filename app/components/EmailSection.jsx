"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GithubIcon from '../../public/github-icon.svg'
import LinkedinIcon from '../../public/linkedin-icon.svg'

const EmailSection = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send"

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata,
        }
        
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData)

        if (response.status === 'success') {
            console.log('Message sent.')
        }
    }
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'/>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>
                Lets Connect
            </h5>
            <p className='text=[#ADB7BE] mb-4 max-w-md'>
                {""}
                I`m currently looking for new freelance frontend developer opportunities, my inbox is always open.
                Whether you have question or just want to say hi, I`ll try my best to get back to you!`
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href={"github.com/dhianharyono"}>
                    <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link href={"linkedin.com/dhianharyono"}>
                    <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>
                        Your Email
                    </label>
                    <input 
                        name='email'
                        type='email'
                        id='email'
                        required
                        className='bg-[#18191E] border border-[@3353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='your_email@gmail.com'
                    />
                </div>
                <div className='mb-6'>                    
                    <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>
                        Subject
                    </label>
                    <input 
                        name='subject'
                        type='text'
                        id='subject'
                        required
                        className='bg-[#18191E] border border-[@3353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Just saying hi'
                    />
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor='message'
                        className='text-white block text-sm mb-2 font-medium'
                    >
                        Message
                    </label>
                    <textarea
                        name='message'
                        id='message'
                        className='bg-[#18191E] border border-[@3353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Let`s talk about...'
                    />
                </div>
                <button
                    type='submit'
                    className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection