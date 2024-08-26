package com.uiseongcome.controller;

import com.uiseongcome.dto.GuideDto;
import com.uiseongcome.dto.GuideListRes;
import com.uiseongcome.dto.GuideWithIdRes;
import com.uiseongcome.service.GuideService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Validated
@RestController
@RequiredArgsConstructor
@RequestMapping("/guide")
public class GuideInfoController {
    private final GuideService guideService;

    @PostMapping
    public void write(@RequestBody GuideDto guideDto){
        guideService.append(guideDto);
    }

    @GetMapping("/list")
    public List<GuideListRes> getList(){
        return guideService.getList();
    }

    @GetMapping("/{id}")
    public GuideWithIdRes get(@PathVariable Long id){
        return guideService.get(id);
    }
}
