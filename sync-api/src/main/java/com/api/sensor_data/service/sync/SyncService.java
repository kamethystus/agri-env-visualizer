package com.api.sensor_data.service.sync;

import com.api.sensor_data.service.firebase.FirebaseService;
import com.api.sensor_data.service.sheet.SheetDTO;
import com.api.sensor_data.service.sheet.SheetService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SyncService {

    private final SheetService sheetService;
    private final FirebaseService firebaseService;

    public String sync() {
        List<SheetDTO> dtoList = sheetService.fetchData();
        return firebaseService.save(dtoList);
    }
}
