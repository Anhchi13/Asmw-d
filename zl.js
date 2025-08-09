function toggleChat() {
  const chatBox = document.getElementById('chat-box');
  if (chatBox.style.display === 'none' || chatBox.style.display === '') {
    chatBox.style.display = 'flex';
  } else {
    chatBox.style.display = 'none';
  }
}

function sendMessage() {
  const input = document.getElementById('message');
  const messages = document.getElementById('chat-messages');
  const userMsg = input.value.trim();
  if (userMsg !== '') {
    // Hiển thị tin nhắn người dùng
    const msgDiv = document.createElement('div');
    msgDiv.textContent = userMsg;
    msgDiv.style.margin = '6px 0';
    msgDiv.style.textAlign = 'right';
    messages.appendChild(msgDiv);

    // Trả lời tự động
    setTimeout(() => {
      const botDiv = document.createElement('div');
      botDiv.textContent = autoReply(userMsg);
      botDiv.style.margin = '6px 0';
      botDiv.style.textAlign = 'left';
      botDiv.style.color = '#b48c3e';
      messages.appendChild(botDiv);
      messages.scrollTop = messages.scrollHeight;
    }, 700);

    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  }
}

// Hàm trả lời tự động đơn giản
function autoReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes('giá') || msg.includes('bao nhiêu')) {
    return 'Bạn vui lòng cung cấp tên sản phẩm để được báo giá nhé!';
  }
  if (msg.includes('khuyến mãi')) {
    return 'Hiện tại PNJ đang có nhiều chương trình ưu đãi hấp dẫn. Bạn muốn biết về ưu đãi nào?';
  }
  if (msg.includes('xin chào') || msg.includes('hello')) {
    return 'Xin chào! PNJ rất vui được hỗ trợ bạn.';
  }
  return 'Cảm ơn bạn đã nhắn tin. Hiện tại admin đang vắng mặt, PNJ sẽ phản hồi bạn sớm nhất!';
}