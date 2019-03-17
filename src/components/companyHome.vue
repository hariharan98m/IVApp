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
                        <li><router-link class="has-text-weight-bold has-text-dark" to="">Set Acco Hours</router-link></li>
                    </ul>
                    <p class="menu-label has-text-weight-semibold is-uppercase is-size-5 has-text-white">
                        Profile
                    </p>
                    <ul class="menu-list">
                        
                        <li><router-link class="has-text-weight-bold has-text-primary" to="/companyProfile">Edit My Profile</router-link></li>
                        <li><router-link class="has-text-weight-bold has-text-link" to="/previewCompanyProfile">View Profile</router-link></li>
                    </ul>

                    <p class="menu-label has-text-weight-semibold is-uppercase is-size-5 has-text-white">
                        Institute Search
                    </p>

                    <ul class="menu-list">
                        <li><router-link class="has-text-weight-bold has-text-danger" to="">Spot an Institute</router-link></li>
                    </ul>

                    <p class="menu-label has-text-weight-semibold is-uppercase is-size-5 has-text-light">
                        Chats
                    </p>
                    <ul class="menu-list">
                        <li><router-link class="has-text-weight-bold has-text-warning" to="/inbox">My Chats</router-link></li>
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
      <div class="card-header-title">

          <div  style="display:inline-block" class="subtitle is-size-4 has-text-weight-semibold has-text-grey is-text-uppercase">
              <i>Create an IV Event</i>
          </div>
          
      </div>
      <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
              <i class="fa fa-calendar" style="font-size:25px;color:lightgrey"></i>
          </span>
      </a>
  </header>

  <div class="card-content">
      <div class="content">
          <div class="control">

                                <nav class="level">


                                    <div class="level-item has-text-centered">
                                        <div>
                                        <p class="heading has-text-weight-semibold">PICK A DATE</p>
                                        <input class="input title has-text-centered is-normal" placeholder= "Date" type="date" v-model="event.date"/>
                                        </div>
                                    </div>
                                    <div class="level-item has-text-centered">
                                        <div>
                                        <p class="heading has-text-weight-semibold">HOW MANY STUDENTS?</p>
                                        <input type="text" min="10" max="100" class="title has-text-centered input" style="max-width:100px;" v-model="event.students"/>
                                        </div>
                                    </div>
                                    <div class="level-item has-text-centered">
                                        <div>
                                        <p class="heading has-text-weight-semibold">When</p>
                                            
                                                    <b-field style="max-width:160px;padding-left:0px;">
                                                        <b-timepicker
                                                            rounded
                                                            placeholder="TIME"
                                                            size="is-large"
                                                            class="title"
                                                            :hour-format="format"
                                                            id="timePicker"
                                                            >
                                                        </b-timepicker>
                                            </b-field>
                                        </div>
                                    </div>
                                    <div class="level-item has-text-centered">
                                        <div>
                                        <p class="heading has-text-weight-semibold">HOURS?</p>
                                        <input type="text" min="2" max="10" class="title has-text-centered input" style="max-width:80px;" v-model="event.hours"/>
                                        </div>
                                    </div>
                                    </nav>        



                                    <nav class="level">
                                    <div class="level-item has-text-centered">
                                        <div>
                                        <p class="heading">A little Description of what this IV is about</p>
                                        <input type="text" class="input is-rounded has-text-dark has-text-centered " style="width:700px;height:30px;padding:30px;font-size:15px;" v-model="event.desc"/>
                                        </div>
                                    </div>


                                    <div class="level-item has-text-centered">
                                     <div>
                                            <p class="heading has-text-weight-semibold">ADD!</p>
                                            <button class="button has-background-grey-lighter is-large button-large" @click="addEvent">
                                                <span class="icon is-large">
                                                    <i class="fas fa-plus" style="color:#BF55EC"></i>
                                                </span>
                
                                            </button>
                                        
                                        </div>
                                    </div>

                                    </nav>        



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

<!-- Start Swiper -->
<div class="card" v-show="eventsCard.length>0">
  <header class="card-header">
      <div class="card-header-title">

          <div  style="display:inline-block" class="subtitle is-size-4 has-text-weight-semibold has-text-grey is-text-uppercase">
              <i>Upcoming IV Events</i>
          </div>
          
      </div>
      <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
              <i class="fa fa-calendar" style="font-size:25px;color:lightgrey"></i>
          </span>
      </a>
  </header>

  <div class="card-content">


<div class='carousel has-background-white'>
<div class='pricing-table multiple-items carousel-container caro-center lazy add-remove' id="reRender">

<swiper :options="swiperOption">
    <swiper-slide v-for="(eventi, index) in eventsCard">

                <div :class="{'pricing-plan': true,  shadow: !eventi.hover, 'is-active':eventi.hover}" @mouseover="eventi.hover= true" @mouseleave="eventi.hover= false" :style="eventi.style">
                                      <div class="plan-header">{{eventi.day}}</div>
                                      <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency"></span>{{eventi.date}}</span></div>
                                      <div class="plan-items">
                                      <div class="plan-item has-background-white"><span style= "font-size:20px;" class="has-text-link has-text-weight-bold">{{eventi.eventTime}} </span> <i class="has-text-weight-bold" style="padding-right:5px;">{{eventi.eventM}} </i> for <span style= "font-size:20px;padding-left:5px;" class="has-text-link has-text-weight-bold">{{eventi.hours}} </span> <i class=" has-text-weight-bold">hours </i></div>
                                      <div class="plan-item has-background-white-ter"><span style= "font-size:20px;" class="has-text-weight-bold has-text-link">{{eventi.students}} </span> <i class="has-text-weight-bold" style="padding-right:5px;">students</i> </div>
                                      <div class="plan-item has-text-grey-dark"><span  style="max-width:350px;">{{eventi.desc}}</span></div>                                  
                                      </div>
                                      <div class="plan-footer">
                                          <button class="button" style="width:250px;" @click="cancel_iv(index)"> Cancel plan</button>
                                       </div>
                </div>
                <!-- Optional controls -->
                <br><br>
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</div>
</div>
</div>
</div>

<!-- End Swiper -->
        
        </div>



        <!-- Start Search Container -->
        <div class="container">
        </div>
        <!-- End Search Container -->

        <!-- Start Footer -->
        <div class="hero-foot container">
            <div class="container">
                <div class="content has-text-centered">
                    <p>
                        <a href="">
                            <!-- <font-awesome-icon prefix="fab" icon="facebook" size="xs" /> -->
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square'}" class="fa-2x fa-pad"/>
                        </a>
                        <a href="">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter-square'}" class="fa-2x fa-pad"/>
                        </a>
                        <a href="">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram'}" class="fa-2x fa-pad"/>
                        </a>
                        <a href="">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'snapchat-square'}" class="fa-2x fa-pad"/>
                        </a>
                    </p>
                    <p>
                        <a href="https://bulma.io">
                            <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <!-- End footer -->



    </div>



</template>






<script>
import {mapState} from 'vuex'
import {bus } from '../main'
import firebase from 'firebase';
import bulmaCarousel from 'bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css'
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    computed:{
        ...mapState(['user', 'goToMyHome', 'ivs']),
        format(){
             return this.formatAmPm ? '12' : '24'
        }
    },
    components:{
        swiper,
            swiperSlide
    },
    props:{
        
    },
    created(){
        
        bus.$emit('cover-or-not', false);
        console.log('created, kchangeBG to userHome');

        bus.$emit('changeBG', 'black');
        this.eventsCard = this.ivs; 
        this.fillCards();
    },
    mounted(){
            var carousels = bulmaCarousel.attach();
    },
    data(){
        return {
            swiperOption: {
                slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }

            },
            center: { lat: 45.508, lng: -73.587 },
            formatAmPm: true,
      markers: [],
      places: [],
      currentPlace: null,
      quote:'It is never too late to be what you might have been.',
      quoteAuthor:'George Eliot',
      event:{
          day: '',
        date:''    ,
        eventTime: '',
        eventM: '',
        dateObj:{},
        hours: '',
        students: '',
        desc:'',
        hover: false,
        cancel: false,
        day: '',
        style:{
            visibility: 'visible'
        }
      },
    eventsCard: [],
    empty: 0

        }
    },
    beforeMount(){

    },
    methods:{
        fillCards(){
                if (this.eventsCard.length==1){
                    this.empty+=2;
                    console.log('add', this.empty);
                        this.eventsCard.push({
                                    day: '',
                                    date:''    ,
                                    eventTime: '',
                                    eventM: '',
                                    dateObj: {},                                    
                                    hours: '',
                                    students: '',
                                    desc:'',
                                    hover: false,
                                    cancel: false,
                                    day: '',
                                    style:{
                                        visibility: 'hidden'
                                    }
                                });
                        
                        this.eventsCard.push({
                                    day: '',
                                    date:''    ,
                                    dateObj:{},
                                    eventTime: '',
                                    eventM: '',
                                    hours: '',
                                    students: '',
                                    desc:'',
                                    hover: false,
                                    cancel: false,
                                    day: '',
                                    style:{
                                        visibility: 'hidden'
                                    }
                                });
                }
                if (this.eventsCard.length==2){
                    this.empty++;
                    console.log('add', this.empty);
                            this.eventsCard.push({
                                    day: '',
                                    date:''    ,
                                    dateObj: {},
                                    eventTime: '',
                                    eventM: '',
                                    hours: '',
                                    students: '',
                                    desc:'',
                                    hover: false,
                                    cancel: false,
                                    day: '',
                                    style:{
                                        visibility: 'hidden'
                                    }
                                });
                }

        },
        jsonCopy(src) {
            return JSON.parse(JSON.stringify(src));
        },
        cancelCard(){

        },
        addEvent(){
            var eventTime = document.getElementById("timePicker").value;
            
            this.event.eventTime = eventTime.slice(0, -2);
            this.event.eventM = eventTime.slice(-2);

            
            var dateObj = new Date(this.event.date);
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();

            var newdate = month + "/" + day + "/" + year;
            this.event.date = newdate;
            this.event.dateObj = dateObj;
            var days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            this.event.day = days[dateObj.getDay()]
            
            while(this.empty!=0) {this.eventsCard.pop(); this.empty--;}
            this.eventsCard.push(this.jsonCopy(this.event));


            this.eventsCard = this.eventsCard.sort(function(a,b){
                    // Turn your strings into dates, and then subtract them
                    // to get a value that is either negative, positive, or zero.
                    return new Date(a.date) - new Date(b.date);
            }); 
            this.$store.commit("CHANGE_IVS", this.eventsCard);
            firebase.database().ref('hr/users_full_info/' + this.user.uid.toString()+"/iv").set(this.eventsCard, (err)=>{
                    if(err)
                        console.log('Error writing to database'+ err);
                    else
                        console.log('event saved to DB');
            });

            this.fillCards();

            this.resetEvent();

        },

        createComparator(property) {
            return function(a, b) {
                    return a[property] - b[property];
            };
        },

        cancel_iv(index){
            
            this.eventsCard.splice(index, 1);
            while(this.empty!=0) {this.eventsCard.pop(); this.empty--;}
            this.$store.commit("CHANGE_IVS", this.eventsCard);
            firebase.database().ref('hr/users_full_info/' + this.user.uid.toString()+"/iv").set(this.eventsCard, (err)=>{
                    if(err)
                        console.log('Error writing to database'+ err);
                    else
                        console.log('event saved to DB');
            });

            if (this.eventsCard.length!=0)
                    this.fillCards();
            
        },
        resetEvent(){
            for(var i in this.event)
                this.event[i]= '';
            document.getElementById("timePicker").value= '';
        },
        googleSignout(){
            firebase.auth().signOut().then(()=>{
                this.$store.commit('CHANGE_GO_TO_MY_HOME', false);
                console.log('signed out');
            });
            
        },
        setPlace(place) {
            this.currentPlace = place;
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
    this.geolocate();
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
@import '~bulma-extensions/bulma-pricingtable/dist/css/bulma-pricingtable.min.css';
#blueBack{
    background: #6BA8F6;
    color: #fff;;
}

.fa-pad{
    padding: 2px;
}

.shadow {
  -webkit-box-shadow: 2px 2px 3px 4px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    2px 2px 3px 4px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:         2px 2px 3px 4px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}
</style>