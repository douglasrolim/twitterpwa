<template>
    <v-tabs fixed centered>
        <v-tabs-bar class="white">
            <v-tabs-slider class="blue"></v-tabs-slider>
            <v-tabs-item
                    v-for="i in icones"
                    :key="i"
                    :href="'#tab-' + i"
            >
                <v-icon>{{ i }}</v-icon>
            </v-tabs-item>
        </v-tabs-bar>
        <v-tabs-items>
            <v-tabs-content
                    v-for="i in icones"
                    :key="i"
                    :id="'tab-' + i"
            >
                <v-card flat v-if="i === icones[0]">
                    <tweet></tweet>
                </v-card>
            </v-tabs-content>
        </v-tabs-items>
    </v-tabs>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                items: ['Item One', 'Item Seventeen', 'Item Five'],
                icones: ['home', 'search', 'notifications_none', 'mail_outline'],
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        },
        mounted: function () {

        },
    }
</script>
