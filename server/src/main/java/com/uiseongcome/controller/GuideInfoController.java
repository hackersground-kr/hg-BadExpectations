package com.uiseongcome.controller;

import com.uiseongcome.domain.User;
import com.uiseongcome.dto.GuideDto;
import com.uiseongcome.dto.GuideListRes;
import com.uiseongcome.dto.GuideWithIdRes;
import com.uiseongcome.service.GuideService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PostMapping("/applicant/{guide_id}/{user_id}")
    public void apply(@PathVariable("guide_id") Long guideId, @PathVariable("user_id") String userId){
        guideService.apply(guideId, userId);
    }

    @GetMapping("/applicant/{guide_id}")
    public List<User> getApplicant(@PathVariable("guide_id") Long guideId){
        return guideService.getApplicant(guideId);
    }
}
