package com.uiseongcome.repository;

import com.uiseongcome.domain.File;
import com.uiseongcome.domain.GuideInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FileRepository extends JpaRepository<File, Long> {
    List<File> findByGuideInfo(GuideInfo guideInfo);
}
