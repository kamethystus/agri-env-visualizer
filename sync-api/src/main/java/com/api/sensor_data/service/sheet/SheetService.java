package com.api.sensor_data.service.sheet;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SheetService {

    @Value("${sheet.api.uri}")
    private String sheetURI;

    public List<SheetDTO> fetchData(){

        RestClient restClient = RestClient.create();
        SheetResponse sheetResponse = restClient.get()
                .uri(sheetURI)
                .retrieve()
                .body(SheetResponse.class);

        if (sheetResponse == null || sheetResponse.getValues() == null) {
            return List.of();
        }

        return sheetResponse.getValues().stream()
                .skip(1)
                .map(SheetDTO::fromList)
                .collect(Collectors.toList());
    }
}
