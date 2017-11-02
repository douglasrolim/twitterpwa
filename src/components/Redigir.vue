<template>
    <v-layout row justify-center>
        <v-dialog v-model="novoTweet" fullscreen transition="dialog-bottom-transition" :overlay=false>
            <v-card>
                <v-toolbar color="white" class="elevation-1">
                    <v-btn icon @click.native="fechaDialog">
                        <v-icon color="blue">close</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <div>{{caracteresRestantes}}</div>
                    <v-chip color="light-blue" text-color="white" @click="enviar()"><b>Tweet</b></v-chip>
                </v-toolbar>
                <v-card-text>
                    <v-layout align-center row spacer slot="header">
                        <v-flex xs2>
                            <v-avatar size="48px">
                                <img :src="$store.state.conta.profile_image_url">
                            </v-avatar>
                        </v-flex>
                        <v-flex xs10>
                            <v-text-field
                                    name="tweet"
                                    label="O que está acontecendo?"
                                    v-model="tweet"
                                    :rules="[regras.requerido, regras.limite]"
                                    multi-line
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-card-text>
                <v-divider></v-divider>

            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    export default {
        props: ['novoTweet', 'avatar'],
        data() {
            return {
                tweet: '',
                regras: {
                    requerido: (value) => !!value || 'Requerido',
                    limite: (value) => {
                        return this.tweet.length <= 144 || 'Limte máximo excedido'
                    }
                }
            }
        },
        methods: {
            fechaDialog: function () {
                this.$emit('fechaDialog');
            },
            enviar: function () {
                axios.post('https://twitter.sa-east-1.elasticbeanstalk.com/api/tweet', {tweet: this.tweet})
                    .then(response => {
                        this.fechaDialog();
                        this.$emit('atualizaFeed');
                    })
            }
        },
        computed: {
            caracteresRestantes: function () {
                return (144 - this.tweet.length);
            }
        }
    }
</script>