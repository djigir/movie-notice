require('./bootstrap')

import { createApp } from 'vue';
import router from "./router";
import App from "./components/App";

/** import all includes components **/
import components from './UI';

/** VueSweetalert2 include **/
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import LaravelVuePagination from 'laravel-vue-pagination';

const app = createApp(App)

components.forEach(component => {
    let componentName = component.__name;
    if (componentName === undefined) { componentName = component.name }
    app.component(componentName, component)
    console.log(component)
})
/** pagination include **/
app.component('LaravelVuePagination', LaravelVuePagination)

app.use(VueSweetalert2)
/** set Swal as global propertie **/
window.Swal = app.config.globalProperties.$swal;

app.use(router).mount('#app')
