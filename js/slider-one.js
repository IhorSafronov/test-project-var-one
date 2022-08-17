$(document).ready(function () {
  $(".slider-slick-one").slick({
    // включение выключение стрелок
    arrows: true,
    // включение выключение точек
    dots: false,
    // автонастройка по высоте под конкретный слайд
    adaptiveHeight: false,
    // количество слайдеров, отображенное за раз
    slidesToShow: 5,
    // количество слайдов, прокручиваемых за раз
    slidesToScroll: 1,
    // скорость пролистывания слайдов
    speed: 3000,
    // тип анимации при смене слайда
    easing: "ease",
    // бесконечная прокрутка
    infinite: false,
    // стартовый слайд
    initialSlide: 0,
    // автопроигрыш слайдов
    autoplay: false,
    // скоросто автопрокрутки
    autoplaySpeed: 3000,
    // переметры остановки слайдера
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseonDotsHover: true,
    // управление слайдером мышкой и пальцем
    draggable: true,
    swipe: true,
    // расположение слайда по центр
    centerMode: false,
    // определение ширины
    variableWidth: true,
    // ряды. такая себе опция
    rows: 1,
    slidesPerRow: 1,
    // вертикальный слайдер
    vertical: false,
    verticalSwiping: false,
    // связать два слайдера. В другом слайдере тоже указать имя этого слайдера.
    // asNavFor: "имя класса другого слайдера"
    // адаптив

    // включить переключатель мобаил фёст или десктоп фёст
    mobileFirst: false,
    // перемещение стрелок и точек в отдельный див
    appendArrows: $(".arrows"),
  });
});
