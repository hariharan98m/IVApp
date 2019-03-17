<template>
                                    

<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
     <a class="navbar-item brand-text" href="../">
          <h2 class="title">JetPacks</h2>
    </a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
        <router-link class="navbar-item" exact to="/" >Home</router-link>
      
        <router-link class="navbar-item" to="/about" exact>About</router-link>

        <router-link exact to="/team" class="navbar-item">Team</router-link>

    </div>

    <div class="navbar-end">

      <div class="navbar-item" v-show="goToMyHome">
        
        <div class="buttons">
          <a class="button is-primary" :href="url">
            <strong>Go To My Console</strong>
          </a>
          
        </div>
      </div>

      <div class="navbar-item" v-show="!goToMyHome">
        
        <div class="buttons">
          <a class="button is-primary" v-on:click="googleSignin('/userHome')">
            <strong>Institute SignIn</strong>
          </a>
          <a class="button is-light" v-on:click="googleSignin('/companyHome')">
            Company SignIn
          </a>
        </div>
      </div>


    </div>
  </div>
</nav>

</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex';
import {bus } from '../main'

export default{

  computed: {
        ...mapState([
        'goToMyHome',
        'instOrCompany',
        'count'
        ]),
        ...mapGetters([
            'countLinks'
        ]),
        ...mapMutations([
            'CHANGE_GO_TO_MY_HOME',
            'CHANGE_INST_OR_COMPANY',
            'CHANGE_USER',
            'increment',
            'decrement'
        ])
    },

  created(){
        console.log(this.instOrCompany);
        if (this.instOrCompany!='not_set') {
            if (this.instOrCompany=='/userHome')
                this.url = '/userHome'
            else this.url = '/companyHome'   
        }
    },
    data(){


      return {
        logo: '../images/bulma-logo.png',
        url:''
      }
    },


    methods:{
        googleSignin(inst_or_company){
            firebase.auth().signInWithPopup(provider).then((result)=>{
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                this.$store.commit('CHANGE_GO_TO_MY_HOME', true);
                this.url = inst_or_company;
                this.$store.commit('CHANGE_INST_OR_COMPANY', inst_or_company);
                this.$store.commit('CHANGE_USER', {
                    'displayName': user.displayName,
                    'uid': user.uid,
                    'photoURL': user.photoURL
                });
            });
        },
        googleSignout(){
            firebase.auth().signOut().then(()=>{
                this.$store.commit('CHANGE_GO_TO_MY_HOME', false);
                console.log('signed out');
            });
        },
        addUserToDb(user, inst_or_company){
            console.log(user);
            let db_ref= inst_or_company? 'faculty/' :'hr'
            firebase.database().ref(db_ref + user.uid.toString()).set(user, function(err){
                    if(err)
                        console.log('Error writing to database'+ err);
                    else
                        console.log('done');
            });
        }
    }
    
  }
</script>

<style scoped>

.router-link-active{
    border-bottom-color: #3273dc;
    color: #3273dc;

}
</style>
