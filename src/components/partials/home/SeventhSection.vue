<template>
    <section class=" w-full">
        <div class=" w-full py-44  px-4 xl:px-0">
            <div class=" relative border-gradient-top max-w-[78.75rem] lg:h-[15.375rem] rounded-[0.625rem] w-full pt-px pr-[0.6px] pl-[0.5px] mx-auto pb-px">
                 <div class=" relative p-10  bg-[#1F100A] rounded-[0.625rem] flex items-center justify-between lg:flex-row flex-col space-y-10 lg:space-y-0 lg:space-x-5 w-full h-full">
                    <div class=" flex flex-col items-start pt-5 ">
                        <span class=" text-[#EB6A21] font-normal text-xl sm:text-2xl titleShadow leading-normal">Subscribe to our</span>
                        <span class=" text-[#FFE0C3] text-[2.5rem] sm:text-[3.5rem] titleShadow leading-normal">Newsletter</span>
                    </div>
                    <div class=" flex flex-col items-start space-y-4 w-full max-w-[27.0625rem]">
                     <div class=" w-full relative">
                        <div class=" absolute top-4 left-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                                <path d="M4.57757 14.4816C3.1628 15.324 -0.546635 17.0441 1.71266 19.1966C2.81631 20.248 4.04549 21 5.59087 21H14.4091C15.9545 21 17.1837 20.248 18.2873 19.1966C20.5466 17.0441 16.8372 15.324 15.4224 14.4816C12.1048 12.5061 7.89519 12.5061 4.57757 14.4816Z" stroke="#F2D3B6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.5 5.5C14.5 7.98528 12.4853 10 10 10C7.51472 10 5.5 7.98528 5.5 5.5C5.5 3.01472 7.51472 1 10 1C12.4853 1 14.5 3.01472 14.5 5.5Z" stroke="#F2D3B6" stroke-width="1.5"/>
                            </svg>
                        </div>
                        <input type="text" placeholder="Your Name" class=" pl-12 font-quantico text-[#F2D3B6] placeholder-[#F2D3B6] font-normal text-base bg-[#311A11] rounded-lg outline-none  py-[1rem] px-[0.8125rem] w-full">
                     </div>
                     <div class=" w-full relative">
                        <div class=" absolute top-4 left-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="#F2D3B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7" stroke="#F2D3B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <input type="email" placeholder="Your Email Address" class=" pl-12 font-quantico text-[#F2D3B6] placeholder-[#F2D3B6] font-normal text-base bg-[#311A11] rounded-lg outline-none  py-[1rem] px-[0.8125rem] w-full">
                     </div>
                    </div>
                    <div>
                          <button class=" relative textShadow pt-4 hover:scale-110 duration-200 hover:text-yellow-400  w-[10rem] h-[5rem]  sm:w-[20.00344rem] sm:h-[6.32213rem] text-[1rem] md:text-[1.75rem] text-white text-center font-normal">
                           
                            <span class=" z-10 relative"> {{$t('Subscribe Now')}}</span>
                            <img src="/assets/redbtn.svg" class=" absolute  w-full h-full  top-0 left-0" alt="">
                        </button>
                    </div>
                 </div>
               
                 <div class=" absolute -bottom-20 left-10 ">
                    <img src="/assets/chardemon.svg" class=" w-full h-full object-cover" alt="">
                </div>
                
                <div class=" absolute -top-20 right-10 ">
                    <img src="/assets/charlight.svg" class=" w-full h-full object-cover" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
