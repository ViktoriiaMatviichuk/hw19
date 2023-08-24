
import { Post } from './post/Post';
import './index.css';


const date = {name: "Meghan Markle",
photo: "https://images.hellomagazine.com/horizon/original_aspect_ratio/854e51cd7f7e-meghan-markle-smiling.jpg",
nickname:  "@m_m"  }
const Publication = ()=>{
    return (
    <>
        <h1 className="title">publications </h1>
        <div className="wrapper">
        <div className="all-content">
            <Post 
                author={date}
                icon="https://w7.pngwing.com/pngs/787/546/png-transparent-planet-earth-world-globe-computer-icons-world-icon-miscellaneous-logo-world-thumbnail.png"
                content="Meghan fondly remembers her first car 😍"
                im="https://i0.wp.com/theroyaluk.com/wp-content/uploads/2023/07/Has-Meghan-dropped-biggest-hint-yet-shes-moving-in-with-Harry.jpeg?w=925&ssl=1"   
                date={"23 липня"}
                time={"21:10"}
                description= "“Exploring Meghan Markle’s first car: A glimpse into Meghan’s early days”"
                source= "THEROYALUK.COM"
                likeButton= "https://image.similarpng.com/very-thumbnail/2020/06/Icon-like-button-transparent-PNG.png"
                heartButton="https://cdn.pixabay.com/photo/2020/09/30/07/48/heart-5614865_1280.png"
                commentsButton="https://w7.pngwing.com/pngs/557/856/png-transparent-black-speech-bubble-computer-icons-facebook-like-button-like-share-comment-rectangle-black-silhouette.png"
                shareButton="https://www.freepnglogos.com/uploads/share-png/arrow-invite-join-share-sharing-icon-15.png"
                > 
            </Post>
            <br></br>
            <Post 
                author={date}
                icon="https://w7.pngwing.com/pngs/787/546/png-transparent-planet-earth-world-globe-computer-icons-world-icon-miscellaneous-logo-world-thumbnail.png"
                content="Meghan fondly remembers her first car 😍"
                im="https://i0.wp.com/theroyaluk.com/wp-content/uploads/2023/07/Has-Meghan-dropped-biggest-hint-yet-shes-moving-in-with-Harry.jpeg?w=925&ssl=1"   
                date={"23 липня"}
                time={"21:10"}
                description= "“Exploring Meghan Markle’s first car: A glimpse into Meghan’s early days”"
                source= "THEROYALUK.COM"
                likeButton= "https://image.similarpng.com/very-thumbnail/2020/06/Icon-like-button-transparent-PNG.png"
                heartButton="https://cdn.pixabay.com/photo/2020/09/30/07/48/heart-5614865_1280.png"
                commentsButton="https://w7.pngwing.com/pngs/557/856/png-transparent-black-speech-bubble-computer-icons-facebook-like-button-like-share-comment-rectangle-black-silhouette.png"
                shareButton="https://www.freepnglogos.com/uploads/share-png/arrow-invite-join-share-sharing-icon-15.png"
                > 
            </Post>
            </div>
    </div>
    </>
    )
}

export default Publication 