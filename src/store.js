import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import createPersistedState from 'vuex-persistedstate';


export default new Vuex.Store({
    plugins: [createPersistedState()],

  state: {
    goToMyHome: false,
    instOrCompany: 'not_set',
    links:[],
    user:'',
    count: 0,
    user_full_info:{
        uid:'',
        name:'',
        designation:'',
        department:'',
        me_tagline:'',
        me_about:``,
        company_name:'',
        email:'',
        facebook:'',
        linkedin:'',
        me_picURL: require('./images/andrew-cover.jpg'),
        me_research_area_1_title:'',
        me_research_area_1_content:'',

        me_research_area_2_title:'',
        me_research_area_2_content:'',

        institute_tagline:'',
        institute_about:``,

        institute_picURL: require('./images/stanford_cover.jpg'),

        institute_research_area_1_title:'',
        institute_research_area_1_content:'',

        institute_research_area_2_title:'',
        institute_research_area_2_content:'',
        marker:{

        },
        place:'Stanford University, California',
        cover_logo: 'http://ai-4-all.org/images/stanford-logo.png'
    },
    hr_full_info:{
        uid:'',
        name:'',
        designation:'',
        department:'',
        me_tagline:'',
        me_about:``,
        company_name:'',
        email:'',
        facebook:'',
        linkedin:'',
        me_picURL: "https://icdn2.digitaltrends.com/image/mark-zuckerberg-5-1500x1000-720x720.jpg?ver=1.jpg",
        me_research_area_1_title:'',
        me_research_area_1_content:'',

        me_research_area_2_title:'',
        me_research_area_2_content:'',

        company_tagline:'',
        company_about:``,

        company_picURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Downtown_Menlo_Park_California.jpg/1200px-Downtown_Menlo_Park_California.jpg",

        company_research_area_1_title:'',
        company_research_area_1_content:'',

        company_research_area_2_title:'',
        company_research_area_2_content:'',
        marker:{

        },
        place:'Facebook, Menlo Park, California',
        cover_logo: 'http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19749.png'
    },
    partialProfile: true,
    ivs:[]
  },
  mutations: {
    CHANGE_GO_TO_MY_HOME: (state, value) =>{
        state.goToMyHome = value;
        console.log('change go to my home');
    },
    CHANGE_USER_INFO: (state, value) =>{
        state.user_full_info = value;
        console.log('change go to my home');
    },
    CHANGE_HR_INFO: (state, value) =>{
        state.hr_full_info = value;
        console.log('change go to my home');
    },
    CHANGE_IVS: (state, value) =>{
        state.ivs = value;
        console.log('changed ivs');
    },
    CHANGE_PARTIAL_PROFILE: (state, value) => {
        state.partialProfile = value;
        console.log('change partial profile');
    },
    CHANGE_INST_OR_COMPANY: (state, value) =>{
        state.instOrCompany = value;
    },
    CHANGE_USER: (state, value) =>{
        state.user = value;
        console.log(state.user);
    },
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: {

  },
  getters:{
    countLinks: state =>{
        return state.links.length;
    },

    get_goToMyHome: state =>{
        return state.goToMyHome;
    },


    get_instOrCompany: state =>{
        return state.instOrCompany;
    }
  }
})