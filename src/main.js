/********************************************************
*	      Project name: WBS_Creator					              *
*	      Project by: Nesabyte						                *
*	      Project for: McLean Innovations                 * 
*	      DATE: Dec 2022						                      *
********************************************************/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ExportExcelSheetVueJs from "export-excel-sheet-vue-js";
import Vuetify from "vuetify";
import VueExcelEditor from 'vue-excel-editor'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import 'vuetify/dist/vuetify.css'


Vue.use(VueExcelEditor)
Vue.use(ExportExcelSheetVueJs);
Vue.use(Vuetify)
Vue.config.productionTip = false;
export default new Vuetify({})

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");