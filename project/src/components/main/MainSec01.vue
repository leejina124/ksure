<template>
    <!-- section v1 -->
    <div class="section v1">
        <div class="inner">
            <!-- visualSlider -->
            <div class="visualSlider">
                <swiper
                    ref="swiperRef"
                    :modules="[Navigation, Pagination, Autoplay]"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                    :loop="true"
                    :pagination="{
                        el: '.basicPagination',
                        clickable: true
                    }"
                    :navigation="{
                        enabled: true,
                        nextEl: '.prevBtn',
                        prevEl: '.nextBtn'
                    }"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }"
                >
                    <swiper-slide>
                        <strong>수출성장 플래닛 (Plan it!)<br/>회원사 모집</strong>
                        <div>
                            <dl>
                                <dt>지원대상</dt>
                                <dd>기술력과 성장가능성을 갖춘 중소·중견기업</dd>
                            </dl>
                            <dl>
                                <dt>신청기간</dt>
                                <dd>'24.4.18(목) ~ 4.29(월) 18:00</dd>
                            </dl>
                            <button>신청 바로가기</button>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <strong>K-SURE 해외신용정보센터<br/>설문조사</strong>
                        <div>
                            <dl>
                                <dt>설문조사시간</dt>
                                <dd>'23.11.8(수) ~ '23.12.3(일)</dd>
                            </dl>
                            <dl>
                                <dt>설문조사 URL</dt>
                                <dd>https://moaform.com/q/WQ0S9H</dd>
                            </dl>
                            <button>설문 바로가기</button>
                        </div>
                    </swiper-slide>
                    <div class="swiperControl">
                        <div class="swiperPaging">
                            <div class="basicPagination"></div>
                            <span class="pagination"></span>
                        </div>
                        <div class="swiperBtn">
                            <button class="prevBtn"><span class="hide">Prev button</span></button>
                            <button class="nextBtn"><span class="hide">Next button</span></button>
                        </div>
                    </div>
                </swiper>
            </div>
            <!--// visualSlider -->
        </div>
    </div>
    <!--// section v1 -->
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Autoplay } from 'swiper/modules';
    import 'swiper/swiper-bundle.css';
    import { ref } from 'vue';

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const swiperRef = ref(null);

            const onSwiper = (swiper) => {
                const paginationEl = document.querySelector('.pagination');
                if (paginationEl) {
                    swiper.params.pagination = {
                        ...swiper.params.pagination,
                        el: paginationEl,
                        type: 'fraction',
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className}">${index + 1}</span>`;
                        },
                    };
                    swiper.pagination.init();
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            };

            const onSlideChange = () => {
                console.log('slide change');
            };

            return {
                swiperRef,
                onSwiper,
                onSlideChange,
                Autoplay,
                Pagination,
                Navigation
            };
        },
    }; 
</script>

<style lang="scss">
    .section.v1 {
        position:relative; min-height:450px;

        &::before {
            position:absolute; content:""; width:calc(100% - 120px); height:292px; background:#7F8CE9; border-radius:0 0 120px 0;
        }

        .visualSlider {
            padding-top:50px;

            .swiper-slide {
                strong {
                    display:block; margin-bottom:30px; font-weight:700; font-size:50px; line-height:60px; color:#fff;
                }

                dl {
                    display:flex; gap:15px; font-size:17px; color:#fff;

                    dt {
                        font-weight:700; color:#DADFFF;
                    }   

                    dd {
                        font-weight:500;
                    }
                }

                button {
                    width:120px; height:40px; background:#fff; border-radius:0; border:1px solid #AAA; font-weight:500; font-size:14px; color:#666;
                }
            }

            .swiperControl {
                display:flex;

                .swiperPaging {
                    display:flex;
                }

                .swiperBtn {
                    button {
                        display:inline-block; width:30px; height:30px; border:none;

                        &.prevBtn {
                            background:#fff url("@/assets/images/btn-prev.png") no-repeat center / 100% auto;
                        }
                        &.nextBtn {
                            background:#fff url("@/assets/images/btn-next.png") no-repeat center / 100% auto;
                        }
                    }
                }
            }
        }
    }
</style>