<template>
<div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-12">
            <div class="container content has-text-centered-mobile">
              
              <div class="navbar-brand navbar-item">
                  <br>
                  <h1 class="title is-size-1  brand-text is-large has-text-centered-mobile is-size-3-mobile" >
                    
                    <i class="far fa-paper-plane is-large title is-size-1 is-large is-size-3-mobile" ></i>
                    JetPacks
                    
                    </h1>
            </div>
              <h1 class="title is-size-4-mobile has-text-centered-mobile">We <em>BRIDGE</em>   the Gap</h1>
              <h3 class="subtitle has-text-centered-mobile is-size-6-mobile">
              A Platform for Interaction, Innovation and for the Future
              </h3>
              <!-- <div class="buttons is-centered"> -->
              <a href="/" class="button is-primary is-large is-medium-mobile is-centered">Grab your JetPacks now</a>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
      </section>





<section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
          </div>
          <div class="column is-9">
            <div class="content is-medium">
          <h3 class="title is-1 is-large has-text-white">What we do</h3>
              <div class="box has-text-centered-mobile" id="company">
                <h4 id="const" class="title is-size-3 is-size-5-mobile">If you are running a Company,</h4>
                <article class="message notification is-danger">
                    <div class="message-body is-size-5 is-size-7-mobile">
                    You get to collaborate on projects, research and new stuff, on a network that spans across disciplines and user communities.
                    </div>
                </article>
                <div class="columns">
                <div class="column is-half">
              
                <article class="message notification is-primary">
<<<<<<< HEAD
                    <div class="message-body is-size-5 ">
                    A Place to strike Professional Relationships with Institutes. 
=======
                    <div class="message-body is-size-5 is-size-7-mobile">
                    We get you a Place to strike Professional Relationships with Institutes. 
>>>>>>> 31f8d5d2d6e030321dc5afe9d25c343266feaf59
                    </div>
                </article>
                </div>

                <div class="column is-half">
                <article class="message notification is-link">
                    <div class="message-body is-size-5 is-size-7-mobile">
                You get to patron institutes, a visit to your quarters, and socialize your work environment.
                    </div>
                </article>
                </div>
                </div>
                

                
                    

            </div>

            <div class="box has-text-centered-mobile" id="inst">
              <h4 id="let" class="title title is-size-3 is-size-5-mobile">If you are a Faculty at an Institute,</h4>
              <div class="columns">
                <div class="column is-half">
                  <article class="message notification is-primary">
                      <div class="message-body is-size-5 is-size-7-mobile">
                      We escalate the learning curve to a new horizon, the Learning by Observation
                      </div>
                  </article>
                </div>
                <div class="column is-half">
                <article class="message notification is-link">
                    <div class="message-body is-size-5 is-size-7-mobile">
                    You get to embrace 'Industrial Connect' right-off, just from where you are.
                    </div>
                </article>
                </div>
                </div>
                <article class="message notification is-danger">
                    <div class="message-body is-size-5 is-size-7-mobile">
                    Give your students a chance to 'FEEL' the reality and know whats in it for them in the workplace.
                    </div>
                </article>
              
                

          </div>
          <h3 class="title title is-size-1 is-size-3-mobile">More to Come...</h3>
          <div class="box has-text-centered-mobile">
            <h4 id="lorem" class="title title is-size-3 is-size-5-mobile is-white">The Future of Learning is here</h4>
            <article class="notification">
              <div class="is-size-5 is-size-7-mobile">
                Research Assistance, Consultancies, Intern Programs, and Innovation Labs are all BREWING UP right here at JetPacks. 
                <br>
                <br>
                
                <a href="/" class="button is-primary is-large">
                        <span>Grab yours now</span>
                </a>
                
              </div>
            </article>
        </div>
      </div>
    </div>
  </div>
</div>
</section>















<div class="level is-centered">
<div class="level-item has-text-centered">
<div class="field is-grouped is-grouped-multiline">
        <div class="control">
          <div class="tags has-addons"><a class="tag is-link" href="">Designed by Hariharan and Aneesh</a>
          <span class="tag is-info">MIT license</span>
        </div>
      </div>
      
</div>
</div>
</div>
<br>
<br>
</div>
                    
</template>

<script>
import {bus} from '../main'
export default{
    data(){
      return {

      }
    }, 
    created(){
        console.log('created, kchangeBG to about');
        bus.$emit('changeBG', 'about');
    },
    beforeDestroy(){
        bus.$emit('changeBG', 'not-about');
    }


  }
</script>

<style lang="scss" scoped>

@import "../css/prism.css";
@import "../css/cheatsheet.css";



</style>