import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="relative w-full h-[350px]">
            <div className="overflow-hidden bg-none w-full h-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31803.715212421906!2d7.012710214778532!3d4.86157064891061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d2740493eb2b%3A0x4506b5c52eff762e!2sRumuodara%2C%20Port%20Harcourt%20500102%2C%20Rivers!5e0!3m2!1sen!2sng!4v1730549644643!5m2!1sen!2sng" 
                className="w-full h-[350px]" allowFullScreen={false} loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

        <div className='bg-[#f9fafa] flex justify-center w-full h-auto lg:h-[577px] relative py-[100px]'>
            <div className='bg-dots bg-repeat absolute left-0 right-0 top-0 bottom-0 w-full h-full -z-[10px]' />
            <div className="flex flex-col lg:flex-row gap-7 lg:gap-5 items-center w-full xl:w-[1140px]
            m-3 lg:mx-auto z-10
            "
            >
                {/* Contact Details Section */}
                <div className="flex flex-col gap-4 w-full lg:w-1/2">
                    <h2
                    className='text-[#263a4f] text-[20px] md:text-[32px] font-semibold'
                    >
                        Get in touch with us & <br />
                        send us message today!
                    </h2>
                    <p
                    className='text-[#8d9aa8] text-xs md:text-base font-medium
                    leading-6 tracking-[-0.2px]
                    '
                    >
                        Danog is a different kind of architecture practice. Founded by LoganCee in 1991, 
                        we&apos;re an employee-owned firm pursuing a democratic design process that values 
                        everyone&apos;s input.
                    </p>
                    <h2
                    className='text-[#263a4f] text-base md:text-[20px] font-semibold'
                    >
                        198 West 21th Street, Suite 721 <br />
                        New York, NY 10010
                    </h2>

                    <div className="flex flex-col gap-2">
                        <h3 className='text-[#263a4f] text-[15px] font-semibold
                        '
                        >
                            EMAIL: ogbididaniel@gmail.com
                        </h3>
                        <h3 className='text-[#263a4f] text-[15px] font-semibold
                        '
                        >
                            PHONE: +234 904 567 2343
                        </h3>
                        <h3 className='text-[#263a4f] text-[15px] font-semibold
                        '
                        >
                            FAX: +234 904 567 2343
                        </h3>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <input 
                        type="text"
                        placeholder='Name'
                        className='w-full lg:w-1/2 px-[10px] py-[15px] focus:outline-[#0057FF]
                        h-[56px] text-[#495057] border border-[#ced4da] shadow-sm
                        transition-all duration-500 ease-in
                        ' 
                        />
                        <input 
                        type="text"
                        placeholder='Email'
                        className='w-full lg:w-1/2 px-[10px] py-[15px] focus:outline-[#0057FF]
                        h-[56px] text-[#495057] border border-[#ced4da] shadow-sm
                        transition-all duration-500 ease-in
                        ' 
                        />
                        
                    </div>

                    <textarea 
                    name="Message"
                    placeholder='Message'
                    rows={7}
                    className='px-[10px] py-[15px] focus:outline-[#0057FF] text-[#495057] 
                    border border-[#ced4da] shadow-sm transition-all duration-500 ease-in

                    '
                    ></textarea>

                    <button
                    className='px-[30px] w-[165px] h-[45px] bg-[#0057FF] hover:bg-[#232427]
                    text-sm text-white font-semibold transition-colors ease-in-out shadow-md
                    '
                    >
                        Send Message
                    </button>

                </div>

            </div>
        </div>

    </div>
  )
}

export default Contact