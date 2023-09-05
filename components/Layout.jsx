'use client';
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import classNames from "classnames";

function Layout({children}) {
  const router = useRouter();
  console.log(router.asPath)
  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem("isLoggedIn")
  console.log(isLoggedIn)
  return <div>
     <header className="main_header">
        <div className="header_strip">
          <span>
            Call Now:{" "}
            <a href="tel:+0333 577 0488" className="fc_primary">
              0333 577 0488
            </a>
          </span>
        </div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <a className="navbar-brand" href="#">
            <Image 
              src="/assests/images/logo.svg"
              alt="img"
              width={70}
              height={70}
            />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className={classNames('nav-link', {
                  'active' : router.asPath === '/'
                })} href='/'>Home</Link>
                </li>
                <li className="nav-item">
                <Link className={classNames('nav-link', {
                  'active' : router.asPath === '/search'
                })} href='/search'>Search</Link>
                </li>
                <li className="nav-item">
                  <Link className={classNames('nav-link', {
                  'active' : router.asPath === '/special-offers'
                })} href="/special-offers">
                  Special Offers
                  </Link>
                </li>
                <li className="nav-item">
                <Link className={classNames('nav-link', {
                  'active' : router.asPath === '/about-us'
                })} href='/about-us'>About Us</Link>
                </li>
                <li className="nav-item">
                <Link  className={classNames('nav-link', {
                  'active' : router.asPath === '/contact-us'
                })} href='/contact-us'>Contact Us</Link>
                </li>
                
              </ul>
              <form className="d-flex ms-auto" role="search">
                {/* <button className="btn btn-danger" type="submit"> */}
                <Link className="btn btn-danger" href={isLoggedIn?'/admin/my-account':'/signup'}>{isLoggedIn?"My Account":"Sign Up"}</Link>
                {/* </button> */}
              </form>
            </div>
          </div>
        </nav>
      </header>
    {/* header and footer
     <Link href='/signup'>Sign Up</Link>
     
     
    
      */}
    {children}

    <footer className="footer_main">
          <div className="container">
              <div className="content_footer">
              <div className="row footer_newsletter mb-4">
              <div className="col-lg-6">
                <h2 className="heding_l large_title">Sign up to our newsletter</h2>
                <p>Stay up to date with the latest news, annoucements and special offers.</p>
              </div>
              <div className="col-lg-6">
                <form action="">
                <div className="d-flex gap-4">
                <input type="email" className="form-control" id="" placeholder="Email Address"/>
                <button className="btn btn-danger subscribeBtn">Subscribe</button>
              </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <img  src="assests/images/logo.png" alt="" srcset="" className="img-fluid footer_logo" />
                </div>
              <div className="col-md-3">
                <h3>Pages</h3>
                <div className="link_list">
                <a href="">Home</a>
                <a href="">Search</a>
                <a href="">Special offers</a>
                <a href="">About Us</a>
                <a href="">Contact us</a>
                </div>
              </div>
              <div className="col-md-3">
                <h3>Contact Us</h3>
                <div className="link_list">
                <a href="">Call: 0333 577 0488</a>
                <a href="">Email: info@transitfastsales.com</a>
                <a href="">What’s App</a>
                <a href="">Facebook</a>
                <a href="">Instagram</a>
                </div>
              </div><div className="col-md-3">
                <h3>Legal</h3>
                <div className="link_list">
                <Link href="terms-condition">Terms and Conditions</Link>
                <Link href="faq">Frequent Questions</Link>
                </div>
              </div>
            </div>
              </div>
             
          </div>
          <div className="footer_copy_right ">
                  <div className="container">
                  <span>Copyright © 2023. All Rights Reserved</span>
                  <div className="social_media_icon">
                    <a href=""><i className="fab fa-facebook-square"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>  
                    <a href=""><i className="fab fa-linkedin"></i></a>  

                  </div></div>    
            </div>
      </footer>
    </div>;
}

export default Layout;
