import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPostsAction } from '../actions/post_action';
class PostList extends Component {
  constructor(props){
    super(props)
    console.log(props)
  } 
  componentDidMount(){
    this.props.dispatch(loadPostsAction)
  }
  render() {
    const {list} = this.props.post;
    const Posts = list.map(item=>{
      return (
        <li key={item.id}>{item.title}</li>
      )
    })
    return (
      <div>
          <ul>
              {Posts}
          </ul>
      </div>
    )
  }
}
const mapStateToProps = (state,ownProps) =>{
  return {
    post: state.post
  }
}
export default connect(mapStateToProps)(PostList);
