// header.js
document.addEventListener("DOMContentLoaded", function () {

    const header = `
    <header class="flex fixed z-30 top-0 w-full shadow-md bg-white lg:shadow-none">
        <div class="flex w-full max-w-7xl mx-auto py-1 px-5">
            <div class="flex w-full h-auto items-center justify-between space-x-5">
                <div class="flex divide-x flex-grow-0 h-12 lg:h-14 w-fit">
                    <div onclick="window.location.href='https://itm.edu'" class="flex w-fit h-full">
                        <img loading="lazy" src="https://itm.edu/assets/logo/logo-dark.webp" class="flex h-full w-auto object-contain"
                            alt="itm-logo">
                    </div>
                    <div class="flex lg:hidden xl:flex h-full w-fit">
                        <img loading="lazy"
                            src="https://www.itm.edu/idm-bachelor-of-design-in-fashion-design/assets/logo/32%20YEARS%20OF%20EDU.webp"
                            class="flex h-full w-auto object-contain" alt="32 Years logo">
                    </div>
                </div>
                <div class="hidden lg:flex flex-grow items-center justify-center w-full h-fit">
                    <ul class="text-xs h-14 hidden items-center justify-center rounded-full px-2 lg:flex bg-white  text-gray-900 shadow-lg border border-gray-300"
                        style="transform: none; transform-origin: 50% 50% 0px;">

                        <li id="Programs" class="program relative flex w-fit flex-col">
                            <a href="#" class="flex px-2 py-5 gap-1 group font-semibold hover:text-brand-red">
                                <span>Programs</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4 transform transition-transform duration-300 group-hover:text-brand-red">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>
                            <ul
                                class="program-list absolute top-full hidden w-52 flex-col divide-y rounded-md bg-white shadow-md">
                                <li class="relative flex w-full flex-col hover:shadow-md">
                                    <a href="#"
                                        class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md">Under Graduate
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="absolute right-5 w-4 h-4 transform transition-transform duration-300 rotate-90 group-hover:text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md">
                                        <li class="relative flex  hover:shadow-sm w-full">
                                            <a href="#"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full">Design
                                                and Media
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="absolute right-5 w-4 h-4 transform transition-transform duration-300 -rotate-90 group-hover:text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </a>
                                            <ul
                                                class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/idm-bachelor-of-design-in-fashion-design/"
                                                        class="w-full">IDM Bachelor of Design in Fashion Design</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/idm-bachelor-of-design-in-interior-design/"
                                                        class="w-full">IDM Bachelor of Design in Interior Design</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/idm-bachelor-of-design-in-visual-communication/"
                                                        class="w-full">IDM Bachelor of Design in Visual
                                                        Communication</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/idm-bachelor-of-design-in-animation-and-vfx/"
                                                        class="w-full">IDM Bachelor of Design in Animation and VFX</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/idm-bachelor-of-design-in-ux-design/"
                                                        class="w-full">IDM Bachelor of Design in UX Design</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="relative flex  hover:shadow-sm w-full">
                                            <a href="#"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full"> Business School
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="absolute right-5 w-4 h-4 transform transition-transform duration-300 -rotate-90 group-hover:text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </a>
                                            <ul
                                                class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/bachelor-of-buisness-adminstration/"
                                                        class="w-full">Bachelor of Business Administration</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="relative flex  hover:shadow-sm w-full">
                                            <a href="#"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full">Hotel
                                                Management
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="absolute right-5 w-4 h-4 transform transition-transform duration-300 -rotate-90 group-hover:text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </a>
                                            <ul
                                                class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/ihm-bachelor-of-science-in-hospitality-studies/"
                                                        class="w-full">Bachelor of Science in Hospitality Studies</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/ihm-ba-in-culinary-arts/"
                                                        class="w-full">Bachelor of Arts in Culinary Arts</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/ihm-bachelor-of-arts-in-international-culinary-arts/"
                                                        class="w-full">Bachelor of Arts in International Hospitality &
                                                        Tourism Management</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/ihm-bachelor-of-arts-in-international-hospitality-tourism-management/"
                                                        class="w-full">Bachelor of Arts in International Culinary
                                                        Arts</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/ihm-grand-diploma-in-patisserie-and-confectionery/"
                                                        class="w-full">Diploma in Patisserie & Confectionery</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="relative flex  hover:shadow-sm w-full">
                                            <a href="#"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full">Health
                                                Science
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="absolute right-5 w-4 h-4 transform transition-transform duration-300 -rotate-90 group-hover:text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </a>
                                            <ul
                                                class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/ihs-bachelor-of-optometry/"
                                                        class="w-full">Bachelor of Optometry</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/ihs-bachelors-of-science-in-medical-lab-technology/"
                                                        class="w-full">Bachelors Of Science in Medical Lab
                                                        Technology</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/ihs-basic-bachelor-of-science-in-nursing/"
                                                        class="w-full">Basic Bachelor of Science in Nursing</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="relative flex w-full flex-col hover:shadow-md">
                                    <a href="#"
                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full">Post
                                        Graduate
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="absolute right-5 w-4 h-4 transform transition-transform duration-300 rotate-90 group-hover:text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md">
                                        <li class="relative flex  hover:shadow-sm w-full">
                                            <a href="#"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full">MBA
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="absolute right-5 w-4 h-4 transform transition-transform duration-300 -rotate-90 group-hover:text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </a>
                                            <ul
                                                class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md w-full">
                                                    <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-marketing"
                                                        class="flex w-full">Marketing</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-business-analytics"
                                                        class="flex w-full">Business Analytics</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-financial-technology"
                                                        class="flex w-full">FinTech</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-operations-supply-chain-management"
                                                        class="flex w-full">Operations & Supply Chain Management</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-finance"
                                                        class="flex w-full">Finance</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-digital-marketing-transformation"
                                                        class="flex w-full">Digital Marketing & Transformation</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-retail-management-marketing"
                                                        class="flex w-full">Retail Management & Marketing</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-international-business"
                                                        class="flex w-full">International Business</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-human-resource-management"
                                                        class="flex w-full">Human Resource Management</a>
                                                </li>
                                                <li
                                                    class="flex px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-financial-markets"
                                                        class="flex w-full">Financial Markets</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="relative flex  hover:shadow-sm w-full">
                                            <a href="https://www.itm.edu/faq/cat"
                                                class="flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full">CAT
                                                FAQ
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="relative flex w-full flex-col hover:shadow-md">
                                    <a href="#"
                                        class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md">Masters
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="absolute right-5 w-4 h-4 transform transition-transform duration-300 rotate-90 group-hover:text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md">
                                        <li class="relative flex  hover:shadow-sm w-full">
                                            <a href="#"
                                                class="relative flex px-3 py-3 group gap-2 hover:text-white hover:bg-brand-red rounded-md w-full">Health
                                                Science
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="absolute right-5 w-4 h-4 transform transition-transform duration-300 -rotate-90 group-hover:text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </a>
                                            <ul
                                                class="program-list-items-value absolute left-full top-0 hidden w-56 flex-col divide-y bg-white shadow-md ">
                                                <li class="px-3 py-3 hover:text-white hover:bg-brand-red rounded-md">
                                                    <a href="https://www.itm.edu/ihs-masters-of-optometry/">Master Of
                                                        Optometry</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li id="IDM" class="program relative flex w-fit flex-col">
                            <a href="#" class="flex px-2 py-5 group font-semibold hover:text-brand-red">
                                <span>Design & Media</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4 transform transition-transform duration-300 group-hover:text-brand-red">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>
                            <ul
                                class="program-list absolute top-full hidden w-52 flex-col divide-y bg-white shadow-md rounded-md ">
                                <li class="relative flex w-full flex-col hover:shadow-md ">
                                    <a href="#"
                                        class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md">Specialization
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="absolute right-5 w-4 h-4 transform transition-transform duration-300 rotate-90 group-hover:text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/idm-bachelor-of-design-in-fashion-design/"
                                                class="flex px-3 py-3">IDM Bachelor of Design in Fashion Design</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/idm-bachelor-of-design-in-interior-design/"
                                                class="flex px-3 py-3">IDM Bachelor of Design in Interior Design</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/idm-bachelor-of-design-in-visual-communication/"
                                                class="flex px-3 py-3">IDM Bachelor of Design in Visiual
                                                Communicaction</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/idm-bachelor-of-design-in-animation-and-vfx/"
                                                class="flex px-3 py-3">IDM Bachelor of Design in Animation and VFX</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/idm-bachelor-of-design-in-ux-design/"
                                                class="flex px-3 py-3">IDM Bachelor of Design in UX Design</a>
                                        </li>

                                    </ul>
                                </li>
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                    <a href="https://www.itm.edu/blog/idm" class="flex px-3 py-3">Blog</a>
                                </li>
                                <li class="relative flex w-full flex-col hover:shadow-md">
                                    <a href="#"
                                        class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md">Campus
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="absolute right-5 w-4 h-4 transform transition-transform duration-300 rotate-90 group-hover:text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/itm-idm-andheri"
                                                class="flex px-3 py-3">Andheri</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/idm-itm-nerul" class="flex px-3 py-3">Nerul</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li id="MBA" class="program relative flex w-fit flex-col">
                            <a href="#" class="flex px-2 py-5 gap-1 group font-semibold hover:text-brand-red">
                                <span>Business School</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4 transform transition-transform duration-300 group-hover:text-brand-red">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>
                            <ul
                                class="program-list absolute top-full hidden w-52 flex-col divide-y bg-white shadow-md rounded-md ">
                                <li class="relative flex w-full flex-col hover:shadow-md ">
                                    <a href="#"
                                        class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md">Specialization
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="absolute right-5 w-4 h-4 transform transition-transform duration-300 rotate-90 group-hover:text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-financial-markets"
                                                class="flex px-3 py-3">Financial Markets</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-financial-technology"
                                                class="flex px-3 py-3">Fintech</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-business-analytics"
                                                class="flex px-3 py-3">Business Analytics</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-operations-supply-chain-management"
                                                class="flex px-3 py-3">
                                                Operations & Supply Chain Management</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-retail-management-marketing"
                                                class="flex px-3 py-3">Retail Management & Marketing</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-digital-marketing-transformation"
                                                class="flex px-3 py-3">Digital Marketing & Transformation</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-finance"
                                                class="flex px-3 py-3">Finance</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-human-resource-management"
                                                class="flex px-3 py-3">Human Resource Management</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-marketing"
                                                class="flex px-3 py-3">Marketing</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/pgdm-post-graduate-diploma-in-management-international-business"
                                                class="flex px-3 py-3">International Business</a>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md ">
                                    <a href="https://www.itm.edu/faq/cat" class="flex px-3 py-3">FAQ</a>
                                </li>
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md ">
                                    <a href="https://www.itm.edu/blog/pgdm" class="flex px-3 py-3">Blog</a>
                                </li>
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md ">
                                    <a href="https://www.itm.edu/alumni/pgdm" class="flex px-3 py-3">Alumni</a>
                                </li>
                                <li class="relative flex w-full flex-col hover:shadow-md">
                                    <a href="#"
                                        class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md">Campus
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="absolute right-5 w-4 h-4 transform transition-transform duration-300 rotate-90 group-hover:text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/itm-kharghar"
                                                class="flex px-3 py-3">Kharghar</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://itm.ac.in/" class="flex px-3 py-3">Vadodara</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itmuniversity.org/" class="flex px-3 py-3">Raipur</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li id="IHM" class="program relative flex w-fit flex-col">
                            <a href="#" class="flex px-2 py-5 gap-1 group font-semibold hover:text-brand-red">
                                <span>Hotel Management</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4 transform transition-transform duration-300 group-hover:text-brand-red">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>
                            <ul
                                class="program-list absolute top-full hidden w-52 flex-col divide-y bg-white shadow-md rounded-md ">
                                <li class="relative flex w-full flex-col hover:shadow-md ">
                                    <a href="#"
                                        class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md">Specialization
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="absolute right-5 w-4 h-4 transform transition-transform duration-300 rotate-90 group-hover:text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/ihm-bachelor-of-arts-in-international-hospitality-tourism-management/"
                                                class="flex px-3 py-3">Bachelor of Arts in International Hospitality &
                                                Tourism Management</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/ihm-bachelor-of-arts-in-international-culinary-arts/"
                                                class="flex px-3 py-3">Bachelor of Arts in International Culinary
                                                Arts</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/ihm-bachelor-of-science-in-hospitality-studies/"
                                                class="flex px-3 py-3">Bachelor of Science in Hospitality Studies</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/ihm-ba-in-culinary-arts/"
                                                class="flex px-3 py-3">
                                                BA in Culinary Arts</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/ihm-grand-diploma-in-patisserie-and-confectionery/"
                                                class="flex px-3 py-3">Diploma in Patisserie & Confectionery</a>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                    <a href="https://www.itm.edu/faq/hotel-management" class="flex px-3 py-3">FAQ</a>
                                </li>
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                    <a href="https://www.itm.edu/blog/ihm" class="flex px-3 py-3">Blog</a>
                                </li>
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                    <a href="https://www.itm.edu/alumni/ihm" class="flex px-3 py-3">Alumni</a>
                                </li>
                                <li class="relative flex w-full flex-col hover:shadow-md">
                                    <a href="#"
                                        class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md">campus
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="absolute right-5 w-4 h-4 transform transition-transform duration-300 rotate-90 group-hover:text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/ihm-itm-oshiwara"
                                                class="flex px-3 py-3">Oshiwara</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/itm-ihm-navi-mumbai"
                                                class="flex px-3 py-3">Nerul</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li id="IHS" class="program relative flex w-fit flex-col">
                            <a href="#" class="flex px-2 py-5 gap-1 group font-semibold hover:text-brand-red">
                                <span>Health Sciences</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4 transform transition-transform duration-300 group-hover:text-brand-red">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>
                            <ul
                                class="program-list absolute top-full hidden w-52 flex-col divide-y bg-white shadow-md rounded-md ">
                                <li class="relative flex w-full flex-col hover:shadow-md ">
                                    <a href="#"
                                        class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md">Specialization
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="absolute right-5 w-4 h-4 transform transition-transform duration-300 rotate-90 group-hover:text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/ihs-bachelor-of-optometry/"
                                                class="flex px-3 py-3">IHS Bachelor of Optometry</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/ihs-bachelors-of-science-in-medical-lab-technology/"
                                                class="flex px-3 py-3">IHS Bachelor of Science in Medical Lab
                                                Technology</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/ihs-basic-bachelor-of-science-in-nursing/"
                                                class="flex px-3 py-3">IHS Basic Bachelor of Science in Nursing</a>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                    <a href="https://www.itm.edu/blog/ihs" class="flex px-3 py-3">Blog</a>
                                </li>
                                <li class="relative flex w-full flex-col hover:shadow-md">
                                    <a href="#"
                                        class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md">Campus
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="absolute right-5 w-4 h-4 transform transition-transform duration-300 rotate-90 group-hover:text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list-items absolute left-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/itm-ihs-panvel" class="flex px-3 py-3">IHS
                                                Panvel</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li id="Our-Institute" class="program relative flex w-fit flex-col">
                            <a href="#" class="flex px-2 py-5 gap-1 group font-semibold hover:text-brand-red">
                                <span>Our Institutes</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4 transform transition-transform duration-300 group-hover:text-brand-red">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>
                            <ul
                                class="program-list absolute top-full hidden w-60 flex-col divide-y bg-white shadow-md rounded-md">
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                    <a href="https://www.itm.edu/institute-of-business-administration/"
                                        class="flex px-3 py-3">ITM
                                        Business School</a>
                                </li>
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                    <a href="https://www.itm.edu/institute-of-design-and-media/"
                                        class="flex px-3 py-3">ITM
                                        Institute of Design & Media</a>
                                </li>
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                    <a href="https://www.itm.edu/institute-of-hotel-management/"
                                        class="flex px-3 py-3">ITM
                                        Institute of Hotel Management</a>
                                </li>
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                    <a href="https://www.itm.edu/institute-of-health-sciences/"
                                        class="flex px-3 py-3">ITM
                                        Institute of Health Sciences</a>
                                </li>
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                    <a href="https://www.itmuniversity.org/" class="flex px-3 py-3">ITM
                                        University Raipur</a>
                                </li>
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                    <a href="https://www.itm.ac.in/" class="flex px-3 py-3">ITM
                                        University Vadodara</a>
                                </li>
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                    <a href="https://www.itm.edu/ISA/" class="flex px-3 py-3">ITM
                                        Skills Academy</a>
                                </li>
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                    <a href="https://isu.ac.in" class="flex px-3 py-3">ITM
                                        Skills University</a>
                                </li>
                            </ul>
                        </li>

                        <li id="About-us" class="program relative flex w-fit flex-col">
                            <a href="#" class="flex px-2 py-5 gap-1 group font-semibold hover:text-brand-red">
                                <span>About Us</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-4 h-4 transform transition-transform duration-300 group-hover:text-brand-red">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>
                            <ul
                                class="program-list absolute top-full hidden w-52 flex-col divide-y bg-white shadow-md rounded-md ">
                                <li
                                    class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                    <a href="https://www.itm.edu/aboutus" class="flex px-3 py-3">About Us</a>
                                </li>
                                <li class="relative flex w-full flex-col hover:shadow-md ">
                                    <a href="#"
                                        class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md">Contact
                                        Us
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="absolute right-5 w-4 h-4 transform transition-transform duration-300 group-hover:rotate-90 group-hover:text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </a>
                                    <ul
                                        class="program-list-items absolute right-full top-0 hidden w-56 flex-col divide-y shadow-md rounded-md">
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/contactus/pgdm" class="flex px-3 py-3">Business
                                                School</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/contactus/idm" class="flex px-3 py-3">Desgin &
                                                Media</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/contactus/ihm" class="flex px-3 py-3">Hotel
                                                Management</a>
                                        </li>
                                        <li
                                            class="relative flex w-full flex-col hover:shadow-md hover:text-white hover:bg-brand-red rounded-md">
                                            <a href="https://www.itm.edu/contactus/ihs" class="flex px-3 py-3">Health
                                                Science</a>
                                        </li>

                                    </ul>
                                </li>
                                <li class="relative flex w-full flex-col hover:shadow-md ">
                                    <a href="https://www.itm.edu/blog"
                                        class="relative flex px-3 py-3 group hover:text-white hover:bg-brand-red rounded-md">Blogs
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <a href="https://www.itm.edu/applynow"
                            class="cursor-pointer text-white select-none whitespace-nowrap rounded-full bg-brand-red p-3 font-semibold transition duration-300 hover:bg-black">
                            Apply Now
                        </a>
                    </ul>
                </div>
                <nav id="mobile-nav"
                    class="hidden lg:hidden flex-col absolute w-full py-1 z-20 gap-2 max-w-sm  right-0 top-0 h-screen bg-white shadow-md">
                    <div class="flex w-full px-2 items-center justify-between">
                        <div class="h-14 w-auto ">
                            <img loading="lazy" class="flex w-full h-full object-contain"
                                src="https://www.itm.edu/assets/logo/logo-dark.webp" alt="logo">
                        </div>
                        <div class="flex w-auto h-full items-center justify-end">

                            <button id="close" 
                                class="flex  rounded-md     py-2 px-2 items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <hr>
                    <div class="flex w-full h-full overflow-y-scroll card-scroll pb-20">
                        <ul class="navbar flex flex-col divide-y w-full h-fit">
                            <li
                                class="flex w-full transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white">
                                <a class="flex w-full px-5 py-3"
                                    href="https://www.itm.edu/institute-of-business-administration/">ITM Business
                                    School</a>
                            </li>
                            <li
                                class="flex w-full transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white">
                                <a class="flex w-full px-5 py-3"
                                    href="https://www.itm.edu/institute-of-design-and-media/">ITM Institute of Design &
                                    Media</a>
                            </li>
                            <li
                                class="flex w-full transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white">
                                <a class="flex w-full px-5 py-3"
                                    href="https://www.itm.edu/institute-of-hotel-management/">ITM Institute of Hotel
                                    Management<a>
                            </li>
                            <li
                                class="flex w-full transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white">
                                <a class="flex w-full px-5 py-3"
                                    href="https://www.itm.edu/institute-of-health-sciences/">ITM Institute of Health
                                    Science<a>
                            </li>

                            <li class="flex w-full transition-all border ">
                                <details class="mobile-program-details flex flex-col w-full rounded-md">
                                    <summary class="flex relative w-full px-5 py-3">
                                        <span class="flex w-full">Program</span>
                                        <span class="flex absolute right-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="w-6 h-6">
                                                <path fill-rule="evenodd"
                                                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div class="flex w-full">
                                        <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                            <li class="flex w-full transition-all ">
                                                <details
                                                    class="mobile-occupation-details flex flex-col w-full rounded-md">
                                                    <summary class="flex relative w-full px-5 py-3">
                                                        <span class="flex w-full">Under Graduate</span>
                                                        <span class="flex absolute right-5">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                fill="currentColor" class="w-6 h-6">
                                                                <path fill-rule="evenodd"
                                                                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                    clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                    </summary>
                                                    <div class="flex w-full">
                                                        <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                            <li class="flex w-full transition-all ">
                                                                <details
                                                                    class="mobile-specilazation-details flex flex-col w-full rounded-md">
                                                                    <summary class="flex relative w-full px-5 py-3">
                                                                        <span class="flex w-full">Desgin And
                                                                            Media</span>
                                                                        <span class="flex absolute right-5">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24" fill="currentColor"
                                                                                class="w-6 h-6">
                                                                                <path fill-rule="evenodd"
                                                                                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                                    clip-rule="evenodd" />
                                                                            </svg>
                                                                        </span>
                                                                    </summary>
                                                                    <div class="flex w-full">
                                                                        <ul
                                                                            class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/idm-bachelor-of-design-in-fashion-design/'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Bachelor of Design in Fashion Design
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/idm-bachelor-of-design-in-interior-design/'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Bachelor of Design in Interior
                                                                                    Design
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/idm-bachelor-of-design-in-visual-communication/'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Bachelor of Design in Visual
                                                                                    Communication
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/idm-bachelor-of-design-in-animation-and-vfx/'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Bachelor of Design in Animation and
                                                                                    VFX
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/idm-bachelor-of-design-in-ux-design/'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Bachelor of Design in UX Design
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>

                                                                </details>
                                                            </li>
                                                            <li class="flex w-full transition-all ">
                                                                <details
                                                                    class="mobile-specilazation-details flex flex-col w-full rounded-md">
                                                                    <summary class="flex relative w-full px-5 py-3">
                                                                        <span class="flex w-full">Hotel
                                                                            Management</span>
                                                                        <span class="flex absolute right-5">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24" fill="currentColor"
                                                                                class="w-6 h-6">
                                                                                <path fill-rule="evenodd"
                                                                                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                                    clip-rule="evenodd" />
                                                                            </svg>
                                                                        </span>
                                                                    </summary>
                                                                    <div class="flex w-full">
                                                                        <ul
                                                                            class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/ihm-bachelor-of-arts-in-international-hospitality-tourism-management/'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Bachelor of Arts in International
                                                                                    Hospitality & Tourism Management
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/ihm-bachelor-of-arts-in-international-culinary-arts/'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Bachelor of Arts in International
                                                                                    Culinary Arts
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/ihm-bachelor-of-science-in-hospitality-studies/'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Bachelor of Science in Hospitality
                                                                                    studies
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/ihm-ba-in-culinary-arts/'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    BA in Culinary Arts
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/ihm-grand-diploma-in-patisserie-and-confectionery/'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Diploma in Patisserie &
                                                                                    Confectionery
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>

                                                                </details>
                                                            </li>
                                                            <li class="flex w-full transition-all ">
                                                                <details
                                                                    class="mobile-specilazation-details flex flex-col w-full rounded-md">
                                                                    <summary class="flex relative w-full px-5 py-3">
                                                                        <span class="flex w-full">Health Science</span>
                                                                        <span class="flex absolute right-5">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24" fill="currentColor"
                                                                                class="w-6 h-6">
                                                                                <path fill-rule="evenodd"
                                                                                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                                    clip-rule="evenodd" />
                                                                            </svg>
                                                                        </span>
                                                                    </summary>
                                                                    <div class="flex w-full">
                                                                        <ul
                                                                            class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/ihs-bachelor-of-optometry/'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    IHS Bachelor of Optometry
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/ihs-bachelors-of-science-in-medical-lab-technology/'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    IHS Bachelors Of Science in Medical
                                                                                    Lab Technology
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/ihs-basic-bachelor-of-science-in-nursing/'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    IHS Basic Bachelor of Science in
                                                                                    Nursing
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>

                                                                </details>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </details>
                                            </li>
                                            <li class="flex w-full transition-all ">
                                                <details
                                                    class="mobile-occupation-details flex flex-col w-full rounded-md">
                                                    <summary class="flex relative w-full px-5 py-3">
                                                        <span class="flex w-full">Post Graduate</span>
                                                        <span class="flex absolute right-5">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                fill="currentColor" class="w-6 h-6">
                                                                <path fill-rule="evenodd"
                                                                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                    clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                    </summary>
                                                    <div class="flex w-full">
                                                        <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                                            <li class="flex w-full transition-all ">
                                                                <details
                                                                    class="mobile-specilazation-details  flex flex-col w-full rounded-md">
                                                                    <summary class="flex relative w-full px-5 py-3">
                                                                        <span class="flex w-full">Business School</span>
                                                                        <span class="flex absolute right-5">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24" fill="currentColor"
                                                                                class="w-6 h-6">
                                                                                <path fill-rule="evenodd"
                                                                                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                                    clip-rule="evenodd" />
                                                                            </svg>
                                                                        </span>
                                                                    </summary>
                                                                    <div class="flex w-full">
                                                                        <ul
                                                                            class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/pgdm-post-graduate-diploma-in-management-marketing'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Marketing Management
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/pgdm-post-graduate-diploma-in-management-international-business'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    International Business
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/pgdm-post-graduate-diploma-in-management-human-resource-management'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Human Resources Management
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/pgdm-post-graduate-diploma-in-management-operations-supply-chain-management'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Operation & Supply Chain Management
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/pgdm-post-graduate-diploma-in-management-finance'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Finance
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/pgdm-post-graduate-diploma-in-management-financial-technology'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Fintech
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/pgdm-post-graduate-diploma-in-management-digital-marketing-transformation'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Digital Marketing & media Management
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/pgdm-post-graduate-diploma-in-management-business-analytics'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Business Analytics
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/pgdm-post-graduate-diploma-in-management-retail-management-marketing'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Retail Management & E-Commerce
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/pgdm-post-graduate-diploma-in-management-financial-markets'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Financial Services
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>

                                                                </details>
                                                            </li>
                                                            <li class="flex w-full transition-all ">
                                                                <details
                                                                    class="mobile-specilazation-details  flex flex-col w-full rounded-md">
                                                                    <summary class="flex relative w-full px-5 py-3">
                                                                        <span class="flex w-full">Health Science</span>
                                                                        <span class="flex absolute right-5">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24" fill="currentColor"
                                                                                class="w-6 h-6">
                                                                                <path fill-rule="evenodd"
                                                                                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                                                    clip-rule="evenodd" />
                                                                            </svg>
                                                                        </span>
                                                                    </summary>
                                                                    <div class="flex w-full">
                                                                        <ul
                                                                            class="grid grid-cols-1 pl-3 divide-y w-full">
                                                                            <li
                                                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                                                <span
                                                                                    onclick="window.location.href ='https://www.itm.edu/ihs-masters-of-optometry/'"
                                                                                    class="flex w-full px-5 py-3">
                                                                                    Master Of Optometry
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>

                                                                </details>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </details>
                                            </li>
                                        </ul>
                                    </div>
                                </details>
                            </li>
                            <li class="flex w-full transition-all ">
                                <details class="mobile-program-details flex flex-col w-full rounded-md">
                                    <summary class="flex relative w-full px-5 py-3">
                                        <span class="flex w-full">Our Institutes</span>
                                        <span class="flex absolute right-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="w-6 h-6">
                                                <path fill-rule="evenodd"
                                                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div class="flex w-full">
                                        <ul class="grid grid-cols-1 pl-3 divide-y w-full">
                                            <li
                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                <span
                                                    onclick="window.location.href ='https://www.itm.edu/institute-of-business-administration/'"
                                                    class="flex w-full px-5 py-3">
                                                    ITM Business School
                                                </span>
                                            </li>
                                            <li
                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                <span
                                                    onclick="window.location.href ='https://www.itm.edu/institute-of-design-and-media/'"
                                                    class="flex w-full px-5 py-3">
                                                    ITM Institute of Design And Media
                                                </span>
                                            </li>
                                            <li
                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                <span
                                                    onclick="window.location.href ='https://www.itm.edu/institute-of-hotel-management/'"
                                                    class="flex w-full px-5 py-3">
                                                    ITM Institute of Hotel Management
                                                </span>
                                            </li>
                                            <li
                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                <span
                                                    onclick="window.location.href ='https://www.itm.edu/institute-of-health-sciences/'"
                                                    class="flex w-full px-5 py-3">
                                                    ITM Institute of Health Sciences
                                                </span>
                                            </li>
                                            <li
                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                <span onclick="window.location.href ='https://www.itmuniversity.org/'"
                                                    class="flex w-full px-5 py-3">
                                                    ITM University Raipur
                                                </span>
                                            </li>
                                            <li
                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                <span onclick="window.location.href ='https://www.itm.ac.in/'"
                                                    class="flex w-full px-5 py-3">
                                                    ITM University Vododara
                                                </span>
                                            </li>
                                            <li
                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                <span onclick="window.location.href ='https://www.itm.edu/ISA/'"
                                                    class="flex w-full px-5 py-3">
                                                    ITM Skills Academy
                                                </span>
                                            </li>
                                            <li
                                                class="flex w-full cursor-pointer transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white ">
                                                <span onclick="window.location.href ='https://isu.ac.in'"
                                                    class="flex w-full px-5 py-3">
                                                    ITM Skills University
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                </details>
                            </li>

                            <li
                                class="flex w-full transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white">
                                <a class="flex w-full px-5 py-3" href="https://www.itm.edu/blog">Blogs<a>
                            </li>
                            <li
                                class="flex w-full transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white">
                                <a class="flex w-full px-5 py-3" href="https://www.itm.edu/aboutus">About us<a>
                            </li>
                            <li
                                class="flex w-full transition-all rounded-md text-gray-700 hover:bg-brand-red hover:text-white">
                                <a class="flex w-full px-5 py-3" href="https://www.itm.edu/contactus">Contact us<a>
                            </li>
                            <li class="flex w-full items-center px-5 py-5 gap-2">
                                <a class="shimmer-effect2 text-white bg-brand-red flex  py-2 px-5 rounded-md text-center items-center justify-center font-normal text-lg "
                                    href="https://www.itm.edu/applynow">Apply
                                    Now</a>
                            </li>
                        </ul>
                    </div>

                </nav>
                <div
                    class="flex-grow-0 h-fit w-fit lg:hidden lg:rounded-full bg-white rounded-md transition-all hover:text-white hover:bg-brand-red lg:shadow-md">
                    <button id="open" 
                        class="flex w-fit h-fit rounded-md py-2 px-2 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-7 h-7 ">
                            <path fill-rule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
    `;

    const headerContainer = document.getElementById("header-container");
    headerContainer.innerHTML = header;

    const mobileMenu = document.getElementById("mobile-nav");
    const openButton = document.getElementById("open");
    const closeButton = document.getElementById("close");


    // open menu
    openButton.addEventListener('click', () => {
        mobileMenu.style.display = "flex";
        openButton.style.display = "none";
        closeButton.style.display = "block";
    });

    closeButton.addEventListener('click', () => {
        mobileMenu.style.display = "none";
        openButton.style.display = "block";
        closeButton.style.display = "none";
    });
    // open menu
    


});