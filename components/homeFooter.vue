<template>
    <div>
        <div class="footer-container">
            <div class="footer-icon-container">
                <div class="footer-card">
                    <div class="footer-icon"></div>
                    <div class="footer-icon-text">海量数据</div>
                </div>
                <div class="footer-card">
                    <div class="footer-icon b"></div>
                    <div class="footer-icon-text">实时监控</div>
                </div>
                <div class="footer-card">
                    <div class="footer-icon c"></div>
                    <div class="footer-icon-text">负载均衡</div>
                </div>
                <div class="footer-card">
                    <div class="footer-icon d"></div>
                    <div class="footer-icon-text">云端计算</div>
                </div>
                <div class="footer-card e">
                    <div class="footer-icon"></div>
                    <div class="footer-icon-text">智能学习</div>
                </div>
                <div class="footer-card f">
                    <div class="footer-icon"></div>
                    <div class="footer-icon-text">预测预防</div>
                </div>

            </div>
            <div class="contacts-list-container">
                <div class="wechat-qr-container">
                    <div class="wechat-icon"></div>
                    <span class="white-footer-title wechat-text">微信公众号</span>
                    <div class="wechat-qr"></div>
                </div>
                <div class="contacts-list">
                    <div class="white-footer-title ">服务对象</div>
                    <div class="item-text-footer">教育决策者</div>
                    <div class="item-text-footer">教育管理者</div>
                    <div class="item-text-footer">教学管理者</div>
                    <div class="item-text-footer">教师</div>
                    <div class="item-text-footer">学生</div>
                    <div class="item-text-footer">家长</div>
                </div>
                <div class="contacts-list">
                    <div class="white-footer-title ">服务内容</div>
                    <div class="item-text-footer">基础数据服务</div>
                    <div class="item-text-footer">业务数据归集</div>
                    <div class="item-text-footer">各级应用接入</div>
                    <div class="item-text-footer">统一工作平台</div>
                </div>
                <div class="contacts-list">
                    <div class="white-footer-title ">政府相关</div>
                    <div class="item-text-footer">教育部</div>
                    <div class="item-text-footer">四川省人民政府</div>
                    <div class="item-text-footer">四川政务服务网</div>
                    <div class="item-text-footer">四川教育网</div>
                </div>
                <div class="contacts-list">
                    <div class="white-footer-title ">教育相关</div>
                    <div class="item-text-footer">四川省教育厅</div>
                    <div class="item-text-footer">四川省招生考试院</div>
                    <div class="item-text-footer">四川省教育科学研究院</div>
                </div>
            </div>
        </div>
        <div class="footer-footer-container">
        <div class="footer-footer" >
            <div>
                <div class="footer-small-text">四川省教育管理信息中心</div>
                <div class="footer-small-text">四川省成都市青羊区陕西街26号</div>
            </div>
            <div>
                <div class="footer-small-text">为了获得更好的浏览效果，建议您使用Google Chrome浏览器</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homeFooter"
    }
</script>

<style lang="less" scoped>
    .footer-container {
        height: 400px;
        background-color: #30323a;

    }
    .footer-footer-container {
        text-align: start;
        height: 70px;
        background-color: #2a292f;
        .footer-footer{
            display:flex;
            margin: auto ;
            width:1200px;
            justify-content: space-between;
            padding:11px 0 0 ;
        }
    }
    .footer-icon-container {
        display: flex;
        box-sizing: border-box;
        flex-wrap: nowrap;
        justify-content: center;

        .footer-card {
            flex-shrink: 0;
            display: flex;
            width: 216px;
            height: 120px;
            align-items: center;
            border-bottom: 1px solid #595B63;

            &:last-of-type {
                width: 120px;
            }
        }

        .footer-icon {
            width: 50px;
            height: 50px;
            background-image: url(../assets/imgs/footer_icon1.png);

            &.b {
                background-image: url(../assets/imgs/footer_icon2.png);
            }

            &.c {
                background-image: url(../assets/imgs/footer_icon3.png);
            }

            &.d {
                background-image: url(../assets/imgs/footer_icon4.png);
            }

            &.e {
                background-image: url(../assets/imgs/footer_icon5.png);
            }

            &.f {
                background-image: url(../assets/imgs/footer_icon6.png);
            }
        }
    }

    .contacts-list-container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        text-align: start;
        padding: 40px 0 0;

        .contacts-list {
            align-items: start;
            width: 200px;
            flex-shrink: 0;

            &:nth-child(2) {
                margin-left: 100px;
            }
        }
    }

    .wechat-qr-container {
        box-sizing: border-box;
        flex-shrink: 0;
        width: 280px;
        padding: 0 0 0 60px;

        .wechat-icon {
            width: 30px;
            height: 30px;
            display: inline-block;
            margin: 0 8px 0 10px;
            vertical-align: middle;
            background-repeat: no-repeat;
            background-size: contain;
            background-image: url(../assets/imgs/footer_wechat_icon.png);
        }

        .wechat-qr {
            width: 140px;
            height: 140px;
            background-color: #e6e6e6;
            margin-top: 20px;
        }

        .wechat-text {
            display: inline-block;
        }
    }
</style>