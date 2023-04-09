import React from 'react'
import CollapsibleExample from './navbar';
import pushimg from './images/push-formats-propellerads-2.webp'
import './home.css'
import push_img from './images/push_news.png'
import push_img1 from './images/push_card_img1.webp'
import push_img2 from './images/push_card_img2.webp'
import push_img3 from './images/push_card_img3.webp'
import push_img4 from './images/push_card_img4.webp'
import footer_logo from './images/header_logo_new.svg'
import twitter from './images/footer1.svg'
import facebook from './images/footer2.svg'
import instagram from './images/footer3.svg'
import youtube from './images/footer4.svg'
import linkedin from './images/footer5.svg'
import foot_pay from './images/footer_payment.svg'
import app1 from './images/IQnet-certificate.webp'
import app2 from './images/ISO-27001-certificate.webp'
import app3 from './images/approved_new_logoX2.webp'
import app4 from './images/IAB-Europe-certificate.webp'
import app5 from './images/IAB-hellas-certificate.webp'
export default function Home() {
  return (
      <>
    <CollapsibleExample/>
    <div className='body'>
    <div className='second'>
      <div className='push-left'>
        <h1> Push Notification Ads</h1>
        <p>Short personalized messages delivered to your target audience even when they are not browsing - across major platforms and devices</p>
        <br></br>
        <button className='startbtn'>Start now</button>
        </div>
        <div className='push-right'>
        <img src={pushimg} alt="" srcset="" style={{width:"45vw" ,height:"auto"}}/>
        </div>
        <button className='startbtn_hid'>Start now</button>
        </div>
        <div className='card_item'>
          <a href='/' className='card_items' style={{backgroundColor:'rgb(242, 255, 252)',border:'1px solid rgb(20, 176, 130)'}}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.6667 5H8.33333C6.49238 5 5 6.49238 5 8.33333V31.6667C5 33.5076 6.49238 35 8.33333 35H31.6667C33.5076 35 35 33.5076 35 31.6667V8.33333C35 6.49238 33.5076 5 31.6667 5Z" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15 15L35 15" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15 5L15 15" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>Push</p>
          </a>
          <a href='/' className='card_items'>
             <svg className='img_svg' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g opacity="0.4">
                 <path d="M30 13.3333C30 10.6812 28.9464 8.13763 27.0711 6.26227C25.1957 4.3869 22.6522 3.33334 20 3.33334C17.3478 3.33334 14.8043 4.3869 12.9289 6.26227C11.0536 8.13763 10 10.6812 10 13.3333C10 25 5 28.3333 5 28.3333H35C35 28.3333 30 25 30 13.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M25 34C24.4919 34.9125 23.7626 35.6699 22.885 36.1964C22.0075 36.7229 21.0127 37 20 37C18.9873 37 17.9925 36.7229 17.115 36.1964C16.2374 35.6699 15.5081 34.9125 15 34" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
              </svg>
              <p>In-Page Push</p>
          </a>
          <a href='/' className='card_items'>
           <svg className='img_svg' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g opacity="0.4">
                  <path d="M6.39941 6.4V6.4C6.39941 4.52223 7.92165 3 9.79941 3H32.9994C35.2085 3 36.9994 4.79086 36.9994 7V30.2C36.9994 32.0778 35.4772 33.6 33.5994 33.6V33.6" stroke="black" stroke-width="2"/>
                   <path d="M30.2 6.40005H6.4C4.52223 6.40005 3 7.92228 3 9.80005V33.6C3 35.4778 4.52223 37 6.4 37H30.2C32.0778 37 33.6 35.4778 33.6 33.6V9.80005C33.6 7.92228 32.0778 6.40005 30.2 6.40005Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M3 15.4668H33.6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="7.53275" cy="10.9334" r="1.13333" fill="black"/>
                    <circle cx="12.0669" cy="10.9334" r="1.13333" fill="black"/>
                   <circle cx="16.6001" cy="10.9334" r="1.13333" fill="black"/>
                   </g>
             </svg>
             <p>Interstitial</p>
          </a>
          <a href='/' className='card_items'>
                     <svg className='img_svg' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.4">
                            <path d="M31.1118 18.5V27.6667C31.1118 29.2008 29.8681 30.4444 28.334 30.4444H6.11176C4.57764 30.4444 3.33398 29.2008 3.33398 27.6667V13.7778C3.33398 12.2437 4.57764 11 6.11176 11H17.2229M17.2229 11V6.5C17.2229 5.39543 18.1183 4.5 19.2229 4.5H34.5005C35.6051 4.5 36.5005 5.39543 36.5005 6.5V16.5C36.5005 17.6046 35.6051 18.5 34.5005 18.5H19.2229C18.1183 18.5 17.2229 17.6046 17.2229 16.5V11Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.667 36H22.7781" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.2227 30.4444V35.9999" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                        <p>Popunder</p>
          </a>
          <a href='/' className='card_items'>
                       <svg className='img_svg' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.4">
                            <path d="M25.0005 25L33.3338 33.3334M11.9805 3.73169L13.2755 8.56002M8.56047 13.275L3.73047 11.98M23.2505 6.75002L19.7138 10.2867M10.2855 19.7134L6.75214 23.25M25.0005 25L21.6671 33.3334L15.0005 15L33.3338 21.6667L25.0005 25Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                        <p>Direct Click</p>
          </a>
        </div>
        <p className='why'>Why use <span className='why_push'> Push</span> ads with PropellerAds</p>
        <div className='push_sols'>
          <div className='push_sol'>
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.1" cx="28" cy="28" r="28" fill="#14B082"/>
                            <path d="M28.2002 34V36.8" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.5332 41.3333H34.8665V39.9999C34.8665 38.5333 33.6665 37.3333 32.1999 37.3333H24.1999C22.7332 37.3333 21.5332 38.5333 21.5332 39.9999V41.3333V41.3333Z" stroke="#14B082" stroke-width="2" stroke-miterlimit="10"/>
                            <path d="M20.2002 41.3333H36.2002" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M27.9998 33.3334C22.8398 33.3334 18.6665 29.1601 18.6665 24.0001V20.0001C18.6665 17.0534 21.0532 14.6667 23.9998 14.6667H31.9998C34.9465 14.6667 37.3332 17.0534 37.3332 20.0001V24.0001C37.3332 29.1601 33.1598 33.3334 27.9998 33.3334Z" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.2935 27.5334C18.2935 27.2134 17.4135 26.6267 16.7202 25.9334C15.5202 24.6 14.7202 23 14.7202 21.1334C14.7202 19.2667 16.1869 17.8 18.0535 17.8H18.9202C18.6535 18.4134 18.5202 19.0934 18.5202 19.8V23.8C18.5202 25.1334 18.8002 26.3867 19.2935 27.5334Z" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M36.7065 27.5334C37.7065 27.2134 38.5865 26.6267 39.2799 25.9334C40.4799 24.6 41.2799 23 41.2799 21.1334C41.2799 19.2667 39.8132 17.8 37.9465 17.8H37.0799C37.3465 18.4134 37.4799 19.0934 37.4799 19.8V23.8C37.4799 25.1334 37.1999 26.3867 36.7065 27.5334Z" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h1>Push ads market leader</h1>
                        <p>
                        We were the first on our market to introduce Push ads and now deliver more than 7,000,000,000 push notification impressions daily.
                        </p>
          </div>
          <div className='push_sol'>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.1" cx="28" cy="28" r="28" fill="#14B082"/>
              <g clip-path="url(#clip0_705_1135)">
              <path d="M25.3335 18.6667C25.3335 17.9594 25.6144 17.2811 26.1145 16.781C26.6146 16.281 27.2929 16 28.0002 16C28.7074 16 29.3857 16.281 29.8858 16.781C30.3859 17.2811 30.6668 17.9594 30.6668 18.6667C32.198 19.3907 33.5034 20.5178 34.4429 21.9271C35.3824 23.3364 35.9207 24.9748 36.0002 26.6667V30.6667C36.1005 31.4956 36.3941 32.2894 36.8572 32.9842C37.3204 33.6789 37.9402 34.2552 38.6668 34.6667H17.3335C18.0601 34.2552 18.6799 33.6789 19.1431 32.9842C19.6062 32.2894 19.8998 31.4956 20.0002 30.6667V26.6667C20.0796 24.9748 20.6179 23.3364 21.5574 21.9271C22.497 20.5178 23.8023 19.3907 25.3335 18.6667" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24 34.6667V36.0001C24 37.0609 24.4214 38.0784 25.1716 38.8285C25.9217 39.5787 26.9391 40.0001 28 40.0001C29.0609 40.0001 30.0783 39.5787 30.8284 38.8285C31.5786 38.0784 32 37.0609 32 36.0001V34.6667" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M40.0002 20.9693C39.1257 19.067 37.8557 17.3729 36.2749 16" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 20.9693C16.8738 19.0673 18.1429 17.3732 19.7227 16" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_705_1135">
              <rect width="32" height="32" fill="white" transform="translate(12 12)"/>
              </clipPath>
              </defs>
              </svg>
              <h1>Notify anytime, anywhere</h1>
              <p>
              Push notifications are delivered at any time, even when a  user is not browsing. This brings exceptional reach and  efficiency.
              </p>
          </div>
        </div>
        <div className='text_box'>
          <div className='text_boxs'>
            <h1>Interest and demographic targeting</h1>
            <p>
            Using push ads, you get access to custom-made and more relevant audience gathered by interests, age, and gender.
            </p>
            <a href='/' >Learn more</a>
          </div>
          <div className='text_boxs'>
            <h1>Highly customazable ads</h1>
            <p>Customize and A/B test creatives including industry-specific badges, CTA buttons, and other parameters to boost your CTR and engage relevant users.</p>
            <a href='/' >Learn more</a>
          </div>
          <div className='text_boxs'>
            <h1>Perfomance-based optimization with CPA Goal</h1>
            <p>You set your target conversion price, our algorithms choose only efficient placements and bring most converting traffic - at your cost.</p>
            <a href='/' >Learn more</a>
          </div>
        </div>
        <p className='why'>Works best with the following <span className='why_push'> industries</span></p>
        <div className='industries'>
          <a href='/'>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.6427 3.50084L3.50058 17.643C2.19883 18.9447 2.19883 21.0553 3.50058 22.357L17.6427 36.4992C18.9445 37.8009 21.055 37.8009 22.3568 36.4992L36.4989 22.357C37.8006 21.0553 37.8006 18.9447 36.4989 17.643L22.3568 3.50084C21.055 2.19909 18.9445 2.19909 17.6427 3.50084Z" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.3395 20.589C12.665 20.2636 12.665 19.7359 12.3395 19.4105C12.0141 19.0851 11.4865 19.0851 11.161 19.4105C10.8356 19.7359 10.8356 20.2636 11.161 20.589C11.4865 20.9144 12.0141 20.9144 12.3395 20.589Z" fill="white" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.5891 12.3395C20.9145 12.0141 20.9145 11.4864 20.5891 11.161C20.2636 10.8356 19.736 10.8356 19.4105 11.161C19.0851 11.4864 19.0851 12.0141 19.4105 12.3395C19.736 12.6649 20.2636 12.6649 20.5891 12.3395Z" fill="white" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M28.8386 20.589C29.164 20.2636 29.164 19.7359 28.8386 19.4105C28.5131 19.0851 27.9855 19.0851 27.6601 19.4105C27.3346 19.7359 27.3346 20.2636 27.6601 20.589C27.9855 20.9144 28.5131 20.9144 28.8386 20.589Z" fill="white" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.5891 28.8385C20.9145 28.5131 20.9145 27.9854 20.5891 27.66C20.2636 27.3346 19.736 27.3346 19.4105 27.66C19.0851 27.9854 19.0851 28.5131 19.4105 28.8385C19.736 29.164 20.2636 29.164 20.5891 28.8385Z" fill="white" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>Lead<br></br> Generation</p>
          </a>
          <a href='/'>
          <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2323_4598)">
          <path d="M20.4131 37.5756L20.4615 37.6024L20.51 37.5756L29.9091 32.365C34.7215 29.6972 37.7109 24.6219 37.7109 19.1196V2.34375V2.24375H37.6109H3.3125H3.2125V2.34375V19.1196C3.2125 24.6219 6.20189 29.6972 11.014 32.365L20.4131 37.5756ZM2.14062 0.1H38.7828C39.3745 0.1 39.8546 0.579841 39.8543 1.17183V19.1196C39.8543 25.4007 36.4418 31.1945 30.9483 34.2399L20.9813 39.7654C20.8196 39.8551 20.6404 39.9 20.4615 39.9C20.2827 39.9 20.1034 39.8551 19.9418 39.7654L9.97476 34.2399C4.48134 31.1945 1.06875 25.4007 1.06875 19.1196V1.17188C1.06875 0.579826 1.54858 0.1 2.14062 0.1Z" fill="#14B082" stroke="white" stroke-width="0.2"/>
          <path d="M7.28367 13.3423C7.05814 12.795 7.31909 12.1686 7.86647 11.9431L7.86651 11.943C8.41388 11.7178 9.04025 11.9788 9.2658 12.5262C9.2658 12.5262 9.2658 12.5262 9.2658 12.5262L11.1704 17.1508L11.2629 17.3753L11.3553 17.1508L13.2599 12.5262L13.2599 12.5262C13.4852 11.9788 14.1116 11.7175 14.6592 11.943C15.2066 12.1686 15.4673 12.795 15.242 13.3424L12.2541 20.5982C12.2541 20.5982 12.2541 20.5982 12.2541 20.5982C12.0885 20.9999 11.6972 21.262 11.2629 21.262C10.8286 21.262 10.4372 20.9999 10.2717 20.5982C10.2716 20.5982 10.2716 20.5982 10.2716 20.5982L7.28368 13.3424L7.28367 13.3423Z" fill="#14B082" stroke="white" stroke-width="0.2"/>
          <path d="M18.6455 17.6341H18.5455V17.7341V20.1902C18.5455 20.7822 18.0657 21.2621 17.4736 21.2621C16.8816 21.2621 16.4018 20.7822 16.4018 20.1902V12.9343C16.4018 12.3423 16.8816 11.8625 17.4736 11.8625H21.6359C23.2271 11.8625 24.5218 13.1571 24.5218 14.7483C24.5218 16.3395 23.2271 17.6341 21.6359 17.6341H18.6455ZM18.6455 14.0062H18.5455V14.1062V15.3904V15.4904H18.6455H21.6359C22.0452 15.4904 22.378 15.1575 22.378 14.7483C22.378 14.3391 22.0452 14.0062 21.6359 14.0062H18.6455Z" fill="#14B082" stroke="white" stroke-width="0.2"/>
          <path d="M26.6719 21.362C27.3192 21.362 27.8438 20.8374 27.8438 20.1901V16.2002L31.7436 20.935C31.9706 21.2106 32.3048 21.362 32.6484 21.362C32.7806 21.362 32.9146 21.3397 33.0439 21.2933C33.5096 21.1261 33.8203 20.6848 33.8203 20.1901V12.9342C33.8203 12.2869 33.2954 11.7624 32.6484 11.7624C32.0012 11.7624 31.4766 12.2869 31.4766 12.9342V16.9241L27.5767 12.1893C27.2624 11.8075 26.7418 11.6641 26.2764 11.831C25.8107 11.9983 25.5 12.4395 25.5 12.9342V20.1901C25.5 20.8374 26.0249 21.362 26.6719 21.362Z" fill="#14B082"/>
          </g>
          <defs>
          <clipPath id="clip0_2323_4598">
          <rect width="40" height="40" fill="white" transform="translate(0.5)"/>
          </clipPath>
          </defs>
          </svg>
          <p>Mobile<br></br> Utilities</p>
          </a>
          <a href='/'>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 13.3333C17.2383 13.3333 15 14.825 15 16.6667C15 18.5083 17.2383 20 20 20C22.7617 20 25 21.4917 25 23.3333C25 25.175 22.7617 26.6667 20 26.6667M20 13.3333C21.85 13.3333 23.4667 14.0033 24.3317 15M20 13.3333V11.6667M20 13.3333V26.6667M20 26.6667V28.3333M20 26.6667C18.15 26.6667 16.5333 25.9967 15.6683 25M35 20C35 21.9698 34.612 23.9204 33.8582 25.7403C33.1044 27.5601 31.9995 29.2137 30.6066 30.6066C29.2137 31.9995 27.5601 33.1044 25.7403 33.8582C23.9204 34.612 21.9698 35 20 35C18.0302 35 16.0796 34.612 14.2597 33.8582C12.4399 33.1044 10.7863 31.9995 9.3934 30.6066C8.00052 29.2137 6.89563 27.5601 6.14181 25.7403C5.38799 23.9204 5 21.9698 5 20C5 16.0218 6.58035 12.2064 9.3934 9.3934C12.2064 6.58035 16.0218 5 20 5C23.9782 5 27.7936 6.58035 30.6066 9.3934C33.4196 12.2064 35 16.0218 35 20Z" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>Sofware</p>
          </a>
          <a href='/'>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 13.3333C17.2383 13.3333 15 14.825 15 16.6667C15 18.5083 17.2383 20 20 20C22.7617 20 25 21.4917 25 23.3333C25 25.175 22.7617 26.6667 20 26.6667M20 13.3333C21.85 13.3333 23.4667 14.0033 24.3317 15M20 13.3333V11.6667M20 13.3333V26.6667M20 26.6667V28.3333M20 26.6667C18.15 26.6667 16.5333 25.9967 15.6683 25M35 20C35 21.9698 34.612 23.9204 33.8582 25.7403C33.1044 27.5601 31.9995 29.2137 30.6066 30.6066C29.2137 31.9995 27.5601 33.1044 25.7403 33.8582C23.9204 34.612 21.9698 35 20 35C18.0302 35 16.0796 34.612 14.2597 33.8582C12.4399 33.1044 10.7863 31.9995 9.3934 30.6066C8.00052 29.2137 6.89563 27.5601 6.14181 25.7403C5.38799 23.9204 5 21.9698 5 20C5 16.0218 6.58035 12.2064 9.3934 9.3934C12.2064 6.58035 16.0218 5 20 5C23.9782 5 27.7936 6.58035 30.6066 9.3934C33.4196 12.2064 35 16.0218 35 20Z" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>Finance</p>
          </a>
          <a href='/'>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5H8.33333L9 8.33333M11.6667 21.6667H28.3333L35 8.33333H9M11.6667 21.6667L9 8.33333M11.6667 21.6667L7.845 25.4883C6.795 26.5383 7.53833 28.3333 9.02333 28.3333H28.3333M28.3333 28.3333C27.4493 28.3333 26.6014 28.6845 25.9763 29.3096C25.3512 29.9348 25 30.7826 25 31.6667C25 32.5507 25.3512 33.3986 25.9763 34.0237C26.6014 34.6488 27.4493 35 28.3333 35C29.2174 35 30.0652 34.6488 30.6904 34.0237C31.3155 33.3986 31.6667 32.5507 31.6667 31.6667C31.6667 30.7826 31.3155 29.9348 30.6904 29.3096C30.0652 28.6845 29.2174 28.3333 28.3333 28.3333ZM15 31.6667C15 32.5507 14.6488 33.3986 14.0237 34.0237C13.3986 34.6488 12.5507 35 11.6667 35C10.7826 35 9.93477 34.6488 9.30964 34.0237C8.68452 33.3986 8.33333 32.5507 8.33333 31.6667C8.33333 30.7826 8.68452 29.9348 9.30964 29.3096C9.93477 28.6845 10.7826 28.3333 11.6667 28.3333C12.5507 28.3333 13.3986 28.6845 14.0237 29.3096C14.6488 29.9348 15 30.7826 15 31.6667V31.6667Z" stroke="#14B082" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p>eCommerce</p>
          </a>
        </div>
        <div class="custom-board">
                    <svg width="812" height="364" viewBox="0 0 812 364" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" d="M22.9407 295.013C45.4581 302.846 66.2947 312.263 91.5347 314.965C109.562 316.895 127.869 315.412 146.054 309.717C179.959 299.097 213.219 283.365 241.078 262.708C269.547 241.6 300.075 221.31 323.457 196.009C345.196 172.485 364.22 146.699 387.351 124.088C426.107 86.2031 481.543 64.0733 534.181 46.2245C562.028 36.7818 590.031 27.4806 618.084 18.6733C635.688 13.1465 654.245 9.13407 671.018 1.52328" stroke="white" stroke-width="3" stroke-linecap="round"></path>
                        <path opacity="0.2" d="M60.5766 308.015C84.5139 317.521 106.562 328.658 133.68 332.755C153.049 335.681 172.88 334.938 192.778 329.643C229.876 319.772 266.519 304.353 297.565 283.368C329.289 261.925 363.198 241.46 389.629 215.254C414.204 190.889 435.953 163.955 461.987 140.64C505.606 101.576 566.488 80.2919 624.148 63.4965C654.653 54.6111 685.318 45.8856 716.014 37.6955C735.277 32.5559 755.498 29.0951 773.962 21.668" stroke="white" stroke-width="3" stroke-linecap="round"></path>
                    </svg>
                    <svg width="348" height="430" viewBox="0 0 348 430" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M267 2C241.876 4.3427 214.59 4.71006 190.109 10.1887C166.154 15.5496 140.926 25.2753 119.85 35.5472C81.0105 54.4763 61.1183 80.9759 43.0713 112.591C13.2884 164.766 2.50562 218.88 2.04015 275.572C1.73201 313.103 3.17653 350.252 7.09878 387.66C8.29629 399.081 7.69777 412.138 16.0919 422" stroke="white" stroke-width="3" stroke-linecap="round"></path>
                        <path opacity="0.1" d="M346 66C320.402 68.3929 292.601 68.7681 267.658 74.3642C243.251 79.8399 217.548 89.774 196.074 100.266C156.501 119.601 136.234 146.668 117.846 178.961C87.5014 232.253 76.5152 287.527 76.0409 345.435C75.727 383.77 77.1987 421.715 81.195 459.925C82.4151 471.59 81.8053 484.926 90.3578 495" stroke="white" stroke-width="3" stroke-linecap="round"></path>
                    </svg>
                    <h2>Push ads with CPA Goal for conversion boost</h2>
                    <p>You set the target lead price, we find relevant audience for your offer</p>
                    <a href="/" class="butto">Learn more</a>
          </div>
          <div class="container">
               <h2 class="formats-guides__title">Guides for beginners &amp; insights for gurus</h2>
               <div class="formats-guides__hero">
                  <div class="formats-guides__desc">
                     <h4>Video series: How to run Push Ads</h4>
                                             <p>
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.8499 7.24999L9.24985 17.85C9.15597 17.9447 9.02817 17.9979 8.89485 17.9979C8.76153 17.9979 8.63374 17.9447 8.53985 17.85L3.14985 12.46C3.0552 12.3661 3.00195 12.2383 3.00195 12.105C3.00195 11.9717 3.0552 11.8439 3.14985 11.75L3.84985 11.05C3.94374 10.9553 4.07153 10.9021 4.20485 10.9021C4.33817 10.9021 4.46597 10.9553 4.55985 11.05L8.88985 15.38L18.4399 5.82999C18.6377 5.63821 18.952 5.63821 19.1499 5.82999L19.8499 6.53999C19.9445 6.63388 19.9978 6.76168 19.9978 6.89499C19.9978 7.02831 19.9445 7.15611 19.8499 7.24999Z" fill="#416FF4"></path>
                           </svg>
                           <span>What Push is and how it is different form In-Page Push</span>
                        </p>
                                             <p>
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.8499 7.24999L9.24985 17.85C9.15597 17.9447 9.02817 17.9979 8.89485 17.9979C8.76153 17.9979 8.63374 17.9447 8.53985 17.85L3.14985 12.46C3.0552 12.3661 3.00195 12.2383 3.00195 12.105C3.00195 11.9717 3.0552 11.8439 3.14985 11.75L3.84985 11.05C3.94374 10.9553 4.07153 10.9021 4.20485 10.9021C4.33817 10.9021 4.46597 10.9553 4.55985 11.05L8.88985 15.38L18.4399 5.82999C18.6377 5.63821 18.952 5.63821 19.1499 5.82999L19.8499 6.53999C19.9445 6.63388 19.9978 6.76168 19.9978 6.89499C19.9978 7.02831 19.9445 7.15611 19.8499 7.24999Z" fill="#416FF4"></path>
                           </svg>
                           <span>How to set up pricing model, target URL and other parameters</span>
                        </p>
                                             <p>
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.8499 7.24999L9.24985 17.85C9.15597 17.9447 9.02817 17.9979 8.89485 17.9979C8.76153 17.9979 8.63374 17.9447 8.53985 17.85L3.14985 12.46C3.0552 12.3661 3.00195 12.2383 3.00195 12.105C3.00195 11.9717 3.0552 11.8439 3.14985 11.75L3.84985 11.05C3.94374 10.9553 4.07153 10.9021 4.20485 10.9021C4.33817 10.9021 4.46597 10.9553 4.55985 11.05L8.88985 15.38L18.4399 5.82999C18.6377 5.63821 18.952 5.63821 19.1499 5.82999L19.8499 6.53999C19.9445 6.63388 19.9978 6.76168 19.9978 6.89499C19.9978 7.02831 19.9445 7.15611 19.8499 7.24999Z" fill="#416FF4"></path>
                           </svg>
                           <span>Further setting: GEOs, verticals, campaing scheduling, targeting</span>
                        </p>
                                          <div>
                           <a href="/" class="butto">Watch video series</a>
                           <a href="/" class="custom-link">Run my first campaign</a>
                     </div>
                     
                  </div>
                  <div class="formats-guides__video" onclick="openVideoPopup('MQa9XEBB4jI')">
                     <img decoding="async" src={push_img} alt=""/>
                     <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_857_1802)">
                        <circle cx="40" cy="40" r="40" fill="white"></circle>
                        <path d="M40 0C17.9427 0 0 17.9444 0 40C0 62.0556 17.9427 80 40 80C62.0573 80 80 62.0556 80 40C80 17.9444 62.0573 0 40 0ZM55.9017 41.4014L32.5684 56.4014C32.295 56.5788 31.9792 56.6667 31.6667 56.6667C31.3933 56.6667 31.1166 56.5983 30.8692 56.4633C30.332 56.1703 30 55.6103 30 55V25C30 24.3897 30.332 23.8297 30.8692 23.5367C31.3966 23.247 32.0573 23.2648 32.5684 23.5986L55.9017 38.5986C56.377 38.9045 56.6667 39.4336 56.6667 40C56.6667 40.5664 56.377 41.0953 55.9017 41.4014Z" fill="#14B082"></path>
                        </g>
                        <defs>
                        <clipPath id="clip0_857_1802">
                        <rect width="80" height="80" fill="white"></rect>
                        </clipPath>
                        </defs>
                     </svg>
                  </div>
                  <div class="formats-guides__hero--mob">
                     <a href="/" class="button">Watch video series</a>
                     <a href="/" class="custom-link">Run my first campaign</a>
                  </div>
               </div>
               <div class="formats-guides__cards">
                                       <a href="/" class="formats-guides__card">
                        <img decoding="async" src={push_img1} alt=""/>
                        <div>
                              <span>PUSH NOTIFICATIONS FAQ</span>
                              <p>Classic Push FAQ: Gain More Knowledge about the Format</p>
                        </div>
                     </a>
                                       <a href="/" class="formats-guides__card">
                        <img decoding="async" src={push_img2} alt=""/>
                        <div>
                              <span>PUSH NOTIFICATIONS CASE STUDY</span>
                              <p>[Case Study] Sweepstake Offer, Push &amp; Romania (Profit $3827+ROI 215%)</p>
                        </div>
                     </a>
                                       <a href="/" class="formats-guides__card">
                        <img decoding="async" src={push_img3} alt=""/>
                        <div>
                              <span>ADVANTAGES OF PUSH NOTIFICATIONS</span>
                              <p>To Push or To Pop(under)? This, and many other answers for affiliate newbies</p>
                        </div>
                     </a>
                                       <a href="/" class="formats-guides__card">
                        <img decoding="async" src={push_img4} alt=""/>
                        <div>
                              <span>PUSH NOTIFICATIONS CASE STUDY</span>
                              <p>Case Study: In-Page Push vs. Classic Push Notifications</p>
                        </div>
                     </a>
                </div>
         </div>
         <div className='butt_div'>
         <a href='/' className='button_extra'>More articles</a>
         </div>
         <div class="custom-run--inner">
                    <h1>Run my first Push campaign</h1>
                    <div class="custom-run--button">
                        <a href="/" class="butto">Sign up</a>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="4" fill="#0C6A4E" stroke="white"></circle>
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8H16" stroke="white"></path>
                            <path d="M8 16L8 0" stroke="white"></path>
                        </svg>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 8L1 0.999999L9 1L5 8Z" fill="#0C6A4E" stroke="white"></path>
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8H16" stroke="white"></path>
                            <path d="M8 16L8 0" stroke="white"></path>
                        </svg>
                    </div>
                </div>
         


  <footer class="footer">
    <div class="container">
        <div class="footer--top">
            <div class="footer__info">
                <a href="/"><img src={footer_logo} alt=""/></a>
                <div class="footer__info--part">
                    <p>Part of</p>
                    <a href="/">
                          <svg width="78" height="41" viewBox="0 0 78 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M60.1829 33.0513H59.4629V36.6256H61.7772V35.9313H60.1829V33.0513Z" fill="#DC143C"/>
                          <path d="M57.5089 33.5143C57.1746 33.18 56.7375 33 56.2232 33C55.7089 33 55.2717 33.18 54.9117 33.54C54.5775 33.9 54.3975 34.3371 54.3975 34.8514C54.3975 35.3914 54.5775 35.8286 54.9117 36.1629C55.2717 36.4971 55.7089 36.6771 56.2232 36.6771C56.7375 36.6771 57.1746 36.4971 57.5346 36.1629C57.8689 35.8029 58.0489 35.3657 58.0489 34.8514C58.0232 34.3114 57.8432 33.8743 57.5089 33.5143ZM56.9689 35.6486C56.7632 35.8543 56.506 35.9571 56.1975 35.9571C55.8889 35.9571 55.6317 35.8543 55.426 35.6486C55.2203 35.4171 55.1175 35.16 55.1175 34.8257C55.1175 34.4914 55.2203 34.2086 55.426 34.0029C55.6317 33.7971 55.8889 33.6943 56.1975 33.6943C56.506 33.6943 56.7632 33.7971 56.9689 34.0286C57.1746 34.26 57.2775 34.5171 57.2775 34.8514C57.2775 35.16 57.1746 35.4429 56.9689 35.6486Z" fill="#DC143C"/>
                          <path d="M52.1857 34.4656H50.72V33.0513H50V36.6256H50.72V35.1598H52.1857V36.6256H52.9057V33.0513H52.1857V34.4656Z" fill="#DC143C"/>
                          <path d="M72.1916 35.3141L70.4173 33.0513H69.8516V36.6256H70.5459V34.3627L72.3459 36.6256H72.8858V33.0513H72.1916V35.3141Z" fill="#DC143C"/>
                          <path d="M65.9946 34.1313C65.9174 33.9256 65.7889 33.7456 65.6346 33.5656C65.4803 33.3856 65.2746 33.257 64.9917 33.1798C64.7346 33.077 64.4517 33.0513 64.1174 33.0513C64.0917 33.0513 63.9374 33.0513 63.6803 33.0513C63.5517 33.0513 63.4231 33.0513 63.2946 33.0513H63.0889V36.6256H63.2946C63.4489 36.6256 63.5774 36.6256 63.706 36.6256C63.8346 36.6256 63.9632 36.6256 64.0917 36.6256C64.7346 36.6256 65.2232 36.4456 65.5832 36.1113C65.9432 35.777 66.1231 35.3141 66.1231 34.7998C66.1231 34.5684 66.0717 34.337 65.9946 34.1313ZM65.0431 35.6227C64.8117 35.8284 64.5032 35.9313 64.0917 35.9313H64.0403C64.0146 35.9313 63.9374 35.9313 63.8603 35.9313C63.8346 35.9313 63.8089 35.9313 63.7832 35.9313V33.7456C63.8089 33.7456 63.8346 33.7456 63.8603 33.7456C63.9632 33.7456 64.0403 33.7456 64.1174 33.7456C64.5289 33.7456 64.8374 33.8484 65.0689 34.0541C65.2746 34.2598 65.3774 34.4913 65.3774 34.8256C65.3774 35.1341 65.2746 35.417 65.0431 35.6227Z" fill="#DC143C"/>
                          <path d="M75.869 34.6457V35.34H76.7433V35.7771C76.6662 35.8286 76.589 35.88 76.4862 35.9057C76.3319 35.9571 76.2033 35.9829 76.0747 35.9829C75.7404 35.9829 75.4833 35.88 75.3033 35.6743C75.0976 35.4686 75.0205 35.1857 75.0205 34.8514C75.0205 34.4914 75.1233 34.2343 75.3033 34.0286C75.509 33.8229 75.7662 33.72 76.0747 33.72C76.3833 33.72 76.6147 33.7971 76.769 33.9257L76.9233 34.0543L77.2576 33.4371L77.1547 33.36C76.8719 33.1286 76.4862 33 76.0233 33C75.509 33 75.0719 33.18 74.7376 33.54C74.429 33.9 74.249 34.3371 74.249 34.8514C74.249 35.3914 74.4033 35.8543 74.7376 36.1886C75.0719 36.5229 75.509 36.7029 76.049 36.7029C76.2805 36.7029 76.5119 36.6514 76.769 36.5743C77.0262 36.4971 77.2319 36.3686 77.3862 36.2143L77.4376 36.1629V34.6971H75.869V34.6457Z" fill="#DC143C"/>
                          <path d="M68.2054 33.0513H67.4854V36.6256H68.2054V33.0513Z" fill="#DC143C"/>
                          <path d="M27.9771 15.6343H25.5086C23.8371 15.6343 22.5 16.9971 22.5 18.6429V25.7143C22.5 27.3857 23.8629 28.7228 25.5086 28.7228H26.1257C27.1029 28.7228 27.6943 28.4914 28.0029 28.1828C28.0286 28.4914 28.26 28.7228 28.5943 28.7228H30.2657L30.24 15.6343H27.9771ZM27.9771 25.0971C27.9771 25.9457 27.3343 26.5886 26.4857 26.5886H25.5086C24.9943 26.5886 24.7371 26.3057 24.7371 25.7143V18.6429C24.7371 18.0514 24.9943 17.7686 25.5086 17.7686H27.9771V25.0971Z" fill="#0A00BE"/>
                          <path d="M65.4169 20.4428H67.6798V18.4114C67.6798 16.74 66.3169 15.4028 64.6712 15.4028H62.8455C61.1741 15.4028 59.8369 16.7657 59.8369 18.4114V25.74C59.8369 27.4114 61.1998 28.7485 62.8455 28.7485H64.6712C66.3426 28.7485 67.6798 27.3857 67.6798 25.74V23.7085H65.4169V25.74C65.4169 26.3314 65.1598 26.6143 64.6455 26.6143H62.8198C62.3055 26.6143 62.0483 26.3314 62.0483 25.74V18.4114C62.0483 17.82 62.3055 17.5371 62.8198 17.5371H64.6455C65.1598 17.5371 65.4169 17.82 65.4169 18.4114V20.4428Z" fill="#0A00BE"/>
                          <path d="M74.3662 15.6084H71.8976V11.1084H69.6348V28.7484H71.8976V17.7427H74.3662C74.8805 17.7427 75.1376 18.0255 75.1376 18.617V28.7227H77.4005V18.617C77.3748 16.9455 76.0376 15.6084 74.3662 15.6084Z" fill="#0A00BE"/>
                          <path d="M40.0632 11.1084H37.8004V15.6084H35.3318C33.6604 15.6084 32.3232 16.9713 32.3232 18.617V25.6884C32.3232 27.3598 33.6861 28.697 35.3318 28.697H35.949C36.9261 28.697 37.5175 28.5427 37.8261 28.2341C37.8518 28.5427 38.0575 28.7227 38.3918 28.7227H40.0632V11.1084ZM37.8261 17.7427V25.097C37.8261 25.9455 37.1832 26.5884 36.3347 26.5884H35.3575C34.8432 26.5884 34.5861 26.3055 34.5861 25.7141V18.6427C34.5861 18.0513 34.8432 17.7684 35.3575 17.7684H37.8261V17.7427Z" fill="#0A00BE"/>
                          <path d="M57.0861 23.0143C57.3946 23.0143 57.6518 22.7571 57.6518 22.4485V18.4114C57.6518 16.74 56.2889 15.4028 54.6432 15.4028H52.9461C51.2746 15.4028 49.9375 16.7657 49.9375 18.4114V25.74C49.9375 27.4114 51.3004 28.7485 52.9461 28.7485H54.6432C56.3146 28.7485 57.6518 27.3857 57.6518 25.74V24.3771H55.4146V25.74C55.4146 26.3314 55.1575 26.6143 54.6432 26.6143H52.9461C52.4318 26.6143 52.1746 26.3314 52.1746 25.74V23.0143H57.0861ZM52.1746 18.4114C52.1746 17.82 52.4318 17.5371 52.9461 17.5371H54.6432C55.1575 17.5371 55.4146 17.82 55.4146 18.4114V20.88H52.1746V18.4114Z" fill="#0A00BE"/>
                          <path d="M17.9487 19.5173H15.5059V14.8116C15.5059 11.4173 18.2573 8.64014 21.6773 8.64014H26.6916V11.083H21.8573C19.6973 11.083 17.923 12.8316 17.923 15.0173V19.5173H17.9487Z" fill="#DC143C"/>
                          <path d="M15.5314 0H17.9743V4.93714C17.9743 8.33143 15.2229 11.1086 11.8029 11.1086H0V8.66571H11.5971C13.7571 8.66571 15.5314 6.91715 15.5314 4.73143V0Z" fill="#DC143C"/>
                          <path d="M48.7541 26.6141H45.3084C44.8712 26.6141 44.6398 26.4084 44.5627 25.997C44.5627 25.997 44.5627 21.7284 44.5627 17.7427H46.5684C47.7512 17.7427 48.7284 16.9198 48.7284 15.7113V15.6084H44.537C44.537 13.0884 44.537 11.1084 44.537 11.1084H42.2998V25.7141C42.2998 25.7398 42.2998 25.7655 42.2998 25.7913V25.997C42.2998 26.0227 42.2998 26.0484 42.2998 26.0741C42.4284 27.7198 43.5855 28.7484 45.3084 28.7484H48.7541C48.7541 28.7227 48.7541 26.6141 48.7541 26.6141Z" fill="#0A00BE"/>
                          </svg>
                    </a>
                </div>
                <div class="footer__social">
                                            <a href="/"target="_blank">
                            <img src={twitter} alt=""/>
                        </a>
                                            <a href="/" target="_blank">
                            <img src={facebook} alt=""/>
                        </a>
                                            <a href="/" target="_blank">
                            <img src={instagram} alt=""/>
                        </a>
                                            <a href="/" target="_blank">
                            <img src={youtube} alt=""/>
                        </a>
                                            <a href="/" target="_blank">
                            <img src={linkedin} alt=""/>
                        </a>
                                    </div>

                <a target="_blank" href="/">Support &amp; Knowledge Center</a>
                <a href="/">contact.us@propellerads.com</a>
                <a href="/">+357 2528-16-64</a>

                <a class="footer__info--payment" href="/">
                    <img src={foot_pay} alt=""/>
                </a>

                <div class="header__language footer__language">
                    <div class="header__language--currency">
                        <span>Language</span>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div class="header__language--list">
                        <span>FR</span>
                        <span>EN</span>
                    </div>
                </div>

            </div>

            <div class="footer--top--approved">
                     <h6>Approved by:</h6>
                                     <div>
                                            <img width="108" src={app1} alt="app1"/>
                                            <img width="108" src={app2} alt=""/>
                                            <img width="108" src={app3} alt=""/>
                                            <img width="108" src={app4} alt=""/>
                                            <img width="108" src={app5} alt=""/>
                                    </div>
            </div>

            <div class="footer__links">
                                    <div class="footer__link">
                        <h6>Features</h6>
                                                    <a href="/">Traffic quality</a>
                                                    <a href="/">Traffic volume</a>
                                                    <a href="/">Ad performance</a>
                                                    <a href="/">Ad automation</a>
                                            </div>
                                    <div class="footer__link">
                        <h6>Solutions for</h6>
                                                    <a href="/">For affiliates</a>
                                                    <a href="/">For agencies</a>
                                                    <a href="/">Mobile utilities campaigns</a>
                                                    <a href="/">Software campaigns</a>
                                                    <a href="/">Lead generation campaigns</a>
                                                    <a href="/">Finance campaigns</a>
                                            </div>
                                    <div class="footer__link">
                        <h6>Ad Formats</h6>
                                                    <a href="/">Push notification ads</a>
                                                    <a href="/">In-Page Push ads</a>
                                                    <a href="/">Interstitial ads</a>
                                                    <a href="/">Popunder ads</a>
                                            </div>
                                    <div class="footer__link">
                        <h6>Resources</h6>
                                                    <a href="/">E-books</a>
                                                    <a href="/">Case studies</a>
                                                    <a href="/">Videos &amp; Webinars</a>
                                                    <a href="/">Help center</a>
                                            </div>
                            </div>
            <div class="footer__payment--mob">
                <img src="ploads/2022/11/footer_payment.svg" alt=""/>
            </div>
        </div>
    </div>
    <div class="footer--center">
        <div class="container">
            <h3>Approved by:</h3>
            <div class="footer--center--approved">
            <img width="108" src={app1} alt="app1"/>
                                            <img width="108" src={app2} alt=""/>
                                            <img width="108" src={app3} alt=""/>
                                            <img width="108" src={app4} alt=""/>
                                            <img width="108" src={app5} alt=""/>
                            </div>
        </div>
    </div>
    <div class="container">
        <div class="footer--bottom">
            <div class="footer__technical">
                                    <a href="/">Privacy Policy</a>
                                    <a href="/">Terms</a>
                                    <a href="/">Cookies Policy</a>
                                    <a href="/">Opt-Out</a>
                                    <a href="/">Report Abuse</a>
                            </div>
            <div class="footer--copy">© Copyright 2023, PropellerAds.com 2011-2023</div>
        </div>
    </div>
</footer>
</div>
        </>
  )
}
