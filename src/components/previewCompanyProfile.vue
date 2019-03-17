<template>
  <div>
      
    <div class="my_page" v-if="partialProfile && !contentProps">
      <nav class="navbar is-fixed-top" id="blueBack">
        <div class="container is-link">
            <div class="navbar-brand">
                <a class="navbar-item brand-text" href="../">
          <h2 class="title">JetPacks</h2>
                </a>
            </div>
            <div id="navMenu" class="navbar-menu is-link">
                <div class="navbar-start">
                    <router-link class="navbar-item" :to="instOrCompany">
                      <h3 class="is-medium">Back to my Home</h3>
                    </router-link>
                </div>
                <div class="navbar-end">
                  

                    <a class="navbar-item" href="#about">
            <h3 class="is-medium">About Mark Zuckerberg</h3>
                    </a>
                    <a class="navbar-item" href="#contact">
            <h3 class="is-large">Contact</h3>
                    </a>
                        <figure class="image is-64x64 has-image-centered frame-round ">
                                        <img src="https://icdn2.digitaltrends.com/image/mark-zuckerberg-5-1500x1000-720x720.jpg?ver=1.jpg"> 
                        </figure>

                </div>


            </div>
            </div>
    </nav>

    <section class="hero is-link is-fullheight">
    <div class="hero-body">
      <div class="container">Hello! I am
        <h1 class="title is-1">
          Mark Zuckerberg
        </h1>
        <h2 class="subtitle is-3">
          CEO @ Facebook, California
        </h2>
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="section" id="about">
    <!-- Title --> 
    <div class="section-heading">
      <h3 class="title is-1  has-text-grey-light">About Me</h3>
      <h4 class="subtitle is-4 has-text-grey-lighter">Its on the Rise.</h4>
      <div class="container has-text-white is-size-4 me">
        <p>Mark Elliot Zuckerberg is an American technology entrepreneur and philanthropist. 
          He is known for co-founding and leading Facebook as its chairman and chief executive officer.
          Zuckerberg launched Facebook from his Harvard University and it's a social owning.</p>
      </div>
    </div>

    <div class="columns has-same-height is-gapless">
      <div class="column">
        <!-- Profile -->
        <div class="card">
          <div class="card-content">
            <h3 class="title is-4 has-text-black">Profile</h3>

            <div class="content has-text-black">
              <table class="table-profile" style="margin-left: 45px;">
                <tr>
                  <th colspan="1"></th>
                  <th colspan="2"></th>
                </tr>
                <tr>
                  <td>Working at</td>
                  <td>Facebook</td>
                </tr>
                <tr>
                  <td>Dept</td>
                  <td>Computer Science</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>markzuckerberg@facebook.com</td>
                </tr>
              </table>
            </div>
            <br>
            <div class="content has-text-centered">
                    <p>
                        <a href="https://www.facebook.com/zuck">
                            <!-- <font-awesome-icon prefix="fab" icon="facebook" size="xs" /> -->
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square'}" class="fa-2x fa-pad"/>
                        </a>
                        <a href="https://twitter.com/finkd?lang=en">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter-square'}" class="fa-2x fa-pad"/>
                        </a>
                        <a href="">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram'}" class="fa-2x fa-pad"/>
                        </a>
                        <a href="">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'snapchat-square'}" class="fa-2x fa-pad"/>
                        </a>
                    </p>
            </div>
          </div>

        </div>
      </div>
      <div class="column">
        <!-- Profile picture -->
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://icdn2.digitaltrends.com/image/mark-zuckerberg-5-1500x1000-720x720.jpg?ver=1.jpg" alt="Placeholder image" style="width: 100%;height: 320px;" class="center">
            </figure>
          </div>
        </div>
      </div>
      <div class="column">
        <!-- Skills -->
        <div class="card">
          <div class="card-content skills-content has-text-black">
            <h3 class="title is-4 has-text-black">Projects You've Worked On</h3>
            <div class="content has-text-black">

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Build a simple AI to run my home -- like Jarvis in Iron Man: </strong>
                       <i>These challenges always lead me to learn more than I expected, and this one also gave me a better sense of all the internal technology Facebook engineers get to use, as well as a thorough overview of home automation. </i>
                    </p>
                  </div>
                </div>
              </article>
              <article class="media">

                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>An Air Balloon Internet Technology: </strong>
                       <i>To create a portable, ease of access flying air balloon tech, that will help bring internet acccess to millions of people around the globe. An innovation solely by yours truly fb.</i>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



    <!-- University -->

    <!-- About -->
  <section class="section whiteBackground" id="about">
    <!-- Title --> 
    <div class="section-heading">
      <h3 class="title is-1  has-text-grey-dark">CS @ Facebook</h3>
      <h4 class="subtitle is-4 has-text-grey">Move fast and break things</h4>
      <div class="container has-text-black is-size-4 me">
        <p>
          Facebook, Inc. is an American online social media and social networking service company based in Menlo Park, California. Its website was launched on February 4, 2004, by Mark Zuckerberg, along with fellow Harvard College students and roommates
        </p>
      </div>
    </div>

    <div class="columns has-same-height is-gapless">
      <div class="column">
        <!-- Profile -->
        <div class="card blackBackground">
                    <gmap-map
                    :center="center"
                    :zoom="12"
                    style="width: 434px;height: 270px;"
                    >
                    <gmap-marker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        @click="center=m.position"
                    ></gmap-marker>
                    </gmap-map>
                    <div class="card-footer">
                      <p class="card-footer-item">
                      <span class="has-text-grey-lighter">
                          Facebook, Menlo Park, California
                      </span>
                      </p>
                  </div>
        </div>
      </div>
      <div class="column">
        <!-- Profile picture -->
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Downtown_Menlo_Park_California.jpg/1200px-Downtown_Menlo_Park_California.jpg" alt="Placeholder image" style="width: 100%;height: 320px;">
            </figure>
          </div>
        </div>
      </div>
      <div class="column">
        <!-- Skills -->
        <div class="card blackBackground">
          <div class="card-content skills-content has-text-white">
            <h3 class="title is-4 has-text-white">Areas of Work @ CSE Dept</h3>
            <div class="content">

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong class="has-text-white">Improving your breakup experience: </strong>
                       <i>Breaking up is hard to do and Facebook knows it. Instead of simply unfriending or blocking your ex on social media, the company is testing a new feature that will remove your former lover from your news feed. </i>
                    </p>
                  </div>
                </div>
              </article>

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong class="has-text-white"> Updated Safety Check: </strong>
                      <i>Facebook's "Safety Check" feature first appeared in 2011 after a tsunami and nuclear disaster in Tokyo. The tool was established to allow users to connect with loved ones during a natural disaster.</i>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>




    <!-- Contact us -->

    <!-- Contact -->
  <section class="section whiteBackground" id="contact">
    <div class="container">
      <div class="section-heading">
        <h3 class="title is-2">Contact</h3>
        <h4 class="subtitle is-5">Get in touch</h4>
      </div>
      <br>

      <div class="columns">
        <div class="column is-6 is-offset-3">
          <div class="box">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input">
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input class="input" type="email" placeholder="Email input" value="">
                <!-- <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span> -->
              </div>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea class="textarea" placeholder="Textarea"></textarea>
              </div>
            </div>

            <div class="field is-grouped has-text-centered">
              <div class="control">
                <button class="button is-link is-large">
                  <!-- <span class="icon">
                    <i class="fas fa-envelope"></i>
                  </span> -->
                  <span>Submit</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
</section>


    </div>









<!-- 2nd page -->



      <div v-else class="my_page">


      <nav class="navbar is-fixed-top" id="blueBack">
        <div class="container is-link">
            <div class="navbar-brand">
                <a class="navbar-item brand-text" href="../">
          <h2 class="title">JetPacks</h2>
                </a>
            </div>
            <div id="navMenu" class="navbar-menu is-link">
                <div class="navbar-start">
                    <router-link class="navbar-item" to="/userHome">
                      <h3 class="is-medium">Back to my Home</h3>
                    </router-link>
                </div>
                <div class="navbar-end">
                  

                    <a class="navbar-item" href="#about">
            <h3 class="is-medium">About {{user_page_full.name}}</h3>
                    </a>
                    <a class="navbar-item" href="#contact">
            <h3 class="is-large">Contact</h3>
                    </a>
                        <figure class="image is-64x64 has-image-centered frame-round ">
                                        <img :src="user_page_full.me_picURL">
                        </figure>
                </div>


            </div>
            </div>
    </nav>

    <section class="hero is-link is-fullheight">
    <div class="hero-body">
      <div class="container">Hello! I am
        <h1 class="title is-1">
          {{user_page_full.name}}
        </h1>
        <h2 class="subtitle is-3">
          {{user_page_full.designation}} @ {{user_page_full.company_name}}, {{user_page_full.place}}
        </h2>
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="section" id="about">
    <!-- Title --> 
    <div class="section-heading">
      <h3 class="title is-1  has-text-grey-light">About Me</h3>
      <h4 class="subtitle is-4 has-text-grey-lighter">{{user_page_full.me_tagline}}</h4>
      <div class="container has-text-white is-size-4 me">
        <p>
          {{user_page_full.me_about}}
        </p>
      </div>
    </div>

    <div class="columns has-same-height is-gapless">
      <div class="column">
        <!-- Profile -->
        <div class="card">
          <div class="card-content">
            <h3 class="title is-4 has-text-black">Profile</h3>

            <div class="content has-text-black">
              <table class="table-profile" style="margin-left: 45px;">
                <tr>
                  <th colspan="1"></th>
                  <th colspan="2"></th>
                </tr>
                <tr>
                  <td>Working at</td>
                  <td>{{user_page_full.company_name}}</td>
                </tr>
                <tr>
                  <td>Dept</td>
                  <td>{{user_page_full.department}}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{{user_page_full.email}}</td>
                </tr>
              </table>
            </div>
            <br>
            <div class="content has-text-centered">
                    <p>
                        <a :href="user_page_full.facebook">
                            <!-- <font-awesome-icon prefix="fab" icon="facebook" size="xs" /> -->
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square'}" class="fa-2x fa-pad"/>
                        </a>
                        <a :href="user_page_full.twitter">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter-square'}" class="fa-2x fa-pad"/>
                        </a>
                        <a href="">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram'}" class="fa-2x fa-pad"/>
                        </a>
                        <a href="">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'snapchat-square'}" class="fa-2x fa-pad"/>
                        </a>
                    </p>
            </div>
          </div>

        </div>
      </div>
      <div class="column">
        <!-- Profile picture -->
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="user_page_full.me_picURL" alt="Placeholder image" style="width: 100%;height: 320px;">
            </figure>
          </div>
        </div>
      </div>
      <div class="column">
        <!-- Skills -->
        <div class="card">
          <div class="card-content skills-content has-text-black">
            <h3 class="title is-4 has-text-black">Areas of Work</h3>
            <div class="content has-text-black">

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{user_page_full.me_research_area_1_title}}: </strong>
                       <i>{{user_page_full.me_research_area_1_content}}. </i>
                    </p>
                  </div>
                </div>
              </article>
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{user_page_full.me_research_area_2_title}}: </strong>
                       <i>{{user_page_full.me_research_area_2_content}}</i>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



    <!-- University -->

    <!-- About -->
  <section class="section whiteBackground" id="about">
    <!-- Title --> 
    <div class="section-heading">
      <h3 class="title is-1  has-text-grey-dark">{{user_page_full.department}} @ {{user_page_full.company_name}}</h3>
      <h4 class="subtitle is-4 has-text-grey">{{user_page_full.company_tagline}}</h4>
      <div class="container has-text-black is-size-4 me">
        <p>
          {{user_page_full.company_about}}
        </p>
      </div>
    </div>

    <div class="columns has-same-height is-gapless">
      <div class="column">
        <!-- Profile -->
        <div class="card blackBackground">
                    <gmap-map
                    :center="user_page_full.marker"
                    :zoom="12"
                    style="width: 434px;height: 270px;"
                    >
                    <gmap-marker
                        :position="user_page_full.marker"
                        @click="center=user_page_full.marker"
                    ></gmap-marker>
                    </gmap-map>
                    <div class="card-footer">
                      <p class="card-footer-item">
                      <span class="has-text-grey-lighter">
                          {{user_page_full.place}}
                      </span>
                      </p>
                  </div>
        </div>
      </div>
      <div class="column">
        <!-- Profile picture -->
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="user_page_full.company_picURL" alt="Placeholder image" style="width: 88%;height: 320px;" class="center">
            </figure>
          </div>
        </div>
      </div>
      <div class="column">
        <!-- Skills -->
        <div class="card blackBackground">
          <div class="card-content skills-content has-text-white">
            <h3 class="title is-4 has-text-white">Our Work at CSE Dept</h3>
            <div class="content">

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong class="has-text-white">{{user_page_full.company_research_area_1_title}}:  </strong>
                       <i>{{user_page_full.company_research_area_1_content}} </i>
                    </p>
                  </div>
                </div>
              </article>

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong class="has-text-white"> {{user_page_full.company_research_area_2_title}}: </strong>
                      <i>{{user_page_full.company_research_area_2_content}}</i>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<div v-if="user_page_full.iv!=null && user_page_full.iv.length>0" id="ivs">
<br>
<div class="container">
    <!-- Start Swiper -->
<div class="card" >
  <header class="card-header">
      <div class="card-header-title">

          <div  style="display:inline-block" class="subtitle is-size-4 has-text-weight-semibold has-text-grey is-text-uppercase">
              <i style="padding-left:10px;">IV Alerts from {{user_page_full.company_name}}</i>
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
    <swiper-slide v-for="(eventi, index) in user_page_full.iv">

                <div :class="{'pricing-plan': true,  shadow: !eventi.hover, 'is-active':eventi.hover}" @mouseover="eventi.hover= true" @mouseleave="eventi.hover= false" :style="eventi.style">
                                      <div class="plan-header">{{eventi.day}}</div>
                                      <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency"></span>{{eventi.date}}</span></div>
                                      <div class="plan-items">
                                      <div class="plan-item has-background-white"><span style= "font-size:20px;" class="has-text-link has-text-weight-bold">{{eventi.eventTime}} </span> <i class="has-text-weight-bold" style="padding-right:5px;">{{eventi.eventM}} </i> for <span style= "font-size:20px;padding-left:5px;" class="has-text-link has-text-weight-bold">{{eventi.hours}} </span> <i class=" has-text-weight-bold">hours </i></div>
                                      <div class="plan-item has-background-white-ter"><span style= "font-size:20px;" class="has-text-weight-bold has-text-link">{{eventi.students}} </span> <i class="has-text-weight-bold" style="padding-right:5px;">students</i> </div>
                                      <div class="plan-item has-text-grey-dark"><span  style="max-width:350px;">{{eventi.desc}}</span></div>                                  
                                      </div>
                                      <div class="plan-footer">
                                          <button class="button" style="width:250px;" @click="cancel_iv(index)">Book Slot</button>
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
  
</div>

    <!-- Contact us -->

<!-- Contact -->
  <section class="section whiteBackground" id="contact">
    <div class="container">
      <div class="section-heading">
        <h3 class="title is-2">Contact</h3>
        <h4 class="subtitle is-5">Get in touch</h4>
      </div>
      <br>

      <div class="columns">
        <div class="column is-6 is-offset-3">
          <div class="box">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input">
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input class="input" type="email" placeholder="Email input" value="">
                <!-- <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span> -->
              </div>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea class="textarea" placeholder="Textarea"></textarea>
              </div>
            </div>

            <div class="field is-grouped has-text-centered">
              <div class="control">
                <button class="button is-link is-large">
                  <!-- <span class="icon">
                    <i class="fas fa-envelope"></i>
                  </span> -->
                  <span>Submit</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
</section>


    </div>







    </div>

</template>



<script>
import {mapState} from 'vuex'
import {bus } from '../main'
import firebase from 'firebase'
import footer from './footer.vue'
import bulmaCarousel from 'bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css'
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  computed: {
  ...mapState([
        'partialProfile',
        'hr_full_info',
        'instOrCompany'
  ])
  },
  components:{
    swiper,
            swiperSlide
  },
  props:['user_page_content'],
    created(){ 
        
        if (this.user_page_content!=null){
          console.log(this.user_page_content.me_picURL);
          this.contentProps= true;
          this.user_page_full = this.user_page_content;
          this.fillCards();
        } else
        if (this.partialProfile){
          this.isShow = false;
          this.$snackbar.open({
                    message: 'Your are currently viewing a profile preview of Mark Zuckerberg',
                    type: 'is-link',
                    position: 'is-top',
                    actionText: 'Got It',
                    indefinite: true,
                    onAction: () => {
                        this.$toast.open({
                    duration: 5000,
                    message: `Please complete your profile to preview yours`,
                    position: 'is-top'
                });
                }

          });
                
        }
          
        else{
            this.isShow = false;
            this.user_page_full = this.hr_full_info;
        }
        bus.$emit('cover-or-not', false);
        console.log('created, kchangeBG to userHome');
        bus.$emit('changeBG', 'black');
        
    },
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

    },
    data(){
        return {
              contentProps:false,
               center: { lat: 	37.452961, lng: -122.181725 },
                markers: [],
                isShow: true,
                places: [],
                currentPlace: null,
                username: "Hariharan",
                user_page_full:{

                },
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
          
        },empty:0
        }
    },
    methods:{


        fillCards(){
                if (this.user_page_full.iv.length==1){
                    this.empty+=2;
                    console.log('add', this.empty);
                        this.user_page_full.iv.push({
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
                        
                        this.user_page_full.iv.push({
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
                if (this.user_page_full.iv.length==2){
                    this.empty++;
                    console.log('add', this.empty);
                            this.user_page_full.iv.push({
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
        }

    }
}
</script>

<style scoped>

@import "../css/personal.css";

#blueBack{
    background-color: #3273dc;
    color: #fff;;
}

.whiteBackground{
    background: #fff;
}

.blackBackground{
    background: black;
}

.me{
    font-family: 'Open Sans', sans-serif
}

.fa-pad{
    padding: 2px;
}

.frame-square {
  background: #fff;
  border: 2px solid #000;
  display: inline-block;
  vertical-align: top;
  padding: 10px;
  width: 130px;
  height: 130px;
  margin-right: .5em;
  margin-bottom: .3em;
}

.frame-round {
  @extend .frame-square;
  border-radius: 50%;
  overflow: hidden;
  

}
  
.crop {
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
  
}

img {
    display: block;
    min-width: 100%;
    min-height: 100%;
    margin: auto;
    position: absolute;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
  }
  
.retina .crop img {
  transform: scale(.5, .5);
}

small {display: block; font-weight: normal; opacity: .8;}
body {background: PaleGoldenRod ; color: darken(PaleGoldenRod , 70%); font-family: Georgia; font-size: 17px; margin: 0; padding: 1em;}
h1 {margin: 0;}
h1 + p {margin-top: 0;}
hr {background: transparent; border: 0; border-top: 2px solid #000; margin: .8em 0;}

</style>