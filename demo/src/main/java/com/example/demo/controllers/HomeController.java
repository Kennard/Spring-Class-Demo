package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
// URLS that are not API endpoints.
     @GetMapping(value = {"/", "/pastComic", "/currentComic"})
     public String index() {
         return "index";
    }
}
