import React, { Component } from 'react'
import { connect} from 'react-redux'; 
import PropTypes from 'prop-types'; 
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props){
      super(props);
      this.state ={
        title:'',
        body:''
      }
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    const post = {
        title: this.state.title,
        body: this.state.body
    }

    //触发action
    this.props.createPost(post);
  }
  render() {
    const textarea = {
        width:"600px",
        height:"150px"
    }
    const input = {
        width:"600px",
        height:"40px"
    }
   
    return (
      <div>
          <h1>添加内容</h1> 
          <form onSubmit={this.onSubmit}>
              <div>
                  <label>title</label>
                  <br />
                  <input style={input} type="text" name="title" onChange={this.onChange} defaultValue={this.state.title} />
              </div>
              <div>
                  <label>body</label>
                  <br />
                  <textarea style={textarea} name="body"  onChange={this.onChange} defaultValue={this.state.body}></textarea>
              </div>
              <br/>
              <button type="submit">Add</button>
          </form>   
      </div>
    )
  }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
    PostForm: PropTypes.object.isRequired
}
export default connect(null,{createPost})(PostForm);
