<template>
    <div class="banner">
       <div class="inner">
          <div class="tit">
             <p class="ico flag">이 누리집은 대한민국 공식 전자정부 누리집입니다.</p>
             <button type="button" class="icoBtn" @click="toggleCon">공식 누리집 확인방법</button>
          </div>
          <transition name="slide">
             <div v-show="isConVisible" class="con">
                <p>공식 누리집 주소 확인하기</p>
                <div>
                   go.kr 주소를 사용하는 누리집은 대한민국 정부기관이 관리하는 누리집입니다.<br/> 
                   이밖에 or.kr 또는 .kr등 다른 도메인 주소를 사용하고 있다면 아래 URL에서 도메인 주소를 확인해 보세요<br/>
                   <a href="" class="ico link">운영중인 공식 누리집보기</a>
                </div>
             </div>
          </transition>
       </div>
    </div>
 </template>
 <script>
    import { ref } from 'vue';
 
    export default {
    setup() {
       const isConVisible = ref(false);
 
       const toggleCon = () => {
          isConVisible.value = !isConVisible.value;
       };
 
       return {
          isConVisible,
          toggleCon,
       };
    },
    };
 </script>
   
 
 
 
 