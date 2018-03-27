import React , {Component } from 'react';
import Comment from './Comment';
import style from './style';


class	CommentList extends  Component {
 

  render(){
  let commentNodes = this.props.data.map(comment => {
    return (
            <Comment author={ comment.author } key={ comment.id }>
            { comment.text}
            </Comment>
           )  
      })//end CommentNodes
  }//end render
  

}// end class

export default CommentList;