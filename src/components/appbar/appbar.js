import { AppBar as MuiAppBar, IconButton, Toolbar, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React from 'react';
import { connect } from 'react-redux';
import { toast, ToastContainer } from "react-toastify";

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
      toast(() => (
        <div>
          已复制到剪贴板！
          <a 
            href="https://medium.com/new-story" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#2196F3', marginLeft: '8px' }}
          >
            去 Medium 发布
          </a>
        </div>
      ), {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } catch (err) {
      console.error('复制失败:', err);
    }

    // 清除选择
    window.getSelection().removeAllRanges();
  };

  return (
    <div>
      <ToastContainer 
        position="top-right"
        style={{ top: '70px' }}
      />
      <MuiAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Markdown to Medium
          </Typography>
          <IconButton 
            color="inherit" 
            onClick={handleCopy} 
            title="复制到剪贴板"
          >
            <ContentCopyIcon />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
};

export default connect(state => ({
  menuactive: state.menuactive
}))(Bar);
