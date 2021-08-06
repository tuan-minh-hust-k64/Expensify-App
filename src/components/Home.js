import React from 'react';
import NavHeader from './NavHeader';
import NavLeft from './NavLeft';
import Content from './Content';
const Home = (props) => {
    return (
        <div>
            <div>
                <NavHeader isAuthenticated={true} />
            </div> 
            <NavLeft isAuthenticated={true} />
            <Content isAuthenticated={true}/>
        </div>
        
    )
}


export default Home;