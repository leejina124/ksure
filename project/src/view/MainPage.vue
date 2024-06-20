<template>
    <ComBanner/>
    <ComHeader/>
</template>

<script>

import ComBanner from '../components/ComBanner.vue';
import ComHeader from '../components/ComHeader.vue';

export default {
    // eslint-disable-next-linee
    name: 'MainPage',
        components: {
            ComBanner,
            ComHeader,
        },
    };
</script>
