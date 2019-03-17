<template>
<div class="pad_it">
    <nav class="navbar is-fixed-top" id="blueBack">
        <div class="container is-link">
            <div class="navbar-brand">
                <a class="navbar-item brand-text" href="../">
          <h2 class="title">JetPacks</h2>
                </a>
            </div>
            <div id="navMenu" class="navbar-menu is-link">
                <div class="navbar-start">
                    <router-link class="navbar-item nav-item" to="/userHome">
                      <h3 class="is-medium">Back to my Home</h3>
                    </router-link>

                    <router-link class="navbar-item nav-item" v-on:click.native="saveInfo" id="saveInfo" to="/userHome">
                      <h3 class="is-medium">SAVE PROFILE INFO</h3>
                    </router-link>

                </div>
            </div>
            </div>
    </nav>
<!-- end nav bar -->

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
                                    <input class="input is-link is-large" type="text" placeholder="Add Salutations, e.g., Prof." v-model="user_page_full.name"/>
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
                                <!-- <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                                </span> -->
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
                                <i class="fas fa-university"></i>
                            </span>
                            </div>
                        </div>

                            
                            
                            <br>
 </div>               


            <div class="notification">
                    <br>
            <p class="menu-label has-text-weight-semibold is-uppercase is-size-5 has-text-grey-light">
                        ABOUT YOU
                    </p>

                    <hr/><br>

                    <div class="field">
                            <label class="label">Tagline</label>
                            <div class="control has-icons-left has-icons-right  marg_left">
                                <input class="input is-success is-large" type="text" placeholder="Pitch your brand in a sentence" v-model="user_page_full.me_tagline">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                                <span class="icon is-small is-right" v-if="user_page_full.me_tagline.length!=0 && user_page_full.me_tagline.length>= 50">
                                    <i class="fa fa-exclamation-triangle" style="font-size:24px;color:yellow"></i>
                                </span>

                            </div>
                            <p class="help is-danger" v-if="user_page_full.me_tagline.length!=0 && user_page_full.me_tagline.length>= 50">Please restrict content to 50 characters</p>
                            </div>

                            <br>

                            <div class="field">

                            <label class="label" v-show="!user_page_full.name">About Prof. Andrew Ng</label>
                            <label class="label" v-show="user_page_full.name">About {{user_page_full.name}}</label>
                            <div class="control  marg_left has-icons-right">
                                <textarea class="textarea is-small" placeholder="Tell us about your Professional side" v-model.lazy="user_page_full.me_about"></textarea>
                                <span class="icon is-small is-right" v-if="user_page_full.me_about.length!=0 && (user_page_full.me_about.length>= 370 || user_page_full.me_about.length<=320)">
                                    <i class="fa fa-exclamation-triangle" style="font-size:24px;color:yellow"></i>
                                </span>
                            </div>
                            <p class="help is-danger" v-if="user_page_full.me_about.length!=0 && (user_page_full.me_about.length>= 370 || user_page_full.me_about.length<=320)">Please pitch content between 320-370 characters.</p>
                            </div>

                            <br>
            </div>
                        

                            


        <div class="notification">
            <p class="menu-label has-text-weight-semibold is-uppercase is-size-5 has-text-grey-light">
                        YOUR PROFILE
                    </p>

                    <hr/><br>


                        <div class="field">
                            <label class="label">Institute</label>
                            <div class="control has-icons-left has-icons-right  marg_left ">
                                <input class="input is-success is-large" type="text" placeholder="Where do you work?" v-model="user_page_full.institute_name">
                
                                <span class="icon is-small is-left">
                                <i class="fa fa-university"></i>
                                </span>
                            </div>
                            </div>

                            <br>
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control has-icons-left has-icons-right  marg_left">
                                <input class="input is-success is-medium" type="text" placeholder="Your official mailbox" v-model.lazy="user_page_full.email">
                                <span class="icon is-small is-left">
                                <i class="fas fa-email"></i>
                                </span>
                
                            </div>
                            </div>

                        <br>


                        <div class="field is-horizontal">
                            <div class="field-label is-small">
                                <label class="label">Facebook</label>
                            </div>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input is-success is-small" type="text" placeholder="Give a link to your public profile page." v-model.lazy="user_page_full.facebook">  
                                <span class="icon is-small is-left">
                                <i class="fab fa-facebook"></i>
                                </span>
                            </div>
                            </div>

                        <br>
                        <div class="field is-horizontal">
                            <div class="field-label is-small">
                                <label class="label">LinkedIn</label>
                            </div>
                            
                            <div class="control has-icons-left has-icons-right">
                                <input class="input is-success is-small" type="text" placeholder="Drop a link to your public profile page" v-model.lazy="user_page_full.linkedin">
                                <span class="icon is-small is-left">
                                <i class="fab fa-linkedin-in"></i>
                                </span>
                                
                            </div>
                            </div>
                            <br>

            </div>



<div class="notification">
            <p class="menu-label has-text-weight-semibold is-uppercase is-size-5 has-text-grey-light">
                        PROFESSIONAL D-PIC
                    </p>

                    <hr/><br>

                <div class="field">
                    <div class="file has-name is-boxed is-large ">
                <label class="file-label marg_left_big">
                    <input class="file-input" type="file" name="resume" id="coverMe" v-on:change="uploadBucket(true)">
                    <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                        Choose a pic
                    </span>
                    </span>
                    <span class="file-name is-size-5 has-text-centered" id="me_pic">
                        1280x960
                    </span>
                </label>
                </div>
        <br>
</div>


</div>


<div class="notification">
            <p class="menu-label has-text-weight-semibold is-uppercase is-size-5 has-text-grey-light">
                        Your Best Pieces of Work
                    </p>

            <hr/><br>

            <div class="field">


                <label class="label">Research Area 1</label>    
                <div class="control  marg_left has-icons-right">
                                <input class="input is-large" placeholder="Research field 1" v-model="user_page_full.me_research_area_1_title">
                                <span class="icon is-small is-right" v-if="user_page_full.me_research_area_1_title!=0 && (user_page_full.me_research_area_1_title.length> 60)">
                                    <i class="fa fa-exclamation-triangle" style="font-size:24px;color:yellow"></i>
                                </span>
                </div>
                <p class="help is-danger" v-if="user_page_full.me_research_area_1_title!=0 && (user_page_full.me_research_area_1_title.length> 60)">Please restrict title to less than 60 chars.</p>
        <br>
                <div class="control marg_left has-icons-right">
                <textarea class="textarea is-small" placeholder="What's your role in this field?" rows=3 v-model.lazy="user_page_full.me_research_area_1_content"></textarea>
                <span class="icon is-small is-right" v-if="user_page_full.me_research_area_1_content!=0 && (user_page_full.me_research_area_1_content.length>= 260 || user_page_full.me_research_area_1_content.length<140)">
                                    <i class="fa fa-exclamation-triangle" style="font-size:24px;color:yellow"></i>
                                </span>
                </div>
                <p class="help is-danger" v-if="user_page_full.me_research_area_1_content!=0 && (user_page_full.me_research_area_1_content.length>= 260 || user_page_full.me_research_area_1_content.length<140)">Please pitch content between 140-260 chars.</p>

            </div>

                
            <br>
            <div class="field">
                <label class="label">Research Area 2</label>    
            
            <div class="control  marg_left has-icons-right">
                                <input class="input is-large" placeholder="Research field 2" v-model="user_page_full.me_research_area_2_title">
                                <span class="icon is-small is-right" v-if="user_page_full.me_research_area_2_title!=0 && (user_page_full.me_research_area_2_title.length> 60)">
                                    <i class="fa fa-exclamation-triangle" style="font-size:24px;color:yellow"></i>
                                </span>
                </div>
                <p class="help is-danger" v-if="user_page_full.me_research_area_2_title!=0 && (user_page_full.me_research_area_2_title.length> 60)">Please restrict title to less than 60 chars.</p>
<br>
                <div class="control marg_left has-icons-right">
                <textarea class="textarea is-small" placeholder="What's your role in this field?" rows=3 v-model.lazy="user_page_full.me_research_area_2_content"></textarea>
                <span class="icon is-small is-right" v-if="user_page_full.me_research_area_2_content!=0 && (user_page_full.me_research_area_2_content.length>= 260 || user_page_full.me_research_area_2_content.length<140)">
                                    <i class="fa fa-exclamation-triangle" style="font-size:24px;color:yellow"></i>
                                </span>
                </div>
                <p class="help is-danger" v-if="user_page_full.me_research_area_2_content!=0 && (user_page_full.me_research_area_2_content.length>= 260 || user_page_full.me_research_area_2_content.length<140)">Please pitch content between 140-260 chars.</p>

            </div>
</div>



<div class="notification">
            <p class="menu-label has-text-weight-semibold is-uppercase is-size-5 has-text-grey-light">
                        Institute Details
                    </p>

            <hr/>

                    <h3 class="subtitle is-size-5"></h3>
                            <div class="field">
                            <label class="label">Tagline</label>
                            <div class="control has-icons-left has-icons-right marg_left">
                                <input class="input is-success is-large" type="text" placeholder="Pitch your dept @ your institute in a sentence" v-model.lazy="user_page_full.institute_tagline">
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                                </span>
                                <span class="icon is-small is-right" v-if="user_page_full.institute_tagline.length!=0 && user_page_full.institute_tagline.length>= 50">
                                    <i class="fa fa-exclamation-triangle" style="font-size:24px;color:yellow"></i>
                                </span>
                            </div>
                            <p class="help is-danger" v-if="user_page_full.institute_tagline.length!=0 && user_page_full.institute_tagline.length>= 50">Please restrict content to 50 characters</p>
                            </div>
<br>
                            <div class="field">
                            
                            <label class="label" v-if="!user_page_full.institute_name"> About Institute</label>
                            <label class="label" v-else> About {{user_page_full.institute_name}}</label>
                            
                            <div class="control  marg_left has-icons-right">
                                <textarea class="textarea is-small" placeholder="Tell us in detail about the labs @ your institute" v-model="user_page_full.institute_about"></textarea>
                                <span class="icon is-small is-right" v-if="user_page_full.institute_about.length!=0 && (user_page_full.institute_about.length>= 370 || user_page_full.institute_about.length<=320)">
                                    <i class="fa fa-exclamation-triangle" style="font-size:24px;color:yellow"></i>
                                </span>
                            </div>
                            <p class="help is-danger" v-if="user_page_full.institute_about.length!=0 && (user_page_full.institute_about.length>= 370 || user_page_full.institute_about.length<=320)">Please pitch content between 320-370 chars.</p>
                            </div>
</div>


                        <div class="card">
                            <header class="card-header">
                                <span class="card-header-title" style="text-align:center">
                                    Institute Location
                                </span>
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
                                                    @place_changed="setPlace">
                                            </gmap-autocomplete>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>


            <div class="card blackBackground">
                    <gmap-map
                    :center="center"
                    :zoom="14"
                    style="width: 434px;height: 322px;"
                    >
                    <gmap-marker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        @click="center=m.position"
                    ></gmap-marker>
                    </gmap-map>
            </div>


<div class="notification">
            <p class="menu-label has-text-weight-semibold is-uppercase is-size-5 has-text-grey-light">
                        INSTITUTE PIC
                    </p>

                    <hr/><br>

                <div class="field">
                    <div class="file has-name is-boxed is-large ">
                <label class="file-label marg_left_big">
                    <input class="file-input" type="file" name="resume" id="coverInstitute" v-on:change="uploadBucket(false)">
                    <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                        Choose a pic
                    </span>
                    </span>
                    <span class="file-name is-size-5 has-text-centered" id="institute_pic">
                        1280x960
                    </span>
                </label>
                </div>
                </div>
        <br>
</div>




<div class="notification">
            <p class="menu-label has-text-weight-semibold is-uppercase is-size-5 has-text-grey-light" v-if="!(user_page_full.institute_name && user_page_full.department)">
                        What's happening? <br>AI @ Stanford University
            </p>

            <p class="menu-label has-text-weight-semibold is-uppercase is-size-5 has-text-grey-light" v-else>
                        What's happening? <br>{{user_page_full.department}} @ {{user_page_full.institute_name}}
            </p>

            <hr/><br>

            <div class="field">
                <label class="label">Research Field 1</label>    
            <div class="control  marg_left has-icons-right">
                                <input class="input is-large" placeholder="Research field 1" v-model="user_page_full.institute_research_area_1_title">
                                <span class="icon is-small is-right" v-if="user_page_full.institute_research_area_1_title!=0 && (user_page_full.institute_research_area_1_title.length> 60)">
                                    <i class="fa fa-exclamation-triangle" style="font-size:24px;color:yellow"></i>
                                </span>
                </div>
                <p class="help is-danger" v-if="user_page_full.institute_research_area_1_title!=0 && (user_page_full.institute_research_area_1_title.length> 60)">Please restrict title to less than 60 chars.</p>

            <br>

                <div class="control marg_left has-icons-right">
                    <textarea class="textarea is-small" placeholder="Tell us a specific Domain of work at your dept?" rows=3 v-model.lazy="user_page_full.institute_research_area_1_content"></textarea>
                    <span class="icon is-small is-right" v-if="user_page_full.institute_research_area_1_content!=0 && (user_page_full.institute_research_area_1_content.length>= 260 || user_page_full.institute_research_area_1_content.length<140)">
                                        <i class="fa fa-exclamation-triangle" style="font-size:24px;color:yellow"></i>
                                    </span>
                </div>
                <p class="help is-danger" v-if="user_page_full.institute_research_area_1_content!=0 && (user_page_full.institute_research_area_1_content.length>= 260 || user_page_full.institute_research_area_1_content.length<140)">Please pitch content between 140-260 chars.</p>

            </div>
            <br>


            <div class="field">
                <label class="label">Research Field 2</label>    

                <div class="control  marg_left has-icons-right">
                                <input class="input is-large" placeholder="Research field 1" v-model="user_page_full.institute_research_area_2_title">
                                <span class="icon is-small is-right" v-if="user_page_full.institute_research_area_2_title!=0 && (user_page_full.institute_research_area_2_title.length> 60)">
                                    <i class="fa fa-exclamation-triangle" style="font-size:24px;color:yellow"></i>
                                </span>
                </div>
                <p class="help is-danger" v-if="user_page_full.institute_research_area_2_title!=0 && (user_page_full.institute_research_area_2_title.length> 60)">Please restrict title to less than 60 chars.</p>

            <br>

                <div class="control marg_left has-icons-right">
                    <textarea class="textarea is-small" placeholder="What's uniquely up at your dept?" rows=3 v-model.lazy="user_page_full.institute_research_area_2_content"></textarea>
                    <span class="icon is-small is-right" v-if="user_page_full.institute_research_area_2_content!=0 && (user_page_full.institute_research_area_2_content.length>= 260 || user_page_full.institute_research_area_2_content.length<140)">
                                        <i class="fa fa-exclamation-triangle" style="font-size:24px;color:yellow"></i>
                                    </span>
                </div>
                <p class="help is-danger" v-if="user_page_full.institute_research_area_2_content!=0 && (user_page_full.institute_research_area_2_content.length>= 260 || user_page_full.institute_research_area_2_content.length<140)">Please pitch content between 140-260 chars.</p>

            </div>

<br>

<br>
                            <div class="field is-grouped">
                            <div class="control">
                                <button class="button is-link" @click="saveInfo">SAVE</button>
                            </div>
                            <div class="control">
                                <button class="button is-text" @click="resetInfo">Reset</button>
                            </div>
            </div>
</div>

              
            </div>
          </div>
        </div>


        </div>



        <div class="column" id="previewProfileCol">
            <!-- <preview-profile></preview-profile> -->

    <section class="hero is-link is-fullheight">
    <div class="hero-body">
        <div class="container">
      Hello! I am
        <h1 class="title is-1" v-show="!user_page_full.name">
          Andrew Ng
        </h1>
        <h1 class="title is-1" v-show="user_page_full.name">
          {{user_page_full.name}}
        </h1>

        <h2 class="subtitle is-3" v-show="user_page_full.designation && user_page_full.institute_name && user_page_full.institute_location">
          {{user_page_full.designation}} @ {{user_page_full.institute_name}}, {{user_page_full.institute_location}}
        </h2>
        <h2 class="subtitle is-3" v-show="!(user_page_full.designation && user_page_full.institute_name && user_page_full.institute_location)">
           Adjunct Professor @ Stanford University, California
        </h2>
        


        </div>
      </div>
  </section>

  <!-- About -->
  <section class="section blackBackground" id="about previewProfileCol">
    <!-- Title --> 
    <div class="section-heading">
      <h3 class="title is-1  has-text-grey-light">About Me</h3>
      <h4 class="subtitle is-4 has-text-grey-lighter" v-show="!user_page_full.me_tagline.length || user_page_full.me_tagline.length>50">A Repository of Thought and Ideas</h4>
      <h4 class="subtitle is-4 has-text-grey-lighter" v-if="user_page_full.me_tagline.length!=0 && user_page_full.me_tagline.length<50">{{user_page_full.me_tagline}}</h4>
      
      <div class="has-text-white is-size-4 me">
        <p v-if="(user_page_full.me_about.length>= 370 || user_page_full.me_about.length<=320)" >Andrew Ng is VP & Chief Scientist of Baidu; 
          Co-Chairman and Co-Founder of Coursera; 
          and an Adjunct Professor at Stanford University.  
          In 2011 he led the development of Stanford University’s main MOOC (Massive Open Online Courses) platform and also taught an online Machine Learning class that was offered to over 100,000 students, 
          leading to the founding of Coursera.</p>
          <p v-else >{{user_page_full.me_about}}</p>
      </div>
    </div>

    <div class="columns is-multiline is-mobile" style="margin-left:8px">
      <div class="column is-full">
        <!-- Profile -->
        <div class="card">
          <div class="card-content has-text-centered">
            <h3 class="title is-4 has-text-black">Profile</h3>

            <div class="content has-text-black">
              <table class="table-profile" style="margin-left:150px;">
                <tr>
                  <th colspan="1"></th>
                  <th colspan="2"></th>
                </tr>
                <tr>
                  <td>Working at</td>
                  <td v-if="!user_page_full.institute_name">Stanford University</td>
                  <td v-else>{{user_page_full.institute_name}}</td>
                </tr>
                <tr>
                  <td>Dept</td>
                  <td v-if="!user_page_full.department">Artificial Intelligence</td>
                  <td v-else>{{user_page_full.department}}</td>
                </tr>
                <tr>
                    <td> Email:</td>
                  <td v-if="!user_page_full.email">andrew.ng@cs.stanford.edu</td>
                  <td v-else>{{user_page_full.email}}</td>
                </tr>
              </table>
            </div>
            <br>
            <div class="content has-text-centered">
                    <p>
                        <a href="https://www.facebook.com/andrew.ng.96" v-show="!user_page_full.facebook">
                            <!-- <font-awesome-icon prefix="fab" icon="facebook" size="xs" /> -->
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square'}" class="fa-2x fa-pad"/>
                        </a>
                        <a href="https://www.linkedin.com/in/andrewyng/" v-show="!user_page_full.linkedin">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter-square'}" class="fa-2x fa-pad"/>
                        </a>

                        <a :href="user_page_full.facebook" v-show="user_page_full.facebook">
                            <!-- <font-awesome-icon prefix="fab" icon="facebook" size="xs" /> -->
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square'}" class="fa-2x fa-pad"/>
                        </a>
                        <a :href="user_page_full.linkedin" v-show="user_page_full.linkedin">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter-square'}" class="fa-2x fa-pad"/>
                        </a>

                    </p>
            </div>
          </div>

        </div>
      </div>
      <div class="column is-full">
        <!-- Profile picture -->
        <div class="notification">
            <figure class="image is-5by4 is-horizontal-center" style="margin-left:20px;">
              <img :src="user_page_full.me_picURL" alt="Placeholder image" class="is-horizontal-center">
            </figure>
        </div>
      </div>
      <div class="column is-full">
        <!-- Skills -->
        <div class="card">
          <div class="card-content skills-content has-text-black">
            <h3 class="title is-4 has-text-black">Areas of Work</h3>
            <div class="content has-text-black">

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>

                      <strong v-if="(user_page_full.me_research_area_1_title.length>= 60) || (user_page_full.me_research_area_1_content.length>= 260) || (user_page_full.me_research_area_1_content.length<140)">Mechatronic design of an integrated robotic hand: </strong>
                      <strong v-else>{{user_page_full.me_research_area_1_title}}: </strong>

                       <i v-if="(user_page_full.me_research_area_1_title.length>= 60) || (user_page_full.me_research_area_1_content.length>= 260) || (user_page_full.me_research_area_1_content.length<140)">A hand designed for minimalistic dexterous manipulation, in which every stage of the design process also considered its manufacturing cost. </i>
                        <i v-else>{{user_page_full.me_research_area_1_content}}</i>
                    </p>
                  </div>
                </div>
              </article>
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong v-if="(user_page_full.me_research_area_2_title.length>= 60) || (user_page_full.me_research_area_2_content.length>= 260) || (user_page_full.me_research_area_2_content.length<140)">Deep Learning on COTS: </strong>
                      <strong v-else>{{user_page_full.me_research_area_2_title}}: </strong>

                       <i v-if="(user_page_full.me_research_area_2_title.length>= 60) || (user_page_full.me_research_area_2_content.length>= 260) || (user_page_full.me_research_area_2_content.length<140)">Technical details and results from our own system based on Commodity Off-The-Shelf High Performance Computing (COTS HPC) technology: a cluster of GPU servers with Infini-band interconnects and MPI. </i>
                        <i v-else>{{user_page_full.me_research_area_2_content}}</i>
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
  <section class="section Background" id="about previewProfileCol">
    <!-- Title --> 
    <div class="section-heading">
      
      <h3 class="title is-1  has-text-grey-dark" v-if="!(user_page_full.department && user_page_full.institute_name)">Artificial Intelligence @ Stanford University</h3>
      <h3 class="title is-1  has-text-grey-dark" v-else>{{user_page_full.department}} @ {{user_page_full.institute_name}}</h3>
      
      <h4 class="subtitle is-4 has-text-grey" v-if="!user_page_full.institute_tagline.length || user_page_full.institute_tagline.length>50">The wind of freedom blows</h4>
      <h4 class="subtitle is-4 has-text-grey" v-else>{{user_page_full.institute_tagline}}</h4>
      
      <div class="has-text-black is-size-4 me">
          <p v-if="(user_page_full.institute_about.length>= 370 || user_page_full.institute_about.length<=320)">
              Founded in 1962, The Stanford Artificial Intelligence Laboratory (SAIL) has been a center of excellence for Artificial Intelligence research, teaching, theory, and practice for over fifty years.
        Strong research groups exist in areas of artificial intelligence, robotics, foundations of computer science, scientific computing, and systems. Basic work in computer science is the main research goal of these groups, but there is also a strong emphasis on interdisciplinary research and on applications that stimulate basic research.
        </p>
        <p v-else>{{user_page_full.institute_about}}
        </p>
      </div>
    </div>

    <div class="columns is-multiline is-mobile" style="margin-left:8px">
      <div class="column is-full">
        <!-- Profile -->
        <div class="card whiteBackground">
                    <gmap-map
                    :center="center"
                    :zoom="12"
                    style="width: 100%;height: 300px;"
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
            <span>
                {{user_page_full.place}}
            </span>
            </p>
        </div>
        </div>

      </div>
      <div class="column is-full">
        <!-- Profile picture -->
        <div class="notification">
            <figure class="image is-5by4" style="margin-left:20px;">
              <img ref="institutePIC" :src="user_page_full.institute_picURL" alt="Placeholder image" class="is-horizontal-center">
            </figure>
        </div>
      </div>
      <div class="column is-full">
        <!-- Skills -->
        <div class="card blackBackground">
          <div class="card-content skills-content has-text-white">
            <h3 class="title is-4 has-text-white" v-show="!user_page_full.department">Our Work in AI</h3>
            <h3 class="title is-4 has-text-white" v-show="user_page_full.department">Our Work in {{user_page_full.department}}</h3>
            <div class="content">

              <article class="media">
                <div class="media-content">
                  <div class="content">
                      <p>

                      <strong class="has-text-grey-light" v-if="(user_page_full.institute_research_area_1_title.length>= 60) || (user_page_full.institute_research_area_1_content.length>= 260) || (user_page_full.institute_research_area_1_content.length<140)">Computational Biology: </strong>
                      <strong class="has-text-grey-light" v-else>{{user_page_full.institute_research_area_1_title}}: </strong>

                       <i v-if="(user_page_full.institute_research_area_1_title.length>= 60) || (user_page_full.institute_research_area_1_content.length>= 260) || (user_page_full.institute_research_area_1_content.length<140)">Research focuses on computational genomics: developing algorithms, machine learning methods, and systems for the analysis of large scale genomic data. </i>
                        <i v-else>{{user_page_full.institute_research_area_1_content}}</i>
                    </p>

                  </div>
                </div>
              </article>

              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>

                      <strong class="has-text-grey-light" v-if="(user_page_full.institute_research_area_2_title.length>= 60) || (user_page_full.institute_research_area_2_content.length>= 260) || (user_page_full.institute_research_area_2_content.length<140)">Computer Vision: </strong>
                      <strong class="has-text-grey-light" v-else>{{user_page_full.institute_research_area_2_title}}: </strong>

                       <i v-if="(user_page_full.institute_research_area_2_title.length>= 60) || (user_page_full.institute_research_area_2_content.length>= 260) || (user_page_full.institute_research_area_2_content.length<140)">In computer vision, we aspire to develop intelligent algorithms that perform important visual perceptron tasks such as object recognition scene categorization, integrative scene understanding, human motion recognition, material recognition, etc. </i>
                        <i v-else>{{user_page_full.institute_research_area_2_content}}</i>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      
      
      </div>
    </div>


<!-- FOOTER -->
<br>
<br>

    <div class="hero-foot has-navbar-fixed-bottom">
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
<!-- END FOOTER -->

  </section>

        </div>
    </div>

    </div>

</section>

</div>
</template>


<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import {bus } from '../main'
import previewProfile from './previewProfile.vue';
import firebase from 'firebase'
import footer from './footer.vue'
export default {
        computed: {
            ...mapState([
            'goToMyHome',
            'instOrCompany',
            'user',
            'user_full_info'
            ])
        },

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
        this.user_page_full = this.user_full_info;
    },
    data(){
        return {
               center: { lat: 37.4275, lng: -122.1697 },
                markers: [],
                places: [],
                currentPlace: null,
                username: "Hariharan",
                files: '',
                me_pic: false,
                inst_pic: false,
                user_page_full:{
                    uid:'',
                    name:'',
                    designation:'',
                    department:'',
                    me_tagline:'',
                    me_about:``,
                    institute_name:'',
                    email:'',
                    facebook:'',
                    linkedin:'',
                    me_picURL: require('../images/andrew-cover.jpg'),
                    me_research_area_1_title:'',
                    me_research_area_1_content:'',

                    me_research_area_2_title:'',
                    me_research_area_2_content:'',

                    institute_tagline:'',
                    institute_about:``,

                    institute_location:'',
                    institute_picURL: require('../images/stanford_cover.jpg'),

                    institute_research_area_1_title:'',
                    institute_research_area_1_content:'',

                    institute_research_area_2_title:'',
                    institute_research_area_2_content:'',
                    marker:{

                    },
                    place:'Stanford University, California'
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
            this.$store.commit('CHANGE_USER_INFO', this.user_page_full);
            firebase.database().ref('faculty/users_full_info/' + this.user.uid.toString()).set(user_page_full, function(err){
                    if(err)
                        console.log('Error writing to database'+ err);
                    else
                        console.log('done');
            });
        },
        
        resetInfo(){
            for(var i in this.user_page_full)
                this.user_page_full[i]= '';
            this.user_page_full.me_picURL= require('../images/andrew-cover.jpg'),
            this.user_page_full.institute_picURL= require('../images/stanford_cover.jpg')
            
        },
        // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
      this.addMarker();
    },
    addMarker() {
      if (this.currentPlace) {
        this.user_page_full.place = this.currentPlace.name;
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.user_page_full.marker= marker;
        console.log(this.user_page_full.marker);
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
    },
    mounted(){
        this.geolocate();
    },
        uploadBucket(my_pic){
            
            var user= firebase.auth().currentUser;
            var pic, placeRef;
            if(my_pic){
                pic = document.getElementById("coverMe").files[0];
                document.getElementById("me_pic").innerHTML= 'Uploading...';
                placeRef= 'images/'+ 'coverMe'+ user.uid+'.jpg';
            }else{
                pic = document.getElementById("coverInstitute").files[0];
                document.getElementById("institute_pic").innerHTML= 'Uploading...';
                placeRef= 'images/'+ 'coverInstitute'+ user.uid+'.jpg';
            }
            
            // This code is only for demo ...
            console.log("name : " + pic.name);
            console.log("size : " + pic.size);
            console.log("type : " + pic.type);
            console.log("date : " + pic.lastModified);
            
            var storageRef = firebase.storage().ref();
            var userRef = storageRef.child(placeRef);
            userRef.put(pic).then((snapshot) =>{
                console.log('Uploaded a blob or file!');
                snapshot.ref.getDownloadURL().then((downloadURL)=>{
                    if (my_pic){
                        document.getElementById("me_pic").innerHTML= 'Awesome Pic!';
                        this.user_page_full.me_picURL = downloadURL;
                    }
                    else{
                        this.user_page_full.institute_picURL = downloadURL;
                        document.getElementById("institute_pic").innerHTML= 'Cool Pic!';
                    }     
                });
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
    background-color: white;
    color: black;
}
#saveInfo:link{
    background-color: Transparent;
}
#saveInfo:active{
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
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
.is-horizontal-center{
    justify-content: center;
}
@import "../css/personal.css";

</style>