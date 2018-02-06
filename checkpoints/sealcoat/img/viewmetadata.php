<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<?php

/* read variables from index page */
$filename= $_GET['video'];
include 'metadatafile.php'; 
$xml = new SimpleXMLElement($xmlstr); 

include ($_SERVER['DOCUMENT_ROOT'].'/includes/code_library/security_library.php');

$filename = secure_data($filename, "high");

echo "<title>Video Metadata - " . htmlentities($filename) . "</title>\n";
?>
<meta name="author" content="Doug Harned">
<meta name="Created" content="20111122">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<?php  
include ($_SERVER['DOCUMENT_ROOT'].'/includes/loadstyles.html');  
	?>
<style type="text/css">
<!--
	#media { color: #ffdc5e; }
	#video { color: #ffdc5e; }
	
-->
</style>
<script type="text/javascript" src="http://www.usgs.gov/scripts/analytics/usgs-analytics.js"></script>
<script type="text/javascript" src="/includes/analytics/combinedanalytics-nc.js"></script>
</head>

<body>
<?php
/* include header */
include ($_SERVER['DOCUMENT_ROOT'].'/includes/header.html');
include ($_SERVER['DOCUMENT_ROOT'].'/includes/topnav.html');
include ($_SERVER['DOCUMENT_ROOT'].'/includes/subnav_media.html');
/* display page content */


foreach ($xml->video as $thisvideo) {  
if ((string) $thisvideo->filename == $filename) {

echo "<h1>" . htmlentities($thisvideo->title) . "</h1>\n<hr>\n";	

	echo "<p><span class=\"bold\">Filename:</span> ";
 	echo htmlentities( $thisvideo->filename);
	echo "</p> \n";
	
	echo "<p><span class=\"bold\">Title:</span> ";
 	echo htmlentities( $thisvideo->title);
	echo "</p> \n";
	
	echo "<p><span class=\"bold\">Description:</span> ";
 	echo htmlentities( $thisvideo->description);
	echo "</p> \n";
	
	echo "<p><span class=\"bold\">Location:</span> ";
 	echo htmlentities( $thisvideo->location);
	echo "</p> \n";
	
	echo "<p><span class=\"bold\">Date:</span> ";
 	echo htmlentities( $thisvideo->date);
	echo "</p> \n";
	
	echo "<p><span class=\"bold\">Time:</span> ";
 	echo htmlentities( $thisvideo->time);
	echo " minutes</p> \n";
	
	echo "<p><span class=\"bold\">Credits:</span> ";
 	foreach ($thisvideo->credits as $credits) {
		
	echo "<p class=\"indent2\"><span class=\"bold\">Speakers:</span></p> ";
 	foreach ($credits->speakers->person as $person) {
		echo "<p class=\"indent3\">";
		echo htmlentities( $person->name);
		if ($person->org != ""){echo ", ".htmlentities( $person->org);}
		if ($person->position != ""){echo " (".htmlentities( $person->position).") ";}
		if ($person->contact != ""){echo " - ".htmlentities( $person->contact);}
		echo "</p> \n";
		}
	echo "<p class=\"indent2\"><span class=\"bold\">Production:</span> ";
 	foreach ($credits->production->person as $person) {
		echo "<p class=\"indent3\">";
		echo htmlentities( $person->name);
		if ($person->org != ""){echo ", ".htmlentities( $person->org);}
		if ($person->position != ""){echo " (".htmlentities( $person->position).") ";}
		if ($person->contact != ""){echo " - ".htmlentities( $person->contact);}
		echo "</p> \n";
	}
	}
	
	echo "<p><span class=\"bold\">Tags:</span></p> \n";
 	foreach ($thisvideo->tags as $tags) {
	echo "<p class=\"indent2\"><span class=\"bold\">Organization:</span> ";
 	echo htmlentities( $tags->organization)."</p> \n";
	echo "<p class=\"indent2\"><span class=\"bold\">Topics:</span> ";
 	echo htmlentities( $tags->topic)."</p> \n";	
	}
	
	
	echo "<p><span class=\"bold\">Links:</span></p> \n";
	$trans1=htmlentities( $thisvideo->transcript->webpage);
	if($trans1){echo "<p class=\"indent2\"><span class=\"bold\">Transcript: </span> <a href=\"$trans1\">" . htmlentities($trans1) . "</a> \n";}

	
	$galleryurl=htmlentities( $thisvideo->urls->usgs);
	$youtubeurl=htmlentities( $thisvideo->urls->youtube);
	if($galleryurl){echo "<p class=\"indent2\"><span class=\"bold\">USGS Multimedia Gallery:</span> <a href=\"$galleryurl\">" . htmlentities($galleryurl) . "</a> </p>\n ";}
	if($youtubeurl){echo "<p class=\"indent2\"><span class=\"bold\">YouTube:</span> <a href=\"$youtubeurl\">" . htmlentities($youtubeurl) . "</a> </p>\n ";}
	
}
}


include ($_SERVER['DOCUMENT_ROOT'].'/includes/footer.php');

?>
</body>
</html>
