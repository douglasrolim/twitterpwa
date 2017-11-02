<template>
    <v-app light>
        <v-toolbar fixed app :clipped-left="clipped" card color="white">
            <v-avatar class="toolbar__side-icon indigo" size="26px">
                <img :src="$store.state.conta.profile_image_url" :alt="$store.state.conta.screen_name">
            </v-avatar>
            <v-toolbar-title><b>{{title}}</b></v-toolbar-title>
        </v-toolbar>
        <main>
            <v-content>
                <v-slide-y-transition mode="out-in">
                    <router-view></router-view>
                </v-slide-y-transition>
            </v-content>
        </main>
        <v-navigation-drawer
                temporary
                :right="right"
                v-model="rightDrawer"
                app
        >
            <v-list>
                <v-list-tile @click="right = !right">
                    <v-list-tile-action>
                        <v-icon light>compare_arrows</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-footer :fixed="fixed" app>
            <span>&copy; Douglas Rolim - TCC Progressive Web Apps</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                clipped: false,
                drawer: true,
                fixed: false,
                items: [
                    {icon: 'bubble_chart', title: 'Inspire'}
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'Página Inicial',
                conta: {
                }
            }
        },
        mounted: function () {
            axios.get('https://twitter.sa-east-1.elasticbeanstalk.com/api/info')
                .then(response => {
                    this.$store.commit('ALTERA_CONTA', response.data);
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>
