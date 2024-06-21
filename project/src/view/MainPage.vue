<template>
    <ComBanner/>
    <ComHeader/>
    <MainSec01/>
</template>

<script>

import ComBanner from '../components/ComBanner.vue';
import ComHeader from '../components/ComHeader.vue';
import MainSec01 from '../components/main/MainSec01.vue';

export default {
    // eslint-disable-next-linee
    name: 'MainPage',
        components: {
            ComBanner,
            ComHeader,
            MainSec01
        },
    };
</script>
