import React,{Component} from 'react';
import { connect} from 'react-redux'; 
import PropTypes from 'prop-types'; 
import { fetchPosts } from '../actions/postActions';
class Posts extends Component{
    // 使用redux替换 constructor
    // constructor(props){
    //     super(props); 
    //     this.state = {
    //         posts : []
    //     }
    // }
    //获取数据
    componentDidMount(){
        //触发actions操作
        this.props.fetchPosts();
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    render(){
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>

        ))
        // console.log(postItems)
        return(
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

//定义props类型
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items, //state.posts 为reducer index.js定义的名称
    newPost: state.posts.item
})
export default connect(mapStateToProps, {fetchPosts})(Posts);