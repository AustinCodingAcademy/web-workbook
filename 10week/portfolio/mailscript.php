
<?php session_start();
if(isset($_POST['Submit'])) {   if( $_SESSION['chapcha_code'] == $_POST['chapcha_code'] && !empty($_SESSION['chapcha_code'] ) ) {
$youremail = 'info@pamross.io';
$fromsubject = 'info@pamross.io';
$title = $_POST['title'];
$fname = $_POST['fname'];
$mail = $_POST['mail'];
$web = $_POST['web'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];
	$to = $youremail;
	$mailsubject = 'Masage recived from'.$fromsubject.' Contact Page';
	$body = $fromsubject.'

	The person that contacted you is  '.$fname.'
	 Phone Number: '.$phone.'
	 E-mail: '.$mail.'
	 Web Site: '.$web.'
	 Subject: '.$subject.'

	 Message:
	 '.$message.'

	|---------END MESSAGE----------|';
echo "Thank you fo your feedback. I will contact you shortly if needed.<br/>Go to <a href='/index.php'>Home Page</a>";
								mail($to, $subject, $body);
		unset($_SESSION['chapcha_code']);
   } else {
		echo 'Sorry, you have provided an invalid security code';
   }
 } else {
echo "You must write a message. </br> Please go to <a href='/contact.php'>Contact Page</a>";
}
?>
