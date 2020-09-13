import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../static/third-index.css';
import * as actions from '../actions/list';


interface goods {
    id: number,
    imgUrl?: string,
    link?: string,
    location?: string
}
interface Props {
    isFetching: boolean,
    history: any,
    data: goods[],
    initGoods: () => void,
    plusGoods: (param: string) => void,
    minusGoods: () => void,
}
class List extends Component<Props> {
    constructor(props: Props) {
        super(props);
        //this.props.initGoods();
    }
    static fetch(store) {
        return store.dispatch(actions.getGoods());
    }
    componentDidMount() {

    }
    handleClick(id) {
        this.props.history.push({pathname:'/open/item/' + id});
    };
    render() {
        return (
            <div className='main' id='db'>
                <div className="section course course-v4 finish">
                    <div className="container id-tab">
                        <div className="course-hd">
                            <h3 className="title">精品公开课</h3>
                            <div className="side">
                                <p className="fr course-type">
                                    <Link className="link"  to='/admissions' target="_blank">招生简章</Link>
                                    <a className="link" href="#" target="_blank">IT互联网</a>
                                    <a className="link" href="#" target="_blank">职场技能</a>
                                    <a className="link" href="#" target="_blank">外语语言</a>
                                    <a className="link" href="#" target="_blank">学历提升</a>
                                    <a className="link" href="#" target="_blank">金融投资</a>
                                    <a className="link" href="#" target="_blank">国际就业</a>
                                    <a className="link" href="#" target="_blank">兴趣生活</a>
                                    <Link className="link more"  to='/detail' target="_blank">更多</Link>
                                </p>
                            </div>
                        </div>
                        <div className="row-5 hq-box-middle">
                            <div className="col-2 course-item">
                                <div className="course-item-wrap">
                                    <a className="pic" onClick={this.handleClick.bind(this, 1)} target="_blank">
                                        <img src="https://f.cdn.xsteach.cn/uploaded/0f/ae/2a/0fae2a41c6d13b6e3b0c81af0d3e8a86001.jpg" alt="日语小白必修课" title="日语小白必修课" />
                                    </a>
                                    <div className="details">
                                        <h3 className="details-title">
                                            <a onClick={this.handleClick.bind(this, 1)} target="_blank">日语小白必修课</a>
                                        </h3>
                                        <div className="row">
                                            主讲人：小Y
                                            <a className="fr" onClick={this.handleClick.bind(this, 1)} target="_blank">和道日语学院</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 course-item">
                                <div className="course-item-wrap">
                                    <a className="pic" onClick={this.handleClick.bind(this, 1)} target="_blank">
                                        <img src="https://f.cdn.xsteach.cn/uploaded/0f/ae/2a/0fae2a41c6d13b6e3b0c81af0d3e8a86001.jpg" alt="日语小白必修课" title="日语小白必修课" />
                                    </a>
                                    <div className="details">
                                        <h3 className="details-title">
                                            <a onClick={this.handleClick.bind(this, 1)} target="_blank">日语小白必修课</a>
                                        </h3>
                                        <div className="row">
                                            主讲人：小Y
                                            <a className="fr" onClick={this.handleClick.bind(this, 1)} target="_blank">和道日语学院</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 course-item">
                                <div className="course-item-wrap">
                                    <a className="pic" onClick={this.handleClick.bind(this, 1)} target="_blank">
                                        <img src="https://f.cdn.xsteach.cn/uploaded/0f/ae/2a/0fae2a41c6d13b6e3b0c81af0d3e8a86001.jpg" alt="日语小白必修课" title="日语小白必修课" />
                                    </a>
                                    <div className="details">
                                        <h3 className="details-title">
                                            <a onClick={this.handleClick.bind(this, 1)} target="_blank">日语小白必修课</a>
                                        </h3>
                                        <div className="row">
                                            主讲人：小Y
                                            <a className="fr" onClick={this.handleClick.bind(this, 1)} target="_blank">和道日语学院</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 course-item">
                                <div className="course-item-wrap">
                                    <a className="pic" onClick={this.handleClick.bind(this, 1)} target="_blank">
                                        <img src="https://f.cdn.xsteach.cn/uploaded/0f/ae/2a/0fae2a41c6d13b6e3b0c81af0d3e8a86001.jpg" alt="日语小白必修课" title="日语小白必修课" />
                                    </a>
                                    <div className="details">
                                        <h3 className="details-title">
                                            <a onClick={this.handleClick.bind(this, 1)} target="_blank">日语小白必修课</a>
                                        </h3>
                                        <div className="row">
                                            主讲人：小Y
                                            <a className="fr" onClick={this.handleClick.bind(this, 1)} target="_blank">和道日语学院</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 course-item">
                                <div className="course-item-wrap">
                                    <a className="pic" onClick={this.handleClick.bind(this, 1)} target="_blank">
                                        <img src="https://f.cdn.xsteach.cn/uploaded/0f/ae/2a/0fae2a41c6d13b6e3b0c81af0d3e8a86001.jpg" alt="日语小白必修课" title="日语小白必修课" />
                                    </a>
                                    <div className="details">
                                        <h3 className="details-title">
                                            <a onClick={this.handleClick.bind(this, 1)} target="_blank">日语小白必修课</a>
                                        </h3>
                                        <div className="row">
                                            主讲人：小Y
                                            <a className="fr" onClick={this.handleClick.bind(this, 1)} target="_blank">和道日语学院</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 course-item">
                                <div className="course-item-wrap">
                                    <a className="pic" onClick={this.handleClick.bind(this, 1)} target="_blank">
                                        <img src="https://f.cdn.xsteach.cn/uploaded/0f/ae/2a/0fae2a41c6d13b6e3b0c81af0d3e8a86001.jpg" alt="日语小白必修课" title="日语小白必修课" />
                                    </a>
                                    <div className="details">
                                        <h3 className="details-title">
                                            <a onClick={this.handleClick.bind(this, 1)} target="_blank">日语小白必修课</a>
                                        </h3>
                                        <div className="row">
                                            主讲人：小Y
                                            <a className="fr" onClick={this.handleClick.bind(this, 1)} target="_blank">和道日语学院</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 course-item">
                                <div className="course-item-wrap">
                                    <a className="pic" onClick={this.handleClick.bind(this, 1)} target="_blank">
                                        <img src="https://f.cdn.xsteach.cn/uploaded/0f/ae/2a/0fae2a41c6d13b6e3b0c81af0d3e8a86001.jpg" alt="日语小白必修课" title="日语小白必修课" />
                                    </a>
                                    <div className="details">
                                        <h3 className="details-title">
                                            <a onClick={this.handleClick.bind(this, 1)} target="_blank">日语小白必修课</a>
                                        </h3>
                                        <div className="row">
                                            主讲人：小Y
                                            <a className="fr" onClick={this.handleClick.bind(this, 1)} target="_blank">和道日语学院</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 course-item">
                                <div className="course-item-wrap">
                                    <a className="pic" onClick={this.handleClick.bind(this, 1)} target="_blank">
                                        <img src="https://f.cdn.xsteach.cn/uploaded/0f/ae/2a/0fae2a41c6d13b6e3b0c81af0d3e8a86001.jpg" alt="日语小白必修课" title="日语小白必修课" />
                                    </a>
                                    <div className="details">
                                        <h3 className="details-title">
                                            <a onClick={this.handleClick.bind(this, 1)} target="_blank">日语小白必修课</a>
                                        </h3>
                                        <div className="row">
                                            主讲人：小Y
                                            <a className="fr" onClick={this.handleClick.bind(this, 1)} target="_blank">和道日语学院</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 course-item">
                                <div className="course-item-wrap">
                                    <a className="pic" onClick={this.handleClick.bind(this, 1)} target="_blank">
                                        <img src="https://f.cdn.xsteach.cn/uploaded/0f/ae/2a/0fae2a41c6d13b6e3b0c81af0d3e8a86001.jpg" alt="日语小白必修课" title="日语小白必修课" />
                                    </a>
                                    <div className="details">
                                        <h3 className="details-title">
                                            <a onClick={this.handleClick.bind(this, 1)} target="_blank">日语小白必修课</a>
                                        </h3>
                                        <div className="row">
                                            主讲人：小Y
                                            <a className="fr" onClick={this.handleClick.bind(this, 1)} target="_blank">和道日语学院</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 course-item">
                                <div className="course-item-wrap">
                                    <a className="pic" onClick={this.handleClick.bind(this, 1)} target="_blank">
                                        <img src="https://f.cdn.xsteach.cn/uploaded/0f/ae/2a/0fae2a41c6d13b6e3b0c81af0d3e8a86001.jpg" alt="日语小白必修课" title="日语小白必修课" />
                                    </a>
                                    <div className="details">
                                        <h3 className="details-title">
                                            <a onClick={this.handleClick.bind(this, 1)} target="_blank">日语小白必修课</a>
                                        </h3>
                                        <div className="row">
                                            主讲人：小Y
                                            <a className="fr" onClick={this.handleClick.bind(this, 1)} target="_blank">和道日语学院</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default List;