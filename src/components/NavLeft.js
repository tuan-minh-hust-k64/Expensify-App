import React from 'react';
import ListUserOffer from './ListUserOffer';
import ListDiscovery from './ListDiscovery';
import OtherInfor from './OtherInfor';
const NavLeft = (props) => (
    <div className="">
        <div className="container">
            <div className="row">
                <div className="col col-lg-3 offset-lg-1 nav-left">
                    <div className="nav-left-header display-flex__column">
                        <div className="display-flex__column nav-left__item">
                            <a className="text-bold text-font__m item-padding is-active item" >
                                <i className="fas fa-home"></i>
                                <span className="d-none d-lg-block">Dành cho bạn</span>
                                
                            </a>
                            <a className="text-bold text-font__m item-padding item">
                                <i className="fas fa-user-friends"></i>
                                <span className="d-none d-lg-block">Đang Follow</span>
                                
                            </a>
                            {props.isAuthenticated&&(
                                <a className="text-bold text-font__m item-padding item">
                                    <i className="fas fa-video"></i>
                                    <span className="d-none d-lg-block">LIVE</span>
                                    
                                </a>
                            )}
                        </div>
                        {props.isAuthenticated?(
                            <div>
                            </div>
                        ):(
                            <div className="info-login display-flex__column d-none d-lg-flex">
                                <span className="">
                                    Đăng nhập để follow các tác giả, thích video và xem bình luận.
                                </span>
                              
                                <button className="text-bold">Đăng nhập</button>
                            </div>
                        )}
                        <div>
                            <div className="list-user-offers">
                                <span className="d-none d-lg-block">
                                    Tài khoản được đề xuất 
                                </span>
                                <ListUserOffer />
                            </div>
                        </div>
                        <div className="d-none d-lg-block">
                            <div className="nav-discovery list-user-offers">
                                <span>
                                    Khám phá
                                </span>
                                <ListDiscovery />
                            </div>
                        </div>
                        <div className="d-none d-lg-block">
                            <div className="nav-discovery list-user-offers">
                                <OtherInfor />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default NavLeft;