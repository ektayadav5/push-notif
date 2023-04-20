import React, { useState } from 'react'
import './affliates.css'
import header from './images/header_logo_new.svg'
import header_pic from './images/affiliates-propellerads-hiro.webp'
import test1 from './images/testimonials_aff_vatar_1.png'
import af1 from './images/af_performance.svg'
import af2 from './images/af_performance2.svg'
import af3 from './images/img11.svg'
import af4 from './images/img2.svg'
import af5 from './images/af_growth_img3.png'



export default function Affilities() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [ind,setInd] = useState(-1)
    const [prevBut,setPrevBut]=useState(false);
    const handleCardClick = (index) => {
        setActiveIndex(index);
        const cardElements = document.querySelectorAll('.growth__tab .growth__tab--list');
        cardElements.forEach((element, i) => {
        if (i !== index) {
            element.classList.remove('growth__tab--list');
        } else {
            element.classList.add('growth__tab--list');
        }
        
    });
      };
      const handlenextClick = (indu)=>{
          setInd(indu)
          setPrevBut(true);
        const cardClick = document.querySelectorAll('.swiper-wrapper .swiper-slide');
        cardClick.forEach((e,i)=>{
            if(e.classList.contains('swiper-slide-active')){
                e.classList.remove('swiper-slide-active');
                e.style.marginLeft="-80%"
            }
            if(e.classList.contains('swiper-slide-next')){
                e.classList.remove('swiper-slide-next')
                e.classList.add('swiper-slide-active')
            }
            if(indu===1){
                e.classList.remove('swiper-slide-next')
                e.classList.add('swiper-slide-active')

            }
            
        })
      }
      const handlebackClick =()=>{
        const cardClick = document.querySelectorAll('.swiper-wrapper .swiper-slide');
        cardClick.forEach((e,i)=>{
            if(e.classList.contains('swiper-slide-active')){
                e.classList.remove('swiper-slide-active');
                e.classList.add('swiper-slide-next')
                e.style.marginLeft="80%"
            }
            if(e.classList.contains('swiper-slide-next')){
                e.classList.remove('swiper-slide-next')
                e.classList.add('swiper-slide-active')
            }
            // if(indu===1){
            //     e.classList.remove('swiper-slide-next')
            //     e.classList.add('swiper-slide-active')

            // }
            
        })
      }
  return (
   <div className='body'>
  <div className="icon--main">
    <svg width={48} height={49} viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.1" cx={24} cy="24.9902" r={24} fill="white" />
      <g clipPath="url(#clip0_1107_3007)">
        <path d="M21 23.9907C23.2091 23.9907 25 22.1999 25 19.9907C25 17.7816 23.2091 15.9907 21 15.9907C18.7909 15.9907 17 17.7816 17 19.9907C17 22.1999 18.7909 23.9907 21 23.9907Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 33.9907V31.9907C15 30.9299 15.4214 29.9124 16.1716 29.1623C16.9217 28.4122 17.9391 27.9907 19 27.9907H23C24.0609 27.9907 25.0783 28.4122 25.8284 29.1623C26.5786 29.9124 27 30.9299 27 31.9907V33.9907" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 16.1206C28.8604 16.3409 29.623 16.8413 30.1676 17.5429C30.7122 18.2445 31.0078 19.1074 31.0078 19.9956C31.0078 20.8838 30.7122 21.7467 30.1676 22.4483C29.623 23.1499 28.8604 23.6503 28 23.8706" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M33 33.9906V31.9906C32.9949 31.1078 32.6979 30.2514 32.1553 29.555C31.6126 28.8586 30.8548 28.3613 30 28.1406" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_1107_3007">
          <rect width={24} height={24} fill="white" transform="translate(12 12.9907)" />
        </clipPath>
      </defs>
    </svg>
    <svg width={48} height={49} viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.1" cx={24} cy="24.0088" r={24} fill="white" />
      <path d="M24 14.0088L34 20.5088V27.5088L24 34.0088L14 27.5088V20.5088L24 14.0088Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 34.0088V27.5088" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 20.5088L24 27.5088L14 20.5088" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 27.5088L24 20.5088L34 27.5088" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 14.0088V20.5088" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <svg width={48} height={49} viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.1" cx={24} cy="24.9902" r={24} fill="white" />
      <g clipPath="url(#clip0_1107_3007)">
        <path d="M21 23.9907C23.2091 23.9907 25 22.1999 25 19.9907C25 17.7816 23.2091 15.9907 21 15.9907C18.7909 15.9907 17 17.7816 17 19.9907C17 22.1999 18.7909 23.9907 21 23.9907Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 33.9907V31.9907C15 30.9299 15.4214 29.9124 16.1716 29.1623C16.9217 28.4122 17.9391 27.9907 19 27.9907H23C24.0609 27.9907 25.0783 28.4122 25.8284 29.1623C26.5786 29.9124 27 30.9299 27 31.9907V33.9907" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 16.1206C28.8604 16.3409 29.623 16.8413 30.1676 17.5429C30.7122 18.2445 31.0078 19.1074 31.0078 19.9956C31.0078 20.8838 30.7122 21.7467 30.1676 22.4483C29.623 23.1499 28.8604 23.6503 28 23.8706" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M33 33.9906V31.9906C32.9949 31.1078 32.6979 30.2514 32.1553 29.555C31.6126 28.8586 30.8548 28.3613 30 28.1406" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_1107_3007">
          <rect width={24} height={24} fill="white" transform="translate(12 12.9907)" />
        </clipPath>
      </defs>
    </svg>
    <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.1" cx={24} cy={24} r={24} fill="white" />
      <g clipPath="url(#clip0_1107_3603)">
        <path d="M31.4546 16H15.4546C14.9023 16 14.4546 16.4477 14.4546 17V27C14.4546 27.5523 14.9023 28 15.4546 28H31.4546C32.0069 28 32.4546 27.5523 32.4546 27V17C32.4546 16.4477 32.0069 16 31.4546 16Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4546 32H28.4546" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.4546 28V32" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26.4546 28V32" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.4546 24L22.4546 21L24.4546 23L27.4546 20" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_1107_3603">
          <rect width={24} height={24} fill="white" transform="translate(12 12)" />
        </clipPath>
      </defs>
    </svg>
  </div>
  <header className="header" style={{top: 0}}>
    <div className="container">
      <a href="/" className="header__logo">
        <img src={header} alt="" />
      </a>
      <div className="header__items">
        <div className="header__items--inner">
          <div className="header__item">
            <div className="header__item--main">
              Features                                    <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="header__item--arrow">
                <span />
              </div>
            </div>
            <div className="header__item--drop" style={{display: 'block'}}>
              <div className="header__item--info">
                <div>
                  <div>
                    <div>
                      <a href="https://propellerads.com/features/traffic-quality/">
                        <h5>Traffic quality</h5>
                        <p>For 97% of our partners this is PropellerAds’ #1 advantage</p>
                      </a>                                                         
                      <a href="https://propellerads.com/features/campaign-management/">
                        <h5>Сampaign management</h5>
                        <p>Start ad campaigns in minutes and always stay in control</p>
                      </a>                                                         
                    </div>
                    <div>
                      <a href="https://propellerads.com/features/traffic-volume/">
                        <h5>Traffic volume</h5>
                        <p>Reach any business goal with 120,370 ad impressions a second</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <a href="https://propellerads.com/features/performance/">
                        <h5>Ad performance</h5>
                        <p>Drop your conversion costs with better targeting and ads customization</p>
                      </a>                                                                                                                  
                    </div>
                    <div>
                      <a href="https://propellerads.com/features/automation/">
                        <h5>Automation</h5>
                        <p>Boost conversions, save time and budget with our AI-powered algorithms</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header__item--links">
                <div>
                  <div>
                    <img src="https://propellerads.com/wp-content/uploads/2022/10/header__banner1.svg" alt />
                    <div>
                      <p>LATEST FEATURE:</p>
                      <span>Multiformat campaign for quick tests and wide reach</span>
                      <a target="_blank" href="https://propellerads.com/blog/adv-multiformat-cpa-goal-campaigns-automate-campaign-creation-testing/">Learn more</a>
                    </div>
                  </div>
                  <a target="_blank" href="https://propellerads.com/blog/adv-multiformat-cpa-goal-campaigns-automate-campaign-creation-testing/">Learn more</a>
                </div>
                <div>
                  <div>
                    <img src="https://propellerads.com/wp-content/uploads/2022/10/header__banner2.svg" alt />
                    <div>
                      <p>AUTOMATION UPDATE:</p>
                      <span>Now you can add 2 auto rules to your campaigns</span>
                      <a target="_blank" href="https://propellerads.com/blog/adv-rule-based-campaigns-transparent-and-simple-auto-optimization/">Learn more</a>
                    </div>
                  </div>
                  <a target="_blank" href="https://propellerads.com/blog/adv-rule-based-campaigns-transparent-and-simple-auto-optimization/">Learn more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="header__item">
            <div className="header__item--main">
              Solutions                                    <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="header__item--arrow">
                <span />
              </div>
            </div>
            <div className="header__item--drop" style={{display: 'block'}}>
              <div className="header__item--info">
                <div>
                  <div>
                    <div>
                      <a href="https://propellerads.com/solutions/affiliates/">
                        <h5>For affiliates</h5>
                        <p>About 243 quality conversions every second for your offer</p>
                      </a>                                                
                      <a href="https://propellerads.com/solutions/agencies/">
                        <h5>For agencies</h5>
                        <p>New powerful ad channels in agency's marketing toolkit</p>
                      </a>                                                
                      <a href="https://propellerads.com/solutions/sweepstakes/">
                        <h5>Lead generation campaigns</h5>
                        <p>Surveys, brand giveaways, instant prize win, gift cards, and others</p>
                      </a>                                                
                      <a href="https://propellerads.com/solutions/finance/">
                        <h5>Finance campaigns</h5>
                        <p>Loans, credit cards, banking, trading, and other services</p>
                      </a>                                                
                    </div>
                    <div>
                      <a href="https://propellerads.com/solutions/mobile-utilities/">
                        <h5>Mobile utilities campaigns</h5>
                        <p>VPNs, performance optimizers, mobile cleaners,  and other apps</p>
                      </a>                                                       
                      <a href="https://propellerads.com/solutions/software/">
                        <h5>Software campaigns</h5>
                        <p>Device cleaners, video players, add-ons, converters, and other tools</p>
                      </a>                                                       
                      <a href="https://propellerads.com/solutions/ecommerce/">
                        <h5>E-commerce campaigns</h5>
                        <p>Beauty, apparel, toys, decor, and other goods</p>
                      </a>                                                       
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <a href="https://propellerads.com/solutions/affiliates/">
                        <h5>For affiliates</h5>
                        <p>About 243 quality conversions every second for your offer</p>
                      </a>                                                         
                      <a href="https://propellerads.com/solutions/sweepstakes/">
                        <h5>Lead generation campaigns</h5>
                        <p>Surveys, brand giveaways, instant prize win, gift cards, and others</p>
                      </a>                                                         
                    </div>
                    <div>
                      <a href="https://propellerads.com/solutions/agencies/">
                        <h5>For agencies</h5>
                        <p>New powerful ad channels in agency's marketing toolkit</p>
                      </a>
                      <a href="https://propellerads.com/solutions/finance/">
                        <h5>Finance campaigns</h5>
                        <p>Loans, credit cards, banking, trading, and other services</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <a href="https://propellerads.com/solutions/mobile-utilities/">
                        <h5>Mobile utilities campaigns</h5>
                        <p>VPNs, performance optimizers, mobile cleaners,  and other apps</p>
                      </a>                                                                                                                  
                      <a href="https://propellerads.com/solutions/ecommerce/">
                        <h5>E-commerce campaigns</h5>
                        <p>Beauty, apparel, toys, decor, and other goods</p>
                      </a>                                                                                                                  
                    </div>
                    <div>
                      <a href="https://propellerads.com/solutions/software/">
                        <h5>Software campaigns</h5>
                        <p>Device cleaners, video players, add-ons, converters, and other tools</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header__item--links">
                <div>
                  <div>
                    <img src="https://propellerads.com/wp-content/uploads/2022/10/header__banner1.svg" alt />
                    <div>
                      <p>Case study:</p>
                      <span>Affiliate success story: $2600 on Mobile offers</span>
                      <a target="_blank" href="https://propellerads.com/blog/adv-case-study-2600-on-mobile-offers/">Learn more</a>
                    </div>
                  </div>
                  <a target="_blank" href="https://propellerads.com/blog/adv-case-study-2600-on-mobile-offers/">Learn more</a>
                </div>
                <div>
                  <div>
                    <img src="https://propellerads.com/wp-content/uploads/2022/10/header__banner2.svg" alt />
                    <div>
                      <p>Industry overview 2022:</p>
                      <span>What’s Happening to Finance Vertical in 2022? </span>
                      <a target="_blank" href="https://propellerads.com/blog/adv-finance-vertical-in-2022/">Learn more</a>
                    </div>
                  </div>
                  <a target="_blank" href="https://propellerads.com/blog/adv-finance-vertical-in-2022/">Learn more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="header__item">
            <div className="header__item--main">
              Ad Formats                                    <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="header__item--arrow">
                <span />
              </div>
            </div>
            <div className="header__item--drop" style={{display: 'block'}}>
              <div className="header__item--info">
                <div>
                  <div>
                    <div>
                      <a href="https://propellerads.com/formats/push/">
                        <h5>Push Notifications</h5>
                        <p>Short personalized messages delivered to your target audience even when they are not browsing - across major platforms and devices</p>
                      </a>                                                         
                    </div>
                    <div>
                      <a href="https://propellerads.com/formats/in-page-push/">
                        <h5>In-Page Push</h5>
                        <p>Browser-based notifications for all platforms and devices, iOS and MacOS included. They look native and don't require users’ opt-in consent.</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <a href="https://propellerads.com/formats/interstitial/">
                        <h5>Interstitial</h5>
                        <p>Big page-overlaying banners, for mobile and desktop. Draw all the attention to your message with these highly interactive banners.</p>
                      </a>                                                                                                                  
                    </div>
                    <div>
                      <a href="https://propellerads.com/formats/popunder/">
                        <h5>Popunder</h5>
                        <p>Full-page and eye-catchy format with around 2,000,000 impressions daily and smart bidding options</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header__item--links">
                <div>
                  <div>
                    <img src="https://propellerads.com/wp-content/uploads/2022/10/header__banner3.svg" alt />
                    <div>
                      <p>Video tutorials for all formats:</p>
                      <span>Smooth step-by-step start for your first campaign.</span>
                      <a target="_blank" href="https://propellerads.com/resources/videos-and-webinars/">Learn more</a>
                    </div>
                  </div>
                  <a target="_blank" href="https://propellerads.com/resources/videos-and-webinars/">Learn more</a>
                </div>
                <div>
                  <div>
                    <img src="https://propellerads.com/wp-content/uploads/2022/10/header__banner4.svg" alt />
                    <div>
                      <span>Read our case studies to find out advanced features of ad formats in practice </span>
                      <a target="_blank" href="https://propellerads.com/blog/category/learn/case-studies/">Learn more</a>
                    </div>
                  </div>
                  <a target="_blank" href="https://propellerads.com/blog/category/learn/case-studies/">Learn more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="header__item">
            <div className="header__item--main">
              Resources                                    <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="header__item--arrow">
                <span />
              </div>
            </div>
            <div className="header__item--drop" style={{display: 'block'}}>
              <div className="header__item--info">
                <div>
                  <div>
                    <div>
                      <a href="https://propellerads.com/blog/category/learn/e-books/">
                        <h5>E-books</h5>
                        <p>Free books to learn in-depth about ad trends, buying traffic, and the best ad formats for paid campaigns</p>
                      </a>                                                         
                    </div>
                    <div>
                      <a href="https://propellerads.com/blog/category/learn/case-studies/">
                        <h5>Case studies</h5>
                        <p>See how PropellerAds is applied by industry experts and find your inspiration</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <a href="https://propellerads.com/resources/videos-and-webinars/">
                        <h5>Videos and webinars</h5>
                        <p>Watch and learn with PropellerAds insightful webinars, ad format tutorials, and features overviews</p>
                      </a>                                                                                                                  
                    </div>
                    <div>
                      <a href="https://help.propellerads.com/">
                        <h5>Help center</h5>
                        <p>Find the answer to any question about the PropellerAds ad platform, its features, and capabilities</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header__item--links">
                <div>
                  <div>
                    <img src="https://propellerads.com/wp-content/uploads/2022/10/header__banner5.svg" alt />
                    <div>
                      <p>PRODUCT tour:</p>
                      <span>Get a short overview of our platform: ad formats, features and capabilities overview</span>
                      <a target="_blank" href="https://www.youtube.com/watch?v=zAHtYVlX934&ab_channel=PropellerAds">Learn more</a>
                    </div>
                  </div>
                  <a target="_blank" href="https://www.youtube.com/watch?v=zAHtYVlX934&ab_channel=PropellerAds">Learn more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="header__item position-rel">
            <div className="header__item--main">
              Company                                    <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="header__item--arrow">
                <span />
              </div>
            </div>
            <div className="header__item--submenu" style={{display: 'flex'}}>
              <a href="https://propellerads.com/about-us/">About us</a>
              <a href="https://adtechholding.com/#careers">Careers</a>
              <a href="https://propellerads.com/contact-us/">Contacts</a>
            </div>
          </div>
          <div className="header__item">
            <a href="https://propellerads.com/blog/">Blog</a>
          </div>
          <div className="header__items--close">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6" stroke="#221F20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 18L6 6" stroke="#221F20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="menu--backing">
          </div>
        </div>
      </div>
      <div className="header__right">
        <div className="header__language">
          <div className="header__language--currency">
            <span>EN</span>
            <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg> 
          </div>
          <div className="header__language--list">
            <span>FR</span>
          </div>
        </div>
        <a href="https://partners.propellerads.com/#/auth">Log in</a>
        <div className="header__right--start">
          <a className="button" href="https://partners.propellerads.com/#/auth/signUp">Start</a>
        </div>
      </div>
      <div className="header__burger">
        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 15.9997H8M24 22.6663H8M24 9.33301H8" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  </header>
  <main className="affiliatesPage">
    <div data-elementor-type="wp-page" data-elementor-id={181} className="elementor elementor-181">
      <section className="elementor-section elementor-top-section elementor-element elementor-element-181b809 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="181b809" data-element_type="section">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3469b47" data-id="3469b47" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-26f8ad4 elementor-widget elementor-widget-general_customBanner" data-id="26f8ad4" data-element_type="widget" data-widget_type="general_customBanner.default">
                <div className="elementor-widget-container">
                  <section className="customBanner">
                    <div className="container">
                      <div className="customBanner__content">
                        <h1>Around 243 quality conversions a second for your CPA offer</h1>
                        <p>Industry-leading multisource ad network with the top traffic quality and volume, unmatched automation features, and multiple ad formats</p>
                        <a href="https://partners.propellerads.com/#/auth/signUp" className="button">Start now</a>
                      </div>
                      <div className="customBanner__picture">
                        <img decoding="async" src={header_pic} alt />
                      </div>
                      <div className="customBanner__button--mob">
                        <a href="https://partners.propellerads.com/#/auth/signUp" className="button">Start now</a>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-65319a7 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="65319a7" data-element_type="section">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bcba76f" data-id="bcba76f" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-df96ab7 elementor-widget elementor-widget-agencies_performance" data-id="df96ab7" data-element_type="widget" data-widget_type="agencies_performance.default">
                <div className="elementor-widget-container">
                  <section className="performance">
                    <div className="container">
                      <h2 className="performance__title">Why affiliates choose PropellerAds</h2>
                      <div className="customReach">
                        <svg width={769} height={166} viewBox="0 0 769 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.1" d="M10 73.438C28.8093 88.0872 45.5181 103.697 68.5537 114.361C85.0064 121.978 102.82 126.453 121.871 126.898C157.39 127.729 193.94 123.511 226.958 112.895C260.697 102.047 296.124 92.6347 326.392 76.182C354.535 60.8851 380.831 42.5734 409.998 28.5882C458.868 5.15579 518.474 2 574.055 2C603.46 2 632.967 2.18385 662.362 2.85158C680.808 3.2706 699.672 5.43004 718 3.60854" stroke="white" strokeWidth={3} strokeLinecap="round" />
                          <path opacity="0.2" d="M2 106.153C22.3237 121.974 40.3776 138.833 65.2678 150.35C83.0451 158.576 102.293 163.409 122.877 163.89C161.256 164.787 200.749 160.231 236.425 148.766C272.88 137.05 311.159 126.885 343.865 109.117C374.273 92.5959 402.686 72.8192 434.201 57.7152C487.005 32.4082 551.41 29 611.467 29C643.239 29 675.121 29.1986 706.883 29.9197C726.814 30.3722 747.196 32.7044 767 30.7372" stroke="white" strokeWidth={3} strokeLinecap="round" />
                        </svg>
                        <svg width={203} height={294} viewBox="0 0 203 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.2" d="M169 2C153.167 3.47813 135.972 3.70992 120.544 7.16667C105.448 10.5492 89.5498 16.6856 76.2678 23.1667C51.7915 35.11 39.2557 51.83 27.8826 71.7778C9.11381 104.697 2.31863 138.841 2.0253 174.611C1.83112 198.291 2.74144 221.731 5.2132 245.333C5.96785 252.54 5.59067 260.777 10.8806 267" stroke="white" strokeWidth={3} strokeLinecap="round" />
                          <path opacity="0.1" d="M201 19C184.693 20.5228 166.983 20.7615 151.093 24.3226C135.545 27.8072 119.171 34.1289 105.491 40.8057C80.2823 53.1096 67.3711 70.3344 55.6576 90.8843C36.3268 124.798 29.3282 159.972 29.0261 196.822C28.8261 221.217 29.7636 245.364 32.3094 269.679C33.0866 277.103 32.6982 285.59 38.1464 292" stroke="white" strokeWidth={3} strokeLinecap="round" />
                        </svg>
                        <div>
                          <h2>11+</h2>
                          <p>Year of expetise</p>
                        </div>
                        <div>
                          <h2>1B+</h2>
                          <p>Audience reach</p>
                        </div>
                        <div>
                          <h2>5</h2>
                          <p>Industry top ad formats</p>
                        </div>
                      </div>
                      <div className="performance__cards">
                        <div className="performance__card">
                          <div className="performance__card--top">
                            <img decoding="async" src={af1} alt />
                            <p>Real traffic filtered from fraud</p>
                            <span>Al-powered fraud detection and multi-tier evaluation of supply partners to provide top-quality traffic for any of your offers.</span>
                          </div>
                          <a href="https://propellerads.com/features/traffic-quality/" className="custom-link">Learn more</a>
                        </div>
                        <div className="performance__card">
                          <div className="performance__card--top">
                            <img decoding="async" src={af2}alt />
                            <p>Easy to start, test, and scale</p>
                            <span>The intuitive interface will guide you through the campaign setup so that you start in minutes. Test creatives, audiences, formats, platforms, GEOs - all easy and scalable.</span>
                          </div>
                          <a href="https://propellerads.com/features/performance/" className="custom-link">Learn more</a>
                        </div>
                      </div>
                      <div className="performance__agencies">
                        <div className="performance__agencies--left">
                          <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/10/af_performance3.svg" alt />
                          <p>AdTech for affiliates</p>
                          <span>We provide top traffic quality and volume by uniting top anti-fraud technologies and traffic sources unique to the market. Our performance tools are recognized by affiliates across the globe.</span>
                        </div>
                        <div className="performance__agencies--right">
                          <div>
                            <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/10/af_performance4.svg" alt />
                            <div>
                              <h4>CPA Goal</h4>
                              <p>Our leading AI-powered tool. You set the target lead price, we drive quality traffic and conversions
                              </p>
                            </div>
                          </div>
                          <div>
                            <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/10/af_performance5.svg" alt />
                            <div>
                              <h4>Ready-to-use audiences</h4>
                              <p>Gathered by interests, age, and gender for easier targeting</p>
                              <a href="https://propellerads.com/blog/adv-propellerads-audiences-in-action-case-study-statistics/" className="custom-link">Learn More</a>
                            </div>
                          </div>
                          <div>
                            <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/10/af_performance6.svg" alt />
                            <div>
                              <h4>Direct Click</h4>
                              <p>Top zones, no creatives, and direct visit to your offer</p>
                              <a href="https://propellerads.com/blog/adv-direct-click-faq-getting-exquisite-onclick-traffic/" className="custom-link">Learn More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="a_testimonials">
            <div class="a_testimonials__header">
                <h2>Testimonials</h2>
                <div class="a_testimonials__arrows">
                    {prevBut && 
                         <div class="a_testimonials__arrows--prev " tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-7f6ce9f1057211eb7" aria-disabled="true" onClick={()=>handlebackClick()}>
                         <svg width="49" height="16" viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M0.292893 8.70711C-0.0976295 8.31659 -0.0976296 7.68342 0.292892 7.2929L6.65685 0.928936C7.04738 0.538411 7.68054 0.538411 8.07107 0.928936C8.46159 1.31946 8.46159 1.95263 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292893 8.70711ZM49 9L1 9L1 7L49 7L49 9Z" fill="#12141D"></path>
                         </svg>
                         </div>
                    }
                   
                    <div class="a_testimonials__arrows--next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-7f6ce9f1057211eb7" aria-disabled="false" onClick={()=>handlenextClick(ind+1)}>
                        <svg width="49" height="16" viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M48.7071 8.70711C49.0976 8.31659 49.0976 7.68342 48.7071 7.2929L42.3431 0.928936C41.9526 0.538411 41.3195 0.538411 40.9289 0.928936C40.5384 1.31946 40.5384 1.95263 40.9289 2.34315L46.5858 8L40.9289 13.6569C40.5384 14.0474 40.5384 14.6805 40.9289 15.0711C41.3195 15.4616 41.9526 15.4616 42.3431 15.0711L48.7071 8.70711ZM-8.74228e-08 9L48 9L48 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#12141D"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="a_testimonials__slider swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div class="swiper-wrapper" id="swiper-wrapper-7f6ce9f1057211eb7" aria-live="polite" style={{display:"flex",flexDirection:'row' ,zIndex:'1'}}>
                        <div class="swiper-slide swiper-slide-active" style={{width: "1413.33px", marginRight: "220px"}} role="group" aria-label="1 / 3">
                        <div class="swiper-slide--top" style={{width:'1413.33px', marginRight: "220px"}}>
                            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.44516 12.2667L9.42796 0H15.3462L10.2538 10.3333C11.4925 10.7778 12.5477 11.6 13.4194 12.8C14.291 14 14.7269 15.3556 14.7269 16.8667C14.7269 18.8222 13.9928 20.5111 12.5247 21.9333C11.1025 23.3111 9.38208 24 7.36344 24C5.3448 24 3.60143 23.3111 2.13333 21.9333C0.711111 20.5111 0 18.8222 0 16.8667C0 15.2667 0.48172 13.7333 1.44516 12.2667ZM18.0989 12.2667L26.0817 0H32L26.9075 10.3333C28.1462 10.7778 29.2014 11.6 30.0731 12.8C30.9448 14 31.3806 15.3556 31.3806 16.8667C31.3806 18.8222 30.6466 20.5111 29.1785 21.9333C27.7563 23.3111 26.0358 24 24.0172 24C21.9986 24 20.2552 23.3111 18.7871 21.9333C17.3649 20.5111 16.6538 18.8222 16.6538 16.8667C16.6538 15.2667 17.1355 13.7333 18.0989 12.2667Z" fill="#14B082"></path>
                            </svg>        
                            <p>PropellerAds is THE best network for pop and push traffic. You'll find high volume available, fast approving times, and tons of targeting options to optimize and scale up your campaigns.</p>
                        </div>
                        <div class="swiper-slide--bottom">
                                                        <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/11/testimonials_aff_vatar_1.png" alt="" />
                                                        <h4>Servando Silva, Affiliate Marketer &amp; Influencer</h4>
                        </div>
                    </div>
                        <div class="swiper-slide swiper-slide-next" style={{width: "1413.33px", marginRight: "220px"}} role="group" ariaLabel="2 / 3">
                        <div class="swiper-slide--top" style={{width:'1413.33px', marginRight: "220px"}}>
                            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.44516 12.2667L9.42796 0H15.3462L10.2538 10.3333C11.4925 10.7778 12.5477 11.6 13.4194 12.8C14.291 14 14.7269 15.3556 14.7269 16.8667C14.7269 18.8222 13.9928 20.5111 12.5247 21.9333C11.1025 23.3111 9.38208 24 7.36344 24C5.3448 24 3.60143 23.3111 2.13333 21.9333C0.711111 20.5111 0 18.8222 0 16.8667C0 15.2667 0.48172 13.7333 1.44516 12.2667ZM18.0989 12.2667L26.0817 0H32L26.9075 10.3333C28.1462 10.7778 29.2014 11.6 30.0731 12.8C30.9448 14 31.3806 15.3556 31.3806 16.8667C31.3806 18.8222 30.6466 20.5111 29.1785 21.9333C27.7563 23.3111 26.0358 24 24.0172 24C21.9986 24 20.2552 23.3111 18.7871 21.9333C17.3649 20.5111 16.6538 18.8222 16.6538 16.8667C16.6538 15.2667 17.1355 13.7333 18.0989 12.2667Z" fill="#14B082"></path>
                            </svg>        
                            <p>Propeller Ads was the ad network where I had my best and biggest campaigns as an affiliate. The support team was great when it came to helping with optimization advice, the traffic volume was some of the biggest out there too.</p>
                        </div>
                        <div class="swiper-slide--bottom">
                                                        <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/11/testimonials_aff_vatar_2.jpeg" alt="" />
                                                        <h4>Emanuel Cinca, Stackedmarketer</h4>
                        </div>
                    </div>
                                        <div class="swiper-slide" role="group" aria-label="3 / 3"  style={{width: "1413.33px", marginRight: "220px;"}}>
                        <div class="swiper-slide--top" style={{width:'1413.33px', marginRight: "220px"}}>
                            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.44516 12.2667L9.42796 0H15.3462L10.2538 10.3333C11.4925 10.7778 12.5477 11.6 13.4194 12.8C14.291 14 14.7269 15.3556 14.7269 16.8667C14.7269 18.8222 13.9928 20.5111 12.5247 21.9333C11.1025 23.3111 9.38208 24 7.36344 24C5.3448 24 3.60143 23.3111 2.13333 21.9333C0.711111 20.5111 0 18.8222 0 16.8667C0 15.2667 0.48172 13.7333 1.44516 12.2667ZM18.0989 12.2667L26.0817 0H32L26.9075 10.3333C28.1462 10.7778 29.2014 11.6 30.0731 12.8C30.9448 14 31.3806 15.3556 31.3806 16.8667C31.3806 18.8222 30.6466 20.5111 29.1785 21.9333C27.7563 23.3111 26.0358 24 24.0172 24C21.9986 24 20.2552 23.3111 18.7871 21.9333C17.3649 20.5111 16.6538 18.8222 16.6538 16.8667C16.6538 15.2667 17.1355 13.7333 18.0989 12.2667Z" fill="#14B082"></path>
                            </svg>        
                            <p>PropellerAds is unique in the business because of their advanced filter and targeting system. I would not have such good and fast results without quality support from the account manager. I wanna say "Thank You" to Nataly, you are amazing!</p>
                        </div>
                        <div class="swiper-slide--bottom">
                                                        <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/11/testimonials_aff_vatar_3.png" alt="" />
                                                        <h4>Dan Lemish, TP Digital marketing Group</h4>
                        </div>
                    </div>
                                    </div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            <div class="a_testimonials__pagin swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" aria-current="true"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
        </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-5d64675 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="5d64675" data-element_type="section">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1475c35" data-id="1475c35" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-e437014 elementor-widget elementor-widget-agencies_growth" data-id="e437014" data-element_type="widget" data-widget_type="agencies_growth.default">
                <div className="elementor-widget-container">
                  <section className="growth">
                    <div className="container">
                      <div className="growth__title">
                        <h2>Look how <span> affiliates </span> grow with PropellerAds</h2>
                        <a href="/" className="button">Start my first campaign</a>
                      </div>
                      <div className="growth__body">
                        <div className="growth__tabs">
                          <div className={`growth__tab ${activeIndex === 1 ? 'active' : ''}`}
                                 onClick={() => handleCardClick(1)}> 
                            <div className="growth__tab--currency">
                              <span>01</span>
                              <h4>Choose offer and set up campaign</h4>
                              <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7631 16.7716C13.6242 16.9138 13.4344 16.9951 13.2356 16.9975L12.8556 17.0017C12.6572 17.0017 12.4665 16.925 12.3232 16.7877L7.13611 11.7053C7.04041 11.6125 6.98574 11.4853 6.98425 11.352C6.98276 11.2187 7.03458 11.0903 7.12818 10.9954L7.8302 10.2775C7.92131 10.1824 8.04685 10.128 8.17854 10.1265C8.31022 10.125 8.43695 10.1766 8.53016 10.2696L13.0196 14.6698L17.4096 10.1704C17.5024 10.0747 17.6296 10.0201 17.7629 10.0186C17.8962 10.0171 18.0246 10.0689 18.1196 10.1625L18.8274 10.8647C18.9231 10.9575 18.9778 11.0847 18.9793 11.218C18.9808 11.3513 18.929 11.4797 18.8354 11.5746L13.7631 16.7716Z" fill="black" />
                              </svg>
                            </div>
                            <div className="growth__tab--list" style={{height: 244}}>
                              <div className="growth__tab--list--inner">
                                <div>
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8499 7.24999L9.24985 17.85C9.15597 17.9447 9.02817 17.9979 8.89485 17.9979C8.76153 17.9979 8.63374 17.9447 8.53985 17.85L3.14985 12.46C3.0552 12.3661 3.00195 12.2383 3.00195 12.105C3.00195 11.9717 3.0552 11.8439 3.14985 11.75L3.84985 11.05C3.94374 10.9553 4.07153 10.9021 4.20485 10.9021C4.33817 10.9021 4.46597 10.9553 4.55985 11.05L8.88985 15.38L18.4399 5.82999C18.6377 5.63821 18.952 5.63821 19.1499 5.82999L19.8499 6.53999C19.9445 6.63388 19.9978 6.76168 19.9978 6.89499C19.9978 7.02831 19.9445 7.15611 19.8499 7.24999Z" fill="#416FF4" />
                                  </svg>
                                  <p>Pick an offer in a trusted CPA network to run in PropellerAds</p>
                                </div>
                                <div>
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8499 7.24999L9.24985 17.85C9.15597 17.9447 9.02817 17.9979 8.89485 17.9979C8.76153 17.9979 8.63374 17.9447 8.53985 17.85L3.14985 12.46C3.0552 12.3661 3.00195 12.2383 3.00195 12.105C3.00195 11.9717 3.0552 11.8439 3.14985 11.75L3.84985 11.05C3.94374 10.9553 4.07153 10.9021 4.20485 10.9021C4.33817 10.9021 4.46597 10.9553 4.55985 11.05L8.88985 15.38L18.4399 5.82999C18.6377 5.63821 18.952 5.63821 19.1499 5.82999L19.8499 6.53999C19.9445 6.63388 19.9978 6.76168 19.9978 6.89499C19.9978 7.02831 19.9445 7.15611 19.8499 7.24999Z" fill="#416FF4" />
                                  </svg>
                                  <p>Choose ad formats, traffic types, and bidding models</p>
                                </div>
                                <div>
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8499 7.24999L9.24985 17.85C9.15597 17.9447 9.02817 17.9979 8.89485 17.9979C8.76153 17.9979 8.63374 17.9447 8.53985 17.85L3.14985 12.46C3.0552 12.3661 3.00195 12.2383 3.00195 12.105C3.00195 11.9717 3.0552 11.8439 3.14985 11.75L3.84985 11.05C3.94374 10.9553 4.07153 10.9021 4.20485 10.9021C4.33817 10.9021 4.46597 10.9553 4.55985 11.05L8.88985 15.38L18.4399 5.82999C18.6377 5.63821 18.952 5.63821 19.1499 5.82999L19.8499 6.53999C19.9445 6.63388 19.9978 6.76168 19.9978 6.89499C19.9978 7.02831 19.9445 7.15611 19.8499 7.24999Z" fill="#416FF4" />
                                  </svg>
                                  <p>Use Traffic Estimator to find out campaign reach and plan better</p>
                                </div>
                              </div>
                              <div className="growth__tab--pic">
                                <img decoding='async'  src={af3} alt="" />
                              </div>        
                            </div>
                          </div>
                          <div className={`growth__tab ${activeIndex === 2 ? 'active' : ''}`}
                             onClick={() => handleCardClick(2)}> 
                            <div className="growth__tab--currency">
                              <span>02</span>
                              <h4>Test and automate</h4>
                              <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7631 16.7716C13.6242 16.9138 13.4344 16.9951 13.2356 16.9975L12.8556 17.0017C12.6572 17.0017 12.4665 16.925 12.3232 16.7877L7.13611 11.7053C7.04041 11.6125 6.98574 11.4853 6.98425 11.352C6.98276 11.2187 7.03458 11.0903 7.12818 10.9954L7.8302 10.2775C7.92131 10.1824 8.04685 10.128 8.17854 10.1265C8.31022 10.125 8.43695 10.1766 8.53016 10.2696L13.0196 14.6698L17.4096 10.1704C17.5024 10.0747 17.6296 10.0201 17.7629 10.0186C17.8962 10.0171 18.0246 10.0689 18.1196 10.1625L18.8274 10.8647C18.9231 10.9575 18.9778 11.0847 18.9793 11.218C18.9808 11.3513 18.929 11.4797 18.8354 11.5746L13.7631 16.7716Z" fill="black" />
                              </svg>
                            </div>
                            <div className="growth__tab--list">
                              <div className="growth__tab--list--inner">
                                <div>
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8499 7.24999L9.24985 17.85C9.15597 17.9447 9.02817 17.9979 8.89485 17.9979C8.76153 17.9979 8.63374 17.9447 8.53985 17.85L3.14985 12.46C3.0552 12.3661 3.00195 12.2383 3.00195 12.105C3.00195 11.9717 3.0552 11.8439 3.14985 11.75L3.84985 11.05C3.94374 10.9553 4.07153 10.9021 4.20485 10.9021C4.33817 10.9021 4.46597 10.9553 4.55985 11.05L8.88985 15.38L18.4399 5.82999C18.6377 5.63821 18.952 5.63821 19.1499 5.82999L19.8499 6.53999C19.9445 6.63388 19.9978 6.76168 19.9978 6.89499C19.9978 7.02831 19.9445 7.15611 19.8499 7.24999Z" fill="#416FF4" />
                                  </svg>
                                  <p>Auto-convert one campaign into three with different formats for faster testing</p>
                                </div>
                                <div>
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8499 7.24999L9.24985 17.85C9.15597 17.9447 9.02817 17.9979 8.89485 17.9979C8.76153 17.9979 8.63374 17.9447 8.53985 17.85L3.14985 12.46C3.0552 12.3661 3.00195 12.2383 3.00195 12.105C3.00195 11.9717 3.0552 11.8439 3.14985 11.75L3.84985 11.05C3.94374 10.9553 4.07153 10.9021 4.20485 10.9021C4.33817 10.9021 4.46597 10.9553 4.55985 11.05L8.88985 15.38L18.4399 5.82999C18.6377 5.63821 18.952 5.63821 19.1499 5.82999L19.8499 6.53999C19.9445 6.63388 19.9978 6.76168 19.9978 6.89499C19.9978 7.02831 19.9445 7.15611 19.8499 7.24999Z" fill="#416FF4" />
                                  </svg>
                                  <p>Use Smart Rotator to find out what creatives perform best</p>
                                </div>
                                <div>
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8499 7.24999L9.24985 17.85C9.15597 17.9447 9.02817 17.9979 8.89485 17.9979C8.76153 17.9979 8.63374 17.9447 8.53985 17.85L3.14985 12.46C3.0552 12.3661 3.00195 12.2383 3.00195 12.105C3.00195 11.9717 3.0552 11.8439 3.14985 11.75L3.84985 11.05C3.94374 10.9553 4.07153 10.9021 4.20485 10.9021C4.33817 10.9021 4.46597 10.9553 4.55985 11.05L8.88985 15.38L18.4399 5.82999C18.6377 5.63821 18.952 5.63821 19.1499 5.82999L19.8499 6.53999C19.9445 6.63388 19.9978 6.76168 19.9978 6.89499C19.9978 7.02831 19.9445 7.15611 19.8499 7.24999Z" fill="#416FF4" />
                                  </svg>
                                  <p>Set up conditions to autochange campaign parameters when your KPIs reach certain values</p>
                                </div>
                              </div>
                              <div className="growth__tab--pic">
                                <img decoding="async" src={af4} alt />
                              </div>        
                            </div>
                          </div>
                          <div className={`growth__tab ${activeIndex === 3 ? 'active' : ''}`}
                             onClick={() => handleCardClick(3)}> 
                            <div className="growth__tab--currency">
                              <span>03</span>
                              <h4>Optimize and scale</h4>
                              <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7631 16.7716C13.6242 16.9138 13.4344 16.9951 13.2356 16.9975L12.8556 17.0017C12.6572 17.0017 12.4665 16.925 12.3232 16.7877L7.13611 11.7053C7.04041 11.6125 6.98574 11.4853 6.98425 11.352C6.98276 11.2187 7.03458 11.0903 7.12818 10.9954L7.8302 10.2775C7.92131 10.1824 8.04685 10.128 8.17854 10.1265C8.31022 10.125 8.43695 10.1766 8.53016 10.2696L13.0196 14.6698L17.4096 10.1704C17.5024 10.0747 17.6296 10.0201 17.7629 10.0186C17.8962 10.0171 18.0246 10.0689 18.1196 10.1625L18.8274 10.8647C18.9231 10.9575 18.9778 11.0847 18.9793 11.218C18.9808 11.3513 18.929 11.4797 18.8354 11.5746L13.7631 16.7716Z" fill="black" />
                              </svg>
                            </div>
                            <div className="growth__tab--list">
                              <div className="growth__tab--list--inner">
                                <div>
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8499 7.24999L9.24985 17.85C9.15597 17.9447 9.02817 17.9979 8.89485 17.9979C8.76153 17.9979 8.63374 17.9447 8.53985 17.85L3.14985 12.46C3.0552 12.3661 3.00195 12.2383 3.00195 12.105C3.00195 11.9717 3.0552 11.8439 3.14985 11.75L3.84985 11.05C3.94374 10.9553 4.07153 10.9021 4.20485 10.9021C4.33817 10.9021 4.46597 10.9553 4.55985 11.05L8.88985 15.38L18.4399 5.82999C18.6377 5.63821 18.952 5.63821 19.1499 5.82999L19.8499 6.53999C19.9445 6.63388 19.9978 6.76168 19.9978 6.89499C19.9978 7.02831 19.9445 7.15611 19.8499 7.24999Z" fill="#416FF4" />
                                  </svg>
                                  <p>Use retargeting to re-engage users and group those who view, click your ads, or convert</p>
                                </div>
                                <div>
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8499 7.24999L9.24985 17.85C9.15597 17.9447 9.02817 17.9979 8.89485 17.9979C8.76153 17.9979 8.63374 17.9447 8.53985 17.85L3.14985 12.46C3.0552 12.3661 3.00195 12.2383 3.00195 12.105C3.00195 11.9717 3.0552 11.8439 3.14985 11.75L3.84985 11.05C3.94374 10.9553 4.07153 10.9021 4.20485 10.9021C4.33817 10.9021 4.46597 10.9553 4.55985 11.05L8.88985 15.38L18.4399 5.82999C18.6377 5.63821 18.952 5.63821 19.1499 5.82999L19.8499 6.53999C19.9445 6.63388 19.9978 6.76168 19.9978 6.89499C19.9978 7.02831 19.9445 7.15611 19.8499 7.24999Z" fill="#416FF4" />
                                  </svg>
                                  <p>Use AI-based CPA Goal bidding, our latest feature for most converting traffic at your price</p>
                                </div>
                                <div>
                                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8499 7.24999L9.24985 17.85C9.15597 17.9447 9.02817 17.9979 8.89485 17.9979C8.76153 17.9979 8.63374 17.9447 8.53985 17.85L3.14985 12.46C3.0552 12.3661 3.00195 12.2383 3.00195 12.105C3.00195 11.9717 3.0552 11.8439 3.14985 11.75L3.84985 11.05C3.94374 10.9553 4.07153 10.9021 4.20485 10.9021C4.33817 10.9021 4.46597 10.9553 4.55985 11.05L8.88985 15.38L18.4399 5.82999C18.6377 5.63821 18.952 5.63821 19.1499 5.82999L19.8499 6.53999C19.9445 6.63388 19.9978 6.76168 19.9978 6.89499C19.9978 7.02831 19.9445 7.15611 19.8499 7.24999Z" fill="#416FF4" />
                                  </svg>
                                  <p>Choose between audiences with different activity level to expand the reach</p>
                                </div>
                              </div>
                              <div className="growth__tab--pic">
                                <img decoding="async" src={af5}alt />
                              </div>        
                            </div>
                          </div>
                        </div>
                        <div className="growth__content">
                          <div className={`growth__content--pic ${activeIndex === 1 ? 'active' : ''}`}
                                onClick={() => handleCardClick(1)}>
                            <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/11/af_growth_img11.svg" alt />
                          </div>
                          <div className={`growth__content--pic ${activeIndex === 2 ? 'active' : ''}`}
                                onClick={() => handleCardClick(2)}>
                            <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/11/af_growth_img2.svg" alt />
                          </div>
                          <div className={`growth__content--pic ${activeIndex === 3 ? 'active' : ''}`}
                                onClick={() => handleCardClick(3)}>
                            <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/11/af_growth_img3.png" alt />
                          </div>
                        </div>
                        <strong />
                      </div>
                      <div className="custom-board">
                        <svg width={812} height={364} viewBox="0 0 812 364" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.1" d="M22.9407 295.013C45.4581 302.846 66.2947 312.263 91.5347 314.965C109.562 316.895 127.869 315.412 146.054 309.717C179.959 299.097 213.219 283.365 241.078 262.708C269.547 241.6 300.075 221.31 323.457 196.009C345.196 172.485 364.22 146.699 387.351 124.088C426.107 86.2031 481.543 64.0733 534.181 46.2245C562.028 36.7818 590.031 27.4806 618.084 18.6733C635.688 13.1465 654.245 9.13407 671.018 1.52328" stroke="white" strokeWidth={3} strokeLinecap="round" />
                          <path opacity="0.2" d="M60.5766 308.015C84.5139 317.521 106.562 328.658 133.68 332.755C153.049 335.681 172.88 334.938 192.778 329.643C229.876 319.772 266.519 304.353 297.565 283.368C329.289 261.925 363.198 241.46 389.629 215.254C414.204 190.889 435.953 163.955 461.987 140.64C505.606 101.576 566.488 80.2919 624.148 63.4965C654.653 54.6111 685.318 45.8856 716.014 37.6955C735.277 32.5559 755.498 29.0951 773.962 21.668" stroke="white" strokeWidth={3} strokeLinecap="round" />
                        </svg>
                        <svg width={348} height={430} viewBox="0 0 348 430" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.2" d="M267 2C241.876 4.3427 214.59 4.71006 190.109 10.1887C166.154 15.5496 140.926 25.2753 119.85 35.5472C81.0105 54.4763 61.1183 80.9759 43.0713 112.591C13.2884 164.766 2.50562 218.88 2.04015 275.572C1.73201 313.103 3.17653 350.252 7.09878 387.66C8.29629 399.081 7.69777 412.138 16.0919 422" stroke="white" strokeWidth={3} strokeLinecap="round" />
                          <path opacity="0.1" d="M346 66C320.402 68.3929 292.601 68.7681 267.658 74.3642C243.251 79.8399 217.548 89.774 196.074 100.266C156.501 119.601 136.234 146.668 117.846 178.961C87.5014 232.253 76.5152 287.527 76.0409 345.435C75.727 383.77 77.1987 421.715 81.195 459.925C82.4151 471.59 81.8053 484.926 90.3578 495" stroke="white" strokeWidth={3} strokeLinecap="round" />
                        </svg>
                        <h2>
                          <p>Propeller Priority program for affiliates</p>
                        </h2>
                        <p>Priority support line, early access to new features, and other perks
                        </p>
                        <a href="https://propellerads.com/blog/adv-explore-our-new-priority-program-with-perks-for-members/" className="button">Learn more</a>
                      </div>
                    </div>
                  </section>   
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-4b6b7b8 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="4b6b7b8" data-element_type="section">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4f432d9" data-id="4f432d9" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-fa659a3 elementor-widget elementor-widget-agencie_slider" data-id="fa659a3" data-element_type="widget" data-widget_type="agencie_slider.default">
                <div className="elementor-widget-container">
                  <section className="customSlider">
                    <div className="container">
                      <div className="customSlider__header">
                        <h2>Case studies</h2>
                        <div className="customSlider__arrows">
                          <div className="customSlider__arrows--prev swiper-button-disabled" tabIndex={-1} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-730da59e89a2aba4" aria-disabled="true">
                            <svg width={49} height={16} viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.292893 8.70711C-0.0976295 8.31659 -0.0976296 7.68342 0.292892 7.2929L6.65685 0.928936C7.04738 0.538411 7.68054 0.538411 8.07107 0.928936C8.46159 1.31946 8.46159 1.95263 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292893 8.70711ZM49 9L1 9L1 7L49 7L49 9Z" fill="#12141D" />
                            </svg>
                          </div>
                          <div className="customSlider__arrows--next" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-730da59e89a2aba4" aria-disabled="false">
                            <svg width={49} height={16} viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M48.7071 8.70711C49.0976 8.31659 49.0976 7.68342 48.7071 7.2929L42.3431 0.928936C41.9526 0.538411 41.3195 0.538411 40.9289 0.928936C40.5384 1.31946 40.5384 1.95263 40.9289 2.34315L46.5858 8L40.9289 13.6569C40.5384 14.0474 40.5384 14.6805 40.9289 15.0711C41.3195 15.4616 41.9526 15.4616 42.3431 15.0711L48.7071 8.70711ZM-8.74228e-08 9L48 9L48 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#12141D" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="customSlider__slider swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                        <div className="swiper-wrapper" id="swiper-wrapper-730da59e89a2aba4" aria-live="polite" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                          <a href="https://propellerads.com/blog/adv-cpa-goal-for-interstitials-finance-survey-case-study/" className="swiper-slide swiper-slide-active" style={{width: '405.333px', marginRight: 30}} role="group" aria-label="1 / 4">
                            <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/11/twitter_1200x675px_en-2.png" alt />
                            <div className="swiper-slide--info">
                              <p>INTERSTITIAL ADS CASE STUDY</p>
                              <h6>CPA Goal for Interstitials: Finance Survey Case Study</h6>
                            </div>
                          </a>
                          <a href="https://propellerads.com/blog/adv-unlocking-the-potential-of-direct-click-traffic-type-case-study/" className="swiper-slide swiper-slide-next" style={{width: '405.333px', marginRight: 30}} role="group" aria-label="2 / 4">
                            <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/11/CDD-3260_PAdsADV_-DClick_CS_1200x675_Tw-1.webp" alt />
                            <div className="swiper-slide--info">
                              <p>DIRECT CLICK CASE STUDY</p>
                              <h6>Unlocking the Potential of Direct Click Traffic Type</h6>
                            </div>
                          </a>
                          <a href="https://propellerads.com/blog/adv-how-real-clients-use-demographic-targeting-results-and-feedback/" className="swiper-slide" style={{width: '405.333px', marginRight: 30}} role="group" aria-label="3 / 4">
                            <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/11/CDD-3230_PAdsADV_-DTargeting_1200х600_eml.webp" alt />
                            <div className="swiper-slide--info">
                              <p>DEMOGRAPHIC TARGETING CASE STUDY</p>
                              <h6>How Real Clients Use Demographic Targeting: Results and Feedback</h6>
                            </div>
                          </a>
                          <a href="https://propellerads.com/blog/adv-propellerads-audiences-in-action-case-study-statistics/" className="swiper-slide" role="group" aria-label="4 / 4" style={{width: '405.333px', marginRight: 30}}>
                            <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/11/CDD-2707_PAds_CS_Audiences_1200x600-2.webp" alt />
                            <div className="swiper-slide--info">
                              <p>INTEREST TARGETING CASE STUDY</p>
                              <h6>Interest Targeting in Action</h6>
                            </div>
                          </a>
                        </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                      <div className="customSlider--more">
                        <a href="https://propellerads.com/blog/category/learn/case-studies/" className="button">More case studies</a>
                      </div>
                    </div>
                  </section>
                  <section className="a_cards-mob">
                    <div className="container">
                      <h2 className="a_cards-mob__title">Case studies</h2>
                      <div className="a_cards-mob__items">
                        <a href="https://propellerads.com/blog/adv-cpa-goal-for-interstitials-finance-survey-case-study/" className="a_cards-mob__item">
                          <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/11/twitter_1200x675px_en-2.png" alt />
                          <div className="a_cards-mob--info">
                            <p>INTERSTITIAL ADS CASE STUDY							{/*<span></span> */}
                            </p>
                            <h6>CPA Goal for Interstitials: Finance Survey Case Study</h6>
                            <span />
                          </div>
                        </a>
                        <a href="https://propellerads.com/blog/adv-unlocking-the-potential-of-direct-click-traffic-type-case-study/" className="a_cards-mob__item">
                          <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/11/CDD-3260_PAdsADV_-DClick_CS_1200x675_Tw-1.webp" alt />
                          <div className="a_cards-mob--info">
                            <p>DIRECT CLICK CASE STUDY							{/*<span></span> */}
                            </p>
                            <h6>Unlocking the Potential of Direct Click Traffic Type</h6>
                            <span />
                          </div>
                        </a>
                        <a href="https://propellerads.com/blog/adv-how-real-clients-use-demographic-targeting-results-and-feedback/" className="a_cards-mob__item">
                          <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/11/CDD-3230_PAdsADV_-DTargeting_1200х600_eml.webp" alt />
                          <div className="a_cards-mob--info">
                            <p>DEMOGRAPHIC TARGETING CASE STUDY							{/*<span></span> */}
                            </p>
                            <h6>How Real Clients Use Demographic Targeting: Results and Feedback</h6>
                            <span />
                          </div>
                        </a>
                        <a href="https://propellerads.com/blog/adv-propellerads-audiences-in-action-case-study-statistics/" className="a_cards-mob__item">
                          <img decoding="async" src="https://propellerads.com/wp-content/uploads/2022/11/CDD-2707_PAds_CS_Audiences_1200x600-2.webp" alt />
                          <div className="a_cards-mob--info">
                            <p>INTEREST TARGETING CASE STUDY							{/*<span></span> */}
                            </p>
                            <h6>Interest Targeting in Action</h6>
                            <span />
                          </div>
                        </a>
                      </div>
                      <div className="a_cards-mob--more">
                        <a href="https://propellerads.com/blog/category/learn/case-studies/" className="button">More case studies</a>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-9aac714 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="9aac714" data-element_type="section">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-96e15e6" data-id="96e15e6" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-4f448b2 elementor-widget elementor-widget-general_sign_up" data-id="4f448b2" data-element_type="widget" data-widget_type="general_sign_up.default">
                <div className="elementor-widget-container">
                  <section className="custom-run">
                    <div className="container">
                      <div className="custom-run--inner">
                        <h1>Run my first campaign</h1>
                        <div className="custom-run--button">
                          <a href="https://partners.propellerads.com/#/auth/signUp" className="button">Sign up</a>
                          <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={5} cy={5} r={4} fill="#0C6A4E" stroke="white" />
                          </svg>
                          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8H16" stroke="white" />
                            <path d="M8 16L8 0" stroke="white" />
                          </svg>
                          <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 8L1 0.999999L9 1L5 8Z" fill="#0C6A4E" stroke="white" />
                          </svg>
                          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8H16" stroke="white" />
                            <path d="M8 16L8 0" stroke="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  <footer className="footer">
    <div className="container">
      <div className="footer--top">
        <div className="footer__info">
          <a href="/"><img src="https://propellerads.com/wp-content/uploads/2022/11/header_logo_new.svg" alt /></a>
          <div className="footer__info--part">
            <p>Part of</p>
            <a href="https://adtechholding.com"><img src="https://propellerads.com/wp-content/uploads/2022/11/adtech_logo_footer.svg" alt /></a>
          </div>
          <div className="footer__social">
            <a href="https://twitter.com/propellerads" target="_blank">
              <img src="https://propellerads.com/wp-content/uploads/2022/11/footer1.svg" alt />
            </a>
            <a href="https://www.facebook.com/propellerads/" target="_blank">
              <img src="https://propellerads.com/wp-content/uploads/2022/11/footer2.svg" alt />
            </a>
            <a href="https://www.instagram.com/propellerads/?hl=en" target="_blank">
              <img src="https://propellerads.com/wp-content/uploads/2022/11/footer3.svg" alt />
            </a>
            <a href="https://www.youtube.com/channel/UCmrS5O48CFDW8pwhFcYEc5A" target="_blank">
              <img src="https://propellerads.com/wp-content/uploads/2022/11/footer4.svg" alt />
            </a>
            <a href="https://www.linkedin.com/company/propeller-ads-media/" target="_blank">
              <img src="https://propellerads.com/wp-content/uploads/2022/11/footer5.svg" alt />
            </a>
          </div>
          <a target="_blank" href="https://help.propellerads.com/en/?_gl=1*1y2emqg*_ga*Mzg4NTUwMDk5LjE2NjQ3ODI0MDg.*_ga_HKZGKGY1ZW*MTY2NzU2NTcyMS45OC4xLjE2Njc1NjYxMDUuMC4wLjA.">Support &amp; Knowledge Center</a>
          <a href="mailto:contact.us@propellerads.com">contact.us@propellerads.com</a>
          <a href="tel:+357 2528-16-64">+357 2528-16-64</a>
          <a className="footer__info--payment" href>
            <img src="https://propellerads.com/wp-content/uploads/2022/11/footer_payment.svg" alt />
          </a>
          <div className="header__language footer__language">
            <div className="header__language--currency">
              <span>Language</span>
              <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="header__language--list">
              <span>FR</span>
              <span>EN</span>
            </div>
          </div>
        </div>
        <div className="footer--top--approved">
          <h6>Approved by:</h6>
          <div>
            <img width={108} src="https://propellerads.com/wp-content/uploads/2022/11/IQnet-certificate.webp" alt />
            <img width={108} src="https://propellerads.com/wp-content/uploads/2022/11/ISO-27001-certificate.webp" alt />
            <img width={108} src="https://propellerads.com/wp-content/uploads/2023/03/approved_new_logoX2.webp" alt />
            <img width={108} src="https://propellerads.com/wp-content/uploads/2022/11/IAB-Europe-certificate.webp" alt />
            <img width={108} src="https://propellerads.com/wp-content/uploads/2022/11/IAB-hellas-certificate.webp" alt />
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__link">
            <h6>Features</h6>
            <a href="https://propellerads.com/features/traffic-quality/">Traffic quality</a>
            <a href="https://propellerads.com/features/traffic-volume/">Traffic volume</a>
            <a href="https://propellerads.com/features/performance/">Ad performance</a>
            <a href="https://propellerads.com/features/automation/">Ad automation</a>
          </div>
          <div className="footer__link">
            <h6>Solutions for</h6>
            <a href="https://propellerads.com/solutions/affiliates/">For affiliates</a>
            <a href="https://propellerads.com/solutions/agencies/">For agencies</a>
            <a href="https://propellerads.com/solutions/mobile-utilities/">Mobile utilities campaigns</a>
            <a href="https://propellerads.com/solutions/software/">Software campaigns</a>
            <a href="https://propellerads.com/solutions/sweepstakes/">Lead generation campaigns</a>
            <a href="https://propellerads.com/solutions/finance/">Finance campaigns</a>
          </div>
          <div className="footer__link">
            <h6>Ad Formats</h6>
            <a href="https://propellerads.com/formats/push/">Push notification ads</a>
            <a href="https://propellerads.com/formats/in-page-push/">In-Page Push ads</a>
            <a href="https://propellerads.com/formats/interstitial/">Interstitial ads</a>
            <a href="https://propellerads.com/formats/popunder/">Popunder ads</a>
          </div>
          <div className="footer__link">
            <h6>Resources</h6>
            <a href="https://propellerads.com/blog/category/learn/e-books/">E-books</a>
            <a href="https://propellerads.com/blog/category/learn/case-studies/">Case studies</a>
            <a href="https://propellerads.com/resources/videos-and-webinars/">Videos &amp; Webinars</a>
            <a href="https://help.propellerads.com">Help center</a>
          </div>
        </div>
        <div className="footer__payment--mob">
          <img src="https://propellerads.com/wp-content/uploads/2022/11/footer_payment.svg" alt />
        </div>
      </div>
    </div>
    <div className="footer--center">
      <div className="container">
        <h3>Approved by:</h3>
        <div className="footer--center--approved">
          <img width={108} src="https://propellerads.com/wp-content/uploads/2022/11/IQnet-certificate.webp" alt />
          <img width={108} src="https://propellerads.com/wp-content/uploads/2022/11/ISO-27001-certificate.webp" alt />
          <img width={108} src="https://propellerads.com/wp-content/uploads/2023/03/approved_new_logoX2.webp" alt />
          <img width={108} src="https://propellerads.com/wp-content/uploads/2022/11/IAB-Europe-certificate.webp" alt />
          <img width={108} src="https://propellerads.com/wp-content/uploads/2022/11/IAB-hellas-certificate.webp" alt />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="footer--bottom">
        <div className="footer__technical">
          <a href="https://propellerads.com/privacy/">Privacy Policy</a>
          <a href="https://propellerads.com/terms-conditions/">Terms</a>
          <a href="https://propellerads.com/cookies/">Cookies Policy</a>
          <a href="https://propellerads.com/opting-out/">Opt-Out</a>
          <a href="https://abuse.propellerads.com/?_gl=1*1x6p2o0*_ga*Mzg4NTUwMDk5LjE2NjQ3ODI0MDg.*_ga_HKZGKGY1ZW*MTY2NzU2NTcyMS45OC4xLjE2Njc1Njc3MjEuMC4wLjA.">Report Abuse</a>
        </div>
        <div className="footer--copy">© Copyright 2023, PropellerAds.com 2011-2023</div>
      </div>
    </div>
  </footer>
  <span id="elementor-device-mode" className="elementor-screen-only" />
  <div style={{display: 'none', visibility: 'hidden'}}>
  </div>
 </div>

  )
}




