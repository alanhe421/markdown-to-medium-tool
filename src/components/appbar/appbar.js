import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ContentContentCopy from 'material-ui/svg-icons/content/content-copy';
import React from 'react';
import { connect } from 'react-redux';

const Bar = props => {
  const handleCopy = () => {
    const mediumElement = document.querySelector('#medium');
    // 创建一个范围
    const range = document.createRange();
    range.selectNode(mediumElement);
    
    // 清除当前选择
    window.getSelection().removeAllRanges();
    // 选择目标内容
    window.getSelection().addRange(range);
    
    // 执行复制命令
    try {
      document.execCommand('copy');
      alert('已复制到剪贴板！');
    } catch (err) {
      console.error('复制失败:', err);
    }
    
    // 清除选择
    window.getSelection().removeAllRanges();
  };

  return (
    <div>
      <AppBar
        title="Markdown to Medium"
        showMenuIconButton={false}
        iconElementRight={
          <IconButton onClick={handleCopy} tooltip="复制到剪贴板">
            <ContentContentCopy color="#fff" />
          </IconButton>
        }
      />
    </div>
  );
};

export default connect(state => ({
  menuactive: state.menuactive
}))(Bar);
