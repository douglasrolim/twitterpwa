<template>
    <v-container text-xs-center style="padding: 0px">
        <v-layout row wrap>
            <v-flex xs12 v-if="carregando">
                <v-progress-circular indeterminate color="primary" class="text-xs-center"></v-progress-circular>
            </v-flex>
            <v-flex xs12 v-if="!carregando">
                <div class="list list--three-line">
                    <template v-for="tweet in tweets">
                        <v-container style="padding: 0px">
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-subheader v-if="tweet.screen_name" v-text="tweet.screen_name"></v-subheader>
                                    <v-divider v-else-if="tweet.divider" v-bind:inset="tweet.inset"></v-divider>
                                    <v-list-tile avatar v-else v-bind:key="tweet.title" @click="">
                                        <v-list-tile-avatar>
                                            <img v-bind:src="tweet.user.profile_image_url" size="48px"/>
                                        </v-list-tile-avatar>
                                        <v-list-tile-content>
                                            <v-list-tile-title v-html="tweet.user.screen_name"></v-list-tile-title>
                                            <v-list-tile-sub-title v-html="tweet.text"></v-list-tile-sub-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </template>
                </div>
            </v-flex>
        </v-layout>
        <redigir :novoTweet="novoTweet" v-on:atualizaFeed="atualizaFeed" v-on:fechaDialog="fechaDialogTweet"></redigir>
        <div id="fixedbutton">
            <v-fab-transition>
                <v-btn class="light-blue" fab dark @click.native="novoTweet = true">
                    <v-icon>add</v-icon>
                </v-btn>
            </v-fab-transition>
        </div>
    </v-container>
</template>

<script>

    export default {
        name: 'hello',
        data() {
            return {
                novoTweet: false,
                carregando: true,
                tweets: {},
                items: [
                    { title: 'Breakfast & brunch' },
                    { title: 'New American' },
                    { title: 'Sushi' }
                ],
                errros: []
            }
        },
        methods: {
            fechaDialogTweet: function () {
                this.novoTweet = false;
            },
            atualizaFeed: function() {
                axios.get('https://twitter.sa-east-1.elasticbeanstalk.com/api/feed')
                    .then(response => {
                        this.tweets = response.data;
                        this.carregando = false;
                    })
            }
        },
        mounted: function () {
            this.atualizaFeed()
        }
    }
</script>

<style>
    .list--three-line .list__tile__sub-title {
        -webkit-line-clamp: 3 !important;
    }

    #fixedbutton {
        position: fixed;
        right: 15px;
        bottom: 15px;
        padding-top: 15px;
        margin-bottom: 0;
        z-index: 998;
    }
</style>
