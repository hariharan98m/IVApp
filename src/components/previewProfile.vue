<template>
  <div>
      <div :class="{'modal': true, 'is-active': isShow}">
  <div class="modal-background"></div>
    <div class="notification">    
    <h2 class="subtitle brand-text">Team Jet</h2>
    <header>
      <p class="title">Your Profile is Only PARTIALLY Complete!</p>
    </header>
    <br>
    <section class="content">
      <i class="is-small has-text-link">For now, take a look at the preview of <b>Prof. Andrew Ng's</b> profile :) and that's how yours will be too.</i>
    </section>
    <button class="modal-close is-large" aria-label="close" @click="isShow= false"></button>
  </div>
</div>

    <div class="my_page" v-if="partialProfile">
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
            <h3 class="is-medium">About Andrew Ng</h3>
                    </a>
                    <a class="navbar-item" href="#contact">
            <h3 class="is-large">Contact</h3>
                    </a>
                        <figure class="image is-64x64 has-image-centered frame-round ">
                                        <img src="../images/andrew-cover.jpg">    
                        </figure>
                </div>


            </div>
            </div>
    </nav>

    <section class="hero is-link is-fullheight">
    <div class="hero-body">
      <div class="container">Hello! I am
        <h1 class="title is-1">
          Andrew Ng
        </h1>
        <h2 class="subtitle is-3">
          Adjunct Professor @ Stanford University, California
        </h2>
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="section" id="about">
    <!-- Title --> 
    <div class="section-heading">
      <h3 class="title is-1  has-text-grey-light">About Me</h3>
      <h4 class="subtitle is-4 has-text-grey-lighter">A Repository of Thought and Ideas</h4>
      <div class="container has-text-white is-size-4 me">
        <p>Andrew Ng is VP & Chief Scientist of Baidu; 
          Co-Chairman and Co-Founder of Coursera; 
          and an Adjunct Professor at Stanford University.  
          In 2011 he led the development of Stanford University’s main MOOC (Massive Open Online Courses) platform and also taught an online Machine Learning class that was offered to over 100,000 students, 
          leading to the founding of Coursera.</p>
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
                  <td>Stanford University</td>
                </tr>
                <tr>
                  <td>Dept</td>
                  <td>Computer Science</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>andrew.ng@stanford.edu</td>
                </tr>
              </table>
            </div>
            <br>
            <div class="content has-text-centered">
                    <p>
                        <a href="https://www.facebook.com/andrew.ng.96">
                            <!-- <font-awesome-icon prefix="fab" icon="facebook" size="xs" /> -->
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square'}" class="fa-2x fa-pad"/>
                        </a>
                        <a href="https://www.linkedin.com/in/andrewyng/">
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
              <img src='../images/andrew-cover.jpg' alt="Placeholder image" style="width: 100%;height: 320px;">
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
                      <strong>Mechatronic design of an integrated robotic hand: </strong>
                       <i>A hand designed for minimalistic dexterous manipulation, in which every stage of the design process also considered its manufacturing cost. </i>
                    </p>
                  </div>
                </div>
              </article>
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Deep Learning on COTS: </strong>
                       <i>Technical details and results from our own system based on Commodity Off-The-Shelf High Performance Computing (COTS HPC) technology: a cluster of GPU servers with Infini-band interconnects and MPI.</i>
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
      <h3 class="title is-1  has-text-grey-dark">AI @ Stanford University</h3>
      <h4 class="subtitle is-4 has-text-grey">The wind of freedom blows</h4>
      <div class="container has-text-black is-size-4 me">
        <p>Founded in 1962, The Stanford Artificial Intelligence Laboratory (SAIL) has been a center of excellence for Artificial Intelligence research, teaching, theory, and practice for over fifty years.
        Strong research groups exist in areas of artificial intelligence, robotics, foundations of computer science, scientific computing, and systems. Basic work in computer science is the main research goal of these groups, but there is also a strong emphasis on interdisciplinary research and on applications that stimulate basic research.
        </p>
      </div>
    </div>

    <div class="columns has-same-height is-gapless">
      <div class="column">
        <!-- Profile -->
        <div class="card whiteBackground">
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
                    <span class="card-footer">
                      <span class="card-footer-item">
                      <span class="has-text-dark">
                          Stanford University, California
                      </span>
                      </span>
                  </span>
        </div>
      </div>
      <div class="column">
        <!-- Profile picture -->
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src='../images/stanford_cover.jpg' alt="Placeholder image" style="width: 100%;height: 320px;">
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
                      <strong class="has-text-white">Computational Biology: </strong>
                       <i>Research focuses on computational genomics: developing algorithms, machine learning methods, and systems for the analysis of large scale genomic data. </i>
                    </p>
                  </div>
                </div>
              </article>

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong class="has-text-white"> Computer Vision: </strong>
                      <i>In computer vision, we aspire to develop intelligent algorithms that perform important visual perception tasks such as object recognition, scene categorization, integrative scene understanding, human motion recognition, material recognition, etc. </i>
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
                <span class="icon is-small is-left">
                  <a href="">
                            <font-awesome-icon :icon="{ iconName: 'envelope'}" class="fa-2x fa-pad"/>
                    </a>
                </span>
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
                <button class="button is-link is-large"><span class="icon">
                    <a href="">
                            <font-awesome-icon :icon="{ iconName: 'envelope'}" class="fa-2x fa-pad"/>
                        </a>
                  </span>
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
          {{user_page_full.designation}} @ {{user_page_full.institute_name}}, {{user_page_full.institute_location}}
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
                  <td>{{user_page_full.institute_name}}</td>
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
      <h3 class="title is-1  has-text-grey-dark">{{user_page_full.department}} @ {{user_page_full.institute_name}}</h3>
      <h4 class="subtitle is-4 has-text-grey">{{user_page_full.institute_tagline}}</h4>
      <div class="container has-text-black is-size-4 me">
        <p>
          {{user_page_full.institute_about}}
        </p>
      </div>
    </div>

    <div class="columns has-same-height is-gapless">
      <div class="column">
        <!-- Profile -->
        <div class="card whiteBackground">
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
                    <span class="card-footer">
                      <span class="card-footer-item">
                      <span class="has-text-dark">
                          {{user_page_full.place}}
                      </span>
                      </span>
                  </span>
        </div>
      </div>
      <div class="column">
        <!-- Profile picture -->
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="user_page_full.institute_picURL" alt="Placeholder image" style="width: 100%;height: 320px;">
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
                      <strong class="has-text-white">{{user_page_full.institute_research_area_1_title}}:  </strong>
                       <i>{{user_page_full.institute_research_area_1_content}} </i>
                    </p>
                  </div>
                </div>
              </article>

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong class="has-text-white"> {{user_page_full.institute_research_area_2_title}}: </strong>
                      <i>{{user_page_full.institute_research_area_2_content}}</i>
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
                <span class="icon is-small is-left">
                  <!-- <i class="fas fa-envelope"></i> -->
                </span>
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
                <button class="button is-link is-large"><span class="icon">
                    <!-- <i class="fas fa-envelope"></i> -->
                  </span>
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
import firebase from 'firebase';
export default {
  computed: {
  ...mapState([
        'partialProfile',
        'user_full_info'
  ])
  },
  methods:{
      jsonCopy(src) {
            return JSON.parse(JSON.stringify(src));
      }
  },
  props:{
    'user_page_content': {
      type: Object
    }
  }
  ,
  created(){ 
      if (this.user_page_content!=null){
          this.user_page_full = this.jsonCopy(this.user_page_content);
        }
        else
        if (this.partialProfile){
          
            this.isShow = false;
                this.$snackbar.open({
                  
                    message: 'Your are currently viewing a profile preview of Prof. Andrew Ng',
                    type: 'is-link',
                    position: 'is-top',
                    actionText: 'Got It',
                    indefinite: true,
                    onAction: () => {
                        this.$toast.open({
                    duration: 5000,
                    message: `Please complete your profile to preview yours`,
                    position: 'is-top'
                })
                    }
                })
          }
        else{
            this.isShow = false;
            this.user_page_full = this.user_full_info;
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
               center: { lat: 37.4275, lng: -122.1697 },
                markers: [],
                isShow: true,
                places: [],
                currentPlace: null,
                username: "Hariharan",
                user_page_full:{

                }
        }
    },
    methods:{

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