<template>

<section class="section whiteBackground" id="about">
    <div class="section-heading">
      <!-- Edit Profile Column-->
        <div class="columns is-gapless ">
        <div class="column is-one-third">
        <div class="card">
          <div class="card-content skills-content has-text-black">
            <h3 class="title is-1 has-text-black">Edit Profile</h3>
            <div class="content">

                <div class="notification">
                    <br>
                <p class="menu-label has-text-weight-semibold is-uppercase is-size-5 has-text-grey-light">
                        GENERAL INFO
                    </p>
                
                  <hr/><br>
                            <div class="field">
                                <label class="label is-link">Name</label>
                                <div class="control marg_left">
                                    <input class="input is-link is-large" type="text" placeholder="Add Salutations, e.g., Prof." v-model="user_page_full.name" @change="showName = !showName"/>
                                    {{user_page_full.name}}
                                </div>
                            </div>
                            <br>

                            <div class="field">
                            <label class="label">Designation</label>
                            <div class="control has-icons-left has-icons-right  marg_left">
                                <input class="input is-success is-medium" type="text" placeholder="What are you?" v-model="user_page_full.designation">
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                                </span>
                                <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                                </span>
                            </div>
                            </div>
                            <br>
                            
                            <div class="field"> 
                            <label class="label">Department</label>

                            <div class="control has-icons-left marg_left" >
                            <div class="select is-large">
                                <select v-model.lazy="user_page_full.department">
                                <option disabled value="" selected>Majors</option>
                                <option>Computer Science</option>
                                <option>Business</option>
                                </select>
                            </div>
                            <span class="icon is-large is-left">
                                <i class="fas fa-globe"></i>
                            </span>
                            </div>
                        </div>

                            
                            
                            <br>
 </div>               

            </div>
          </div>
        </div>
        
        </div>
    </div>

    </div>

</section>

</template>


<script>
import {bus } from '../main'
import previewProfile from './previewProfile.vue';
import firebase from 'firebase'
import footer from './footer.vue'
export default {
    props:{
        
    },
    components:{
        'preview-profile':  previewProfile,
        'app-footer': footer
    },
    created(){
        bus.$emit('cover-or-not', false);
        console.log('created, kchangeBG to userHome');
        bus.$emit('changeBG', 'black');
    },
    data(){
        return {
               center: { lat: 45.508, lng: -73.587 },
                markers: [],
                showName: true,
                places: [],
                currentPlace: null,
                username: "Hariharan",
                files: '',
                me_pic: false,
                inst_pic: false,
                my_name:'Hari',
                user_page_full:{
                    uid:'',
                    name:'Andrew Ng',
                    designation:'Adjunct Professor',
                    department:'Computer Science',
                    me_tagline:'A Repository of Thought and Ideas',
                    me_about:`Andrew Ng is VP & Chief Scientist of Baidu; 
                    Co-Chairman and Co-Founder of Coursera; 
                    and an Adjunct Professor at Stanford University.  
                    In 2011 he led the development of Stanford University’s main MOOC (Massive Open Online Courses) platform and also taught an online Machine Learning class that was offered to over 100,000 students, leading to the founding of Coursera.`,
                    institute_name:'Stanford University',
                    email:'andrew.ng@cs.stanford.edu',
                    facebook:'https://www.facebook.com/andrew.ng.96',
                    linkedin:'https://www.linkedin.com/in/andrewyng/',
                    me_picURL:'',
                    me_research_area_1_title:'Mechatronic design of an integrated robotic hand',
                    me_research_area_1_content:'A hand designed for minimalistic dexterous manipulation, in which every stage of the design process also considered its manufacturing cost. ',

                    me_research_area_2_title:'Deep Learning on COTS',
                    me_research_area_2_content:'Technical details and results from our own system based on Commodity Off-The-Shelf High Performance Computing (COTS HPC) technology: a cluster of GPU servers with Infini-band interconnects and MPI.',

                    institute_tagline:'The wind of freedom blows',
                    institute_about:`Founded in 1962, The Stanford Artificial Intelligence Laboratory (SAIL) has been a center of excellence for Artificial Intelligence research, teaching, theory, and practice for over fifty years.
        Strong research groups exist in areas of artificial intelligence, robotics, foundations of computer science, scientific computing, and systems. Basic work in computer science is the main research goal of these groups, but there is also a strong emphasis on interdisciplinary research and on applications that stimulate basic research.`,

                    institute_location:'',
                    institute_picURL:'',

                    institute_research_area_1_title:'Computational Biology',
                    institute_research_area_1_content:'Research focuses on computational genomics: developing algorithms, machine learning methods, and systems for the analysis of large scale genomic data. ',

                    institute_research_area_2_title:'Computer Vision',
                    institute_research_area_2_content:'In computer vision, we aspire to develop intelligent algorithms that perform important visual perception tasks such as object recognition, scene categorization, integrative scene understanding, human motion recognition, material recognition, etc. '
                }
        }
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

    methods:{

        saveInfo(){
            console.log(this.user_page_full);
            firebase.database().ref('faculty/users_full_info/' + user.uid.toString()).set(user, function(err){
                    if(err)
                        console.log('Error writing to database'+ err);
                    else
                        console.log('done');
            });
        },
        uploadBucket(){

            var file = document.getElementById("fileinput").files[0];

            // This code is only for demo ...

            console.log("name : " + file.name);

            console.log("size : " + file.size);

            console.log("type : " + file.type);

            console.log("date : " + file.lastModified);
            
            var storageRef = firebase.storage().ref();
            var user= firebase.auth().currentUser;

            console.log(user.uid)
            console.log(user.displayName)
            console.log(user.email)

            var userRef = storageRef.child('images/'+ uid+'.jpg');

            userRef.put(file).then(function(snapshot) {
                console.log('Uploaded a blob or file!');
            });


        }
    }
}
</script>

<style lang="sass" scoped>
$input-placeholder-color: rgb(0,0,0) !default
</style>


<style scoped>

.pad_it{
    margin: 0 10px;
}

.marg_left{
    margin-left: 7px;
    margin-right: -5px;
}

.marg_left_big{
    margin-left: 25px;
    margin-right: -5px;
}

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
#previewProfileCol{
    max-width: 881px;
}

.center-margin{
    margin: 0 auto;
}

#saveInfo:hover{
    background-color: #fafafa;
    color: black;
}
#saveInfo:link{
    color: white;
}
#saveInfo:active{
    color: white;
}


.navbar-item, .navbar-link {
    color: white;
    display: block;
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    position: relative;
}

.nav-item{
       padding-top: 1.0rem;
 
}


hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0; 
}

@import "../css/personal.css";

</style>