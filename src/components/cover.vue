<template>
      <section class="hero is-fullheight has-carousel has-background-white" v-bind:class="backg" >
    
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-5">
                        <figure class="image is-2by1">
                            <img src="../images/fighter.png" alt="Description">
                        </figure>
                    </div>
                    <div class="column is-6 is-offset-1">
                        <h1 class="title is-1 is-large is-dark">
                            JetPacks
                        </h1>
                        <h2 class="subtitle is-3 is-dark" style="padding-top:10px;">
                            A Ride unlike any Road Trip. <br>
                            Your IV destination is here.
                        </h2>
                        <p class="is-size-6" > Read up on what we have to offer you</p>
                        <br>
                        <p class="has-text-centered">
                            

                            <nav class="level">
                                    <div class="level-item has-text-centered">
                                        <div>
                                        <router-link class="button is-medium is-info is-outlined" :to="{ name: 'instAbout'}" exact >
                                                Institute Offerings
                                        </router-link>
                                        </div>
                                    </div>
                                    <div class="level-item has-text-centered">
                                        <div>
                                        <router-link class="button is-medium is-info is-outlined" exact :to="{ name: 'companyAbout'}">
                                                Company Offerings
                                        </router-link>
                                        </div>
                                    </div>
                            </nav>
                            
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </section>
  
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex';
import {bus } from '../main'
import firebase from 'firebase';
var provider = new firebase.auth.GoogleAuthProvider();
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