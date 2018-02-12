<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<?php

/* read variables from index page */
include 'metadatafile.php'; 
$xml = new SimpleXMLElement($xmlstr); 

include ($_SERVER['DOCUMENT_ROOT'].'/includes/code_library/security_library.php');



echo "<title>USGS Research - PAHs and Coal-Tar-Based Sealcoat Photo Metadata</title>\n";
?>
<meta name="author" content="Barbara Mahler">
<meta name="Created" content="20150414">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<?php  
include ($_SERVER['DOCUMENT_ROOT'].'/includes/loadstyles.html');  
	?>
<link  href="/includes/jquery/jquery.qtip.css"  rel="stylesheet" type="text/css"/>
<link href="/styles/colorthemes/sealcoat.css" rel="stylesheet" type="text/css">

<style type="text/css">
<!--
p {margin-bottom:.5em}
div.details p {margin-top:0em ; margin-bottom:0em ; margin-left:2em}
table.gallery td {
	padding: 5px;	
	width: 310px;
}
img.shadow {
  -moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow:         2px 3px 5px 3px #ccc;
}

#pahgal {color: #F8F385}

-->
</style>

<script src="https://www2.usgs.gov/ajax/libs/jquery/1.10/jquery.min.js" type="text/javascript" ></script>
<script src="/includes/jquery/jquery.qtip.min.js" type="text/javascript"></script>
<script src="/sealcoat/includes/qtip_settings.js" type="text/javascript"></script>
<?php  
include ($_SERVER['DOCUMENT_ROOT'].'/includes/loadscripts.php');  
	?>
</head>

<body>
<?php
/* include header */
include ($_SERVER['DOCUMENT_ROOT'].'/includes/header.php');
include ($_SERVER['DOCUMENT_ROOT'].'/includes/topnav.html');
?>
	<div id="subnav">
		&nbsp;Sealcoat: &nbsp;&nbsp;<a href="/sealcoat.html" title="UGSS PAH and Coal-tar-based Pavement Sealcoat. "><span id="pahhome">Home</span></a>
		<a href="/sealcoat/q-and-a.html"><span id="pahqa">What is Sealcoat?</span></a>
		<a href="/sealcoat/pubs.html"><span id="pahpub">Publications/Presentations</span></a>
		<a href="/sealcoat/photos/photogrid.php"><span id="pahgal">Photo Gallery</span></a>
</div>


<table cellpadding="0" cellspacing="0" id="contenttable" summary="Layout">
<tr>
<!-- START left side bar section -->
<td id="leftbar" >
        <?php
/* include header */
include ($_SERVER['DOCUMENT_ROOT'].'/sealcoat/includes/sidebar_sealcoat.html');
include ($_SERVER['DOCUMENT_ROOT'].'/includes/side/about.html');
?>
        <a href="#skipusgsstates" title="Skip USGS in your state." name="topusgsstates"></a>
        <h2>USGS IN YOUR STATE</h2>
        <p>USGS Water Science Centers are located in each state.</p>

        <img src="https://www2.usgs.gov/frameworkfiles/includes/imagemaps/usmapsmall.gif" width="201" height="133" border="0" alt="There is a USGS Water Science Center office in each State. " usemap="#wscoffices" />
        <map name="wscoffices" id="wscoffices">
        <area alt="Washington" coords="2,1,30,18" href="http://wa.water.usgs.gov/" title="Washington" />
        <area alt="Oregon" coords="1,18,29,34" href="http://or.water.usgs.gov/" title="Oregon" />
        <area alt="California" shape="poly" coords="0,34,16,36,12,49,28,71,25,83,0,72" href="http://ca.water.usgs.gov/" title="California" />
        <area alt="Idaho" shape="poly" coords="30,2,36,2,36,24,45,29,44,40,25,38,30,32" href="http://id.water.usgs.gov/" title="Idaho" />
        <area alt="Nevada" shape="poly" coords="16,36,34,41,28,68,13,48" href="http://nevada.usgs.gov/water/" title="Nevada" />
        <area alt="Montana" shape="poly" coords="38,8,70,13,66,30,38,24" href="http://mt.water.usgs.gov/" title="Montana" />
        <area alt="Wyoming" coords="46,30,66,47" href="http://wy.water.usgs.gov/" title="Wyoming" />
        <area alt="Utah" shape="poly" coords="36,42,43,41,43,46,48,48,48,64,31,62" href="http://ut.water.usgs.gov/" title="Utah" />
        <area alt="Colorado" coords="50,48,72,66" href="http://co.water.usgs.gov/" title="Colorado" />
        <area alt="Arizona" shape="poly" coords="31,63,48,65,45,92,26,83" href="http://az.water.usgs.gov/" title="Arizona" />
        <area alt="New Mexico" coords="49,66,69,90" href="http://nm.water.usgs.gov/" title="New Mexico" />
        <area alt="North Dakota" coords="70,13,90,28" href="http://nd.water.usgs.gov/" title="North Dakota" />
        <area alt="South Dakota" coords="67,28,91,42" href="http://sd.water.usgs.gov/" title="South Dakota" />
        <area alt="Nebraska" shape="poly" coords="67,42,89,42,95,53,73,52,72,47,67,47" href="http://ne.water.usgs.gov/" title="Nebraska" />
        <area alt="Kansas" coords="73,54,98,68" href="http://ks.water.usgs.gov/" title="Kansas" />
        <area alt="Oklahoma" shape="poly" coords="72,67,97,70,98,83,80,80,80,70,70,70" href="http://ok.water.usgs.gov/" title="Oklahoma" />
        <area alt="Texas" shape="poly" coords="69,72,79,72,79,81,100,84,104,106,85,120,54,91,69,91" href="http://tx.usgs.gov/" title="Texas." />
        <area alt="Minnesota" shape="poly" coords="90,12,112,16,102,28,107,37,92,37" href="http://mn.water.usgs.gov/" title="Minnesota" />
        <area alt="Iowa" shape="poly" coords="91,39,108,39,112,44,108,50,95,50" href="http://ia.water.usgs.gov/" title="Iowa" />
        <area alt="Missouri" shape="poly" coords="97,51,108,51,118,67,115,71,112,69,99,68" href="http://mo.water.usgs.gov/" title="Missouri" />
        <area alt="Arkansas" shape="poly" coords="98,70,116,70,111,87,102,87" href="http://ar.water.usgs.gov/" title="Arkansas" />
        <area alt="Louisiana " shape="poly" coords="101,88,111,88,111,94,117,94,121,101,105,106" href="http://la.water.usgs.gov/" title="Louisiana " />
        <area alt="Wisconsin " shape="poly" coords="108,22,120,29,119,41,111,42,103,28" href="http://wi.water.usgs.gov/" title="Wisconsin " />
        <area alt="Illinois" shape="poly" coords="114,43,121,42,122,61,119,65,109,51,109,51,109,51" href="http://il.water.usgs.gov/" title="Illinois" />
        <area alt="Mississippi" shape="poly" coords="115,76,120,77,122,96,117,92,112,92,112,83" href="http://ms.water.usgs.gov/" title="Mississippi" />
        <area alt="Michigan" shape="poly" coords="112,21,122,17,139,36,134,43,122,42,120,41,120,27" href="http://mi.water.usgs.gov/" title="Michigan" />
        <area alt="Indiana" shape="poly" coords="123,43,132,43,131,55,123,62" href="http://in.water.usgs.gov/" title="Indiana" />
        <area alt="Ohio" shape="poly" coords="133,44,145,40,146,47,139,56,133,54" href="http://oh.water.usgs.gov/" title="Ohio" />
        <area alt="Kentucky" shape="poly" coords="125,61,134,55,140,57,142,62,139,66,119,67" href="http://ky.water.usgs.gov/" title="Kentucky" />
        <area alt="Tennessee" shape="poly" coords="118,68,144,66,137,73,116,75" href="http://tn.water.usgs.gov/" title="Tennessee" />
        <area alt="Alabama" shape="poly" coords="122,77,131,76,135,92,127,92,127,97,123,98" href="http://al.water.usgs.gov/" title="Alabama" />
        <area alt="Pennsylvania" shape="poly" coords="146,40,162,39,164,47,148,50" href="http://pa.water.usgs.gov/" title="Pennsylvania" />
        <area alt="West Virginia" shape="poly" coords="143,50,154,50,149,60,142,61,140,56" href="http://wv.water.usgs.gov/" title="West Virginia" />
        <area alt="Georgia" shape="poly" coords="131,74,139,74,152,89,150,92,137,93" href="http://ga.water.usgs.gov/" title="Georgia" />
        <area alt="Florida" shape="poly" coords="128,93,155,94,162,115,152,120,140,100,129,99" href="http://fl.water.usgs.gov/" title="Florida" />
        <area alt="Caribbean" shape="poly" coords="105,111,134,103,147,120,100,132" href="http://pr.water.usgs.gov/" title="Caribbean" />
        <area alt="Alaska" shape="poly" coords="1,85,34,96,37,127,1,120" href="http://alaska.usgs.gov/science/water/index.php" title="Alaska" />
        <area alt="Hawaii" shape="poly" coords="45,101,77,118,68,131,38,116" href="http://hi.water.usgs.gov/" class="." title="Hawaii" />
        <area alt="New York" shape="poly" coords="146,33,158,23,166,23,168,40,162,38,146,39" href="http://ny.water.usgs.gov/" title="New York" />
        <area alt="Vermont" shape="poly" coords="151,14,166,16,171,21,170,30,168,30,167,22,150,22" href="http://vt.water.usgs.gov/" title="Vermont" />
        <area alt="New Hampshire" shape="poly" coords="153,4,169,4,175,29,171,30,171,21,167,15,151,13" href="http://nh.water.usgs.gov/" title="New Hampshire" />
        <area alt="Maine" shape="poly" coords="172,6,189,7,188,17,176,26" href="http://me.water.usgs.gov/" title="Maine" />
        <area alt="Massachusettes" shape="poly" coords="185,19,200,19,199,27,186,27,179,28,175,32,175,34,168,34,169,31,176,29,178,25" href="http://ma.water.usgs.gov/" title="Massachusettes" />
        <area alt="South Carolina" shape="poly" coords="141,73,167,77,162,91,151,86" href="http://sc.water.usgs.gov/" title="South Carolina" />
        <area alt="North Carolina" shape="poly" coords="144,65,164,63,168,67,166,75,140,72" href="http://nc.water.usgs.gov/" title="North Carolina" />
        <area alt="Rhode Island" shape="poly" coords="177,30,182,28,196,28,196,35,177,35,175,37,175,34" href="http://ma.water.usgs.gov/" title="Rhode Island" />
        <area alt="Virginia" shape="poly" coords="143,62,149,60,155,51,160,52,165,62,144,64" href="http://va.water.usgs.gov/" title="Virginia" />
        <area alt="Connecticut" shape="poly" coords="169,35,173,37,176,36,178,35,195,36,190,45,174,44,169,39" href="http://ct.water.usgs.gov/" title="Connecticut" />
        <area alt="New Jersey" shape="poly" coords="164,40,171,44,183,46,181,51,167,52,163,49,166,47" href="http://nj.water.usgs.gov/" title="New Jersey" />
        <area alt="Maryland-Delaware-D.C." shape="poly" coords="164,52,179,53,193,51,188,76,168,65" href="http://md.water.usgs.gov/" title="Maryland-Delaware-D.C." />
        </map>
        
        <a name="skipusgsstates"></a>
</td>
<!-- END left side bar section --> 

<!-- START main body -->
<td id="mainbody" >

<?php
/* display page content */

echo "<h1>USGS Research: PAHs and Coal-Tar-Based Pavement Sealcoat<br>Photo Gallery</h1>\n<hr>\n";

$count=1;
echo "<table class=\"gallery\">\n";

foreach ($xml->picture as $thispicture) {  

	$base = (string) $thispicture->filename;
	$thumbnail = $base."_tn.jpg";
	$mediumpic = $base."_med.jpg";
	if (file_exists($thumbnail)) {
	
		list($width, $height, $type, $attr) = getimagesize($thumbnail);	
		$alt= htmlentities( $thispicture->caption);
		
			if ($count == 1){echo "<tr>\n";}
		
			if (file_exists($mediumpic)) {
				echo "<td><a href=\"photodetail.php?photo=$base\"><img src=\"$thumbnail\" $attr alt=\"$alt\" title=\"$alt\" class=\"shadow\"></a>\n<p><a class=\"subtle\" href=\"photodetail.php?photo=$base\"> ";
				echo htmlentities( $thispicture->title);
				echo "</a></p></td> \n";
			} else {
				echo "<td><img src=\"$thumbnail\" $attr alt=\"$alt\" title=\"$alt\" class=\"shadow\">\n<p>";
				echo htmlentities( $thispicture->title);
				echo "</p></td> \n";
			}
			
			if ($count == 3){echo "</tr>\n";}
			
		$count++;
		if ($count > 3){$count=1;}	
		}	
	
}
if ($count != 1){echo "</tr>\n";}
echo "</table>";
?>
</td>
<!-- END main body -->

</tr></table> 
  
  <p style="font-size:90%">Some USGS publications on PAHs and coal-tar-based pavement sealant have been subject to Information Quality Act correction requests.  USGS Information Quality Guidelines, the correction requests, and USGS responses can be found at:  <a href="http://tx.usgs.gov/infodata/infosealcoat.html">http://tx.usgs.gov/infodata/infosealcoat.html</a></p>

<?php
include ($_SERVER['DOCUMENT_ROOT'].'/includes/footer.php');

?>

  

  
</body>
</html>
