<template>
   <div id="header">
      <!-- inner -->
      <div class="inner">
         <!-- option -->
         <div class="option">
            <div>
               <button>화면크기</button>
               <ul style="display:none">
                  <li><button></button></li>
                  <li><button></button></li>
                  <li><button></button></li>
               </ul>
            </div>
            <div>
               <button>Language</button>
               <ul style="display:none">
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
               </ul>
            </div>
         </div>
         <!--// option -->
         <div class="gnb">
            <div>
               <h1><a href=""><span class="hide">KSURE 사이버영업점</span></a></h1>
               <ul>
                  <li class="curr"><a href="">기업</a></li>
                  <li><a href="">은행</a></li>
                  <li><a href="">특수</a></li>
               </ul>
            </div>
            <ul>
               <li><a href="" class="comSrchBtn">통합검색</a></li>
               <li><a href="" class="loginBtn">로그인</a></li>
               <li><a href="" class="signupBtn">회원가입</a></li>
            </ul>
         </div>
      </div>
      <!--// inner -->
   </div>   
 </template>
 <script>

 </script>

<style lang="scss">
   #header {
      margin-top:32px; height:100px; border-bottom:1px solid #ccc;

      .inner {
         position:relative; margin:0 auto; width:1240px; max-width:100%;

         .option {
            display:flex; align-items:center; justify-content: flex-end; line-height:40px;

            button {
               display:inline-block; padding-right:18px; background:#fff url("@/assets/images/ico-select-s.png") no-repeat center right / 16px auto; border:none;
            }

            div + div > button {
               position:relative; padding-left:24px;

               &::before {
                  position:absolute; content:""; top:1px; left:12px; width:1px; height:16px; background:#D8D8D8;
               }
            }
         }

         .gnb {
            display:flex; align-items:center; justify-content:space-between; height:40px;
            
            > div {
               display:flex; align-items:center;
               
               h1 {
                  width:233px; height:36px; background:url("@/assets/images/logo.png") no-repeat center / 100% auto;
               }

               > ul {
                  margin-left:48px;

                  li {
                     display:inline-block; 

                     &:hover,
                     &.curr {
                        a {
                           color:#EB003B;
                        }
                     }

                     a {
                        display:inline-block; padding:0 16px; font-weight:600; font-size:20px; color:#000;
                     }
                  }
               }
            }

            > ul li {
               display:inline-block;

               & + li {
                  margin-left:32px;
               }

               a {
                  display:inline-block; padding-left:28px; font-weight:700; font-size:17px;

                  &.comSrchBtn {
                     background:url("@/assets/images/ico-srch.png") no-repeat center left/ 20px auto;
                  }  
                  &.loginBtn {
                     background:url("@/assets/images/ico-login.png") no-repeat center left/ 20px auto;
                  }
                  &.signupBtn {
                     background:url("@/assets/images/ico-signup.png") no-repeat center left/ 20px auto;
                  }
               }
            }
         }
      }
   }
</style>
   
 
 
 
 