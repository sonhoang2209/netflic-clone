import React, { useEffect, useState } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import useAuth from '../../../hooks/useAuth'

interface props {
  menuHiden?: boolean
}

function Header({ menuHiden }: props) {
  const [isScrolled, setIScrolled] = useState(false)
  const { logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIScrolled(true)
      } else {
        setIScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        {/* <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="null"
          width={100}
          height={100}
        /> */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        {!menuHiden && (
          <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">TV Show</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
          </ul>
        )}
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        {!menuHiden && <SearchIcon className="hidden h-6 w-6 sm:inline" />}
        {!menuHiden && <p className="hidden lg:inline">Kids</p>}
        {!menuHiden && <BellIcon className="h-6 w-6" />}
        <Link href={`/account`}>
          <img
            src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
