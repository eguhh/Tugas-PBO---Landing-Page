<?php
class Controller {
    public function view($view, $data = []) {
        extract($data);
        require_once "views/header.php";
        require_once "views/$view.php";
        require_once "views/footer.php";
    }

    public function model($model) {
        require_once "models/$model.php";
        return new $model;
    }
}
