import React, { useState, useEffect } from 'react'
import { Form, Input, Button, message, Space, Carousel } from 'antd';
import Nav from './Nav'
import teaching from './images/teaching.svg'
import pen from './images/pen.png'
import bulb from './images/bulb.png'
import sun from './images/sun.png'
import calender from './images/calender.png'
import easy from './images/easy.png'
import training from './images/training.png'

function Landing() {
    const [scrolling, setScrolling] = useState(false);
    const [readMore, setReadMore] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const success = (e) => {
        console.log(e)
        messageApi.open({
            type: 'success',
            content: 'Newsletter sent successfully!!',
        });
    };

    const hideLogo = () => {
        if (window.scrollY >= 60) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        hideLogo();
        window.addEventListener("scroll", hideLogo);
    });


    return (
        <>
            <Nav scrolling={scrolling} />
            <main className='pt-32'>
                <section className='grid grid-cols-2 mt-4'>
                    <div className='m-auto tracking-widest '>
                        <h1 className=' text-6xl font-light'><span className='text-7xl font-semibold text-amber-500 '>Learn</span> to teach,</h1>
                        <h1 className='p-4 text-center text-6xl font-light'><span className='text-7xl font-semibold text-amber-500'>Teach</span> to learn.</h1>
                        <p className='text-center'>We are here to ensure your child brings the best results home<br></br> by creating a pressure less environment of learning.</p>
                        <p className='font-bold text-center pt-4 pr-1 pb-4 '>Get our NewsLetter...</p>

                        <Form
                            onFinish={success}

                            initialValues={{
                                email: '',
                            }}
                        >
                            <Form.Item

                                name="email"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not a valid email address',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input
                                    allowClear
                                    className="flex border border-gray-300 rounded-lg py-2 px-4  w-full appearance-none leading-normal"
                                    placeholder="Enter your email"
                                />
                            </Form.Item>
                            <Form.Item>
                                {contextHolder}
                                <Button
                                    className="bg-amber-500 text-white font-bold  px-4 rounded w-full"
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Get Started
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                    <picture className='pr-8 relative'>
                        <img src={teaching} alt='image1' />
                        <img src={pen} alt='image2' className='absolute translate-x-full translate-y-full top-12 left-36' />
                        <img src={bulb} alt='image3' className='w-14 absolute translate-x-full translate-y-full right-40 top-1' />
                    </picture>

                </section>
                <section className='grid grid-cols-3 mt-20 '>
                    <div className='m-auto text-center '>
                        <h1 className='font-semibold text-4xl '>Why people choose<br></br> <span className='text-amber-500'>Teach a Student?</span></h1>
                        <p className='text-center italic tracking-wider pt-4'>We aim to deliver our best to all of our clients.</p>
                        <p className={readMore ? 'pl-4 pt-2  transition duration-500 ease-in-out  tracking-tight ' : 'hidden'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt quam id risus mollis, auctor ornare massa euismod. Morbi vel arcu vel velit auctor rhoncus id id urna. Aliquam erat volutpat. Mauris viverra, leo a hendrerit elementum, quam nulla semper massa, et ultricies est dolor sed velit. Integer vel velit vel velit sodales varius. Donec in nisi mauris. In quis purus turpis. Pellentesque non odio eget turpis pharetra bibendum. Integer cursus odio at turpis porta, et facilisis mi elementum. Morbi sit amet nibh sit amet dolor cursus fermentum. Suspendisse potenti.</p>


                        <button onClick={() => setReadMore(!readMore)} className='float-right pt-4 underline font-semibold hover:text-amber-500'>{readMore ? 'READ LESS' : "READ MORE"}</button>
                    </div>
                    <div className='col-span-2 grid grid-cols-2 gap-6 pt-8  place-items-center whitespace-normal'>
                        <div className='w-9/12 mb-4'>
                            <img src={easy} alt='easy' className='shadow-lg p-1 rounded-full mb-1 w-8 ml-4' />
                            <div className=' shadow-md  px-4 py-1 rounded-xl'>
                                <h1 className='font-bold text-lg tracking-wide pb-2'>Easy accessability</h1>
                                <p>We are to enlighten your future and never stop learning.</p>
                            </div>
                        </div>
                        <div className='w-9/12 mb-4'>
                            <img src={calender} alt='easy' className='shadow-lg p-1 rounded-full mb-1 w-8 ml-4' />
                            <div className=' shadow-md  px-4 py-1 rounded-xl'>
                                <h1 className='font-bold text-lg tracking-wide pb-2'>Schedule learning</h1>
                                <p>We are to enlighten your future and never stop learning.</p>
                            </div>
                        </div>
                        <div className='w-9/12 mb-4'>
                            <img src={training} alt='easy' className='shadow-lg p-1 rounded-full mb-1 w-8 ml-4' />
                            <div className=' shadow-md  px-4 py-1 rounded-xl'>
                                <h1 className='font-bold text-lg tracking-wide pb-2'>One on One sessions</h1>
                                <p>We are to enlighten your future and never stop learning.</p>
                            </div>
                        </div>

                        <div className='w-9/12 mb-4'>
                            <img src={sun} alt='easy' className='shadow-lg p-1 rounded-full mb-1 w-8 ml-4' />
                            <div className=' shadow-md  px-4 py-1 rounded-xl'>
                                <h1 className='font-bold text-lg tracking-wide pb-2'>Practical learning</h1>
                                <p>We are to enlighten your future and never stop learning.</p>
                            </div>
                        </div>


                    </div>
                </section>
                <section className='mt-20 grid grid-cols-2 m-auto'>
                    <div className=''>
                        <h1 className='text-center text-3xl font-bold'>Welcome to Teach a Student agency</h1>
                        <p className='text-start px-16 mt-8  '>We are to enlighten your future never stop learning even when you have no one to tutor you.You can find our tutors from here and you can pick a tutor that meets your needs.
                         <span className='flex mt-2 cursor-pointer hover:text-amber-500 font-semibold'>Read more
                            <span className=' place-items-center'>
                             <lord-icon
                        
                            src="https://cdn.lordicon.com/zmkotitn.json"
                            trigger="hover"
                            colors="primary:#e88c30"
                            state="hover-1"
                            
                            style={{'width':'30px', 'height':'30px'}}
                            >
                        </lord-icon>
                        </span>
                        </span>
                        </p>
                       
                       
                    </div>
                    <iframe className="border-r-4 border-t-4 border-amber-500 rounded-sm" width="500" height="250" src="https://www.youtube.com/embed/lQJSWH2S-BU" title="WIZ KID | 2 Hours of Chill Songs | Afrobeats/R&B MUSIC PLAYLIST | Starboy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                </section>

                {/* <section>
                    <Carousel autoplay>
                        <div className="flex items-center justify-center h-64 bg-gray-200">
                            <p className="text-xl font-bold">Testimonial 1</p>
                        </div>
                        <div className="flex items-center justify-center h-64 bg-gray-200">
                            <p className="text-xl font-bold">Testimonial 2</p>
                        </div>
                        <div className="flex items-center justify-center h-64 bg-gray-200">
                            <p className="text-xl font-bold">Testimonial 3</p>
                        </div>
                    </Carousel>
                </section> */}
            </main>
        </>
    )
}

export default Landing