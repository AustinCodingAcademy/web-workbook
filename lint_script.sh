#!/bin/bash
echo ===================CSS ERRORS START======================
echo ===================CSS ERRORS START======================
stylelint ./**/*.css 
echo ===================CSS ERRORS END======================
echo ===================CSS ERRORS END======================
echo 
echo 
echo ===================JS ERRORS START======================
echo ===================JS ERRORS START======================
eslint . 
echo ===================JS ERRORS END======================
echo ===================JS ERRORS END======================
echo 
echo 
echo ===================HTML ERRORS START======================
echo ===================HTML ERRORS START======================
htmllint {*.html,./**/*.html}
echo ===================HTML ERRORS END======================
echo ===================HTML ERRORS END======================

