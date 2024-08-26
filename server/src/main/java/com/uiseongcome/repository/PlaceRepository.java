package com.uiseongcome.repository;

import com.uiseongcome.domain.GuideInfo;
import com.uiseongcome.domain.Place;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaceRepository extends JpaRepository<Place, Long> {
    List<Place> findByGuideInfo(GuideInfo guideInfo);
}
