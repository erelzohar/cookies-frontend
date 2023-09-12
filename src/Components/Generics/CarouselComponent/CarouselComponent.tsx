import React from "react";
import "./CarouselComponent.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export interface CarouselObj {
    image: string;
    description: string;
}

type CarouselProps = {
    data: CarouselObj[]
}

class CarouselComponent extends React.Component<CarouselProps> {

    public render(): JSX.Element {
        return (
            <div className="CarouselComponent">
                <Carousel
                    showStatus={false}
                    interval={2500}
                    stopOnHover={false}
                    swipeable
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showArrows={false}
                    showIndicators={false}>
                    {this.props.data.map(e =>
                        <div key={e.description}>
                            <img src={e.image} alt={e.description} />
                        </div>
                    )}
                </Carousel>
            </div>
        );
    }
}

export default CarouselComponent;
