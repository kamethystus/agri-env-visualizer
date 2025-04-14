package com.api.sensor_data.service.firebase;


import com.api.sensor_data.service.sheet.SheetDTO;
import com.api.sensor_data.service.sheet.SheetService;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;

@Service
@RequiredArgsConstructor
public class FirebaseService {

    private final Firestore firestore;

    private final String SENSOR_DATA = "sensor-data";

    public String save(List<SheetDTO> dtoList) {
        List<FirebaseEntity> entityList = dtoList.stream()
                .map(FirebaseEntity::new)
                .toList();
        try {
            for (FirebaseEntity entity : entityList) {
                ApiFuture<WriteResult> setDocRef = firestore.collection(SENSOR_DATA).document(entity.getTime()).set(entity);
            }
        } catch (CancellationException e) {
            return "Error: " + e.getMessage();
        }
        return "";
    }
}
