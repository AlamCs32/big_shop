import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Template() {

    return (
        <Carousel infiniteLoop={true} autoPlay={true} dynamicHeight showThumbs={false} showArrows={false} showStatus={false} swipeable={true}>
            <div>
                <img src={"src/assets/Sale.jpg"} height="500px" width="400px" />
            </div>
            <div>
                <img src={"src/assets/product.jpg"} height="500px" width="400px" />
            </div>
            <div>
                <img src={"src/assets/Sale.jpg"} height="500px" width="400px" />
            </div>
        </Carousel >
    );
}

export default Template