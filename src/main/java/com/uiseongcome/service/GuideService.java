package com.uiseongcome.service;

import com.uiseongcome.repository.GuideInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GuideService {
    private final GuideInfoRepository guideInfoRepository;

}
