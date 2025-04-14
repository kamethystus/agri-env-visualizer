package com.api.sensor_data.controller.sync;

import com.api.sensor_data.service.sync.SyncService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sync")
public class SyncController {

    private final SyncService syncService;

    @GetMapping
    public String sync() {
        return syncService.sync();
    }
}
