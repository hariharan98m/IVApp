import cover from './components/cover.vue';
import about from './components/about.vue';
import team from './components/team.vue';
import userHome from './components/userHome.vue';
import companyHome from './components/companyHome.vue';
import editProfile from './components/editProfile.vue';
import companyProfile from './components/companyProfile.vue';
import editStuff from './components/editStuff.vue';
import test from './components/test.vue';
import previewProfile from './components/previewProfile.vue';
import previewCompanyProfile from './components/previewCompanyProfile.vue';

export default 
    [
    { path: '/', component: cover},
    { name:'instAbout', path: '/about', component: about},
    { name: 'companyAbout', path: '/about', component: about},
    {path: '/team', component: team},
    {path: '/userHome', component: userHome},
    {path: '/companyHome', component: companyHome},
    {path: '/editProfile', component: editProfile},
    {path: '/editStuff', component: editStuff},
    {path: '/test', component: test},
    {path: '/previewProfile', component: previewProfile},
    {path: '/previewCompanyProfile', component: previewCompanyProfile},
    {name: 'passContent', path: '/previewCompanyProfile/:user_page_content', component: previewCompanyProfile, props:true},
    {name: 'passContactContent', path: '/previewCompanyProfile/:user_page_content', component: previewCompanyProfile, props:true},
    {path: '/companyProfile', component: companyProfile}

]
