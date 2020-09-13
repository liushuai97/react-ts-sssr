import * as React from 'react';
import imgLogo from '../static/image/img_header_logo.png';
import '../static/main.css';
import '../static/index.css';
import '../static/jquery.flipster.min.css';

function Introduce () {
    return (
        <>
            <div className="common-header" id="common-header">
                <div className="wrap">
                    <a href="//www.yidengxuetang.com" className="logo" target="_blank">
                        <img src={imgLogo} height="38px" />
                    </a>
                    <ul className="nav">
                        <li><a href="#index_nav_experience">讲师经历</a></li>
                        <li><a href="#index_nav_outline">课程大纲</a></li>
                        <li><a href="#index_nav_outline">自测试卷</a></li>
                        <li><a href="#index-nav-flow">学习流程</a></li>
                        <li><a href="#index-nav-teacher">看看讲师</a></li>
                        <li><a href="#index-nav-scene">授课现场</a></li>
                        <li><a href="#index-nav-contract">入学合同</a></li>
                        <li><a href="#index_nav_signup">我要报名</a></li>
                        <li><a href="#index_nav_con">联系我们</a></li>
                    </ul>
                </div>
            </div>
            <section className="slide" id="index_nav_concat">
                <video src="./images/bg.mp4" className="glass"></video>
                <div className="wrap">
                    <div className="covering-layer" id="index_nav_covering"></div>
                    <div className="covering-text">
                        <div className="covering-lines">
                            <div className="lines"></div>
                            <p className="ITtitle">京程一灯－专为培养前端精英</p>
                            <div className="lines"></div>
                        </div>
                        <div className="salary">
                            <p>你，值得一份年薪40万的工作！</p>
                        </div>
                        <p className="js">适学对象：具有HTML5、CSS3、JavaScript基础人员</p>
                        <div className="mt40">
                            <a href="https://ke.qq.com/course/222222" className="btn dashed-opt" target="_blank">免费试听</a>
                            <a href="//wpa.qq.com/msgrd?v=3&amp;uin=2055695869&amp;site=qq&amp;menu=yes" className="btn solid-opt consult" id="consult" target="_blank">咨询入学</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="favourable videoplay">
                <div className="sys-advantage schools">
                    <h2 className="box-tit">十七期火热招募</h2>
                    <p className="box-des center">学习方式灵活，优惠大礼不断。思钱为你享厚，带梦再次起航。</p>
                </div>
                <div className="center-container">
                    <ul>
                        <li className="gear reverse">
                            <div>
                                <h4>开课日期</h4>
                                <p className="tips">火爆报名中</p>
                            </div>
                        </li>
                        <li className="gear positive">
                            <div>
                                <h4>实战驱动</h4>
                                <p className="tips">返还学费</p>
                            </div>
                        </li>
                        <li className="gear reverse">
                            <div>
                                <h4>为你所享</h4>
                                <p className="tips">推荐工作</p>
                            </div>
                        </li>
                        <li className="gear positive">
                            <div>
                                <h4>入学测试</h4>
                                <p className="tips">赠送奖学金</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"></div>
                <div className="wrap center">
                    <div className="mt40">
                        <a href="//wpa.qq.com/msgrd?v=3&amp;uin=2055695869&amp;site=qq&amp;menu=yes" className="btn solid-opt consult" target="_blank">咨询具体优惠详情</a>
                    </div>
                </div>
            </section>
            {/* 视频 */}
            <section className="videoplay" id="index_nav_experience">
                <p className="dreamtitle">站在巨人肩上，成就非凡梦想。</p>
                <p className="BAT">BAT名师联手打造超强前端盛宴！</p>
                <p className="job">不满足现状？期待BAT工作机会？工作几年没什么真本事？</p>
                <p className="jobs">注:如果你没有毅力和对技术强烈的渴望，请主动关闭页面。</p>
                <p className="jobs">—主讲志佳老师心路历程—</p>
                <div className="screen">
                    {/* 视频主要内容 */}
                </div>
                <div className="wrap center">
                    <div className="mt40 linkTeacher">
                        <a href="" className="btn solid-opt" id="consultyd">获取老师私人微信</a>
                    </div>
                    <p>
                        <img width="200px" src="./images/twechat.png" id="consultyd-img"/>
                    </p>
                </div>
            </section>


            <section className="gray" id="index_nav_outline">
                <div className="sys-advantage schools">
                    <h2 className="box-tit">课程大纲，节节干货</h2>
                    <p className="box-des center">只因专业，所以自信。十大专题，精研细磨。紧贴名企，时时更新。</p>
                </div>
                <div className="outline gray">
                    <div className="stage-box">
                        <a className="anchorItem"></a>
                        <div className="wrapper">
                            <a className="showItme" target="_blank" href="https://www.101test.com/cand/index?paperId=USGPUQ">
                                <div className="view">
                                    <div className="view-back">
                                        <span data-icon="">难度</span>
                                        <span data-icon="">☀️</span>
                                    </div>
                                    <div className="slice s1">
                                        <span className="overlay"></span>
                                        <div className="slice s2">
                                            <span className="overlay"></span>
                                            <div className="slice s3">
                                                <span className="overlay"></span>
                                                <div className="slice s4">
                                                    <span className="overlay"></span>
                                                    <div className="slice s5">
                                                        <span className="overlay"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="market"></div>
                                <span className="btn">购买</span>
                                <div className="info-box">
                                    <p className="left tit ellipsis course">《JavaScript语言新发展》📚
                                        <span>点击可自测</span>
                                    </p>
                                    <p className="ruler">
                                        <span className="last">
                                            <em>含：</em>ES6、TypeScript、Linux等
                                        </span>
                                    </p>
                                </div>
                            </a>
                            <a className="showItme consult" target="_blank" href="https://www.101test.com/cand/index?paperId=USGPUQ">
                                <div className="view">
                                    <div className="view-back">
                                        <span data-icon="">难度</span>
                                        <span data-icon="">☀️</span>
                                    </div>
                                    <div className="slice s1">
                                        <span className="overlay"></span>
                                        <div className="slice s2">
                                            <span className="overlay"></span>
                                            <div className="slice s3">
                                                <span className="overlay"></span>
                                                <div className="slice s4">
                                                    <span className="overlay"></span>
                                                    <div className="slice s5">
                                                        <span className="overlay"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="market"></div>
                                <span className="btn">购买</span>
                                <div className="info-box">
                                    <p className="left tit ellipsis course">《JavaScript语言新发展》📚
                                        <span>点击可自测</span>
                                    </p>
                                    <p className="ruler">
                                        <span className="last">
                                            <em>含：</em>ES6、TypeScript、Linux等
                                        </span>
                                    </p>
                                </div>
                            </a>
                            <a className="showItme mr0 consult" target="_blank" href="https://www.101test.com/cand/index?paperId=USGPUQ">
                                <div className="view">
                                    <div className="view-back">
                                        <span data-icon="">难度</span>
                                        <span data-icon="">☀️</span>
                                    </div>
                                    <div className="slice s1">
                                        <span className="overlay"></span>
                                        <div className="slice s2">
                                            <span className="overlay"></span>
                                            <div className="slice s3">
                                                <span className="overlay"></span>
                                                <div className="slice s4">
                                                    <span className="overlay"></span>
                                                    <div className="slice s5">
                                                        <span className="overlay"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="market"></div>
                                <span className="btn">购买</span>
                                <div className="info-box">
                                    <p className="left tit ellipsis course">《JavaScript语言新发展》📚
                                        <span>点击可自测</span>
                                    </p>
                                    <p className="ruler">
                                        <span className="last">
                                            <em>含：</em>ES6、TypeScript、Linux等
                                        </span>
                                    </p>
                                </div>
                            </a>


                            <a className="showItme" target="_blank" href="https://www.101test.com/cand/index?paperId=USGPUQ">
                                <div className="view">
                                    <div className="view-back">
                                        <span data-icon="">难度</span>
                                        <span data-icon="">☀️</span>
                                    </div>
                                    <div className="slice s1">
                                        <span className="overlay"></span>
                                        <div className="slice s2">
                                            <span className="overlay"></span>
                                            <div className="slice s3">
                                                <span className="overlay"></span>
                                                <div className="slice s4">
                                                    <span className="overlay"></span>
                                                    <div className="slice s5">
                                                        <span className="overlay"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="market"></div>
                                <span className="btn">购买</span>
                                <div className="info-box">
                                    <p className="left tit ellipsis course">《JavaScript语言新发展》📚
                                        <span>点击可自测</span>
                                    </p>
                                    <p className="ruler">
                                        <span className="last">
                                            <em>含：</em>ES6、TypeScript、Linux等
                                        </span>
                                    </p>
                                </div>
                            </a>
                            <a className="showItme consult" target="_blank" href="https://www.101test.com/cand/index?paperId=USGPUQ">
                                <div className="view">
                                    <div className="view-back">
                                        <span data-icon="">难度</span>
                                        <span data-icon="">☀️</span>
                                    </div>
                                    <div className="slice s1">
                                        <span className="overlay"></span>
                                        <div className="slice s2">
                                            <span className="overlay"></span>
                                            <div className="slice s3">
                                                <span className="overlay"></span>
                                                <div className="slice s4">
                                                    <span className="overlay"></span>
                                                    <div className="slice s5">
                                                        <span className="overlay"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="market"></div>
                                <span className="btn">购买</span>
                                <div className="info-box">
                                    <p className="left tit ellipsis course">《JavaScript语言新发展》📚
                                        <span>点击可自测</span>
                                    </p>
                                    <p className="ruler">
                                        <span className="last">
                                            <em>含：</em>ES6、TypeScript、Linux等
                                        </span>
                                    </p>
                                </div>
                            </a>
                            <a className="showItme mr0 consult" target="_blank" href="https://www.101test.com/cand/index?paperId=USGPUQ">
                                <div className="view">
                                    <div className="view-back">
                                        <span data-icon="">难度</span>
                                        <span data-icon="">☀️</span>
                                    </div>
                                    <div className="slice s1">
                                        <span className="overlay"></span>
                                        <div className="slice s2">
                                            <span className="overlay"></span>
                                            <div className="slice s3">
                                                <span className="overlay"></span>
                                                <div className="slice s4">
                                                    <span className="overlay"></span>
                                                    <div className="slice s5">
                                                        <span className="overlay"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="market"></div>
                                <span className="btn">购买</span>
                                <div className="info-box">
                                    <p className="left tit ellipsis course">《JavaScript语言新发展》📚
                                        <span>点击可自测</span>
                                    </p>
                                    <p className="ruler">
                                        <span className="last">
                                            <em>含：</em>ES6、TypeScript、Linux等
                                        </span>
                                    </p>
                                </div>
                            </a>


                            <a className="showItme" target="_blank" href="https://www.101test.com/cand/index?paperId=USGPUQ">
                                <div className="view">
                                    <div className="view-back">
                                        <span data-icon="">难度</span>
                                        <span data-icon="">☀️</span>
                                    </div>
                                    <div className="slice s1">
                                        <span className="overlay"></span>
                                        <div className="slice s2">
                                            <span className="overlay"></span>
                                            <div className="slice s3">
                                                <span className="overlay"></span>
                                                <div className="slice s4">
                                                    <span className="overlay"></span>
                                                    <div className="slice s5">
                                                        <span className="overlay"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="market"></div>
                                <span className="btn">购买</span>
                                <div className="info-box">
                                    <p className="left tit ellipsis course">《JavaScript语言新发展》📚
                                        <span>点击可自测</span>
                                    </p>
                                    <p className="ruler">
                                        <span className="last">
                                            <em>含：</em>ES6、TypeScript、Linux等
                                        </span>
                                    </p>
                                </div>
                            </a>
                            <a className="showItme consult" target="_blank" href="https://www.101test.com/cand/index?paperId=USGPUQ">
                                <div className="view">
                                    <div className="view-back">
                                        <span data-icon="">难度</span>
                                        <span data-icon="">☀️</span>
                                    </div>
                                    <div className="slice s1">
                                        <span className="overlay"></span>
                                        <div className="slice s2">
                                            <span className="overlay"></span>
                                            <div className="slice s3">
                                                <span className="overlay"></span>
                                                <div className="slice s4">
                                                    <span className="overlay"></span>
                                                    <div className="slice s5">
                                                        <span className="overlay"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="market"></div>
                                <span className="btn">购买</span>
                                <div className="info-box">
                                    <p className="left tit ellipsis course">《JavaScript语言新发展》📚
                                        <span>点击可自测</span>
                                    </p>
                                    <p className="ruler">
                                        <span className="last">
                                            <em>含：</em>ES6、TypeScript、Linux等
                                        </span>
                                    </p>
                                </div>
                            </a>
                            <a className="showItme mr0 consult" target="_blank" href="https://www.101test.com/cand/index?paperId=USGPUQ">
                                <div className="view">
                                    <div className="view-back">
                                        <span data-icon="">难度</span>
                                        <span data-icon="">☀️</span>
                                    </div>
                                    <div className="slice s1">
                                        <span className="overlay"></span>
                                        <div className="slice s2">
                                            <span className="overlay"></span>
                                            <div className="slice s3">
                                                <span className="overlay"></span>
                                                <div className="slice s4">
                                                    <span className="overlay"></span>
                                                    <div className="slice s5">
                                                        <span className="overlay"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="market"></div>
                                <span className="btn">购买</span>
                                <div className="info-box">
                                    <p className="left tit ellipsis course">《JavaScript语言新发展》📚
                                        <span>点击可自测</span>
                                    </p>
                                    <p className="ruler">
                                        <span className="last">
                                            <em>含：</em>ES6、TypeScript、Linux等
                                        </span>
                                    </p>
                                </div>
                            </a>



                            <a className="showItme" target="_blank" href="https://www.101test.com/cand/index?paperId=USGPUQ">
                                <div className="view">
                                    <div className="view-back">
                                        <span data-icon="">难度</span>
                                        <span data-icon="">☀️</span>
                                    </div>
                                    <div className="slice s1">
                                        <span className="overlay"></span>
                                        <div className="slice s2">
                                            <span className="overlay"></span>
                                            <div className="slice s3">
                                                <span className="overlay"></span>
                                                <div className="slice s4">
                                                    <span className="overlay"></span>
                                                    <div className="slice s5">
                                                        <span className="overlay"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="market"></div>
                                <span className="btn">购买</span>
                                <div className="info-box">
                                    <p className="left tit ellipsis course">《JavaScript语言新发展》📚
                                        <span>点击可自测</span>
                                    </p>
                                    <p className="ruler">
                                        <span className="last">
                                            <em>含：</em>ES6、TypeScript、Linux等
                                        </span>
                                    </p>
                                </div>
                            </a>
                            <a className="showItme consult" target="_blank" href="https://www.101test.com/cand/index?paperId=USGPUQ">
                                <div className="view">
                                    <div className="view-back">
                                        <span data-icon="">难度</span>
                                        <span data-icon="">☀️</span>
                                    </div>
                                    <div className="slice s1">
                                        <span className="overlay"></span>
                                        <div className="slice s2">
                                            <span className="overlay"></span>
                                            <div className="slice s3">
                                                <span className="overlay"></span>
                                                <div className="slice s4">
                                                    <span className="overlay"></span>
                                                    <div className="slice s5">
                                                        <span className="overlay"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="market"></div>
                                <span className="btn">购买</span>
                                <div className="info-box">
                                    <p className="left tit ellipsis course">《JavaScript语言新发展》📚
                                        <span>点击可自测</span>
                                    </p>
                                    <p className="ruler">
                                        <span className="last">
                                            <em>含：</em>ES6、TypeScript、Linux等
                                        </span>
                                    </p>
                                </div>
                            </a>
  
                        </div>
                    </div>
                </div>
            </section>

            <section className="service" id="index-nav-flow ">
                <div className="wrap">
                    <h2 className="box-tit">持续四个月的学习流程</h2>
                    <ul className="item-wrap">
                        <li className="item">
                            <img src="./images/learn.png" width="110px " height="110px " />
                            <p>不影响工作下班用<span>2-3小时</span><br/>在线通过精心录制视频预习</p>
                        </li>
                        <li className="item">
                            <img src="./images/check.png" width="110px " height="110px " />
                            <p>班主任督促验收预习成果<br/>周六2-4位<span>名企老师</span>深入分享</p>
                        </li>
                        <li className="item">
                            <img src="./images/unlock.png" width="110px " height="110px " />
                            <p>周日通过考试开启下一关卡<br/>考试通过进行<span>真实商业项目</span></p>
                        </li>
                        <li className="item">
                            <img src="./images/star.png" width="110px " height="110px " />
                            <p>毕业根据出勤等计算综合分数<br/>通过人才算法智能<span>推荐名企</span></p>
                        </li>
                    </ul>
                </div>
                <div className="wrap center">
                    <div className="mt40">
                        <a href="//wpa.qq.com/msgrd?v=3&amp;uin=2055695869&amp;site=qq&amp;menu=yes" className="btn solid-opt consult" target="_blank">点我了解详情</a>
                    </div>
                </div>
            </section>

            <section className="lecturer" id="index-nav-teacher">
                <div className="wrap center">
                    <h2 className="box-tit">来看看谁带你学习</h2>
                    <p className="box-des">我们的讲师团队由二位主讲老师和业内一线名企大牛讲师团组成，主讲老师带你细致入微，名企讲师带你深入企业内部<span>实战分享</span>。</p>
                    <div className="tutor table first">
                        <div className="avatar">
                            <img src="./images/zhijia.png"/>
                        </div>
                        <div className="info">
                            <span className="name">志佳老师</span>
                            <span className="tag gold">一灯创始人-专业</span>
                            <span className="job">曾负责百度地图H5性能方向，后负责腾讯地图H5架构方向，全栈践行者。</span>
                            <p className="major">超过5年前端开发经验，经历从ASP时代到如今的大前端时代。 入行7年，历经无数项目磨练。</p>
                            <p className="case">成功案例：<span>百度地图H5</span><span>百度自动化运维平台</span><span>腾讯地图H5</span><span>极客学院官网架构</span></p>
                        </div>
                    </div>
                    <div className="tutor table">
                        <div className="avatar">
                            <img src="./images/wangni.jpg" />
                        </div>
                        <div className="info">
                            <span className="name">王老师</span>
                            <span className="tag gold applypie">🏅金牌讲师-专注</span>
                            <span className="job applypie">资深技术宅，具有10年开发及4年教学经验</span>
                            <p className="major">精通Java与C/C++语言，擅长Linux、网络、数据库等技术，对网络安全和嵌入式等领域也有所涉猎</p>
                            <p className="case">成功案例：<span>viasat卫星网管系统</span><span>某型号数据链终端仿真系统</span><span>Wi-Fi热点服务平台</span><span>村村通电话计费系统</span></p>
                        </div>
                    </div>
                    <div className="tutor table">
                        <div className="avatar">
                            <img src="./images/qq.png" />
                            <p className="st"><span>腾讯资深前端</span></p>
                        </div>
                        <div className="avatar">
                            <img src="./images/baidu.png" />
                            <p className="st"><span>百度高级前端工程师</span></p>
                        </div>
                        <div className="avatar">
                            <img src="./images/wph.jpg" />
                            <p className="st"><span>唯品会高级前端</span></p>
                        </div>
                        <div className="avatar">
                            <img src="./images/didi.png" />
                            <p className="st"><span>滴滴高级前端</span></p>
                        </div>
                        <div className="avatar">
                            <img src="./images/mt.jpg"/>
                            <p className="st"><span>美团资深前端工程师</span></p>
                        </div>
                        <div className="avatar">
                            <img src="./images/ali.png" />
                            <p className="st"><span>阿里前端专家</span></p>
                        </div>
                    </div>
                    <div className="tutor table">
                        <div className="wrap center">
                            <div className="mt40">
                                <a href="//wpa.qq.com/msgrd?v=3&amp;uin=2055695869&amp;site=qq&amp;menu=yes" className="btn solid-opt consult" target="_blank">免费名师咨询</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="gray" id="index-nav-scene">
                <div className="sys-advantage schools">
                    <h2 className="box-tit">授课现场</h2>
                    <p className="box-des center">我们提供线上线下灵活的学习方式</p>
                </div>
                <div className="flipster flipster--transform flipster--coverflow flipster--click flipster--active">
                    <ul className="flip-items flipster__container">
                        <li id="Item-1" title="手把手教你实战商业项目，你带走的不仅是项目报酬，还有满满的知识与成就感！" className="flipster__item  flipster__item--past flipster__item--past-3">
                            <div className="flipster__item__content"><img src="./images/ic01.png" alt="实战商业项目" /></div>
                        </li>
                        <li id="Item-2" title="周日上午，信心满满的同学开始测试一周的学习情况" className="flipster__item  flipster__item--past flipster__item--past-2">
                            <div className="flipster__item__content"><img src="./images/ic02.png" alt="周日考试" /></div>
                        </li>
                        <li id="Item-3" title="咦，你看这段代码该怎么优化？" className="flipster__item  flipster__item--past flipster__item--past-1">
                            <div className="flipster__item__content"><img src="./images/ic03.png" alt="上课实录" /></div>
                        </li>
                        <li id="Item-4" title="我们一起来探讨真正的前端" className="flipster__item  flipster__item--current">
                            <div className="flipster__item__content"><img src="./images/ic06.png" alt="前端架构" /></div>
                        </li>
                        <li id="Item-5" title="这是一场技术的盛宴" className="flipster__item  flipster__item--future flipster__item--future-1">
                            <div className="flipster__item__content"><img src="./images/ic05.png" alt="技术盛宴" /></div>
                        </li>
                        <li id="Item-6" title="前端知识要掌握，后端我们也不在话下，毕竟我们是全栈小王子~" className="flipster__item  flipster__item--future flipster__item--future-2">
                            <div className="flipster__item__content"><img src="./images/ic04.png" alt="前后通吃" /></div>
                        </li>
                        <li id="Item-7" title="前端图形学？很神奇~" className="flipster__item  flipster__item--future flipster__item--future-3">
                            <div className="flipster__item__content"><img src="./images/ic07.png" alt="图形学" /></div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="protect white" id="index-nav-contract">
                <div className="wrap center">
                    <h2 className="box-tit">签署入学合同</h2>
                    <p className="box-des center">我们不玩"包就业"、"保就业"这样的文字游戏，只要你踏实肯学我们全力内推你进入名企。</p>
                    <a className="opt consult" href="//wpa.qq.com/msgrd?v=3&amp;uin=2055695869&amp;site=qq&amp;menu=yes" target="_blank">了解如何推荐就业</a>
                    <img src="./images/contract.png" width="903px" height="375px" />
                </div>
            </section>
        
            <section className="signup" id="index_nav_signup">
                <div className="wrap">
                    <h2 className="box-tit">我要报名</h2>
                    <p className="box-des center">两套学习方案，真正懂你的<span className="strong">全栈前端工程师</span>就业班</p>
                    <div className="item-wrap">
                        <div className="item purple">
                            <div className="header">
                                <p className="price">￥15760.00</p>
                                <span className="tip">通过腾讯课堂上课</span>
                            </div>
                            <div className="content">
                                <p className="remark">1.周一到周五晚8点到10点<br />2.实战+深度内容直播<br />3.基础课程录播学习</p>
                                <a href="//wpa.qq.com/msgrd?v=3&amp;uin=2055695869&amp;site=qq&amp;menu=yes" className="opt consult" target="_blank">即刻报名</a>
                            </div>
                        </div>
                        <div className="item red">
                            <div className="header">
                                <p className="price">￥20140.00</p>
                                <span className="tip">通过线下实体场地上课</span>
                            </div>
                            <div className="content">
                                <p className="remark">1.周一到周五随线上班<br />2.周六周日线下学习<br />3.上课时间早9-晚10点</p>
                                <a href="//wpa.qq.com/msgrd?v=3&amp;uin=2055695869&amp;site=qq&amp;menu=yes" className="opt consult" target="_blank">即刻报名</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="discount" id="index_nav_con">
                <div className="wrap">
                    <h2 className="box-tit">联系我们</h2>
                    <div className="item-wrap clearfix">
                        <div className="item-wrap-info clearfix">
                            <div className="item yellow">
                                <img className="pic" src="./images/teacher.png" height="100px" />
                                <div className="detail">
                                    <h3 className="tit">老师微信</h3>
                                    <img src="./images/twechat.png" height="110px" />
                                </div>
                            </div>
                            <div className="item blue">
                                <img className="pic" src="./images/customer.png" height="100px" />
                                <div className="detail">
                                    <h3 className="tit">咨询电话</h3>
                                    <p className="des">免费咨询<br />早9:30-晚9:30</p>
                                    <a className="opt consult" href="//wpa.qq.com/msgrd?v=3&amp;uin=2055695869&amp;site=qq&amp;menu=yes" target="_blank">15811217760</a>
                                </div>
                            </div>
                            <div className="item red">
                                <img className="pic" src="./images/laptop.png" height="100px" />
                                <div className="detail">
                                    <h3 className="tit">在线咨询</h3>
                                    <p className="des">直接跟老师面对面</p>
                                    <a className="opt consult" href="//wpa.qq.com/msgrd?v=3&amp;uin=2055695869&amp;site=qq&amp;menu=yes" target="_blank">立即咨询</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="signup">
                <div className="wrap">
                    <h2 className="box-tit">现场考察</h2>
                    <p className="box-des center">
                        我们为大家营造了良好的学习环境，如来校可联系上方咨询老师
                        <span className="strong">报销路费</span><br />
                        地址：北京市海淀区金域国际中心B栋0602室
                    </p>
                    <div id="map">
                        {/* 地图 */}
                    </div>
                </div>
            </section>

            <div className="bottombar">
                <section className="copyright">
                    <div className="c">
                        <p className="links">
                            <a href="//www.yidengxuetang.com/" target="_blank">一灯官网</a>
                            <a href="//www.yidengxuetang.com/aboutus" target="_blank">关于我们</a>
                            <a href="//www.yidengxuetang.com/aboutus" target="_blank">联系我们</a>
                        </p>
                    </div>
                    <p>Copyright © 2016 北京一灯教育科技有限公司 All Rights Reversed.京ICP备16022242号-1</p>
                </section>
            </div>
        </>
    )
}

export default Introduce;