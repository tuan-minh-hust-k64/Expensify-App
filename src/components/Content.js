import React  from 'react';
import {connect} from 'react-redux';
import VideoTikTok from './VideoTikTok';
const Content = (props) => (
    <div className="container content">
        <div className="row">
            <div className="col offset-lg-4 ">
                <div>
                    {
                        props.listVideo.map((video) => {
                            return <VideoTikTok video={video} key={video} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
);
const mapStateToProps = (state) => ({
    listVideo: state.listVideo,
})
export default connect(mapStateToProps)(Content); 