import React from 'react';
import Container from './Container';
import FooterTop from './FooterTop';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import { quickLinksData, categoriesData } from '@/constant/data'
import { SubText,SubTitle } from './ui/text';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
        <Container>
          <FooterTop/>
          <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='space-y-4'>
              <Logo/>
              <SubText>
                Discover our new items collection at M-Shop, <br/>
                Where Quality Meets Convenience.
              </SubText>
              <SocialMedia
              tooltipClassName='bg-gray-700 text-white'
              iconClassName='border-darkColor/60 hover:border-navy hover:text-navy'
              className='text-darkColor/60'/>
            </div>
          </div>
          <div>
            <SubTitle>
              Quick Links
            </SubTitle>
            <ul className='space-y-3 mt-4'>
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                  className='hover:text-navy font-medium hoverEffect'
                  href={item?.href}>
                  {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            
          </div>
          <div></div>
        </Container>
    </footer>
  )
}

export default Footer;