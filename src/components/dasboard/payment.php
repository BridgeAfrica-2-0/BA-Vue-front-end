<?php

if(isset($_POST['payNow']) && $_POST['paydata']){ 

  chargeCreditCard($_POST['paydata']); 
}

function chargeCreditCard($info='')
{
    $amt=(float) $info['amount'];
    $refId = 'ref' . time();
    $invNo= "inv".time();   
    $curl = curl_init();   
  
    $fieldOpt='<createTransactionRequest xmlns="AnetApi/xml/v1/schema/AnetApiSchema.xsd">
  <merchantAuthentication>
    <name>66JQYr8hD</name>  
    <transactionKey>34mDXvsqB5D6487C</transactionKey>
  </merchantAuthentication>
  <refId>'.$refId.'</refId>
  <transactionRequest>
    <transactionType>authCaptureTransaction</transactionType>
    <amount>'.$amt.'</amount>
    <payment>
      <creditCard>
        <cardNumber>'.$info['cc_no'].'</cardNumber>
        <expirationDate>'.$info['expiry'].'</expirationDate>
        <cardCode>'.$info['cvv'].'</cardCode>
      </creditCard>
    </payment>
    <order>
     <invoiceNumber>'.$invNo.'</invoiceNumber>
     <description>Demo Invoice</description>
    </order>       
    <billTo>
      <firstName>'.$info['name'].'</firstName>
      <lastName></lastName>      
      <address>'.$info['address'].'</address>
      <city>'.$info['city'].'</city>
      <state>'.$info['state'].'</state>
      <zip>'.$info['zip'].'</zip>
      <country>'.$info['country'].'</country>
    </billTo>       
  </transactionRequest>
</createTransactionRequest>';
 //live link https://api.authorize.net/xml/v1/request.api
  //sandbox test link https://apitest.authorize.net/xml/v1/request.api
  curl_setopt_array($curl, array(
  CURLOPT_URL => "https://apitest.authorize.net/xml/v1/request.api",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "$fieldOpt",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "content-type: application/xml"   
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
$errText='';
$result=array();  
echo $response;
$resXml = new SimpleXMLElement($response);
$resArr = (array) $resXml; 


  if($resArr["transactionResponse"]->responseCode=='1'){ // 1 stand for approved payment
  $result["result"]="success";
    $result["response"]=$resArr["transactionResponse"]->avsResultCode;
  $result["transId"]=$resArr["transactionResponse"]->transId;
  //end
  }else{
      $errMsg='';
        if($resArr['transactionResponse']->errors){
          $errMsg=(string) $resArr['transactionResponse']->errors->error->errorText;  
        }
      
      $result["result"]="error";
      $result["errorText"]=$errMsg;
  }
           
//log error
// $log  = "Remote Address: ".$_SERVER['REMOTE_ADDR'].' - '.date("F j, Y, g:i a").PHP_EOL.
// "Curl Response:".json_encode($resArr).PHP_EOL.
// "Result Data:".json_encode($result).PHP_EOL.
// "FAILED STATUS:".$resArr['transactionResponse']->errors->error->errorText.PHP_EOL.
// "Curl Error :".$err.PHP_EOL.
// "-------------------------".PHP_EOL;
//Save string to log, use FILE_APPEND to append.
//  file_put_contents('./log_'.date("j.n.Y").'.log', $log, FILE_APPEND);
//end log
 echo json_encode($result);
    exit();
 }


