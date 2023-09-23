import './assets/main.css'
import "material-design-icons-iconfont/dist/material-design-icons.min.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createVuestic } from "vuestic-ui";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createVuestic()).mount("#app");
