package com.uiseongcome.dto;

import com.uiseongcome.domain.File;
import com.uiseongcome.domain.GuideInfo;

public record FileDto(
        String path
) {
    public File toEntity(GuideInfo guideInfo){
        return File.builder()
                .path(path)
                .guideInfo(guideInfo)
                .build();
    }

}
