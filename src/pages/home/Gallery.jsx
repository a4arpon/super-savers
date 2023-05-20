import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
const Gallery = () => {
  return (
    <div className="grid lg:grid-cols-4 my-20 gap-0">
      <LazyLoadImage
        effect="blur"
        src="https://w0.peakpx.com/wallpaper/477/401/HD-wallpaper-thor-in-avengers-endgame.jpg"
        alt=""
        className="h-96 w-full lg:rounded-tl-xl"
      />
      <div className="lg:col-span-2 h-96">
        <LazyLoadImage
          effect="blur"
          src="https://img.mensxp.com/media/content/2022/Oct/Image-1---Marvel-Studios_6346be426d5e0.jpeg"
          alt=""
          className="h-96 w-full"
        />
      </div>
      <LazyLoadImage
        effect="blur"
        src="https://variety.com/wp-content/uploads/2019/04/jeremy-renner-hawkeye.jpg?w=681&h=383&crop=1"
        alt=""
        className="h-96 w-full lg:rounded-tr-xl"
      />
      <div className="lg:col-span-2 h-96">
        <LazyLoadImage
          effect="blur"
          src="https://www.fortressofsolitude.co.za/wp-content/uploads/2020/12/Robin-10-Reasons-Why-Batmans-Sidekick-Deserves-More-Praise-750x375.jpg"
          alt=""
          className="h-96 w-full lg:col-span-2 lg:rounded-bl-xl"
        />
      </div>
      <div className="lg:col-span-2 h-96">
        <LazyLoadImage
          effect="blur"
          src="https://imgr.cineserie.com/2022/03/the-batman-photo-robert-pattinson-1410908.jpeg"
          alt=""
          width="100%"
          className="h-96 w-full lg:col-span-2 lg:rounded-br-xl"
        />
      </div>
    </div>
  )
}

export default Gallery
