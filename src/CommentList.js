import React , {Component } from 'react';
import Comment from './Comment';
import style from './styles';


class	CommentList extends  Component {
 

  render(){
  let commentNodes = this.props.data.map(comment => {
    return (
            <Comment author={ comment.author } key={ comment.id }>
            { comment.text}
            </Comment>
           )  
      })//end CommentNodes
    return (
    <div style={ style.commentList }>
    { commentNodes }
     </div>
      )



  }//end render
  

}// end class

export default CommentList;