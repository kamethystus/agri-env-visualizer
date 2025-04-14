package com.api.sensor_data.service.firebase;

import com.api.sensor_data.service.sheet.SheetDTO;
import lombok.Value;

@Value
public class FirebaseEntity {
    String time;
    Double distance;
    Double light;
    Double temperature;
    Double humidity;

    public FirebaseEntity(String time, Double distance, Double light, Double temperature, Double humidity) {
        this.time = time;
        this.distance = distance;
        this.light = light;
        this.temperature = temperature;
        this.humidity = humidity;
    }

    public FirebaseEntity(SheetDTO dto) {
        this.time = dto.getTime();
        this.distance = dto.getDistance();
        this.light = dto.getLight();
        this.temperature = dto.getTemperature();
        this.humidity = dto.getHumidity();
    }
}
