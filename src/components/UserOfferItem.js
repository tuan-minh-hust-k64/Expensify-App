import React from 'react';
import { Link } from 'react-router-dom';
const UserOfferItem = (props) => (
    <div>
        <Link to='/'>
            <div className="display-flex user-offer">
                <div className="user-avarta-img">
                    <img src="/image/user1.jpeg" />
                </div>
                <div className="user-infor d-none d-lg-block">
                    <div className="display-flex">
                        <p className="text-bold">vietphuongthoa98</p>
                        <i className="fas fa-check-circle user__vip"></i>
                    </div>
                    <div>
                        <small className="text-blur">Việt Phương Thoa</small>
                    </div>
                </div>
            </div>
        </Link>
        <Link to='/'>
            <div className="display-flex user-offer">
                <div className="user-avarta-img">
                    <img src="/image/user2.jpeg" />
                </div>
                <div className="user-infor d-none d-lg-block">
                    <div className="display-flex">
                        <p className="text-bold">beatvn_official</p>
                        <i className="fas fa-check-circle user__vip"></i>
                    </div>
                    <div>
                        <small className="text-blur">BeatVN</small>
                    </div>
                </div>
            </div>
        </Link>
        <Link to='/'>
            <div className="display-flex user-offer">
                <div className="user-avarta-img">
                    <img src="/image/user3.jpeg" />
                </div>
                <div className="user-infor d-none d-lg-block">
                    <div className="display-flex">
                        <p className="text-bold">kenh14official</p>
                        <i className="fas fa-check-circle user__vip"></i>
                    </div>
                    <div>
                        <small className="text-blur">Kenh14.vn</small>
                    </div>
                </div>
            </div>
        </Link>
        <Link to='/'>
            <div className="display-flex user-offer">
                <div className="user-avarta-img">
                    <img src="/image/user4.jpeg" />
                </div>
                <div className="user-infor d-none d-lg-block">
                    <div className="display-flex">
                        <p className="text-bold">dinhthaotrang03</p>
                        <i className="fas fa-check-circle user__vip"></i>
                    </div>
                    <div> 
                        <small className="text-blur">Đinh Thảo Trang</small>
                    </div>
                </div>
            </div>
        </Link>
        <Link to='/'>
            <div className="display-flex user-offer">
                <div className="user-avarta-img">
                    <img src="/image/user5.jpeg" />
                </div>
                <div className="user-infor d-none d-lg-block">
                    <div className="display-flex">
                        <p className="text-bold">vienvibi_889</p>
                        <i className="fas fa-check-circle user__vip"></i>
                    </div>
                    <div>
                        <small className="text-blur">Viên Vibi</small>
                    </div>
                </div>
            </div>
        </Link>
        
        <div className="see-more d-none d-lg-block">
            <p className="text-bold color-main">
                Xem tất cả
            </p>
        </div>
    </div>
);
export default UserOfferItem;