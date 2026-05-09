<?php
class HomeController extends Controller {
    public function index() {
        $crewModel = $this->model("Crew");
        $data["crew"] = $crewModel->getCrew();
        $this->view("home", $data);
    }
}
