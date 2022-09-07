import Datepicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css'
import StarRating from 'vue-star-rating'
import VueMultiselect from 'vue-multiselect/src/Multiselect.vue';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

/** my cutom components **/
import PageHeader from './PageHeader'


export default [
    Datepicker,
    StarRating,
    VueMultiselect,
    VueSlider,
    Carousel,
    Slide,
    Pagination,
    Navigation,

    /** my cutom components **/
    PageHeader
];
