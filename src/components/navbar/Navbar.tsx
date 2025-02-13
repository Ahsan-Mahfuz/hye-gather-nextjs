'use client'

import { useState } from 'react'
import Logout from '../logout/Logout'
import { Menu, X } from 'lucide-react'
import { FaRegUser } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { IoNotificationsOutline } from 'react-icons/io5'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [userType, setUserType] = useState('login-Normal') // Normal, login-Normal, login-Vendor
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const getLinkClass = (path: string) =>
    pathname === path
      ? 'underline underline-offset-8 decoration-4 decoration-blue-800'
      : 'no-underline'

  return (
    <div className="py-5 px-2  z-50 responsive-width">
      <section>
        {/* Normal User Navbar */}
        <div className="font-semibold">
          {userType === 'Normal' && (
            <div className="flex justify-between items-center">
              <div>
                <Link href="/home">
                  <section className="flex justify-center items-center gap-2">
                    <div>
                      <Image
                        src="/logo.svg"
                        alt="logo"
                        className="h-[50px] w-[50px]"
                        width={5000}
                        height={50}
                      />
                    </div>
                    <div className="text-blue-800">HYE GATHER</div>
                  </section>
                </Link>
              </div>

              <div>
                <div className="flex max-md:hidden justify-between items-center gap-10 ">
                  <Link href="/home" className={getLinkClass('/home')}>
                    Home
                  </Link>
                  <Link
                    href="/explore-vendors"
                    className={getLinkClass('/explore-vendors')}
                  >
                    Explore Vendors
                  </Link>
                  <Link
                    href="/contact-us"
                    className={getLinkClass('/contact-us')}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/sign-in"
                    className={`getLinkClass('/sign-in') bg-blue-200 hover:bg-blue-100 p-3 rounded-md`}
                  >
                    Get Started
                  </Link>
                </div>

                <div className="relative max-md:block hidden cursor-pointer">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all"
                  >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>

                  {isOpen && (
                    <div
                      className="z-10 cursor-pointer absolute top-12 right-0 w-48  bg-[#dbefea] text-black shadow-lg rounded-lg p-4"
                      onMouseLeave={() => setIsOpen(false)}
                    >
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/home"
                            className={`p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/explore-vendors"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Explore Vendors
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/contact-us"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Contact Us
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/sign-in"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Get Started
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Login Normal User Navbar */}
        <div className="font-semibold">
          {userType === 'login-Normal' && (
            <div className="flex justify-between items-center">
              <div>
                <Link href="/user-home">
                  <section className="flex justify-center items-center gap-2">
                    <div>
                      <Image
                        src="/logo.svg"
                        alt="logo"
                        className="h-[50px] w-[50px]"
                        width={5000}
                        height={50}
                      />
                    </div>
                    <div className="text-blue-800">HYE GATHER</div>
                  </section>
                </Link>
              </div>

              <div>
                <div className="flex max-md:hidden justify-between items-center gap-10 ">
                  <Link href="/user-home" className={getLinkClass('/user-home')}>
                    Home
                  </Link>
                  <Link
                    href="/vendors"
                    className={getLinkClass('/vendors')}
                  >
                    Vendors
                  </Link>
                  <Link
                    href="/contact-us"
                    className={getLinkClass('/contact-us')}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/sign-in"
                    className={`getLinkClass('/sign-in') bg-blue-200 hover:bg-blue-100 p-3 rounded-md`}
                  >
                    Get Started
                  </Link>
                </div>

                <div className="relative max-md:block hidden cursor-pointer">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all"
                  >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>

                  {isOpen && (
                    <div
                      className="z-10 cursor-pointer absolute top-12 right-0 w-48  bg-[#dbefea] text-black shadow-lg rounded-lg p-4"
                      onMouseLeave={() => setIsOpen(false)}
                    >
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/home"
                            className={`p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/vendors"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Vendors
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/contact-us"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Contact Us
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/sign-in"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Get Started
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Login Vendor User Navbar */}
        {/* <div>
          {userType === 'login-Vendor' && (
            <>
              <div className="flex max-lg:hidden justify-between items-center gap-10">
                <Link
                  to="/customer-request"
                  className={getLinkClass('/customer-request')}
                  state={{ customerState: 'New Request' }}
                >
                  Customer Request
                </Link>
                <Link
                  to="/business-profiles"
                  className={getLinkClass('/business-profiles')}
                >
                  Business Profiles
                </Link>
                <Link
                  to="/buy-credits"
                  className={getLinkClass('/buy-credits')}
                >
                  Buy Credits
                </Link>

                <div className="flex items-center justify-center -gap-2">
                  <img
                    src={creditImage}
                    loading="lazy"
                    decoding="async"
                    alt="credit image"
                  />
                  50
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="flex items-center gap-1 cursor-pointer">
                    <FaRegUser />
                    <span>Ahsan Mafhuz</span>
                    <IoIosArrowDown />
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute top-6 -right-2.5 z-10 bg-white rounded shadow-lg p-1 w-48">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Account Settings
                      </Link>

                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>

                      <Link
                        to="/customer-request"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        state={{ customerState: 'Running Order' }}
                      >
                        Running Order
                      </Link>

                      <Link
                        to="/customer-request"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        state={{ customerState: 'History' }}
                      >
                        Order History
                      </Link>

                      <Link
                        to="/transaction-history"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Transaction History
                      </Link>

                      <Link
                        to="/contact-us"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Help & Support
                      </Link>

                      <Link
                        to="/notification"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Notifications
                      </Link>

                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Logout />
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/notification"
                  className={getLinkClass('/notification')}
                >
                  <IoNotificationsOutline className="text-3xl text-black hover:bg-gray-200 cursor-pointer bg-white p-1 rounded-full" />
                </Link>
              </div>

              <div className="relative max-lg:block hidden cursor-pointer">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {isOpen && (
                  <div
                    className="z-10 cursor-pointer  absolute top-12 right-0 w-56 text-black  bg-[#dbefea] shadow-lg rounded-lg p-4"
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <ul className="space-y-2">
                      <li>
                        <Link
                          to="/dashboard"
                          className={`${getLinkClass(
                            '/dashboard'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                        >
                          Dashboard
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/customer-request"
                          className={`${getLinkClass(
                            '/customer-request'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                          state={{ customerState: 'New Request' }}
                        >
                          Customer Request
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/buy-credits"
                          className={`${getLinkClass(
                            '/buy-credits'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Buy Credits
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/business-profiles"
                          className={`${getLinkClass(
                            '/business-profiles'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Business Profiles
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/transaction-history"
                          className={`${getLinkClass(
                            '/transaction-history'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Transaction History
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/contact-us"
                          className={`${getLinkClass(
                            '/contact-us'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Help & Support
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/profile"
                          className={`${getLinkClass(
                            '/profile'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Account Settings
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/notification"
                          className={`${getLinkClass(
                            '/notification'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Notifications
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/login"
                          className={`${getLinkClass(
                            '/login'
                          )} p-2 hover:underline hover:underline-offset-8 hover:decoration-black  cursor-pointer`}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </div> */}
      </section>
    </div>
  )
}

export default Navbar
