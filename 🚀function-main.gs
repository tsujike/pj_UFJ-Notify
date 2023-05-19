/**
 * 定期的にGmailのメールをチェックする関数
 * トリガー：時間ベース（30分おき）
 * トリガー設置者：kenzo@jugani-japan.com
 */
function main() {

    // SearchGmailインスタンスを生成
    const s = new SearchGmail(0, 5, "label:05_UFJ");
  
    //スターが含まれていない配列を作成する
    const unstarredMessages = s.getUnstarredMessages();
  
    //スターが付いていないメールをループ
    unstarredMessages.forEach(message => {
  
      //○○が含まれていない
      if (!s.isMailToken(message)) {
        message.message.star();
        return
      }
  
      //メールトークンが含まれている処理
      // const mailToken = s.getMailToken(message);
      const messageObject = [{
        'type': 'text',
        'text': `被仕向送金到着のご案内がございます。\nBizSTATIONにログインして、ご確認ください。`
      }];
  
      //LINE送信
      const l = new LINE();
      l.sendUniquePushMessage(messageObject, l.GLOUPID);
      console.log("LINEを送信しました");
  
      //スターを付ける
      message.message.star();
  
    });
  
  }
  