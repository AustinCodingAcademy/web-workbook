<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<?php

/* read variables from index page */
include 'metadatafile.php'; 
$xml = new SimpleXMLElement($xmlstr); 

include ($_SERVER['DOCUMENT_ROOT'].'/includes/code_library/security_library.php');



echo "<title>Sealcoat Photo Metadata</title>\n";
?>
<meta name="author" content="Barbara Mahler">
<meta name="Created" content="20111122">
<meta name="Revised" content="20150414">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<?php  
include ($_SERVER['DOCUMENT_ROOT'].'/includes/loadstyles.html');  
	?>
<style type="text/css">
<!--
p {margin-bottom:.5em}
div.details p {margin-top:0em ; margin-bottom:0em ; margin-left:2em}

-->
</style>
</head>

<body>
<?php
/* include header */
include ($_SERVER['DOCUMENT_ROOT'].'/includes/header.html');
include ($_SERVER['DOCUMENT_ROOT'].'/includes/topnav.html');
/* display page content */

	$test="title";
	
echo "<h1> Check data";
if ($test != ""){echo "- $test";}
echo "</h1>\n<hr>\n";

  
foreach ($xml->picture as $thispicture) { 
	if ($test != ""){
		$testcase = $thispicture->$test;
		if ($testcase == ""){
			show($thispicture); 
		} 
	}else {
		show($thispicture);	
	}
}


function show($thispicture){
	    echo "<p><span class=\"bold\">Filename</span>:". htmlentities($thispicture->filename) ."</p>";
    echo "<div class=\"details\">";
        echo "<p><span class=\"bold\">title</span>:".  htmlentities($thispicture->title) ."</p>";
        echo "<p><span class=\"bold\">caption</span>:".  htmlentities($thispicture->caption) ."</p>";
        echo "<p><span class=\"bold\">longdescription</span>:". htmlentities($thispicture->longdescription) ."</p>";
        echo "<p><span class=\"bold\">location</span>:".  htmlentities($thispicture->location) ."</p>";
        echo "<p><span class=\"bold\">date</span>:".  htmlentities($thispicture->date) ."</p>";
        echo "<p><span class=\"bold\">photographer</span>:". htmlentities($thispicture->photographer).", ". htmlentities($thispicture->affiliation)."</p>";
    echo "</div>";
}

/* page footers */

include ($_SERVER['DOCUMENT_ROOT'].'/includes/footer.php');

?>
</body>
</html>
