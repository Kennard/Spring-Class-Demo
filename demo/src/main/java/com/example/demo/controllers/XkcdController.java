package com.example.demo.controllers;

import com.example.demo.domain.XkcdResponse;
import com.example.demo.service.xkcd.XkcdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class XkcdController {

    @Autowired
    private XkcdService xkcdService;

    @GetMapping("/current")
    public XkcdResponse getComic(){
        return xkcdService.getCurrentComic();
    }

    @GetMapping("/past/{comicNum}")
    public XkcdResponse getPathVarPastComic(@PathVariable String comicNum){
        return xkcdService.getPastComic(comicNum);
    }

    @GetMapping("/pastOptional")
    public XkcdResponse getPastComicRequestParam(@RequestParam("comicNum") String comicNum){
        return xkcdService.getPastComic(comicNum);
    }
}
