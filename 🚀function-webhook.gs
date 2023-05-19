/** メッセージが送付された際に、実行される関数 */
function doPost(e) {

  //1つのWebhookに1件のイベントオブジェクトと仮定して・・・
  const event = JSON.parse(e.postData.contents).events[0];

  const eventObject = JSON.stringify(event);
  GmailApp.sendEmail(ADMIN_EMAIL, "eventsの中身です", eventObject); 
}