function setPropertyStore() {

  //アクセストークン設置
  const properties = PropertiesService.getScriptProperties();

  //設置用
  const GLOUPID = "ここにアクセストークンを入力して実行する";
  properties.setProperty('GLOUPID', GLOUPID);
  // const a = properties.getProperty('ACCESS_TOKEN');
  // console.log(a);

  const LINEACCESS_TOKEN = "Iud7FE0ZzVnxVVu8mQ6owG/bsARzCpR/bY1i1qENGuKOoCOz2Ug1DWONLqBoerFMqce8vk9FIeFeGNW6YzUdEDgu8KNYQ/jUBre84OnbMiHZSmEJq9Ikiox6D/MsteJkKmkPh1jHMsclTOkkrUgIBwdB04t89/1O/w1cDnyilFU=";
  properties.setProperty('LINEACCESS_TOKEN', LINEACCESS_TOKEN);
  // const a = properties.getProperty('ACCESS_TOKEN');
  // console.log(a);

  // const SPREADSHEET_ID = "ここにスプレッドシートIDを入力して実行する";
  // properties.setProperty('SPREADSHEET_ID', SPREADSHEET_ID);

  // const TESTUSER_ID = "ここにユーザーIDを入力して実行する";
  // properties.setProperty('TESTUSER_ID', TESTUSER_ID);


}

