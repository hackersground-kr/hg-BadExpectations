package com.uiseongcome.service;

import com.uiseongcome.domain.*;
import com.uiseongcome.dto.GuideDto;
import com.uiseongcome.dto.GuideListRes;
import com.uiseongcome.dto.GuideWithIdRes;
import com.uiseongcome.dto.PlaceDto;
import com.uiseongcome.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GuideService {
    private final GuideInfoRepository guideInfoRepository;
    private final UserRepository userRepository;
    private final PlaceRepository placeRepository;
    private final FileRepository fileRepository;
    private final ApplicantRepository applicantRepository;

    @Transactional(rollbackFor = Exception.class)
    public void append(GuideDto guideDto){
        User user = userRepository.findById(guideDto.userId()).get();
        GuideInfo guideInfo = guideInfoRepository.save(guideDto.toEntity(user));
        placeRepository.saveAll(guideDto.places().stream()
                .map(PlaceDto::toEntity)
                .toList());
        fileRepository.saveAll(guideDto.files().stream().map(f -> f.toEntity(guideInfo)).toList());
    }

    @Transactional(readOnly = true)
    public List<GuideListRes> getList(){
        List<GuideInfo> guideInfos = guideInfoRepository.findAll();
        return guideInfos.stream()
                .map(g -> GuideListRes.of(
                        g, placeRepository.findByGuideInfo(g)))
                .toList();

    }

    @Transactional(readOnly = true)
    public GuideWithIdRes get(Long id){
        GuideInfo guideInfo = guideInfoRepository.findById(id).get();
        List<Place> places = placeRepository.findByGuideInfo(guideInfo);
        List<File> files = fileRepository.findByGuideInfo(guideInfo);
        return GuideWithIdRes.of(guideInfo, places, files);
    }

    @Transactional(rollbackFor = Exception.class)
    public void apply(Long id, String userId){
        GuideInfo guide = guideInfoRepository.findById(id).get();
        User user = userRepository.findById(userId).get();
        applicantRepository.save(Applicant.builder()
                .guideInfo(guide)
                .user(user)
                .build());
    }

    @Transactional(readOnly = true)
    public List<User> getApplicant(Long guideId){
        GuideInfo guide = guideInfoRepository.findById(guideId).get();
        return applicantRepository.findByGuideInfo(guide).stream().map(Applicant::getUser).toList();
    }
}
