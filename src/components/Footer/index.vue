<template>
    <div class="main-footer">
        <div class="container ">
            <div class="row">
                <!-- <div class="col-md-7"> -->
                    <div class="footer-item">
                        <h4>顧客服務</h4>
                        <nav>
                            <a href="#"><i class="el-icon-caret-right"></i> 配送方式</a>
                            <a href="#"><i class="el-icon-caret-right"></i> 付款方式</a>
                        </nav>
                    </div>
                    <div class="footer-item">
                        <h4>條款與政策</h4>
                        <nav>
                            <a href="#"><i class="el-icon-caret-right"></i> 購物須知</a>
                            <a href="#"><i class="el-icon-caret-right"></i> 隱私條款</a>
                            <a href="#"><i class="el-icon-caret-right"></i> 預購相關規章</a>
                        </nav>
                    </div>
                    <div class="footer-item">
                        <h4>服務資訊</h4>
                        <nav>
                            <a href="#"><i class="el-icon-caret-right"></i> 營業時間 : 13:00~20:00</a> 
                            <a href="#"><i class="el-icon-caret-right"></i> E-MAIL : abcde@gmail.com</a>
                            <a href="#"><i class="el-icon-caret-right"></i> 客服專線 : (02) 1234-5678</a>
                            <a href="#"><i class="el-icon-caret-right"></i> 台北市大安區信義路三段100號(全年無休)</a>
                        </nav>
                    </div>
                    <div class="footer-item footer-subs">
                        <h4>訂閱電子報</h4>
                        <nav >
                                <a href="#"><img src="./image/facebook.png" class="icon" alt=""> 蟲蟲星球專賣</a>
                                <a href="#"><img src="./image/instagram.png" class="icon" alt=""> 蟲蟲星球粉絲團</a>
                        </nav>
                    </div>
                    <div class="conpyright">
                        <p>
                                Copyright &copy; 2022
                                僅為研究或私人學習的目的  ( 非營利 )
                        </p>

                    </div>
            </div>
        </div>


                <!-- </div> -->
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    name:'Footer',
}
</script>

<style scoped>

    .main-footer{
        padding: 100px 0 0;
        background:linear-gradient(180deg,#8de6ec,#cfdd8e)
    }
    .footer-item{
        width: 0;
        flex-grow: 1;
        margin: 0 40px;
    }
    .footer-item h4{
        font-size: 24px;
        color: #fff;
        border-bottom: 1px dotted #fff;
        margin-bottom: 0.5em;
        padding-bottom: 0.5em;
    }
    .footer-item nav{
        display: flex;
        flex-direction: column;
    }
    .footer-item nav a{
        color: #888;
        line-height: 1.4;
        text-decoration: none;
        padding: 5px 0;
        text-align: left;
    }
    .footer-item nav a:hover{
        color: #fff;
    }
    .footer-subs{
        display: flex;
        flex-direction: column;
    }
    .footer-subs form{
        display: flex;
        width: 100%;
        margin: auto 0px;
    }
    .footer-subs input[type="text"],
    .footer-subs input[type="submit"]{
        border:none;
        padding: 5px 10px;
    }
    .footer-subs input[type="text"]{
        width: 0;
        flex-grow: 1;
    }
    .footer-subs input[type="submit"]{
        color: #70f6df;
        background-color: #3e5293;
    }
    .conpyright{
        width: 100%;
        text-align: center;
        margin: 100px 0 0 0;
        padding: 10px 0;
        background-color: #cfdd8e;
        color: #000000;
    } 

    .icon{
        height: 30px;
        width: 30px;
        margin-right: 10px;
    }
    @media screen and (max-width:767px) {
        .row{
            width: 103%;
        }
        .footer-item {
            margin:20px;
            padding: 5px;
            width: 100px;
        }
        .footer-item a{
            font-size: 14px;
            text-align: left;

        }
        .conpyright p{
            display: flex;
            justify-content: center;
            font-size: 15px;
            margin: auto;
        }
        
    }
    @media screen and (max-width:992px) {
         .row{
            width: 103%;
        }
        .footer-item {
            margin:25px;
            padding: 10px;
            width: 200px;
        }
        .footer-item a{
            font-size: 18px;
            text-align: left;

        }
        .conpyright p{
            display: flex;
            justify-content: center;
            font-size: 20px;
        }
    }
</style>