import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination} from 'swiper'
import 'swiper/swiper.min.css'
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { SRLWrapper } from "simple-react-lightbox"
import classes from "./carousel.module.scss"
import Image from "next/image"

SwiperCore.use([Navigation, Pagination]);

const options = {
    settings: {
      overlayColor: "rgba(82, 39, 15, 0.856)",
      autoplaySpeed: 1500,
      transitionSpeed: 100,
      slideAnimationType: "slide",
      disablePanzoom: false,
      disableWheelControls: true,
    },
    buttons: {
      backgroundColor: "rgb(45, 18, 1)",
      iconColor: "rgb(176, 106, 27)",
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false
    },
    thumbnails: {
      showThumbnails: true
    },
}

const Carousel = ({ data }) => {

    return (
        
      <div className={classes["carousel-wrapper"]}>
          <SRLWrapper options={options}>
              <Swiper
                    style={{ '--swiper-pagination-color': 'rgb(176, 106, 27)',
                             '--swiper-navigation-color': 'rgb(176, 106, 27)',
                             '--swiper-navigation-size': '44px',
                             'font-weight' : "600", 
                            }}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        // when window width is >= 480px
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        // when window width is >= 640px
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        }
                    }}
                    loop={false}
                    navigation={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    >    
                        {data && data.map(item => (
                            <SwiperSlide key={item.id}><div className={classes.imgWrapper} ><Image layout="fill" objectFit="cover" src={item.url} alt="" priority/></div></SwiperSlide>
                        ))}
              </Swiper>
          </SRLWrapper>  
      </div>
        
    )
}

export default Carousel