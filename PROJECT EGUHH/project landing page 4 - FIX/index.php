<?php
require_once "core/Controller.php";
require_once "controllers/HomeController.php";

$home = new HomeController();
$home->index();
