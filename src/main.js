import Vue from "vue";
import App from "./App";

import VueSanitize from "vue-sanitize";

Vue.use(VueSanitize);

/* eslint-disable no-new */
new Vue({
    el: "#app",
    components: { App },
    template: "<App/>"
});
