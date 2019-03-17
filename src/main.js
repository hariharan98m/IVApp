import Vue from 'vue'

//firebase
import firebase from 'firebase';
import {config} from './firebaseConfig'
firebase.initializeApp(config);

//google maps
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDculWG36BELRtQR5WPRFgy4S8zpnDv-pU',
    libraries: 'places'
  }
 });

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import  'bulma-extensions/bulma-pricingtable/dist/css/bulma-pricingtable.min.css';
Vue.use(Buefy);

export const bus= new Vue();

//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookSquare, faTwitterSquare, faSnapchatSquare, faInstagram} from '@fortawesome/free-brands-svg-icons' 
import {faChevronLeft, faChevronRight} from '@fortawesome/fontawesome-free-solid';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faSnapchatSquare,faTwitterSquare, faFacebookSquare, faInstagram, fab, faChevronLeft, faChevronRight, faEnvelope)


//router
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Routes from './routes'
import store from './store'


Vue.use(VueResource);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
  routes: Routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    
    if (to.name=='passContactContent')
      return {
        selector : "#ivs"
      }
    
    else if (to.name=='instAbout')
      return {
        selector : "#inst"
      }

    else if (to.name=='companyAbout')
      return {
        selector : "#company"
      }
      
    else 
      return { x: 0, y: 0 }
  }
  
});



Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
require("./assets/main.scss");


router.beforeEach((to, from, next) => {
  console.log('to', to.path);
  console.log('store', store);
  
  if (to.path=='/userHome' || to.path=='/editProfile' || to.path=='/previewProfile') {
    
    if(store.getters.get_goToMyHome && store.getters.get_instOrCompany=='/companyHome'){
      next(false);
    }
    else
      next();
  }else
  if (to.path=='/companyHome' || to.path=='/companyProfile' || to.path=='/previewCompanyProfile'){
    
    if(store.getters.get_goToMyHome && store.getters.get_instOrCompany=='/userHome'){
      console.log('store getters', store.getters.get_instOrCompany);
      next(false);
    }
    else
      next(true);
  }else
  next(true);

})


new Vue({
  render: h => h(App),
  store,
  router:router,
}).$mount('#app')

