import {useEffect, useState} from "react";
import style from "./style.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../features/store.ts";
import {fetchBannerImagesAsync} from "../../../features/ui/bannerSlice.ts";


const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const dispatch = useDispatch<AppDispatch>();

    const {banners, loading, error} = useSelector(
        (state: RootState) => state.banners
    )
    useEffect(() => {
        dispatch(fetchBannerImagesAsync() as ReturnType<typeof fetchBannerImagesAsync>);
    }, [dispatch]);


    if (loading) {
        return <p>Загрузка товаров...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    const images = banners.map(item => item.url).filter(url => url !== undefined);
    console.log(images);
    const goToPrev = () => {
        setCurrentIndex(prev =>
            prev === 0 ? images.length - 1 : prev - 1
        )
    }

    const goToNext = () => {
        setCurrentIndex(prev =>
            prev === images.length - 1 ? 0 : prev + 1
        )
    }

    return (
        <div className={style.carousel}>
            <button className={`${style.carouselButton} ${style.prev}`} onClick={goToPrev}>
                &lt;
            </button>
            <div className={style.carouselContainer}>
                {images.map((image, index) => (
                    <div
                        key={index}
                         className={`${style.carouselSlide} ${index === currentIndex ? style.active : ''}`}
                        style={{transform: `translateX(-${currentIndex * 100}%)`}}
                    >
                        <img className={style.img} src={image} alt={image} loading="lazy"/>
                    </div>
                ))}
            </div>
            <button className={`${style.carouselButton} ${style.next}`} onClick={goToNext}>
                &gt;
            </button>
        </div>
    );
};

export default ImageSlider;