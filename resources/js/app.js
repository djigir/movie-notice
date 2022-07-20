require('./bootstrap')

import { createApp } from 'vue';
import router from './router';
import App from './components/App';

createApp({
    components:{App}
}).use(router).mount('#app')
