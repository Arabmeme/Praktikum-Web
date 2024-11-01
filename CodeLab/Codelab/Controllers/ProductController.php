<?php

namespace Controllers;

include "Traits/ResponseFormatter.php";
include "Controllers/Controller.php";

use Traits\ResponseFormatter;

class ProductController extends Controller{
    use ResponseFormatter;

    public function __construct(){
        $this->controllerName = "Get ALL Product";
        $this->controllerMethod = "GET";
    }

    public function getALLProduct(){
        $dummyData = [
            "Air Mineral",
            "Kebab",
            "Spagetti",
            "Jus Jambu"
        ];

        $response = [
            "controller_atribute" => $this->getControllerAttribute(),
            "product" => $dummyData
        ];

        return $this->responseFormatter(200, "Success", $response);
    }
}