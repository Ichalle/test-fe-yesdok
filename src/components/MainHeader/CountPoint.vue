<template>
    <div class="point-count-wrapper" v-if="this.$route.path === path_detail">
        <div v-show="countdownSteps > countFinish">
            <radial-progress-bar :diameter="100"
                :completed-steps="completedSteps"
                :total-steps="totalSteps"
                :strokeWidth="strokeWidth"
                :innerStrokeWidth="strokeWidth"
                :startColor="start_color"
                :stopColor="stop_color"
                :innerStrokeColor="inner_stroke">
                <h2>{{ countdownSteps  }}</h2>
            </radial-progress-bar>
        </div>
        <div class="bg-count">
            <img v-if="countdownSteps <= countFinish" :src="img_point_success" />
        </div>
    </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress';
import manifest from '../../data/manifest.json';
import ModalPoint from './ModalPoint.vue';

export default {
    data () {
        return {
            completedSteps: 0,
            totalSteps: 45,
            countdownSteps: 45,
            countFinish: 0,
            strokeWidth: 15,
            start_color: '#B31500',
            stop_color: '#D41F26',
            inner_stroke: '#B7C5CC',
            img_point_success: manifest.point_success,
            path_detail: '/article-detail'
        }
    },

    components: {
        RadialProgressBar,
        ModalPoint
    },

    created(){
        this.countDownTimer()
    },  

    methods: {
        countDownTimer() {
            if(this.countdownSteps > 0) {
                setTimeout(() => {
                    if(this.$route.path === this.path_detail){
                        this.countdownSteps -= 1
                    }
                    this.countDownTimer()
                }, 1000)
            }
        },
    }

}
</script>