import React from 'react';
import './textfield.css';
import { connect } from 'react-redux';
import { setContent } from '../../state.js';

const TextField = props => {
  let content;
  return (
    <div className="textfield-container">
      <textarea
        className="textfield"
        ref={node => { content = node; }}
        onChange={e => { props.dispatch(setContent(content.value)); }}
        placeholder="拖拽 Markdown 文件到这里，或直接输入内容...，或者直接command v粘贴文件内容"
        value={props.content || ''}
      ></textarea>
    </div>
  );
};

export default connect(state => ({
  content: state.content
}))(TextField);
