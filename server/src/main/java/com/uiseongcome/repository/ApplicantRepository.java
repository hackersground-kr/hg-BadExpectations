package com.uiseongcome.repository;

import com.uiseongcome.domain.Applicant;
import com.uiseongcome.domain.GuideInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplicantRepository extends JpaRepository<Applicant, Long> {
    List<Applicant> findByGuideInfo(GuideInfo guideInfo);
}
