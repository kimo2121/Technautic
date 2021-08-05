import React from 'react'
import './ProfileCard.styles.css'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

const ProfileCard = () => {
    return (
        <div className="profile-outer-holder">
                  <img src="assets/images/profile-icon-img.png" alt="" />
                  <h3>
                    Gary Cartlidge
                    <a href="#">
                      <img src="assets/images/heart-icon.jpg" alt="" />
                    </a>
                  </h3>
                  <span>
                    0xb89c2f6bb674b...5b15{" "}
                    <a href="#">
                      <img src="assets/images/copy.png" alt="" />{" "}
                    </a>{" "}
                  </span>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <div className="website-linke">
                    <a href="#">www.abcdef.com</a>
                  </div>
                  <button className="btn btn-blue">Follow</button>
                  <div className="profile-social-icons">
                    <ul className="profile-icons">
                      <li>
                        <a href="#">
                          <FaFacebookSquare />
                        </a>
                      </li>
                      <li>
                        <a className='middle-social-media-icon' href="#">
                          <FaInstagramSquare />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaTwitterSquare />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span>Member since 16 March 2021</span>
                </div>
    )
}

export default ProfileCard;
