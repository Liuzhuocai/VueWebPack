<template>
    <div style="text-align: center;background-color: #fafafa">
        <div class="spalash-banner-container">
            <div class="banner1"></div>
            <div class="banner2"></div>
        </div>
        <div class="large-card-container top">
            <div class="text-container">
                <div class="blue-title">
                    公众服务
                </div>
                <p class="text-normal-p">
                    大数据连着老百姓的衣食住行。教育领域利用互联网、大数据等信息技术，向公众开放公共信息资源，构建一个新型政务服务体系，真正把为民服务的最后一公里变成零距离。
                </p>
                <p class="text-normal-p">
                    我们运用大数据促进保障和改善民生,推进互联网+教育、努力推动教育领域公共服务均等化、普惠化、便利化,让老百姓有更多的便利感和切切实实的获得感，提升教育行政管理部门在包括公共服务在内的社会治理能力和水平。

                </p>
            </div>
            <div class="card-container">
                <div class="card">
                    <img class="item-icon" src="../assets/imgs/app_status_query_icon.png"
                         alt="加载失败">
                    <div class="item-title">学籍查询</div>
                    <div class="item-text">查询学籍信息</div>
                </div>
                <div class="card">
                    <img class="item-icon" src="../assets/imgs/app_status_modify_icon.png"
                         alt="加载失败">
                    <div class="item-title">学籍变动</div>
                    <div class="item-text">了解学籍变动情况</div>
                </div>
                <div class="card">
                    <img class="item-icon" src="../assets/imgs/app_CEE_score_query_icon.png"
                         alt="加载失败">
                    <div class="item-title">高考成绩</div>
                    <div class="item-text">查看高考成绩</div>
                </div>
                <div class="card">
                    <img class="item-icon" src="../assets/imgs/app_CEE_offer_query_icon.png"
                         alt="加载失败">
                    <div class="item-title">高考录取</div>
                    <div class="item-text">查询高考录取情况</div>
                </div>
                <div class="card">
                    <div class="item-icon-wait"></div>
                    <div class="coming-soon-text">敬请期待</div>
                </div>
                <div class="card">
                    <div class="item-icon-wait"></div>
                    <div class="coming-soon-text">敬请期待</div>
                </div>
                <div class="card">
                    <div class="item-icon-wait"></div>
                    <div class="coming-soon-text">敬请期待</div>
                </div>
                <div class="card">
                    <div class="item-icon-wait"></div>
                    <div class="coming-soon-text">敬请期待</div>
                </div>

            </div>
            <!-- <div class="card-container">
                 <div class="card" v-for="item in cardData" :key="item.id"></div>
                 <img :src="srcImg(cardData[item.id].url)" alt="加载失败">
             </div>-->
        </div>
        <div class="title2-container">
            <div class="title-line"></div>
            <div class="black-title">
                标准化数据与平台接入服务
            </div>
            <div class="title-line"></div>
        </div>
        <div class="spalash-img-card-container">
            <div class="spalash-img-card">
                <div class="blue-title-card">统一基础数据</div>
            </div>
            <div class="spalash-img-card">
                <div class="blue-title-card">统一学情数据</div>
            </div>
            <div class="spalash-img-card">
                <div class="spalash-img-card-bg">


                    <div class="blue-title-card  white-title">统一应用接入</div>
                    <p class="text-card-p">
                        制定统一的应用接入标准，集成省、市、县(区)及学校等已建/将建的业务系统，将分散、异构的应用和信息资源进行聚合。
                    </p>
                    <p class="text-card-p">
                        在统一门户中进行集中管理和访问，实现各种应用系统的无缝接入和集成，提供一个支持信息访问、传递、以及协作的集成化环境，实现个性化业务应用的高效开发、集成、部署与管理。
                    </p>
                    <div class="text-more">详情 ></div>
                </div>
            </div>
        </div>
        <div class="title2-container">
            <div class="title-line"></div>
            <div class="black-title">
                创新信息时代新模式 服务教育教学全过程
            </div>
            <div class="title-line"></div>
        </div>
        <div class="spalash-banner-container2">
            <div class="spalash-banner-content">
                <div class="spalash-banner-img"></div>
                <div class="spalash-banner-text">
                    <div class="white-title">教育决策者</div>
                    <div class="spalash-banner-text-context">
                        <div class="white-text">学情大数据模型</div>
                        <div class="white-text">数据预警分析</div>
                        <div class="white-text">区域教育发展事态</div>
                        <div class="white-text">未来数据预测</div>
                        <div class="white-text">多维度数据统计分析</div>
                        <div class="white-text">教育发展监测与诊断</div>
                    </div>
                    <div class="spalash-banner-btn">
                        进入
                    </div>
                </div>
            </div>
        </div>
        <div class="spalash-large-card-container">
            <div>
                <div class="spalash-banner-img"></div>
                <div class="black-title card">教育管理者</div>
                <div style="margin-top:16px">
                    <div class="item-title-card">教育管理科学化</div>
                    <div class="item-title-card">社会治理精准化</div>
                    <div class="item-title-card">公共服务高效化</div>
                </div>
                <div class="spalash-item-btn">
                    进入
                </div>
            </div>
            <div>
                <div class="spalash-banner-img second"></div>
                <div class="black-title card">教学管理者</div>
                <div style="margin-top:16px">
                <div class="item-title-card">共享为中心的管理模式</div>
                <div class="item-title-card">教学资源合理配置</div>
                <div class="item-title-card">数据聚集与放大效应</div>
                </div>
                <div class="spalash-item-btn">
                    进入
                </div>
            </div>
        </div>
        <div class="spalash-large-card-container">
            <div>
                <div class="spalash-banner-small-img"></div>
                <div class="black-title card2">教师</div>
                <div>
                <div class="item-title-card">数字化</div>
                <div class="item-title-card">无纸化</div>
                <div class="item-title-card">智能化</div>
                </div>
                <div>
                    <div class="item-title-card">互动性</div>
                    <div class="item-title-card">时效性</div>
                    <div class="item-title-card">交流性</div>
                </div>
                <div>
                    <div class="item-title-card">充实教学内容</div>
                    <div class="item-title-card">提升教学质量</div>
                </div>
                <div class="spalash-item-btn small">
                    进入
                </div>
            </div>
            <div>
                <div class="spalash-banner-small-img second"></div>
                <div class="black-title card2">学生</div>
                <div>
                    <div class="item-title-card">延展课堂</div>
                    <div class="item-title-card">沟通交流</div>
                </div>
                <div>
                    <div class="item-title-card">心得分享</div>
                    <div class="item-title-card">主动学习</div>
                </div>
                <div>
                    <div class="item-title-card">激发内驱力</div>
                    <div class="item-title-card">享受成就感</div>
                </div>
                <div class="spalash-item-btn small">
                    进入
                </div>
            </div>
            <div>
                <div class="spalash-banner-small-img third"></div>
                <div class="black-title card2">家长</div>
                <div>
                    <div class="item-title-card">多渠道的信息获取</div>
                </div>
                <div>
                    <div class="item-title-card">深层次的数据加工</div>
                </div>
                <div>
                    <div class="item-title-card">及时准确的家校反馈</div>
                </div>
                <div class="spalash-item-btn small">
                    进入
                </div>
            </div>
        </div>

        <div class="title2-container">
            <div class="title-line"></div>
            <div class="black-title">
                深化教育数据应用优化教育治理能力
            </div>
            <div class="title-line"></div>
        </div>
        <div class="spalash-large-card-container last">
            <div  >
                <div class="spalash-banner-end-img"></div>
                <div style="padding-left:20px">
                <div class="black-title card3">标准化</div>
                    <p class="item-title-card small">为消除在大数据应用过程中的</p>
                    <p class="item-title-card small">信息孤岛、机制壁垒提供了可能</p>
                </div>
            </div>
            <div  >
                <div class="spalash-banner-end-img two"></div>
                <div style="padding-left:20px">
                    <div class="black-title card3">数据服务</div>
                    <p class="item-title-card small">满足各级教育局、学校对基础数据</p>
                    <p class="item-title-card small">的需求，助力各级教育教学管理</p>
                </div>
            </div>
            <div  >
                <div class="spalash-banner-end-img three"></div>
                <div style="padding-left:20px">
                    <div class="black-title card3">应用仓库</div>
                    <p class="item-title-card small">模块化管理接入的各级应用，最终</p>
                    <p class="item-title-card small">形成覆盖所有从业人员的应用仓库</p>
                </div>
            </div>
            <div  >
                <div class="spalash-banner-end-img four"></div>
                <div style="padding-left:20px">
                    <div class="black-title card3">个性化的工作平台</div>
                    <p class="item-title-card small">基于数据之间的联合分析，提供个性</p>
                    <p class="item-title-card small">化平台、实现千人干面的内容呈现</p>
                </div>
            </div>

        </div>
        <div class="spalash-large-card-container last">
            <div  >
                <div class="spalash-banner-end-img five"></div>
                <div style="padding-left:20px">
                    <div class="black-title card3">边缘计算</div>
                    <p class="item-title-card small">就近提供最近端服务,</p>
                    <p class="item-title-card small">更快的网络服务响应</p>
                </div>
            </div>
            <div  >
                <div class="spalash-banner-end-img six"></div>
                <div style="padding-left:20px">
                    <div class="black-title card3">流动的信息</div>
                    <p class="item-title-card small">每一秒都有数据产生,每一-秒都在</p>
                    <p class="item-title-card small">收集、分析、应用和管理数据，每</p>
                    <p class="item-title-card small">一秒都在彼此分享数据</p>
                </div>
            </div>
            <div  >
                <div class="spalash-banner-end-img seven"></div>
                <div style="padding-left:20px">
                    <div class="black-title card3">数据链</div>
                    <p class="item-title-card small">串联起各级教育应用贡献的数据信息</p>
                    <p class="item-title-card small">形成完美的教育大数据链</p>
                </div>
            </div>
            <div  >
                <div class="spalash-banner-end-img eight"></div>
                <div style="padding-left:20px">
                    <div class="black-title card3">安全的数据</div>
                    <p class="item-title-card small">数据中心机房、数据交换专用路由器</p>
                    <p class="item-title-card small">及5G专线等，提供数据本身及数据防</p>
                    <p class="item-title-card small">护的安全</p>
                </div>
            </div>

        </div>
        <homeFooter></homeFooter>
    </div>
</template>

<script>
    import homeFooter from '../components/homeFooter.vue';
    export default {
        name: "splashPage",
        components: {
            homeFooter
        },
        methods: {
            srcImg(path) {
                return require(path)
            }
        },
        data() {
            return {
                cardData: [
                    {
                        id: 0,
                        url: "../assets/imgs/app_status_query_icon.png",
                        title: "学籍查询",
                        text: "查询学籍信息"

                    },
                    {
                        id: 1,
                        url: "../assets/imgs/app_status_query_icon.png",
                        title: "学籍查询",
                        text: "查询学籍信息"

                    },
                    {
                        id: 2,
                        url: "../assets/imgs/app_status_query_icon.png",
                        title: "学籍查询",
                        text: "查询学籍信息"

                    },
                    {
                        id: 3,
                        url: "../assets/imgs/app_status_query_icon.png",
                        title: "学籍查询",
                        text: "查询学籍信息"

                    }
                ]
                , uncompleteCardNum: 4
            };

        }
    }


</script>


<style lang="less" scoped>

    .text-container {
        flex-shrink: 0;
        width: 340px;
        text-align: start;
        padding-right: 60px;
        box-sizing: border-box;
    }

    .card-container {
        flex-grow: 1;
        display: flex;
        padding: 40px 0 0 40px;
        flex-wrap: wrap;
        align-content: flex-start;

        .card {
            padding: 20px 0 0;
            box-sizing: border-box;
            width: 180px;
            height: 180px;
            align-items: center;
            border-radius: 5px;
            text-align: center;

            &:hover {
                background: #f5f5f5;
            }
        }

    }

    .item-icon {
        width: 90px;
        height: 90px;

    }

    .item-icon-wait {
        width: 90px;
        height: 90px;
        margin: auto;
        background-image: url(../assets/imgs/app_TBC_icon.png);
        background-repeat: no-repeat;
        background-position: center center;
    }


    .title2 {
        margin-top: 80px;
        line-height: 40px;
    }

    .title2-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 120px;
        &:first-of-type {
            margin-top: 80px;
        }
    }

    .spalash-img-card-container {
        display: flex;
        justify-content: center;
        margin-top: 100px;
        .spalash-img-card {
            flex-shrink: 0;
            width: 380px;
            height: 520px;
            box-sizing: border-box;
            padding: 40px 0 0;

            background-image: url(../assets/imgs/g1_img1.png);
            background-repeat: no-repeat;
            background-position: bottom center;

            &:nth-child(1) {
                margin-right: 30px;
            }

            &:nth-child(2) {
                background-image: url(../assets/imgs/g1_img2.png);
            }

            &:nth-child(3) {
                padding: 0;
                position: relative;
                text-align: start;
                background-image: url(../assets/imgs/g1_img3.png);
                margin-left: 30px;
            }
        }

        .spalash-img-card-bg {

            position: absolute;
            box-sizing: border-box;
            width: 380px;
            height: 520px;
            padding: 40px 50px 0;
            background-color: #191933d9;

        }
    }
</style>
