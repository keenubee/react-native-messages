import MessageBar from './MessageBar';
import messageManager from './messageManager';

const showMessage = messageManager.showMessage.bind(messageManager);
const hideMessage = messageManager.hideMessage.bind(messageManager);

export {
  MessageBar,
  showMessage,
  hideMessage,
};
