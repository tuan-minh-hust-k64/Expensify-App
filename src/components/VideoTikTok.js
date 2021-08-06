import React from 'react';
const VideoTikTok = (props) =>{
    return (
        <div className=" content-header">
            <div className="display-flex">
                <div>
                    <div className="user-avarta-img-content">
                        <img src="/image/user3.jpeg" />
                    </div>
                </div>
                <div className="display-flex__column user-infor">
                    <div className="user-infor-name display-flex">
                        <h3 className="user-name">
                            Huy5628
                        </h3>
                        <small className="user-name__sub">Huy Dan</small>
                    </div>
                    <div >
                        <span className="content-video">Đúng không?</span>
                    </div>
                    <div>
                        <h4 className="music-name">
                            <i className="fas fa-music"></i>
                            <a>Nhạc nền - Tình yêu là gì?</a>
                        </h4>
                    </div>
                    <video controls preload="true" className="video-tiktok" autoPlay muted loop name="media" width="50%" height="50%">
                        <source src={props.video} type="video/mp4" />
                    </video>
                    <div className="video-option">
                        <div className="video-option__item">
                            <div className="video-option__tym">
                                <i className="fas fa-heart"></i>
                            </div>
                            <p>36.5k</p>
                        </div>
                        <div className="video-option__item">
                            <div className="video-option__comment video-option__tym">
                                <i className="fas fa-comment-dots"></i>
                            </div>
                            <p>36.5k</p>
                        </div>
                        <div className="video-option__item">
                            <div className="video-option__share video-option__tym">
                                <i className="fas fa-share"></i>
                                <div className="video-option__sub-share">
                                    <a href="/home">
                                        <i className="fas fa-code"></i>
                                        Nhúng
                                    </a>
                                    <a href="/home">
                                        <i className="fab fa-twitter"></i>
                                        Chia sẻ với Twitter
                                    </a>
                                    <a href="/home">
                                        <i className="fab fa-facebook"></i>
                                        Chia sẻ với Facebook
                                    </a>
                                    <a href="/home">
                                        <i className="fab fa-whatsapp"></i>
                                        Chia sẻ với WhatsApp
                                    </a>
                                    <a href="/home">
                                        <i className="fas fa-link"></i>
                                        Sao chép liên kết
                                    </a>
                                </div>
                            </div>
                            <p>36.5k</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className="button__small">Follow</button>
            </div>
        </div>
    )
};
export default VideoTikTok; 