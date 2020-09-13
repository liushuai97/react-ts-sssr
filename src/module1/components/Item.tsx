import * as React from 'react';
import '../static/kkb-item.css';

function Item () {
    return (
        <div className='mainBox-1MKLk'>
            <div className="">
                <div className="cateTitle-2XX_P">
                    <img className="titleImg-2SroF" src="https://img.kaikeba.com/a/81036181600202ogik.png" />
                    <div className="titleDesc-1G5-Z">
                        <span className="salsh-mMFvf">/</span>
                        <img className="memberIcon-3bxBc" src="https://img.kaikeba.com/a/43236181600202yuze.png"/>
                        <span className="entryMember-1Qhi4">694</span>人报名
                    </div>
                </div>
            </div>
            <div className="courseBox-3F011">
                <div className="videoPlaceBox-3fC0M">
                    <iframe src="https://play.kaikeba.com/public/212123?source=kkb-iframe&amp;header=no" className="videoBox-fThck"></iframe>
                </div>
            </div>
            <div className="entryPlayBox-1jBbM">
                <div className="entryDesc-2u0z6">
                    <div className="entryLeftBox-8vc4d">
                        <p className="titleDesc-1q5Jj">开课吧·公开课</p>
                        <p className="courseTitle-3wUYk">初识金融与量化交易</p>
                    </div>
                    <div className="entryRightBox-3yzYq">
                        <div className="openTime-zVof6">
                            <img src="https://img.kaikeba.com/a/24539181600202icmz.png" className="backImg-3uNVK" />
                                <p className="liveTimeTag-1vSeI">
                                    <span className="timeShow-3epbf">09.08 19:30</span>
                                </p>
                                <p className="timeDesc-BKau7">开课时间</p>
                        </div>
                        <div className="priceInfo-2Ef8n">
                            <p>¥ <span className="showPrice-24xzk">0.00</span></p>
                            <p><span className="oriPrice-2bBYi">¥ 199.00</span></p>
                        </div>
                        <div className="entryBtn-U7d7K">立即报名</div>
                    </div>
                </div>
            </div>
            <div className="loginGuide-3rEDu">已购课用户，请登录查看</div>
            <div className="descBox-2sP31">
                <div className="teacherInfo-1z4-N">
                    <div className="leftBox-2LKSZ">
                        <img src="https://img.kaikeba.com/platform/958130900202uwub.jpg" className="avatar-2L_Ej"/>
                    </div>
                    <div className="rightBox-3L0J2">
                        <p className="teacherName-2rmbY">田原老师</p>
                        <p className="teacherLabel-ZX283">田原老师</p>
                        <p className="teacherDesc-3UrF7">牛津大学计算机专业硕士，11年金融从业经验，曾任职高盛、摩根斯坦利、麦格理、元盛等世界顶尖金融机构。具有丰富的金融IT、量化分析、投资交易以及资产管理及优化经验</p>
                    </div>
                </div>
                <div className="courseDesc-13mZB">
                    <div className="descTitle-2_NDh">
                        <span>课程简介</span>
                    </div>
                    <div className="descContent-27oy2">
                        <img className="icon-2OlJ0" src="https://img.kaikeba.com/a/45020291600202cbxd.png" />金融究竟是怎么赚钱的？
                    </div>
                    <div className="descDetail-2P9Co">
                        <div>
                            <img src="https://img.kaikeba.com/platform/529130900202didm.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;