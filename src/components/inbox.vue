<template>
    <div>

        <nav class="navbar is-white">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item brand-text" href="../">
          <h2 class="title">JetPacks</h2>
        </a>
                <div class="navbar-burger burger" data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navMenu" class="navbar-menu">
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

                    <figure class="navbar-item" href="/team">
                        <img class="is-rounded" src="" />
                    </figure>

                </div>

            </div>
        </div>
    </nav>
    <!-- END NAV -->

    
    <div class="container">
    <div class="columns" id="mail-app">
        <div class="column is-4 messages hero is-fullheight" id="message-feed">
            <div class="action-buttons">
                <div class="control is-grouped">
                    <a class="button is-small"><i class="fa fa-chevron-down"></i></a>
                    <a class="button is-small"><i class="fa fa-refresh"></i></a>
                </div>
                <div class="control is-grouped">
                    <a class="button is-small"><i class="fa fa-inbox"></i></a>
                    <a class="button is-small"><i class="fa fa-exclamation-circle"></i></a>
                    <a class="button is-small"><i class="fa fa-trash-o"></i></a>
                </div>
                <div class="control is-grouped">
                    <a class="button is-small"><i class="fa fa-folder"></i></a>
                    <a class="button is-small"><i class="fa fa-tag"></i></a>
                </div>
                <div class="control is-grouped pg">
                    <div class="title">{{ paginate.pointer.start }}-{{ paginate.pointer.end }} of {{ paginate.total }}</div>
                    <a class="button is-link"><i class="fa fa-chevron-left"></i></a>
                    <a class="button is-link"><i class="fa fa-chevron-right"></i></a>
                </div>
            </div>

            <div class="inbox-messages" id="inbox-messages">
                <div v-for="(msg, index) in messages" class="card" v-bind:id="'msg-card-'+index" v-on:click="showMessage(msg,index)" v-bind:data-preview-id="index">
                    <div class="card-content">
                        <div class="msg-header">
                            <span class="msg-from"><small>From: {{ msg.from }}</small></span>
                            <span class="msg-timestamp"></span>
                            <span class="msg-attachment"><i class="fa fa-paperclip"></i></span>
                        </div>
                        <div class="msg-subject">
                            <span class="msg-subject"><strong id="fake-subject-1">{{ msg.subject }}</strong></span>
                        </div>
                        <div class="msg-snippet">
                            <p id="fake-snippet-1">{{ msg.snippet }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-6 message hero is-fullheight is-hidden" id="message-pane">
            <div class="action-buttons">
                <div class="control is-grouped">
                    <a class="button is-small"><i class="fa fa-inbox"></i></a>
                    <a class="button is-small"><i class="fa fa-exclamation-circle"></i></a>
                    <a class="button is-small"><i class="fa fa-trash-o"></i></a>
                </div>
                <div class="control is-grouped">
                    <a class="button is-small"><i class="fa fa-exclamation-circle"></i></a>
                    <a class="button is-small"><i class="fa fa-trash-o"></i></a>
                </div>
                <div class="control is-grouped">
                    <a class="button is-small"><i class="fa fa-folder"></i></a>
                    <a class="button is-small"><i class="fa fa-tag"></i></a>
                </div>
            </div>
            <div class="box message-preview">
                <div class="top">
                    <div class="avatar">
                        <img src="https://placehold.it/128x128">
                    </div>
                    <div class="address">
                        <div class="name">John Smith</div>
                        <div class="email">someone@gmail.com</div>
                    </div>
                    <hr>
                    <div class="content">
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>



    </div>
</template>

<script>
export default{
    created(){
        this.$emit('cover-or-not', false);
        this.$emit('changeBG', 'not-about');
    },
    mounted(){
            window.inbox = {};
            window.paginate = {
                total: Math.random() * (54236 - 100) + 3
            }
            for (var i = 0; i <= 10; i++) {
                window.inbox[i] = {
                    from: faker.name.findName(),
                    timestamp: null,
                    subject: faker.lorem.sentence().substring(0, 40),
                    snippet: faker.lorem.lines(),
                    fullMail: window.faker.lorem.paragraphs(faker.random.number(40)),
                    email: faker.internet.email()
                };
            }
    },
    data(){
        return {
            messages: window.inbox,
                    paginate: {
                        pointer: {
                            start: 1,
                            end: 10
                        },
                        total: 100
                }
        }
    },
    methods: {  
        showMessage: function(msg, index) {
                        $('#message-pane').removeClass('is-hidden');
                        $('.card').removeClass('active');
                        $('#msg-card-' + index).addClass('active');
                        $('.message .address .name').text(msg.from);
                        $('.message .address .email').text(msg.email);
                        var msg_body = '<p>' +
                            msg.snippet +
                            '</p>' +
                            '<br>' +
                            '<p>' +
                            msg.fullMail +
                            '</p>';
                        $('.message .content').html(msg_body);
                    }
                }
}
            
    </script>

<style scoped>

@import '../css/inbox.css';

</style>
