<template>
<div>
<!-- START NAV -->
<div id="flow">
            <span class="flow-1"></span>
            <span class="flow-2"></span>
            <span class="flow-3"></span>
        </div>
    <nav class="navbar is-fixed-top" id="blueBack">
        <div class="container is-link">
            <div class="navbar-brand">
                <a class="navbar-item brand-text" href="../">
          <h2 class="title">JetPacks</h2>
            </a>
            </div>
            <div id="navMenu" class="navbar-menu is-link">
                <div class="navbar-start">
                    <a class="navbar-item" href="/">
            <h3 class="is-medium">Jet Home</h3>
                    </a>
                    <a class="navbar-item" href="/about">
            <h3 class="is-large">Features Jet</h3>
                    </a>
                    <a class="navbar-item" href="/team">
            <h3 class="is-medium">Team Jet</h3>
                    </a>
                </div>
                <div class="navbar-end">
                    <a class="navbar-item" href="/" @click="googleSignout">
                        <h3 class="is-medium">Sign Out</h3>
                    </a>
                        <figure class="image is-64x64 has-image-centered">
                                        <img class="is-rounded" :src="user.photoURL" style="padding:5px;">
                        </figure>

                </div>

            </div>
            </div>
    </nav>
    <!-- END NAV -->


    <br><br><br>
    <div class="container">
        <div class="columns">
            <div class="column is-3 ">
                <aside class="menu is-hidden-mobile">
                    <p class="menu-label has-text-weight-semibold is-uppercase is-size-5 has-text-white">
                        Fire the JP
                    </p>
                    <ul class="menu-list">
                        <li><router-link class="has-text-weight-bold has-text-dark" to="/userHome">Pick your IV Spot</router-link></li>
                    </ul>
                    <p class="menu-label has-text-weight-semibold is-uppercase is-size-5 has-text-white">
                        Profile
                    </p>
                    <ul class="menu-list">
                        
                        <li><router-link class="has-text-weight-bold has-text-primary" to="/editProfile">Edit My Profile</router-link></li>
                        <li><router-link class="has-text-weight-bold has-text-danger" to="/previewProfile">View Profile</router-link></li>
                    </ul>
                    <p class="menu-label has-text-weight-semibold is-uppercase is-size-5 has-text-light">
                        Chats
                    </p>
                    <ul class="menu-list">
                        <li><router-link class="has-text-weight-bold has-text-warning" to="">My Chats</router-link></li>
                    </ul>


                </aside>
            </div>
            <div class="column is-9">
                <section class="hero is-info welcome is-small">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Hi, {{user.displayName}}
                            </h1>
                            <h2 class="subtitle">
                                {{quote}}
                            </h2>
                            <span>
                                    <i class="is-success" style="text-align:end;float:right">- {{quoteAuthor}}</i>
                            </span>
                                
                        </div>
                    </div>
                </section>



                <section class="info-tiles">

                <div class="tile is-ancestor is-vertical">

                    <div class="tile">
                        <div class="tile is-parent">
                            <article class="tile is-child">
                            <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Location Search
                                </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                                    <span class="icon">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </a>
                            </header>

                            <div class="card-content">
                                <div class="content">
                                    <div class="control">
                                        <label>
                                            <gmap-autocomplete style="font-size: 1.5rem;" class="input"
                                                    @place_changed="setPlace" >
                                            </gmap-autocomplete>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </article>
                        </div>


                        <div class="tile is-parent">
                            <article class="tile is-child">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Search by Dept
                                </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                                    <span class="icon">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </a>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <div class="control">
                                        <input class="input is-large" type="text" placeholder="Enter your Dept" v-model="dept">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    </div>
                    </div>



                </div>
    </section>



                </div>
            </div>
        </div>


        <div class="container">
        <div class="tile is-ancestor">
                        <div class="tile is-parent is-8" >
                        <article class="tile is-child notification is-white has-text-centered columns is-vcentered">
                            <div class="column">
                              <p class="subtitle is-size-4 has-text-grey-dark">Search by Company Name</p>
                            <input class="input is-large" type="text" placeholder="Enter a Company Name" v-model="company_name">
                            </div>
                        </article>
                        </div>

                        <div class="tile is-parent" style="max-width:370px;">
                        <article class="tile is-child is-primary box">
                            <div  style="display:inline-block" class="subtitle is-size-3 has-text-grey-light is-text-uppercase">Date FROM <input class="input is-medium" type="date" v-model="date_from" size="380px;"> </div>

                            <div  style="display:inline-block" class="subtitle is-size-3 has-text-grey-light is-text-uppercase">Date TO<input class="input is-medium" type="date" v-model="date_to" size="380px;"> </div>

                        </article>
                        </div>
         </div>



        <div class="container">

         <!-- Staff -->
            <div class="row columns is-multiline">
                <div class="column is-one-third" v-for="(company, index) in filteredCompanies">
                    <div class="card round">
                        <div class="card-image ">
                            <figure class="image is-5by3">
                                <img :src="company.company_picURL">
                            </figure>
                            
                        </div>
                        <div class="card-content" style="padding-bottom:10px;">
                            
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-96x96">
                                        <img :src="company.me_picURL" alt="Image" style="border-radius:5%">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4 no-padding">{{company.name}}</p>
                                    <p><span class="title is-6" style="margin-top:10px;"><a>{{company.company_name}}, {{company.place}}</a></span></p>
                                    <p class="subtitle" style="font-size:14px;margin-top:7px;"><b><i>{{company.designation}}</i></b>, {{company.department}}</p>
                                </div>
                            </div>
                            <div class="content" style="font-size:15px">
                                <i>{{company.company_tagline}}</i>
                            </div>
                            <figure class="image is-3by1">
                                        <img :src="company.cover_logo" alt="Image">
                            </figure>

                            <footer class="card-footer" style="margin-top:10px;">
                        <p class="card-footer-item">
                        <span>
                            View <router-link :to="{name: 'passContent', params: {'user_page_content':company}}" >Profile</router-link>
                        </span>
                        </p>
                        <p class="card-footer-item">
                        <span v-if="company.hasOwnProperty('iv')">
                            <span v-if="company.iv.length==0">
                                No <b class="has-text-link">free slots</b>
                            </span>

                            <span v-else>
                            View <router-link :to="{name: 'passContactContent', params: {'user_page_content':company}}" >Slots</router-link>
                            </span>    
                        </span>
                        <span v-else>
                                No <span class="has-text-link">free slots</span>
                        </span>

                        </p>
                    </footer>

                        </div>

                        
                    
                    </div>
                </div>
                
            </div>
            <!-- End Staff -->


        </div>

        </div>

    </div>



</template>






<script>
import {mapState} from 'vuex'
import {bus } from '../main'
import firebase from 'firebase';

export default {
    computed:{
        ...mapState(['user', 'goToMyHome', 'hr_full_info']),
        filteredCompanies: function(){
            return this.companies.filter((company)=>{                                

                if (company.me_picURL != "https://icdn2.digitaltrends.com/image/mark-zuckerberg-5-1500x1000-720x720.jpg?ver=1.jpg" && company.company_picURL != 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Downtown_Menlo_Park_California.jpg/1200px-Downtown_Menlo_Park_California.jpg' && company.place!="Facebook, Menlo Park, California" && company.cover_logo!="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19749.png"){                    
                    var flag = true;
                    for(var i in this.hr_full_info){    
                        if (company[i]!=null && company[i].length!=0){
                            continue;
                        }
                            
                        else if(i!='uid' && i!='company_location'){
                            flag=false; break;
                        }
                    }
                    if (flag){
                            var flag2 = company.company_name.toLowerCase().match(this.company_name.toLowerCase()) && company.department.toLowerCase().match(this.dept.toLowerCase());
                                if (this.center.lat!=0 && this.center.lng!=0){
                                    var dis = this.getDistance(company.marker, this.center);
                                    console.log(dis);
                                    if (dis<= 50 && flag2){
                                        return this.checkDateExists(company) && true;
                                    }
                                    else
                                        return false;
                                }
                                return this.checkDateExists(company) && flag2;
                                
                    }
                    return false;

                }  
            })
        }
    },
    props:{

        
    },
    created(){
        
        bus.$emit('cover-or-not', false);
        console.log('created, kchangeBG to userHome');

        bus.$emit('changeBG', 'black');

        // Attach an asynchronous callback to read the data at our posts reference
        firebase.database().ref("hr/users_full_info").once('value').then((snapshot)=> {
                this.companies= Object.values(snapshot.val());
        });


    },
    data(){
        return {
            center: { lat: 0, lng: 0 },
            markers: [],
            places: [],
            currentPlace: null,
            quote:'It is never too late to be what you might have been.',
            quoteAuthor:'George Eliot',
            companies:[],
            dept: '',
            company_name: '',
            date_from: '',
            date_to: '',
            PLACE:''
        }
    },
    methods:{
        checkDateExists(company){

                if ((this.date_from!='' || this.date_to!='') && company.iv!=null){
                                    for(var i=0;i<company.iv.length;i++){
                                        
                                        console.log('date 1', new Date(company.iv[i].dateObj));
                                        console.log('date 2', new Date(this.date_from));


                                        console.log('1st dff', new Date(company.iv[i].date) - new Date(this.date_from));
                                        console.log('2nd diff', new Date(company.iv[i].date) - new Date(this.date_to));
                                            if ( (new Date(company.iv[i].date) - new Date(this.date_from))>=0 || (new Date(company.iv[i].date) - new Date(this.date_to))<=0) {
                                                    return true;
                                                }
                                                continue;
                                        }
                                        return false;
                }
                return true;

        },
        googleSignout(){
            firebase.auth().signOut().then(()=>{
                this.$store.commit('CHANGE_GO_TO_MY_HOME', false);
                console.log('signed out');
            });
            
        },
        getDistance: function(p1, p2) {
                var R = 6378137; // Earth’s mean radius in meter
                var dLat = this.rad(p2.lat - p1.lat);
                var dLong = this.rad(p2.lng - p1.lng);
                var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(this.rad(p1.lat)) * Math.cos(this.rad(p2.lat)) *
                    Math.sin(dLong / 2) * Math.sin(dLong / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c;
                return d/1000; // returns the distance in meter
        },
        rad: function(x) {
            return x * Math.PI / 180;
        },
        setPlace(place) {
            const marker = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            };
            this.center = marker;
        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                lat: this.currentPlace.geometry.location.lat(),
                lng: this.currentPlace.geometry.location.lng()
                };
                this.markers.push({ position: marker });
                this.places.push(this.currentPlace);
                this.center = marker;
                this.currentPlace = null;
            }
        },

        geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }


    },
    mounted() {
    //this.geolocate();
    } ,
    beforeMount(){
                    var head = document.getElementsByTagName('head')[0];

            // Save the original method
            var insertBefore = head.insertBefore;

            // Replace it!
            head.insertBefore = function (newElement, referenceElement) {

                if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') > -1) {

                    console.info('Prevented Roboto from loading!');
                    return;
                }

                insertBefore.call(head, newElement, referenceElement);
            };

    }
}
</script>


<style scoped>

@import "../css/admin.css";
@import "../css/cards.css";

#blueBack{
    background: #6BA8F6;
    color: #fff;;
}
 .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>