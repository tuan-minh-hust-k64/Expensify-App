import React,{useState} from 'react';
import { connect } from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import {startLogin, stopLogin} from '../actions/auth';
import Modal from 'react-modal';
const NavHeader = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (
    <div className="nav-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col ">
                    <div className="logo">
                        <a href="/">
                            <img src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-5 d-none d-sm-none d-md-block">
                    <div>
                        <div className="input-search">
                            <form className="form-search">
                                <input className="nav-search" type="text" placeholder="Search" autoComplete="off" />
                                <button className="nav-button">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                            
                        </div>
                    </div>
                </div>
                {props.isAuthenticated? (
                    <div className="col-lg-3 col-md-4 col-sm-6 col nav-option">
                        <div className="nav-option-upload">
                            <a href="/home">
                                <i className="fas fa-cloud-upload-alt"></i>
                            </a>
                            <div className="nav-option-upload__sub">
                                Tải video lên
                            </div>
                        </div>
                        <div className="nav-option-message"> 
                            <a href="/home">
                                <i className="far fa-paper-plane"></i>
                            </a>
                            <div className="nav-option-message__sub">
                                Tin nhắn
                            </div>
                        </div>
                        <div className="nav-option-box">
                            <a href="/home">
                                <i className="far fa-comment-alt"></i>
                            </a>
                            <div className="nav-option-box__sub">
                                Hộp thư
                            </div>
                        </div>
                        <div className="nav-option-user">
                            <a href="/home">
                                <i className="far fa-user"></i>
                            </a>
                            <div className="nav-option-user__sub">
                                <a href="/home">
                                    <i className="far fa-user"></i>
                                    Xem hồ sơ
                                </a>
                            
                                <a href="/home">
                                    <i className="fas fa-cog"></i>
                                    Cài đặt
                                </a>
                                <a href="/home">
                                    <i className="fas fa-language"></i>
                                    Tiếng việt
                                </a>
                                <a href="/home">
                                    <i className="far fa-question-circle"></i>
                                    Phản hồi và trợ giúp
                                </a>
                                <a href="/home">
                                    <i className="far fa-keyboard"></i>
                                    Phím tắt bàn phím
                                </a>
                                <a onClick={props.stopLogin}>
                                    <i className="fas fa-sign-out-alt"></i>
                                    Đăng xuất
                                </a>
                            </div>
                        </div>
                    </div>
                ):(
                    <div className="col-lg-3 col-md-4 col-sm-6 col nav-option">
                        <div className="nav-upload">
                            <a className="text-bold">
                                Tải lên
                            </a>
                        </div>
                        <div>
                            <button className="button" onClick={()=>setShowModal(true)}>
                                Đăng nhập
                            </button>
                        </div>
                        <div className="nav-setting">
                            <i className="fas fa-ellipsis-v"></i>
                            <div className="nav-setting__list">
                                <a href="/">
                                    <i className="fas fa-language"></i>
                                    Tiếng việt
                                </a>
                            
                                <a href="/">
                                    <i className="far fa-keyboard"></i>
                                    Phím tắt bàn phím
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div> 
        <Modal
            isOpen={showModal}
            className="modal-react"
        >
            <div className="modal-body-react" >
                <h2 className="modal__title text-bold">Đăng nhập vào TikTok</h2>
                <div className="close-modal" onClick={()=>setShowModal(false)}>
                    <i className="far fa-times-circle"></i>
                </div>
                <button className="login-with" onClick={props.startLogin}>
                    <i className="fab fa-google-plus-g"></i>
                    <p>
                        Tiếp tục với Google
                    </p>
                    
                </button>
                <div className="modal-sub">
                    Bạn chưa có tài khoản?
                    <a>
                        Đăng kí
                    </a>
                </div>
            </div>
           
        </Modal>
    </div>
)};
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    stopLogin: () => dispatch(stopLogin()),
})
export default connect(undefined, mapDispatchToProps)(NavHeader);



